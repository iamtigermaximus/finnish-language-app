// app/api/analyze-verb/route.ts
import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

interface AnalyzeVerbRequest {
  verb: string;
}

interface VerbConjugation {
  minä: string;
  sinä: string;
  hän: string;
  me: string;
  te: string;
  he: string;
}

interface VerbTenses {
  present: VerbConjugation;
  past: VerbConjugation;
  negative: VerbConjugation;
  negativePast: VerbConjugation;
}

interface VerbAnalysis {
  verb: string;
  english: string;
  tenses: VerbTenses;
  notes: string;
  isFinnishInput: boolean;
}

function isFinnishInput(verb: string): boolean {
  const finnishPattern = /[äöå]/i;
  const finnishVerbEndings = /(aa|ää|ea|eä|ia|iä|oa|oä|ua|uä|yä|ya|ää|ea|eä|ia|iä|oa|oä|ua|uä|yä|ya|da|dä|ta|tä|la|lä|na|nä|ra|rä|sa|sä|ma|mä|pa|pä|va|vä)$/i;
  
  return finnishPattern.test(verb) || finnishVerbEndings.test(verb);
}

export async function POST(request: NextRequest) {
  try {
    const { verb }: AnalyzeVerbRequest = await request.json();

    if (!verb) {
      return NextResponse.json(
        { error: 'Verb is required' },
        { status: 400 }
      );
    }

    const isFinnish = isFinnishInput(verb);

    const prompt = `
      Analyze the ${isFinnish ? 'Finnish' : 'English'} verb: "${verb}".
      
      Please provide ALL of the following in JSON format:
      1. The ${isFinnish ? 'English translation' : 'Finnish translation'}
      2. Present tense conjugations for: minä, sinä, hän, me, te, he
      3. Past tense conjugations for: minä, sinä, hän, me, te, he
      4. Negative present tense conjugations for: minä, sinä, hän, me, te, he
      5. Negative past tense conjugations for: minä, sinä, hän, me, te, he
      6. Any important notes about this verb's conjugation patterns
      
      Format the response as JSON with the following EXACT structure:
      {
        "verb": "Finnish verb",
        "english": "english translation",
        "tenses": {
          "present": {
            "minä": "conjugation",
            "sinä": "conjugation",
            "hän": "conjugation",
            "me": "conjugation",
            "te": "conjugation",
            "he": "conjugation"
          },
          "past": {
            "minä": "conjugation",
            "sinä": "conjugation",
            "hän": "conjugation",
            "me": "conjugation",
            "te": "conjugation",
            "he": "conjugation"
          },
          "negative": {
            "minä": "conjugation",
            "sinä": "conjugation",
            "hän": "conjugation",
            "me": "conjugation",
            "te": "conjugation",
            "he": "conjugation"
          },
          "negativePast": {
            "minä": "conjugation",
            "sinä": "conjugation",
            "hän": "conjugation",
            "me": "conjugation",
            "te": "conjugation",
            "he": "conjugation"
          }
        },
        "notes": "any important notes",
        "isFinnishInput": ${isFinnish}
      }
      
      IMPORTANT: Return ONLY the JSON object, no additional text or explanation.
    `;

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant specialized in Finnish language education. Provide accurate Finnish verb conjugations and translations. Return ONLY valid JSON with the exact structure specified."
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
      
      const result = JSON.parse(jsonString);
      return NextResponse.json(result);
    } catch (parseError) {
      console.error('Error parsing OpenAI response:', parseError);
      console.error('Response text:', responseText);
      
      // Return fallback data if parsing fails
      const fallbackVerbs: Record<string, VerbAnalysis> = {
        'olla': {
          verb: "olla",
          english: "to be",
          tenses: {
            present: { minä: "olen", sinä: "olet", hän: "on", me: "olemme", te: "olette", he: "ovat" },
            past: { minä: "olin", sinä: "olit", hän: "oli", me: "olimme", te: "olitte", he: "olivat" },
            negative: { minä: "en ole", sinä: "et ole", hän: "ei ole", me: "emme ole", te: "ette ole", he: "eivät ole" },
            negativePast: { minä: "en ollut", sinä: "et ollut", hän: "ei ollut", me: "emme olleet", te: "ette olleet", he: "eivät olleet" }
          },
          notes: "The verb 'olla' is irregular and is one of the most important verbs in Finnish.",
          isFinnishInput: isFinnishInput(verb)
        },
        'tehdä': {
          verb: "tehdä",
          english: "to do/make",
          tenses: {
            present: { minä: "teen", sinä: "teet", hän: "tekee", me: "teemme", te: "teette", he: "tekevät" },
            past: { minä: "tein", sinä: "teit", hän: "teki", me: "teimme", te: "teitte", he: "tekivät" },
            negative: { minä: "en tee", sinä: "et tee", hän: "ei tee", me: "emme tee", te: "ette tee", he: "eivät tee" },
            negativePast: { minä: "en tehnyt", sinä: "et tehnyt", hän: "ei tehnyt", me: "emme tehneet", te: "ette tehneet", he: "eivät tehneet" }
          },
          notes: "The verb 'tehdä' is irregular and changes stem in some forms.",
          isFinnishInput: isFinnishInput(verb)
        },
        'mennä': {
          verb: "mennä",
          english: "to go",
          tenses: {
            present: { minä: "menen", sinä: "menet", hän: "menee", me: "menemme", te: "menette", he: "menevät" },
            past: { minä: "menin", sinä: "menit", hän: "meni", me: "menimme", te: "menitte", he: "menivät" },
            negative: { minä: "en mene", sinä: "et mene", hän: "ei mene", me: "emme mene", te: "ette mene", he: "eivät mene" },
            negativePast: { minä: "en mennyt", sinä: "et mennyt", hän: "ei mennyt", me: "emme menneet", te: "ette menneet", he: "eivät menneet" }
          },
          notes: "The verb 'mennä' is type III verb with consonant gradation.",
          isFinnishInput: isFinnishInput(verb)
        },
        'tulla': {
          verb: "tulla",
          english: "to come",
          tenses: {
            present: { minä: "tulen", sinä: "tulet", hän: "tulee", me: "tulemme", te: "tulette", he: "tulevat" },
            past: { minä: "tulin", sinä: "tulit", hän: "tuli", me: "tulimme", te: "tulitte", he: "tulivat" },
            negative: { minä: "en tule", sinä: "et tule", hän: "ei tule", me: "emme tule", te: "ette tule", he: "eivät tule" },
            negativePast: { minä: "en tullut", sinä: "et tullut", hän: "ei tullut", me: "emme tulleet", te: "ette tulleet", he: "eivät tulleet" }
          },
          notes: "The verb 'tulla' is a type I verb.",
          isFinnishInput: isFinnishInput(verb)
        }
      };
      
      const lowerVerb = verb.toLowerCase();
      if (fallbackVerbs[lowerVerb]) {
        return NextResponse.json(fallbackVerbs[lowerVerb]);
      }
      
      // Default to "olla" if no specific fallback exists
      return NextResponse.json(fallbackVerbs.olla);
    }
  } catch (error) {
    console.error('Error calling OpenAI API:', error);
    return NextResponse.json(
      { error: 'Failed to analyze verb' },
      { status: 500 }
    );
  }
}