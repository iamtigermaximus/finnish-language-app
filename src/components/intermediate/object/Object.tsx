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
  WarningBox,
  PriorityIndicator,
  Title,
} from "./Object.styles";

const Object = () => {
  const [activeTab, setActiveTab] = useState("intro");

  return (
    <Container>
      <ExplanationSection>
        <Title>Finnish Object Cases </Title>

        <ExplanationContent>
          Understanding objects in Finnish is challenging but incredibly
          important. Let&apos;s break it down step by step.
        </ExplanationContent>

        <TabsContainer>
          <TabButton
            active={activeTab === "intro"}
            onClick={() => setActiveTab("intro")}
          >
            Introduction
          </TabButton>
          <TabButton
            active={activeTab === "partitive"}
            onClick={() => setActiveTab("partitive")}
          >
            Partitive
          </TabButton>
          <TabButton
            active={activeTab === "nominative"}
            onClick={() => setActiveTab("nominative")}
          >
            Nominative
          </TabButton>
          <TabButton
            active={activeTab === "accusative"}
            onClick={() => setActiveTab("accusative")}
          >
            Accusative
          </TabButton>
          <TabButton
            active={activeTab === "priority"}
            onClick={() => setActiveTab("priority")}
          >
            Priority Rules
          </TabButton>
        </TabsContainer>

        {activeTab === "intro" && (
          <>
            <ExplanationTitle>Subject vs. Object</ExplanationTitle>

            <ExplanationContent>
              In any sentence, you need to distinguish between the{" "}
              <Highlight>subject</Highlight> (who does something) and the{" "}
              <Highlight>object</Highlight> (what has something done to it).
            </ExplanationContent>

            <ExampleBox>
              <ExampleText>
                <Highlight>Mies lukee kirjaa.</Highlight> → The man reads a
                book.
              </ExampleText>
              <ExampleText>
                • <Highlight>Mies</Highlight> = subject (does the reading)
              </ExampleText>
              <ExampleText>
                • <Highlight>kirjaa</Highlight> = object (is being read)
              </ExampleText>
            </ExampleBox>

            <WarningBox>
              <span>⚠️ Important: </span>
              Not all sentences have an object! For example: &quot;Ajan kouluun
              autolla&quot; (I drive to school by car) has no object -
              &quot;autolla&quot; tells you how you get to school, not what
              you&apos;re driving.
            </WarningBox>

            <ExampleBox>
              <ExampleText>Compare:</ExampleText>
              <ExampleText>
                • <Highlight>Ajan autoa</Highlight> kouluun. → I drive a car to
                school. (has object: autoa)
              </ExampleText>
              <ExampleText>
                • Ajan kouluun <Highlight>autolla</Highlight>. → I go to school
                by car. (no object)
              </ExampleText>
            </ExampleBox>

            <ExplanationContent>
              If someone asks &quot;What do you drive?&quot;, you answer with
              the object: &quot;auton&quot; or &quot;autoa&quot;. You can&apos;t
              answer with &quot;autolla&quot; (by car).
            </ExplanationContent>

            <ExplanationTitle>Identifying Objects in Finnish</ExplanationTitle>

            <ExplanationContent>
              The object is actually easy to spot in Finnish because it is
              always in one of three grammatical cases. If a noun is in any of
              the other 12 cases, it&apos;s not the object.
            </ExplanationContent>

            <TwoColumnLayout>
              <Column>
                <CaseContainer>
                  <CaseBadge>Partitive</CaseBadge>
                  <ExplanationContent>
                    Used for partial, incomplete, or unspecified actions
                  </ExplanationContent>
                </CaseContainer>

                <CaseContainer>
                  <CaseBadge>Nominative</CaseBadge>
                  <ExplanationContent>
                    Basic form used in commands and passive constructions
                  </ExplanationContent>
                </CaseContainer>
              </Column>

              <Column>
                <CaseContainer>
                  <CaseBadge>Accusative</CaseBadge>
                  <ExplanationContent>
                    Used for completed actions (looks like genitive but
                    isn&apos;t!)
                  </ExplanationContent>
                </CaseContainer>
              </Column>
            </TwoColumnLayout>
          </>
        )}

        {activeTab === "partitive" && (
          <>
            <ExplanationTitle>Partitive Object</ExplanationTitle>

            <ExplanationContent>
              Use the partitive case for the object when:
            </ExplanationContent>

            <CaseUsageContainer>
              <UsageItem>
                <KeyPoint>1. With partitive verbs</KeyPoint>
                <ExampleBox>
                  <ExampleText>
                    odottaa → Odotan bussia → I wait for the bus
                  </ExampleText>
                  <ExampleText>
                    rakastaa → Rakastan sinua → I love you
                  </ExampleText>
                  <ExampleText>
                    vihata → Vihaan hernekeittoa → I hate pea soup
                  </ExampleText>
                </ExampleBox>
              </UsageItem>

              <UsageItem>
                <KeyPoint>2. In negative sentences</KeyPoint>
                <ExampleBox>
                  <ExampleText>
                    En lue kirjaa → I don&apos;t read the book
                  </ExampleText>
                  <ExampleText>
                    Et syö omenaa → You don&apos;t eat the apple
                  </ExampleText>
                  <ExampleText>
                    Eivät katso televisiota → They don&apos;t watch TV
                  </ExampleText>
                </ExampleBox>
              </UsageItem>

              <UsageItem>
                <KeyPoint>3. After numbers</KeyPoint>
                <ExampleBox>
                  <ExampleText>kaksi taloa → two houses</ExampleText>
                  <ExampleText>viisi omenaa → five apples</ExampleText>
                  <ExampleText>kolme lasta → three children</ExampleText>
                </ExampleBox>
              </UsageItem>

              <UsageItem>
                <KeyPoint>4. With ongoing, incomplete actions</KeyPoint>
                <ExampleBox>
                  <ExampleText>
                    Luen kirjaa → I&apos;m reading a book (in progress)
                  </ExampleText>
                  <ExampleText>
                    Syön omenaa → I&apos;m eating an apple (part of it)
                  </ExampleText>
                </ExampleBox>
              </UsageItem>

              <UsageItem>
                <KeyPoint>5. With mass nouns (uncountable)</KeyPoint>
                <ExampleBox>
                  <ExampleText>Juon vettä → I drink water</ExampleText>
                  <ExampleText>Syön riisiä → I eat rice</ExampleText>
                  <ExampleText>Ostan maitoa → I buy milk</ExampleText>
                </ExampleBox>
              </UsageItem>

              <UsageItem>
                <KeyPoint>6. When talking about parts of something</KeyPoint>
                <ExampleBox>
                  <ExampleText>
                    Otan vähän kakkua → I take a little cake
                  </ExampleText>
                  <ExampleText>
                    Annan osaa rahasta → I give part of the money
                  </ExampleText>
                </ExampleBox>
              </UsageItem>
            </CaseUsageContainer>
          </>
        )}

        {activeTab === "nominative" && (
          <>
            <ExplanationTitle>Nominative Object</ExplanationTitle>

            <ExplanationContent>
              Use the basic form (nominative) for the object when:
            </ExplanationContent>

            <CaseUsageContainer>
              <UsageItem>
                <KeyPoint>1. With passive verbs</KeyPoint>
                <ExampleBox>
                  <ExampleText>
                    ostetaan → Ostetaan talo → Let&apos;s buy a house
                  </ExampleText>
                  <ExampleText>
                    syödään → Syödään omena → Let&apos;s eat an apple
                  </ExampleText>
                  <ExampleText>
                    luetaan → Luetaan kirja → Let&apos;s read a book
                  </ExampleText>
                </ExampleBox>
              </UsageItem>

              <UsageItem>
                <KeyPoint>2. In necessive clauses</KeyPoint>
                <ExampleBox>
                  <ExampleText>
                    Minun täytyy tehdä läksyt → I must do homework
                  </ExampleText>
                  <ExampleText>
                    Sinun pitää lukea kirja → You must read the book
                  </ExampleText>
                  <ExampleText>
                    On pakko syödä ruoka → Have to eat the food
                  </ExampleText>
                </ExampleBox>
              </UsageItem>

              <UsageItem>
                <KeyPoint>3. In commands (imperative)</KeyPoint>
                <ExampleBox>
                  <ExampleText>Ota kirja! → Take the book!</ExampleText>
                  <ExampleText>Syö omena! → Eat the apple!</ExampleText>
                  <ExampleText>Lue lehti! → Read the newspaper!</ExampleText>
                </ExampleBox>
              </UsageItem>
            </CaseUsageContainer>

            <WarningBox>
              <span>⚠️ Remember: </span>
              Partitive takes priority over nominative! If a command is
              negative, use partitive: &quot;Älä ota kirjaa!&quot; not &quot;Älä
              ota kirja!&quot;
            </WarningBox>
          </>
        )}

        {activeTab === "accusative" && (
          <>
            <ExplanationTitle>Accusative Object</ExplanationTitle>

            <ExplanationContent>
              The accusative case looks like the genitive case (-n ending) but
              has a different function. Use it when:
            </ExplanationContent>

            <CaseUsageContainer>
              <UsageItem>
                <KeyPoint>1. For completed actions</KeyPoint>
                <ExampleBox>
                  <ExampleText>
                    Luin kirjan → I read the book (to the end)
                  </ExampleText>
                  <ExampleText>
                    Söin omenan → I ate the apple (all of it)
                  </ExampleText>
                  <ExampleText>
                    Katsoin elokuvan → I watched the movie (all of it)
                  </ExampleText>
                </ExampleBox>
              </UsageItem>

              <UsageItem>
                <KeyPoint>2. For planned complete actions</KeyPoint>
                <ExampleBox>
                  <ExampleText>
                    Aion lukea kirjan → I plan to read the book (completely)
                  </ExampleText>
                  <ExampleText>
                    Haluan syödä omenan → I want to eat the apple (all of it)
                  </ExampleText>
                  <ExampleText>
                    Me aiomme katsoa elokuvan → We plan to watch the movie
                  </ExampleText>
                </ExampleBox>
              </UsageItem>
            </CaseUsageContainer>

            <WarningBox>
              <span>⚠️ Important: </span>
              Don&apos;t confuse accusative with genitive! &quot;Mies luki
              kirjan&quot; means &quot;The man read the book&quot; (accusative),
              not &quot;The man read the book&apos;s...&quot; (genitive).
            </WarningBox>

            <ExampleBox>
              <ExampleText>Compare:</ExampleText>
              <ExampleText>
                • <Highlight>Luen kirjaa</Highlight> → I&apos;m reading a book
                (partitive, ongoing)
              </ExampleText>
              <ExampleText>
                • <Highlight>Luin kirjan</Highlight> → I read the book
                (accusative, completed)
              </ExampleText>
            </ExampleBox>
          </>
        )}

        {activeTab === "priority" && (
          <>
            <ExplanationTitle>Object Case Priority</ExplanationTitle>

            <PriorityIndicator>
              <div className="priority-chain">
                <div className="priority-item">
                  <span className="number">1</span>
                  <span className="case">Partitive</span>
                  <span className="arrow">→</span>
                </div>
                <div className="priority-item">
                  <span className="number">2</span>
                  <span className="case">Nominative</span>
                  <span className="arrow">→</span>
                </div>
                <div className="priority-item">
                  <span className="number">3</span>
                  <span className="case">Accusative</span>
                </div>
              </div>
              <div className="explanation">
                Partitive is more important than Nominative, which is more
                important than Accusative
              </div>
            </PriorityIndicator>

            <ExampleBox>
              <ExampleText>
                For example: &quot;Don&apos;t read that book!&quot;
              </ExampleText>
              <ExampleText>
                • It&apos;s a command → should be nominative: &quot;Älä lue tuo
                kirja!&quot;
              </ExampleText>
              <ExampleText>
                • But it&apos;s negative → partitive takes priority: &quot;Älä
                lue tuota kirjaa!&quot;
              </ExampleText>
            </ExampleBox>

            <SummaryBox>
              <ExplanationTitle>Key Rules to Remember</ExplanationTitle>
              <ExplanationContent>
                ✅ Object is always in nominative, partitive, or accusative case
              </ExplanationContent>
              <ExplanationContent>
                ✅ Partitive is used for negatives, incomplete actions, mass
                nouns, and with numbers
              </ExplanationContent>
              <ExplanationContent>
                ✅ Nominative is used for commands, passive, and necessive
                constructions
              </ExplanationContent>
              <ExplanationContent>
                ✅ Accusative is used for completed actions and plans to
                complete actions
              </ExplanationContent>
              <ExplanationContent>
                ✅ Partitive takes priority over nominative, which takes
                priority over accusative
              </ExplanationContent>
              <ExplanationContent>
                ✅ Not all sentences have objects - only when something is
                having something done to it
              </ExplanationContent>
            </SummaryBox>

            <FunFactBox>
              <span>🌟 Pro Tip: </span>
              When in doubt, use partitive! Finns will understand you better if
              you overuse partitive than if you misuse accusative or nominative.
            </FunFactBox>
          </>
        )}
      </ExplanationSection>
    </Container>
  );
};

export default Object;
