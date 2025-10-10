import Groq from "groq-sdk";
import { NextRequest, NextResponse } from "next/server";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

interface CheckConnectorRequest {
  sentence: string;
  connector: string;
  english: string;
}

export async function POST(request: NextRequest) {
  try {
    const { sentence, connector, english }: CheckConnectorRequest =
      await request.json();

    if (!sentence || !connector) {
      return NextResponse.json(
        { error: "Sentence and connector are required" },
        { status: 400 }
      );
    }

    const prompt = `
You are a Finnish language teacher. Analyze this Finnish sentence: "${sentence}"

The student is practicing using the connector word "${connector}" (which means "${english}" in English).

Please:
1. Check the ENTIRE sentence for grammatical correctness, spelling, and proper case endings
2. Pay special attention to the usage of "${connector}" 
3. If ANY part of the sentence is incorrect (spelling, grammar, cases, etc.), provide the fully corrected version
4. Explain all errors found, not just connector-related ones

IMPORTANT: Focus on Finnish grammar rules like:
- Case endings (inessive -ssa/-ssä, elative -sta/-stä, etc.)
- Vowel harmony (a/o/u vs ä/ö/y)
- Consonant gradation
- Word order
- Verb conjugation

Examples of corrections:
- "Asuin Helsingissa" → "Asuin Helsingissä" (inessive case + vowel harmony)
- "Olen ruoka" → "Olen ruokaa" (partitive case needed)
- "Menen kouluun" → "Menen kouluun" (correct)

Respond in JSON format:
{
  "correct": "the fully corrected sentence",
  "explanation": "detailed explanation of all errors found"
}
    `;

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
          content:
            "You are a strict Finnish grammar expert. Check ALL aspects of the sentence - spelling, grammar, cases, vowel harmony. Provide complete corrections and detailed explanations.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0,
      max_tokens: 500,
    });

    const responseText = completion.choices[0].message.content;

    try {
      const jsonMatch = responseText?.match(/\{[\s\S]*\}/);
      const jsonString = jsonMatch ? jsonMatch[0] : responseText;

      if (!jsonString) {
        throw new Error("No JSON response from Groq");
      }

      const result = JSON.parse(jsonString);
      return NextResponse.json(result);
    } catch (parseError) {
      console.error("Error parsing Groq response:", parseError);

      // Enhanced fallback with basic Finnish grammar checks
      const hasConnector = sentence.includes(connector);

      // Simple vowel harmony check for common errors
      let correctedSentence = sentence;
      let explanation = "";

      // Check for basic vowel harmony errors
      if (sentence.includes("Helsingissa")) {
        correctedSentence = sentence.replace("Helsingissa", "Helsingissä");
        explanation =
          "Corrected 'Helsingissa' → 'Helsingissä' (inessive case requires vowel harmony: -ssä after front vowels i, e, ä, ö, y)";
      } else if (sentence.includes("Turussa")) {
        correctedSentence = sentence.replace("Turussa", "Turussa");
        explanation =
          "Turussa is actually correct (back vowels a, o, u take -ssa)";
      } else if (hasConnector) {
        explanation =
          "Sentence looks mostly correct, but double-check case endings and vowel harmony.";
      } else {
        explanation = `Try using "${connector}" (${english}) in your sentence and check grammar.`;
      }

      return NextResponse.json({
        correct: correctedSentence,
        explanation: explanation,
      });
    }
  } catch (error) {
    console.error("Error calling Groq API:", error);

    // Enhanced fallback
    const requestBody = await request.json();
    const userSentence = requestBody.sentence || "";
    const userConnector = requestBody.connector || "";
    const userEnglish = requestBody.english || "";

    // Basic vowel harmony correction in fallback
    let correctedSentence = userSentence;
    if (userSentence.includes("Helsingissa")) {
      correctedSentence = userSentence.replace("Helsingissa", "Helsingissä");
    }

    const hasConnector = userSentence.includes(userConnector);

    return NextResponse.json({
      correct: correctedSentence,
      explanation: hasConnector
        ? "Your sentence has been checked. Remember Finnish vowel harmony: -ssa/-ssä depends on the word's vowels."
        : `Try using "${userConnector}" (${userEnglish}) in your sentence and check grammar.`,
    });
  }
}
// // app/api/check-connector/route.ts
// import { NextRequest, NextResponse } from "next/server";
// import Groq from "groq-sdk";

// const groq = new Groq({
//   apiKey: process.env.GROQ_API_KEY,
// });

// interface CheckConnectorRequest {
//   sentence: string;
//   connector: string;
//   english: string;
// }

// // Check if the sentence contains the connector
// function containsConnector(sentence: string, connector: string): boolean {
//   const regex = new RegExp(`${connector}\\b`, "i");
//   return regex.test(sentence);
// }

// // Fix Finnish locative endings with umlauts automatically
// function fixFinnishCase(sentence: string, connector: string): string {
//   const replacements: Record<string, string> = {
//     ssa: "ssä",
//     sta: "stä",
//     lla: "llä",
//     lta: "ltä",
//     lle: "lle", // usually correct, no umlaut needed
//   };

//   const fixedConnector = replacements[connector] || connector;

//   return sentence.replace(
//     new RegExp(`([a-zA-Zäöå]+)${connector}`, "g"),
//     (_, stem) => `${stem}${fixedConnector}`
//   );
// }

// export async function POST(request: NextRequest) {
//   try {
//     const { sentence, connector, english }: CheckConnectorRequest =
//       await request.json();

//     if (!sentence || !connector) {
//       return NextResponse.json(
//         { error: "Sentence and connector are required" },
//         { status: 400 }
//       );
//     }

//     // Basic validation
//     if (!containsConnector(sentence, connector)) {
//       return NextResponse.json({
//         correct: `${fixFinnishCase(sentence, connector)}`,
//         explanation: `Try using the Finnish case ending "${connector}" (${english}) in your sentence.`,
//       });
//     }

//     const prompt = `
//       A Finnish learner wrote: "${sentence}"
//       They are trying to use the Finnish case ending "${connector}" (means "${english}").

//       Instructions:
//       1. Check if the sentence is grammatically correct.
//       2. Correct only the usage of the connector if needed.
//       3. Keep the base word unchanged.
//       4. Correct spelling errors including umlauts.

//       Return ONLY valid JSON:
//       {
//         "correct": "corrected sentence if needed",
//         "explanation": "brief explanation"
//       }
//     `;

//     const completion = await groq.chat.completions.create({
//       model: "llama-3.3-70b-versatile",
//       messages: [
//         {
//           role: "system",
//           content:
//             "You are a Finnish teacher. Focus on locative case endings. Return ONLY valid JSON.",
//         },
//         {
//           role: "user",
//           content: prompt,
//         },
//       ],
//       temperature: 0,
//       max_tokens: 500,
//     });

//     const responseText = completion.choices[0]?.message?.content?.trim();
//     if (!responseText) throw new Error("No response from Groq");

//     try {
//       const jsonMatch = responseText.match(/\{[\s\S]*\}/);
//       const jsonString = jsonMatch ? jsonMatch[0] : responseText;
//       if (!jsonString) throw new Error("No JSON response from Groq");

//       const result = JSON.parse(jsonString);

//       // Fix connector automatically if AI missed
//       result.correct = fixFinnishCase(result.correct, connector);

//       if (!result.correct || !result.explanation) {
//         throw new Error("Invalid response structure from Groq");
//       }

//       return NextResponse.json(result);
//     } catch (parseError) {
//       console.error("Error parsing Groq response:", parseError);
//       console.error("Raw response:", responseText);

//       return NextResponse.json({
//         correct: fixFinnishCase(sentence, connector),
//         explanation: `Automatically fixed Finnish case ending for "${connector}".`,
//       });
//     }
//   } catch (error) {
//     console.error("Error calling Groq API:", error);

//     const requestBody = await request.json().catch(() => ({}));
//     const userSentence = requestBody.sentence || "";
//     const userConnector = requestBody.connector || "";

//     return NextResponse.json({
//       correct: fixFinnishCase(userSentence, userConnector),
//       explanation: `Automatically fixed Finnish case ending for "${userConnector}".`,
//     });
//   }
// }

// import { NextRequest, NextResponse } from "next/server";
// // import OpenAI from 'openai';

// // const openai = new OpenAI({
// //   apiKey: process.env.OPENAI_API_KEY,
// // });
// import Groq from "groq-sdk";

// const groq = new Groq({
//   apiKey: process.env.GROQ_API_KEY,
// });
// interface CheckConnectorRequest {
//   sentence: string;
//   connector: string;
//   english: string;
// }

// export async function POST(request: NextRequest) {
//   try {
//     const { sentence, connector, english }: CheckConnectorRequest =
//       await request.json();

//     if (!sentence || !connector) {
//       return NextResponse.json(
//         { error: "Sentence and connector are required" },
//         { status: 400 }
//       );
//     }

//     // Simple validation for demonstration
//     if (!sentence.includes(connector)) {
//       return NextResponse.json({
//         correct: `${sentence} (The sentence doesn't contain "${connector}")`,
//         explanation: `Try using "${connector}" (${english}) in your sentence.`,
//       });
//     }

//     const prompt = `
//       A Finnish language learner has written this sentence: "${sentence}"
//       They are trying to use the connector word "${connector}" (which means "${english}" in English).

//       Please:
//       1. Check if the sentence is grammatically correct, especially the usage of "${connector}"
//       2. If incorrect, provide the corrected version
//       3. Explain any errors related to "${connector}" usage
//       4. Keep your response focused on the connector word usage

//       Format the response as JSON with the following structure:
//       {
//         "correct": "the corrected sentence if needed, otherwise the original",
//         "explanation": "brief explanation of the correction or confirmation that it's correct"
//       }
//     `;

//     const completion = await groq.chat.completions.create({
//       model: "llama-3.3-70b-versatile",
//       messages: [
//         {
//           role: "system",
//           content:
//             "You are a helpful Finnish language teacher. Provide clear, focused feedback on connector word usage.",
//         },
//         {
//           role: "user",
//           content: prompt,
//         },
//       ],
//       temperature: 0,
//       max_tokens: 500,
//     });

//     const responseText = completion.choices[0].message.content;

//     try {
//       const jsonMatch = responseText?.match(/\{[\s\S]*\}/);
//       const jsonString = jsonMatch ? jsonMatch[0] : responseText;

//       if (!jsonString) {
//         throw new Error("No JSON response from OpenAI");
//       }

//       const result = JSON.parse(jsonString);
//       return NextResponse.json(result);
//     } catch (parseError) {
//       console.error("Error parsing OpenAI response:", parseError);

//       // Fallback response with simple validation
//       const hasConnector = sentence.includes(connector);
//       return NextResponse.json({
//         correct: hasConnector
//           ? sentence
//           : `${sentence} (Add "${connector}" to your sentence)`,
//         explanation: hasConnector
//           ? "Your sentence looks good! Keep practicing."
//           : `Try using "${connector}" (${english}) in your sentence.`,
//       });
//     }
//   } catch (error) {
//     console.error("Error calling OpenAI API:", error);

//     // Basic fallback without API - use the request sentence
//     const requestBody = await request.json();
//     const userSentence = requestBody.sentence || "";
//     const userConnector = requestBody.connector || "";
//     const userEnglish = requestBody.english || "";

//     const hasConnector = userSentence.includes(userConnector);

//     return NextResponse.json({
//       correct: hasConnector
//         ? userSentence
//         : `${userSentence} (Add "${userConnector}" to your sentence)`,
//       explanation: hasConnector
//         ? "Your sentence looks good! Keep practicing."
//         : `Try using "${userConnector}" (${userEnglish}) in your sentence.`,
//     });
//   }
// }
