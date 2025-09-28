"use client";
"use client";

import { useState } from "react";
import {
  Container,
  Header,
  Title,
  Subtitle,
  Section,
  SectionTitle,
  SectionDescription,
  IdiomGrid,
  IdiomCard,
  IdiomPhrase,
  IdiomMeaning,
  IdiomLiteral,
  IdiomExample,
  UsageTip,
  CategoryFilter,
  FilterButton,
  IdiomTable,
  TableHeader,
  TableCell,
  TableRow,
  DifficultyBadge,
} from "./Idioms.styles";

// Finnish idioms organized by category
const idiomCategories = [
  {
    title: "Animal Idioms",
    description: "Idioms involving animals and nature",
    difficulty: "Intermediate",
    examples: [
      {
        phrase: "Olla karhunpalvelus",
        meaning: "To do a disservice (while meaning well)",
        literal: "To be a bear's service",
        example: "Se oli karhunpalvelus auttaa häntä huijauksessa.",
        translation: "It was a disservice to help him with the scam.",
        usage: "Used when helping actually causes harm",
      },
      {
        phrase: "Kuin kissa kuumalle katolle",
        meaning: "Very nervous or restless",
        literal: "Like a cat on a hot roof",
        example: "Olin kuin kissa kuumalle katolle ennen haastattelua.",
        translation: "I was like a cat on a hot roof before the interview.",
        usage: "Describes extreme nervousness",
      },
      {
        phrase: "Olla lehmä ojassa",
        meaning: "To be in big trouble",
        literal: "To have a cow in the ditch",
        example: "Nyt minulla on lehmä ojassa pomon kanssa.",
        translation: "Now I'm in big trouble with the boss.",
        usage: "Serious problem situation",
      },
      {
        phrase: "Mennä ihan sutta ja sekundaa",
        meaning: "To go completely wrong",
        literal: "To go wolf and second (nonsense)",
        example: "Projekti meni ihan sutta ja sekundaa.",
        translation: "The project went completely wrong.",
        usage: "Total chaos or failure",
      },
      {
        phrase: "Olla kana housuissa",
        meaning: "To be very scared",
        literal: "To have a chicken in the pants",
        example: "Olin kana housuissa ennen esitystä.",
        translation: "I was very scared before the performance.",
        usage: "Extreme fear or anxiety",
      },
      {
        phrase: "Nähdä pinkki elefantti",
        meaning: "To see something imaginary (from drinking)",
        literal: "To see a pink elephant",
        example: "Eilen illalla näin pinkin elefantin.",
        translation: "Last night I saw a pink elephant.",
        usage: "Hallucinations from alcohol",
      },
      {
        phrase: "Olla kuin kala vedessä",
        meaning: "To be in one's element",
        literal: "To be like a fish in water",
        example: "Hän on kuin kala vedessä ohjelmoinnissa.",
        translation: "He's in his element with programming.",
        usage: "Perfect comfort in a situation",
      },
      {
        phrase: "Mennä päin heinää",
        meaning: "To go very badly",
        literal: "To go toward the hay",
        example: "Kaikki meni päin heinää.",
        translation: "Everything went very badly.",
        usage: "Complete failure",
      },
      {
        phrase: "Olla kuin härkä punaista liinaa kohti",
        meaning: "To charge blindly forward",
        literal: "To be like a bull toward a red cloth",
        example: "Hän meni kuin härkä punaista liinaa kohti.",
        translation: "He charged forward like a bull.",
        usage: "Acting without thinking",
      },
      {
        phrase: "Käärme parrassaan",
        meaning: "A traitor among friends",
        literal: "A snake in one's beard",
        example: "Hän on käärme parrassamme.",
        translation: "He's a snake in our beard.",
        usage: "Untrustworthy person in the group",
      },
      {
        phrase: "Olla kuin ilves saaliinsa perässä",
        meaning: "To be very determined",
        literal: "To be like a lynx after its prey",
        example: "Hän on kuin ilves saaliinsa perässä.",
        translation: "He's very determined like a lynx.",
        usage: "Extreme focus and determination",
      },
      {
        phrase: "Mennä kuin koira veräjästä",
        meaning: "To be fired or kicked out",
        literal: "To go like a dog through the gate",
        example: "Hän meni kuin koira veräjästä työstään.",
        translation: "He was fired from his job.",
        usage: "Getting dismissed or expelled",
      },
      {
        phrase: "Olla kuin pöllöinä",
        meaning: "To be completely confused",
        literal: "To be like owls",
        example: "Olimme kuin pöllöinä uusien ohjeiden jälkeen.",
        translation: "We were completely confused after the new instructions.",
        usage: "Total confusion",
      },
      {
        phrase: "Kärpäsenä kakussa",
        meaning: "To be very noticeable (in a bad way)",
        literal: "Like a fly in the cake",
        example: "Olin kärpäsenä kakussa väärissä vaatteissa.",
        translation: "I stood out like a fly in the cake in the wrong clothes.",
        usage: "Being very conspicuous",
      },
      {
        phrase: "Olla kuin heinäsirkkojen lauma",
        meaning: "To be very numerous",
        literal: "To be like a swarm of grasshoppers",
        example: "Turistit olivat kuin heinäsirkkojen lauma.",
        translation: "The tourists were like a swarm of grasshoppers.",
        usage: "Large, overwhelming numbers",
      },
      {
        phrase: "Mennä kuin lehmä suoheen",
        meaning: "To fail spectacularly",
        literal: "To go like a cow into the swamp",
        example: "Esitys meni kuin lehmä suoheen.",
        translation: "The performance failed spectacularly.",
        usage: "Complete and obvious failure",
      },
    ],
  },
  {
    title: "Food Idioms",
    description: "Idioms related to food and eating",
    difficulty: "Intermediate",
    examples: [
      {
        phrase: "Mennä puihin",
        meaning: "To misunderstand completely",
        literal: "To go into the trees",
        example: "Ymmärsin väärin ja menin täysin puihin.",
        translation: "I understood wrong and completely missed the point.",
        usage: "When someone misunderstands dramatically",
      },
      {
        phrase: "Olla naama norsunvitulla",
        meaning: "To have a very sour face",
        literal: "To have a face like an elephant's dick",
        example: "Miksi sinulla on aina naama norsunvitulla aamuisin?",
        translation: "Why do you always have such a sour face in the mornings?",
        usage: "Very informal, describes grumpy expression",
      },
      {
        phrase: "Olla pipo päässä",
        meaning: "To be confused or not understanding",
        literal: "To have a beanie on the head",
        example: "Olin täysin pipo päässä matematiikan tunnilla.",
        translation: "I was completely confused in math class.",
        usage: "Mental confusion or lack of understanding",
      },
      {
        phrase: "Mennä mönkään",
        meaning: "To go wrong or fail",
        literal: "To go to the swamp",
        example: "Kaikki suunnitelmat menivät mönkään.",
        translation: "All the plans went wrong.",
        usage: "Things not going as planned",
      },
      {
        phrase: "Olla kuin tulisissa hiilissä",
        meaning: "To be very impatient",
        literal: "To be like on hot coals",
        example: "Olin kuin tulisissa hiilissä odottaessani tuloksia.",
        translation: "I was very impatient waiting for the results.",
        usage: "Extreme impatience",
      },
      {
        phrase: "Panna patti pöytään",
        meaning: "To put an end to something",
        literal: "To put the pot on the table",
        example: "Panimme patin pöytään riidalle.",
        translation: "We put an end to the argument.",
        usage: "Final decision or action",
      },
      {
        phrase: "Olla kuin makkaraa",
        meaning: "To be very easy",
        literal: "To be like sausage",
        example: "Tentti oli kuin makkaraa.",
        translation: "The exam was very easy.",
        usage: "Extreme ease",
      },
      {
        phrase: "Mennä nuppi nurin",
        meaning: "To get very upset",
        literal: "To go head down",
        example: "Hän meni nuppi nurin pienestä virheestä.",
        translation: "He got very upset about a small mistake.",
        usage: "Strong emotional reaction",
      },
      {
        phrase: "Olla kuin oluttynnyri",
        meaning: "To be very fat",
        literal: "To be like a beer barrel",
        example: "Hän on kuin oluttynnyri nykyään.",
        translation: "He's like a beer barrel these days.",
        usage: "Describing obesity",
      },
      {
        phrase: "Panna puurot vääriin kauhoihin",
        meaning: "To blame the wrong person",
        literal: "To put the porridge in the wrong bowls",
        example: "Älä pane puuroja vääriin kauhoihin!",
        translation: "Don't blame the wrong person!",
        usage: "Misplaced blame",
      },
      {
        phrase: "Olla kuin suolaliemi",
        meaning: "To be very salty (personality)",
        literal: "To be like salt broth",
        example: "Hän on aina kuin suolaliemi.",
        translation: "He's always very salty.",
        usage: "Grumpy or bitter person",
      },
      {
        phrase: "Mennä kuin kuumille kiville",
        meaning: "To be in an uncomfortable situation",
        literal: "To go like on hot stones",
        example: "Kokous meni kuin kuumille kiville.",
        translation: "The meeting was very uncomfortable.",
        usage: "Awkward or tense situation",
      },
      {
        phrase: "Olla kuin pullataikina",
        meaning: "To be very soft or weak",
        literal: "To be like bun dough",
        example: "Hän on kuin pullataikina painostuksen alla.",
        translation: "He's very soft under pressure.",
        usage: "Lack of resilience",
      },
      {
        phrase: "Panna viimeinen naula arkkuun",
        meaning: "To be the final straw",
        literal: "To put the last nail in the coffin",
        example: "Se oli viimeinen naula arkkuun.",
        translation: "That was the final straw.",
        usage: "Final decisive negative action",
      },
      {
        phrase: "Olla kuin hernekeitto",
        meaning: "To be very thick or dense",
        literal: "To be like pea soup",
        example: "Sumu oli kuin hernekeitto.",
        translation: "The fog was very thick.",
        usage: "Extreme density or thickness",
      },
      {
        phrase: "Mennä kuin pieru saharaan",
        meaning: "To disappear without effect",
        literal: "To go like a fart in the Sahara",
        example: "Valitukseni meni kuin pieru saharaan.",
        translation: "My complaint disappeared without effect.",
        usage: "Complete lack of impact",
      },
    ],
  },
  {
    title: "Body Part Idioms",
    description: "Idioms involving body parts",
    difficulty: "Intermediate",
    examples: [
      {
        phrase: "Potta pöntöstä",
        meaning: "To fail miserably",
        literal: "Pot from the toilet",
        example: "Tentti meni potta pöntöstä.",
        translation: "The exam went down the toilet.",
        usage: "Complete failure",
      },
      {
        phrase: "Heittää hanskat tiskiin",
        meaning: "To give up",
        literal: "To throw the gloves on the table",
        example: "Hän heitti hanskat tiskiin ja lopetti projektin.",
        translation: "He threw in the towel and quit the project.",
        usage: "Giving up on something",
      },
      {
        phrase: "Olla nenä vähän pystyssä",
        meaning: "To be a bit arrogant",
        literal: "To have the nose a bit up",
        example: "Hänellä on nenä vähän pystyssä menestyksensä jälkeen.",
        translation: "He's a bit arrogant after his success.",
        usage: "Slight arrogance",
      },
      {
        phrase: "Panna hampaat poveen",
        meaning: "To endure hardship",
        literal: "To put teeth in the stomach",
        example: "Joukkue pani hampaat poveen ja voitti.",
        translation: "The team endured and won.",
        usage: "Showing determination through difficulty",
      },
      {
        phrase: "Olla pää täynnä tuulta",
        meaning: "To be scatterbrained",
        literal: "To have head full of wind",
        example: "Hän on aina pää täynnä tuulta.",
        translation: "He's always scatterbrained.",
        usage: "Lack of focus or organization",
      },
      {
        phrase: "Nauraa päin naamaa",
        meaning: "To laugh in someone's face",
        literal: "To laugh into the face",
        example: "Hän nauroi päin naamaani ehdotuksestani.",
        translation: "He laughed in my face about my suggestion.",
        usage: "Mocking or disrespectful laughter",
      },
      {
        phrase: "Olla kädet taskussa",
        meaning: "To not help or participate",
        literal: "To have hands in pockets",
        example: "Hän seisoi kädet taskussa kun kaikki tekivät töitä.",
        translation: "He stood with hands in pockets while everyone worked.",
        usage: "Refusing to help",
      },
      {
        phrase: "Pestä kädet",
        meaning: "To wash one's hands of something",
        literal: "To wash hands",
        example: "Hän pesi kätensä koko asiasta.",
        translation: "He washed his hands of the whole matter.",
        usage: "Abandoning responsibility",
      },
      {
        phrase: "Olla pää kylmä",
        meaning: "To be calm and rational",
        literal: "To have a cold head",
        example: "Pidä pää kylmänä kriisitilanteessa.",
        translation: "Keep a cool head in crisis situations.",
        usage: "Staying calm under pressure",
      },
      {
        phrase: "Heittää kylmää vettä niskaan",
        meaning: "To discourage or dampen enthusiasm",
        literal: "To throw cold water on the neck",
        example: "Hän heitti kylmää vettä niskaani idealleni.",
        translation: "He discouraged me about my idea.",
        usage: "Negative criticism",
      },
      {
        phrase: "Olla pää kainalossa",
        meaning: "To be very worried",
        literal: "To have head under arm",
        example: "Olin pää kainalossa poikani takia.",
        translation: "I was very worried about my son.",
        usage: "Extreme worry",
      },
      {
        phrase: "Näyttää pitkää nenää",
        meaning: "To mock or make fun of",
        literal: "To show long nose",
        example: "He näyttivät pitkää nenää minulle.",
        translation: "They mocked me.",
        usage: "Ridiculing someone",
      },
      {
        phrase: "Olla varpaillaan",
        meaning: "To be alert and ready",
        literal: "To be on one's toes",
        example: "Olin varpaillani odottaessani tuloksia.",
        translation: "I was on my toes waiting for the results.",
        usage: "High alertness",
      },
      {
        phrase: "Panna sormi suuhun",
        meaning: "To be very surprised",
        literal: "To put finger in mouth",
        example: "Panin sormen suuhun yllätyksestä.",
        translation: "I was very surprised.",
        usage: "Extreme surprise",
      },
      {
        phrase: "Olla kuin olisi perseestä revitty",
        meaning: "To be very poorly made",
        literal: "To be like torn from ass",
        example: "Tämä tuote on kuin olisi perseestä revitty.",
        translation: "This product is very poorly made.",
        usage: "Extremely low quality",
      },
      {
        phrase: "Heittää luu kurkkuun",
        meaning: "To give up completely",
        literal: "To throw bone in throat",
        example: "Hän heitti luun kurkkuun ja lähti pois.",
        translation: "He gave up completely and left.",
        usage: "Complete surrender",
      },
    ],
  },
  {
    title: "Weather & Nature Idioms",
    description: "Idioms related to weather and natural phenomena",
    difficulty: "Intermediate",
    examples: [
      {
        phrase: "Kuin tuhka tuuleen",
        meaning: "To disappear without a trace",
        literal: "Like ashes in the wind",
        example: "Hän katosi kuin tuhka tuuleen.",
        translation: "He disappeared without a trace.",
        usage: "Complete disappearance",
      },
      {
        phrase: "Olla pilvilinnoissa",
        meaning: "To be daydreaming",
        literal: "To be in cloud castles",
        example: "Älä ole pilvilinnoissa, keskity työhön!",
        translation: "Don't be daydreaming, focus on work!",
        usage: "Not paying attention, lost in thoughts",
      },
      {
        phrase: "Mennä myttyyn",
        meaning: "To fail or get messed up",
        literal: "To go into a bundle",
        example: "Koko suunnitelma meni myttyyn.",
        translation: "The whole plan failed.",
        usage: "Complete failure",
      },
      {
        phrase: "Olla kuin myrskyn silmässä",
        meaning: "To be in the center of activity",
        literal: "To be in the eye of the storm",
        example: "Hän on aina kuin myrskyn silmässä.",
        translation: "He's always in the center of activity.",
        usage: "Being where the action is",
      },
      {
        phrase: "Päästää tuulemaan",
        meaning: "To let something air out",
        literal: "To let wind",
        example: "Päästettiin asia tuulemaan.",
        translation: "We let the matter air out.",
        usage: "Revealing or discussing openly",
      },
      {
        phrase: "Olla kuin salaman iskemä",
        meaning: "To be very surprised",
        literal: "To be like struck by lightning",
        example: "Olin kuin salaman iskemä uutisesta.",
        translation: "I was very surprised by the news.",
        usage: "Extreme shock or surprise",
      },
      {
        phrase: "Mennä kuin pieru Saharaan",
        meaning: "To have no effect",
        literal: "To go like a fart in Sahara",
        example: "Valitukseni meni kuin pieru Saharaan.",
        translation: "My complaint had no effect.",
        usage: "Complete lack of impact",
      },
      {
        phrase: "Olla kuin jäinen kylmyys",
        meaning: "To be very cold (emotionally)",
        literal: "To be like icy coldness",
        example: "Hänen katseensa oli kuin jäinen kylmyys.",
        translation: "His gaze was like icy coldness.",
        usage: "Extreme emotional coldness",
      },
      {
        phrase: "Puhua paskaa",
        meaning: "To talk nonsense",
        literal: "To talk shit",
        example: "Hän puhuu aina paskaa.",
        translation: "He always talks nonsense.",
        usage: "Speaking untruths or nonsense",
      },
      {
        phrase: "Olla kuin tulessa",
        meaning: "To be very enthusiastic",
        literal: "To be like on fire",
        example: "Hän on kuin tulessa uuden idean takia.",
        translation: "He's very enthusiastic about the new idea.",
        usage: "Extreme enthusiasm",
      },
      {
        phrase: "Mennä metsään",
        meaning: "To go wrong or get lost",
        literal: "To go to the forest",
        example: "Laskelmat menivät metsään.",
        translation: "The calculations went wrong.",
        usage: "Mistakes or errors",
      },
      {
        phrase: "Olla kuin auringonpaiste",
        meaning: "To be very happy and positive",
        literal: "To be like sunshine",
        example: "Hän on aina kuin auringonpaiste.",
        translation: "He's always like sunshine.",
        usage: "Extreme happiness",
      },
      {
        phrase: "Päästää vesi varpaille",
        meaning: "To urinate (humorous)",
        literal: "To let water to toes",
        example: "Päästän vettä varpaille.",
        translation: "I need to urinate.",
        usage: "Humorous way to say urinate",
      },
      {
        phrase: "Olla kuin myrskyn edellä",
        meaning: "To precede trouble",
        literal: "To be like before the storm",
        example: "Hänen käytöksensä on kuin myrskyn edellä.",
        translation: "His behavior precedes trouble.",
        usage: "Warning signs before problems",
      },
      {
        phrase: "Mennä kuin halki pilven",
        meaning: "To go very easily",
        literal: "To go like through cloud",
        example: "Tentti meni kuin halki pilven.",
        translation: "The exam went very easily.",
        usage: "Extreme ease",
      },
      {
        phrase: "Olla kuin pilvenpiirtäjä",
        meaning: "To be very tall",
        literal: "To be like a skyscraper",
        example: "Hän on kuin pilvenpiirtäjä.",
        translation: "He's very tall.",
        usage: "Extreme height",
      },
    ],
  },
];

const Idioms = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredCategories =
    activeCategory === "all"
      ? idiomCategories
      : idiomCategories.filter((cat) => cat.title === activeCategory);

  return (
    <Container>
      <Header>
        <Title>Finnish Idioms & Expressions</Title>
        <Subtitle>
          Discover the colorful and often hilarious world of Finnish idioms with
          their fascinating literal meanings and cultural significance
        </Subtitle>
      </Header>

      <CategoryFilter>
        <FilterButton
          $active={activeCategory === "all"}
          onClick={() => setActiveCategory("all")}
        >
          All Idioms
        </FilterButton>
        {idiomCategories.map((category) => (
          <FilterButton
            key={category.title}
            $active={activeCategory === category.title}
            onClick={() => setActiveCategory(category.title)}
          >
            {category.title}
          </FilterButton>
        ))}
      </CategoryFilter>

      {filteredCategories.map((category, index) => (
        <Section key={index}>
          <SectionTitle>
            {category.title}
            <DifficultyBadge $level={category.difficulty.toLowerCase()}>
              {category.difficulty}
            </DifficultyBadge>
          </SectionTitle>
          <SectionDescription>{category.description}</SectionDescription>

          {/* Mobile Card View */}
          <IdiomGrid>
            {category.examples.map((idiom, idx) => (
              <IdiomCard key={idx}>
                <IdiomPhrase>{idiom.phrase}</IdiomPhrase>
                <IdiomMeaning>{idiom.meaning}</IdiomMeaning>
                <IdiomLiteral>
                  Literally: &quot;{idiom.literal}&quot;
                </IdiomLiteral>
                <IdiomExample>
                  {idiom.example}
                  <br />
                  <em>{idiom.translation}</em>
                </IdiomExample>
                <UsageTip>{idiom.usage}</UsageTip>
              </IdiomCard>
            ))}
          </IdiomGrid>

          {/* Desktop Table View */}
          <IdiomTable>
            <thead>
              <tr>
                <TableHeader>Idiom</TableHeader>
                <TableHeader>Meaning</TableHeader>
                <TableHeader>Literal Translation</TableHeader>
                <TableHeader>Example</TableHeader>
                <TableHeader>Usage</TableHeader>
              </tr>
            </thead>
            <tbody>
              {category.examples.map((idiom, idx) => (
                <TableRow key={idx}>
                  <TableCell $emphasis>{idiom.phrase}</TableCell>
                  <TableCell>{idiom.meaning}</TableCell>
                  <TableCell>
                    <IdiomLiteral>&quot;{idiom.literal}&quot;</IdiomLiteral>
                  </TableCell>
                  <TableCell>
                    {idiom.example}
                    <br />
                    <em>{idiom.translation}</em>
                  </TableCell>
                  <TableCell>
                    <UsageTip>{idiom.usage}</UsageTip>
                  </TableCell>
                </TableRow>
              ))}
            </tbody>
          </IdiomTable>
        </Section>
      ))}
    </Container>
  );
};

export default Idioms;
