import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

interface AnalyzerRequest {
  sentence: string;
  history?: { sentence: string; corrected?: string }[];
}

interface AnalyzerResponse {
  corrected: string;
  translation: string;
  pattern: string;
  suggestion: string;
  correctionExplanation?: string;
  feedback?: {
    grammar?: string;
    spelling?: string;
    suffixes?: string;
  };
}

type ChatRole = "system" | "user" | "assistant";

export const POST = async (req: NextRequest) => {
  try {
    const { sentence, history }: AnalyzerRequest = await req.json();

    if (!sentence) {
      return NextResponse.json(
        { error: "Sentence is required" },
        { status: 400 }
      );
    }

    const messagesForAPI: { role: ChatRole; content: string }[] = [
      {
        role: "system",
        content: `
You are a Finnish sentence construction tutor AI.
Rules:
1. Analyze the user's Finnish sentence.
2. Correct grammar, spelling, suffixes if needed.
3. Explain mistakes and give a short correction guide.
4. Suggest a proper next sentence.
5. Identify the sentence pattern and explain.
6. Return JSON ONLY in this structure:
{
  "corrected": "...",
  "translation": "...",
  "pattern": "...",
  "suggestion": "...",
  "correctionExplanation": "...",
  "feedback": {
    "grammar": "...",
    "spelling": "...",
    "suffixes": "..."
  }
}
        `.trim(),
      },
      ...(history?.map((h) => ({
        role: "user" as ChatRole,
        content: h.sentence,
      })) || []),
      { role: "user", content: sentence },
    ];

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: messagesForAPI,
      temperature: 0.5,
      max_tokens: 800,
    });

    const raw = completion.choices[0].message?.content?.trim() || "";
    let parsed: AnalyzerResponse;

    try {
      parsed = JSON.parse(raw);
    } catch {
      parsed = {
        corrected: raw,
        translation: "",
        pattern: "",
        suggestion: "",
        correctionExplanation: "",
        feedback: {},
      };
    }

    return NextResponse.json(parsed);
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "AI response failed", details: (err as Error).message },
      { status: 500 }
    );
  }
};
