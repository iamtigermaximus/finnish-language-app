// // app/api/analyze-partitive/route.ts
// import { NextRequest, NextResponse } from 'next/server';
// import OpenAI from 'openai';

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// interface AnalyzePartitiveRequest {
//   noun: string;
// }

// interface PartitiveForms {
//   singular: string;
//   // partitive: string;
//   partitivePlural: string;
//   rule: string;
// }

// interface PartitiveAnalysis {
//   noun: string;
//   english: string;
//   partitive: PartitiveForms;
//   usage: string[];
//   examples: string[];
//   translations: string[];
//   partitivePluralExamples: string[]; // Added for partitive plural examples
//   partitivePluralTranslations: string[]; // Added for partitive plural translations
//   notes: string;
//   isFinnishInput: boolean;
// }

// function isFinnishInput(noun: string): boolean {
//   const finnishPattern = /[äöå]/i;
//   const finnishNounEndings = /(nen|sus|us|os|as|äs|is|es|ys|ut|yt|it|ot|öt|at|ät|si|ti|ni|li|ri|mi|pi|vi|hi|ki|gi|ji|di|bi|fi|wi|zi|xi|ci|qi|sh|ch|ph|th|gh|kh|bh|dh|fh|vh|zh|rh|yh|wh|ck|nk|rk|lk|sk|tk|pk|hk|gk|jk|dk|bk|fk|wk|zk|xk|ck|qk|mk|nm|rm|lm|sm|tm|pm|hm|gm|jm|dm|bm|fm|wm|zm|xm|cm|qm|km|nn|rn|ln|sn|tn|pn|hn|gn|jn|dn|bn|fn|wn|zn|xn|cn|qn|kn|mn|ll|rl|sl|tl|pl|hl|gl|jl|dl|bl|fl|wl|zl|xl|cl|ql|kl|ml|nl|rr|sr|tr|pr|hr|gr|jr|dr|br|fr|wr|zr|xr|cr|qr|kr|mr|nr|lr|ss|ts|ps|hs|gs|js|ds|bs|fs|ws|zs|xs|cs|qs|ks|ms|ns|ls|rs|tt|pt|ht|gt|jt|dt|bt|ft|wt|zt|xt|ct|qt|kt|mt|nt|lt|rt|st|pp|hp|gp|jp|dp|bp|fp|wp|zp|xp|cp|qp|kp|mp|np|lp|rp|sp|tp|hh|gh|jh|dh|bh|fh|wh|zh|xh|ch|qh|kh|mh|nh|lh|rh|sh|th|ph|gg|jg|dg|bg|fg|wg|zg|xg|cg|qg|kg|mg|ng|lg|rg|sg|tg|pg|hg|jj|dj|bj|fj|wj|zj|xj|cj|qj|kj|mj|nj|lj|rj|sj|tj|pj|hj|gj|dd|bd|fd|wd|zd|xd|cd|qd|kd|md|nd|ld|rd|sd|td|pd|hd|gd|jd|bb|fb|wb|zb|xb|cb|qb|kb|mb|nb|lb|rb|sb|tb|pb|hb|gb|jb|db|ff|wf|zf|xf|cf|qf|kf|mf|nf|lf|rf|sf|tf|pf|hf|gf|jf|df|bf|ww|zw|xw|cw|qw|kw|mw|nw|lw|rw|sw|tw|pw|hw|gw|jw|dw|bw|fw|zz|xz|cz|qz|kz|mz|nz|lz|rz|sz|tz|pz|hz|gz|jz|dz|bz|fz|wz|xx|cx|qx|kx|mx|nx|lx|rx|sx|tx|px|hx|gx|jx|dx|bx|fx|wx|zx|cc|qc|kc|mc|nc|lc|rc|sc|tc|pc|hc|gc|jc|dc|bc|fc|wc|zc|xc|qq|kq|mq|nq|lq|rq|sq|tq|pq|hq|gq|jq|dq|bq|fq|wq|zq|xq|cq|kk|mk|nk|lk|rk|sk|tk|pk|hk|gk|jk|dk|bk|fk|wk|zk|xk|ck|qk)$/i;
  
//   return finnishPattern.test(noun) || finnishNounEndings.test(noun);
// }

// export async function POST(request: NextRequest) {
//   try {
//     const { noun }: AnalyzePartitiveRequest = await request.json();

//     if (!noun) {
//       return NextResponse.json(
//         { error: 'Noun is required' },
//         { status: 400 }
//       );
//     }

//     const isFinnish = isFinnishInput(noun);

//     const prompt = `
//       Analyze the ${isFinnish ? 'Finnish' : 'English'} noun: "${noun}".
      
//       Please provide ALL of the following in JSON format:
//       1. The ${isFinnish ? 'English translation' : 'Finnish translation'}
//       2. The partitive singular form
//       3. The partitive plural form
//       4. The rule that applies to this noun's partitive formation
//       5. The main usage contexts for the partitive case with this noun (array)
//       6. Example sentences using the partitive singular forms (array)
//       7. English translations of the example sentences (array)
//       8. Example sentences using the partitive plural forms (array)
//       9. English translations of the partitive plural example sentences (array)
//       10. Any important notes about this noun's partitive usage
      
//       Format the response as JSON with the following EXACT structure:
//       {
//         "noun": "Finnish noun",
//         "english": "english translation",
//         "partitive": {
//           "singular": "partitive singular form",
//           "partitivePlural": "partitive plural form",
//           "rule": "partitive formation rule"
//         },
//         "usage": ["usage context 1", "usage context 2"],
//         "examples": ["example sentence 1", "example sentence 2"],
//         "translations": ["translation 1", "translation 2"],
//         "partitivePluralExamples": ["plural example 1", "plural example 2"],
//         "partitivePluralTranslations": ["plural translation 1", "plural translation 2"],
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
//           content: "You are a helpful assistant specialized in Finnish language education. Provide accurate Finnish partitive forms and translations. Return ONLY valid JSON with the exact structure specified."
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
//       const fallbackNouns: Record<string, PartitiveAnalysis> = {
//         'talo': {
//           noun: "talo",
//           english: "house",
//           partitive: {
//             singular: "taloa",
//             partitivePlural: "taloja",
//             rule: "Basic partitive: add -a to the stem"
//           },
//           usage: ["Partial objects", "With numbers greater than one", "Negative sentences"],
//           examples: [
//             "Näen taloa kadun varrella.",
//             "Hän rakentaa taloa.",
//             "Minulla ei ole taloa."
//           ],
//           translations: [
//             "I see a house (part of it) along the street.",
//             "He is building a house (the process is ongoing).",
//             "I don't have a house."
//           ],
//           partitivePluralExamples: [
//             "Näen taloja kaupungissa.",
//             "Ostimme useita taloja.",
//             "Meillä ei ole taloja maalla."
//           ],
//           partitivePluralTranslations: [
//             "I see houses in the city.",
//             "We bought several houses.",
//             "We don't have houses in the countryside."
//           ],
//           notes: "The partitive form is used when referring to an indefinite quantity or part of something.",
//           isFinnishInput: true
//         },
//         'omena': {
//           noun: "omena",
//           english: "apple",
//           partitive: {
//             singular: "omenaa",
//             partitivePlural: "omenoita",
//             rule: "Words ending in -a: replace with -aa (singular) and -oita (plural)"
//           },
//           usage: ["Partial objects", "With numbers", "Food items"],
//           examples: [
//             "Syön omenaa.",
//             "Hän osti omenaa.",
//             "Tarjoilija leikkaa omenaa."
//           ],
//           translations: [
//             "I'm eating an apple (part of it).",
//             "He bought some apple (an indefinite amount).",
//             "The waiter is cutting an apple."
//           ],
//           partitivePluralExamples: [
//             "Syön omenoita.",
//             "Ostin kolme omenaa.", // Note: numbers use singular partitive
//             "Korissa on omenoita."
//           ],
//           partitivePluralTranslations: [
//             "I'm eating some apples.",
//             "I bought three apples.", // But translation shows plural
//             "There are apples in the basket."
//           ],
//           notes: "The partitive is used with food items when eating/drinking them. With numbers, Finnish uses the partitive singular form but it translates to plural in English.",
//           isFinnishInput: true
//         },
//         'kirja': {
//           noun: "kirja",
//           english: "book",
//           partitive: {
//             singular: "kirjaa",
//             partitivePlural: "kirjoja",
//             rule: "Words ending in -a: replace with -aa (singular) and -oja (plural)"
//           },
//           usage: ["Partial objects", "Reading activities", "Negative possession"],
//           examples: [
//             "Luen kirjaa.",
//             "Etsin kirjaa.",
//             "En löytänyt kirjaa."
//           ],
//           translations: [
//             "I'm reading a book (part of it).",
//             "I'm looking for a book.",
//             "I didn't find the book."
//           ],
//           partitivePluralExamples: [
//             "Luen kirjoja.",
//             "Ostan kirjoja.",
//             "Kirjastossa on paljon kirjoja."
//           ],
//           partitivePluralTranslations: [
//             "I'm reading books.",
//             "I'm buying books.",
//             "There are many books in the library."
//           ],
//           notes: "The partitive is used with verbs of reading to indicate an ongoing activity.",
//           isFinnishInput: true
//         },
//         'kissa': {
//           noun: "kissa",
//           english: "cat",
//           partitive: {
//             singular: "kissaa",
//             partitivePlural: "kissoja",
//             rule: "Words ending in -a: replace with -aa (singular) and -oja (plural)"
//           },
//           usage: ["Partial objects", "With numbers", "Animals"],
//           examples: [
//             "Pidän kissaa.",
//             "Hän hoitaa kissaa.",
//             "En nähnyt kissaa."
//           ],
//           translations: [
//             "I like the cat (generally).",
//             "He is taking care of a cat.",
//             "I didn't see the cat."
//           ],
//           partitivePluralExamples: [
//             "Pidän kissoja.",
//             "Meillä on kissoja.",
//             "Kadulla juoksee kissoja."
//           ],
//           partitivePluralTranslations: [
//             "I like cats.",
//             "We have cats.",
//             "Cats are running on the street."
//           ],
//           notes: "The partitive plural is used when referring to cats in general or an indefinite number of cats.",
//           isFinnishInput: true
//         }
//       };
      
//       const lowerNoun = noun.toLowerCase();
//       if (fallbackNouns[lowerNoun]) {
//         return NextResponse.json(fallbackNouns[lowerNoun]);
//       }
      
//       // Default to "talo" if no specific fallback exists
//       return NextResponse.json(fallbackNouns.talo);
//     }
//   } catch (error) {
//     console.error('Error calling OpenAI API:', error);
//     return NextResponse.json(
//       { error: 'Failed to analyze noun' },
//       { status: 500 }
//     );
//   }
// }

// app/api/analyze-partitive/route.ts
import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

interface AnalyzePartitiveRequest {
  noun: string;
}

interface PartitiveForms {
  singular: string;
  partitivePlural: string;
  rule: string;
}

interface PartitiveAnalysis {
  noun: string;
  english: string;
  partitive: PartitiveForms;
  usage: string[];
  examples: string[];
  translations: string[];
  partitivePluralExamples: string[];
  partitivePluralTranslations: string[];
  notes: string;
  isFinnishInput: boolean;
}

// Detect Finnish input
const isFinnishInput = (noun: string): boolean => {
  const finnishPattern = /[äöå]/i;
  const commonFinnishEndings = /(nen|sus|us|os|as|äs|is|es|ys|ut|yt|it|ot|öt|at|ät|si|ti|ni|li|ri|mi|pi|vi|hi|ki|gi|ji|di|bi|fi|wi|zi|xi|ci|qi|sh|ch|ph|th|gh|kh|bh|dh|fh|vh|zh|rh|yh|wh|ck|nk|rk|lk|sk|tk|pk|hk|gk|jk|dk|bk|fk|wk|zk|xk|ck|qk)$/i;
  return finnishPattern.test(noun) || commonFinnishEndings.test(noun);
};

// Optional: dynamic translation
const fetchTranslation = async (noun: string): Promise<string | null> => {
  try {
    const res = await fetch(
      `https://api.mymemory.translated.net/get?q=${encodeURIComponent(noun)}&langpair=fi|en`
    );
    const data = await res.json();
    return data?.responseData?.translatedText || null;
  } catch {
    return null;
  }
};

export async function POST(request: NextRequest) {
  try {
    const { noun }: AnalyzePartitiveRequest = await request.json();
    if (!noun) return NextResponse.json({ error: 'Noun is required' }, { status: 400 });

    const isFinnish = isFinnishInput(noun);
    const lowerNoun = noun.toLowerCase();

    // Step 1: Fetch English translation
    let english = await fetchTranslation(lowerNoun);
    if (!english) english = noun; // fallback

    // Step 2: Ask AI to generate partitive singular/plural and rules
    const promptForms = `
      Analyze the Finnish noun: "${noun}".

      Provide ONLY the partitive singular and plural forms and the rule in JSON:
      {
        "partitive": {
          "singular": "...",
          "partitivePlural": "...",
          "rule": "..."
        }
      }
    `;

    const formsCompletion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are an expert in Finnish grammar. Return ONLY valid JSON." },
        { role: "user", content: promptForms }
      ],
      temperature: 0.3,
      max_tokens: 300,
    });

    const formsText = formsCompletion.choices[0].message.content;
    const formsJsonMatch = formsText?.match(/\{[\s\S]*\}/);
    if (!formsJsonMatch) throw new Error('No JSON received for forms');
    const partitiveForms: PartitiveForms = JSON.parse(formsJsonMatch[0]).partitive;

    // Step 3: Ask AI to generate usage, examples, and translations using the exact forms
    const promptExamples = `
      Using the partitive forms:
      singular: "${partitiveForms.singular}"
      plural: "${partitiveForms.partitivePlural}"

      Generate:
      1. Usage contexts as an array
      2. Example sentences using the singular form
      3. English translations of those examples
      4. Example sentences using the generated plural form
      5. English translations of plural examples
      6. Any important notes

      IMPORTANT: 
      - Use the forms exactly as given above in the example sentences.
      - Return ONLY a JSON object with this structure:
      {
        "usage": [...],
        "examples": [...],
        "translations": [...],
        "partitivePluralExamples": [...],
        "partitivePluralTranslations": [...],
        "notes": "..."
      }
    `;

    const examplesCompletion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are an expert in Finnish grammar. Return ONLY valid JSON using the exact forms provided." },
        { role: "user", content: promptExamples }
      ],
      temperature: 0.3,
      max_tokens: 800,
    });

    const examplesText = examplesCompletion.choices[0].message.content;
    const examplesJsonMatch = examplesText?.match(/\{[\s\S]*\}/);
    if (!examplesJsonMatch) throw new Error('No JSON received for examples');
    const examplesData = JSON.parse(examplesJsonMatch[0]);

    // Combine everything into final response
    const result: PartitiveAnalysis = {
      noun,
      english,
      partitive: partitiveForms,
      usage: examplesData.usage,
      examples: examplesData.examples,
      translations: examplesData.translations,
      partitivePluralExamples: examplesData.partitivePluralExamples,
      partitivePluralTranslations: examplesData.partitivePluralTranslations,
      notes: examplesData.notes,
      isFinnishInput: isFinnish,
    };

    return NextResponse.json(result);

  } catch (error) {
    console.error('Error in analyze-partitive route:', error);
    return NextResponse.json(
      { error: 'Failed to analyze noun', details: (error as Error).message },
      { status: 500 }
    );
  }
}
