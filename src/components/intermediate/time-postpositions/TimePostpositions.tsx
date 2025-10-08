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
} from "./TimePostpositions.styles";

const TimePostpositions = () => {
  return (
    <Container>
      <Title>Time Postpositions</Title>
      <ExplanationContent>
        Time postpositions describe temporal relationships and positions in
        time. They express when something happens in relation to other events,
        durations, or time periods.
      </ExplanationContent>

      {/* Aikana */}
      <PostpositionSection>
        <PostpositionHeader>Aikana</PostpositionHeader>
        <UsageText>Usage: During, within</UsageText>
        <NoteText>
          Aikana typically refers to an unspecified length of time or an event
          that happens at an unspecified moment during a specified period of
          time.
        </NoteText>

        <ExampleTable>
          <thead>
            <tr>
              <th>Finnish</th>
              <th>English</th>
            </tr>
          </thead>
          <tbody>
            <ExampleRow>
              <FinnishCell>Kesän aikana matkustamme paljon.</FinnishCell>
              <EnglishCell>During the summer we travel a lot.</EnglishCell>
            </ExampleRow>
            <ExampleRow>
              <FinnishCell>Päivän aikana sataa usein.</FinnishCell>
              <EnglishCell>During the day it often rains.</EnglishCell>
            </ExampleRow>
            <ExampleRow>
              <FinnishCell>Kahden vuoden aikana opin kielen.</FinnishCell>
              <EnglishCell>
                Within two years I learned the language.
              </EnglishCell>
            </ExampleRow>
          </tbody>
        </ExampleTable>
      </PostpositionSection>

      {/* Alussa */}
      <PostpositionSection>
        <PostpositionHeader>Alussa</PostpositionHeader>
        <UsageText>Usage: In, at the beginning</UsageText>

        <ExampleTable>
          <thead>
            <tr>
              <th>Finnish</th>
              <th>English</th>
            </tr>
          </thead>
          <tbody>
            <ExampleRow>
              <FinnishCell>Vuoden alussa teemme suunnitelmia.</FinnishCell>
              <EnglishCell>
                At the beginning of the year we make plans.
              </EnglishCell>
            </ExampleRow>
            <ExampleRow>
              <FinnishCell>Elokuvan alussa on jännittävä kohtaus.</FinnishCell>
              <EnglishCell>
                At the beginning of the movie there&apos;s an exciting scene.
              </EnglishCell>
            </ExampleRow>
            <ExampleRow>
              <FinnishCell>Kokouksen alussa jaamme asiakirjat.</FinnishCell>
              <EnglishCell>
                At the beginning of the meeting we distribute documents.
              </EnglishCell>
            </ExampleRow>
          </tbody>
        </ExampleTable>
      </PostpositionSection>

      {/* Lopussa */}
      <PostpositionSection>
        <PostpositionHeader>Lopussa</PostpositionHeader>
        <UsageText>Usage: In, at the end</UsageText>

        <ExampleTable>
          <thead>
            <tr>
              <th>Finnish</th>
              <th>English</th>
            </tr>
          </thead>
          <tbody>
            <ExampleRow>
              <FinnishCell>Kuukauden lopussa saan palkkani.</FinnishCell>
              <EnglishCell>
                At the end of the month I get my salary.
              </EnglishCell>
            </ExampleRow>
            <ExampleRow>
              <FinnishCell>Päivän lopussa rentoudun sohvalla.</FinnishCell>
              <EnglishCell>
                At the end of the day I relax on the couch.
              </EnglishCell>
            </ExampleRow>
            <ExampleRow>
              <FinnishCell>Kirjan lopussa on yllätys.</FinnishCell>
              <EnglishCell>
                At the end of the book there&apos;s a surprise.
              </EnglishCell>
            </ExampleRow>
          </tbody>
        </ExampleTable>
      </PostpositionSection>

      {/* Päästä */}
      <PostpositionSection>
        <PostpositionHeader>Päästä</PostpositionHeader>
        <UsageText>
          Usage: In, after a period of time from another period of time
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
              <FinnishCell>Kahden tunnin päästä olemme perillä.</FinnishCell>
              <EnglishCell>In two hours we&apos;ll arrive.</EnglishCell>
            </ExampleRow>
            <ExampleRow>
              <FinnishCell>Viiden minuutin päästä bussi tulee.</FinnishCell>
              <EnglishCell>In five minutes the bus comes.</EnglishCell>
            </ExampleRow>
            <ExampleRow>
              <FinnishCell>Parin viikon päästä alkaa loma.</FinnishCell>
              <EnglishCell>In a couple of weeks vacation begins.</EnglishCell>
            </ExampleRow>
          </tbody>
        </ExampleTable>
      </PostpositionSection>

      {/* Puolivälissä */}
      <PostpositionSection>
        <PostpositionHeader>Puolivälissä</PostpositionHeader>
        <UsageText>Usage: Halfway</UsageText>

        <ExampleTable>
          <thead>
            <tr>
              <th>Finnish</th>
              <th>English</th>
            </tr>
          </thead>
          <tbody>
            <ExampleRow>
              <FinnishCell>Olemme matkan puolivälissä.</FinnishCell>
              <EnglishCell>We are halfway through the journey.</EnglishCell>
            </ExampleRow>
            <ExampleRow>
              <FinnishCell>Hän on elämänsä puolivälissä.</FinnishCell>
              <EnglishCell>He is halfway through his life.</EnglishCell>
            </ExampleRow>
            <ExampleRow>
              <FinnishCell>
                Projektin puolivälissä tarkistamme edistymisen.
              </FinnishCell>
              <EnglishCell>
                Halfway through the project we check the progress.
              </EnglishCell>
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
              <FinnishCell>Palauta kirja viikon sisällä.</FinnishCell>
              <EnglishCell>Return the book within a week.</EnglishCell>
            </ExampleRow>
            <ExampleRow>
              <FinnishCell>Valmista tämä tunnin sisällä.</FinnishCell>
              <EnglishCell>Finish this within an hour.</EnglishCell>
            </ExampleRow>
            <ExampleRow>
              <FinnishCell>Vastaa viestin kolmen päivän sisällä.</FinnishCell>
              <EnglishCell>Reply to the message within three days.</EnglishCell>
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
              <FinnishCell>Kello 10 ja 11 välissä on tauko.</FinnishCell>
              <EnglishCell>Between 10 and 11 there&apos;s a break.</EnglishCell>
            </ExampleRow>
            <ExampleRow>
              <FinnishCell>
                Joulun ja uuden vuoden välissä on rauhallista.
              </FinnishCell>
              <EnglishCell>
                Between Christmas and New Year it&apos;s peaceful.
              </EnglishCell>
            </ExampleRow>
            <ExampleRow>
              <FinnishCell>
                Kahden tapaamisen välissä on aikaa työskennellä.
              </FinnishCell>
              <EnglishCell>
                Between two meetings there&apos;s time to work.
              </EnglishCell>
            </ExampleRow>
          </tbody>
        </ExampleTable>
      </PostpositionSection>

      {/* Ennen */}
      <PostpositionSection>
        <PostpositionHeader>Ennen</PostpositionHeader>
        <UsageText>Usage: Before</UsageText>

        <ExampleTable>
          <thead>
            <tr>
              <th>Finnish</th>
              <th>English</th>
            </tr>
          </thead>
          <tbody>
            <ExampleRow>
              <FinnishCell>Herään ennen auringonnousua.</FinnishCell>
              <EnglishCell>I wake up before sunrise.</EnglishCell>
            </ExampleRow>
            <ExampleRow>
              <FinnishCell>Tapaamme ennen lounasta.</FinnishCell>
              <EnglishCell>We&apos;ll meet before lunch.</EnglishCell>
            </ExampleRow>
            <ExampleRow>
              <FinnishCell>Valmistaudu ennen tenttiä.</FinnishCell>
              <EnglishCell>Prepare before the exam.</EnglishCell>
            </ExampleRow>
          </tbody>
        </ExampleTable>
      </PostpositionSection>

      {/* Jälkeen */}
      <PostpositionSection>
        <PostpositionHeader>Jälkeen</PostpositionHeader>
        <UsageText>Usage: After</UsageText>

        <ExampleTable>
          <thead>
            <tr>
              <th>Finnish</th>
              <th>English</th>
            </tr>
          </thead>
          <tbody>
            <ExampleRow>
              <FinnishCell>Nukun hyvin työpäivän jälkeen.</FinnishCell>
              <EnglishCell>I sleep well after a workday.</EnglishCell>
            </ExampleRow>
            <ExampleRow>
              <FinnishCell>Soitan sinulle kokouksen jälkeen.</FinnishCell>
              <EnglishCell>I&apos;ll call you after the meeting.</EnglishCell>
            </ExampleRow>
            <ExampleRow>
              <FinnishCell>Palaan kotiin koulun jälkeen.</FinnishCell>
              <EnglishCell>I return home after school.</EnglishCell>
            </ExampleRow>
          </tbody>
        </ExampleTable>
      </PostpositionSection>

      {/* Ympärillä */}
      <PostpositionSection>
        <PostpositionHeader>Ympärillä</PostpositionHeader>
        <UsageText>Usage: Around, approximately</UsageText>

        <ExampleTable>
          <thead>
            <tr>
              <th>Finnish</th>
              <th>English</th>
            </tr>
          </thead>
          <tbody>
            <ExampleRow>
              <FinnishCell>Tulen kello 15 ympärillä.</FinnishCell>
              <EnglishCell>I&apos;ll come around 3 PM.</EnglishCell>
            </ExampleRow>
            <ExampleRow>
              <FinnishCell>Lähtö on keskipäivän ympärillä.</FinnishCell>
              <EnglishCell>The departure is around noon.</EnglishCell>
            </ExampleRow>
            <ExampleRow>
              <FinnishCell>Juhla alkaa illan ympärillä.</FinnishCell>
              <EnglishCell>The party starts around the evening.</EnglishCell>
            </ExampleRow>
          </tbody>
        </ExampleTable>
      </PostpositionSection>

      {/* Saakka / Asti */}
      <PostpositionSection>
        <PostpositionHeader>Saakka / Asti</PostpositionHeader>
        <UsageText>Usage: Until, up to</UsageText>

        <ExampleTable>
          <thead>
            <tr>
              <th>Finnish</th>
              <th>English</th>
            </tr>
          </thead>
          <tbody>
            <ExampleRow>
              <FinnishCell>Työskentelen iltaan saakka.</FinnishCell>
              <EnglishCell>I work until evening.</EnglishCell>
            </ExampleRow>
            <ExampleRow>
              <FinnishCell>Nukun aamuun asti.</FinnishCell>
              <EnglishCell>I sleep until morning.</EnglishCell>
            </ExampleRow>
            <ExampleRow>
              <FinnishCell>Kauppa on auki kello 18 asti.</FinnishCell>
              <EnglishCell>The store is open until 6 PM.</EnglishCell>
            </ExampleRow>
          </tbody>
        </ExampleTable>
      </PostpositionSection>

      {/* Kestäen */}
      <PostpositionSection>
        <PostpositionHeader>Kestäen</PostpositionHeader>
        <UsageText>Usage: Lasting, for the duration of</UsageText>

        <ExampleTable>
          <thead>
            <tr>
              <th>Finnish</th>
              <th>English</th>
            </tr>
          </thead>
          <tbody>
            <ExampleRow>
              <FinnishCell>Elokuva kesti kaksi tuntia.</FinnishCell>
              <EnglishCell>The movie lasted two hours.</EnglishCell>
            </ExampleRow>
            <ExampleRow>
              <FinnishCell>Kesä kestää kolme kuukautta.</FinnishCell>
              <EnglishCell>Summer lasts three months.</EnglishCell>
            </ExampleRow>
            <ExampleRow>
              <FinnishCell>Kokous kesti koko päivän.</FinnishCell>
              <EnglishCell>The meeting lasted the whole day.</EnglishCell>
            </ExampleRow>
          </tbody>
        </ExampleTable>
      </PostpositionSection>

      {/* Sitten */}
      <PostpositionSection>
        <PostpositionHeader>Sitten</PostpositionHeader>
        <UsageText>Usage: Ago</UsageText>

        <ExampleTable>
          <thead>
            <tr>
              <th>Finnish</th>
              <th>English</th>
            </tr>
          </thead>
          <tbody>
            <ExampleRow>
              <FinnishCell>Tapasimme viikko sitten.</FinnishCell>
              <EnglishCell>We met a week ago.</EnglishCell>
            </ExampleRow>
            <ExampleRow>
              <FinnishCell>Hän muutti pois vuosi sitten.</FinnishCell>
              <EnglishCell>He moved away a year ago.</EnglishCell>
            </ExampleRow>
            <ExampleRow>
              <FinnishCell>Ostin tämän pari tuntia sitten.</FinnishCell>
              <EnglishCell>I bought this a couple of hours ago.</EnglishCell>
            </ExampleRow>
          </tbody>
        </ExampleTable>
      </PostpositionSection>

      {/* Vaiheessa */}
      <PostpositionSection>
        <PostpositionHeader>Vaiheessa</PostpositionHeader>
        <UsageText>Usage: In the phase of, during the stage of</UsageText>

        <ExampleTable>
          <thead>
            <tr>
              <th>Finnish</th>
              <th>English</th>
            </tr>
          </thead>
          <tbody>
            <ExampleRow>
              <FinnishCell>Olemme suunnittelun vaiheessa.</FinnishCell>
              <EnglishCell>We are in the planning phase.</EnglishCell>
            </ExampleRow>
            <ExampleRow>
              <FinnishCell>Projekti on alkuvaiheessa.</FinnishCell>
              <EnglishCell>The project is in the initial stage.</EnglishCell>
            </ExampleRow>
            <ExampleRow>
              <FinnishCell>Rakennus on viimeistelyvaiheessa.</FinnishCell>
              <EnglishCell>The building is in the finishing stage.</EnglishCell>
            </ExampleRow>
          </tbody>
        </ExampleTable>
      </PostpositionSection>
    </Container>
  );
};

export default TimePostpositions;
