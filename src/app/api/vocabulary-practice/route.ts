// /app/api/vocab-practice/route.ts
import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

interface VocabWord {
  word: string;
  type: string;
  tense?: string;
  pronoun?: string;
  translation: string;
  example: string;
  example_translation: string; // NEW FIELD
}

export const POST = async (req: NextRequest) => {
  try {
    const messages = [
      {
        role: "system" as const,
        content: `
You are a Finnish vocabulary practice generator. Generate DIFFERENT words each time.

RULES:
1. Generate 10 completely different Finnish words each time - avoid repetition
2. Do not use same words when the user generates new list of words
3. Include a diverse mix: nouns, verbs (with different tenses), adjectives, adverbs
4. Use COMPREHENSIVE variety of topics across all 10 words:
   - FOOD & DRINK: ingredients, cooking, meals, beverages, restaurants
   - NATURE & ENVIRONMENT: animals, plants, weather, geography, seasons
   - TECHNOLOGY & COMPUTERS: devices, software, internet, programming, AI
   - EMOTIONS & FEELINGS: happiness, sadness, anger, surprise, love
   - DAILY ACTIVITIES: morning routines, work, school, household chores
   - BUSINESS & WORK: office, meetings, professions, economy, finance
   - EDUCATION & LEARNING: school subjects, studying, academic terms
   - TRAVEL & TRANSPORTATION: vehicles, directions, vacations, tourism
   - HEALTH & MEDICINE: body parts, illnesses, doctors, exercise, wellness
   - HOME & FAMILY: rooms, furniture, family members, relationships
   - TIME & DATES: days, months, seasons, clock time, scheduling
   - NUMBERS & QUANTITIES: cardinal numbers, ordinal numbers, amounts
   - CLOTHING & FASHION: clothing items, accessories, styles
   - SPORTS & RECREATION: games, hobbies, exercises, competitions
   - ARTS & ENTERTAINMENT: music, movies, books, art, culture
   - GOVERNMENT & POLITICS: laws, institutions, citizenship, society
   - SCIENCE & RESEARCH: biology, physics, chemistry, discoveries
   - SHOPPING & COMMERCE: stores, prices, buying, selling, products
   - COMMUNICATION: speaking, writing, media, languages, expressions
5. For verbs: use different tenses (present, past, perfect, conditional) AND include pronoun type
6. For nouns: use different cases (partitive, genitive, inessive, etc.)
7. Provide this metadata:
   - "word": Finnish word (inflected/declined appropriately)
   - "type": noun | verb | adjective | adverb | pronoun | preposition
   - "tense": only if verb (present, past, perfect, conditional, etc.)
   - "pronoun": only if verb (minä, sinä, hän, me, te, he) - who is doing the action
   - "translation": English equivalent (include the pronoun in translation)
   - "example": Finnish sentence using the word
   - "example_translation": English translation of the example sentence

IMPORTANT: 
- For verbs, always include both tense and pronoun
- In the translation, include the English pronoun equivalent
- Return completely new words each time
- Do not repeat words or base words when generating new list
- Always provide example_translation for every word
- AVOID overly common beginner words

JSON format only:
[
  {
    "word": "unique word",
    "type": "word type",
    "tense": "if verb",
    "pronoun": "if verb",
    "translation": "english meaning including pronoun",
    "example": "Finnish example sentence",
    "example_translation": "English translation of the example"
  }
]
        `.trim(),
      },
      {
        role: "user" as const,
        content: `Generate 10 new Finnish vocabulary words. For verbs, include tense and pronoun information. Provide English translations for all example sentences. Current timestamp: ${Date.now()}`,
      },
    ];

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages,
      temperature: 1.0,
      max_tokens: 1000, // Increased for additional translations
    });

    const raw = completion.choices[0].message?.content?.trim() || "[]";
    let parsed: VocabWord[];

    try {
      parsed = JSON.parse(raw);
      if (parsed.length > 10) parsed = parsed.slice(0, 10);
    } catch {
      parsed = [];
    }

    return NextResponse.json(parsed);
  } catch (err) {
    console.error("Vocab API error:", err);
    return NextResponse.json(
      {
        error: "Failed to generate vocabulary",
        details: (err as Error).message,
      },
      { status: 500 }
    );
  }
};
