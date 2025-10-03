import { NextRequest, NextResponse } from "next/server";
import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

interface CaseExplanationRequest {
  word: string;
  case: string;
}

interface CaseExplanation {
  case: string;
  usage: string;
  examples: string[];
  sentenceExamples: { finnish: string; english: string; explanation: string }[];
  whenToUse: string[];
  commonMistakes: string[];
}

export async function POST(request: NextRequest) {
  try {
    // Check API key first
    if (!process.env.GROQ_API_KEY) {
      console.error("GROQ_API_KEY missing");
      return NextResponse.json(
        { error: "API configuration error" },
        { status: 500 }
      );
    }

    const { word, case: caseType }: CaseExplanationRequest =
      await request.json();

    if (!word) {
      return NextResponse.json({ error: "Word is required" }, { status: 400 });
    }

    console.log(`Processing request for word: ${word}, case: ${caseType}`);

    // Pre-defined words with correct case examples
    const commonWords: Record<string, Record<string, CaseExplanation>> = {
      talo: {
        all: {
          case: "All Cases",
          usage:
            'The word "talo" (house) is a common noun that demonstrates regular Finnish case endings.',
          examples: [
            "talo (nominative)",
            "talon (genitive)",
            "taloa (partitive)",
            "talossa (inessive)",
            "talosta (elative)",
            "taloon (illative)",
            "talolla (adessive)",
            "talolta (ablative)",
            "talolle (allative)",
            "talona (essive)",
            "taloksi (translative)",
          ],
          sentenceExamples: [
            {
              finnish: "Talo on iso.",
              english: "The house is big.",
              explanation: "Nominative case - subject",
            },
            {
              finnish: "Talon ovi on punainen.",
              english: "The house's door is red.",
              explanation: "Genitive case - possession",
            },
            {
              finnish: "Näen talon.",
              english: "I see the house.",
              explanation: "Partitive/Genitive case - object",
            },
            {
              finnish: "Olen talossa.",
              english: "I am in the house.",
              explanation: "Inessive case - location inside",
            },
            {
              finnish: "Menen taloon.",
              english: "I go into the house.",
              explanation: "Illative case - movement into",
            },
            {
              finnish: "Tulen talosta.",
              english: "I come from the house.",
              explanation: "Elative case - movement out of",
            },
          ],
          whenToUse: [
            "Nominative: Subject of sentence",
            "Genitive: Ownership, possession",
            "Partitive: Partial objects, negatives, quantities",
            "Inessive: Being inside",
            "Elative: Coming out of",
            "Illative: Going into",
            "Adessive: Being on, possession",
            "Ablative: Coming off",
            "Allative: Moving onto",
            "Essive: Temporary role",
            "Translative: Becoming something",
          ],
          commonMistakes: [
            "Using partitive incorrectly in negatives",
            "Mixing up inessive and illative",
            "Forgetting consonant gradation with some words",
          ],
        },
      },
    };

    // Check if we have pre-defined explanations
    const lowerWord = word.toLowerCase();
    if (
      commonWords[lowerWord] &&
      (caseType === "all" || commonWords[lowerWord][caseType])
    ) {
      console.log(`Using pre-defined explanation for ${word}`);
      if (caseType === "all") {
        return NextResponse.json(commonWords[lowerWord]["all"]);
      } else if (commonWords[lowerWord][caseType]) {
        return NextResponse.json(commonWords[lowerWord][caseType]);
      }
    }

    // Dynamic prompt building
    const prompt =
      caseType === "all"
        ? `
    You are a Finnish language expert. Explain ALL Finnish grammatical cases for the word "${word}".

    - Do NOT simply add suffixes (like "${word}ssa"). 
    - Use correct declension rules (e.g. "mies" → "miehen, miestä, miehessä, miehestä, mieheen").
    - Always output forms as they are actually used in Finnish.
    - Give example sentences showing the word in all ${caseType} 
    - Give example sentences showing the word in ${caseType} case context

    Provide JSON with this structure:
    {
      "case": "All Cases",
      "usage": "Explanation of how '${word}' works across Finnish cases",
      "examples": [
        "Nominative form",
        "Genitive form",
        "Partitive form",
        "Inessive form",
        "Elative form",
        "Illative form",
        "Adessive form",
        "Ablative form",
        "Allative form",
        "Essive form",
        "Translative form"
      ],
      "sentenceExamples": [
        {
          "finnish": "Sentence using nominative",
          "english": "English translation",
          "explanation": "Nominative usage"
        },
        {
          "finnish": "Sentence using genitive",
          "english": "English translation",
          "explanation": "Genitive usage"
        },
        {
          "finnish": "Sentence using partitive",
          "english": "English translation",
          "explanation": "Partitive usage"
        },
        {
          "finnish": "Sentence using inessive",
          "english": "English translation",
          "explanation": "Inessive usage"
        },
        {
          "finnish": "Sentence using illative",
          "english": "English translation",
          "explanation": "Illative usage"
        }
      ],
      "whenToUse": [
        "Nominative: subject",
        "Genitive: possession",
        "Partitive: negatives, quantities",
        "Inessive: inside",
        "Illative: into"
      ],
      "commonMistakes": [
        "Forgetting irregular stems",
        "Mixing illative/inessive",
        "Wrong partitive in negatives"
      ]
    }

    Return ONLY the JSON.
    `
        : `
    You are a Finnish language expert. Explain the ${caseType} case for the word "${word}".

    - Do NOT simply attach suffixes.
    - Apply proper declension rules (e.g. "mies" → "miehen", not "miesn").
    - Always output the real, natural form.
    - Give example sentences showing the word in all ${caseType} 
    - Give example sentences showing the word in ${caseType} case context

    Provide JSON with this structure:
    {
      "case": "${caseType}",
      "usage": "Explanation of ${caseType} case for '${word}'",
      "examples": ["Correct singular form", "Correct plural form if applicable"],
      "sentenceExamples": [
        {
          "finnish": "Finnish sentence with correct ${caseType} form",
          "english": "English translation",
          "explanation": "Why this case is used"
        }
      ],
      "whenToUse": [
        "Rule 1",
        "Rule 2",
        "Rule 3"
      ],
      "commonMistakes": [
        "Mistake 1",
        "Mistake 2",
        "Mistake 3"
      ]
    }

    Return ONLY the JSON.
    `;

    console.log("Sending request to Groq API...");

    const completion = await groq.chat.completions.create({
      model: "gemma2-9b-it",
      messages: [
        {
          role: "system",
          content:
            "You are a helpful Finnish language teacher. Always return valid JSON only, no extra text.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0,
      max_tokens: 1500,
      stream: false,
    });

    const responseText = completion.choices[0]?.message?.content;
    console.log("Groq raw response:", responseText);

    if (!responseText) {
      throw new Error("No response content from Groq API");
    }

    let result: CaseExplanation;
    try {
      result = JSON.parse(responseText);
    } catch (directParseError) {
      const jsonMatch = responseText.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        result = JSON.parse(jsonMatch[0]);
      } else {
        throw new Error("No valid JSON found in response");
      }
    }

    console.log("Successfully parsed Groq response");
    return NextResponse.json(result);
  } catch (error) {
    console.error("Error in case explanation API:", error);

    let message = "Unknown error";
    if (error instanceof Error) {
      message = error.message;
    }

    return NextResponse.json(
      {
        error: "Failed to generate case explanation",
        details:
          process.env.NODE_ENV === "development"
            ? message
            : "Something went wrong. Please try again later.",
      },
      { status: 500 }
    );
  }
}

// // app/api/case-explanation/route.ts
// import { NextRequest, NextResponse } from 'next/server';
// import OpenAI from 'openai';

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// interface CaseExplanationRequest {
//   word: string;
//   case: string;
// }

// interface CaseExplanation {
//   case: string;
//   usage: string;
//   examples: string[];
//   whenToUse: string[];
//   commonMistakes: string[];
// }

// export async function POST(request: NextRequest) {
//   try {
//     const { word, case: caseType }: CaseExplanationRequest = await request.json();

//     if (!word) {
//       return NextResponse.json(
//         { error: 'Word is required' },
//         { status: 400 }
//       );
//     }

//     // For common words, we can provide pre-defined explanations
//     const commonWords: Record<string, Record<string, CaseExplanation>> = {
//       'talo': {
//         'all': {
//           case: 'All Cases',
//           usage: 'The word "talo" (house) is a common noun that demonstrates regular Finnish case endings.',
//           examples: [
//             'Talo on iso. (The house is big. - Nominative)',
//             'Talon ovi on punainen. (The house\'s door is red. - Genitive)',
//             'Näen talon. (I see a house. - Partitive)',
//             'Olen talossa. (I am in the house. - Inessive)',
//             'Menen taloon. (I go into the house. - Illative)',
//             'Tulen talosta. (I come from the house. - Elative)'
//           ],
//           whenToUse: [
//             'Nominative: Default form, subject of sentence',
//             'Genitive: Ownership, possession',
//             'Partitive: Partial objects, negative sentences, some quantities',
//             'Inessive: Being inside something',
//             'Illative: Moving into something',
//             'Elative: Moving out of something'
//           ],
//           commonMistakes: [
//             'Using partitive when nominative should be used for subjects',
//             'Confusing genitive and partitive in possessive constructions',
//             'Using wrong case with prepositions'
//           ]
//         }
//       },
//       'auto': {
//         'all': {
//           case: 'All Cases',
//           usage: 'The word "auto" (car) follows regular Finnish case endings.',
//           examples: [
//             'Auto on uusi. (The car is new. - Nominative)',
//             'Auton väri on sininen. (The car\'s color is blue. - Genitive)',
//             'Näen auton. (I see a car. - Partitive)',
//             'Olen autossa. (I am in the car. - Inessive)',
//             'Menen autoon. (I go into the car. - Illative)'
//           ],
//           whenToUse: [
//             'Nominative: Subject of sentence, default form',
//             'Genitive: Showing possession or ownership',
//             'Partitive: Partial objects, after numbers, in negative sentences',
//             'Inessive: Being inside something',
//             'Illative: Moving into something'
//           ],
//           commonMistakes: [
//             'Forgetting consonant gradation in genitive (auto -> auton)',
//             'Using wrong case with location prepositions'
//           ]
//         }
//       }
//     };

//     // Check if we have a pre-defined explanation for this word
//     const lowerWord = word.toLowerCase();
//     if (commonWords[lowerWord] && (caseType === 'all' || commonWords[lowerWord][caseType])) {
//       if (caseType === 'all') {
//         return NextResponse.json(commonWords[lowerWord]['all']);
//       } else {
//         // For specific cases, we'll generate a more detailed explanation
//         const specificCase = commonWords[lowerWord]['all'];
//         specificCase.case = caseType.charAt(0).toUpperCase() + caseType.slice(1);
//         return NextResponse.json(specificCase);
//       }
//     }

//     // For other words, use OpenAI to generate an explanation
//     const prompt = `
//       Explain the Finnish grammatical cases for the word "${word}"${caseType !== 'all' ? `, focusing on the ${caseType} case` : ''}.

//       Please provide:
//       1. A brief explanation of how this word changes in different cases
//       2. Examples of the word in different cases (if caseType is 'all') or detailed examples for the specific case
//       3. When to use each case (if caseType is 'all') or when to use the specific case
//       4. Common mistakes learners make with this word's cases

//       Format the response as JSON with the following structure:
//       {
//         "case": "${caseType !== 'all' ? caseType : 'All Cases'}",
//         "usage": "brief explanation",
//         "examples": ["example 1", "example 2", "example 3"],
//         "whenToUse": ["when to use 1", "when to use 2", "when to use 3"],
//         "commonMistakes": ["mistake 1", "mistake 2", "mistake 3"]
//       }

//       If the word is a verb, explain how cases are used with that verb (e.g., what cases its objects take).
//     `;

//     const completion = await openai.chat.completions.create({
//       model: "gpt-3.5-turbo",
//       messages: [
//         {
//           role: "system",
//           content: "You are a helpful Finnish language teacher. Provide clear explanations of Finnish grammatical cases with practical examples."
//         },
//         {
//           role: "user",
//           content: prompt
//         }
//       ],
//       temperature: 0.7,
//       max_tokens: 1500,
//     });

//     const responseText = completion.choices[0].message.content;

//     try {
//       const jsonMatch = responseText?.match(/\{[\s\S]*\}/);
//       const jsonString = jsonMatch ? jsonMatch[0] : responseText;

//       if (!jsonString) {
//         throw new Error('No JSON response from OpenAI');
//       }

//       const result: CaseExplanation = JSON.parse(jsonString);
//       return NextResponse.json(result);
//     } catch (parseError) {
//       console.error('Error parsing OpenAI response:', parseError);
//       console.error('Response text:', responseText);

//       // Return a fallback explanation if parsing fails
//       return NextResponse.json({
//         case: caseType !== 'all' ? caseType : 'All Cases',
//         usage: `The word "${word}" follows standard Finnish case rules.`,
//         examples: [
//           `${word} (basic form)`,
//           `${word}n (genitive case)`,
//           `${word}a (partitive case)`
//         ],
//         whenToUse: [
//           'Nominative: Subject of the sentence',
//           'Genitive: Ownership or possession',
//           'Partitive: Partial objects, negative sentences'
//         ],
//         commonMistakes: [
//           'Using the wrong case ending',
//           'Forgetting consonant gradation',
//           'Using nominative when partitive is needed'
//         ]
//       });
//     }
//   } catch (error) {
//     console.error('Error calling OpenAI API:', error);
//     return NextResponse.json(
//       { error: 'Failed to generate case explanation' },
//       { status: 500 }
//     );
//   }
// }
