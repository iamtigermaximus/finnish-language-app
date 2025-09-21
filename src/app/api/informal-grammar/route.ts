// app/api/informal-grammar/route.ts
import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

interface AnalyzeGrammarRequest {
  input: string;
}

interface GrammarAnalysis {
  input: string;
  informal: string;
  formal: string;
  english: string;
  rule: string;
  notes: string;
  isFinnishInput: boolean;
}

// Detect Finnish input
const isFinnishInput = (text: string): boolean => {
  const finnishPattern = /[äöå]/i;
  const commonFinnishEndings = /(nen|inen|ton|ssa|sta|lla|lta|aan|een|iin|ut|yt|at|ät|it|et|ot|öt)$/i;
  return finnishPattern.test(text) || commonFinnishEndings.test(text);
};

// Dynamic translation via MyMemory API
const fetchTranslation = async (text: string): Promise<string> => {
  try {
    const res = await fetch(
      `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=fi|en`
    );
    const data = await res.json();
    return data?.responseData?.translatedText || text;
  } catch {
    return text;
  }
};

export const POST = async (request: NextRequest) => {
  try {
    const { input }: AnalyzeGrammarRequest = await request.json();
    if (!input) return NextResponse.json({ error: 'Input is required' }, { status: 400 });

    const isFinnish = isFinnishInput(input);
    const lowerInput = input.toLowerCase();

    // Step 1: Get English translation
    const english = await fetchTranslation(lowerInput);

    // Step 2: Ask OpenAI for informal grammar analysis
    const prompt = `
      Analyze the Finnish phrase: "${input}".

      Return ONLY JSON with the following structure:
      {
        "input": "<user input>",
        "informal": "<spoken/informal form if different from input>",
        "formal": "<kirjakieli form>",
        "english": "<English translation>",
        "rule": "<Grammar rule/category e.g., Pronoun, Contraction, Negation>",
        "notes": "<Any notes or usage explanation>",
        "isFinnishInput": true
      }

      Rules:
      - Always give the formal kirjakieli equivalent.
      - Include any common spoken contractions.
      - Explain usage if informal differs from formal.
      - Return valid JSON only, no markdown or extra text.
    `;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are an expert in Finnish informal grammar. Return ONLY valid JSON using the requested structure." },
        { role: "user", content: prompt }
      ],
      temperature: 0.3,
      max_tokens: 800,
    });

    const responseText = completion.choices[0].message?.content;
    const jsonMatch = responseText?.match(/\{[\s\S]*\}/);
    const jsonString = jsonMatch ? jsonMatch[0] : responseText;
    if (!jsonString) throw new Error('No JSON received from AI');

    const result: GrammarAnalysis = JSON.parse(jsonString);

    // Ensure proper types
    result.english = result.english || english;
    result.isFinnishInput = isFinnish;

    return NextResponse.json(result);

  } catch (error) {
    console.error('Error in informal-grammar route:', error);
    return NextResponse.json(
      { error: 'Failed to analyze grammar', details: (error as Error).message },
      { status: 500 }
    );
  }
};
