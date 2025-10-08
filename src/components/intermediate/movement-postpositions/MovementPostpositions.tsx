"use client";

import React from "react";
import {
  Container,
  Title,
  ExplanationContent,
  PostpositionSection,
  PostpositionHeader,
  UsageText,
  ExampleTable,
  ExampleRow,
  FinnishCell,
  EnglishCell,
  NoteText,
} from "./MovementPostpositions.styles";

const MovementPostpositions = () => {
  return (
    <Container>
      <Title>Movement Expressing Postpositions</Title>
      <ExplanationContent>
        Movement expressing postpositions describe positions and directions
        involving motion. They show where something is moving in relation to
        something else, often implying movement or change of position.
      </ExplanationContent>

      {/* Edellä */}
      <PostpositionSection>
        <PostpositionHeader>Edellä</PostpositionHeader>
        <UsageText>Usage: Before, ahead of, in advance of</UsageText>

        <ExampleTable>
          <thead>
            <tr>
              <th>Finnish</th>
              <th>English</th>
            </tr>
          </thead>
          <tbody>
            <ExampleRow>
              <FinnishCell>Juoksijat kulkevat muiden edellä.</FinnishCell>
              <EnglishCell>The runners go ahead of others.</EnglishCell>
            </ExampleRow>
            <ExampleRow>
              <FinnishCell>Hän ajoi koko matkan edellämme.</FinnishCell>
              <EnglishCell>He drove the whole way ahead of us.</EnglishCell>
            </ExampleRow>
            <ExampleRow>
              <FinnishCell>Teknologia on kehityksessä edellä.</FinnishCell>
              <EnglishCell>Technology is ahead in development.</EnglishCell>
            </ExampleRow>
          </tbody>
        </ExampleTable>
      </PostpositionSection>

      {/* Jäljessä */}
      <PostpositionSection>
        <PostpositionHeader>Jäljessä</PostpositionHeader>
        <UsageText>Usage: After, closely behind</UsageText>

        <ExampleTable>
          <thead>
            <tr>
              <th>Finnish</th>
              <th>English</th>
            </tr>
          </thead>
          <tbody>
            <ExampleRow>
              <FinnishCell>He tulevat vartin jäljessämme.</FinnishCell>
              <EnglishCell>They are coming 15 minutes behind us.</EnglishCell>
            </ExampleRow>
            <ExampleRow>
              <FinnishCell>Joukkue on sarjassa viimeisenä.</FinnishCell>
              <EnglishCell>The team is last in the league.</EnglishCell>
            </ExampleRow>
            <ExampleRow>
              <FinnishCell>Hän jäi aikataulusta jäljessä.</FinnishCell>
              <EnglishCell>He fell behind schedule.</EnglishCell>
            </ExampleRow>
          </tbody>
        </ExampleTable>
      </PostpositionSection>

      {/* Läpi */}
      <PostpositionSection>
        <PostpositionHeader>Läpi</PostpositionHeader>
        <UsageText>Usage: Through, across, past, passing</UsageText>

        <ExampleTable>
          <thead>
            <tr>
              <th>Finnish</th>
              <th>English</th>
            </tr>
          </thead>
          <tbody>
            <ExampleRow>
              <FinnishCell>Vesi virtaa putken läpi.</FinnishCell>
              <EnglishCell>Water flows through the pipe.</EnglishCell>
            </ExampleRow>
            <ExampleRow>
              <FinnishCell>Kävelimme kaupungin läpi.</FinnishCell>
              <EnglishCell>We walked through the city.</EnglishCell>
            </ExampleRow>
            <ExampleRow>
              <FinnishCell>Pääsinkö tentistä läpi?</FinnishCell>
              <EnglishCell>Did I pass the exam?</EnglishCell>
            </ExampleRow>
          </tbody>
        </ExampleTable>
      </PostpositionSection>

      {/* Perässä */}
      <PostpositionSection>
        <PostpositionHeader>Perässä</PostpositionHeader>
        <UsageText>Usage: Behind, after</UsageText>

        <ExampleTable>
          <thead>
            <tr>
              <th>Finnish</th>
              <th>English</th>
            </tr>
          </thead>
          <tbody>
            <ExampleRow>
              <FinnishCell>Poliisiauto ajoi varkaan perässä.</FinnishCell>
              <EnglishCell>The police car chased after the thief.</EnglishCell>
            </ExampleRow>
            <ExampleRow>
              <FinnishCell>Lähdin heti hänen peräänsä.</FinnishCell>
              <EnglishCell>I left right after him.</EnglishCell>
            </ExampleRow>
            <ExampleRow>
              <FinnishCell>Koirat juoksevat pallon perässä.</FinnishCell>
              <EnglishCell>The dogs run after the ball.</EnglishCell>
            </ExampleRow>
          </tbody>
        </ExampleTable>
      </PostpositionSection>

      {/* Poikki */}
      <PostpositionSection>
        <PostpositionHeader>Poikki</PostpositionHeader>
        <UsageText>Usage: Across, through</UsageText>

        <ExampleTable>
          <thead>
            <tr>
              <th>Finnish</th>
              <th>English</th>
            </tr>
          </thead>
          <tbody>
            <ExampleRow>
              <FinnishCell>Lapsi juoksi pihan poikki.</FinnishCell>
              <EnglishCell>The child ran across the yard.</EnglishCell>
            </ExampleRow>
            <ExampleRow>
              <FinnishCell>Silta menee joen poikki.</FinnishCell>
              <EnglishCell>The bridge goes across the river.</EnglishCell>
            </ExampleRow>
            <ExampleRow>
              <FinnishCell>Leikkaa lanka kahtia.</FinnishCell>
              <EnglishCell>Cut the thread in two.</EnglishCell>
            </ExampleRow>
          </tbody>
        </ExampleTable>
      </PostpositionSection>

      {/* Välillä */}
      <PostpositionSection>
        <PostpositionHeader>Välillä</PostpositionHeader>
        <UsageText>Usage: Between (movement)</UsageText>

        <ExampleTable>
          <thead>
            <tr>
              <th>Finnish</th>
              <th>English</th>
            </tr>
          </thead>
          <tbody>
            <ExampleRow>
              <FinnishCell>Bussi tulee kello 8 ja 9 välillä.</FinnishCell>
              <EnglishCell>
                The bus comes between 8 and 9 o&apos;clock.
              </EnglishCell>
            </ExampleRow>
            <ExampleRow>
              <FinnishCell>Matkustan Tampereen ja Oulun välillä.</FinnishCell>
              <EnglishCell>I travel between Tampere and Oulu.</EnglishCell>
            </ExampleRow>
            <ExampleRow>
              <FinnishCell>Valitsen kahden työtarjouksen välillä.</FinnishCell>
              <EnglishCell>
                I&apos;m choosing between two job offers.
              </EnglishCell>
            </ExampleRow>
          </tbody>
        </ExampleTable>
        <NoteText>
          Välillä typically identifies movement between objects. The objects can
          be physical or non physical, such as traveling between towns,
          expressing time spans, considering options, and so forth.
        </NoteText>
        <NoteText>
          Välillä should not be confused with Välissä, which is a more concrete
          postposition for &quot;between&quot;.
        </NoteText>
      </PostpositionSection>

      {/* Kohti */}
      <PostpositionSection>
        <PostpositionHeader>Kohti</PostpositionHeader>
        <UsageText>Usage: Toward, in the direction of</UsageText>

        <ExampleTable>
          <thead>
            <tr>
              <th>Finnish</th>
              <th>English</th>
            </tr>
          </thead>
          <tbody>
            <ExampleRow>
              <FinnishCell>Lentokone suuntasi itää kohti.</FinnishCell>
              <EnglishCell>The airplane headed toward the east.</EnglishCell>
            </ExampleRow>
            <ExampleRow>
              <FinnishCell>Kävellimme asemaa kohti.</FinnishCell>
              <EnglishCell>We walked toward the station.</EnglishCell>
            </ExampleRow>
            <ExampleRow>
              <FinnishCell>Yritys on menossa parempaan suuntaan.</FinnishCell>
              <EnglishCell>
                The company is moving toward a better direction.
              </EnglishCell>
            </ExampleRow>
          </tbody>
        </ExampleTable>
      </PostpositionSection>

      {/* Ohi */}
      <PostpositionSection>
        <PostpositionHeader>Ohi</PostpositionHeader>
        <UsageText>Usage: Past, by</UsageText>

        <ExampleTable>
          <thead>
            <tr>
              <th>Finnish</th>
              <th>English</th>
            </tr>
          </thead>
          <tbody>
            <ExampleRow>
              <FinnishCell>Auto ajoi talon ohi.</FinnishCell>
              <EnglishCell>The car drove past the house.</EnglishCell>
            </ExampleRow>
            <ExampleRow>
              <FinnishCell>Kävelin hänen ohitsensa.</FinnishCell>
              <EnglishCell>I walked past him.</EnglishCell>
            </ExampleRow>
            <ExampleRow>
              <FinnishCell>Menimme kaupungin ohi.</FinnishCell>
              <EnglishCell>We went past the city.</EnglishCell>
            </ExampleRow>
          </tbody>
        </ExampleTable>
      </PostpositionSection>

      {/* Yli */}
      <PostpositionSection>
        <PostpositionHeader>Yli</PostpositionHeader>
        <UsageText>Usage: Over, across</UsageText>

        <ExampleTable>
          <thead>
            <tr>
              <th>Finnish</th>
              <th>English</th>
            </tr>
          </thead>
          <tbody>
            <ExampleRow>
              <FinnishCell>Lintu lensi vuoren yli.</FinnishCell>
              <EnglishCell>The bird flew over the mountain.</EnglishCell>
            </ExampleRow>
            <ExampleRow>
              <FinnishCell>Hyppäsimme aidan yli.</FinnishCell>
              <EnglishCell>We jumped over the fence.</EnglishCell>
            </ExampleRow>
            <ExampleRow>
              <FinnishCell>Kävelimme sillan yli.</FinnishCell>
              <EnglishCell>We walked across the bridge.</EnglishCell>
            </ExampleRow>
          </tbody>
        </ExampleTable>
      </PostpositionSection>

      {/* Ali */}
      <PostpositionSection>
        <PostpositionHeader>Ali</PostpositionHeader>
        <UsageText>Usage: Under, beneath (movement)</UsageText>

        <ExampleTable>
          <thead>
            <tr>
              <th>Finnish</th>
              <th>English</th>
            </tr>
          </thead>
          <tbody>
            <ExampleRow>
              <FinnishCell>Uimme sillan ali.</FinnishCell>
              <EnglishCell>We swam under the bridge.</EnglishCell>
            </ExampleRow>
            <ExampleRow>
              <FinnishCell>Auto ajoi tunnelin ali.</FinnishCell>
              <EnglishCell>The car drove under the tunnel.</EnglishCell>
            </ExampleRow>
            <ExampleRow>
              <FinnishCell>Kävelimme portin ali.</FinnishCell>
              <EnglishCell>We walked under the gate.</EnglishCell>
            </ExampleRow>
          </tbody>
        </ExampleTable>
      </PostpositionSection>

      {/* Pitkin */}
      <PostpositionSection>
        <PostpositionHeader>Pitkin</PostpositionHeader>
        <UsageText>Usage: Along, alongside</UsageText>

        <ExampleTable>
          <thead>
            <tr>
              <th>Finnish</th>
              <th>English</th>
            </tr>
          </thead>
          <tbody>
            <ExampleRow>
              <FinnishCell>Kävelimme joen pitkin.</FinnishCell>
              <EnglishCell>We walked along the river.</EnglishCell>
            </ExampleRow>
            <ExampleRow>
              <FinnishCell>Ajamme rantatietä pitkin.</FinnishCell>
              <EnglishCell>We drive along the coastal road.</EnglishCell>
            </ExampleRow>
            <ExampleRow>
              <FinnishCell>Juoksin polkua pitkin.</FinnishCell>
              <EnglishCell>I ran along the path.</EnglishCell>
            </ExampleRow>
          </tbody>
        </ExampleTable>
      </PostpositionSection>

      {/* Vastaan */}
      <PostpositionSection>
        <PostpositionHeader>Vastaan</PostpositionHeader>
        <UsageText>Usage: Against, toward (meeting)</UsageText>

        <ExampleTable>
          <thead>
            <tr>
              <th>Finnish</th>
              <th>English</th>
            </tr>
          </thead>
          <tbody>
            <ExampleRow>
              <FinnishCell>Uimme virtaa vastaan.</FinnishCell>
              <EnglishCell>We swam against the current.</EnglishCell>
            </ExampleRow>
            <ExampleRow>
              <FinnishCell>Kävelin tuulta vastaan.</FinnishCell>
              <EnglishCell>I walked against the wind.</EnglishCell>
            </ExampleRow>
            <ExampleRow>
              <FinnishCell>Tulin häntä vastaan.</FinnishCell>
              <EnglishCell>I came toward him (to meet him).</EnglishCell>
            </ExampleRow>
          </tbody>
        </ExampleTable>
      </PostpositionSection>
    </Container>
  );
};

export default MovementPostpositions;
