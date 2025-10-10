import { NextRequest, NextResponse } from "next/server";
// import OpenAI from "openai";

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

interface GrammarExercise {
  title: string;
  text: string;
  blanks: Blank[];
  explanation: string;
  difficulty: "beginner" | "intermediate" | "advanced";
}

interface Blank {
  id: number;
  correctAnswer: string;
  options: string[];
  hint: string;
  grammarPoint: string;
}

export async function POST(request: NextRequest) {
  try {
    const { difficulty = "intermediate", topic = "daily life" } =
      await request.json();

    const prompt = `
      Create a Finnish grammar practice exercise with the following requirements:

      DIFFICULTY: ${difficulty}
      TOPIC: ${topic}

      REQUIREMENTS:
      - Generate a Finnish paragraph of 5-8 sentences with 4-6 blanks
      - Make sure that the base word is always present when generating 
      - Each blank should test important Finnish grammar concepts
      - Focus on: cases (partitive, genitive, inessive, etc.), verb conjugations (tenses, persons), consonant gradation, plural forms
      - For each blank, provide 3 options where only one is grammatically correct
      - Include hints explaining the grammar rule
      - Return as JSON with this exact structure:
      - Make the hint to be in English
      - Make the grammar point explained in English

      {
        "title": "Exercise title",
        "text": "Finnish text with ___blank1___ and ___blank2___ etc.",
        "blanks": [
          {
            "id": 1,
            "correctAnswer": "correct option",
            "options": ["option1", "option2", "option3"],
            "hint": "Grammar rule explanation",
            "grammarPoint": "case/tense/conjugation type"
          }
        ],
        "explanation": "Overall exercise explanation",
        "difficulty": "${difficulty}"
      }

      IMPORTANT:
      - Use ___blank1___, ___blank2___ etc. as placeholders in the text
      - Make options realistic but only one should be grammatically correct
      - Focus on common mistakes learners make
      - Return valid JSON only, no markdown or extra text
      - Make sure that the base word is always present when generating 
    `;

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
          content:
            "You are an expert Finnish language teacher. Create grammar exercises that help learners practice cases, conjugations, and gradations. Always return valid JSON.",
        },
        { role: "user", content: prompt },
      ],
      temperature: 0,
      max_tokens: 2000,
    });

    const responseText = completion.choices[0].message.content;

    // Extract JSON from response
    const jsonMatch = responseText?.match(/\{[\s\S]*\}/);
    const jsonString = jsonMatch ? jsonMatch[0] : responseText;

    if (!jsonString) {
      throw new Error("No valid JSON received from AI");
    }

    const exercise: GrammarExercise = JSON.parse(jsonString);

    // Validate the structure
    if (!exercise.text || !exercise.blanks || !Array.isArray(exercise.blanks)) {
      throw new Error("Invalid exercise structure received");
    }

    return NextResponse.json(exercise);
  } catch (error) {
    console.error("Error in grammar-practice route:", error);
    return NextResponse.json(
      {
        error: "Failed to generate grammar exercise",
        details: (error as Error).message,
      },
      { status: 500 }
    );
  }
}
