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

// app/api/case-explanation/route.ts
import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
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
    const { word, case: caseType }: CaseExplanationRequest = await request.json();

    if (!word) {
      return NextResponse.json(
        { error: 'Word is required' },
        { status: 400 }
      );
    }

    // For common words, we can provide pre-defined explanations with sentence examples
    const commonWords: Record<string, Record<string, CaseExplanation>> = {
      'talo': {
        'all': {
          case: 'All Cases',
          usage: 'The word "talo" (house) is a common noun that demonstrates regular Finnish case endings.',
          examples: [
            'talo (nominative)',
            'talon (genitive)',
            'taloa (partitive)',
            'talossa (inessive)',
            'taloon (illative)',
            'talosta (elative)'
          ],
          sentenceExamples: [
            {
              finnish: 'Talo on iso.',
              english: 'The house is big.',
              explanation: 'Nominative case - subject of the sentence'
            },
            {
              finnish: 'Talon ovi on punainen.',
              english: 'The house\'s door is red.',
              explanation: 'Genitive case - shows possession'
            },
            {
              finnish: 'Näen talon.',
              english: 'I see a house.',
              explanation: 'Partitive case - object of the sentence'
            },
            {
              finnish: 'Olen talossa.',
              english: 'I am in the house.',
              explanation: 'Inessive case - location (inside something)'
            },
            {
              finnish: 'Menen taloon.',
              english: 'I go into the house.',
              explanation: 'Illative case - movement into something'
            },
            {
              finnish: 'Tulen talosta.',
              english: 'I come from the house.',
              explanation: 'Elative case - movement out of something'
            }
          ],
          whenToUse: [
            'Nominative: Default form, subject of sentence',
            'Genitive: Ownership, possession',
            'Partitive: Partial objects, negative sentences, some quantities',
            'Inessive: Being inside something',
            'Illative: Moving into something',
            'Elative: Moving out of something'
          ],
          commonMistakes: [
            'Using partitive when nominative should be used for subjects',
            'Confusing genitive and partitive in possessive constructions',
            'Using wrong case with prepositions'
          ]
        },
        'partitive': {
          case: 'Partitive',
          usage: 'The partitive case of "talo" is "taloa". It\'s used for partial objects, negative sentences, and with some quantities.',
          examples: [
            'taloa (partitive singular)',
            'taloja (partitive plural)'
          ],
          sentenceExamples: [
            {
              finnish: 'Näen talon.',
              english: 'I see a house.',
              explanation: 'Partitive case - complete object (specific house)'
            },
            {
              finnish: 'Näen taloja.',
              english: 'I see (some) houses.',
              explanation: 'Partitive plural - indefinite quantity'
            },
            {
              finnish: 'En näe taloa.',
              english: 'I don\'t see a house.',
              explanation: 'Partitive case - always used in negative sentences'
            },
            {
              finnish: 'Pidän talosta.',
              english: 'I like the house.',
              explanation: 'Partitive case - used with certain verbs like "pitää"'
            }
          ],
          whenToUse: [
            'With indefinite quantities',
            'In negative sentences',
            'With certain verbs like "pitää" (to like)',
            'For incomplete actions'
          ],
          commonMistakes: [
            'Using nominative instead of partitive in negative sentences',
            'Forgetting partitive with indefinite quantities',
            'Using wrong partitive ending'
          ]
        }
      },
      'auto': {
        'all': {
          case: 'All Cases',
          usage: 'The word "auto" (car) follows regular Finnish case endings.',
          examples: [
            'auto (nominative)',
            'auton (genitive)',
            'autoa (partitive)',
            'autossa (inessive)',
            'autoon (illative)'
          ],
          sentenceExamples: [
            {
              finnish: 'Auto on uusi.',
              english: 'The car is new.',
              explanation: 'Nominative case - subject of the sentence'
            },
            {
              finnish: 'Auton väri on sininen.',
              english: 'The car\'s color is blue.',
              explanation: 'Genitive case - shows possession'
            },
            {
              finnish: 'Näen auton.',
              english: 'I see a car.',
              explanation: 'Partitive case - object of the sentence'
            },
            {
              finnish: 'Olen autossa.',
              english: 'I am in the car.',
              explanation: 'Inessive case - location (inside something)'
            },
            {
              finnish: 'Menen autoon.',
              english: 'I go into the car.',
              explanation: 'Illative case - movement into something'
            }
          ],
          whenToUse: [
            'Nominative: Subject of sentence, default form',
            'Genitive: Showing possession or ownership',
            'Partitive: Partial objects, after numbers, in negative sentences',
            'Inessive: Being inside something',
            'Illative: Moving into something'
          ],
          commonMistakes: [
            'Forgetting consonant gradation in genitive (auto -> auton)',
            'Using wrong case with location prepositions'
          ]
        }
      }
    };

    // Check if we have a pre-defined explanation for this word
    const lowerWord = word.toLowerCase();
    if (commonWords[lowerWord] && (caseType === 'all' || commonWords[lowerWord][caseType])) {
      if (caseType === 'all') {
        return NextResponse.json(commonWords[lowerWord]['all']);
      } else if (commonWords[lowerWord][caseType]) {
        return NextResponse.json(commonWords[lowerWord][caseType]);
      }
    }

    // For other words, use OpenAI to generate an explanation with sentence examples
    const prompt = `
      Explain the Finnish grammatical cases for the word "${word}"${caseType !== 'all' ? `, focusing on the ${caseType} case` : ''}.
      
      Please provide:
      1. A brief explanation of how this word changes in different cases
      2. Examples of the word in different cases (if caseType is 'all') or detailed examples for the specific case
      3. 3-5 example sentences showing the word in context, with English translations and brief explanations
      4. When to use each case (if caseType is 'all') or when to use the specific case
      5. Common mistakes learners make with this word's cases
      
      Format the response as JSON with the following structure:
      {
        "case": "${caseType !== 'all' ? caseType : 'All Cases'}",
        "usage": "brief explanation",
        "examples": ["example 1", "example 2", "example 3"],
        "sentenceExamples": [
          {
            "finnish": "finnish sentence",
            "english": "english translation",
            "explanation": "brief explanation of case usage"
          }
        ],
        "whenToUse": ["when to use 1", "when to use 2", "when to use 3"],
        "commonMistakes": ["mistake 1", "mistake 2", "mistake 3"]
      }
      
      If the word is a verb, explain how cases are used with that verb (e.g., what cases its objects take).
    `;

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a helpful Finnish language teacher. Provide clear explanations of Finnish grammatical cases with practical examples in sentences."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.7,
      max_tokens: 2000,
    });

    const responseText = completion.choices[0].message.content;
    
    try {
      const jsonMatch = responseText?.match(/\{[\s\S]*\}/);
      const jsonString = jsonMatch ? jsonMatch[0] : responseText;
      
      if (!jsonString) {
        throw new Error('No JSON response from OpenAI');
      }
      
      const result: CaseExplanation = JSON.parse(jsonString);
      return NextResponse.json(result);
    } catch (parseError) {
      console.error('Error parsing OpenAI response:', parseError);
      console.error('Response text:', responseText);
      
      // Return a fallback explanation with sentence examples if parsing fails
      return NextResponse.json({
        case: caseType !== 'all' ? caseType : 'All Cases',
        usage: `The word "${word}" follows standard Finnish case rules.`,
        examples: [
          `${word} (basic form)`,
          `${word}n (genitive case)`,
          `${word}a (partitive case)`
        ],
        sentenceExamples: [
          {
            finnish: `${word} on kaunis.`,
            english: `The ${word} is beautiful.`,
            explanation: 'Nominative case - subject of the sentence'
          },
          {
            finnish: `Näen ${word}n.`,
            english: `I see the ${word}.`,
            explanation: 'Genitive case - object of the sentence'
          },
          {
            finnish: `Pidän ${word}sta.`,
            english: `I like the ${word}.`,
            explanation: 'Partitive case - used with verb "pitää"'
          }
        ],
        whenToUse: [
          'Nominative: Subject of the sentence',
          'Genitive: Ownership or possession',
          'Partitive: Partial objects, negative sentences'
        ],
        commonMistakes: [
          'Using the wrong case ending',
          'Forgetting consonant gradation',
          'Using nominative when partitive is needed'
        ]
      });
    }
  } catch (error) {
    console.error('Error calling OpenAI API:', error);
    return NextResponse.json(
      { error: 'Failed to generate case explanation' },
      { status: 500 }
    );
  }
}