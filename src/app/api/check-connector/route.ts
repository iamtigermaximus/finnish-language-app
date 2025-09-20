// // app/api/check-connector/route.ts
// import { NextRequest, NextResponse } from 'next/server';
// import OpenAI from 'openai';

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// interface CheckConnectorRequest {
//   sentence: string;
//   connector: string;
//   english: string;
// }

// export async function POST(request: NextRequest) {
//   try {
//     const { sentence, connector, english }: CheckConnectorRequest = await request.json();

//     if (!sentence || !connector) {
//       return NextResponse.json(
//         { error: 'Sentence and connector are required' },
//         { status: 400 }
//       );
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

//     const completion = await openai.chat.completions.create({
//       model: "gpt-3.5-turbo",
//       messages: [
//         {
//           role: "system",
//           content: "You are a helpful Finnish language teacher. Provide clear, focused feedback on connector word usage."
//         },
//         {
//           role: "user",
//           content: prompt
//         }
//       ],
//       temperature: 0.7,
//       max_tokens: 500,
//     });

//     const responseText = completion.choices[0].message.content;
    
//     try {
//       const jsonMatch = responseText?.match(/\{[\s\S]*\}/);
//       const jsonString = jsonMatch ? jsonMatch[0] : responseText;
      
//       if (!jsonString) {
//         throw new Error('No JSON response from OpenAI');
//       }
      
//       const result = JSON.parse(jsonString);
//       return NextResponse.json(result);
//     } catch (parseError) {
//       console.error('Error parsing OpenAI response:', parseError);
      
//       // Fallback response
//       return NextResponse.json({
//         correct: sentence,
//         explanation: "This appears to be a correct usage, but I couldn't analyze it thoroughly. Keep practicing!"
//       });
//     }
//   } catch (error) {
//     console.error('Error calling OpenAI API:', error);
//     return NextResponse.json(
//       { error: 'Failed to check sentence' },
//       { status: 500 }
//     );
//   }
// }

// app/api/check-connector/route.ts
// import { NextRequest, NextResponse } from 'next/server';
// import OpenAI from 'openai';

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// interface CheckConnectorRequest {
//   sentence: string;
//   connector: string;
//   english: string;
// }

// export async function POST(request: NextRequest) {
//   try {
//     const { sentence, connector, english }: CheckConnectorRequest = await request.json();

//     if (!sentence || !connector) {
//       return NextResponse.json(
//         { error: 'Sentence and connector are required' },
//         { status: 400 }
//       );
//     }

//     // Simple validation for demonstration
//     if (!sentence.includes(connector)) {
//       return NextResponse.json({
//         correct: `${sentence} (The sentence doesn't contain "${connector}")`,
//         explanation: `Try using "${connector}" (${english}) in your sentence.`
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

//     const completion = await openai.chat.completions.create({
//       model: "gpt-3.5-turbo",
//       messages: [
//         {
//           role: "system",
//           content: "You are a helpful Finnish language teacher. Provide clear, focused feedback on connector word usage."
//         },
//         {
//           role: "user",
//           content: prompt
//         }
//       ],
//       temperature: 0.7,
//       max_tokens: 500,
//     });

//     const responseText = completion.choices[0].message.content;
    
//     try {
//       const jsonMatch = responseText?.match(/\{[\s\S]*\}/);
//       const jsonString = jsonMatch ? jsonMatch[0] : responseText;
      
//       if (!jsonString) {
//         throw new Error('No JSON response from OpenAI');
//       }
      
//       const result = JSON.parse(jsonString);
//       return NextResponse.json(result);
//     } catch (parseError) {
//       console.error('Error parsing OpenAI response:', parseError);
      
//       // Fallback response with simple validation
//       const hasConnector = sentence.includes(connector);
//       return NextResponse.json({
//         correct: hasConnector ? sentence : `${sentence} (Add "${connector}" to your sentence)`,
//         explanation: hasConnector 
//           ? "Your sentence looks good! Keep practicing." 
//           : `Try using "${connector}" (${english}) in your sentence.`
//       });
//     }
//   } catch (error) {
//     console.error('Error calling OpenAI API:', error);
    
//     // Basic fallback without API
//     return NextResponse.json({
//       correct: sentence,
//       explanation: "This appears to be a correct usage, but I couldn't analyze it thoroughly. Keep practicing!"
//     });
//   }
// }

// app/api/check-connector/route.ts
import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

interface CheckConnectorRequest {
  sentence: string;
  connector: string;
  english: string;
}

export async function POST(request: NextRequest) {
  try {
    const { sentence, connector, english }: CheckConnectorRequest = await request.json();

    if (!sentence || !connector) {
      return NextResponse.json(
        { error: 'Sentence and connector are required' },
        { status: 400 }
      );
    }

    // Simple validation for demonstration
    if (!sentence.includes(connector)) {
      return NextResponse.json({
        correct: `${sentence} (The sentence doesn't contain "${connector}")`,
        explanation: `Try using "${connector}" (${english}) in your sentence.`
      });
    }

    const prompt = `
      A Finnish language learner has written this sentence: "${sentence}"
      They are trying to use the connector word "${connector}" (which means "${english}" in English).
      
      Please:
      1. Check if the sentence is grammatically correct, especially the usage of "${connector}"
      2. If incorrect, provide the corrected version
      3. Explain any errors related to "${connector}" usage
      4. Keep your response focused on the connector word usage
      
      Format the response as JSON with the following structure:
      {
        "correct": "the corrected sentence if needed, otherwise the original",
        "explanation": "brief explanation of the correction or confirmation that it's correct"
      }
    `;

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a helpful Finnish language teacher. Provide clear, focused feedback on connector word usage."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.7,
      max_tokens: 500,
    });

    const responseText = completion.choices[0].message.content;
    
    try {
      const jsonMatch = responseText?.match(/\{[\s\S]*\}/);
      const jsonString = jsonMatch ? jsonMatch[0] : responseText;
      
      if (!jsonString) {
        throw new Error('No JSON response from OpenAI');
      }
      
      const result = JSON.parse(jsonString);
      return NextResponse.json(result);
    } catch (parseError) {
      console.error('Error parsing OpenAI response:', parseError);
      
      // Fallback response with simple validation
      const hasConnector = sentence.includes(connector);
      return NextResponse.json({
        correct: hasConnector ? sentence : `${sentence} (Add "${connector}" to your sentence)`,
        explanation: hasConnector 
          ? "Your sentence looks good! Keep practicing." 
          : `Try using "${connector}" (${english}) in your sentence.`
      });
    }
  } catch (error) {
    console.error('Error calling OpenAI API:', error);
    
    // Basic fallback without API - use the request sentence
    const requestBody = await request.json();
    const userSentence = requestBody.sentence || "";
    const userConnector = requestBody.connector || "";
    const userEnglish = requestBody.english || "";
    
    const hasConnector = userSentence.includes(userConnector);
    
    return NextResponse.json({
      correct: hasConnector ? userSentence : `${userSentence} (Add "${userConnector}" to your sentence)`,
      explanation: hasConnector 
        ? "Your sentence looks good! Keep practicing." 
        : `Try using "${userConnector}" (${userEnglish}) in your sentence.`
    });
  }
}