// // app/api/analyze-illative/route.ts
// import { NextRequest, NextResponse } from 'next/server';
// import OpenAI from 'openai';

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// interface AnalyzeIllativeRequest {
//   noun: string;
// }

// interface IllativeForms {
//   singular: string;
//   illative: string;
//   illativePlural: string;
//   rule: string;
// }

// interface IllativeAnalysis {
//   noun: string;
//   english: string;
//   illative: IllativeForms;
//   usage: string[];
//   examples: string[];
//   translations: string[];
//   illativePluralExamples: string[];
//   illativePluralTranslations: string[];
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
//     const { noun }: AnalyzeIllativeRequest = await request.json();

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
//       2. The illative singular form
//       3. The illative plural form
//       4. The rule that applies to this noun's illative formation
//       5. The main usage contexts for the illative case with this noun (array)
//       6. Example sentences using the illative singular forms (array)
//       7. English translations of the example sentences (array)
//       8. Example sentences using the illative plural forms (array)
//       9. English translations of the illative plural example sentences (array)
//       10. Any important notes about this noun's illative usage
      
//       Format the response as JSON with the following EXACT structure:
//       {
//         "noun": "Finnish noun",
//         "english": "english translation",
//         "illative": {
//           "singular": "base singular form",
//           "illative": "illative singular form",
//           "illativePlural": "illative plural form",
//           "rule": "illative formation rule"
//         },
//         "usage": ["usage context 1", "usage context 2"],
//         "examples": ["example sentence 1", "example sentence 2"],
//         "translations": ["translation 1", "translation 2"],
//         "illativePluralExamples": ["plural example 1", "plural example 2"],
//         "illativePluralTranslations": ["plural translation 1", "plural translation 2"],
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
//           content: "You are a helpful assistant specialized in Finnish language education. Provide accurate Finnish illative forms and translations. Return ONLY valid JSON with the exact structure specified."
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
//       const fallbackNouns: Record<string, IllativeAnalysis> = {
//         'talo': {
//           noun: "talo",
//           english: "house",
//           illative: {
//             singular: "talo",
//             illative: "taloon",
//             illativePlural: "taloihin",
//             rule: "Basic illative: add -Vn where V is the last vowel (vowel harmony: a→aa, o→oo)"
//           },
//           usage: ["Movement into", "Direction toward", "Entering"],
//           examples: [
//             "Menen taloon.",
//             "Kävelen taloon päin.",
//             "Astun taloon sisään."
//           ],
//           translations: [
//             "I go into the house.",
//             "I walk toward the house.",
//             "I step into the house."
//           ],
//           illativePluralExamples: [
//             "Menen taloihin.",
//             "Kävelemme taloihin päin.",
//             "Astumme taloihin sisään."
//           ],
//           illativePluralTranslations: [
//             "I go into the houses.",
//             "We walk toward the houses.",
//             "We step into the houses."
//           ],
//           notes: "The illative case indicates movement into or toward something. Basic rule: add the last vowel + n.",
//           isFinnishInput: true
//         },
//         'koulu': {
//           noun: "koulu",
//           english: "school",
//           illative: {
//             singular: "koulu",
//             illative: "kouluun",
//             illativePlural: "kouluihin",
//             rule: "Words ending in -u: add -un for illative singular, -ihin for illative plural"
//           },
//           usage: ["Going to", "Movement toward", "Education context"],
//           examples: [
//             "Menen kouluun.",
//             "Hän kävelee kouluun.",
//             "Lapset juoksevat kouluun."
//           ],
//           translations: [
//             "I go to school.",
//             "He/she walks to school.",
//             "The children run to school."
//           ],
//           illativePluralExamples: [
//             "Menen kouluihin.",
//             "Opettajat menevät kouluihin.",
//             "Matkustamme eri kouluihin."
//           ],
//           illativePluralTranslations: [
//             "I go to schools.",
//             "The teachers go to schools.",
//             "We travel to different schools."
//           ],
//           notes: "The illative case is commonly used with places like school to indicate direction.",
//           isFinnishInput: true
//         },
//         'kirja': {
//           noun: "kirja",
//           english: "book",
//           illative: {
//             singular: "kirja",
//             illative: "kirjaan",
//             illativePlural: "kirjoihin",
//             rule: "Words ending in -a: add -an for illative singular, -ihin for illative plural with consonant gradation"
//           },
//           usage: ["Looking into", "Reading", "Figurative movement"],
//           examples: [
//             "Katselen kirjaan.",
//             "Hän uppoutui kirjaan.",
//             "Tutustuin uuteen kirjaan."
//           ],
//           translations: [
//             "I look into the book.",
//             "He/she immersed himself/herself in the book.",
//             "I familiarized myself with the new book."
//           ],
//           illativePluralExamples: [
//             "Katselen kirjoihin.",
//             "Uppouduimme kirjoihin.",
//             "Tutustuimme uusiin kirjoihin."
//           ],
//           illativePluralTranslations: [
//             "I look into the books.",
//             "We immersed ourselves in the books.",
//             "We familiarized ourselves with new books."
//           ],
//           notes: "The illative can indicate both physical and figurative movement into something.",
//           isFinnishInput: true
//         },
//         'kaupunki': {
//           noun: "kaupunki",
//           english: "city",
//           illative: {
//             singular: "kaupunki",
//             illative: "kaupunkiin",
//             illativePlural: "kaupunkeihin",
//             rule: "Words ending in -i: add -in for illative singular, -eihin for illative plural with consonant gradation"
//           },
//           usage: ["Traveling to", "Movement into urban areas", "Relocation"],
//           examples: [
//             "Muutan kaupunkiin.",
//             "Matkustamme kaupunkiin.",
//             "Ajelen kaupunkiin töihin."
//           ],
//           translations: [
//             "I move to the city.",
//             "We travel to the city.",
//             "I drive to the city for work."
//           ],
//           illativePluralExamples: [
//             "Matkustamme kaupunkeihin.",
//             "Muutamme suuriin kaupunkeihin.",
//             "Liikemiehet lentävät kaupunkeihin."
//           ],
//           illativePluralTranslations: [
//             "We travel to cities.",
//             "We move to big cities.",
//             "Businessmen fly to cities."
//           ],
//           notes: "Kaupunki undergoes consonant gradation in plural: kaupunki → kaupunkeihin",
//           isFinnishInput: true
//         },
//         'metsä': {
//           noun: "metsä",
//           english: "forest",
//           illative: {
//             singular: "metsä",
//             illative: "metsään",
//             illativePlural: "metsiin",
//             rule: "Words ending in -ä: add -än for illative singular, -iin for illative plural"
//           },
//           usage: ["Going into nature", "Outdoor activities", "Exploration"],
//           examples: [
//             "Kävelen metsään.",
//             "Lapset juoksevat metsään leikkimään.",
//             "Retkeilijät vaeltavat metsään."
//           ],
//           translations: [
//             "I walk into the forest.",
//             "The children run into the forest to play.",
//             "The hikers trek into the forest."
//           ],
//           illativePluralExamples: [
//             "Kävelemme metsiin.",
//             "Matkustamme eri metsiin.",
//             "Eläimet piiloutuvat metsiin."
//           ],
//           illativePluralTranslations: [
//             "We walk into forests.",
//             "We travel to different forests.",
//             "Animals hide in forests."
//           ],
//           notes: "Vowel harmony: ä-words take -ään in illative singular and -iin in plural",
//           isFinnishInput: true
//         },
//         'järvi': {
//           noun: "järvi",
//           english: "lake",
//           illative: {
//             singular: "järvi",
//             illative: "järveen",
//             illativePlural: "järviin",
//             rule: "Words ending in -i with consonant gradation: järvi → järveen (singular), järvi → järviin (plural)"
//           },
//           usage: ["Swimming into", "Water activities", "Geographical movement"],
//           examples: [
//             "Uimme järveen.",
//             "Heitimme kiven järveen.",
//             "Vene upposi järveen."
//           ],
//           translations: [
//             "We swim into the lake.",
//             "We threw a stone into the lake.",
//             "The boat sank into the lake."
//           ],
//           illativePluralExamples: [
//             "Uimme järviin.",
//             "Matkustamme kauniisiin järviin.",
//             "Kalastajat menevät järviin."
//           ],
//           illativePluralTranslations: [
//             "We swim into lakes.",
//             "We travel to beautiful lakes.",
//             "Fishermen go to lakes."
//           ],
//           notes: "Järvi undergoes consonant gradation in illative singular: järvi → järveen",
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

// app/api/analyze-illative/route.ts
import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

interface IllativeForms {
  singular: string;
  illative: string;
  illativePlural: string;
  rule: string;
}

interface IllativeAnalysis {
  noun: string;
  english: string;
  illative: IllativeForms;
  usage: string[];
  examples: string[];
  translations: string[];
  illativePluralExamples: string[];
  illativePluralTranslations: string[];
  notes: string;
  isFinnishInput: boolean;
}

function isFinnishInput(noun: string): boolean {
  const finnishPattern = /[äöå]/i;
  const finnishEndings = /(a|ä|e|i|o|u|y|ö|å|nen|us|os|as|is)$/i;
  return finnishPattern.test(noun) || finnishEndings.test(noun);
}

export async function POST(request: NextRequest) {
  try {
    const { noun }: { noun: string } = await request.json();
    if (!noun) return NextResponse.json({ error: 'Noun is required' }, { status: 400 });

    const isFinnish = isFinnishInput(noun);
    const lowerNoun = noun.toLowerCase();

    // Step 1: Ask AI for illative forms and rules
    const promptForms = `
      Analyze the Finnish noun: "${noun}".
      Provide the singular illative form and plural illative form, and explain the rule.
      Return JSON like this:
      {
        "illative": {
          "singular": "...",
          "illativePlural": "...",
          "rule": "..."
        }
      }
      Return only JSON.
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
    if (!formsJsonMatch) throw new Error('No JSON received for illative forms');
    const illativeForms: IllativeForms = JSON.parse(formsJsonMatch[0]).illative;

    // Step 2: Generate usage, examples, translations using exactly the generated forms
    const promptExamples = `
      Using these illative forms:
      singular: "${illativeForms.singular}"
      plural: "${illativeForms.illativePlural}"
      
      Generate:
      1. Usage contexts (array)
      2. Example sentences using the singular form (array)
      3. English translations of the singular examples (array)
      4. Example sentences using the plural form (array)
      5. English translations of plural examples (array)
      6. Important notes (string)
      
      IMPORTANT: Use the exact forms provided above in examples. Return only JSON like:
      {
        "usage": [...],
        "examples": [...],
        "translations": [...],
        "illativePluralExamples": [...],
        "illativePluralTranslations": [...],
        "notes": "..."
      }
    `;

    const examplesCompletion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are an expert in Finnish grammar. Return ONLY valid JSON." },
        { role: "user", content: promptExamples }
      ],
      temperature: 0.3,
      max_tokens: 800,
    });

    const examplesText = examplesCompletion.choices[0].message.content;
    const examplesJsonMatch = examplesText?.match(/\{[\s\S]*\}/);
    if (!examplesJsonMatch) throw new Error('No JSON received for illative examples');
    const examplesData = JSON.parse(examplesJsonMatch[0]);

    // Step 3: Combine everything into final response
    const result: IllativeAnalysis = {
      noun,
      english: noun, // optional: replace with API translation
      illative: illativeForms,
      usage: examplesData.usage,
      examples: examplesData.examples,
      translations: examplesData.translations,
      illativePluralExamples: examplesData.illativePluralExamples,
      illativePluralTranslations: examplesData.illativePluralTranslations,
      notes: examplesData.notes,
      isFinnishInput: isFinnish
    };

    return NextResponse.json(result);

  } catch (error) {
    console.error('Error in analyze-illative route:', error);
    return NextResponse.json(
      { error: 'Failed to analyze noun', details: (error as Error).message },
      { status: 500 }
    );
  }
}
