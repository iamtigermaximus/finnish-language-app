'use client';
import React from 'react';
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
  Column
} from './Passive.styles';

const Passive = () => {
  return (
    <Container>
      <ExplanationSection>
        <ExplanationTitle>Finnish Passive Voice</ExplanationTitle>
        
        <ExplanationContent>
          The passive voice in Finnish is used when the subject is not specified or when we want to emphasize the action rather than who performed it. Don&apos;t worry if it seems challenging at first - with practice, you&apos;ll find it&apos;s quite logical and consistent!
        </ExplanationContent>

        <FunFactBox>
          <span> Did you know? </span>
          The Finnish passive is often called &quot;impersonal&quot; because it doesn&apos;t specify who is performing the action. This makes it perfect for general statements and instructions!
        </FunFactBox>


        <ExplanationTitle>Formation Rules by Verb Type</ExplanationTitle>
        
        <TwoColumnLayout>
          <Column>
            {/* Verb Type 1 */}
            <VerbTypeContainer>
              <VerbTypeBadge>Verb Type 1</VerbTypeBadge>
              <KeyPoint>Rule: Remove final vowel + add -taan/-tään</KeyPoint>
              <FormationTable>
                <thead>
                  <FormationTableRow>
                    <FormationTableHeader>Base Verb</FormationTableHeader>
                    <FormationTableHeader>Passive</FormationTableHeader>
                  </FormationTableRow>
                </thead>
                <tbody>
                  <FormationTableRow>
                    <FormationTableCell>puhua (to speak)</FormationTableCell>
                    <FormationTableCell>puhutaan</FormationTableCell>
                  </FormationTableRow>
                  <FormationTableRow>
                    <FormationTableCell>lukea (to read)</FormationTableCell>
                    <FormationTableCell>luetaan</FormationTableCell>
                  </FormationTableRow>
                  <FormationTableRow>
                    <FormationTableCell>odottaa (to wait)</FormationTableCell>
                    <FormationTableCell>odotetaan</FormationTableCell>
                  </FormationTableRow>
                </tbody>
              </FormationTable>
            </VerbTypeContainer>

            {/* Verb Type 2 */}
            <VerbTypeContainer>
              <VerbTypeBadge>Verb Type 2</VerbTypeBadge>
              <KeyPoint>Rule: Remove -da/-dä + add -aan/-ään</KeyPoint>
              <FormationTable>
                <thead>
                  <FormationTableRow>
                    <FormationTableHeader>Base Verb</FormationTableHeader>
                    <FormationTableHeader>Passive</FormationTableHeader>
                  </FormationTableRow>
                </thead>
                <tbody>
                  <FormationTableRow>
                    <FormationTableCell>syödä (to eat)</FormationTableCell>
                    <FormationTableCell>syödään</FormationTableCell>
                  </FormationTableRow>
                  <FormationTableRow>
                    <FormationTableCell>juoda (to drink)</FormationTableCell>
                    <FormationTableCell>juodaan</FormationTableCell>
                  </FormationTableRow>
                  <FormationTableRow>
                    <FormationTableCell>tehdä (to do)</FormationTableCell>
                    <FormationTableCell>tehdään</FormationTableCell>
                  </FormationTableRow>
                </tbody>
              </FormationTable>
            </VerbTypeContainer>

            {/* Verb Type 3 */}
            <VerbTypeContainer>
              <VerbTypeBadge>Verb Type 3</VerbTypeBadge>
              <KeyPoint>Rule: Remove last two letters + add -laan/-lään or -taan/-tään</KeyPoint>
              <FormationTable>
                <thead>
                  <FormationTableRow>
                    <FormationTableHeader>Base Verb</FormationTableHeader>
                    <FormationTableHeader>Passive</FormationTableHeader>
                  </FormationTableRow>
                </thead>
                <tbody>
                  <FormationTableRow>
                    <FormationTableCell>tulla (to come)</FormationTableCell>
                    <FormationTableCell>tullaan</FormationTableCell>
                  </FormationTableRow>
                  <FormationTableRow>
                    <FormationTableCell>mennä (to go)</FormationTableCell>
                    <FormationTableCell>mennään</FormationTableCell>
                  </FormationTableRow>
                  <FormationTableRow>
                    <FormationTableCell>opiskella (to study)</FormationTableCell>
                    <FormationTableCell>opiskellaan</FormationTableCell>
                  </FormationTableRow>
                </tbody>
              </FormationTable>
            </VerbTypeContainer>
          </Column>

          <Column>
            {/* Verb Type 4 */}
            <VerbTypeContainer>
              <VerbTypeBadge>Verb Type 4</VerbTypeBadge>
              <KeyPoint>Rule: Remove -ta/-tä + add -etaan/-etään</KeyPoint>
              <FormationTable>
                <thead>
                  <FormationTableRow>
                    <FormationTableHeader>Base Verb</FormationTableHeader>
                    <FormationTableHeader>Passive</FormationTableHeader>
                  </FormationTableRow>
                </thead>
                <tbody>
                  <FormationTableRow>
                    <FormationTableCell>tavata (to meet)</FormationTableCell>
                    <FormationTableCell>tavataan</FormationTableCell>
                  </FormationTableRow>
                  <FormationTableRow>
                    <FormationTableCell>haluta (to want)</FormationTableCell>
                    <FormationTableCell>halutaan</FormationTableCell>
                  </FormationTableRow>
                  <FormationTableRow>
                    <FormationTableCell>pelätä (to fear)</FormationTableCell>
                    <FormationTableCell>pelätään</FormationTableCell>
                  </FormationTableRow>
                </tbody>
              </FormationTable>
            </VerbTypeContainer>

            {/* Verb Type 5 */}
            <VerbTypeContainer>
              <VerbTypeBadge>Verb Type 5</VerbTypeBadge>
              <KeyPoint>Rule: Remove -ta/-tä + add -itaan/-itään</KeyPoint>
              <FormationTable>
                <thead>
                  <FormationTableRow>
                    <FormationTableHeader>Base Verb</FormationTableHeader>
                    <FormationTableHeader>Passive</FormationTableHeader>
                  </FormationTableRow>
                </thead>
                <tbody>
                  <FormationTableRow>
                    <FormationTableCell>tarvita (to need)</FormationTableCell>
                    <FormationTableCell>tarvitaan</FormationTableCell>
                  </FormationTableRow>
                  <FormationTableRow>
                    <FormationTableCell>valita (to choose)</FormationTableCell>
                    <FormationTableCell>valitaan</FormationTableCell>
                  </FormationTableRow>
                  <FormationTableRow>
                    <FormationTableCell>mainita (to mention)</FormationTableCell>
                    <FormationTableCell>mainitaan</FormationTableCell>
                  </FormationTableRow>
                </tbody>
              </FormationTable>
            </VerbTypeContainer>

            {/* Verb Type 6 */}
            <VerbTypeContainer>
              <VerbTypeBadge>Verb Type 6</VerbTypeBadge>
              <KeyPoint>Rule: Remove -ta/-tä + add -etaan/-etään</KeyPoint>
              <FormationTable>
                <thead>
                  <FormationTableRow>
                    <FormationTableHeader>Base Verb</FormationTableHeader>
                    <FormationTableHeader>Passive</FormationTableHeader>
                  </FormationTableRow>
                </thead>
                <tbody>
                  <FormationTableRow>
                    <FormationTableCell>paeta (to flee)</FormationTableCell>
                    <FormationTableCell>paetaan</FormationTableCell>
                  </FormationTableRow>
                  <FormationTableRow>
                    <FormationTableCell>vanheta (to age)</FormationTableCell>
                    <FormationTableCell>vanhetaan</FormationTableCell>
                  </FormationTableRow>
                  <FormationTableRow>
                    <FormationTableCell>lämmetä (to warm)</FormationTableCell>
                    <FormationTableCell>lämmetään</FormationTableCell>
                  </FormationTableRow>
                </tbody>
              </FormationTable>
            </VerbTypeContainer>
          </Column>
        </TwoColumnLayout>

     


        <ExplanationTitle>Negative Forms</ExplanationTitle>
        
        <NegativeFormationSection>
          <KeyPoint>Rule: Use <Highlight>ei</Highlight> + passive stem + <Highlight>-ta/-tä</Highlight> (without the -an/-än ending)</KeyPoint>
          
          <ExplanationContent>
            Forming negatives might seem tricky at first, but it follows a clear pattern. You simply take the passive stem and add the negative ending.
          </ExplanationContent>
          
          <FormationTable>
            <thead>
              <FormationTableRow>
                <FormationTableHeader>Affirmative</FormationTableHeader>
                <FormationTableHeader>Negative</FormationTableHeader>
                <FormationTableHeader>Meaning</FormationTableHeader>
              </FormationTableRow>
            </thead>
            <tbody>
              <FormationTableRow>
                <FormationTableCell>Puhutaan</FormationTableCell>
                <FormationTableCell>Ei puhuta</FormationTableCell>
                <FormationTableCell>It is not spoken</FormationTableCell>
              </FormationTableRow>
              <FormationTableRow>
                <FormationTableCell>Luetaan</FormationTableCell>
                <FormationTableCell>Ei lueta</FormationTableCell>
                <FormationTableCell>It is not read</FormationTableCell>
              </FormationTableRow>
              <FormationTableRow>
                <FormationTableCell>Syödään</FormationTableCell>
                <FormationTableCell>Ei syödä</FormationTableCell>
                <FormationTableCell>It is not eaten</FormationTableCell>
              </FormationTableRow>
              <FormationTableRow>
                <FormationTableCell>Tehdään</FormationTableCell>
                <FormationTableCell>Ei tehdä</FormationTableCell>
                <FormationTableCell>It is not done</FormationTableCell>
              </FormationTableRow>
            </tbody>
          </FormationTable>
          
          <NegativeExample>
            <ExampleText>Täällä ei puhuta englantia → English is not spoken here</ExampleText>
            <ExampleText>Koulussa ei syödä makeisia → Candy is not eaten at school</ExampleText>
            <ExampleText>Talvella ei uida → People don&apos;t swim in winter</ExampleText>
          </NegativeExample>
          
          <ExampleBox>
            <ExampleText>Remember: The negative form uses the same stem as the affirmative, just without the -an/-än ending!</ExampleText>
          </ExampleBox>
        </NegativeFormationSection>


        <ExplanationTitle>When to Use the Passive Voice</ExplanationTitle>
        
        <KeyPoint>1. When the subject is unknown or unimportant</KeyPoint>
        <ExampleBox>
          <ExampleText>Ovi avattiin → The door was opened (by someone unknown)</ExampleText>
          <ExampleText>Suomessa puhutaan suomea → Finnish is spoken in Finland</ExampleText>
        </ExampleBox>
        
        <KeyPoint>2. For general rules and instructions</KeyPoint>
        <ExampleBox>
          <ExampleText>Täällä ei polteta → No smoking here</ExampleText>
          <ExampleText>Asemalla odotetaan → Wait at the station</ExampleText>
        </ExampleBox>
        
        <KeyPoint>3. For polite suggestions</KeyPoint>
        <ExampleBox>
          <ExampleText>Nyt mentäisiin kotiin → Maybe we should go home now</ExampleText>
          <ExampleText>Syötäisiin jäätelöä! → How about we eat some ice cream?</ExampleText>
        </ExampleBox>
        
        <KeyPoint>4. In formal or written language</KeyPoint>
        <ExampleBox>
          <ExampleText>Kokous pidettiin torstaina → The meeting was held on Thursday</ExampleText>
          <ExampleText>Päätös tehtiään huomisessa kokouksessa → The decision will be made in tomorrow&apos;s meeting</ExampleText>
        </ExampleBox>


        <ExplanationTitle>Practice Examples in Context</ExplanationTitle>
        
        <ExampleBox>
          <ExampleText>1. Suomessa juodaan paljon kahvia → In Finland, a lot of coffee is drunk</ExampleText>
          <ExampleText>2. Kirjastossa puhutaan hiljaa → In the library, people speak quietly</ExampleText>
          <ExampleText>3. Bussissa ei polteta → Smoking is not allowed on the bus</ExampleText>
          <ExampleText>4. Koulussa opetetaan monia aineita → Many subjects are taught at school</ExampleText>
          <ExampleText>5. Juhlissa soitettiin hyvää musiikkia → Good music was played at the party</ExampleText>
        </ExampleBox>

        <SummaryBox>
          <ExplanationTitle>Key Takeaways</ExplanationTitle>
          <ExplanationContent>
            ✅ Each verb type follows specific but consistent rules for passive formation
          </ExplanationContent>
          <ExplanationContent>
            ✅ Negative forms use &quot;ei&quot; + the passive stem + -ta/-tä
          </ExplanationContent>
          <ExplanationContent>
            ✅ The passive is used when the subject is unknown, unimportant, or for general statements
          </ExplanationContent>
          <ExplanationContent>
            ✅ With regular practice, forming passive sentences will become second nature
          </ExplanationContent>
          <ExplanationContent>
            ✅ Remember that making mistakes is part of learning - every attempt brings you closer to mastery!
          </ExplanationContent>
        </SummaryBox>

        <FunFactBox>
          <span>🌟 Pro Tip: </span>
          When in doubt, listen to how native speakers use passive forms in everyday situations like announcements, instructions, and general conversations. This will help you develop a natural feel for when and how to use them!
        </FunFactBox>
      </ExplanationSection>
    </Container>
  );
};

export default Passive;