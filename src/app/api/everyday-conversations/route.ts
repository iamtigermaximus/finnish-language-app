import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

interface ConversationRequest {
  scenario: string;
  userMessage: string;
  history: { sender: 'user' | 'ai'; message: string }[];
}

interface AIResponse {
  sender: 'ai';
  message: string;
  translation?: string;
  suggestion?: string;
  correction?: string;
  correctionTranslation?: string;
  feedback?: {
    grammar: string;
    spelling: string;
  };
}

type ChatRole = 'system' | 'user' | 'assistant';

export const POST = async (req: NextRequest) => {
  try {
    const { scenario, userMessage, history }: ConversationRequest = await req.json();

    if (!scenario || !userMessage) {
      return NextResponse.json(
        { error: 'Scenario and userMessage required' },
        { status: 400 }
      );
    }

    const messagesForAPI: { role: ChatRole; content: string }[] = [
      {
        role: 'system',
        content: `
You are a Finnish tutor AI. Engage in continuous conversation in Finnish for the scenario "${scenario}".

Rules:
1. Reply naturally in Finnish.
2. Always provide an English translation.
3. Correct the user's last message if there is a grammar or spelling mistake.
4. Provide brief feedback on grammar and spelling only if a correction is applied.
5. Suggest a possible response the user could make next in Finnish.
6. IMPORTANT: Respond with VALID JSON ONLY in this structure, no extra text, no explanations, no formatting:

{
  "sender": "ai",
  "message": "...",
  "translation": "...",
  "suggestion": "...",
  "correction": "...",
  "correctionTranslation": "...",
  "feedback": {
    "grammar": "...",
    "spelling": "..."
  }
}
        `.trim()
      },
      ...history.map(msg => ({
        role: msg.sender === 'user' ? 'user' as ChatRole : 'assistant' as ChatRole,
        content: msg.message
      })),
      { role: 'user' as ChatRole, content: userMessage }
    ];

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: messagesForAPI,
      temperature: 0.5,
      max_tokens: 800,
      response_format: { type: "json_object" } // ✅ Force JSON-only output
    });

    const raw = completion.choices[0].message?.content?.trim() || '';
    let parsed: AIResponse;

    try {
      parsed = JSON.parse(raw);
    } catch {
      parsed = {
        sender: 'ai',
        message: raw,
        translation: undefined,
        suggestion: undefined,
        correction: undefined,
        correctionTranslation: undefined,
        feedback: undefined
      };
    }

    return NextResponse.json(parsed);
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: 'AI response failed', details: (err as Error).message },
      { status: 500 }
    );
  }
};
