import { NextRequest, NextResponse } from "next/server";
import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

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

export const POST = async (req: NextRequest) => {
  try {
    const { sentence, history }: QuestionAnalyzerRequest = await req.json();

    if (!sentence) {
      return NextResponse.json(
        { error: "Sentence is required" },
        { status: 400 }
      );
    }

    const prompt = `
You are a Finnish question sentence tutor AI for language learners.

Analyze this Finnish question: "${sentence}"

RULES:
1. Correct grammar, spelling, word order, and suffixes (-ko/-kö) if needed
2. Identify the question type: "Question word", "-ko/-kö", "Subordinate"
3. Translate the sentence into natural English
4. Provide detailed feedback
5. Suggest a next practice question
6. Give 2-3 additional example questions

Return ONLY valid JSON with this exact structure:
{
  "corrected": "corrected question or original if already correct",
  "translation": "English translation",
  "type": "question type",
  "suggestion": "next practice question",
  "explanation": "brief explanation",
  "feedback": {
    "grammar": "grammar feedback",
    "spelling": "spelling feedback", 
    "suffixes": "suffix feedback",
    "wordOrder": "word order feedback",
    "tips": "learning tips"
  },
  "examples": ["Finnish question - English translation", "..."]
}

IMPORTANT: Return ONLY the JSON object, no additional text, thinking, or explanations.
`;

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile", // Better model that doesn't show thinking
      messages: [
        {
          role: "system",
          content:
            "You are a Finnish language tutor. Return ONLY valid JSON without any additional text or thinking process.",
        },
        { role: "user", content: prompt },
      ],
      temperature: 0, // Lower for more consistent output
      max_tokens: 1000,
    });

    const rawResponse = completion.choices[0].message?.content?.trim() || "";

    // Clean the response - remove any thinking tags or extra text
    let cleanResponse = rawResponse;

    // Remove <think>...</think> blocks if present
    cleanResponse = cleanResponse.replace(/<think>[\s\S]*?<\/think>/g, "");

    // Remove ```json and ``` markers
    cleanResponse = cleanResponse
      .replace(/```json\s*/g, "")
      .replace(/```\s*/g, "");

    // Extract JSON from response
    const jsonMatch = cleanResponse.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error("No valid JSON found in AI response");
    }

    const jsonString = jsonMatch[0];
    let parsed: QuestionAnalyzerResponse;

    try {
      parsed = JSON.parse(jsonString);
    } catch (parseError) {
      console.error("JSON Parse Error:", parseError);
      console.error("Cleaned response:", cleanResponse);

      // Fallback response
      parsed = {
        corrected: sentence,
        translation: "Translation not available",
        type: "Unknown",
        suggestion: "Mitä sinä teet?",
        explanation: "Analysis failed - please try again",
        feedback: {
          grammar: "Unable to analyze",
          spelling: "Unable to analyze",
          suffixes: "Unable to analyze",
          wordOrder: "Unable to analyze",
          tips: "Try rephrasing your question",
        },
        examples: [
          "Mitä sinä teet? - What are you doing?",
          "Missä sinä asut? - Where do you live?",
        ],
      };
    }

    return NextResponse.json(parsed);
  } catch (err) {
    console.error("Error in question analyzer:", err);
    return NextResponse.json(
      {
        error: "Failed to analyze question",
        details: (err as Error).message,
      },
      { status: 500 }
    );
  }
};
// import { NextRequest, NextResponse } from "next/server";
// // import OpenAI from "openai";
// import Groq from "groq-sdk";

// // const openai = new OpenAI({
// //   apiKey: process.env.OPENAI_API_KEY,
// // });
// const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

// interface QuestionAnalyzerRequest {
//   sentence?: string;
//   history?: { sentence: string; corrected?: string }[];
// }

// interface QuestionAnalyzerResponse {
//   corrected?: string;
//   translation?: string;
//   type?: string;
//   suggestion?: string;
//   explanation?: string;
//   feedback?: {
//     grammar?: string;
//     spelling?: string;
//     suffixes?: string;
//     wordOrder?: string;
//     tips?: string;
//   };
//   examples?: string[];
// }

// type ChatRole = "system" | "user" | "assistant";

// export const POST = async (req: NextRequest) => {
//   try {
//     const { sentence, history }: QuestionAnalyzerRequest = await req.json();

//     if (!sentence) {
//       return NextResponse.json(
//         { error: "Sentence is required" },
//         { status: 400 }
//       );
//     }

//     const messagesForAPI: { role: ChatRole; content: string }[] = [
//       {
//         role: "system",
//         content: `
// You are a Finnish question sentence tutor AI for language learners.
// Rules:
// 1. Analyze the user's Finnish question sentence.
// 2. Correct grammar, spelling, word order, and suffixes (-ko/-kö) if needed.
// 3. Identify the question type: "Question word", "-ko/-kö", "Subordinate".
// 4. Translate the sentence into natural English.
// 5. Provide detailed feedback including grammar, spelling, suffixes, and word order.
// 6. Suggest a next practice question for the learner.
// 7. Optionally, give 2-3 additional example questions illustrating the same type.
// 8. Make the explanations simple and learner-friendly.
// 9. Return JSON ONLY in this structure:
// {
//   "corrected": "...",
//   "translation": "...",
//   "type": "...",
//   "suggestion": "...",
//   "explanation": "...",
//   "feedback": {
//     "grammar": "...",
//     "spelling": "...",
//     "suffixes": "...",
//     "wordOrder": "...",
//     "tips": "..."
//   },
//   "examples": ["Finnish question - English translation", "..."]
// }
//         `.trim(),
//       },
//       ...(history?.map((h) => ({
//         role: "user" as ChatRole,
//         content: h.sentence,
//       })) || []),
//       { role: "user", content: sentence },
//     ];

//     const completion = await groq.chat.completions.create({
//       model: "deepseek-r1-distill-llama-70b",
//       messages: messagesForAPI,
//       temperature: 0.5,
//       max_tokens: 1000,
//     });

//     const raw = completion.choices[0].message?.content?.trim() || "";
//     let parsed: QuestionAnalyzerResponse;

//     try {
//       parsed = JSON.parse(raw);
//     } catch {
//       parsed = { corrected: raw, feedback: {}, examples: [] };
//     }

//     return NextResponse.json(parsed);
//   } catch (err) {
//     console.error(err);
//     return NextResponse.json(
//       { error: "AI response failed", details: (err as Error).message },
//       { status: 500 }
//     );
//   }
// };
