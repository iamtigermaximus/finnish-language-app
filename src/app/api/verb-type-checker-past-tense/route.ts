// app/api/analyze-verb-past/route.ts
import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

interface VerbConjugationWithExamples {
  form: string;
  example: string;
}

interface VerbConjugations {
  minä: VerbConjugationWithExamples;
  sinä: VerbConjugationWithExamples;
  hän: VerbConjugationWithExamples;
  me: VerbConjugationWithExamples;
  te: VerbConjugationWithExamples;
  he: VerbConjugationWithExamples;
}

interface VerbTenses {
  past: VerbConjugations;
  negative: VerbConjugations;
}

interface VerbAnalysis {
  verb: string;
  english: string;
  type: string;
  rules: string;
  tenses: VerbTenses;
  notes: string;
  isFinnishInput: boolean;
}

interface VerbType {
  type: number | "irregular";
  name: string;
  description: string;
  endings: string[];
  rules: string;
}

const verbTypes: VerbType[] = [
  {
    type: 1,
    name: "Verb Type 1 (Past Tense)",
    description: "The most common verb type ending in two vowels",
    endings: [
      "-aa",
      "-ea",
      "-eä",
      "-ia",
      "-iä",
      "-oa",
      "-ua",
      "-yä",
      "-ää",
      "-öä",
    ],

    rules:
      "Remove the last letter. Add -i- before personal endings. KPT: minä, sinä, me, te = Strong becomes weak; hän, he = Strong remains strong.Negative:Use the stem without the final vowel + -nut/nyt (singular) or -neet (plural) with the negative verb.",
  },
  {
    type: 2,
    name: "Verb Type 2 (Past Tense)",
    description: "Verbs ending in -da/-dä",
    endings: ["-da", "-dä"],
    rules:
      "Remove -da/-dä to get stem. Add -i- before personal endings. Consonant gradation does not occur.Negative: Use the stem (without -da/-dä) + -nut/nyt (singular) or -neet (plural) with the negative verb.",
  },
  {
    type: 3,
    name: "Verb Type 3 (Past Tense)",
    description: "Verbs ending in -lla/-llä, -nna/-nnä, -rra/-rrä, -sta/-stä",
    endings: ["-lla", "-llä", "-nna", "-nnä", "-rra", "-rrä", "-sta", "-stä"],
    rules:
      "Remove the last two letters. Add -i- before personal endings. Weak becomes strong if applicable.Negative:Use the stem (without the last two letters) + -lut/lyt (singular) or -leet (plural) with the negative verb.",
  },
  {
    type: 4,
    name: "Verb Type 4 (Past Tense)",
    description: "Verbs ending in -ata/-ätä, -ota/-ötä, -uta/-ytä",
    endings: ["-ata", "-ätä", "-ota", "-ötä", "-uta", "-ytä"],
    rules:
      "Remove -ta/-tä and add -si- before personal endings. Consonant gradation often occurs.Negative: Use the stem (without -ta/-tä) + -nnut/nnyt (singular) or -nneet (plural) with the negative verb.",
  },
  {
    type: 5,
    name: "Verb Type 5 (Past Tense)",
    description: "Verbs ending in -ita/-itä",
    endings: ["-ita", "-itä"],
    rules:
      "Remove -ta/-tä and add -tsi- before personal endings.Negative:Use the stem (without -ta/-tä) + -nnut/nnyt (singular) or -nneet (plural) with the negative verb.",
  },
  {
    type: 6,
    name: "Verb Type 6 (Past Tense)",
    description: "Verbs ending in -eta/-etä",
    endings: ["-eta", "-etä"],
    rules:
      "Remove -ta/-tä and add -si- before personal endings.Negative:Use the stem (without -ta/-tä) + -nnut/nnyt (singular) or -nneet (plural) with the negative verb.",
  },
  {
    type: "irregular",
    name: "Irregular Verbs",
    description: "Verbs that do not follow standard patterns",
    endings: [],
    rules: "Irregular verbs: past tense may not follow predictable patterns.",
  },
];

function isFinnishInput(verb: string): boolean {
  const finnishPattern = /[äöå]/i;
  const finnishVerbEndings =
    /(aa|ää|ea|eä|ia|iä|oa|oä|ua|uä|yä|ya|da|dä|ta|tä|la|lä|na|nä|ra|rä|sa|sä|ma|mä|pa|pä|va|vä)$/i;

  return finnishPattern.test(verb) || finnishVerbEndings.test(verb);
}

function detectVerbType(verb: string): VerbType {
  for (const vt of verbTypes) {
    for (const ending of vt.endings) {
      if (verb.endsWith(ending)) {
        return vt;
      }
    }
  }
  return verbTypes.find((v) => v.type === "irregular")!;
}

export async function POST(request: NextRequest) {
  try {
    const { verb } = await request.json();

    if (!verb) {
      return NextResponse.json({ error: "Verb is required" }, { status: 400 });
    }

    const isFinnish = isFinnishInput(verb);

    const prompt = `
      Analyze the ${isFinnish ? "Finnish" : "English"} verb: "${verb}".

      Please provide ALL of the following in JSON format:
      1. The ${isFinnish ? "English translation" : "Finnish translation"}
      2. Verb type (Type 1–6) if Finnish input, or the likely Finnish type if English input
      3. The rules/characteristics of that verb type
      4. Past tense conjugations (positive) for: minä, sinä, hän, me, te, he — each with one short example sentence
      5. Negative past tense conjugations for: minä, sinä, hän, me, te, he — each with one short example sentence
      6. Any important notes about irregularities

      Format the response as JSON with the following EXACT structure:
      {
        "verb": "Finnish verb",
        "english": "english translation",
        "type": "Type number",
        "rules": "short explanation",
        "tenses": {
          "past": {
            "minä": { "form": "conjugation", "example": "short Finnish sentence" },
            "sinä": { "form": "conjugation", "example": "short Finnish sentence" },
            "hän": { "form": "conjugation", "example": "short Finnish sentence" },
            "me": { "form": "conjugation", "example": "short Finnish sentence" },
            "te": { "form": "conjugation", "example": "short Finnish sentence" },
            "he": { "form": "conjugation", "example": "short Finnish sentence" }
          },
          "negative": {
            "minä": { "form": "conjugation", "example": "short Finnish sentence" },
            "sinä": { "form": "conjugation", "example": "short Finnish sentence" },
            "hän": { "form": "conjugation", "example": "short Finnish sentence" },
            "me": { "form": "conjugation", "example": "short Finnish sentence" },
            "te": { "form": "conjugation", "example": "short Finnish sentence" },
            "he": { "form": "conjugation", "example": "short Finnish sentence" }
          }
        },
        "notes": "any important notes",
        "isFinnishInput": ${isFinnish}
      }

      IMPORTANT: Return ONLY the JSON object, no extra text.
    `;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are a helpful assistant specialized in Finnish language education. Provide accurate Finnish verb conjugations, rules, and example usage sentences. Return ONLY valid JSON with the exact structure specified.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.6,
      max_tokens: 1500,
    });

    const responseText = completion.choices[0].message.content;

    try {
      const jsonMatch = responseText?.match(/\{[\s\S]*\}/);
      const jsonString = jsonMatch ? jsonMatch[0] : responseText;

      if (!jsonString) throw new Error("No JSON response from OpenAI");

      const result: VerbAnalysis = JSON.parse(jsonString);

      if (isFinnish) {
        const verbTypeObj = detectVerbType(result.verb);
        result.type = verbTypeObj.name;
        result.rules = verbTypeObj.rules;
      }

      return NextResponse.json(result);
    } catch (parseError) {
      console.error("Error parsing OpenAI response:", parseError);
      console.error("Response text:", responseText);

      const fallback: VerbAnalysis = {
        verb: "olla",
        english: "to be",
        type: "Type irregular",
        rules: "Irregular verb, does not follow standard patterns",
        tenses: {
          past: {
            minä: { form: "olin", example: "Minä olin kotona." },
            sinä: { form: "olit", example: "Sinä olit ystäväni." },
            hän: { form: "oli", example: "Hän oli opettaja." },
            me: { form: "olimme", example: "Me olimme Suomessa." },
            te: { form: "olitte", example: "Te olitte opiskelijoita." },
            he: { form: "olivat", example: "He olivat iloisia." },
          },
          negative: {
            minä: { form: "en ollut", example: "Minä en ollut kotona." },
            sinä: { form: "et ollut", example: "Sinä et ollut ystäväni." },
            hän: { form: "ei ollut", example: "Hän ei ollut opettaja." },
            me: { form: "emme olleet", example: "Me emme olleet Suomessa." },
            te: {
              form: "ette olleet",
              example: "Te ette olleet opiskelijoita.",
            },
            he: { form: "eivät olleet", example: "He eivät olleet iloisia." },
          },
        },
        notes:
          "The verb 'olla' is the most common Finnish verb. Used for existence, identity, and possession.",
        isFinnishInput: true,
      };

      return NextResponse.json(fallback);
    }
  } catch (error) {
    console.error("Error calling OpenAI API:", error);
    return NextResponse.json(
      { error: "Failed to analyze verb" },
      { status: 500 }
    );
  }
}
