// app/api/analyze-verb/route.ts
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
  present: VerbConjugations;
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
    name: "Type 1",
    description: "Type 1 verbs always end with 2 vowels",
    endings: ["aa", "ää", "ea", "eä", "ia", "iä", "oa", "oä", "ua", "uä", "yä"],
    rules:
      "Remove the last letter. Add suffix. KPT: minä, sinä, me, te = Strong becomes weak; hän, he = Strong remains strong.",
  },
  {
    type: 2,
    name: "Type 2",
    description: "Type 2 verbs always end with da/dä",
    endings: ["da", "dä"],
    rules: "Remove da/dä. Add suffix (except for hän).",
  },
  {
    type: 3,
    name: "Type 3",
    description: "Type 3 verbs end with la/lä, ra/rä, na/nä, or sta/stä",
    endings: ["lla", "llä", "rra", "rrä", "nna", "nnä", "sta", "stä"],
    rules: "Remove last 2 letters. Weak becomes strong. Add e + suffix.",
  },
  {
    type: 4,
    name: "Type 4",
    description: "Type 4 verbs end with ta/tä preceded by a vowel",
    endings: ["ata", "ätä", "ota", "ötä", "uta", "ytä"],
    rules:
      "Remove t. Weak becomes strong. Add suffix. Hän: add a/ä if not already double.",
  },
  {
    type: 5,
    name: "Type 5",
    description: "Type 5 verbs end with ita/itä",
    endings: ["ita", "itä"],
    rules: "Remove last a/ä. Add se + suffix.",
  },
  {
    type: 6,
    name: "Type 6",
    description: "Type 6 verbs end with eta/etä",
    endings: ["eta", "etä"],
    rules: "Remove ta/tä. Add ne + suffix.",
  },
  {
    type: "irregular",
    name: "Irregular",
    description: "Verbs that do not follow standard patterns",
    endings: [],
    rules: "Irregular verbs.",
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
    // const verbType = isFinnish ? detectVerbType(verb) : "Type unknown";

    const prompt = `
      Analyze the ${isFinnish ? "Finnish" : "English"} verb: "${verb}".

      Please provide ALL of the following in JSON format:
      1. The ${isFinnish ? "English translation" : "Finnish translation"}
      2. Verb type (Type 1–6) if Finnish input, or the likely Finnish type if English input
      3. The rules/characteristics of that verb type
      4. Present tense conjugations (positive) for: minä, sinä, hän, me, te, he — each with one short example sentence
      5. Negative present tense conjugations for: minä, sinä, hän, me, te, he — each with one short example sentence
      6. Any important notes about irregularities

      Format the response as JSON with the following EXACT structure:
      {
        "verb": "Finnish verb",
        "english": "english translation",
        "type": "Type number",
        "rules": "short explanation",
        "tenses": {
          "present": {
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

      if (!jsonString) {
        throw new Error("No JSON response from OpenAI");
      }

      const result: VerbAnalysis = JSON.parse(jsonString);
      // Override type with programmatic detection if input is Finnish
      if (isFinnish) {
        const verbTypeObj = detectVerbType(result.verb);
        result.type = verbTypeObj.name;
        result.rules = verbTypeObj.rules;
      }
      return NextResponse.json(result);
    } catch (parseError) {
      console.error("Error parsing OpenAI response:", parseError);
      console.error("Response text:", responseText);

      // fallback data (example: olla)
      const fallback: VerbAnalysis = {
        verb: "olla",
        english: "to be",
        type: "Type irregular",
        rules: "Irregular verb, does not follow standard patterns",
        tenses: {
          present: {
            minä: { form: "olen", example: "Minä olen kotona." },
            sinä: { form: "olet", example: "Sinä olet ystäväni." },
            hän: { form: "on", example: "Hän on opettaja." },
            me: { form: "olemme", example: "Me olemme Suomessa." },
            te: { form: "olette", example: "Te olette opiskelijoita." },
            he: { form: "ovat", example: "He ovat iloisia." },
          },
          negative: {
            minä: { form: "en ole", example: "Minä en ole kotona." },
            sinä: { form: "et ole", example: "Sinä et ole ystäväni." },
            hän: { form: "ei ole", example: "Hän ei ole opettaja." },
            me: { form: "emme ole", example: "Me emme ole Suomessa." },
            te: { form: "ette ole", example: "Te ette ole opiskelijoita." },
            he: { form: "eivät ole", example: "He eivät ole iloisia." },
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
