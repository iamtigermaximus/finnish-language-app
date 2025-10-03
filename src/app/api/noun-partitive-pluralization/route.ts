// app/api/analyze-partitive/route.ts
import { NextRequest, NextResponse } from "next/server";
import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

interface AnalyzePartitiveRequest {
  noun: string;
}

interface PartitiveAnalysis {
  noun: string;
  english: string;
  partitive: {
    singular: string;
    partitive: string;
    partitivePlural: string;
    rule: string;
  };
  usage: string[];
  examples: string[];
  translations: string[];
  partitivePluralExamples: string[];
  partitivePluralTranslations: string[];
  notes: string;
  isFinnishInput: boolean;
  analysisNotes?: string[];
}

export async function POST(request: NextRequest) {
  try {
    const { noun }: AnalyzePartitiveRequest = await request.json();

    if (!noun) {
      return NextResponse.json({ error: "Noun is required" }, { status: 400 });
    }

    const prompt = `
You are an expert Finnish linguist and teacher. Analyze this word and provide comprehensive partitive case information:

WORD TO ANALYZE: "${noun}"

YOUR TASK:
1. First, determine if the word is:
   - A Finnish noun (correctly spelled)
   - An English noun that needs translation to Finnish
   - A misspelled Finnish noun (provide correction)
   - Not a valid noun

2. If it's English or misspelled, provide the CORRECT Finnish equivalent
3. Generate ACCURATE partitive singular and plural forms
4. Explain the grammatical rule that applies
5. Create natural example sentences

PARTITIVE CASE RULES TO APPLY CORRECTLY:

SINGULAR PARTITIVE ENDINGS:
- Basic: -a/-ä: talo → taloa, kukka → kukkaa
- Words ending in -e: perhe → perhettä, koe → koetta
- Words ending in -i: suomi → suomea, kieli → kieltä
- Words ending in -nen: nainen → naista, hevonen → hevosta
- Consonant gradation: käsi → kättä, vesi → vettä

PLURAL PARTITIVE ENDINGS:
- -a/-ä: talot → taloja, kirjat → kirjoja
- -ia/-iä: kissat → kissoja, autot → autoja
- -ta/-tä: kädet → käsiä, vedet → vesiä

SPECIAL CASES TO HANDLE:

ENGLISH WORDS → FINNISH TRANSLATION:
- "apple" → "omena" → partitive: "omenaa" (singular), "omenoita" (plural)
- "book" → "kirja" → "kirjaa", "kirjoja"
- "house" → "talo" → "taloa", "taloja"
- "car" → "auto" → "autoa", "autoja"
- "water" → "vesi" → "vettä", "vesiä"

COMMON MISPRONUNCIATIONS/SPELLINGS:
- "omena" (correct) vs "omenä" (error) → "omenaa", "omenoita"
- "kirja" (correct) vs "kirjä" (error) → "kirjaa", "kirjoja"
- "talo" (correct) vs "talo" (error) → "taloa", "taloja"

PARTITIVE USAGE CONTEXTS:
- Partial objects: "Syön omenaa" (I'm eating some apple)
- Negative sentences: "Minulla ei ole kirjaa" (I don't have a book)
- With numbers: "Kaksi taloa" (Two houses)
- Ongoing actions: "Luen kirjaa" (I'm reading a book)
- Indefinite quantities: "Ostan maitoa" (I'm buying some milk)

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
  "partitive": {
    "singular": "base form",
    "partitive": "partitive singular", 
    "partitivePlural": "partitive plural",
    "rule": "grammatical rule explanation"
  },
  "usage": ["usage1", "usage2"],
  "examples": ["example1", "example2"],
  "translations": ["translation1", "translation2"],
  "partitivePluralExamples": ["plural example1", "plural example2"],
  "partitivePluralTranslations": ["plural translation1", "plural translation2"],
  "notes": "educational notes",
  "isFinnishInput": true,
  "analysisNotes": ["correction note 1", "correction note 2"]
}

EXAMPLES OF INTELLIGENT CORRECTIONS:

Input: "apple"
Output: {
  "noun": "omena",
  "english": "apple",
  "partitive": {
    "singular": "omena",
    "partitive": "omenaa", 
    "partitivePlural": "omenoita",
    "rule": "Words ending in -a: replace with -aa for partitive singular, -oita for partitive plural"
  },
  "usage": ["Partial objects", "Food items", "With numbers"],
  "examples": ["Syön omenaa.", "Ostan omenaa.", "Minulla on kaksi omenaa."],
  "translations": ["I'm eating an apple.", "I'm buying an apple.", "I have two apples."],
  "partitivePluralExamples": ["Syön omenoita.", "Korissa on omenoita.", "Ostan kolme omenaa."],
  "partitivePluralTranslations": ["I'm eating some apples.", "There are apples in the basket.", "I'm buying three apples."],
  "notes": "The partitive case is used with food items when eating/drinking them and with numbers.",
  "isFinnishInput": true,
  "analysisNotes": ["Translated English 'apple' to Finnish 'omena'"]
}

Input: "omena" 
Output: {
  "noun": "omena",
  "english": "apple",
  "partitive": {
    "singular": "omena",
    "partitive": "omenaa",
    "partitivePlural": "omenoita", 
    "rule": "Words ending in -a: replace with -aa for partitive singular, -oita for partitive plural"
  },
  "usage": ["Partial objects", "Food items", "With numbers"],
  "examples": ["Syön omenaa.", "Hän leikkaa omenaa.", "Ostan omenaa."],
  "translations": ["I'm eating an apple.", "He is cutting an apple.", "I'm buying an apple."],
  "partitivePluralExamples": ["Syön omenoita.", "Korissa on omenoita.", "Ostan useita omenoita."],
  "partitivePluralTranslations": ["I'm eating some apples.", "There are apples in the basket.", "I'm buying several apples."],
  "notes": "The partitive case indicates an indefinite quantity or part of something.",
  "isFinnishInput": true,
  "analysisNotes": []
}

Input: "kirjä"
Output: {
  "noun": "kirja",
  "english": "book",
  "partitive": {
    "singular": "kirja",
    "partitive": "kirjaa",
    "partitivePlural": "kirjoja",
    "rule": "Words ending in -a: replace with -aa for partitive singular, -oja for partitive plural with consonant gradation"
  },
  "analysisNotes": ["Corrected spelling from 'kirjä' to 'kirja'"]
}

Now analyze: "${noun}"
`;

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
          content: `You are a native Finnish linguist with perfect grammar knowledge. You can:
          - Detect and correct spelling errors in Finnish words
          - Translate English words to their most common Finnish equivalents  
          - Apply Finnish partitive case rules perfectly
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
    let result: PartitiveAnalysis;
    try {
      const jsonMatch = responseText.match(/\{[\s\S]*\}/);
      if (!jsonMatch) {
        throw new Error("No JSON found in response");
      }

      result = JSON.parse(jsonMatch[0]);

      // Validate critical fields
      if (
        !result.noun ||
        !result.partitive ||
        !result.partitive.partitive ||
        !result.partitive.partitivePlural
      ) {
        throw new Error("Invalid response structure");
      }
    } catch (parseError) {
      console.error("Error parsing AI response:", parseError);
      console.error("Response text:", responseText);

      // Smart fallback for common words
      const commonFallbacks: Record<string, PartitiveAnalysis> = {
        apple: {
          noun: "omena",
          english: "apple",
          partitive: {
            singular: "omena",
            partitive: "omenaa",
            partitivePlural: "omenoita",
            rule: "Words ending in -a: replace with -aa for partitive singular, -oita for partitive plural",
          },
          usage: ["Partial objects", "Food items", "With numbers"],
          examples: [
            "Syön omenaa.",
            "Ostan omenaa.",
            "Minulla on kaksi omenaa.",
          ],
          translations: [
            "I'm eating an apple.",
            "I'm buying an apple.",
            "I have two apples.",
          ],
          partitivePluralExamples: [
            "Syön omenoita.",
            "Korissa on omenoita.",
            "Ostan kolme omenaa.",
          ],
          partitivePluralTranslations: [
            "I'm eating some apples.",
            "There are apples in the basket.",
            "I'm buying three apples.",
          ],
          notes:
            "The partitive case is used with food items when eating/drinking them and with numbers.",
          isFinnishInput: true,
          analysisNotes: ["Translated English word to Finnish"],
        },
        book: {
          noun: "kirja",
          english: "book",
          partitive: {
            singular: "kirja",
            partitive: "kirjaa",
            partitivePlural: "kirjoja",
            rule: "Words ending in -a: replace with -aa for partitive singular, -oja for partitive plural with consonant gradation",
          },
          usage: [
            "Partial objects",
            "Reading activities",
            "Negative sentences",
          ],
          examples: ["Luen kirjaa.", "Etsin kirjaa.", "En löytänyt kirjaa."],
          translations: [
            "I'm reading a book.",
            "I'm looking for a book.",
            "I didn't find the book.",
          ],
          partitivePluralExamples: [
            "Luen kirjoja.",
            "Ostan kirjoja.",
            "Kirjastossa on paljon kirjoja.",
          ],
          partitivePluralTranslations: [
            "I'm reading books.",
            "I'm buying books.",
            "There are many books in the library.",
          ],
          notes:
            "The partitive is used with verbs of reading to indicate an ongoing activity.",
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
    console.error("Error in analyze-partitive:", error);

    return NextResponse.json(
      {
        error: "Failed to analyze noun",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
