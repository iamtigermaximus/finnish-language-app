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
  VerbTypeContainer,
  TwoColumnLayout,
  Column,
  CaseUsageContainer,
  UsageItem
} from './Partitive.styles';

const Partitive = () => {
  return (
    <Container>
      <ExplanationSection>
        <ExplanationTitle>Finnish Partitive Case </ExplanationTitle>
        
        <ExplanationContent>
          The partitive case is one of the most important and frequently used cases in Finnish. It indicates partiality, incompleteness, or unspecified quantity. While it might seem challenging at first, you&apos;ll find it follows consistent patterns that become intuitive with practice.
        </ExplanationContent>

        <FunFactBox>
          <span>Did you know? </span>
          The partitive case is used so frequently in Finnish that it accounts for about 15-20% of all noun case usage in typical conversation!
        </FunFactBox>


        <ExplanationTitle>Basic Formation Rules</ExplanationTitle>
        
        <TwoColumnLayout>
          <Column>
            <VerbTypeContainer>
              <VerbTypeBadge>General Rule</VerbTypeBadge>
              <KeyPoint>Add -a/-ä, -ta/-tä to the stem</KeyPoint>
              
              <FormationTable>
                <thead>
                  <FormationTableRow>
                    <FormationTableHeader>Nominative</FormationTableHeader>
                    <FormationTableHeader>Stem</FormationTableHeader>
                    <FormationTableHeader>Partitive</FormationTableHeader>
                  </FormationTableRow>
                </thead>
                <tbody>
                  <FormationTableRow>
                    <FormationTableCell>talo (house)</FormationTableCell>
                    <FormationTableCell>talo-</FormationTableCell>
                    <FormationTableCell>taloa</FormationTableCell>
                  </FormationTableRow>
                  <FormationTableRow>
                    <FormationTableCell>kirja (book)</FormationTableCell>
                    <FormationTableCell>kirja-</FormationTableCell>
                    <FormationTableCell>kirjaa</FormationTableCell>
                  </FormationTableRow>
                  <FormationTableRow>
                    <FormationTableCell>ovi (door)</FormationTableCell>
                    <FormationTableCell>ove-</FormationTableCell>
                    <FormationTableCell>ovea</FormationTableCell>
                  </FormationTableRow>
                </tbody>
              </FormationTable>
            </VerbTypeContainer>

            <VerbTypeContainer>
              <VerbTypeBadge>Words ending in -e</VerbTypeBadge>
              <KeyPoint>Add -tta/-ttä</KeyPoint>
              
              <FormationTable>
                <thead>
                  <FormationTableRow>
                    <FormationTableHeader>Nominative</FormationTableHeader>
                    <FormationTableHeader>Partitive</FormationTableHeader>
                  </FormationTableRow>
                </thead>
                <tbody>
                  <FormationTableRow>
                    <FormationTableCell>perhe (family)</FormationTableCell>
                    <FormationTableCell>perhettä</FormationTableCell>
                  </FormationTableRow>
                  <FormationTableRow>
                    <FormationTableCell>parveke (balcony)</FormationTableCell>
                    <FormationTableCell>parveketta</FormationTableCell>
                  </FormationTableRow>
                  <FormationTableRow>
                    <FormationTableCell>koke (exam)</FormationTableCell>
                    <FormationTableCell>koketta</FormationTableCell>
                  </FormationTableRow>
                </tbody>
              </FormationTable>
            </VerbTypeContainer>
          </Column>

          <Column>
            <VerbTypeContainer>
              <VerbTypeBadge>Words ending in -i</VerbTypeBadge>
              <KeyPoint>Often adds -ta/-tä or -a/-ä with stem change</KeyPoint>
              
              <FormationTable>
                <thead>
                  <FormationTableRow>
                    <FormationTableHeader>Nominative</FormationTableHeader>
                    <FormationTableHeader>Partitive</FormationTableHeader>
                  </FormationTableRow>
                </thead>
                <tbody>
                  <FormationTableRow>
                    <FormationTableCell>kivi (stone)</FormationTableCell>
                    <FormationTableCell>kiveä</FormationTableCell>
                  </FormationTableRow>
                  <FormationTableRow>
                    <FormationTableCell>vesi (water)</FormationTableCell>
                    <FormationTableCell>vettä</FormationTableCell>
                  </FormationTableRow>
                  <FormationTableRow>
                    <FormationTableCell>lumi (snow)</FormationTableCell>
                    <FormationTableCell>lunta</FormationTableCell>
                  </FormationTableRow>
                </tbody>
              </FormationTable>
            </VerbTypeContainer>

            <VerbTypeContainer>
              <VerbTypeBadge>Long words & loanwords</VerbTypeBadge>
              <KeyPoint>Add -ta/-tä</KeyPoint>
              
              <FormationTable>
                <thead>
                  <FormationTableRow>
                    <FormationTableHeader>Nominative</FormationTableHeader>
                    <FormationTableHeader>Partitive</FormationTableHeader>
                  </FormationTableRow>
                </thead>
                <tbody>
                  <FormationTableRow>
                    <FormationTableCell>opiskelija (student)</FormationTableCell>
                    <FormationTableCell>opiskelijaa</FormationTableCell>
                  </FormationTableRow>
                  <FormationTableRow>
                    <FormationTableCell>televisio (TV)</FormationTableCell>
                    <FormationTableCell>televisiota</FormationTableCell>
                  </FormationTableRow>
                  <FormationTableRow>
                    <FormationTableCell>auto (car)</FormationTableCell>
                    <FormationTableCell>autoa</FormationTableCell>
                  </FormationTableRow>
                </tbody>
              </FormationTable>
            </VerbTypeContainer>
          </Column>
        </TwoColumnLayout>


        <ExplanationTitle>When to Use the Partitive Case</ExplanationTitle>
        
        <CaseUsageContainer>
          <UsageItem>
            <KeyPoint>1. Partial or unspecified quantity</KeyPoint>
            <ExampleBox>
              <ExampleText>Ostin maitoa → I bought (some) milk</ExampleText>
              <ExampleText>Haluatko kahvia? → Would you like (some) coffee?</ExampleText>
              <ExampleText>Luen kirjaa → I&apos;m reading a book (part of it)</ExampleText>
            </ExampleBox>
          </UsageItem>

          <UsageItem>
            <KeyPoint>2. With numbers greater than one</KeyPoint>
            <ExampleBox>
              <ExampleText>Kaksi taloa → Two houses</ExampleText>
              <ExampleText>Viisi opiskelijaa → Five students</ExampleText>
              <ExampleText>Kolme kirjaa → Three books</ExampleText>
            </ExampleBox>
          </UsageItem>

          <UsageItem>
            <KeyPoint>3. Negative sentences</KeyPoint>
            <ExampleBox>
              <ExampleText>Minulla ei ole rahaa → I don&apos;t have money</ExampleText>
              <ExampleText>En syö lihaa → I don&apos;t eat meat</ExampleText>
              <ExampleText>Hän ei puhu suomea → He doesn&apos;t speak Finnish</ExampleText>
            </ExampleBox>
          </UsageItem>

          <UsageItem>
            <KeyPoint>4. After certain prepositions</KeyPoint>
            <ExampleBox>
              <ExampleText>ilman rahaa → without money</ExampleText>
              <ExampleText>ennen joulua → before Christmas</ExampleText>
              <ExampleText>kohti taloa → toward the house</ExampleText>
            </ExampleBox>
          </UsageItem>

          <UsageItem>
            <KeyPoint>5. With certain verbs (especially emotions)</KeyPoint>
            <ExampleBox>
              <ExampleText>Rakastan sinua → I love you</ExampleText>
              <ExampleText>Pelkään pimeää → I&apos;m afraid of the dark</ExampleText>
              <ExampleText>Kaipaan kotia → I miss home</ExampleText>
            </ExampleBox>
          </UsageItem>

          <UsageItem>
            <KeyPoint>6. Ongoing or incomplete actions</KeyPoint>
            <ExampleBox>
              <ExampleText>Luen kirjaa → I&apos;m reading a book (in progress)</ExampleText>
              <ExampleText>Katson televisiota → I&apos;m watching TV</ExampleText>
              <ExampleText>Syön omenaa → I&apos;m eating an apple</ExampleText>
            </ExampleBox>
          </UsageItem>
        </CaseUsageContainer>


        <ExplanationTitle>Partitive with Numbers and Quantifiers</ExplanationTitle>
        
        <FormationTable>
          <thead>
            <FormationTableRow>
              <FormationTableHeader>Number/Quantifier</FormationTableHeader>
              <FormationTableHeader>Example</FormationTableHeader>
              <FormationTableHeader>Translation</FormationTableHeader>
            </FormationTableRow>
          </thead>
          <tbody>
            <FormationTableRow>
              <FormationTableCell>Monta (many)</FormationTableCell>
              <FormationTableCell>monta taloa</FormationTableCell>
              <FormationTableCell>many houses</FormationTableCell>
            </FormationTableRow>
            <FormationTableRow>
              <FormationTableCell>Paljon (much/many)</FormationTableCell>
              <FormationTableCell>paljon vettä</FormationTableCell>
              <FormationTableCell>much water</FormationTableCell>
            </FormationTableRow>
            <FormationTableRow>
              <FormationTableCell>Vähän (a little/few)</FormationTableCell>
              <FormationTableCell>vähän rahaa</FormationTableCell>
              <FormationTableCell>a little money</FormationTableCell>
            </FormationTableRow>
            <FormationTableRow>
              <FormationTableCell>Pari (a couple)</FormationTableCell>
              <FormationTableCell>pari kirjaa</FormationTableCell>
              <FormationTableCell>a couple of books</FormationTableCell>
            </FormationTableRow>
            <FormationTableRow>
              <FormationTableCell>Numbers - 1</FormationTableCell>
              <FormationTableCell>kolme lasta</FormationTableCell>
              <FormationTableCell>three children</FormationTableCell>
            </FormationTableRow>
          </tbody>
        </FormationTable>

        <ExampleBox>
          <ExampleText>Note: With the number &quot;yksi&quot; (one), use the nominative: yksi talo (one house)</ExampleText>
        </ExampleBox>


        <ExplanationTitle>Partitive in Negative Sentences</ExplanationTitle>
        
        <NegativeFormationSection>
          <KeyPoint>Rule: Objects in negative sentences typically take the partitive case</KeyPoint>
          
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
                <FormationTableCell>Luen kirjan</FormationTableCell>
                <FormationTableCell>En lue kirjaa</FormationTableCell>
                <FormationTableCell>I&apos;m not reading the book</FormationTableCell>
              </FormationTableRow>
              <FormationTableRow>
                <FormationTableCell>Syön omenan</FormationTableCell>
                <FormationTableCell>En syö omenaa</FormationTableCell>
                <FormationTableCell>I&apos;m not eating the apple</FormationTableCell>
              </FormationTableRow>
              <FormationTableRow>
                <FormationTableCell>Hän ostaa talon</FormationTableCell>
                <FormationTableCell>Hän ei osta taloa</FormationTableCell>
                <FormationTableCell>He isn&apos;t buying the house</FormationTableCell>
              </FormationTableRow>
            </tbody>
          </FormationTable>
          
          <NegativeExample>
            <ExampleText>Minulla on rahaa → I have money</ExampleText>
            <ExampleText>Minulla ei ole rahaa → I don&apos;t have money</ExampleText>
            <ExampleText>Hän puhuu suomea → He speaks Finnish</ExampleText>
            <ExampleText>Hän ei puhu suomea → He doesn&apos;t speak Finnish</ExampleText>
          </NegativeExample>
        </NegativeFormationSection>


        <ExplanationTitle>Practice Examples</ExplanationTitle>
        
        <ExampleBox>
          <ExampleText>1. Ostin kahvia ja leipää → I bought coffee and bread</ExampleText>
          <ExampleText>2. Luen hyvää kirjaa → I&apos;m reading a good book</ExampleText>
          <ExampleText>3. Hänellä on kahta lasta → He has two children</ExampleText>
          <ExampleText>4. Rakastan suomalaista musiikkia → I love Finnish music</ExampleText>
          <ExampleText>5. En juo maitoa → I don&apos;t drink milk</ExampleText>
          <ExampleText>6. Puhutko englantia? → Do you speak English?</ExampleText>
          <ExampleText>7. Tarviramme lisää aikaa → We need more time</ExampleText>
          <ExampleText>8. Kaksi ihmistä odottaa bussia → Two people are waiting for the bus</ExampleText>
        </ExampleBox>

        <SummaryBox>
          <ExplanationTitle>Key Takeaways</ExplanationTitle>
          <ExplanationContent>
            ✅ Use partitive for partial/unspecified quantities (some water, two books)
          </ExplanationContent>
          <ExplanationContent>
            ✅ Use partitive in negative sentences (I don&apos;t have money)
          </ExplanationContent>
          <ExplanationContent>
            ✅ Use partitive for ongoing actions (I&apos;m reading a book)
          </ExplanationContent>
          <ExplanationContent>
            ✅ Use partitive with numbers greater than one (three houses)
          </ExplanationContent>
          <ExplanationContent>
            ✅ Use partitive after certain prepositions and with certain verbs
          </ExplanationContent>
          <ExplanationContent>
            ✅ Remember that practice makes perfect - you&apos;ll internalize these rules with time!
          </ExplanationContent>
        </SummaryBox>

        <FunFactBox>
          <span>🌟 Pro Tip: </span>
          When in doubt, ask yourself: &quot;Am I referring to a specific, complete thing or an unspecified/partial amount?&quot; This will often guide you to the correct case choice.
        </FunFactBox>
      </ExplanationSection>
    </Container>
  );
};

export default Partitive;