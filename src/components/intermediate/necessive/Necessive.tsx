"use client";
import React from "react";
import {
  Container,
  ExplanationSection,
  ExplanationTitle,
  ExplanationContent,
  ExampleBox,
  ExampleText,
  KeyPoint,
  SummaryBox,
  FormationTable,
  FormationTableRow,
  FormationTableHeader,
  FormationTableCell,
  VerbTypeBadge,
  NegativeFormationSection,
  NegativeExample,
  FunFactBox,
  Highlight,
  VerbTypeContainer,
  TwoColumnLayout,
  Column,
  CaseUsageContainer,
  UsageItem,
  Title,
} from "./Necessive.styles";

const Necessive = () => {
  return (
    <Container>
      <ExplanationSection>
        <Title>Finnish Necessive Case (-mAAn)</Title>

        <ExplanationContent>
          The necessive case (also called the agent participle or the -mAAn
          form) expresses necessity or obligation - something that must or
          should be done. It&apos;s one of the most useful and practical
          constructions in Finnish for giving advice, making recommendations,
          and expressing obligations.
        </ExplanationContent>

        <FunFactBox>
          <span>Did you know? </span>
          The necessive form is sometimes called the &quot;fourth
          infinitive&quot; in traditional Finnish grammar, though it functions
          more like a participle in modern usage!
        </FunFactBox>

        <ExplanationTitle>Basic Formation Rules</ExplanationTitle>

        <TwoColumnLayout>
          <Column>
            <VerbTypeContainer>
              <VerbTypeBadge>Verb Type 1</VerbTypeBadge>
              <KeyPoint>Remove final vowel + add -tava/-tävä</KeyPoint>

              <FormationTable>
                <thead>
                  <FormationTableRow>
                    <FormationTableHeader>Verb</FormationTableHeader>
                    <FormationTableHeader>Necessive Form</FormationTableHeader>
                    <FormationTableHeader>Translation</FormationTableHeader>
                  </FormationTableRow>
                </thead>
                <tbody>
                  <FormationTableRow>
                    <FormationTableCell>lukea (to read)</FormationTableCell>
                    <FormationTableCell>luettava</FormationTableCell>
                    <FormationTableCell>must be read</FormationTableCell>
                  </FormationTableRow>
                  <FormationTableRow>
                    <FormationTableCell>ostaa (to buy)</FormationTableCell>
                    <FormationTableCell>ostettava</FormationTableCell>
                    <FormationTableCell>must be bought</FormationTableCell>
                  </FormationTableRow>
                  <FormationTableRow>
                    <FormationTableCell>antaa (to give)</FormationTableCell>
                    <FormationTableCell>annettava</FormationTableCell>
                    <FormationTableCell>must be given</FormationTableCell>
                  </FormationTableRow>
                </tbody>
              </FormationTable>
            </VerbTypeContainer>

            <VerbTypeContainer>
              <VerbTypeBadge>Verb Type 2</VerbTypeBadge>
              <KeyPoint>Remove -da/-dä + add -tava/-tävä</KeyPoint>

              <FormationTable>
                <thead>
                  <FormationTableRow>
                    <FormationTableHeader>Verb</FormationTableHeader>
                    <FormationTableHeader>Necessive Form</FormationTableHeader>
                    <FormationTableHeader>Translation</FormationTableHeader>
                  </FormationTableRow>
                </thead>
                <tbody>
                  <FormationTableRow>
                    <FormationTableCell>syödä (to eat)</FormationTableCell>
                    <FormationTableCell>syötävä</FormationTableCell>
                    <FormationTableCell>must be eaten</FormationTableCell>
                  </FormationTableRow>
                  <FormationTableRow>
                    <FormationTableCell>juoda (to drink)</FormationTableCell>
                    <FormationTableCell>juotava</FormationTableCell>
                    <FormationTableCell>must be drunk</FormationTableCell>
                  </FormationTableRow>
                  <FormationTableRow>
                    <FormationTableCell>tehdä (to do)</FormationTableCell>
                    <FormationTableCell>tehtävä</FormationTableCell>
                    <FormationTableCell>must be done</FormationTableCell>
                  </FormationTableRow>
                </tbody>
              </FormationTable>
            </VerbTypeContainer>
          </Column>

          <Column>
            <VerbTypeContainer>
              <VerbTypeBadge>Verb Type 3</VerbTypeBadge>
              <KeyPoint>Remove last two letters + add -tava/-tävä</KeyPoint>

              <FormationTable>
                <thead>
                  <FormationTableRow>
                    <FormationTableHeader>Verb</FormationTableHeader>
                    <FormationTableHeader>Necessive Form</FormationTableHeader>
                    <FormationTableHeader>Translation</FormationTableHeader>
                  </FormationTableRow>
                </thead>
                <tbody>
                  <FormationTableRow>
                    <FormationTableCell>
                      opiskella (to study)
                    </FormationTableCell>
                    <FormationTableCell>opiskeltava</FormationTableCell>
                    <FormationTableCell>must be studied</FormationTableCell>
                  </FormationTableRow>
                  <FormationTableRow>
                    <FormationTableCell>mennä (to go)</FormationTableCell>
                    <FormationTableCell>mentävä</FormationTableCell>
                    <FormationTableCell>must be gone</FormationTableCell>
                  </FormationTableRow>
                  <FormationTableRow>
                    <FormationTableCell>tulla (to come)</FormationTableCell>
                    <FormationTableCell>tultava</FormationTableCell>
                    <FormationTableCell>must be come</FormationTableCell>
                  </FormationTableRow>
                </tbody>
              </FormationTable>
            </VerbTypeContainer>

            <VerbTypeContainer>
              <VerbTypeBadge>Verb Type 4</VerbTypeBadge>
              <KeyPoint>Remove -ta/-tä + add -ettava/-ettävä</KeyPoint>

              <FormationTable>
                <thead>
                  <FormationTableRow>
                    <FormationTableHeader>Verb</FormationTableHeader>
                    <FormationTableHeader>Necessive Form</FormationTableHeader>
                    <FormationTableHeader>Translation</FormationTableHeader>
                  </FormationTableRow>
                </thead>
                <tbody>
                  <FormationTableRow>
                    <FormationTableCell>haluta (to want)</FormationTableCell>
                    <FormationTableCell>haluttava</FormationTableCell>
                    <FormationTableCell>must be wanted</FormationTableCell>
                  </FormationTableRow>
                  <FormationTableRow>
                    <FormationTableCell>tavata (to meet)</FormationTableCell>
                    <FormationTableCell>tavattava</FormationTableCell>
                    <FormationTableCell>must be met</FormationTableCell>
                  </FormationTableRow>
                  <FormationTableRow>
                    <FormationTableCell>pelätä (to fear)</FormationTableCell>
                    <FormationTableCell>pelättävä</FormationTableCell>
                    <FormationTableCell>must be feared</FormationTableCell>
                  </FormationTableRow>
                </tbody>
              </FormationTable>
            </VerbTypeContainer>
          </Column>
        </TwoColumnLayout>

        <ExplanationTitle>When to Use the Necessive Case</ExplanationTitle>

        <CaseUsageContainer>
          <UsageItem>
            <KeyPoint>1. Expressing obligation or necessity</KeyPoint>
            <ExampleBox>
              <ExampleText>
                Tämä kirja on luettava → This book must be read
              </ExampleText>
              <ExampleText>
                Läksyt on tehtävä → The homework must be done
              </ExampleText>
              <ExampleText>
                Ruoka on syötävä → The food must be eaten
              </ExampleText>
            </ExampleBox>
          </UsageItem>

          <UsageItem>
            <KeyPoint>2. Giving strong recommendations or advice</KeyPoint>
            <ExampleBox>
              <ExampleText>
                Tämä elokuva on katottava → This movie must be seen
              </ExampleText>
              <ExampleText>
                Suomi on käytävä → Finland must be visited
              </ExampleText>
              <ExampleText>
                Tämä ravintola on kokeiltava → This restaurant must be tried
              </ExampleText>
            </ExampleBox>
          </UsageItem>

          <UsageItem>
            <KeyPoint>3. Describing requirements or prerequisites</KeyPoint>
            <ExampleBox>
              <ExampleText>
                Hakemus on täytettävä → The application must be filled
              </ExampleText>
              <ExampleText>
                Lääkkeet on otettava → The medicine must be taken
              </ExampleText>
              <ExampleText>
                Auton on käynnistyttävä → The car must be started
              </ExampleText>
            </ExampleBox>
          </UsageItem>

          <UsageItem>
            <KeyPoint>
              4. Creating nouns meaning &quot;something to be...&quot;
            </KeyPoint>
            <ExampleBox>
              <ExampleText>tehtävä → task (something to be done)</ExampleText>
              <ExampleText>
                luettava → reading material (something to be read)
              </ExampleText>
              <ExampleText>syötävä → food (something to be eaten)</ExampleText>
              <ExampleText>
                juotava → beverage (something to be drunk)
              </ExampleText>
            </ExampleBox>
          </UsageItem>
        </CaseUsageContainer>

        <ExplanationTitle>Necessive with Personal Pronouns</ExplanationTitle>

        <ExplanationContent>
          The necessive form is often used with the verb &quot;olla&quot; (to
          be) and personal pronouns to indicate who must do something:
        </ExplanationContent>

        <FormationTable>
          <thead>
            <FormationTableRow>
              <FormationTableHeader>Structure</FormationTableHeader>
              <FormationTableHeader>Example</FormationTableHeader>
              <FormationTableHeader>Translation</FormationTableHeader>
            </FormationTableRow>
          </thead>
          <tbody>
            <FormationTableRow>
              <FormationTableCell>Minun on + necessive</FormationTableCell>
              <FormationTableCell>Minun on luettava</FormationTableCell>
              <FormationTableCell>I must read</FormationTableCell>
            </FormationTableRow>
            <FormationTableRow>
              <FormationTableCell>Sinun on + necessive</FormationTableCell>
              <FormationTableCell>Sinun on opiskeltava</FormationTableCell>
              <FormationTableCell>You must study</FormationTableCell>
            </FormationTableRow>
            <FormationTableRow>
              <FormationTableCell>Hänen on + necessive</FormationTableCell>
              <FormationTableCell>Hänen on mentävä</FormationTableCell>
              <FormationTableCell>He must go</FormationTableCell>
            </FormationTableRow>
            <FormationTableRow>
              <FormationTableCell>Meidän on + necessive</FormationTableCell>
              <FormationTableCell>Meidän on tehtävä</FormationTableCell>
              <FormationTableCell>We must do</FormationTableCell>
            </FormationTableRow>
            <FormationTableRow>
              <FormationTableCell>Teidän on + necessive</FormationTableCell>
              <FormationTableCell>Teidän on odotettava</FormationTableCell>
              <FormationTableCell>You must wait</FormationTableCell>
            </FormationTableRow>
            <FormationTableRow>
              <FormationTableCell>Heidän on + necessive</FormationTableCell>
              <FormationTableCell>Heidän on puhuttava</FormationTableCell>
              <FormationTableCell>They must speak</FormationTableCell>
            </FormationTableRow>
          </tbody>
        </FormationTable>

        <ExplanationTitle>Negative Necessive Forms</ExplanationTitle>

        <NegativeFormationSection>
          <KeyPoint>
            Rule: Use <Highlight>ei tarvitse</Highlight> + first infinitive for
            &quot;don&apos;t need to&quot;
          </KeyPoint>

          <FormationTable>
            <thead>
              <FormationTableRow>
                <FormationTableHeader>Affirmative</FormationTableHeader>
                <FormationTableHeader>Negative</FormationTableHeader>
                <FormationTableHeader>Translation</FormationTableHeader>
              </FormationTableRow>
            </thead>
            <tbody>
              <FormationTableRow>
                <FormationTableCell>Minun on luettava</FormationTableCell>
                <FormationTableCell>Minun ei tarvitse lukea</FormationTableCell>
                <FormationTableCell>
                  I don&apos;t need to read
                </FormationTableCell>
              </FormationTableRow>
              <FormationTableRow>
                <FormationTableCell>Sinun on tehtävä</FormationTableCell>
                <FormationTableCell>Sinun ei tarvitse tehdä</FormationTableCell>
                <FormationTableCell>
                  You don&apos;t need to do
                </FormationTableCell>
              </FormationTableRow>
              <FormationTableRow>
                <FormationTableCell>Hänen on mentävä</FormationTableCell>
                <FormationTableCell>Hänen ei tarvitse mennä</FormationTableCell>
                <FormationTableCell>
                  He don&apos;t need to go
                </FormationTableCell>
              </FormationTableRow>
            </tbody>
          </FormationTable>

          <KeyPoint>
            Rule: Use <Highlight>ei saa</Highlight> + first infinitive for
            &quot;must not&quot;
          </KeyPoint>

          <NegativeExample>
            <ExampleText>
              Sinun ei saa tupakoida täällä → You must not smoke here
            </ExampleText>
            <ExampleText>
              Meidän ei saa myöhästyä → We must not be late
            </ExampleText>
            <ExampleText>
              Heidän ei saa unohtaa → They must not forget
            </ExampleText>
          </NegativeExample>
        </NegativeFormationSection>

        <ExplanationTitle>Practice Examples</ExplanationTitle>

        <ExampleBox>
          <ExampleText>
            1. Minun on opiskeltava suomea → I must study Finnish
          </ExampleText>
          <ExampleText>
            2. Tämä lääke on otettava aterian kanssa → This medicine must be
            taken with a meal
          </ExampleText>
          <ExampleText>
            3. Sinun on soitettava äidillesi → You must call your mother
          </ExampleText>
          <ExampleText>
            4. Tämä nähtävyys on nähtävä → This sight must be seen
          </ExampleText>
          <ExampleText>
            5. Meidän on matkustettava huomenna → We must travel tomorrow
          </ExampleText>
          <ExampleText>
            6. Lapset on nukutettava ennen kymmentä → The children must be put
            to bed before ten
          </ExampleText>
          <ExampleText>
            7. Teidän on täytettävä lomake → You must fill out the form
          </ExampleText>
          <ExampleText>
            8. Hänen on harjoiteltava enemmän → He must practice more
          </ExampleText>
        </ExampleBox>

        <ExplanationTitle>Common Fixed Expressions</ExplanationTitle>

        <FormationTable>
          <thead>
            <FormationTableRow>
              <FormationTableHeader>Expression</FormationTableHeader>
              <FormationTableHeader>Translation</FormationTableHeader>
              <FormationTableHeader>Usage</FormationTableHeader>
            </FormationTableRow>
          </thead>
          <tbody>
            <FormationTableRow>
              <FormationTableCell>On pakko</FormationTableCell>
              <FormationTableCell>Must/have to</FormationTableCell>
              <FormationTableCell>
                Minun on pakko mennä → I absolutely must go
              </FormationTableCell>
            </FormationTableRow>
            <FormationTableRow>
              <FormationTableCell>On mentävä</FormationTableCell>
              <FormationTableCell>Must go</FormationTableCell>
              <FormationTableCell>
                Nyt on mentävä → Now we must go
              </FormationTableCell>
            </FormationTableRow>
            <FormationTableRow>
              <FormationTableCell>On tehtävä</FormationTableCell>
              <FormationTableCell>Must do</FormationTableCell>
              <FormationTableCell>
                Se on tehtävä → It must be done
              </FormationTableCell>
            </FormationTableRow>
            <FormationTableRow>
              <FormationTableCell>On otettava</FormationTableCell>
              <FormationTableCell>Must take</FormationTableCell>
              <FormationTableCell>
                Riski on otettava → The risk must be taken
              </FormationTableCell>
            </FormationTableRow>
          </tbody>
        </FormationTable>

        <SummaryBox>
          <ExplanationTitle>Key Takeaways</ExplanationTitle>
          <ExplanationContent>
            ✅ Use the necessive form to express obligation or necessity
          </ExplanationContent>
          <ExplanationContent>
            ✅ Form it by adding -tava/-tävä to the verb stem (with variations
            by verb type)
          </ExplanationContent>
          <ExplanationContent>
            ✅ Use with &quot;minun on&quot;, &quot;sinun on&quot;, etc. to
            specify who must do something
          </ExplanationContent>
          <ExplanationContent>
            ✅ Use &quot;ei tarvitse&quot; for &quot;don&apos;t need to&quot;
            and &quot;ei saa&quot; for &quot;must not&quot;
          </ExplanationContent>
          <ExplanationContent>
            ✅ Many common nouns are derived from necessive forms (tehtävä,
            luettava, etc.)
          </ExplanationContent>
          <ExplanationContent>
            ✅ This form is extremely common in instructions, rules, and advice
          </ExplanationContent>
        </SummaryBox>

        <FunFactBox>
          <span>🌟 Pro Tip: </span>
          When you hear Finns say something &quot;on pakko&quot; (is must) or
          &quot;on pakko tehdä&quot; (must do), they&apos;re using a colloquial
          variant of the necessive construction that emphasizes strong
          obligation!
        </FunFactBox>
      </ExplanationSection>
    </Container>
  );
};

export default Necessive;
