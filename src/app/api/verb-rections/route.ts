// app/api/verb-rections/route.ts
import { NextRequest, NextResponse } from "next/server";
// import OpenAI from "openai";
import Groq from "groq-sdk";

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

// Request interface
interface AnalyzeVerbRequest {
  verb: string;
}

// Rection analysis interface
interface RectionAnalysis {
  verb: string;
  english: string;
  rection: {
    case: string;
    rule: string;
  };
  usage: string[];
  examples: string[];
  translations: string[];
  notes: string;
  isFinnishInput: boolean;
}

// Detect Finnish input
const isFinnishInput = (verb: string): boolean => {
  const finnishPattern = /[äöå]/i;
  const commonFinnishEndings = /(a|ä|i|e|ta|tä|ssa|ssä|sta|stä|lla|llä)$/i;
  return finnishPattern.test(verb) || commonFinnishEndings.test(verb);
};

// Dynamic translation using MyMemory API
const fetchTranslation = async (verb: string): Promise<string | null> => {
  try {
    const res = await fetch(
      `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
        verb
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
    const { verb }: AnalyzeVerbRequest = await request.json();
    if (!verb)
      return NextResponse.json({ error: "Verb is required" }, { status: 400 });

    const isFinnish = isFinnishInput(verb);
    const lowerVerb = verb.toLowerCase();

    // Step 1: Get English translation
    const english = (await fetchTranslation(lowerVerb)) || lowerVerb; // fallback to input

    // Step 2: Ask OpenAI for rection info
    const prompt = `
      Analyze the Finnish verb: "${verb}".

      Provide all of the following in JSON format ONLY:
      1. English translation: "${english}"
      2. Required case (e.g., Mihin, Mistä, Missä, Miltä, Partitive)
      3. Rule explaining when to use this case
      4. Notes for the verb rection
      5. 3 example sentences with translation, using the verb correctly

      IMPORTANT:
      - Return ONLY a valid JSON object with this structure:
      {
        "verb": "...",
        "english": "...",
        "rection": { "case": "...", "rule": "..." },
        "usage": ["...","..."],
        "examples": ["...","..."],
        "translations": ["...","..."],
        "notes": "...",
        "isFinnishInput": true
      }
      - No markdown, no extra text outside JSON.
      - Examples MUST use the verb exactly as given.
    `;

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
          content:
            "You are an expert in Finnish grammar. Always return valid JSON using the exact requested structure.",
        },
        { role: "user", content: prompt },
      ],
      temperature: 0,
      max_tokens: 1000,
    });

    const responseText = completion.choices[0].message.content;
    const jsonMatch = responseText?.match(/\{[\s\S]*\}/);
    const jsonString = jsonMatch ? jsonMatch[0] : responseText;
    if (!jsonString) throw new Error("No JSON received from AI");

    const result: RectionAnalysis = JSON.parse(jsonString);

    // Ensure English is always a string
    result.english = english;
    result.isFinnishInput = isFinnish;

    // Validate essential fields
    if (
      !result.rection ||
      !result.rection.case ||
      !result.examples ||
      !result.translations
    ) {
      throw new Error("Invalid JSON structure from AI");
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error("Error in verb-rections route:", error);
    return NextResponse.json(
      { error: "Failed to analyze verb", details: (error as Error).message },
      { status: 500 }
    );
  }
};
