import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

interface QuestionAnalyzerRequest {
  sentence?: string;
  history?: { sentence: string; corrected?: string }[];
}

interface QuestionAnalyzerResponse {
  corrected?: string;
  translation?: string;
  type?: string;
  suggestion?: string;
  explanation?: string;
  feedback?: {
    grammar?: string;
    spelling?: string;
    suffixes?: string;
    wordOrder?: string;
    tips?: string;
  };
  examples?: string[];
}

type ChatRole = "system" | "user" | "assistant";

export const POST = async (req: NextRequest) => {
  try {
    const { sentence, history }: QuestionAnalyzerRequest = await req.json();

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
You are a Finnish question sentence tutor AI for language learners.
Rules:
1. Analyze the user's Finnish question sentence.
2. Correct grammar, spelling, word order, and suffixes (-ko/-kö) if needed.
3. Identify the question type: "Question word", "-ko/-kö", "Subordinate".
4. Translate the sentence into natural English.
5. Provide detailed feedback including grammar, spelling, suffixes, and word order.
6. Suggest a next practice question for the learner.
7. Optionally, give 2-3 additional example questions illustrating the same type.
8. Make the explanations simple and learner-friendly.
9. Return JSON ONLY in this structure:
{
  "corrected": "...",
  "translation": "...",
  "type": "...",
  "suggestion": "...",
  "explanation": "...",
  "feedback": {
    "grammar": "...",
    "spelling": "...",
    "suffixes": "...",
    "wordOrder": "...",
    "tips": "..."
  },
  "examples": ["Finnish question - English translation", "..."]
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
      max_tokens: 1000,
    });

    const raw = completion.choices[0].message?.content?.trim() || "";
    let parsed: QuestionAnalyzerResponse;

    try {
      parsed = JSON.parse(raw);
    } catch {
      parsed = { corrected: raw, feedback: {}, examples: [] };
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
