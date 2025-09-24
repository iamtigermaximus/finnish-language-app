"use client";
import React, { useState } from "react";
import {
  Container,
  ExplanationSection,
  ExplanationTitle,
  ExplanationContent,
  ExampleBox,
  ExampleText,
  KeyPoint,
  SummaryBox,
  CaseBadge,
  FunFactBox,
  Highlight,
  CaseContainer,
  TwoColumnLayout,
  Column,
  CaseUsageContainer,
  UsageItem,
  TabsContainer,
  TabButton,
  Title,
} from "./Adverb.styles";

const Adverb = () => {
  const [activeTab, setActiveTab] = useState("intro");

  return (
    <Container>
      <ExplanationSection>
        <Title>Finnish Adverbs</Title>

        <ExplanationContent>
          Adverbs are words that modify verbs, adjectives, or other adverbs.
          They provide information about how, when, where, or to what extent
          something happens. Finnish adverbs are fascinating because many are
          formed by adding specific endings to adjectives or nouns.
        </ExplanationContent>

        <FunFactBox>
          <span>Did you know? </span>
          Many Finnish adverbs are formed by simply adding -sti to the adjective
          stem: nopea (fast) → nopeasti (quickly), kaunis (beautiful) →
          kauniisti (beautifully)
        </FunFactBox>

        <TabsContainer>
          <TabButton
            active={activeTab === "intro"}
            onClick={() => setActiveTab("intro")}
          >
            Introduction
          </TabButton>
          <TabButton
            active={activeTab === "manner"}
            onClick={() => setActiveTab("manner")}
          >
            Manner Adverbs
          </TabButton>
          <TabButton
            active={activeTab === "time"}
            onClick={() => setActiveTab("time")}
          >
            Time Adverbs
          </TabButton>
          <TabButton
            active={activeTab === "place"}
            onClick={() => setActiveTab("place")}
          >
            Place Adverbs
          </TabButton>
          <TabButton
            active={activeTab === "degree"}
            onClick={() => setActiveTab("degree")}
          >
            Degree Adverbs
          </TabButton>
        </TabsContainer>

        {activeTab === "intro" && (
          <>
            <ExplanationTitle>What are Adverbs?</ExplanationTitle>

            <ExplanationContent>
              Adverbs are words that modify verbs, adjectives, or other adverbs.
              They answer questions like:
            </ExplanationContent>

            <ExampleBox>
              <ExampleText>
                • <Highlight>How?</Highlight> (Miten?) - nopeasti (quickly),
                huolellisesti (carefully)
              </ExampleText>
              <ExampleText>
                • <Highlight>When?</Highlight> (Milloin?) - eilen (yesterday),
                huomenna (tomorrow)
              </ExampleText>
              <ExampleText>
                • <Highlight>Where?</Highlight> (Missä?) - täällä (here), siellä
                (there)
              </ExampleText>
              <ExampleText>
                • <Highlight>To what extent?</Highlight> (Kuinka paljon?) -
                hyvin (very), melko (quite)
              </ExampleText>
            </ExampleBox>

            <ExplanationTitle>How Finnish Adverbs are Formed</ExplanationTitle>

            <TwoColumnLayout>
              <Column>
                <CaseContainer>
                  <CaseBadge>From Adjectives</CaseBadge>
                  <ExplanationContent>
                    Many adverbs are formed by adding -sti to the adjective stem
                  </ExplanationContent>
                  <ExampleBox>
                    <ExampleText>nopea → nopeasti (quickly)</ExampleText>
                    <ExampleText>kaunis → kauniisti (beautifully)</ExampleText>
                    <ExampleText>hiljainen → hiljaa (quietly)</ExampleText>
                  </ExampleBox>
                </CaseContainer>
              </Column>

              <Column>
                <CaseContainer>
                  <CaseBadge>Special Forms</CaseBadge>
                  <ExplanationContent>
                    Some adverbs have unique forms not derived from adjectives
                  </ExplanationContent>
                  <ExampleBox>
                    <ExampleText>nyt (now)</ExampleText>
                    <ExampleText>eilen (yesterday)</ExampleText>
                    <ExampleText>täällä (here)</ExampleText>
                  </ExampleBox>
                </CaseContainer>
              </Column>
            </TwoColumnLayout>
          </>
        )}

        {activeTab === "manner" && (
          <>
            <ExplanationTitle>
              Manner Adverbs (Tapapartikkelit)
            </ExplanationTitle>

            <ExplanationContent>
              Manner adverbs describe how an action is performed. They&apos;re
              often formed by adding -sti to adjectives.
            </ExplanationContent>

            <CaseUsageContainer>
              <UsageItem>
                <KeyPoint>Regular -sti adverbs</KeyPoint>
                <ExampleBox>
                  <ExampleText>
                    nopea → <Highlight>nopeasti</Highlight> (quickly)
                  </ExampleText>
                  <ExampleText>
                    kaunis → <Highlight>kauniisti</Highlight> (beautifully)
                  </ExampleText>
                  <ExampleText>
                    hiljainen → <Highlight>hiljaa</Highlight> (quietly)
                  </ExampleText>
                  <ExampleText>
                    varovainen → <Highlight>varovasti</Highlight> (carefully)
                  </ExampleText>
                </ExampleBox>
              </UsageItem>

              <UsageItem>
                <KeyPoint>Irregular forms</KeyPoint>
                <ExampleBox>
                  <ExampleText>
                    hyvä → <Highlight>hyvin</Highlight> (well)
                  </ExampleText>
                  <ExampleText>
                    paha → <Highlight>pahasti</Highlight> (badly)
                  </ExampleText>
                  <ExampleText>
                    paljon → <Highlight>paljon</Highlight> (much, a lot)
                  </ExampleText>
                </ExampleBox>
              </UsageItem>

              <UsageItem>
                <KeyPoint>Common manner adverbs</KeyPoint>
                <ExampleBox>
                  <ExampleText>
                    <Highlight>nopeasti</Highlight> - quickly
                  </ExampleText>
                  <ExampleText>
                    <Highlight>hitaasti</Highlight> - slowly
                  </ExampleText>
                  <ExampleText>
                    <Highlight>kauniisti</Highlight> - beautifully
                  </ExampleText>
                  <ExampleText>
                    <Highlight>rumasti</Highlight> - ugly
                  </ExampleText>
                  <ExampleText>
                    <Highlight>oikein</Highlight> - correctly
                  </ExampleText>
                  <ExampleText>
                    <Highlight>väärin</Highlight> - incorrectly
                  </ExampleText>
                </ExampleBox>
              </UsageItem>

              <UsageItem>
                <KeyPoint>Examples in sentences</KeyPoint>
                <ExampleBox>
                  <ExampleText>
                    Hän laulaa <Highlight>kauniisti</Highlight>. → She sings
                    beautifully.
                  </ExampleText>
                  <ExampleText>
                    Auto ajoi <Highlight>nopeasti</Highlight>. → The car drove
                    quickly.
                  </ExampleText>
                  <ExampleText>
                    Opiskelen <Highlight>ahkerasti</Highlight>. → I study
                    diligently.
                  </ExampleText>
                </ExampleBox>
              </UsageItem>
            </CaseUsageContainer>
          </>
        )}

        {activeTab === "time" && (
          <>
            <ExplanationTitle>Time Adverbs (Aikapartikkelit)</ExplanationTitle>

            <ExplanationContent>
              Time adverbs indicate when an action occurs. They&apos;re among
              the most commonly used adverbs in Finnish.
            </ExplanationContent>

            <CaseUsageContainer>
              <UsageItem>
                <KeyPoint>Basic time adverbs</KeyPoint>
                <ExampleBox>
                  <ExampleText>
                    <Highlight>nyt</Highlight> - now
                  </ExampleText>
                  <ExampleText>
                    <Highlight>silloin</Highlight> - then
                  </ExampleText>
                  <ExampleText>
                    <Highlight>aina</Highlight> - always
                  </ExampleText>
                  <ExampleText>
                    <Highlight>usein</Highlight> - often
                  </ExampleText>
                  <ExampleText>
                    <Highlight>harvoin</Highlight> - rarely
                  </ExampleText>
                  <ExampleText>
                    <Highlight>ei koskaan</Highlight> - never
                  </ExampleText>
                </ExampleBox>
              </UsageItem>

              <UsageItem>
                <KeyPoint>Specific time references</KeyPoint>
                <ExampleBox>
                  <ExampleText>
                    <Highlight>eilen</Highlight> - yesterday
                  </ExampleText>
                  <ExampleText>
                    <Highlight>tänään</Highlight> - today
                  </ExampleText>
                  <ExampleText>
                    <Highlight>huomenna</Highlight> - tomorrow
                  </ExampleText>
                  <ExampleText>
                    <Highlight>yöllä</Highlight> - at night
                  </ExampleText>
                  <ExampleText>
                    <Highlight>päivällä</Highlight> - during the day
                  </ExampleText>
                  <ExampleText>
                    <Highlight>aamulla</Highlight> - in the morning
                  </ExampleText>
                </ExampleBox>
              </UsageItem>

              <UsageItem>
                <KeyPoint>Frequency adverbs</KeyPoint>
                <ExampleBox>
                  <ExampleText>
                    <Highlight>joskus</Highlight> - sometimes
                  </ExampleText>
                  <ExampleText>
                    <Highlight>usein</Highlight> - often
                  </ExampleText>
                  <ExampleText>
                    <Highlight>harvoin</Highlight> - rarely
                  </ExampleText>
                  <ExampleText>
                    <Highlight>aina</Highlight> - always
                  </ExampleText>
                  <ExampleText>
                    <Highlight>päivittäin</Highlight> - daily
                  </ExampleText>
                  <ExampleText>
                    <Highlight>viikottain</Highlight> - weekly
                  </ExampleText>
                </ExampleBox>
              </UsageItem>

              <UsageItem>
                <KeyPoint>Examples in sentences</KeyPoint>
                <ExampleBox>
                  <ExampleText>
                    <Highlight>Huomenna</Highlight> menen kauppaan. → Tomorrow
                    I&apos;ll go to the store.
                  </ExampleText>
                  <ExampleText>
                    Hän tulee <Highlight>aina</Highlight> myöhässä. → He always
                    comes late.
                  </ExampleText>
                  <ExampleText>
                    Opiskelin <Highlight>eilen</Highlight> illalla. → I studied
                    yesterday evening.
                  </ExampleText>
                </ExampleBox>
              </UsageItem>
            </CaseUsageContainer>
          </>
        )}

        {activeTab === "place" && (
          <>
            <ExplanationTitle>
              Place Adverbs (Paikallipartikkelit)
            </ExplanationTitle>

            <ExplanationContent>
              Place adverbs indicate where an action occurs. Many Finnish place
              adverbs are based on the demonstrative pronouns tämä (this), tuo
              (that), and se (it).
            </ExplanationContent>

            <CaseUsageContainer>
              <UsageItem>
                <KeyPoint>Basic place adverbs</KeyPoint>
                <ExampleBox>
                  <ExampleText>
                    <Highlight>täällä</Highlight> - here
                  </ExampleText>
                  <ExampleText>
                    <Highlight>siellä</Highlight> - there
                  </ExampleText>
                  <ExampleText>
                    <Highlight>tuolla</Highlight> - there (farther)
                  </ExampleText>
                  <ExampleText>
                    <Highlight>kaikkialla</Highlight> - everywhere
                  </ExampleText>
                  <ExampleText>
                    <Highlight>ei missään</Highlight> - nowhere
                  </ExampleText>
                  <ExampleText>
                    <Highlight>jossain</Highlight> - somewhere
                  </ExampleText>
                </ExampleBox>
              </UsageItem>

              <UsageItem>
                <KeyPoint>Directional adverbs</KeyPoint>
                <ExampleBox>
                  <ExampleText>
                    <Highlight>tänne</Highlight> - to here
                  </ExampleText>
                  <ExampleText>
                    <Highlight>sinne</Highlight> - to there
                  </ExampleText>
                  <ExampleText>
                    <Highlight>tuonne</Highlight> - to there (farther)
                  </ExampleText>
                  <ExampleText>
                    <Highlight>kotiin</Highlight> - home (toward)
                  </ExampleText>
                  <ExampleText>
                    <Highlight>pois</Highlight> - away
                  </ExampleText>
                  <ExampleText>
                    <Highlight>ylös</Highlight> - up
                  </ExampleText>
                  <ExampleText>
                    <Highlight>alas</Highlight> - down
                  </ExampleText>
                </ExampleBox>
              </UsageItem>

              <UsageItem>
                <KeyPoint>Location vs. direction</KeyPoint>
                <ExampleBox>
                  <ExampleText>
                    Olen <Highlight>täällä</Highlight>. → I am here. (location)
                  </ExampleText>
                  <ExampleText>
                    Tule <Highlight>tänne</Highlight>! → Come here! (direction)
                  </ExampleText>
                  <ExampleText>
                    Hän asuu <Highlight>siellä</Highlight>. → He lives there.
                    (location)
                  </ExampleText>
                  <ExampleText>
                    Mennään <Highlight>sinne</Highlight>. → Let&apos;s go there.
                    (direction)
                  </ExampleText>
                </ExampleBox>
              </UsageItem>

              <UsageItem>
                <KeyPoint>Examples in sentences</KeyPoint>
                <ExampleBox>
                  <ExampleText>
                    Kirja on <Highlight>täällä</Highlight>. → The book is here.
                  </ExampleText>
                  <ExampleText>
                    Mene <Highlight>sinne</Highlight>! → Go there!
                  </ExampleText>
                  <ExampleText>
                    Kissa on <Highlight>ylhäällä</Highlight>. → The cat is
                    upstairs.
                  </ExampleText>
                </ExampleBox>
              </UsageItem>
            </CaseUsageContainer>
          </>
        )}

        {activeTab === "degree" && (
          <>
            <ExplanationTitle>
              Degree Adverbs (Astepartikkelit)
            </ExplanationTitle>

            <ExplanationContent>
              Degree adverbs modify adjectives or other adverbs to indicate
              intensity or degree.
            </ExplanationContent>

            <CaseUsageContainer>
              <UsageItem>
                <KeyPoint>Common degree adverbs</KeyPoint>
                <ExampleBox>
                  <ExampleText>
                    <Highlight>hyvin</Highlight> - very
                  </ExampleText>
                  <ExampleText>
                    <Highlight>melko</Highlight> - quite
                  </ExampleText>
                  <ExampleText>
                    <Highlight>aika</Highlight> - rather
                  </ExampleText>
                  <ExampleText>
                    <Highlight>liian</Highlight> - too
                  </ExampleText>
                  <ExampleText>
                    <Highlight>erittäin</Highlight> - extremely
                  </ExampleText>
                  <ExampleText>
                    <Highlight>varsin</Highlight> - fairly
                  </ExampleText>
                </ExampleBox>
              </UsageItem>

              <UsageItem>
                <KeyPoint>Intensifiers</KeyPoint>
                <ExampleBox>
                  <ExampleText>
                    <Highlight>todella</Highlight> - really
                  </ExampleText>
                  <ExampleText>
                    <Highlight>niin</Highlight> - so
                  </ExampleText>
                  <ExampleText>
                    <Highlight>aivan</Highlight> - completely
                  </ExampleText>
                  <ExampleText>
                    <Highlight>sangen</Highlight> - very (formal)
                  </ExampleText>
                </ExampleBox>
              </UsageItem>

              <UsageItem>
                <KeyPoint>Diminishers</KeyPoint>
                <ExampleBox>
                  <ExampleText>
                    <Highlight>hieman</Highlight> - a little
                  </ExampleText>
                  <ExampleText>
                    <Highlight>melko</Highlight> - quite
                  </ExampleText>
                  <ExampleText>
                    <Highlight>vähän</Highlight> - a bit
                  </ExampleText>
                  <ExampleText>
                    <Highlight>jokseenkin</Highlight> - somewhat
                  </ExampleText>
                </ExampleBox>
              </UsageItem>

              <UsageItem>
                <KeyPoint>Examples in sentences</KeyPoint>
                <ExampleBox>
                  <ExampleText>
                    Hän on <Highlight>erittäin</Highlight> viehättävä. → She is
                    extremely attractive.
                  </ExampleText>
                  <ExampleText>
                    Tämä on <Highlight>liian</Highlight> vaikeaa. → This is too
                    difficult.
                  </ExampleText>
                  <ExampleText>
                    Olen <Highlight>hieman</Highlight> väsynyt. → I&apos;m a
                    little tired.
                  </ExampleText>
                  <ExampleText>
                    Elokuva oli <Highlight>todella</Highlight> hyvä. → The movie
                    was really good.
                  </ExampleText>
                </ExampleBox>
              </UsageItem>
            </CaseUsageContainer>

            <SummaryBox>
              <ExplanationTitle>Key Rules for Finnish Adverbs</ExplanationTitle>
              <ExplanationContent>
                ✅ Many adverbs are formed by adding -sti to adjectives
              </ExplanationContent>
              <ExplanationContent>
                ✅ Place adverbs often come in pairs: location (täällä) vs.
                direction (tänne)
              </ExplanationContent>
              <ExplanationContent>
                ✅ Time adverbs answer the question &quot;when?&quot; and are
                often irregular
              </ExplanationContent>
              <ExplanationContent>
                ✅ Degree adverbs modify the intensity of adjectives or other
                adverbs
              </ExplanationContent>
              <ExplanationContent>
                ✅ Some common adverbs (hyvin, paljon) have irregular forms
              </ExplanationContent>
            </SummaryBox>

            <FunFactBox>
              <span>🌟 Pro Tip: </span>
              Pay attention to the difference between location (täällä, siellä)
              and direction (tänne, sinne) adverbs. This distinction is
              important in Finnish and often challenging for learners!
            </FunFactBox>
          </>
        )}
      </ExplanationSection>
    </Container>
  );
};

export default Adverb;
