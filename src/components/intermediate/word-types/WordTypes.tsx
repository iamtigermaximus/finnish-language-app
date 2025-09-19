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
  WordTypeBadge,
  // SectionDivider,
  // NegativeFormationSection,
  // NegativeExample,
  FunFactBox,
  // EncouragementText,
  Highlight,
  WordTypeContainer,
  TwoColumnLayout,
  Column,
  CaseUsageContainer,
  UsageItem,
  ColorCodedExample
} from './WordTypes.styles';

const WordTypes = () => {
  return (
    <Container>
      <ExplanationSection>
        <ExplanationTitle>Finnish Word Types</ExplanationTitle>
        
        <ExplanationContent>
          Finnish words can be categorized into types based on their structure, endings, and how they behave in sentences. Understanding these patterns will help you predict how words change in different cases and make learning Finnish grammar much easier!
        </ExplanationContent>

        <FunFactBox>
          <span>Did you know? </span>
          Finnish has a remarkable regularity in its word formation. Once you learn the patterns for a word type, you can apply them to most words in that category!
        </FunFactBox>


        <ExplanationTitle>Noun Types (Substantive Types)</ExplanationTitle>
        
        <TwoColumnLayout>
          <Column>
            <WordTypeContainer>
              <WordTypeBadge>Type 1: Vowel-Stem Nouns</WordTypeBadge>
              <KeyPoint>End in -a/-ä, -o/-ö, -u/-y in nominative</KeyPoint>
              
              <FormationTable>
                <thead>
                  <FormationTableRow>
                    <FormationTableHeader>Nominative</FormationTableHeader>
                    <FormationTableHeader>Genitive</FormationTableHeader>
                    <FormationTableHeader>Partitive</FormationTableHeader>
                    <FormationTableHeader>Meaning</FormationTableHeader>
                  </FormationTableRow>
                </thead>
                <tbody>
                  <FormationTableRow>
                    <FormationTableCell>talo</FormationTableCell>
                    <FormationTableCell>talo<Highlight>n</Highlight></FormationTableCell>
                    <FormationTableCell>talo<Highlight>a</Highlight></FormationTableCell>
                    <FormationTableCell>house</FormationTableCell>
                  </FormationTableRow>
                  <FormationTableRow>
                    <FormationTableCell>kirja</FormationTableCell>
                    <FormationTableCell>kirja<Highlight>n</Highlight></FormationTableCell>
                    <FormationTableCell>kirja<Highlight>a</Highlight></FormationTableCell>
                    <FormationTableCell>book</FormationTableCell>
                  </FormationTableRow>
                  <FormationTableRow>
                    <FormationTableCell>lattia</FormationTableCell>
                    <FormationTableCell>lattia<Highlight>n</Highlight></FormationTableCell>
                    <FormationTableCell>lattia<Highlight>a</Highlight></FormationTableCell>
                    <FormationTableCell>floor</FormationTableCell>
                  </FormationTableRow>
                </tbody>
              </FormationTable>
            </WordTypeContainer>

            <WordTypeContainer>
              <WordTypeBadge>Type 2: Consonant-Stem Nouns</WordTypeBadge>
              <KeyPoint>End in -i, -nen, -as/-äs, -is/-ös, -us/-ys</KeyPoint>
              
              <FormationTable>
                <thead>
                  <FormationTableRow>
                    <FormationTableHeader>Nominative</FormationTableHeader>
                    <FormationTableHeader>Genitive</FormationTableHeader>
                    <FormationTableHeader>Partitive</FormationTableHeader>
                    <FormationTableHeader>Meaning</FormationTableHeader>
                  </FormationTableRow>
                </thead>
                <tbody>
                  <FormationTableRow>
                    <FormationTableCell>käsi</FormationTableCell>
                    <FormationTableCell>käde<Highlight>n</Highlight></FormationTableCell>
                    <FormationTableCell>kätt<Highlight>ä</Highlight></FormationTableCell>
                    <FormationTableCell>hand</FormationTableCell>
                  </FormationTableRow>
                  <FormationTableRow>
                    <FormationTableCell>nainen</FormationTableCell>
                    <FormationTableCell>naise<Highlight>n</Highlight></FormationTableCell>
                    <FormationTableCell>naist<Highlight>a</Highlight></FormationTableCell>
                    <FormationTableCell>woman</FormationTableCell>
                  </FormationTableRow>
                  <FormationTableRow>
                    <FormationTableCell>vieras</FormationTableCell>
                    <FormationTableCell>viera<Highlight>n</Highlight></FormationTableCell>
                    <FormationTableCell>vierast<Highlight>a</Highlight></FormationTableCell>
                    <FormationTableCell>guest</FormationTableCell>
                  </FormationTableRow>
                </tbody>
              </FormationTable>
            </WordTypeContainer>
          </Column>

          <Column>
            <WordTypeContainer>
              <WordTypeBadge>Type 3: Shortened Stem Nouns</WordTypeBadge>
              <KeyPoint>Stem changes in inflection, often end in -si, -ni, -ri</KeyPoint>
              
              <FormationTable>
                <thead>
                  <FormationTableRow>
                    <FormationTableHeader>Nominative</FormationTableHeader>
                    <FormationTableHeader>Genitive</FormationTableHeader>
                    <FormationTableHeader>Partitive</FormationTableHeader>
                    <FormationTableHeader>Meaning</FormationTableHeader>
                  </FormationTableRow>
                </thead>
                <tbody>
                  <FormationTableRow>
                    <FormationTableCell>vesi</FormationTableCell>
                    <FormationTableCell>vede<Highlight>n</Highlight></FormationTableCell>
                    <FormationTableCell>vett<Highlight>ä</Highlight></FormationTableCell>
                    <FormationTableCell>water</FormationTableCell>
                  </FormationTableRow>
                  <FormationTableRow>
                    <FormationTableCell>kusi</FormationTableCell>
                    <FormationTableCell>kude<Highlight>n</Highlight></FormationTableCell>
                    <FormationTableCell>kutt<Highlight>a</Highlight></FormationTableCell>
                    <FormationTableCell>urine</FormationTableCell>
                  </FormationTableRow>
                  <FormationTableRow>
                    <FormationTableCell>tuli</FormationTableCell>
                    <FormationTableCell>tule<Highlight>n</Highlight></FormationTableCell>
                    <FormationTableCell>tult<Highlight>a</Highlight></FormationTableCell>
                    <FormationTableCell>fire</FormationTableCell>
                  </FormationTableRow>
                </tbody>
              </FormationTable>
            </WordTypeContainer>

            <WordTypeContainer>
              <WordTypeBadge>Type 4: Loanwords</WordTypeBadge>
              <KeyPoint>Borrowed words, often follow Type 1 patterns</KeyPoint>
              
              <FormationTable>
                <thead>
                  <FormationTableRow>
                    <FormationTableHeader>Nominative</FormationTableHeader>
                    <FormationTableHeader>Genitive</FormationTableHeader>
                    <FormationTableHeader>Partitive</FormationTableHeader>
                    <FormationTableHeader>Meaning</FormationTableHeader>
                  </FormationTableRow>
                </thead>
                <tbody>
                  <FormationTableRow>
                    <FormationTableCell>auto</FormationTableCell>
                    <FormationTableCell>auto<Highlight>n</Highlight></FormationTableCell>
                    <FormationTableCell>auto<Highlight>a</Highlight></FormationTableCell>
                    <FormationTableCell>car</FormationTableCell>
                  </FormationTableRow>
                  <FormationTableRow>
                    <FormationTableCell>banaani</FormationTableCell>
                    <FormationTableCell>banaani<Highlight>n</Highlight></FormationTableCell>
                    <FormationTableCell>banaani<Highlight>a</Highlight></FormationTableCell>
                    <FormationTableCell>banana</FormationTableCell>
                  </FormationTableRow>
                  <FormationTableRow>
                    <FormationTableCell>televisio</FormationTableCell>
                    <FormationTableCell>televisio<Highlight>n</Highlight></FormationTableCell>
                    <FormationTableCell>televisio<Highlight>a</Highlight></FormationTableCell>
                    <FormationTableCell>television</FormationTableCell>
                  </FormationTableRow>
                </tbody>
              </FormationTable>
            </WordTypeContainer>
          </Column>
        </TwoColumnLayout>


        <ExplanationTitle>Adjective Types</ExplanationTitle>
        
        <CaseUsageContainer>
          <UsageItem>
            <KeyPoint>Type 1: Basic Adjectives</KeyPoint>
            <ExampleBox>
              <ExampleText>iso → ison (big)</ExampleText>
              <ExampleText>pieni → pienen (small)</ExampleText>
              <ExampleText>uusi → uuden (new)</ExampleText>
              <ExampleText>vanha → vanhan (old)</ExampleText>
            </ExampleBox>
          </UsageItem>

          <UsageItem>
            <KeyPoint>Type 2: Comparative Forms</KeyPoint>
            <ExampleBox>
              <ExampleText>isompi → isomman (bigger)</ExampleText>
              <ExampleText>pienempi → pienemmän (smaller)</ExampleText>
              <ExampleText>uudempi → uudemman (newer)</ExampleText>
              <ExampleText>vanhempi → vanhemman (older)</ExampleText>
            </ExampleBox>
          </UsageItem>

          <UsageItem>
            <KeyPoint>Type 3: Superlative Forms</KeyPoint>
            <ExampleBox>
              <ExampleText>isoin → isoisin (biggest)</ExampleText>
              <ExampleText>pienin → pienin (smallest)</ExampleText>
              <ExampleText>uusin → uusin (newest)</ExampleText>
              <ExampleText>vanhin → vanhin (oldest)</ExampleText>
            </ExampleBox>
          </UsageItem>
        </CaseUsageContainer>


        <ExplanationTitle>Verb Types (Based on Inflection Patterns)</ExplanationTitle>
        
        <FormationTable>
          <thead>
            <FormationTableRow>
              <FormationTableHeader>Verb Type</FormationTableHeader>
              <FormationTableHeader>Characteristics</FormationTableHeader>
              <FormationTableHeader>Examples</FormationTableHeader>
            </FormationTableRow>
          </thead>
          <tbody>
            <FormationTableRow>
              <FormationTableCell>Type 1</FormationTableCell>
              <FormationTableCell>End in -aa/-ää, -ua/-yä, -oa/-öä, -ia/-iä</FormationTableCell>
              <FormationTableCell>puhua, lukea, odottaa, antaa</FormationTableCell>
            </FormationTableRow>
            <FormationTableRow>
              <FormationTableCell>Type 2</FormationTableCell>
              <FormationTableCell>End in -da/-dä</FormationTableCell>
              <FormationTableCell>syödä, juoda, tehdä, nähdä</FormationTableCell>
            </FormationTableRow>
            <FormationTableRow>
              <FormationTableCell>Type 3</FormationTableCell>
              <FormationTableCell>End in -lla/-llä, -nna/-nnä, -rra/-rrä, -sta/-stä</FormationTableCell>
              <FormationTableCell>tulla, mennä, purra, nousta</FormationTableCell>
            </FormationTableRow>
            <FormationTableRow>
              <FormationTableCell>Type 4</FormationTableCell>
              <FormationTableCell>End in -ata/-ätä, -ota/-ötä, -uta/-ytä</FormationTableCell>
              <FormationTableCell>tavata, haluta, tarjota, pelätä</FormationTableCell>
            </FormationTableRow>
            <FormationTableRow>
              <FormationTableCell>Type 5</FormationTableCell>
              <FormationTableCell>End in -ita/-itä</FormationTableCell>
              <FormationTableCell>tarvita, valita, mainita, hävittää</FormationTableCell>
            </FormationTableRow>
            <FormationTableRow>
              <FormationTableCell>Type 6</FormationTableCell>
              <FormationTableCell>End in -eta/-etä</FormationTableCell>
              <FormationTableCell>paeta, vanheta, lämmetä, kylmetä</FormationTableCell>
            </FormationTableRow>
          </tbody>
        </FormationTable>


        <ExplanationTitle>Word Type Patterns in Context</ExplanationTitle>
        
        <ColorCodedExample>
          <div><Highlight>Type 1 Noun:</Highlight> Ostin uuden <Highlight>talo</Highlight><Highlight>n</Highlight>. → I bought a new house.</div>
          <div><Highlight>Type 2 Noun:</Highlight> Hän otti <Highlight>käde</Highlight><Highlight>n</Highlight> esiin. → He took out his hand.</div>
          <div><Highlight>Type 3 Noun:</Highlight> Juon <Highlight>vett</Highlight><Highlight>ä</Highlight>. → I drink water.</div>
          <div><Highlight>Type 1 Verb:</Highlight> <Highlight>Puhu</Highlight><Highlight>n</Highlight> suomea. → I speak Finnish.</div>
          <div><Highlight>Type 2 Verb:</Highlight> <Highlight>Syö</Highlight><Highlight>n</Highlight> omenan. → I eat an apple.</div>
          <div><Highlight>Type 3 Verb:</Highlight> <Highlight>Tule</Highlight><Highlight>n</Highlight> huomenna. → I will come tomorrow.</div>
        </ColorCodedExample>


        <ExplanationTitle>Recognizing Word Types by Ending Patterns</ExplanationTitle>
        
        <FormationTable>
          <thead>
            <FormationTableRow>
              <FormationTableHeader>Ending Pattern</FormationTableHeader>
              <FormationTableHeader>Likely Word Type</FormationTableHeader>
              <FormationTableHeader>Examples</FormationTableHeader>
            </FormationTableRow>
          </thead>
          <tbody>
            <FormationTableRow>
              <FormationTableCell>-aa/-ää, -ua/-yä</FormationTableCell>
              <FormationTableCell>Verb Type 1</FormationTableCell>
              <FormationTableCell>puhua, lukea, antaa</FormationTableCell>
            </FormationTableRow>
            <FormationTableRow>
              <FormationTableCell>-da/-dä</FormationTableCell>
              <FormationTableCell>Verb Type 2</FormationTableCell>
              <FormationTableCell>syödä, juoda, tehdä</FormationTableCell>
            </FormationTableRow>
            <FormationTableRow>
              <FormationTableCell>-lla/-llä, -nna/-nnä</FormationTableCell>
              <FormationTableCell>Verb Type 3</FormationTableCell>
              <FormationTableCell>tulla, mennä, opiskella</FormationTableCell>
            </FormationTableRow>
            <FormationTableRow>
              <FormationTableCell>-a/-ä (noun)</FormationTableCell>
              <FormationTableCell>Noun Type 1</FormationTableCell>
              <FormationTableCell>talo, kirja, lattia</FormationTableCell>
            </FormationTableRow>
            <FormationTableRow>
              <FormationTableCell>-i, -nen (noun)</FormationTableCell>
              <FormationTableCell>Noun Type 2</FormationTableCell>
              <FormationTableCell>käsi, nainen, vieras</FormationTableCell>
            </FormationTableRow>
            <FormationTableRow>
              <FormationTableCell>-si, -ni, -ri (noun)</FormationTableCell>
              <FormationTableCell>Noun Type 3</FormationTableCell>
              <FormationTableCell>vesi, kusi, tuli</FormationTableCell>
            </FormationTableRow>
          </tbody>
        </FormationTable>


        <ExplanationTitle>How Word Types Affect Case Endings</ExplanationTitle>
        
        <ExampleBox>
          <ExampleText><Highlight>Type 1 Noun:</Highlight> talo (nom) → talo<Highlight>n</Highlight> (gen) → talo<Highlight>a</Highlight> (part) → talo<Highlight>ssa</Highlight> (iness)</ExampleText>
          <ExampleText><Highlight>Type 2 Noun:</Highlight> käsi (nom) → käde<Highlight>n</Highlight> (gen) → kätt<Highlight>ä</Highlight> (part) → käde<Highlight>ssä</Highlight> (iness)</ExampleText>
          <ExampleText><Highlight>Type 3 Noun:</Highlight> vesi (nom) → vede<Highlight>n</Highlight> (gen) → vett<Highlight>ä</Highlight> (part) → vede<Highlight>ssä</Highlight> (iness)</ExampleText>
          <ExampleText><Highlight>Type 1 Verb:</Highlight> puhua → puhu<Highlight>n</Highlight> (pres) → puhu<Highlight>isi</Highlight> (cond) → puhu<Highlight>ttu</Highlight> (past part)</ExampleText>
          <ExampleText><Highlight>Type 2 Verb:</Highlight> syödä → syö<Highlight>n</Highlight> (pres) → syö<Highlight>isi</Highlight> (cond) → syö<Highlight>ty</Highlight> (past part)</ExampleText>
          <ExampleText><Highlight>Type 3 Verb:</Highlight> tulla → tule<Highlight>n</Highlight> (pres) → tuli<Highlight>si</Highlight> (cond) → tull<Highlight>ut</Highlight> (past part)</ExampleText>
        </ExampleBox>


        <ExplanationTitle>Practice Identifying Word Types</ExplanationTitle>
        
        <ExampleBox>
          <ExampleText>1. &quot;kirja&quot; - Type 1 Noun (ends in -a)</ExampleText>
          <ExampleText>2.  &quot;mennä &quot; - Type 3 Verb (ends in -nnä)</ExampleText>
          <ExampleText>3.  &quot;vesi &quot; - Type 3 Noun (ends in -si, stem changes)</ExampleText>
          <ExampleText>4.  &quot;tehdä &quot; - Type 2 Verb (ends in -dä)</ExampleText>
          <ExampleText>5.  &quot;nainen &quot; - Type 2 Noun (ends in -nen)</ExampleText>
          <ExampleText>6.  &quot;lukea &quot; - Type 1 Verb (ends in -ea)</ExampleText>
          <ExampleText>7.  &quot;auto &quot; - Type 4 Noun (loanword, follows Type 1 patterns)</ExampleText>
          <ExampleText>8.  &quot;tavata &quot; - Type 4 Verb (ends in -ata)</ExampleText>
        </ExampleBox>

        <SummaryBox>
          <ExplanationTitle>Key Takeaways</ExplanationTitle>
          <ExplanationContent>
            ✅ Finnish words follow predictable patterns based on their endings
          </ExplanationContent>
          <ExplanationContent>
            ✅ Nouns are categorized into types based on their stem behavior
          </ExplanationContent>
          <ExplanationContent>
            ✅ Verbs are categorized into 6 types based on their inflection patterns
          </ExplanationContent>
          <ExplanationContent>
            ✅ Recognizing word types helps predict case endings and conjugations
          </ExplanationContent>
          <ExplanationContent>
            ✅ Loanwords typically follow Type 1 patterns
          </ExplanationContent>
          <ExplanationContent>
            ✅ With practice, you&apos;ll develop an intuition for Finnish word patterns
          </ExplanationContent>
        </SummaryBox>

        <FunFactBox>
          <span>🌟 Pro Tip: </span>
          When learning new vocabulary, always learn the word&apos;s type along with its meaning. This will save you time later when you need to use the word in different cases or tenses!
        </FunFactBox>
      </ExplanationSection>
    </Container>
  );
};

export default WordTypes;