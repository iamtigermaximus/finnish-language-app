import { NextRequest, NextResponse } from "next/server";
// import OpenAI from "openai";
import Groq from "groq-sdk";

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

interface CheckLocativeRequest {
  sentence: string;
  locative: string;
  endings: string[];
}

export async function POST(request: NextRequest) {
  try {
    const { sentence, locative, endings }: CheckLocativeRequest =
      await request.json();

    if (!sentence || !locative) {
      return NextResponse.json(
        { error: "Sentence and locative case are required" },
        { status: 400 }
      );
    }

    // Simple validation: check if any valid ending is present in the sentence
    const hasEnding = endings.some((ending) =>
      sentence.toLowerCase().includes(ending.toLowerCase())
    );

    if (!hasEnding) {
      return NextResponse.json({
        correct: `${sentence} (No valid ${locative} ending found)`,
        explanation: `Try using one of these endings for ${locative}: ${endings.join(
          ", "
        )}.`,
      });
    }

    const prompt = `
      A Finnish language learner has written this sentence: "${sentence}"
      They are trying to use the "${locative}" case, which normally takes the endings: ${endings.join(
      ", "
    )}.
      
      Please:
      1. Check if the sentence is grammatically correct, especially regarding the "${locative}" case usage.
      2. If incorrect, provide the corrected version.
      3. Explain any errors related to the "${locative}" case.
      4. Keep your response focused on locative case usage.
      
      Format the response as JSON with the following structure:
      {
        "correct": "the corrected sentence if needed, otherwise the original",
        "explanation": "brief explanation of the correction or confirmation that it's correct"
      }
    `;

    const completion = await groq.chat.completions.create({
      model: "gemma2-9b-it",
      messages: [
        {
          role: "system",
          content:
            "You are a Finnish grammar expert. Provide clear, focused feedback on Finnish locative case usage.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.7,
      max_tokens: 500,
    });

    const responseText = completion.choices[0].message?.content;

    try {
      const jsonMatch = responseText?.match(/\{[\s\S]*\}/);
      const jsonString = jsonMatch ? jsonMatch[0] : responseText;

      if (!jsonString) throw new Error("No JSON response from OpenAI");

      const result = JSON.parse(jsonString);
      return NextResponse.json(result);
    } catch (parseError) {
      console.error("Error parsing OpenAI response:", parseError);

      return NextResponse.json({
        correct: sentence,
        explanation: hasEnding
          ? `You included a possible ${locative} ending, but the AI could not analyze the grammar.`
          : `Try using one of these endings for ${locative}: ${endings.join(
              ", "
            )}.`,
      });
    }
  } catch (error) {
    console.error("Error calling OpenAI API:", error);

    // Fallback without OpenAI
    const body = await request.json();
    const sentence = body.sentence || "";
    const locative = body.locative || "";
    const endings = body.endings || [];

    const hasEnding = endings.some((ending: string) =>
      sentence.toLowerCase().includes(ending.toLowerCase())
    );

    return NextResponse.json({
      correct: hasEnding
        ? sentence
        : `${sentence} (Missing ${locative} ending)`,
      explanation: hasEnding
        ? `Looks like you used a ${locative} ending. Good job!`
        : `Remember: ${locative} typically uses these endings: ${endings.join(
            ", "
          )}.`,
    });
  }
}
