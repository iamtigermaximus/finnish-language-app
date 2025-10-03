// app/api/analyze-genitive/route.ts
import { NextRequest, NextResponse } from "next/server";
import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

interface AnalyzeGenitiveRequest {
  noun: string;
}

interface GenitiveAnalysis {
  noun: string;
  english: string;
  genitive: {
    singular: string;
    genitive: string;
    genitivePlural: string;
    rule: string;
  };
  usage: string[];
  examples: string[];
  translations: string[];
  genitivePluralExamples: string[];
  genitivePluralTranslations: string[];
  notes: string;
  isFinnishInput: boolean;
  analysisNotes?: string[];
}

export async function POST(request: NextRequest) {
  try {
    const { noun }: AnalyzeGenitiveRequest = await request.json();

    if (!noun) {
      return NextResponse.json({ error: "Noun is required" }, { status: 400 });
    }

    const prompt = `
You are an expert Finnish linguist and teacher. Analyze this word and provide comprehensive genitive case information:

WORD TO ANALYZE: "${noun}"

YOUR TASK:
1. First, determine if the word is:
   - A Finnish noun (correctly spelled)
   - An English noun that needs translation
   - A misspelled Finnish noun (provide correction)
   - Not a valid noun

2. If it's English or misspelled, provide the CORRECT Finnish equivalent
3. Generate ACCURATE genitive singular and plural forms
4. Explain the grammatical rule that applies
5. Create natural example sentences

SPECIAL CASES TO HANDLE INTELLIGENTLY:

ENGLISH WORDS:
- "ballpen" → "kuulakärkikynä" (ballpoint pen)
- "computer" → "tietokone" 
- "phone" → "puhelin"
- Provide Finnish genitive forms for the translated word

COMMON MISPRONUNCIATIONS/SPELLINGS:
- "laukku" (correct) vs "laukku" (typo)
- "kirja" (correct) vs "kirjä" (common error)
- "talo" (correct) vs "talo" (typo)

LOANWORDS:
- "auto" (car) - follows Finnish grammar
- "bussi" (bus) - follows Finnish grammar  
- "hotelli" (hotel) - follows Finnish grammar

GRAMMAR RULES TO APPLY CORRECTLY:
- Basic: talo → talon (singular), talojen (plural)
- -i ending: suomi → suomen (singular), suomien (plural)  
- -nen ending: nainen → naisen (singular), naisten (plural)
- Consonant gradation: kukka → kukan, käsi → käden
- Loanwords: auto → auton, bussi → bussin

RESPONSE REQUIREMENTS:
- Be 100% grammatically accurate
- Correct any spelling errors automatically
- Provide the most common Finnish equivalent for English words
- Explain your corrections in the analysisNotes

Return ONLY JSON with this structure:
{
  "noun": "corrected Finnish noun",
  "english": "english translation",
  "genitive": {
    "singular": "base form",
    "genitive": "genitive singular", 
    "genitivePlural": "genitive plural",
    "rule": "grammatical rule explanation"
  },
  "usage": ["usage1", "usage2"],
  "examples": ["example1", "example2"],
  "translations": ["translation1", "translation2"],
  "genitivePluralExamples": ["plural example1", "plural example2"],
  "genitivePluralTranslations": ["plural translation1", "plural translation2"],
  "notes": "educational notes",
  "isFinnishInput": true/false,
  "analysisNotes": ["correction note 1", "correction note 2"]
}

EXAMPLES OF INTELLIGENT CORRECTIONS:

Input: "ballpen"
Output: {
  "noun": "kuulakärkikynä",
  "english": "ballpoint pen",
  "genitive": {
    "singular": "kuulakärkikynä", 
    "genitive": "kuulakärkikynän",
    "genitivePlural": "kuulakärkikynien",
    "rule": "Words ending in -ä: add -n for genitive singular, -jen for genitive plural"
  },
  "analysisNotes": ["Converted English 'ballpen' to Finnish 'kuulakärkikynä'"]
}

Input: "laukku" 
Output: {
  "noun": "laukku",
  "english": "bag",
  "genitive": {
    "singular": "laukku",
    "genitive": "laukun", 
    "genitivePlural": "laukujen",
    "rule": "Words ending in -kku: consonant gradation to -kun (singular), -kujen (plural)"
  },
  "analysisNotes": ["Corrected spelling from 'laukku' to 'laukku'"]
}

Input: "kirjä"
Output: {
  "noun": "kirja",
  "english": "book", 
  "genitive": {
    "singular": "kirja",
    "genitive": "kirjan",
    "genitivePlural": "kirjojen", 
    "rule": "Words ending in -a: add -n for genitive singular, -jen with consonant gradation (plural)"
  },
  "analysisNotes": ["Corrected spelling from 'kirjä' to 'kirja'"]
}

Now analyze: "${noun}"
`;

    const completion = await groq.chat.completions.create({
      model: "gemma2-9b-it",
      messages: [
        {
          role: "system",
          content: `You are a native Finnish linguist with perfect grammar knowledge. You can:
          - Detect and correct spelling errors in Finnish words
          - Translate English words to their most common Finnish equivalents  
          - Apply Finnish grammar rules perfectly
          - Generate natural, educational example sentences
          - Explain your reasoning for any corrections
          
          You NEVER invent incorrect Finnish words or grammar. You are 100% accurate.`,
        },
        { role: "user", content: prompt },
      ],
      temperature: 0,
      max_tokens: 1500,
    });

    const responseText = completion.choices[0]?.message?.content?.trim();

    if (!responseText) {
      throw new Error("No response from AI");
    }

    // Parse JSON response
    let result: GenitiveAnalysis;
    try {
      const jsonMatch = responseText.match(/\{[\s\S]*\}/);
      if (!jsonMatch) {
        throw new Error("No JSON found in response");
      }

      result = JSON.parse(jsonMatch[0]);

      // Validate critical fields
      if (
        !result.noun ||
        !result.genitive ||
        !result.genitive.genitive ||
        !result.genitive.genitivePlural
      ) {
        throw new Error("Invalid response structure");
      }
    } catch (parseError) {
      console.error("Error parsing AI response:", parseError);
      console.error("Response text:", responseText);

      // Fallback: Return error analysis
      return NextResponse.json({
        noun: noun,
        english: "Unable to analyze",
        genitive: {
          singular: noun,
          genitive: "unknown",
          genitivePlural: "unknown",
          rule: "Analysis failed",
        },
        usage: [],
        examples: [],
        translations: [],
        genitivePluralExamples: [],
        genitivePluralTranslations: [],
        notes:
          "Could not analyze this word. It may be misspelled or not a valid Finnish noun.",
        isFinnishInput: false,
        analysisNotes: ["Analysis failed - word may be invalid or misspelled"],
      });
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error("Error in analyze-genitive:", error);

    return NextResponse.json({
      noun: "unknown",
      english: "Analysis error",
      genitive: {
        singular: "unknown",
        genitive: "unknown",
        genitivePlural: "unknown",
        rule: "Analysis failed due to error",
      },
      usage: [],
      examples: [],
      translations: [],
      genitivePluralExamples: [],
      genitivePluralTranslations: [],
      notes: "An error occurred while analyzing the word.",
      isFinnishInput: false,
      analysisNotes: ["System error occurred"],
    });
  }
}
