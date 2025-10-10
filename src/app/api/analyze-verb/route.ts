import { NextRequest, NextResponse } from "next/server";
import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

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
  const finnishEndings =
    /(aa|ää|da|dä|ta|tä|la|lä|na|nä|ra|rä|sa|sä|ma|mä|pa|pä|va|vä)$/i;
  return finnishPattern.test(verb) || finnishEndings.test(verb);
}

// Validation function for Finnish conjugations

function validateFinnishConjugation(
  conjugation: VerbConjugation,
  tense: string,
  verb: string
): { valid: boolean; corrected: VerbConjugation; notes: string[] } {
  const notes: string[] = [];
  const corrected = { ...conjugation };

  // Check empty
  if (Object.values(conjugation).some((f) => !f || f.trim() === "")) {
    return { valid: false, corrected, notes: ["Missing forms"] };
  }

  // Simple corrections for common mistakes
  if (verb === "sanoa" && tense === "present") {
    if (corrected.minä === "sanoon") {
      corrected.minä = "sanon";
      notes.push("Corrected minä form 'sanoon' → 'sanon'");
    }
    if (corrected.hän === "sanoi") {
      corrected.hän = "sanoo";
      notes.push("Corrected hän form 'sanoi' → 'sanoo'");
    }
  }

  // ✅ Basic validation logic
  for (const [pronoun, form] of Object.entries(corrected)) {
    if (!form || typeof form !== "string") {
      return { valid: false, corrected, notes: ["Invalid form type"] };
    }

    if (tense === "present") {
      const validEndings = [
        "n",
        "t",
        "e",
        "oo",
        "aa",
        "ää",
        "ee",
        "mme",
        "tte",
        "vat",
        "vät",
        "o",
      ];
      if (!validEndings.some((ending) => form.endsWith(ending))) {
        notes.push(`Unexpected present ending for ${pronoun}: ${form}`);
      }
    }

    if (tense === "past") {
      if (!form.includes("i") && !form.includes("si")) {
        notes.push(`Past form for ${pronoun} may be invalid: ${form}`);
      }
    }
  }

  return { valid: notes.length === 0, corrected, notes };
}

export async function POST(request: NextRequest) {
  try {
    const { verb }: AnalyzeVerbRequest = await request.json();
    if (!verb) {
      return NextResponse.json({ error: "Verb is required" }, { status: 400 });
    }

    const isFinnish = isFinnishInput(verb);

    const prompt = `
You are a Finnish grammar expert. Analyze the verb: "${verb}"

CRITICAL: You MUST return ONLY valid JSON with EXACT structure:
{
  "verb": "finnish_verb_in_dictionary_form",
  "english": "english_translation",
  "tenses": {
    "present": {"minä":"", "sinä":"", "hän":"", "me":"", "te":"", "he":""},
    "negative": {"minä":"", "sinä":"", "hän":"", "me":"", "te":"", "he":""},
    "past": {"minä":"", "sinä":"", "hän":"", "me":"", "te":"", "he":""},
    "negativePast": {"minä":"", "sinä":"", "hän":"", "me":"", "te":"", "he":""}
  },
  "notes": "grammatical_notes",
  "isFinnishInput": ${isFinnish}
}

FINNISH CONJUGATION RULES - YOU MUST FOLLOW THESE:

1. PRESENT TENSE:
   - minä: -n (olla → olen, tehdä → teen)
   - sinä: -t (olla → olet, tehdä → teet)
   - hän: -V (double vowel) or -ee (olla → on, tehdä → tekee)
   - me: -mme (olla → olemme, tehdä → teemme)
   - te: -tte (olla → olette, tehdä → teette)
   - he: -vat/vät (olla → ovat, tehdä → tekevät)
2. NEGATIVE PRESENT:
   - Negative verb (en, et, ei, emme, ette, eivät) + connegative form
   - Connegative is the stem without personal ending
   - olla → en ole, et ole, ei ole, emme ole, ette ole, eivät ole
   - tehdä → en tee, et tee, ei tee, emme tee, ette tee, eivät tee
3. PAST TENSE:
   - Use -i- stem + personal endings
   - minä: -in (olla → olin, tehdä → tein)
   - sinä: -it (olla → olit, tehdä → teit)
   - hän: -i (olla → oli, tehdä → teki)
   - me: -imme (olla → olimme, tehdä → teimme)
   - te: -itte (olla → olitte, tehdä → teitte)
   - he: -ivat/ivät (olla → olivat, tehdä → tekivät)
4. NEGATIVE PAST:
   - Negative verb + past participle (nut/nyt for singular, neet for plural)
   - olla → en ollut, et ollut, ei ollut, emme olleet, ette olleet, eivät olleet
   - tehdä → en tehnyt, et tehnyt, ei tehnyt, emme tehneet, ette tehneet, eivät tehneet

COMMON VERB EXAMPLES - USE AS REFERENCE:

"olla" (to be):
- Present: minä olen, sinä olet, hän on, me olemme, te olette, he ovat
- Past: minä olin, sinä olit, hän oli, me olimme, te olitte, he olivat
- Negative: minä en ole, sinä et ole, hän ei ole, me emme ole, te ette ole, he eivät ole
- Negative Past: minä en ollut, sinä et ollut, hän ei ollut, me emme olleet, te ette olleet, he eivät olleet

"tehdä" (to do/make):
- Present: minä teen, sinä teet, hän tekee, me teemme, te teette, he tekevät
- Past: minä tein, sinä teit, hän teki, me teimme, te teitte, he tekivät
- Negative: minä en tee, sinä et tee, hän ei tee, me emme tee, te ette tee, he eivät tee
- Negative Past: minä en tehnyt, sinä et tehnyt, hän ei tehnyt, me emme tehneet, te ette tehneet, he eivät tehneet

"mennä" (to go):
- Present: minä menen, sinä menet, hän menee, me menemme, te menette, he menevät
- Past: minä menin, sinä menit, hän meni, me menimme, te menitte, he menivät
- Negative: minä en mene, sinä et mene, hän ei mene, me emme mene, te ette mene, he eivät mene
- Negative Past: minä en mennyt, sinä et mennyt, hän ei mennyt, me emme menneet, te ette menneet, he eivät menneet

VERIFICATION CHECKLIST - Before responding, verify:
✓ All forms follow Finnish conjugation patterns
✓ Present tense has correct personal endings (-n, -t, -V, -mme, -tte, -vat/vät)
✓ Past tense uses -i- stem correctly
✓ Negative forms use correct negative verb + connegative
✓ Negative past uses correct negative verb + past participle
✓ All pronouns have non-empty values
✓ Verb types are handled correctly (type I, II, III, IV, V, VI)

If you cannot generate correct forms, return an error in notes.

Now analyze: "${verb}"
`;

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
          content:
            "You are a strict Finnish grammar engine. You MUST output ONLY valid JSON with correct Finnish conjugations. Double-check all forms before responding.",
        },
        { role: "user", content: prompt },
      ],
      temperature: 0,
      max_tokens: 500,
    });

    const responseText = completion.choices[0]?.message?.content?.trim();

    if (!responseText) {
      throw new Error("No response from Groq");
    }

    // Extract JSON from response
    let jsonString = responseText;
    const jsonMatch = responseText.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      jsonString = jsonMatch[0];
    }

    try {
      const result: VerbAnalysis = JSON.parse(jsonString);

      // Validate the response structure
      if (!result.verb || !result.tenses) {
        throw new Error("Invalid response structure from API");
      }

      // Validate each tense
      const requiredTenses: (keyof VerbTenses)[] = [
        "present",
        "past",
        "negative",
        "negativePast",
      ];
      for (const tense of requiredTenses) {
        if (!result.tenses[tense]) {
          throw new Error(`Missing ${tense} tense`);
        }

        const { valid, corrected, notes } = validateFinnishConjugation(
          result.tenses[tense],
          tense,
          result.verb
        );

        result.tenses[tense] = corrected;
        if (!valid) {
          console.warn(`Validator notes for ${result.verb} (${tense}):`, notes);
          result.notes += ` ${notes.join("; ")}`;
        }
      }

      return NextResponse.json(result);
    } catch (parseError) {
      console.error("JSON Parse Error:", parseError);
      console.error("Response text:", responseText);
      throw new Error(
        "Invalid or incorrect Finnish conjugation response from AI"
      );
    }
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Failed to analyze verb",
      },
      { status: 500 }
    );
  }
}

// // app/api/analyze-verb/route.ts
// import { NextRequest, NextResponse } from 'next/server';
// import OpenAI from 'openai';

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// interface AnalyzeVerbRequest {
//   verb: string;
// }

// interface VerbConjugation {
//   minä: string;
//   sinä: string;
//   hän: string;
//   me: string;
//   te: string;
//   he: string;
// }

// interface VerbTenses {
//   present: VerbConjugation;
//   past: VerbConjugation;
//   negative: VerbConjugation;
//   negativePast: VerbConjugation;
// }

// interface VerbAnalysis {
//   verb: string;
//   english: string;
//   tenses: VerbTenses;
//   notes: string;
//   isFinnishInput: boolean;
// }

// function isFinnishInput(verb: string): boolean {
//   const finnishPattern = /[äöå]/i;
//   const finnishVerbEndings = /(aa|ää|ea|eä|ia|iä|oa|oä|ua|uä|yä|ya|ää|ea|eä|ia|iä|oa|oä|ua|uä|yä|ya|da|dä|ta|tä|la|lä|na|nä|ra|rä|sa|sä|ma|mä|pa|pä|va|vä)$/i;

//   return finnishPattern.test(verb) || finnishVerbEndings.test(verb);
// }

// export async function POST(request: NextRequest) {
//   try {
//     const { verb }: AnalyzeVerbRequest = await request.json();

//     if (!verb) {
//       return NextResponse.json(
//         { error: 'Verb is required' },
//         { status: 400 }
//       );
//     }

//     const isFinnish = isFinnishInput(verb);

//     const prompt = `
//       Analyze the ${isFinnish ? 'Finnish' : 'English'} verb: "${verb}".

//       Please provide ALL of the following in JSON format:
//       1. The ${isFinnish ? 'English translation' : 'Finnish translation'}
//       2. Present tense conjugations for: minä, sinä, hän, me, te, he
//       3. Past tense conjugations for: minä, sinä, hän, me, te, he
//       4. Negative present tense conjugations for: minä, sinä, hän, me, te, he
//       5. Negative past tense conjugations for: minä, sinä, hän, me, te, he
//       6. Any important notes about this verb's conjugation patterns

//       Format the response as JSON with the following EXACT structure:
//       {
//         "verb": "Finnish verb",
//         "english": "english translation",
//         "tenses": {
//           "present": {
//             "minä": "conjugation",
//             "sinä": "conjugation",
//             "hän": "conjugation",
//             "me": "conjugation",
//             "te": "conjugation",
//             "he": "conjugation"
//           },
//           "past": {
//             "minä": "conjugation",
//             "sinä": "conjugation",
//             "hän": "conjugation",
//             "me": "conjugation",
//             "te": "conjugation",
//             "he": "conjugation"
//           },
//           "negative": {
//             "minä": "conjugation",
//             "sinä": "conjugation",
//             "hän": "conjugation",
//             "me": "conjugation",
//             "te": "conjugation",
//             "he": "conjugation"
//           },
//           "negativePast": {
//             "minä": "conjugation",
//             "sinä": "conjugation",
//             "hän": "conjugation",
//             "me": "conjugation",
//             "te": "conjugation",
//             "he": "conjugation"
//           }
//         },
//         "notes": "any important notes",
//         "isFinnishInput": ${isFinnish}
//       }

//       IMPORTANT: Return ONLY the JSON object, no additional text or explanation.
//     `;

//     const completion = await openai.chat.completions.create({
//       model: "gpt-3.5-turbo",
//       messages: [
//         {
//           role: "system",
//           content: "You are a helpful assistant specialized in Finnish language education. Provide accurate Finnish verb conjugations and translations. Return ONLY valid JSON with the exact structure specified."
//         },
//         {
//           role: "user",
//           content: prompt
//         }
//       ],
//       temperature: 0.7,
//       max_tokens: 2000,
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
//       console.error('Response text:', responseText);

//       // Return fallback data if parsing fails
//       const fallbackVerbs: Record<string, VerbAnalysis> = {
//         'olla': {
//           verb: "olla",
//           english: "to be",
//           tenses: {
//             present: { minä: "olen", sinä: "olet", hän: "on", me: "olemme", te: "olette", he: "ovat" },
//             past: { minä: "olin", sinä: "olit", hän: "oli", me: "olimme", te: "olitte", he: "olivat" },
//             negative: { minä: "en ole", sinä: "et ole", hän: "ei ole", me: "emme ole", te: "ette ole", he: "eivät ole" },
//             negativePast: { minä: "en ollut", sinä: "et ollut", hän: "ei ollut", me: "emme olleet", te: "ette olleet", he: "eivät olleet" }
//           },
//           notes: "The verb 'olla' is irregular and is one of the most important verbs in Finnish.",
//           isFinnishInput: isFinnishInput(verb)
//         },
//         'tehdä': {
//           verb: "tehdä",
//           english: "to do/make",
//           tenses: {
//             present: { minä: "teen", sinä: "teet", hän: "tekee", me: "teemme", te: "teette", he: "tekevät" },
//             past: { minä: "tein", sinä: "teit", hän: "teki", me: "teimme", te: "teitte", he: "tekivät" },
//             negative: { minä: "en tee", sinä: "et tee", hän: "ei tee", me: "emme tee", te: "ette tee", he: "eivät tee" },
//             negativePast: { minä: "en tehnyt", sinä: "et tehnyt", hän: "ei tehnyt", me: "emme tehneet", te: "ette tehneet", he: "eivät tehneet" }
//           },
//           notes: "The verb 'tehdä' is irregular and changes stem in some forms.",
//           isFinnishInput: isFinnishInput(verb)
//         },
//         'mennä': {
//           verb: "mennä",
//           english: "to go",
//           tenses: {
//             present: { minä: "menen", sinä: "menet", hän: "menee", me: "menemme", te: "menette", he: "menevät" },
//             past: { minä: "menin", sinä: "menit", hän: "meni", me: "menimme", te: "menitte", he: "menivät" },
//             negative: { minä: "en mene", sinä: "et mene", hän: "ei mene", me: "emme mene", te: "ette mene", he: "eivät mene" },
//             negativePast: { minä: "en mennyt", sinä: "et mennyt", hän: "ei mennyt", me: "emme menneet", te: "ette menneet", he: "eivät menneet" }
//           },
//           notes: "The verb 'mennä' is type III verb with consonant gradation.",
//           isFinnishInput: isFinnishInput(verb)
//         },
//         'tulla': {
//           verb: "tulla",
//           english: "to come",
//           tenses: {
//             present: { minä: "tulen", sinä: "tulet", hän: "tulee", me: "tulemme", te: "tulette", he: "tulevat" },
//             past: { minä: "tulin", sinä: "tulit", hän: "tuli", me: "tulimme", te: "tulitte", he: "tulivat" },
//             negative: { minä: "en tule", sinä: "et tule", hän: "ei tule", me: "emme tule", te: "ette tule", he: "eivät tule" },
//             negativePast: { minä: "en tullut", sinä: "et tullut", hän: "ei tullut", me: "emme tulleet", te: "ette tulleet", he: "eivät tulleet" }
//           },
//           notes: "The verb 'tulla' is a type I verb.",
//           isFinnishInput: isFinnishInput(verb)
//         }
//       };

//       const lowerVerb = verb.toLowerCase();
//       if (fallbackVerbs[lowerVerb]) {
//         return NextResponse.json(fallbackVerbs[lowerVerb]);
//       }

//       // Default to "olla" if no specific fallback exists
//       return NextResponse.json(fallbackVerbs.olla);
//     }
//   } catch (error) {
//     console.error('Error calling OpenAI API:', error);
//     return NextResponse.json(
//       { error: 'Failed to analyze verb' },
//       { status: 500 }
//     );
//   }
// }
