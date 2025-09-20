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
  Column,
  CaseUsageContainer,
  UsageItem,
  ImperativeLevel
} from './Imperative.styles';

const Imperative = () => {
  return (
    <Container>
      <ExplanationSection>
        <ExplanationTitle>Finnish Imperative Mood</ExplanationTitle>
        
        <ExplanationContent>
          The imperative mood is used to give commands, make requests, or offer encouragement. Finnish has a rich system of imperative forms that vary based on who you&apos;re addressing (singular, plural, or polite) and how direct you want to be. Don&apos;t worry - the patterns are consistent and you&apos;ll master them with practice!
        </ExplanationContent>

        <FunFactBox>
          <span>Did you know? </span>
          Finnish has different imperative forms for singular, plural, and even a special &quot;passive imperative&quot; for general commands like on signs and instructions!
        </FunFactBox>


        <ExplanationTitle>Basic Imperative Formation</ExplanationTitle>
        
        <TwoColumnLayout>
          <Column>
            <VerbTypeContainer>
              <VerbTypeBadge>Verb Type 1</VerbTypeBadge>
              <KeyPoint>Singular: Remove final vowel</KeyPoint>
              <KeyPoint>Plural: Remove final vowel + -kaa/-kää</KeyPoint>
              
              <FormationTable>
                <thead>
                  <FormationTableRow>
                    <FormationTableHeader>Verb</FormationTableHeader>
                    <FormationTableHeader>Singular</FormationTableHeader>
                    <FormationTableHeader>Plural</FormationTableHeader>
                    <FormationTableHeader>Translation</FormationTableHeader>
                  </FormationTableRow>
                </thead>
                <tbody>
                  <FormationTableRow>
                    <FormationTableCell>puhua (to speak)</FormationTableCell>
                    <FormationTableCell>puhu!</FormationTableCell>
                    <FormationTableCell>puhukaa!</FormationTableCell>
                    <FormationTableCell>speak!</FormationTableCell>
                  </FormationTableRow>
                  <FormationTableRow>
                    <FormationTableCell>lukea (to read)</FormationTableCell>
                    <FormationTableCell>lue!</FormationTableCell>
                    <FormationTableCell>lukekaa!</FormationTableCell>
                    <FormationTableCell>read!</FormationTableCell>
                  </FormationTableRow>
                  <FormationTableRow>
                    <FormationTableCell>odottaa (to wait)</FormationTableCell>
                    <FormationTableCell>odota!</FormationTableCell>
                    <FormationTableCell>odottakaa!</FormationTableCell>
                    <FormationTableCell>wait!</FormationTableCell>
                  </FormationTableRow>
                </tbody>
              </FormationTable>
            </VerbTypeContainer>

            <VerbTypeContainer>
              <VerbTypeBadge>Verb Type 2</VerbTypeBadge>
              <KeyPoint>Singular: Remove -da/-dä</KeyPoint>
              <KeyPoint>Plural: Remove -da/-dä + -kaa/-kää</KeyPoint>
              
              <FormationTable>
                <thead>
                  <FormationTableRow>
                    <FormationTableHeader>Verb</FormationTableHeader>
                    <FormationTableHeader>Singular</FormationTableHeader>
                    <FormationTableHeader>Plural</FormationTableHeader>
                    <FormationTableHeader>Translation</FormationTableHeader>
                  </FormationTableRow>
                </thead>
                <tbody>
                  <FormationTableRow>
                    <FormationTableCell>syödä (to eat)</FormationTableCell>
                    <FormationTableCell>syö!</FormationTableCell>
                    <FormationTableCell>syökää!</FormationTableCell>
                    <FormationTableCell>eat!</FormationTableCell>
                  </FormationTableRow>
                  <FormationTableRow>
                    <FormationTableCell>juoda (to drink)</FormationTableCell>
                    <FormationTableCell>juo!</FormationTableCell>
                    <FormationTableCell>juokaa!</FormationTableCell>
                    <FormationTableCell>drink!</FormationTableCell>
                  </FormationTableRow>
                  <FormationTableRow>
                    <FormationTableCell>tehdä (to do)</FormationTableCell>
                    <FormationTableCell>tee!</FormationTableCell>
                    <FormationTableCell>tehkää!</FormationTableCell>
                    <FormationTableCell>do!</FormationTableCell>
                  </FormationTableRow>
                </tbody>
              </FormationTable>
            </VerbTypeContainer>
          </Column>

          <Column>
            <VerbTypeContainer>
              <VerbTypeBadge>Verb Type 3</VerbTypeBadge>
              <KeyPoint>Singular: Remove last two letters</KeyPoint>
              <KeyPoint>Plural: Remove last two letters + -kaa/-kää</KeyPoint>
              
              <FormationTable>
                <thead>
                  <FormationTableRow>
                    <FormationTableHeader>Verb</FormationTableHeader>
                    <FormationTableHeader>Singular</FormationTableHeader>
                    <FormationTableHeader>Plural</FormationTableHeader>
                    <FormationTableHeader>Translation</FormationTableHeader>
                  </FormationTableRow>
                </thead>
                <tbody>
                  <FormationTableRow>
                    <FormationTableCell>opiskella (to study)</FormationTableCell>
                    <FormationTableCell>opiskele!</FormationTableCell>
                    <FormationTableCell>opiskelkaa!</FormationTableCell>
                    <FormationTableCell>study!</FormationTableCell>
                  </FormationTableRow>
                  <FormationTableRow>
                    <FormationTableCell>mennä (to go)</FormationTableCell>
                    <FormationTableCell>mene!</FormationTableCell>
                    <FormationTableCell>menkää!</FormationTableCell>
                    <FormationTableCell>go!</FormationTableCell>
                  </FormationTableRow>
                  <FormationTableRow>
                    <FormationTableCell>tulla (to come)</FormationTableCell>
                    <FormationTableCell>tule!</FormationTableCell>
                    <FormationTableCell>tulkaa!</FormationTableCell>
                    <FormationTableCell>come!</FormationTableCell>
                  </FormationTableRow>
                </tbody>
              </FormationTable>
            </VerbTypeContainer>

            <VerbTypeContainer>
              <VerbTypeBadge>Verb Type 4</VerbTypeBadge>
              <KeyPoint>Singular: Remove -ta/-tä</KeyPoint>
              <KeyPoint>Plural: Remove -ta/-tä + -kaa/-kää</KeyPoint>
              
              <FormationTable>
                <thead>
                  <FormationTableRow>
                    <FormationTableHeader>Verb</FormationTableHeader>
                    <FormationTableHeader>Singular</FormationTableHeader>
                    <FormationTableHeader>Plural</FormationTableHeader>
                    <FormationTableHeader>Translation</FormationTableHeader>
                  </FormationTableRow>
                </thead>
                <tbody>
                  <FormationTableRow>
                    <FormationTableCell>haluta (to want)</FormationTableCell>
                    <FormationTableCell>halua!</FormationTableCell>
                    <FormationTableCell>halutkaa!</FormationTableCell>
                    <FormationTableCell>want!</FormationTableCell>
                  </FormationTableRow>
                  <FormationTableRow>
                    <FormationTableCell>tavata (to meet)</FormationTableCell>
                    <FormationTableCell>tapaa!</FormationTableCell>
                    <FormationTableCell>tavatkaa!</FormationTableCell>
                    <FormationTableCell>meet!</FormationTableCell>
                  </FormationTableRow>
                  <FormationTableRow>
                    <FormationTableCell>pelätä (to fear)</FormationTableCell>
                    <FormationTableCell>pelkää!</FormationTableCell>
                    <FormationTableCell>pelätkää!</FormationTableCell>
                    <FormationTableCell>fear!</FormationTableCell>
                  </FormationTableRow>
                </tbody>
              </FormationTable>
            </VerbTypeContainer>
          </Column>
        </TwoColumnLayout>


        <ExplanationTitle>When to Use the Imperative Mood</ExplanationTitle>
        
        <CaseUsageContainer>
          <UsageItem>
            <KeyPoint>1. Direct commands and instructions</KeyPoint>
            <ExampleBox>
              <ExampleText>Tule tänne! → Come here!</ExampleText>
              <ExampleText>Ota se! → Take it!</ExampleText>
              <ExampleText>Anna minulle se! → Give it to me!</ExampleText>
            </ExampleBox>
          </UsageItem>

          <UsageItem>
            <KeyPoint>2. Requests and suggestions</KeyPoint>
            <ExampleBox>
              <ExampleText>Ole hyvä ja auta minua → Please help me</ExampleText>
              <ExampleText>Kävisitkö kaupassa? → Would you go to the store?</ExampleText>
              <ExampleText>Kokeile tätä! → Try this!</ExampleText>
            </ExampleBox>
          </UsageItem>

          <UsageItem>
            <KeyPoint>3. Warnings and prohibitions</KeyPoint>
            <ExampleBox>
              <ExampleText>Varo! → Watch out!</ExampleText>
              <ExampleText>Älä koske! → Don&apos;t touch!</ExampleText>
              <ExampleText>Älä mene sinne! → Don&apos;t go there!</ExampleText>
            </ExampleBox>
          </UsageItem>

          <UsageItem>
            <KeyPoint>4. Encouragement and motivation</KeyPoint>
            <ExampleBox>
              <ExampleText>Jatka samaan malliin! → Keep going the same way!</ExampleText>
              <ExampleText>Yritä uudelleen! → Try again!</ExampleText>
              <ExampleText>Pysy vahvana! → Stay strong!</ExampleText>
            </ExampleBox>
          </UsageItem>

          <UsageItem>
            <KeyPoint>5. Instructions and manuals</KeyPoint>
            <ExampleBox>
              <ExampleText>Lue ohjeet huolellisesti → Read the instructions carefully</ExampleText>
              <ExampleText>Pese ennen käyttöä → Wash before use</ExampleText>
              <ExampleText>Varaa 30 minuuttia → Allow 30 minutes</ExampleText>
            </ExampleBox>
          </UsageItem>
        </CaseUsageContainer>


        <ExplanationTitle>Negative Imperative (Prohibitions)</ExplanationTitle>
        
        <NegativeFormationSection>
          <KeyPoint>Rule: Use <Highlight>älä</Highlight> (sg) / <Highlight>älkää</Highlight> (pl) + the negative imperative form</KeyPoint>
          
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
                <FormationTableCell>Tule!</FormationTableCell>
                <FormationTableCell>Älä tule!</FormationTableCell>
                <FormationTableCell>Don&apos;t come!</FormationTableCell>
              </FormationTableRow>
              <FormationTableRow>
                <FormationTableCell>Syökää!</FormationTableCell>
                <FormationTableCell>Älkää syökö!</FormationTableCell>
                <FormationTableCell>Don&apos;t eat! (pl)</FormationTableCell>
              </FormationTableRow>
              <FormationTableRow>
                <FormationTableCell>Tehkää!</FormationTableCell>
                <FormationTableCell>Älkää tehkö!</FormationTableCell>
                <FormationTableCell>Don&apos;t do! (pl)</FormationTableCell>
              </FormationTableRow>
              <FormationTableRow>
                <FormationTableCell>Mennään!</FormationTableCell>
                <FormationTableCell>Älkää menkö!</FormationTableCell>
                <FormationTableCell>Don&apos;t go! (pl)</FormationTableCell>
              </FormationTableRow>
            </tbody>
          </FormationTable>
          
          <NegativeExample>
            <ExampleText>Älä huoli! → Don&apos;t worry!</ExampleText>
            <ExampleText>Älkää unohtako! → Don&apos;t forget! (pl)</ExampleText>
            <ExampleText>Älä koske kuumaan! → Don&apos;t touch hot things!</ExampleText>
            <ExampleText>Älkää puhuko hiljaa! → Don&apos;t speak quietly! (pl)</ExampleText>
          </NegativeExample>
        </NegativeFormationSection>


        <ExplanationTitle>Polite and Formal Imperatives</ExplanationTitle>
        
        <ExplanationContent>
          In formal situations or when showing respect, Finns use different constructions that are less direct:
        </ExplanationContent>
        
        <FormationTable>
          <thead>
            <FormationTableRow>
              <FormationTableHeader>Situation</FormationTableHeader>
              <FormationTableHeader>Form</FormationTableHeader>
              <FormationTableHeader>Example</FormationTableHeader>
              <FormationTableHeader>Translation</FormationTableHeader>
            </FormationTableRow>
          </thead>
          <tbody>
            <FormationTableRow>
              <FormationTableCell>Formal request</FormationTableCell>
              <FormationTableCell>Voisitko + infinitive</FormationTableCell>
              <FormationTableCell>Voisitko auttaa?</FormationTableCell>
              <FormationTableCell>Could you help?</FormationTableCell>
            </FormationTableRow>
            <FormationTableRow>
              <FormationTableCell>Polite suggestion</FormationTableCell>
              <FormationTableCell>Olisiko mahdollista + infinitive</FormationTableCell>
              <FormationTableCell>Olisiko mahdollista tulla myöhemmin?</FormationTableCell>
              <FormationTableCell>Would it be possible to come later?</FormationTableCell>
            </FormationTableRow>
            <FormationTableRow>
              <FormationTableCell>Very formal</FormationTableCell>
              <FormationTableCell>Olisitteko ystävällinen + MA-infinitive</FormationTableCell>
              <FormationTableCell>Olisitteko ystävällinen antamaan...</FormationTableCell>
              <FormationTableCell>Would you be so kind as to give...</FormationTableCell>
            </FormationTableRow>
            <FormationTableRow>
              <FormationTableCell>Gentle command</FormationTableCell>
              <FormationTableCell>Ole hyvä + imperative</FormationTableCell>
              <FormationTableCell>Ole hyvä ja ota</FormationTableCell>
              <FormationTableCell>Please take</FormationTableCell>
            </FormationTableRow>
          </tbody>
        </FormationTable>


        <ExplanationTitle>1st Person Plural Imperative (&quot;Let&apos;s...&quot;)</ExplanationTitle>
        
        <ExplanationContent>
          Finnish has a special form for suggesting joint action, equivalent to &quot;let&apos;s&quot; in English:
        </ExplanationContent>
        
        <FormationTable>
          <thead>
            <FormationTableRow>
              <FormationTableHeader>Verb</FormationTableHeader>
              <FormationTableHeader>Form</FormationTableHeader>
              <FormationTableHeader>Example</FormationTableHeader>
              <FormationTableHeader>Translation</FormationTableHeader>
            </FormationTableRow>
          </thead>
          <tbody>
            <FormationTableRow>
              <FormationTableCell>mennä (to go)</FormationTableCell>
              <FormationTableCell>mennään</FormationTableCell>
              <FormationTableCell>Mennään elokuviin!</FormationTableCell>
              <FormationTableCell>Let&apos;s go to the movies!</FormationTableCell>
            </FormationTableRow>
            <FormationTableRow>
              <FormationTableCell>syödä (to eat)</FormationTableCell>
              <FormationTableCell>syödään</FormationTableCell>
              <FormationTableCell>Syödään!</FormationTableCell>
              <FormationTableCell>Let&apos;s eat!</FormationTableCell>
            </FormationTableRow>
            <FormationTableRow>
              <FormationTableCell>tehdä (to do)</FormationTableCell>
              <FormationTableCell>tehdään</FormationTableCell>
              <FormationTableCell>Tehdään yhdessä!</FormationTableCell>
              <FormationTableCell>Let&apos;s do it together!</FormationTableCell>
            </FormationTableRow>
            <FormationTableRow>
              <FormationTableCell>nähdä (to see)</FormationTableCell>
              <FormationTableCell>nähdään</FormationTableCell>
              <FormationTableCell>Nähdään huomenna!</FormationTableCell>
              <FormationTableCell>See you tomorrow! (Let&apos;s see each other)</FormationTableCell>
            </FormationTableRow>
          </tbody>
        </FormationTable>


        <ExplanationTitle>Practice Examples</ExplanationTitle>
        
        <ExampleBox>
          <ExampleText>1. Tule sisään! → Come in!</ExampleText>
          <ExampleText>2. Odota hetki! → Wait a moment!</ExampleText>
          <ExampleText>3. Auta minua! → Help me!</ExampleText>
          <ExampleText>4. Älä kävele nurmikolla! → Don&apos;t walk on the grass!</ExampleText>
          <ExampleText>5. Puhukaa hiljempaa! → Speak more quietly! (pl)</ExampleText>
          <ExampleText>6. Olkaa hyvä ja istukaa → Please have a seat (pl)</ExampleText>
          <ExampleText>7. Lue ääneen! → Read aloud!</ExampleText>
          <ExampleText>8. Älkää unohtako läksyjänne! → Don&apos;t forget your homework! (pl)</ExampleText>
        </ExampleBox>

       

        <ExplanationTitle>Formality Levels in Imperatives</ExplanationTitle>
        
        <ImperativeLevel>
          <KeyPoint>Direct (with friends/family):</KeyPoint>
          <ExampleText>Tule tänne! → Come here!</ExampleText>
        </ImperativeLevel>
        
        <ImperativeLevel>
          <KeyPoint>Polite (with acquaintances):</KeyPoint>
          <ExampleText>Voisitko tulla tänne? → Could you come here?</ExampleText>
        </ImperativeLevel>
        
        <ImperativeLevel>
          <KeyPoint>Formal (in professional settings):</KeyPoint>
          <ExampleText>Olisitteko ystävällinen ja tulisitte tänne? → Would you be so kind and come here?</ExampleText>
        </ImperativeLevel>
        
        <ImperativeLevel>
          <KeyPoint>General instructions (signs/manuals):</KeyPoint>
          <ExampleText>Pese kädet → Wash hands</ExampleText>
        </ImperativeLevel>


        <SummaryBox>
          <ExplanationTitle>Key Takeaways</ExplanationTitle>
          <ExplanationContent>
            ✅ Use the basic imperative for direct commands with people you know well
          </ExplanationContent>
          <ExplanationContent>
            ✅ Add -kaa/-kää for plural commands
          </ExplanationContent>
          <ExplanationContent>
            ✅ Use &quot;älä&quot; (sg) or &quot;älkää&quot; (pl) for negative commands
          </ExplanationContent>
          <ExplanationContent>
            ✅ Use the -mAAn form for &quot;let&apos;s&quot; suggestions
          </ExplanationContent>
          <ExplanationContent>
            ✅ In formal situations, use polite constructions with &quot;voisitko&quot; or &quot;olisiko mahdollista&quot;
          </ExplanationContent>
          <ExplanationContent>
            ✅ Pay attention to context - the right imperative form depends on your relationship with the listener
          </ExplanationContent>
        </SummaryBox>

        <FunFactBox>
          <span>🌟 Pro Tip: </span>
          The word &quot;nähdään&quot; (literally &quot;let&apos;s see each other&quot;) is one of the most common ways to say goodbye in Finnish. It shows how the imperative form is integrated into everyday expressions!
        </FunFactBox>
      </ExplanationSection>
    </Container>
  );
};

export default Imperative;