// // // app/api/analyze-genitive/route.ts
// // import { NextRequest, NextResponse } from 'next/server';
// // import OpenAI from 'openai';

// // const openai = new OpenAI({
// //   apiKey: process.env.OPENAI_API_KEY,
// // });

// // interface AnalyzeGenitiveRequest {
// //   noun: string;
// // }

// // interface GenitiveForms {
// //   singular: string;
// //   genitive: string;
// //   genitivePlural: string;
// //   rule: string;
// // }

// // interface GenitiveAnalysis {
// //   noun: string;
// //   english: string;
// //   genitive: GenitiveForms;
// //   usage: string[];
// //   examples: string[];
// //   translations: string[];
// //   genitivePluralExamples: string[];
// //   genitivePluralTranslations: string[];
// //   notes: string;
// //   isFinnishInput: boolean;
// // }

// // function isFinnishInput(noun: string): boolean {
// //   const finnishPattern = /[äöå]/i;
// //   const finnishNounEndings = /(nen|sus|us|os|as|äs|is|es|ys|ut|yt|it|ot|öt|at|ät|si|ti|ni|li|ri|mi|pi|vi|hi|ki|gi|ji|di|bi|fi|wi|zi|xi|ci|qi|sh|ch|ph|th|gh|kh|bh|dh|fh|vh|zh|rh|yh|wh|ck|nk|rk|lk|sk|tk|pk|hk|gk|jk|dk|bk|fk|wk|zk|xk|ck|qk|mk|nm|rm|lm|sm|tm|pm|hm|gm|jm|dm|bm|fm|wm|zm|xm|cm|qm|km|nn|rn|ln|sn|tn|pn|hn|gn|jn|dn|bn|fn|wn|zn|xn|cn|qn|kn|mn|ll|rl|sl|tl|pl|hl|gl|jl|dl|bl|fl|wl|zl|xl|cl|ql|kl|ml|nl|rr|sr|tr|pr|hr|gr|jr|dr|br|fr|wr|zr|xr|cr|qr|kr|mr|nr|lr|ss|ts|ps|hs|gs|js|ds|bs|fs|ws|zs|xs|cs|qs|ks|ms|ns|ls|rs|tt|pt|ht|gt|jt|dt|bt|ft|wt|zt|xt|ct|qt|kt|mt|nt|lt|rt|st|pp|hp|gp|jp|dp|bp|fp|wp|zp|xp|cp|qp|kp|mp|np|lp|rp|sp|tp|hh|gh|jh|dh|bh|fh|wh|zh|xh|ch|qh|kh|mh|nh|lh|rh|sh|th|ph|gg|jg|dg|bg|fg|wg|zg|xg|cg|qg|kg|mg|ng|lg|rg|sg|tg|pg|hg|jj|dj|bj|fj|wj|zj|xj|cj|qj|kj|mj|nj|lj|rj|sj|tj|pj|hj|gj|dd|bd|fd|wd|zd|xd|cd|qd|kd|md|nd|ld|rd|sd|td|pd|hd|gd|jd|bb|fb|wb|zb|xb|cb|qb|kb|mb|nb|lb|rb|sb|tb|pb|hb|gb|jb|db|ff|wf|zf|xf|cf|qf|kf|mf|nf|lf|rf|sf|tf|pf|hf|gf|jf|df|bf|ww|zw|xw|cw|qw|kw|mw|nw|lw|rw|sw|tw|pw|hw|gw|jw|dw|bw|fw|zz|xz|cz|qz|kz|mz|nz|lz|rz|sz|tz|pz|hz|gz|jz|dz|bz|fz|wz|xx|cx|qx|kx|mx|nx|lx|rx|sx|tx|px|hx|gx|jx|dx|bx|fx|wx|zx|cc|qc|kc|mc|nc|lc|rc|sc|tc|pc|hc|gc|jc|dc|bc|fc|wc|zc|xc|qq|kq|mq|nq|lq|rq|sq|tq|pq|hq|gq|jq|dq|bq|fq|wq|zq|xq|cq|kk|mk|nk|lk|rk|sk|tk|pk|hk|gk|jk|dk|bk|fk|wk|zk|xk|ck|qk)$/i;
  
// //   return finnishPattern.test(noun) || finnishNounEndings.test(noun);
// // }

// // export async function POST(request: NextRequest) {
// //   try {
// //     const { noun }: AnalyzeGenitiveRequest = await request.json();

// //     if (!noun) {
// //       return NextResponse.json(
// //         { error: 'Noun is required' },
// //         { status: 400 }
// //       );
// //     }

// //     const isFinnish = isFinnishInput(noun);

// //     const prompt = `
// //       Analyze the ${isFinnish ? 'Finnish' : 'English'} noun: "${noun}".
      
// //       Please provide ALL of the following in JSON format:
// //       1. The ${isFinnish ? 'English translation' : 'Finnish translation'}
// //       2. The genitive singular form
// //       3. The genitive plural form
// //       4. The rule that applies to this noun's genitive formation
// //       5. The main usage contexts for the genitive case with this noun (array)
// //       6. Example sentences using the genitive singular forms (array)
// //       7. English translations of the example sentences (array)
// //       8. Example sentences using the genitive plural forms (array)
// //       9. English translations of the genitive plural example sentences (array)
// //       10. Any important notes about this noun's genitive usage
      
// //       Format the response as JSON with the following EXACT structure:
// //       {
// //         "noun": "Finnish noun",
// //         "english": "english translation",
// //         "genitive": {
// //           "singular": "base singular form",
// //           "genitive": "genitive singular form",
// //           "genitivePlural": "genitive plural form",
// //           "rule": "genitive formation rule"
// //         },
// //         "usage": ["usage context 1", "usage context 2"],
// //         "examples": ["example sentence 1", "example sentence 2"],
// //         "translations": ["translation 1", "translation 2"],
// //         "genitivePluralExamples": ["plural example 1", "plural example 2"],
// //         "genitivePluralTranslations": ["plural translation 1", "plural translation 2"],
// //         "notes": "any important notes",
// //         "isFinnishInput": ${isFinnish}
// //       }
      
// //       IMPORTANT: Return ONLY the JSON object, no additional text or explanation.
// //     `;

// //     const completion = await openai.chat.completions.create({
// //       model: "gpt-3.5-turbo",
// //       messages: [
// //         {
// //           role: "system",
// //           content: "You are a helpful assistant specialized in Finnish language education. Provide accurate Finnish genitive forms and translations. Return ONLY valid JSON with the exact structure specified."
// //         },
// //         {
// //           role: "user",
// //           content: prompt
// //         }
// //       ],
// //       temperature: 0.7,
// //       max_tokens: 2000,
// //     });

// //     const responseText = completion.choices[0].message.content;
    
// //     try {
// //       const jsonMatch = responseText?.match(/\{[\s\S]*\}/);
// //       const jsonString = jsonMatch ? jsonMatch[0] : responseText;
      
// //       if (!jsonString) {
// //         throw new Error('No JSON response from OpenAI');
// //       }
      
// //       const result = JSON.parse(jsonString);
// //       return NextResponse.json(result);
// //     } catch (parseError) {
// //       console.error('Error parsing OpenAI response:', parseError);
// //       console.error('Response text:', responseText);
      
// //       // Return fallback data if parsing fails
// //       const fallbackNouns: Record<string, GenitiveAnalysis> = {
// //         'talo': {
// //           noun: "talo",
// //           english: "house",
// //           genitive: {
// //             singular: "talo",
// //             genitive: "talon",
// //             genitivePlural: "talojen",
// //             rule: "Basic genitive: add -n to the singular stem for genitive singular, -jen to the plural stem for genitive plural"
// //           },
// //           usage: ["Possession", "Relationships", "With postpositions"],
// //           examples: [
// //             "Talon ovi on sininen.",
// //             "Talossa on talon omistaja.",
// //             "Talon takana on puutarha."
// //           ],
// //           translations: [
// //             "The house's door is blue.",
// //             "The house has the house's owner.",
// //             "Behind the house is a garden."
// //           ],
// //           genitivePluralExamples: [
// //             "Talojen ovet ovat sinisiä.",
// //             "Kaupungissa on monien talojen katot punaisia.",
// //             "Talojen välissä on kapeita katuja."
// //           ],
// //           genitivePluralTranslations: [
// //             "The houses' doors are blue.",
// //             "In the city, many houses' roofs are red.",
// //             "Between the houses are narrow streets."
// //           ],
// //           notes: "The genitive case indicates possession or relationship. The genitive plural is used when multiple owners are involved.",
// //           isFinnishInput: true
// //         },
// //         'kirja': {
// //           noun: "kirja",
// //           english: "book",
// //           genitive: {
// //             singular: "kirja",
// //             genitive: "kirjan",
// //             genitivePlural: "kirjojen",
// //             rule: "Words ending in -a: add -n for genitive singular, -jen for genitive plural with consonant gradation"
// //           },
// //           usage: ["Possession", "Content description", "With postpositions"],
// //           examples: [
// //             "Kirjan kansi on vahva.",
// //             "Kirjan sisältö on mielenkiintoinen.",
// //             "Kirjan takana on tarina."
// //           ],
// //           translations: [
// //             "The book's cover is strong.",
// //             "The book's content is interesting.",
// //             "Behind the book is a story."
// //           ],
// //           genitivePluralExamples: [
// //             "Kirjojen kannet ovat vahvoja.",
// //             "Kirjojen hinnat vaihtelevat.",
// //             "Kirjojen välissä oli vanha valokuva."
// //           ],
// //           genitivePluralTranslations: [
// //             "The books' covers are strong.",
// //             "The books' prices vary.",
// //             "Between the books was an old photograph."
// //           ],
// //           notes: "The genitive plural often involves consonant gradation (kirja → kirjojen).",
// //           isFinnishInput: true
// //         },
// //         'koira': {
// //           noun: "koira",
// //           english: "dog",
// //           genitive: {
// //             singular: "koira",
// //             genitive: "koiran",
// //             genitivePlural: "koirien",
// //             rule: "Words ending in -a: add -n for genitive singular, -ien for genitive plural"
// //           },
// //           usage: ["Ownership", "Relationships", "Characteristics"],
// //           examples: [
// //             "Koiran nimi on Musti.",
// //             "Koiran häntä heiluu.",
// //             "Koiran luona on leluja."
// //           ],
// //           translations: [
// //             "The dog's name is Musti.",
// //             "The dog's tail is wagging.",
// //             "Near the dog are toys."
// //           ],
// //           genitivePluralExamples: [
// //             "Koirien nimet ovat erilaisia.",
// //             "Koirien omistajat kohtaavat puistossa.",
// //             "Koirien lelut ovat värikkäitä."
// //           ],
// //           genitivePluralTranslations: [
// //             "The dogs' names are different.",
// //             "The dogs' owners meet in the park.",
// //             "The dogs' toys are colorful."
// //           ],
// //           notes: "The genitive plural form 'koirien' is used for multiple dogs' possessions or characteristics.",
// //           isFinnishInput: true
// //         },
// //         'omena': {
// //           noun: "omena",
// //           english: "apple",
// //           genitive: {
// //             singular: "omena",
// //             genitive: "omenan",
// //             genitivePlural: "omenien",
// //             rule: "Words ending in -a: add -n for genitive singular, -ien for genitive plural"
// //           },
// //           usage: ["Origin", "Characteristics", "With quantities"],
// //           examples: [
// //             "Omenan väri on punainen.",
// //             "Omenan maku on makea.",
// //             "Omenan sisällä on siemeniä."
// //           ],
// //           translations: [
// //             "The apple's color is red.",
// //             "The apple's taste is sweet.",
// //             "Inside the apple are seeds."
// //           ],
// //           genitivePluralExamples: [
// //             "Omenien värit vaihtelevat.",
// //             "Omenien hinnat nousivat.",
// //             "Omenien laatu on erinomainen."
// //           ],
// //           genitivePluralTranslations: [
// //             "The apples' colors vary.",
// //             "The apples' prices increased.",
// //             "The apples' quality is excellent."
// //           ],
// //           notes: "The genitive plural 'omenien' describes properties of multiple apples.",
// //           isFinnishInput: true
// //         },
// //         'kukka': {
// //           noun: "kukka",
// //           english: "flower",
// //           genitive: {
// //             singular: "kukka",
// //             genitive: "kukan",
// //             genitivePlural: "kukkien",
// //             rule: "Words with consonant gradation: kukka → kukan (singular), kukka → kukkien (plural)"
// //           },
// //           usage: ["Characteristics", "Origin", "Beauty"],
// //           examples: [
// //             "Kukan väri on keltainen.",
// //             "Kukan tuoksu on ihana.",
// //             "Kukan lehdet ovat vihreät."
// //           ],
// //           translations: [
// //             "The flower's color is yellow.",
// //             "The flower's scent is wonderful.",
// //             "The flower's leaves are green."
// //           ],
// //           genitivePluralExamples: [
// //             "Kukkien värit ovat kirkkaita.",
// //             "Kukkien kasvatus vaatii hoitoa.",
// //             "Kukkien kukkimisaika on kesällä."
// //           ],
// //           genitivePluralTranslations: [
// //             "The flowers' colors are bright.",
// //             "The flowers' cultivation requires care.",
// //             "The flowers' blooming time is in summer."
// //           ],
// //           notes: "Consonant gradation occurs in both genitive singular (kukka → kukan) and genitive plural (kukka → kukkien).",
// //           isFinnishInput: true
// //         }
// //       };
      
// //       const lowerNoun = noun.toLowerCase();
// //       if (fallbackNouns[lowerNoun]) {
// //         return NextResponse.json(fallbackNouns[lowerNoun]);
// //       }
      
// //       // Default to "talo" if no specific fallback exists
// //       return NextResponse.json(fallbackNouns.talo);
// //     }
// //   } catch (error) {
// //     console.error('Error calling OpenAI API:', error);
// //     return NextResponse.json(
// //       { error: 'Failed to analyze noun' },
// //       { status: 500 }
// //     );
// //   }
// // }

// // app/api/analyze-genitive/route.ts
// import { NextRequest, NextResponse } from 'next/server';
// import OpenAI from 'openai';

// const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// interface GenitiveForms {
//   singular: string;
//   genitive: string;
//   genitivePlural: string;
//   rule: string;
// }

// interface GenitiveAnalysis {
//   noun: string;
//   english: string;
//   genitive: GenitiveForms;
//   usage: string[];
//   examples: string[];
//   translations: string[];
//   genitivePluralExamples: string[];
//   genitivePluralTranslations: string[];
//   notes: string;
//   isFinnishInput: boolean;
// }

// function isFinnishInput(noun: string): boolean {
//   const finnishPattern = /[äöå]/i;
//   return finnishPattern.test(noun);
// }

// export async function POST(request: NextRequest) {
//   try {
//     const { noun }: { noun: string } = await request.json();
//     if (!noun) return NextResponse.json({ error: 'Noun is required' }, { status: 400 });

//     const isFinnish = isFinnishInput(noun);

//     // Step 1: Ask AI for genitive forms
//     const promptForms = `
//       Analyze the ${isFinnish ? 'Finnish' : 'English'} noun: "${noun}".
//       Provide the genitive singular and plural forms, and explain the rule.
//       Return JSON like:
//       {
//         "genitive": {
//           "singular": "...",
//           "genitive": "...",
//           "genitivePlural": "...",
//           "rule": "..."
//         }
//       }
//       Return only JSON.
//     `;

//     const formsCompletion = await openai.chat.completions.create({
//       model: "gpt-4o-mini",
//       messages: [
//         { role: "system", content: "You are an expert in Finnish grammar. Return ONLY valid JSON." },
//         { role: "user", content: promptForms }
//       ],
//       temperature: 0.3,
//       max_tokens: 300,
//     });

//     const formsText = formsCompletion.choices[0].message.content;
//     const formsJsonMatch = formsText?.match(/\{[\s\S]*\}/);
//     if (!formsJsonMatch) throw new Error('No JSON received for genitive forms');
//     const genitiveForms: GenitiveForms = JSON.parse(formsJsonMatch[0]).genitive;

//     // Step 2: Generate usage, examples, translations using the generated forms
//     const promptExamples = `
//       Using these genitive forms:
//       singular: "${genitiveForms.genitive}"
//       plural: "${genitiveForms.genitivePlural}"

//       Generate:
//       1. Usage contexts (array)
//       2. Example sentences using the singular form (array)
//       3. English translations of singular examples (array)
//       4. Example sentences using the plural form (array)
//       5. English translations of plural examples (array)
//       6. Important notes (string)

//       Return JSON like:
//       {
//         "usage": [...],
//         "examples": [...],
//         "translations": [...],
//         "genitivePluralExamples": [...],
//         "genitivePluralTranslations": [...],
//         "notes": "..."
//       }
//     `;

//     const examplesCompletion = await openai.chat.completions.create({
//       model: "gpt-4o-mini",
//       messages: [
//         { role: "system", content: "You are an expert in Finnish grammar. Return ONLY valid JSON." },
//         { role: "user", content: promptExamples }
//       ],
//       temperature: 0.3,
//       max_tokens: 800,
//     });

//     const examplesText = examplesCompletion.choices[0].message.content;
//     const examplesJsonMatch = examplesText?.match(/\{[\s\S]*\}/);
//     if (!examplesJsonMatch) throw new Error('No JSON received for genitive examples');
//     const examplesData = JSON.parse(examplesJsonMatch[0]);

//     const result: GenitiveAnalysis = {
//       noun,
//       english: noun, // optionally replace with actual translation
//       genitive: genitiveForms,
//       usage: examplesData.usage,
//       examples: examplesData.examples,
//       translations: examplesData.translations,
//       genitivePluralExamples: examplesData.genitivePluralExamples,
//       genitivePluralTranslations: examplesData.genitivePluralTranslations,
//       notes: examplesData.notes,
//       isFinnishInput: isFinnish,
//     };

//     return NextResponse.json(result);

//   } catch (error) {
//     console.error('Error in analyze-genitive route:', error);
//     return NextResponse.json({ error: 'Failed to analyze noun', details: (error as Error).message }, { status: 500 });
//   }
// }
// app/api/analyze-genitive/route.ts
import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

interface AnalyzeGenitiveRequest {
  noun: string;
}

interface GenitiveForms {
  singular: string;
  genitive: string;
  genitivePlural: string;
  rule: string;
}

interface GenitiveAnalysis {
  noun: string;
  english: string;
  genitive: GenitiveForms;
  usage: string[];
  examples: string[];
  translations: string[];
  genitivePluralExamples: string[];
  genitivePluralTranslations: string[];
  notes: string;
  isFinnishInput: boolean;
}

function isFinnishInput(noun: string): boolean {
  const finnishPattern = /[äöå]/i;
  const finnishNounEndings = /(nen|sus|us|os|as|äs|is|es|ys|ut|yt|it|ot|öt|at|ät)$/i;
  return finnishPattern.test(noun) || finnishNounEndings.test(noun);
}

export async function POST(request: NextRequest) {
  try {
    const { noun }: AnalyzeGenitiveRequest = await request.json();

    if (!noun) {
      return NextResponse.json({ error: 'Noun is required' }, { status: 400 });
    }

    let finnishNoun = noun.trim();
    let isFinnish = isFinnishInput(finnishNoun);

    // Translate English noun to Finnish if needed
    if (!isFinnish) {
      const translatePrompt = `Translate this English noun to Finnish: "${finnishNoun}". Return only the Finnish word.`;
      const translateCompletion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: "You are a Finnish language expert. Only return the Finnish translation of the given English noun." },
          { role: "user", content: translatePrompt }
        ],
        temperature: 0,
        max_tokens: 10
      });

      const translationMessage = translateCompletion.choices?.[0]?.message?.content?.trim();
      if (!translationMessage) {
        return NextResponse.json({ error: 'Failed to translate English noun to Finnish' }, { status: 500 });
      }

      finnishNoun = translationMessage;
      isFinnish = true;
    }

    // Prepare prompt for genitive analysis
    const prompt = `
      Analyze the Finnish noun: "${finnishNoun}".
      
      Provide JSON with:
      1. English translation
      2. Genitive singular form
      3. Genitive plural form
      4. Rule
      5. Usage contexts (array)
      6. Example sentences (array)
      7. Translations of examples (array)
      8. Genitive plural examples (array)
      9. Translations of plural examples (array)
      10. Notes

      JSON format:
      {
        "noun": "Finnish noun",
        "english": "english translation",
        "genitive": {
          "singular": "base singular form",
          "genitive": "genitive singular form",
          "genitivePlural": "genitive plural form",
          "rule": "genitive formation rule"
        },
        "usage": ["usage 1", "usage 2"],
        "examples": ["example 1", "example 2"],
        "translations": ["translation 1", "translation 2"],
        "genitivePluralExamples": ["plural example 1", "plural example 2"],
        "genitivePluralTranslations": ["plural translation 1", "plural translation 2"],
        "notes": "important notes",
        "isFinnishInput": true
      }

      Return only the JSON object.
    `;

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant specialized in Finnish language education. Provide accurate genitive forms and translations. Return ONLY valid JSON."
        },
        { role: "user", content: prompt }
      ],
      temperature: 0.7,
      max_tokens: 2000
    });

    const responseText = completion.choices?.[0]?.message?.content;

    if (!responseText) {
      return NextResponse.json({ error: 'No response from OpenAI' }, { status: 500 });
    }

    // Parse JSON safely
    let result: GenitiveAnalysis;
    try {
      const jsonMatch = responseText.match(/\{[\s\S]*\}/);
      const jsonString = jsonMatch ? jsonMatch[0] : responseText;
      result = JSON.parse(jsonString);
    } catch (parseError) {
      console.error('Error parsing OpenAI response:', parseError);
      console.error('Response text:', responseText);
      return NextResponse.json({ error: 'Failed to parse OpenAI response' }, { status: 500 });
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error('Error in /noun-genetive-pluralization:', error);
    return NextResponse.json({ error: 'Failed to analyze noun' }, { status: 500 });
  }
}

