// /src/app/api/conditional-tense/route.ts
import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

interface ConditionalAnalysis {
  verb: string;
  english: string;
  conditional: {
    base: string;
    conditional: string;
    negative: string;
    rule: string;
  };
  usage: string[];
  examples: string[];
  translations: string[];
  notes: string;
  isFinnishInput: boolean;
}

function isFinnishInput(word: string): boolean {
  const finnishChars = /[äöå]/i;
  return finnishChars.test(word) || word.endsWith("a") || word.endsWith("ä");
}

export async function POST(req: NextRequest) {
  try {
    const { verb } = await req.json();
    if (!verb) {
      return NextResponse.json({ error: "Verb is required" }, { status: 400 });
    }

    let finnishVerb = verb.trim();
    let isFinnish = isFinnishInput(finnishVerb);

    // Translate English verb to Finnish if needed
    if (!isFinnish) {
      const translatePrompt = `Translate this English verb to Finnish: "${finnishVerb}". Only return the Finnish word.`;
      const translateRes = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: "You are a Finnish language expert. Return only the Finnish translation of the verb." },
          { role: "user", content: translatePrompt }
        ],
        temperature: 0,
        max_tokens: 10
      });

      const translationMessage = translateRes.choices?.[0]?.message?.content?.trim();
      if (!translationMessage) {
        return NextResponse.json({ error: "Failed to translate verb to Finnish" }, { status: 500 });
      }
      finnishVerb = translationMessage;
      isFinnish = true;
    }

    // Generate conditional form and examples
    const prompt = `
      Analyze the Finnish verb: "${finnishVerb}".
      Provide JSON with:
      1. English translation
      2. Base verb
      3. Conditional form (singular)
      4. Negative form
      5. Formation rule
      6. Usage contexts (array)
      7. Example sentences (array)
      8. Translations of example sentences (array)
      9. Notes

      Return JSON in this exact structure:
      {
        "verb": "Finnish verb",
        "english": "English translation",
        "conditional": {
          "base": "base form",
          "conditional": "conditional singular",
          "negative": "negative form",
          "rule": "formation rule"
        },
        "usage": ["usage 1", "usage 2"],
        "examples": ["example 1", "example 2"],
        "translations": ["translation 1", "translation 2"],
        "notes": "important notes",
        "isFinnishInput": true
      }
      Only return the JSON object.
    `;

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a Finnish grammar expert. Return ONLY valid JSON with the conditional forms and examples."
        },
        { role: "user", content: prompt }
      ],
      temperature: 0.7,
      max_tokens: 2000
    });

    const responseText = completion.choices?.[0]?.message?.content;
    if (!responseText) {
      return NextResponse.json({ error: "No response from OpenAI" }, { status: 500 });
    }

    let result: ConditionalAnalysis;
    try {
      const jsonMatch = responseText.match(/\{[\s\S]*\}/);
      const jsonString = jsonMatch ? jsonMatch[0] : responseText;
      result = JSON.parse(jsonString);
    } catch (err) {
      console.error("Failed to parse JSON:", err);
      console.error("Response text:", responseText);
      return NextResponse.json({ error: "Failed to parse OpenAI response" }, { status: 500 });
    }

    return NextResponse.json(result);

  } catch (err) {
    console.error("Error in /api/conditional-tense:", err);
    return NextResponse.json({ error: "Failed to analyze verb" }, { status: 500 });
  }
}
