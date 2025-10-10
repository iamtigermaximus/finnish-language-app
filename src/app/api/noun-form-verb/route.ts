// app/api/analyze-verbal-noun/route.ts
import { NextRequest, NextResponse } from "next/server";
// import OpenAI from 'openai';
import Groq from "groq-sdk";

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

interface AnalyzeVerbalNounRequest {
  verb: string;
}

interface VerbalNounForms {
  verb: string;
  verbalNoun: string;
  rule: string;
}

interface VerbalNounAnalysis {
  verb: string;
  english: string;
  verbalNoun: VerbalNounForms;
  usage: string[];
  examples: string[];
  translations: string[];
  notes: string;
  isFinnishInput: boolean;
}

function isFinnishInput(verb: string): boolean {
  const finnishPattern = /[äöå]/i;
  return finnishPattern.test(verb);
}

export async function POST(request: NextRequest) {
  try {
    const { verb }: AnalyzeVerbalNounRequest = await request.json();

    if (!verb) {
      return NextResponse.json({ error: "Verb is required" }, { status: 400 });
    }

    const isFinnish = isFinnishInput(verb);

    // Return fallback data if OpenAI API key is not set
    if (!process.env.GROQ_API_KEY) {
      const fallbackResult = getFallbackVerbalNoun(verb);
      return NextResponse.json(fallbackResult);
    }

    const prompt = `
      Analyze the ${isFinnish ? "Finnish" : "English"} verb: "${verb}".
      
      Please provide ALL of the following in JSON format:
      1. The ${isFinnish ? "English translation" : "Finnish translation"}
      2. The most common verbal noun form (nomina verbalia)
      3. The rule that applies to this verb's verbal noun formation
      4. The main usage contexts for this verbal noun (array)
      5. Example sentences using the verbal noun form (array)
      6. English translations of the example sentences (array)
      7. Any important notes about this verbal noun's usage
      
      Format the response as JSON with the following EXACT structure:
      {
        "verb": "Finnish verb",
        "english": "english translation",
        "verbalNoun": {
          "verb": "base verb form",
          "verbalNoun": "verbal noun form",
          "rule": "formation rule"
        },
        "usage": ["usage context 1", "usage context 2"],
        "examples": ["example sentence 1", "example sentence 2"],
        "translations": ["translation 1", "translation 2"],
        "notes": "any important notes",
        "isFinnishInput": ${isFinnish}
      }
      
      IMPORTANT: Return ONLY the JSON object, no additional text or explanation.
    `;

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
          content:
            "You are a helpful assistant specialized in Finnish language education. Provide accurate Finnish verbal noun forms and translations. Return ONLY valid JSON with the exact structure specified.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0,
      max_tokens: 1000,
    });

    const responseText = completion.choices[0]?.message?.content;

    if (!responseText) {
      throw new Error("No response from OpenAI");
    }

    try {
      const jsonMatch = responseText.match(/\{[\s\S]*\}/);
      const jsonString = jsonMatch ? jsonMatch[0] : responseText;

      if (!jsonString) {
        throw new Error("No JSON response from OpenAI");
      }

      const result = JSON.parse(jsonString);
      return NextResponse.json(result);
    } catch (parseError) {
      console.error("Error parsing OpenAI response:", parseError);
      console.error("Response text:", responseText);

      // Return fallback data if parsing fails
      const fallbackResult = getFallbackVerbalNoun(verb);
      return NextResponse.json(fallbackResult);
    }
  } catch (error) {
    console.error("Error calling OpenAI API:", error);

    // Return fallback data if API call fails
    const { verb } = await request.json();
    const fallbackResult = getFallbackVerbalNoun(verb);
    return NextResponse.json(fallbackResult);
  }
}

// Helper function to get fallback data
function getFallbackVerbalNoun(verb: string): VerbalNounAnalysis {
  const fallbackVerbs: Record<string, VerbalNounAnalysis> = {
    opiskella: {
      verb: "opiskella",
      english: "to study",
      verbalNoun: {
        verb: "opiskella",
        verbalNoun: "opiskeleminen",
        rule: "-minen nouns: add -minen to the verb stem",
      },
      usage: ["Action or process", "General activity", "Abstract concept"],
      examples: [
        "Opiskeleminen on tärkeää.",
        "Pidän opiskelemisesta.",
        "Opiskeleminen vaatii kärsivällisyyttä.",
      ],
      translations: [
        "Studying is important.",
        "I enjoy studying.",
        "Studying requires patience.",
      ],
      notes:
        "The -minen form is the most common verbal noun type in Finnish, indicating the action or process itself.",
      isFinnishInput: true,
    },
    lukea: {
      verb: "lukea",
      english: "to read",
      verbalNoun: {
        verb: "lukea",
        verbalNoun: "lukeminen",
        rule: "-minen nouns: add -minen to the verb stem (consonant gradation: k→ke)",
      },
      usage: ["Action or process", "Leisure activity", "Educational context"],
      examples: [
        "Lukeminen on hauskaa.",
        "Lukeminen parantaa sanavarastoasi.",
        "Hän pitää lukemisesta ennen nukkumaanmenoa.",
      ],
      translations: [
        "Reading is fun.",
        "Reading improves your vocabulary.",
        "He/she enjoys reading before bedtime.",
      ],
      notes: "Lukeminen refers to the activity of reading in general.",
      isFinnishInput: true,
    },
    tehdä: {
      verb: "tehdä",
      english: "to do/make",
      verbalNoun: {
        verb: "tehdä",
        verbalNoun: "tekeminen",
        rule: "-minen nouns: add -minen to the verb stem (consonant gradation: d→te)",
      },
      usage: ["Action or process", "General activity", "Product creation"],
      examples: [
        "Tekeminen on parempaa kuin tekemättömyys.",
        "Kaikki tekeminen vaatii aikaa.",
        "Hän pitää käsin tekemisestä.",
      ],
      translations: [
        "Doing is better than not doing.",
        "All doing requires time.",
        "He/she enjoys handmade creation.",
      ],
      notes:
        "Tekeminen can refer to both the process of doing/making and the things that are made.",
      isFinnishInput: true,
    },
    kirjoittaa: {
      verb: "kirjoittaa",
      english: "to write",
      verbalNoun: {
        verb: "kirjoittaa",
        verbalNoun: "kirjoittaminen",
        rule: "-minen nouns: add -minen to the verb stem",
      },
      usage: ["Action or process", "Creative activity", "Professional work"],
      examples: [
        "Kirjoittaminen on taidetta.",
        "Ammatillinen kirjoittaminen vaatii harjaantumista.",
        "Hän opettaa kirjoittamista yliopistossa.",
      ],
      translations: [
        "Writing is an art.",
        "Professional writing requires practice.",
        "He/she teaches writing at the university.",
      ],
      notes:
        "Kirjoittaminen refers to the activity of writing, while 'kirjoitus' would be a specific piece of writing.",
      isFinnishInput: true,
    },
  };

  const lowerVerb = verb.toLowerCase();

  // Return specific fallback if available, otherwise return a generic response
  if (fallbackVerbs[lowerVerb]) {
    return fallbackVerbs[lowerVerb];
  }

  // Generic fallback for unknown verbs
  return {
    verb: verb,
    english: `to ${verb}`,
    verbalNoun: {
      verb: verb,
      verbalNoun: `${verb}minen`,
      rule: "-minen nouns: add -minen to the verb stem",
    },
    usage: ["General action or process"],
    examples: [`${verb}minen on tärkeää.`, `Pidän ${verb}misesta.`],
    translations: [
      `${verb.charAt(0).toUpperCase() + verb.slice(1)}ing is important.`,
      `I enjoy ${verb}ing.`,
    ],
    notes:
      "This is a generated example. The actual verbal noun form may vary based on verb type and consonant gradation rules.",
    isFinnishInput: isFinnishInput(verb),
  };
}
