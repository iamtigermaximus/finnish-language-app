// // app/api/noun-pluralization/route.ts
// import { NextRequest, NextResponse } from 'next/server';
// import OpenAI from 'openai';

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// interface AnalyzeNounRequest {
//   noun: string;
// }

// interface NounPluralization {
//   singular: string;
//   singularStem: string;
//   pluralStem: string;
//   inessive: string;
//   adessive: string;
//   partitive: string;
//   genitive: string;
//   illative: string;
//   rule: string;
// }

// interface NounAnalysis {
//   noun: string;
//   english: string;
//   pluralization: NounPluralization;
//   notes: string;
//   example: string;           // New field for example sentence
//   isFinnishInput: boolean;
// }

// // Detect Finnish input
// const isFinnishInput = (noun: string): boolean => {
//   const finnishPattern = /[äöå]/i;
//   const commonFinnishEndings = /(nen|inen|ton|ssa|sta|lla|lta|aan|een|iin|ut|yt|at|ät|it|et|ot|öt)$/i;
//   return finnishPattern.test(noun) || commonFinnishEndings.test(noun);
// };

// // Dynamic translation via MyMemory API
// const fetchTranslation = async (noun: string): Promise<string | null> => {
//   try {
//     const res = await fetch(
//       `https://api.mymemory.translated.net/get?q=${encodeURIComponent(noun)}&langpair=fi|en`
//     );
//     const data = await res.json();
//     return data?.responseData?.translatedText || null;
//   } catch {
//     return null;
//   }
// };

// export const POST = async (request: NextRequest) => {
//   try {
//     const { noun }: AnalyzeNounRequest = await request.json();
//     if (!noun) return NextResponse.json({ error: 'Noun is required' }, { status: 400 });

//     const isFinnish = isFinnishInput(noun);
//     const lowerNoun = noun.toLowerCase();

//     // Step 1: Get English translation dynamically
//     let english = await fetchTranslation(lowerNoun);
//     if (!english) english = noun; // fallback

//     // Step 2: Ask OpenAI for pluralization + example sentence
//     const prompt = `
//       Analyze the Finnish noun: "${noun}".

//       Provide ALL of the following in JSON format ONLY:
//       1. English translation: "${english}"
//       2. Singular stem
//       3. Plural stem
//       4. Inessive plural (-ssa/ssä)
//       5. Adessive plural (-lla/llä)
//       6. Partitive plural (-a/ä, -ta/tä)
//       7. Genitive plural (-en, -den, -tten)
//       8. Illative plural (-in, -hin, -siin)
//       9. Pluralization rule
//       10. Notes
//       11. Example sentence using the plural forms generated above

//       IMPORTANT:
//       - Use the plural forms you generate in the example sentence exactly as is.
//       - Return ONLY a valid JSON object with this structure:
//       {
//         "noun": "...",
//         "english": "...",
//         "pluralization": { "singular": "...", "singularStem": "...", "pluralStem": "...", "inessive": "...", "adessive": "...", "partitive": "...", "genitive": "...", "illative": "...", "rule": "..." },
//         "notes": "...",
//         "example": "...",
//         "isFinnishInput": true
//       }
//       - No explanations or markdown outside JSON.
//       - Use the plural stems and all plural case forms you generated in the JSON above.
//       - Do NOT invent another noun or translation.
//       - The example sentence MUST use the plural forms exactly as generated.
//       - Do NOT include unrelated nouns like "student" or "opiskelija".
//       - Return ONLY a valid JSON object with the structure requested.
//     `;

//     const completion = await openai.chat.completions.create({
//       model: "gpt-4o-mini",
//       messages: [
//         { role: "system", content: "You are an expert in Finnish grammar. Always return valid JSON using the exact requested structure." },
//         { role: "user", content: prompt }
//       ],
//       temperature: 0.3,
//       max_tokens: 1500,
//     });

//     const responseText = completion.choices[0].message.content;
//     const jsonMatch = responseText?.match(/\{[\s\S]*\}/);
//     const jsonString = jsonMatch ? jsonMatch[0] : responseText;
//     if (!jsonString) throw new Error('No JSON received from AI');

//     const result: NounAnalysis = JSON.parse(jsonString);

//     // Validate JSON structure
//     if (!result.pluralization || !result.pluralization.singular || !result.example) {
//       throw new Error('Invalid JSON structure from AI');
//     }

//     // Ensure English translation matches fetched value
//     result.english = english;
//     result.isFinnishInput = isFinnish;

//     return NextResponse.json(result);

//   } catch (error) {
//     console.error('Error in noun-pluralization route:', error);

//     return NextResponse.json(
//       { error: 'Failed to analyze noun', details: (error as Error).message },
//       { status: 500 }
//     );
//   }
// };
// app/api/noun-pluralization/route.ts
import { NextRequest, NextResponse } from "next/server";
// import OpenAI from "openai";
import Groq from "groq-sdk";

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

interface AnalyzeNounRequest {
  noun: string;
}

interface NounPluralization {
  singular: string;
  singularStem: string;
  pluralStem: string;
  inessive: string;
  adessive: string;
  partitive: string;
  genitive: string;
  illative: string;
  rule: string;
}

interface CaseExamples {
  inessiveExample: string;
  adessiveExample: string;
  partitiveExample: string;
  genitiveExample: string;
  illativeExample: string;
}

interface NounAnalysis {
  noun: string;
  english: string;
  pluralization: NounPluralization;
  notes: string;
  example: string; // General example sentence
  caseExamples: CaseExamples; // Examples for each case
  isFinnishInput: boolean;
}

// Detect Finnish input
const isFinnishInput = (noun: string): boolean => {
  const finnishPattern = /[äöå]/i;
  const commonFinnishEndings =
    /(nen|inen|ton|ssa|sta|lla|lta|aan|een|iin|ut|yt|at|ät|it|et|ot|öt)$/i;
  return finnishPattern.test(noun) || commonFinnishEndings.test(noun);
};

// Dynamic translation via MyMemory API
const fetchTranslation = async (noun: string): Promise<string | null> => {
  try {
    const res = await fetch(
      `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
        noun
      )}&langpair=fi|en`
    );
    const data = await res.json();
    return data?.responseData?.translatedText || null;
  } catch {
    return null;
  }
};

export const POST = async (request: NextRequest) => {
  try {
    const { noun }: AnalyzeNounRequest = await request.json();
    if (!noun)
      return NextResponse.json({ error: "Noun is required" }, { status: 400 });

    const isFinnish = isFinnishInput(noun);
    const lowerNoun = noun.toLowerCase();

    // Step 1: Get English translation dynamically
    let english = await fetchTranslation(lowerNoun);
    if (!english) english = noun; // fallback

    // Step 2: Ask OpenAI for pluralization + example sentences for each case
    const prompt = `
      Analyze the Finnish noun: "${noun}".

      Provide ALL of the following in JSON format ONLY:
      1. English translation: "${english}"
      2. Singular stem
      3. Plural stem
      4. Inessive plural (-ssa/ssä)
      5. Adessive plural (-lla/llä)
      6. Partitive plural (-a/ä, -ta/tä)
      7. Genitive plural (-en, -den, -tten)
      8. Illative plural (-in, -hin, -siin)
      9. Pluralization rule
      10. Notes
      11. One general example sentence using the plural forms
      12. Separate example sentences for EACH case form:
          - inessiveExample: sentence using the inessive plural form
          - adessiveExample: sentence using the adessive plural form  
          - partitiveExample: sentence using the partitive plural form
          - genitiveExample: sentence using the genitive plural form
          - illativeExample: sentence using the illative plural form

      IMPORTANT:
      - Use the plural forms you generate in the example sentences exactly as is.
      - Return ONLY a valid JSON object with this structure:
      {
        "noun": "...",
        "english": "...",
        "pluralization": { 
          "singular": "...", 
          "singularStem": "...", 
          "pluralStem": "...", 
          "inessive": "...", 
          "adessive": "...", 
          "partitive": "...", 
          "genitive": "...", 
          "illative": "...", 
          "rule": "..." 
        },
        "notes": "...",
        "example": "...",
        "caseExamples": {
          "inessiveExample": "...",
          "adessiveExample": "...", 
          "partitiveExample": "...",
          "genitiveExample": "...",
          "illativeExample": "..."
        },
        "isFinnishInput": true
      }
      - No explanations or markdown outside JSON.
      - Use the plural stems and all plural case forms you generated in the JSON above.
      - Do NOT invent another noun or translation.
      - The example sentences MUST use the plural forms exactly as generated.
      - Return ONLY a valid JSON object with the structure requested.
    `;

    const completion = await groq.chat.completions.create({
      model: "deepseek-r1-distill-llama-70b",
      messages: [
        {
          role: "system",
          content:
            "You are an expert in Finnish grammar. Always return valid JSON using the exact requested structure.",
        },
        { role: "user", content: prompt },
      ],
      temperature: 0.3,
      max_tokens: 2000,
    });

    const responseText = completion.choices[0].message.content;
    const jsonMatch = responseText?.match(/\{[\s\S]*\}/);
    const jsonString = jsonMatch ? jsonMatch[0] : responseText;
    if (!jsonString) throw new Error("No JSON received from AI");

    const result: NounAnalysis = JSON.parse(jsonString);

    // Validate JSON structure
    if (
      !result.pluralization ||
      !result.pluralization.singular ||
      !result.caseExamples
    ) {
      throw new Error("Invalid JSON structure from AI");
    }

    // Ensure English translation matches fetched value
    result.english = english;
    result.isFinnishInput = isFinnish;

    return NextResponse.json(result);
  } catch (error) {
    console.error("Error in noun-pluralization route:", error);

    return NextResponse.json(
      { error: "Failed to analyze noun", details: (error as Error).message },
      { status: 500 }
    );
  }
};
