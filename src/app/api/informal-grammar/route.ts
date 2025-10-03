// // app/api/informal-grammar/route.ts
// import { NextRequest, NextResponse } from "next/server";
// import Groq from "groq-sdk";

// const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

// interface AnalyzeGrammarRequest {
//   input: string;
// }

// interface GrammarAnalysis {
//   input: string;
//   informal: string;
//   formal: string;
//   english: string;
//   rule: string;
//   notes: string;
//   isFinnishInput: boolean;
// }

// // Detect Finnish input
// const isFinnishInput = (text: string): boolean => {
//   return /[äöå]|(nen|inen|ton|ssa|sta|lla|lta|aan|een|iin|ut|yt|at|ät|it|et|ot|öt)$/i.test(
//     text
//   );
// };

// // Fetch English translation using MyMemory API
// const fetchTranslation = async (text: string): Promise<string> => {
//   try {
//     const res = await fetch(
//       `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
//         text
//       )}&langpair=fi|en`
//     );
//     const data = await res.json();
//     return data?.responseData?.translatedText || text;
//   } catch {
//     return text;
//   }
// };

// export const POST = async (request: NextRequest) => {
//   try {
//     const { input }: AnalyzeGrammarRequest = await request.json();
//     if (!input) {
//       return NextResponse.json({ error: "Input is required" }, { status: 400 });
//     }

//     const isFinnish = isFinnishInput(input);
//     const lowerInput = input.toLowerCase();

//     // Step 1: Get English translation
//     const english = await fetchTranslation(lowerInput);

//     // Step 2: AI prompt for informal grammar
//     const prompt = `
// Analyze the Finnish phrase: "${input}"

// Analyze the Finnish phrase: "${input}"

// Return ONLY JSON with this structure:
// {
//   "input": "<user input>",
//   "informal": "<spoken/informal form in puhekieli>",
//   "formal": "<kirjakieli form>",
//   "english": "<English translation>",
//   "rule": "<Grammar rule/category e.g., Pronoun, Contraction, Negation>",
//   "notes": "<Any notes or usage explanation>",
//   "isFinnishInput": true
// }

// Rules:
// - Always provide the formal kirjakieli equivalent.
// - Convert all Finnish input to **true spoken Finnish (puhekieli)** using common contractions:
//     - Pronouns: sinä → sä, minä → mä, hän → se, me → me, te → te, he → ne
//     - Verbs: olet → oot, olen → oon, ovat → on, tekee → tekee, menen → meen, tulee → tulee
// - Examples of puhekieli conversions:
//     - "missä sinä olet?" → "missa sa oot?"
//     - "minä olen väsynyt" → "mä oon väsyny"
//     - "Miksi sinä teet sen?" → "Miksä sä teet sen?"
// - Use casual spelling and local vocabulary from Helsinki/Tampere if applicable.
// - Keep grammar consistent for spoken Finnish (correct verb conjugation, pronoun, and word order).
// - Explain differences between informal and formal in the notes.
// - Return **valid JSON ONLY**, no markdown or extra text.
// - Leave any base forms in parentheses as references if present.
// - If input is not Finnish, just translate to English and leave informal/formal the same as input.

// - Use Helsinki and Tampere puhekieli vocabulary
// `;

//     const completion = await groq.chat.completions.create({
//       model: "gemma2-9b-it",
//       messages: [
//         {
//           role: "system",
//           content:
//             "You are an expert in Finnish informal grammar and puhekieli. Return ONLY valid JSON using the requested structure.",
//         },
//         { role: "user", content: prompt },
//       ],
//       temperature: 0.3,
//       max_tokens: 800,
//     });

//     const responseText = completion.choices[0].message?.content?.trim();

//     if (!responseText) throw new Error("No response received from AI");

//     // Extract JSON safely
//     const jsonMatch = responseText.match(/\{[\s\S]*\}/);
//     if (!jsonMatch) throw new Error("No valid JSON found in AI response");

//     const jsonString = jsonMatch[0];
//     let result: GrammarAnalysis;

//     try {
//       result = JSON.parse(jsonString);
//     } catch {
//       throw new Error("Invalid JSON received from AI");
//     }

//     // Ensure types and fallback
//     result.english = result.english?.trim() || english;
//     result.isFinnishInput = isFinnish;

//     return NextResponse.json(result);
//   } catch (error) {
//     console.error("Error in informal-grammar route:", error);
//     return NextResponse.json(
//       {
//         error: "Failed to analyze grammar",
//         details: (error as Error).message,
//       },
//       { status: 500 }
//     );
//   }
// };
// app/api/informal-grammar/route.ts
import { NextRequest, NextResponse } from "next/server";
import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

interface AnalyzeGrammarRequest {
  input: string;
  dialect?: "helsinki" | "tampere" | "auto";
}

interface GrammarAnalysis {
  input: string;
  informal: string;
  formal: string;
  english: string;
  rule: string;
  notes: string;
  isFinnishInput: boolean;
  dialect: string;
  variations: {
    helsinki: string;
    tampere: string;
  };
  transformations: Array<{
    original: string;
    informal: string;
    type: string;
    explanation: string;
  }>;
}

export const POST = async (request: NextRequest) => {
  try {
    const { input, dialect = "auto" }: AnalyzeGrammarRequest =
      await request.json();
    if (!input) {
      return NextResponse.json({ error: "Input is required" }, { status: 400 });
    }

    const prompt = `
You are a native Finnish speaker from Helsinki with deep knowledge of Tampere puhekieli. Analyze this Finnish text and convert it to authentic spoken Finnish.

INPUT: "${input}"

YOUR TASK:
1. Analyze EVERY word and phrase for puhekieli conversion possibilities
2. Create natural Helsinki puhekieli version
3. Create natural Tampere puhekieli version  
4. Identify ALL transformations made
5. Explain the reasoning for each change

AUTHENTIC PUHEKIELI PATTERNS TO APPLY:

PRONOUN TRANSFORMATIONS:
- minä → mä (Helsinki) / mie (Tampere)
- sinä → sä (Helsinki) / sie (Tampere) 
- hän → se (both)
- me → me (both)
- te → te (both) 
- he → ne (both)
- minun → mun, sinun → sun, hänen → sen

VERB CONTRACTIONS:
- olen → oon (Helsinki) / oo (Tampere)
- olet → oot (both)
- tulee → tulee / tuuu (casual)
- menee → menee / meee (casual)
- onko → onks (both)
- eikö → eiks (both)

WORD SHORTENINGS & SLANG:
- henkilökortti → henkkari
- makuuhuone → makkari
- kylpyhuone → kylypä
- televisio → telkku
- matkapuhelin → kännykkä
- tietokone → kone
- ravintola → ravari (sometimes)
- ylääkerran → yläkerrassa (case change)
- tule → tuu, mene → mee, ole → oo

GRAMMAR CHANGES:
- Question particles: -ko/-kö → -ks
- Case endings: -ssa → -s, -sta → -st, -lla → -l
- Drop unnecessary letters in casual speech
- Use clitics: -han/-hän, -pa/-pä appropriately

REGIONAL DIFFERENCES:
HELSINKI: Clean, urban, international influence
TAMPERE: Stronger dialect, mie/sie pronouns, sometimes more consonant doubling

EXAMPLES OF SMART TRANSFORMATIONS:
- "Mitähän sinä teet?" → "Mitävhän sä teet?" (Helsinki) / "Mitävhän sie teet?" (Tampere)
- "En tiedä missä henkilökorttini on" → "En tiiä mis mun henkkarii on" 
- "Makuuhuoneessa on televisio" → "Makkaris on telkku"
- "Käytkö usein ravintolassa?" → "Käyksä usein ravaris?" / "Käyksie usein ravaris?"

ANALYSIS REQUIREMENTS:
For each significant change, identify:
- Original word/phrase
- Puhekieli version
- Type of transformation (pronoun, verb, shortening, etc.)
- Grammar rule or cultural reason

Return ONLY this JSON structure:
{
  "input": "${input}",
  "informal": "<best helsinki puhekieli version>",
  "formal": "<standard kirjakieli version>",
  "english": "<natural English translation>",
  "rule": "Comprehensive puhekieli analysis",
  "notes": "<overview of key transformations and dialect differences>",
  "isFinnishInput": true,
  "dialect": "helsinki",
  "variations": {
    "helsinki": "<authentic helsinki puhekieli>",
    "tampere": "<authentic tampere puhekieli>"
  },
  "transformations": [
    {
      "original": "minä",
      "informal": "mä",
      "type": "pronoun contraction",
      "explanation": "Standard Helsinki pronoun shortening"
    },
    {
      "original": "henkilökortti", 
      "informal": "henkkari",
      "type": "word shortening",
      "explanation": "Common slang for identification card"
    }
  ]
}

Be thorough and authentic! Convert every appropriate element to natural puhekieli.
`;

    const completion = await groq.chat.completions.create({
      model: "gemma2-9b-it",
      messages: [
        {
          role: "system",
          content: `You are a linguistic expert on Finnish dialects. You intuitively understand puhekieli patterns, slang, regional variations, and casual speech. You can analyze any Finnish text and convert it to authentic spoken language without needing explicit rules. Return ONLY valid JSON.`,
        },
        { role: "user", content: prompt },
      ],
      temperature: 0.4, // Slightly higher for more creative/authentic output
      max_tokens: 1500,
    });

    const responseText = completion.choices[0].message?.content?.trim();
    if (!responseText) throw new Error("No response received from AI");

    const jsonMatch = responseText.match(/\{[\s\S]*\}/);
    if (!jsonMatch) throw new Error("No valid JSON found");

    let result: GrammarAnalysis;
    try {
      result = JSON.parse(jsonMatch[0]);
    } catch {
      throw new Error("Invalid JSON received from AI");
    }

    // Set default values if AI missed them
    result.dialect = dialect === "auto" ? "helsinki" : dialect;
    result.isFinnishInput = true;

    if (!result.variations) {
      result.variations = {
        helsinki: result.informal,
        tampere: result.informal, // Fallback
      };
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error("Error in informal-grammar route:", error);

    return NextResponse.json(
      {
        error: "Failed to analyze grammar",
        details: (error as Error).message,
      },
      { status: 500 }
    );
  }
};
