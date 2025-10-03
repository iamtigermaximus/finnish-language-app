// app/api/analyze-illative/route.ts
import { NextRequest, NextResponse } from "next/server";
import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

interface IllativeAnalysis {
  noun: string;
  english: string;
  illative: {
    singular: string;
    illative: string;
    illativePlural: string;
    rule: string;
  };
  usage: string[];
  examples: string[];
  translations: string[];
  illativePluralExamples: string[];
  illativePluralTranslations: string[];
  notes: string;
  isFinnishInput: boolean;
  analysisNotes?: string[];
}

export async function POST(request: NextRequest) {
  try {
    const { noun }: { noun: string } = await request.json();
    if (!noun) {
      return NextResponse.json({ error: "Noun is required" }, { status: 400 });
    }

    const prompt = `
You are an expert Finnish linguist and teacher. Analyze this word and provide comprehensive illative case information:

WORD TO ANALYZE: "${noun}"

YOUR TASK:
1. First, determine if the word is:
   - A Finnish noun (correctly spelled)
   - An English noun that needs translation to Finnish
   - A misspelled Finnish noun (provide correction)
   - Not a valid noun

2. If it's English or misspelled, provide the CORRECT Finnish equivalent
3. Generate ACCURATE illative singular and plural forms
4. Explain the grammatical rule that applies
5. Create natural example sentences

ILLATIVE CASE RULES TO APPLY CORRECTLY:

SINGULAR ILLATIVE ENDINGS:
- Basic: -Vn (double vowel + n): talo → taloon, katu → katulle
- -seen: words ending in -s: kaupunki → kaupunkiin, lasi → lasiin  
- -hen: words with consonant gradation: käsi → käteen, vesi → veteen
- -hyn/-hön: certain words: joki → jokeen, pöytä → pöytään
- Special: meri → mereen, tuli → tuleen

PLURAL ILLATIVE ENDINGS:
- -ihin: talot → taloihin, kirjat → kirjoihin
- -siin: autot → autoihin, kadut → kaduille
- With consonant gradation: kädet → käsiin, vedet → vesiin

SPECIAL CASES TO HANDLE:

ENGLISH WORDS → FINNISH TRANSLATION:
- "car" → "auto" → illative: "autoon" (singular), "autoihin" (plural)
- "house" → "talo" → "taloon", "taloihin"
- "book" → "kirja" → "kirjaan", "kirjoihin"
- "dog" → "koira" → "koiraan", "koiriin"
- "city" → "kaupunki" → "kaupunkiin", "kaupunkeihin"

COMMON MISPRONUNCIATIONS/SPELLINGS:
- "talo" (correct) vs "talo" (typo) → "taloon", "taloihin"
- "kirja" (correct) vs "kirjä" (error) → "kirjaan", "kirjoihin"
- "katu" (correct) vs "katu" (error) → "katulle", "kaduille"

LOANWORDS:
- "auto" (car) → "autoon", "autoihin"
- "bussi" (bus) → "bussiin", "busseihin"
- "hotelli" (hotel) → "hotelliin", "hotelleihin"

RESPONSE REQUIREMENTS:
- Be 100% grammatically accurate
- Correct any spelling errors automatically  
- Provide the most common Finnish equivalent for English words
- Explain your corrections in analysisNotes
- Create natural, educational examples

Return ONLY JSON with this structure:
{
  "noun": "corrected Finnish noun",
  "english": "english translation",
  "illative": {
    "singular": "base form",
    "illative": "illative singular", 
    "illativePlural": "illative plural",
    "rule": "grammatical rule explanation"
  },
  "usage": ["usage1", "usage2"],
  "examples": ["example1", "example2"],
  "translations": ["translation1", "translation2"],
  "illativePluralExamples": ["plural example1", "plural example2"],
  "illativePluralTranslations": ["plural translation1", "plural translation2"],
  "notes": "educational notes",
  "isFinnishInput": true,
  "analysisNotes": ["correction note 1", "correction note 2"]
}

EXAMPLES OF INTELLIGENT CORRECTIONS:

Input: "car"
Output: {
  "noun": "auto",
  "english": "car",
  "illative": {
    "singular": "auto",
    "illative": "autoon", 
    "illativePlural": "autoihin",
    "rule": "Words ending in -o: add -on for illative singular, -ihin for illative plural"
  },
  "usage": ["Movement into", "Direction towards", "Destination"],
  "examples": ["Menemme autoon.", "Laitoin tavarat autoon."],
  "translations": ["We go into the car.", "I put the items in the car."],
  "illativePluralExamples": ["Lastaamme tavarat autoihin.", "Kävimme useissa autoihin."],
  "illativePluralTranslations": ["We load items into the cars.", "We visited several cars."],
  "notes": "The illative case indicates movement into or towards something.",
  "isFinnishInput": true,
  "analysisNotes": ["Translated English 'car' to Finnish 'auto'"]
}

Input: "talo" 
Output: {
  "noun": "talo",
  "english": "house",
  "illative": {
    "singular": "talo",
    "illative": "taloon",
    "illativePlural": "taloihin", 
    "rule": "Words ending in -o: add -on for illative singular, -ihin for illative plural"
  },
  "usage": ["Movement into", "Entering", "Destination"],
  "examples": ["Menemme taloon.", "Hän tuli taloon sisään."],
  "translations": ["We go into the house.", "He came into the house."],
  "illativePluralExamples": ["Kävimme kaunissa taloihin.", "Lapset juoksivat taloihin."],
  "illativePluralTranslations": ["We visited beautiful houses.", "The children ran into the houses."],
  "notes": "The illative case shows movement into buildings or enclosed spaces.",
  "isFinnishInput": true,
  "analysisNotes": []
}

Input: "kirjä"
Output: {
  "noun": "kirja",
  "english": "book",
  "illative": {
    "singular": "kirja",
    "illative": "kirjaan",
    "illativePlural": "kirjoihin",
    "rule": "Words ending in -a: add -an for illative singular, -ihin with consonant gradation for plural"
  },
  "analysisNotes": ["Corrected spelling from 'kirjä' to 'kirja'"]
}

Now analyze: "${noun}"
`;

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile", // Better model for language tasks
      messages: [
        {
          role: "system",
          content: `You are a native Finnish linguist with perfect grammar knowledge. You can:
          - Detect and correct spelling errors in Finnish words
          - Translate English words to their most common Finnish equivalents  
          - Apply Finnish illative case rules perfectly
          - Generate natural, educational example sentences
          - Explain your reasoning for any corrections
          
          You NEVER invent incorrect Finnish words or grammar. You are 100% accurate.`,
        },
        { role: "user", content: prompt },
      ],
      temperature: 0, // Maximum accuracy for grammar
      max_tokens: 2000,
    });

    const responseText = completion.choices[0]?.message?.content?.trim();

    if (!responseText) {
      throw new Error("No response from AI");
    }

    // Parse JSON response
    let result: IllativeAnalysis;
    try {
      const jsonMatch = responseText.match(/\{[\s\S]*\}/);
      if (!jsonMatch) {
        throw new Error("No JSON found in response");
      }

      result = JSON.parse(jsonMatch[0]);

      // Validate critical fields
      if (
        !result.noun ||
        !result.illative ||
        !result.illative.illative ||
        !result.illative.illativePlural
      ) {
        throw new Error("Invalid response structure");
      }
    } catch (parseError) {
      console.error("Error parsing AI response:", parseError);
      console.error("Response text:", responseText);

      // Smart fallback based on common words
      const commonFallbacks: Record<string, IllativeAnalysis> = {
        car: {
          noun: "auto",
          english: "car",
          illative: {
            singular: "auto",
            illative: "autoon",
            illativePlural: "autoihin",
            rule: "Words ending in -o: add -on for illative singular, -ihin for illative plural",
          },
          usage: ["Movement into", "Direction towards", "Destination"],
          examples: ["Menemme autoon.", "Laitoin tavarat autoon."],
          translations: ["We go into the car.", "I put the items in the car."],
          illativePluralExamples: [
            "Lastaamme tavarat autoihin.",
            "Kävimme useissa autoihin.",
          ],
          illativePluralTranslations: [
            "We load items into the cars.",
            "We visited several cars.",
          ],
          notes:
            "The illative case indicates movement into or towards something.",
          isFinnishInput: true,
          analysisNotes: ["Translated English word to Finnish"],
        },
        house: {
          noun: "talo",
          english: "house",
          illative: {
            singular: "talo",
            illative: "taloon",
            illativePlural: "taloihin",
            rule: "Words ending in -o: add -on for illative singular, -ihin for illative plural",
          },
          usage: ["Movement into", "Entering", "Destination"],
          examples: ["Menemme taloon.", "Hän tuli taloon sisään."],
          translations: ["We go into the house.", "He came into the house."],
          illativePluralExamples: [
            "Kävimme kaunissa taloihin.",
            "Lapset juoksivat taloihin.",
          ],
          illativePluralTranslations: [
            "We visited beautiful houses.",
            "The children ran into the houses.",
          ],
          notes:
            "The illative case shows movement into buildings or enclosed spaces.",
          isFinnishInput: true,
          analysisNotes: ["Translated English word to Finnish"],
        },
      };

      const lowerNoun = noun.toLowerCase();
      if (commonFallbacks[lowerNoun]) {
        return NextResponse.json(commonFallbacks[lowerNoun]);
      }

      throw new Error("Analysis failed and no fallback available");
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error("Error in analyze-illative:", error);

    return NextResponse.json(
      {
        error: "Failed to analyze noun",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
