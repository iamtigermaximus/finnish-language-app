"use client";

import React from "react";
import {
  Container,
  Title,
  // SectionTitle,
  PostpositionSection,
  PostpositionHeader,
  UsageText,
  ExampleTable,
  ExampleRow,
  FinnishCell,
  EnglishCell,
  NoteText,
  ExplanationContent,
} from "./ConcretePostpositions.styles";

const ConcretePostpositions = () => {
  return (
    <Container>
      <Title>Concrete Postpositions</Title>
      <ExplanationContent>
        Concrete postpositions describe the physical position of objects in
        space. They show where one thing is located relative to another,
        typically when both objects are stationary.
      </ExplanationContent>

      {/* Alapuolella */}
      <PostpositionSection>
        <PostpositionHeader>Alapuolella</PostpositionHeader>
        <UsageText>Usage: Below or beneath</UsageText>

        <ExampleTable>
          <thead>
            <tr>
              <th>Finnish</th>
              <th>English</th>
            </tr>
          </thead>
          <tbody>
            <ExampleRow>
              <FinnishCell>Kuvateksti on valokuvan alapuolella.</FinnishCell>
              <EnglishCell>The caption is below the photograph.</EnglishCell>
            </ExampleRow>
            <ExampleRow>
              <FinnishCell>Lämpötila on pakkasen alapuolella.</FinnishCell>
              <EnglishCell>The temperature is below freezing.</EnglishCell>
            </ExampleRow>
            <ExampleRow>
              <FinnishCell>
                Kellarikerros on maanpinnan alapuolella.
              </FinnishCell>
              <EnglishCell>
                The basement floor is below ground level.
              </EnglishCell>
            </ExampleRow>
          </tbody>
        </ExampleTable>
      </PostpositionSection>

      {/* Alla */}
      <PostpositionSection>
        <PostpositionHeader>Alla</PostpositionHeader>
        <UsageText>
          Usage: under, underneath or just before (temporal)
        </UsageText>

        <ExampleTable>
          <thead>
            <tr>
              <th>Finnish</th>
              <th>English</th>
            </tr>
          </thead>
          <tbody>
            <ExampleRow>
              <FinnishCell>Lapset leikkivät sillan alla.</FinnishCell>
              <EnglishCell>Children are playing under the bridge.</EnglishCell>
            </ExampleRow>
            <ExampleRow>
              <FinnishCell>Kissa piiloutui sohvan alla.</FinnishCell>
              <EnglishCell>The cat hid under the sofa.</EnglishCell>
            </ExampleRow>
            <ExampleRow>
              <FinnishCell>Joulun alla on paljon valmisteluja.</FinnishCell>
              <EnglishCell>
                There are many preparations just before Christmas.
              </EnglishCell>
            </ExampleRow>
          </tbody>
        </ExampleTable>
      </PostpositionSection>

      {/* Edessä */}
      <PostpositionSection>
        <PostpositionHeader>Edessä</PostpositionHeader>
        <UsageText>Usage: In front</UsageText>

        <ExampleTable>
          <thead>
            <tr>
              <th>Finnish</th>
              <th>English</th>
            </tr>
          </thead>
          <tbody>
            <ExampleRow>
              <FinnishCell>Auto seisoi talon edessä.</FinnishCell>
              <EnglishCell>
                The car was parked in front of the house.
              </EnglishCell>
            </ExampleRow>
            <ExampleRow>
              <FinnishCell>Opettaja seisoi luokan edessä.</FinnishCell>
              <EnglishCell>
                The teacher stood in front of the class.
              </EnglishCell>
            </ExampleRow>
            <ExampleRow>
              <FinnishCell>Kukat istutettiin ikkunan edessä.</FinnishCell>
              <EnglishCell>
                Flowers were planted in front of the window.
              </EnglishCell>
            </ExampleRow>
          </tbody>
        </ExampleTable>
      </PostpositionSection>

      {/* Keskellä */}
      <PostpositionSection>
        <PostpositionHeader>Keskellä</PostpositionHeader>
        <UsageText>Usage: In the middle, amid, among, between</UsageText>

        <ExampleTable>
          <thead>
            <tr>
              <th>Finnish</th>
              <th>English</th>
            </tr>
          </thead>
          <tbody>
            <ExampleRow>
              <FinnishCell>Lampi sijaitsee metsän keskellä.</FinnishCell>
              <EnglishCell>
                The pond is located in the middle of the forest.
              </EnglishCell>
            </ExampleRow>
            <ExampleRow>
              <FinnishCell>Pöytä seisoo huoneen keskellä.</FinnishCell>
              <EnglishCell>
                The table stands in the middle of the room.
              </EnglishCell>
            </ExampleRow>
            <ExampleRow>
              <FinnishCell>Kaupunki rakennettiin saaren keskelle.</FinnishCell>
              <EnglishCell>
                The city was built in the middle of the island.
              </EnglishCell>
            </ExampleRow>
          </tbody>
        </ExampleTable>
      </PostpositionSection>

      {/* Oikealla */}
      <PostpositionSection>
        <PostpositionHeader>Oikealla</PostpositionHeader>
        <UsageText>Usage: On the right</UsageText>

        <ExampleTable>
          <thead>
            <tr>
              <th>Finnish</th>
              <th>English</th>
            </tr>
          </thead>
          <tbody>
            <ExampleRow>
              <FinnishCell>Pankki on kirkon oikealla puolella.</FinnishCell>
              <EnglishCell>
                The bank is on the right side of the church.
              </EnglishCell>
            </ExampleRow>
            <ExampleRow>
              <FinnishCell>Kirjoitan oikealla kädelläni.</FinnishCell>
              <EnglishCell>I write with my right hand.</EnglishCell>
            </ExampleRow>
            <ExampleRow>
              <FinnishCell>Käytävä jatkuu oikealle.</FinnishCell>
              <EnglishCell>The corridor continues to the right.</EnglishCell>
            </ExampleRow>
          </tbody>
        </ExampleTable>
      </PostpositionSection>

      {/* Päällä */}
      <PostpositionSection>
        <PostpositionHeader>Päällä</PostpositionHeader>
        <UsageText>Usage: On top of</UsageText>

        <ExampleTable>
          <thead>
            <tr>
              <th>Finnish</th>
              <th>English</th>
            </tr>
          </thead>
          <tbody>
            <ExampleRow>
              <FinnishCell>Kirjat ovat hyllyn päällä.</FinnishCell>
              <EnglishCell>The books are on top of the shelf.</EnglishCell>
            </ExampleRow>
            <ExampleRow>
              <FinnishCell>Lintu istuu katolla.</FinnishCell>
              <EnglishCell>A bird is sitting on the roof.</EnglishCell>
            </ExampleRow>
            <ExampleRow>
              <FinnishCell>Puhelin on pöydän päällä.</FinnishCell>
              <EnglishCell>The phone is on top of the table.</EnglishCell>
            </ExampleRow>
          </tbody>
        </ExampleTable>
      </PostpositionSection>

      {/* Sisällä */}
      <PostpositionSection>
        <PostpositionHeader>Sisällä</PostpositionHeader>
        <UsageText>Usage: Inside, within</UsageText>

        <ExampleTable>
          <thead>
            <tr>
              <th>Finnish</th>
              <th>English</th>
            </tr>
          </thead>
          <tbody>
            <ExampleRow>
              <FinnishCell>Avaimet ovat laukussa.</FinnishCell>
              <EnglishCell>The keys are inside the bag.</EnglishCell>
            </ExampleRow>
            <ExampleRow>
              <FinnishCell>He asuvat kerrostalossa.</FinnishCell>
              <EnglishCell>
                They live inside the apartment building.
              </EnglishCell>
            </ExampleRow>
            <ExampleRow>
              <FinnishCell>Eläimet piiloutuivat luolaan.</FinnishCell>
              <EnglishCell>The animals hid inside the cave.</EnglishCell>
            </ExampleRow>
          </tbody>
        </ExampleTable>
      </PostpositionSection>

      {/* Takana */}
      <PostpositionSection>
        <PostpositionHeader>Takana</PostpositionHeader>
        <UsageText>Usage: Behind</UsageText>

        <ExampleTable>
          <thead>
            <tr>
              <th>Finnish</th>
              <th>English</th>
            </tr>
          </thead>
          <tbody>
            <ExampleRow>
              <FinnishCell>Puutarha on talon takana.</FinnishCell>
              <EnglishCell>The garden is behind the house.</EnglishCell>
            </ExampleRow>
            <ExampleRow>
              <FinnishCell>Joku seisoi oven takana.</FinnishCell>
              <EnglishCell>Someone was standing behind the door.</EnglishCell>
            </ExampleRow>
            <ExampleRow>
              <FinnishCell>Pysäköin auton puun taakse.</FinnishCell>
              <EnglishCell>I parked the car behind the tree.</EnglishCell>
            </ExampleRow>
          </tbody>
        </ExampleTable>
      </PostpositionSection>

      {/* Välissä */}
      <PostpositionSection>
        <PostpositionHeader>Välissä</PostpositionHeader>
        <UsageText>Usage: Between</UsageText>

        <ExampleTable>
          <thead>
            <tr>
              <th>Finnish</th>
              <th>English</th>
            </tr>
          </thead>
          <tbody>
            <ExampleRow>
              <FinnishCell>Käytävä on huoneiden välissä.</FinnishCell>
              <EnglishCell>The corridor is between the rooms.</EnglishCell>
            </ExampleRow>
            <ExampleRow>
              <FinnishCell>Joki virtaa kaupunkien välissä.</FinnishCell>
              <EnglishCell>The river flows between the cities.</EnglishCell>
            </ExampleRow>
            <ExampleRow>
              <FinnishCell>Pieni tori on kahden kadun välissä.</FinnishCell>
              <EnglishCell>A small square is between two streets.</EnglishCell>
            </ExampleRow>
          </tbody>
        </ExampleTable>
        <NoteText>
          Välissä should not be confused with Välillä, which is a more abstract
          postposition for between.
        </NoteText>
      </PostpositionSection>

      {/* Vieressä */}
      <PostpositionSection>
        <PostpositionHeader>Vieressä</PostpositionHeader>
        <UsageText>Usage: Next to, beside</UsageText>

        <ExampleTable>
          <thead>
            <tr>
              <th>Finnish</th>
              <th>English</th>
            </tr>
          </thead>
          <tbody>
            <ExampleRow>
              <FinnishCell>Istun ystäväni vieressä.</FinnishCell>
              <EnglishCell>I sit next to my friend.</EnglishCell>
            </ExampleRow>
            <ExampleRow>
              <FinnishCell>Kauppa on postin vieressä.</FinnishCell>
              <EnglishCell>The store is next to the post office.</EnglishCell>
            </ExampleRow>
            <ExampleRow>
              <FinnishCell>Pysäköin auton talon viereen.</FinnishCell>
              <EnglishCell>I parked the car next to the house.</EnglishCell>
            </ExampleRow>
          </tbody>
        </ExampleTable>
      </PostpositionSection>

      {/* Yllä */}
      <PostpositionSection>
        <PostpositionHeader>Yllä</PostpositionHeader>
        <UsageText>Usage: Above, over</UsageText>

        <ExampleTable>
          <thead>
            <tr>
              <th>Finnish</th>
              <th>English</th>
            </tr>
          </thead>
          <tbody>
            <ExampleRow>
              <FinnishCell>Lintu lensi talon yllä.</FinnishCell>
              <EnglishCell>A bird flew above the house.</EnglishCell>
            </ExampleRow>
            <ExampleRow>
              <FinnishCell>Taivas on meidän yllämme.</FinnishCell>
              <EnglishCell>The sky is above us.</EnglishCell>
            </ExampleRow>
            <ExampleRow>
              <FinnishCell>Lämpölämpötila on katon yläpuolella.</FinnishCell>
              <EnglishCell>The heating unit is above the ceiling.</EnglishCell>
            </ExampleRow>
          </tbody>
        </ExampleTable>
      </PostpositionSection>
    </Container>
  );
};

export default ConcretePostpositions;
