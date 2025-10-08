"use client";

import React from "react";
import {
  Container,
  Title,
  ExplanationContent,
  CategorySection,
  CategoryHeader,
  CategoryDescription,
  PostpositionSection,
  PostpositionHeader,
  UsageText,
  ExampleTable,
  ExampleRow,
  FinnishCell,
  EnglishCell,
  // CaseCell,
  // MeaningCell,
} from "./AbstractPostpositions.styles";

const AbstractPostpositions = () => {
  return (
    <Container>
      <Title>Abstract Postpositions</Title>
      <ExplanationContent>
        Abstract postpositions describe conceptual relationships rather than
        physical positions. They express connections between ideas, time,
        ownership, and other non-physical concepts. In Finnish grammar, abstract
        postpositions are grouped by meaning type.
      </ExplanationContent>

      {/* 💬 1. Causal / Reason */}
      <CategorySection>
        <CategoryHeader>Causal / Reason</CategoryHeader>
        <CategoryDescription>
          These show cause, reason, or motivation — roughly like{" "}
          <em>because of, due to, thanks to, for the sake of</em> in English.
        </CategoryDescription>

        {/* Vuoksi */}
        <PostpositionSection>
          <PostpositionHeader>Vuoksi</PostpositionHeader>
          <UsageText>
            Case: Genitive | Meaning: because of, for the sake of
          </UsageText>
          <ExampleTable>
            <thead>
              <tr>
                <th>Example</th>
                <th>Translation</th>
              </tr>
            </thead>
            <tbody>
              <ExampleRow>
                <FinnishCell>Sinun vuoksesi teen sen.</FinnishCell>
                <EnglishCell>I&apos;ll do it for your sake.</EnglishCell>
              </ExampleRow>
              <ExampleRow>
                <FinnishCell>Sateen vuoksi peruimme retken.</FinnishCell>
                <EnglishCell>
                  Because of the rain, we canceled the trip.
                </EnglishCell>
              </ExampleRow>
              <ExampleRow>
                <FinnishCell>Hänen terveytensä vuoksi.</FinnishCell>
                <EnglishCell>For the sake of his health.</EnglishCell>
              </ExampleRow>
            </tbody>
          </ExampleTable>
        </PostpositionSection>

        {/* Takia */}
        <PostpositionSection>
          <PostpositionHeader>Takia</PostpositionHeader>
          <UsageText>
            Case: Genitive | Meaning: because of, on account of
          </UsageText>
          <ExampleTable>
            <thead>
              <tr>
                <th>Example</th>
                <th>Translation</th>
              </tr>
            </thead>
            <tbody>
              <ExampleRow>
                <FinnishCell>Sateen takia jäimme kotiin.</FinnishCell>
                <EnglishCell>We stayed home because of the rain.</EnglishCell>
              </ExampleRow>
              <ExampleRow>
                <FinnishCell>Lasten takia emme voi lähteä.</FinnishCell>
                <EnglishCell>
                  Because of the children, we can&apos;t leave.
                </EnglishCell>
              </ExampleRow>
              <ExampleRow>
                <FinnishCell>
                  Hälytyksen takia evakuoitiin rakennus.
                </FinnishCell>
                <EnglishCell>
                  The building was evacuated because of the alarm.
                </EnglishCell>
              </ExampleRow>
            </tbody>
          </ExampleTable>
        </PostpositionSection>

        {/* Ansiosta */}
        <PostpositionSection>
          <PostpositionHeader>Ansiosta</PostpositionHeader>
          <UsageText>Case: Genitive | Meaning: thanks to, owing to</UsageText>
          <ExampleTable>
            <thead>
              <tr>
                <th>Example</th>
                <th>Translation</th>
              </tr>
            </thead>
            <tbody>
              <ExampleRow>
                <FinnishCell>Hänen ansiostaan selvisimme.</FinnishCell>
                <EnglishCell>Thanks to him/her, we survived.</EnglishCell>
              </ExampleRow>
              <ExampleRow>
                <FinnishCell>Onnistuin opettajan ansiosta.</FinnishCell>
                <EnglishCell>I succeeded thanks to the teacher.</EnglishCell>
              </ExampleRow>
              <ExampleRow>
                <FinnishCell>Sään ansiosta pysyimme kuivina.</FinnishCell>
                <EnglishCell>Thanks to the weather, we stayed dry.</EnglishCell>
              </ExampleRow>
            </tbody>
          </ExampleTable>
        </PostpositionSection>

        {/* Puolesta */}
        <PostpositionSection>
          <PostpositionHeader>Puolesta</PostpositionHeader>
          <UsageText>
            Case: Genitive | Meaning: for, on behalf of, in favor of
          </UsageText>
          <ExampleTable>
            <thead>
              <tr>
                <th>Example</th>
                <th>Translation</th>
              </tr>
            </thead>
            <tbody>
              <ExampleRow>
                <FinnishCell>Puhun ystävän puolesta.</FinnishCell>
                <EnglishCell>I speak on behalf of a friend.</EnglishCell>
              </ExampleRow>
              <ExampleRow>
                <FinnishCell>Äänestin hänen puolestaan.</FinnishCell>
                <EnglishCell>I voted in his favor.</EnglishCell>
              </ExampleRow>
              <ExampleRow>
                <FinnishCell>Teen sen sinun puolestasi.</FinnishCell>
                <EnglishCell>I&apos;ll do it for you.</EnglishCell>
              </ExampleRow>
            </tbody>
          </ExampleTable>
        </PostpositionSection>
      </CategorySection>

      {/* 📜 2. Reference / Respect / Topic */}
      <CategorySection>
        <CategoryHeader>Reference / Respect / Topic</CategoryHeader>
        <CategoryDescription>
          These mark something being in relation to or with respect to something
          else — similar to{" "}
          <em>regarding, concerning, according to, in terms of</em>.
        </CategoryDescription>

        {/* Mukaan */}
        <PostpositionSection>
          <PostpositionHeader>Mukaan</PostpositionHeader>
          <UsageText>
            Case: Genitive | Meaning: according to, along with
          </UsageText>
          <ExampleTable>
            <thead>
              <tr>
                <th>Example</th>
                <th>Translation</th>
              </tr>
            </thead>
            <tbody>
              <ExampleRow>
                <FinnishCell>Lain mukaan tämä on kielletty.</FinnishCell>
                <EnglishCell>
                  According to the law, this is forbidden.
                </EnglishCell>
              </ExampleRow>
              <ExampleRow>
                <FinnishCell>Ohjeiden mukaan valmista.</FinnishCell>
                <EnglishCell>
                  Prepare according to the instructions.
                </EnglishCell>
              </ExampleRow>
              <ExampleRow>
                <FinnishCell>Tulen mukaanne.</FinnishCell>
                <EnglishCell>I&apos;ll come along with you.</EnglishCell>
              </ExampleRow>
            </tbody>
          </ExampleTable>
        </PostpositionSection>

        {/* Suhteen */}
        <PostpositionSection>
          <PostpositionHeader>Suhteen</PostpositionHeader>
          <UsageText>
            Case: Genitive | Meaning: regarding, with respect to
          </UsageText>
          <ExampleTable>
            <thead>
              <tr>
                <th>Example</th>
                <th>Translation</th>
              </tr>
            </thead>
            <tbody>
              <ExampleRow>
                <FinnishCell>Asian suhteen olemme samaa mieltä.</FinnishCell>
                <EnglishCell>Regarding the matter, we agree.</EnglishCell>
              </ExampleRow>
              <ExampleRow>
                <FinnishCell>Hinnan suhteen täytyy neuvotella.</FinnishCell>
                <EnglishCell>
                  Regarding the price, we must negotiate.
                </EnglishCell>
              </ExampleRow>
              <ExampleRow>
                <FinnishCell>Laadun suhteen ei ole valittamista.</FinnishCell>
                <EnglishCell>
                  With respect to quality, there&apos;s no complaining.
                </EnglishCell>
              </ExampleRow>
            </tbody>
          </ExampleTable>
        </PostpositionSection>

        {/* Mielestä */}
        <PostpositionSection>
          <PostpositionHeader>Mielestä</PostpositionHeader>
          <UsageText>
            Case: Genitive | Meaning: in (someone&apos;s) opinion
          </UsageText>
          <ExampleTable>
            <thead>
              <tr>
                <th>Example</th>
                <th>Translation</th>
              </tr>
            </thead>
            <tbody>
              <ExampleRow>
                <FinnishCell>Minun mielestäni tämä on hyvä.</FinnishCell>
                <EnglishCell>In my opinion, this is good.</EnglishCell>
              </ExampleRow>
              <ExampleRow>
                <FinnishCell>Hänen mielestään elokuva oli tylsä.</FinnishCell>
                <EnglishCell>In his opinion, the movie was boring.</EnglishCell>
              </ExampleRow>
              <ExampleRow>
                <FinnishCell>
                  Meidän mielestämme hinnoittelu on kohtuuton.
                </FinnishCell>
                <EnglishCell>
                  In our opinion, the pricing is unreasonable.
                </EnglishCell>
              </ExampleRow>
            </tbody>
          </ExampleTable>
        </PostpositionSection>

        {/* Perusteella */}
        <PostpositionSection>
          <PostpositionHeader>Perusteella</PostpositionHeader>
          <UsageText>Case: Genitive | Meaning: on the basis of</UsageText>
          <ExampleTable>
            <thead>
              <tr>
                <th>Example</th>
                <th>Translation</th>
              </tr>
            </thead>
            <tbody>
              <ExampleRow>
                <FinnishCell>
                  Todisteiden perusteella syytetty on syyllinen.
                </FinnishCell>
                <EnglishCell>
                  On the basis of evidence, the accused is guilty.
                </EnglishCell>
              </ExampleRow>
              <ExampleRow>
                <FinnishCell>
                  Tutkimuksen perusteella lääke on turvallinen.
                </FinnishCell>
                <EnglishCell>
                  On the basis of research, the medicine is safe.
                </EnglishCell>
              </ExampleRow>
              <ExampleRow>
                <FinnishCell>Kokemuksen perusteella suosittelen.</FinnishCell>
                <EnglishCell>
                  On the basis of experience, I recommend.
                </EnglishCell>
              </ExampleRow>
            </tbody>
          </ExampleTable>
        </PostpositionSection>
      </CategorySection>

      {/* ⏳ 3. Time and Sequence */}
      <CategorySection>
        <CategoryHeader>Time and Sequence</CategoryHeader>
        <CategoryDescription>
          These refer to time in abstract or relational ways — like{" "}
          <em>after, before, during, over (the years)</em>.
        </CategoryDescription>

        {/* Jälkeen */}
        <PostpositionSection>
          <PostpositionHeader>Jälkeen</PostpositionHeader>
          <UsageText>Case: Genitive | Meaning: after</UsageText>
          <ExampleTable>
            <thead>
              <tr>
                <th>Example</th>
                <th>Translation</th>
              </tr>
            </thead>
            <tbody>
              <ExampleRow>
                <FinnishCell>Kesän jälkeen tulee syksy.</FinnishCell>
                <EnglishCell>After summer comes autumn.</EnglishCell>
              </ExampleRow>
              <ExampleRow>
                <FinnishCell>Työn jälkeen menen kotiin.</FinnishCell>
                <EnglishCell>After work I go home.</EnglishCell>
              </ExampleRow>
              <ExampleRow>
                <FinnishCell>Ruokailun jälkeen kävelimme.</FinnishCell>
                <EnglishCell>After the meal we walked.</EnglishCell>
              </ExampleRow>
            </tbody>
          </ExampleTable>
        </PostpositionSection>

        {/* Ennen */}
        <PostpositionSection>
          <PostpositionHeader>Ennen</PostpositionHeader>
          <UsageText>Case: Partitive | Meaning: before</UsageText>
          <ExampleTable>
            <thead>
              <tr>
                <th>Example</th>
                <th>Translation</th>
              </tr>
            </thead>
            <tbody>
              <ExampleRow>
                <FinnishCell>Ennen joulua on paljon valmisteluja.</FinnishCell>
                <EnglishCell>
                  Before Christmas there are many preparations.
                </EnglishCell>
              </ExampleRow>
              <ExampleRow>
                <FinnishCell>Ennen keskiyötä olin kotona.</FinnishCell>
                <EnglishCell>Before midnight I was at home.</EnglishCell>
              </ExampleRow>
              <ExampleRow>
                <FinnishCell>Ennen tuntia kerään tavarani.</FinnishCell>
                <EnglishCell>
                  Before the hour I&apos;ll gather my things.
                </EnglishCell>
              </ExampleRow>
            </tbody>
          </ExampleTable>
        </PostpositionSection>

        {/* Aikana */}
        <PostpositionSection>
          <PostpositionHeader>Aikana</PostpositionHeader>
          <UsageText>Case: Genitive | Meaning: during</UsageText>
          <ExampleTable>
            <thead>
              <tr>
                <th>Example</th>
                <th>Translation</th>
              </tr>
            </thead>
            <tbody>
              <ExampleRow>
                <FinnishCell>Loman aikana levähdin.</FinnishCell>
                <EnglishCell>During the vacation I rested.</EnglishCell>
              </ExampleRow>
              <ExampleRow>
                <FinnishCell>Kesän aikana matkustamme.</FinnishCell>
                <EnglishCell>During the summer we travel.</EnglishCell>
              </ExampleRow>
              <ExampleRow>
                <FinnishCell>Päivän aikana sataa usein.</FinnishCell>
                <EnglishCell>During the day it often rains.</EnglishCell>
              </ExampleRow>
            </tbody>
          </ExampleTable>
        </PostpositionSection>

        {/* Varrella */}
        <PostpositionSection>
          <PostpositionHeader>Varrella</PostpositionHeader>
          <UsageText>
            Case: Genitive | Meaning: over (a period of time)
          </UsageText>
          <ExampleTable>
            <thead>
              <tr>
                <th>Example</th>
                <th>Translation</th>
              </tr>
            </thead>
            <tbody>
              <ExampleRow>
                <FinnishCell>Vuosien varrella olen oppinut paljon.</FinnishCell>
                <EnglishCell>Over the years I have learned a lot.</EnglishCell>
              </ExampleRow>
              <ExampleRow>
                <FinnishCell>Ikävuosien varrella maku muuttuu.</FinnishCell>
                <EnglishCell>Over the years of age, taste changes.</EnglishCell>
              </ExampleRow>
              <ExampleRow>
                <FinnishCell>
                  Vuosisatojen varrella kaupunki on kasvanut.
                </FinnishCell>
                <EnglishCell>
                  Over the centuries the city has grown.
                </EnglishCell>
              </ExampleRow>
            </tbody>
          </ExampleTable>
        </PostpositionSection>
      </CategorySection>

      {/* 🧍 4. Association / Companionship */}
      <CategorySection>
        <CategoryHeader> Association / Companionship</CategoryHeader>
        <CategoryDescription>
          Expresses being together or in company with someone or something.
        </CategoryDescription>

        {/* Kanssa */}
        <PostpositionSection>
          <PostpositionHeader>Kanssa</PostpositionHeader>
          <UsageText>Case: Genitive | Meaning: with</UsageText>
          <ExampleTable>
            <thead>
              <tr>
                <th>Example</th>
                <th>Translation</th>
              </tr>
            </thead>
            <tbody>
              <ExampleRow>
                <FinnishCell>Olen ystävän kanssa.</FinnishCell>
                <EnglishCell>I am with a friend.</EnglishCell>
              </ExampleRow>
              <ExampleRow>
                <FinnishCell>Puhuin opettajan kanssa.</FinnishCell>
                <EnglishCell>I spoke with the teacher.</EnglishCell>
              </ExampleRow>
              <ExampleRow>
                <FinnishCell>Tulen perheeni kanssa.</FinnishCell>
                <EnglishCell>I&apos;ll come with my family.</EnglishCell>
              </ExampleRow>
            </tbody>
          </ExampleTable>
        </PostpositionSection>

        {/* Luona */}
        <PostpositionSection>
          <PostpositionHeader>Luona</PostpositionHeader>
          <UsageText>
            Case: Genitive | Meaning: at someone&apos;s place / with
          </UsageText>
          <ExampleTable>
            <thead>
              <tr>
                <th>Example</th>
                <th>Translation</th>
              </tr>
            </thead>
            <tbody>
              <ExampleRow>
                <FinnishCell>Olin ystävän luona.</FinnishCell>
                <EnglishCell>I was at a friend&apos;s place.</EnglishCell>
              </ExampleRow>
              <ExampleRow>
                <FinnishCell>Tapasimme aseman luona.</FinnishCell>
                <EnglishCell>We met at the station.</EnglishCell>
              </ExampleRow>
              <ExampleRow>
                <FinnishCell>Lapsi leikki naapurin luona.</FinnishCell>
                <EnglishCell>
                  The child played at the neighbor&apos;s.
                </EnglishCell>
              </ExampleRow>
            </tbody>
          </ExampleTable>
        </PostpositionSection>
      </CategorySection>

      {/* ⚖️ 5. Extent / Quantity / Comparison */}
      <CategorySection>
        <CategoryHeader>Extent / Quantity / Comparison</CategoryHeader>
        <CategoryDescription>
          Used for approximate amounts or degrees.
        </CategoryDescription>

        {/* Verran */}
        <PostpositionSection>
          <PostpositionHeader>Verran</PostpositionHeader>
          <UsageText>
            Case: Partitive/Genitive | Meaning: about, as much as
          </UsageText>
          <ExampleTable>
            <thead>
              <tr>
                <th>Example</th>
                <th>Translation</th>
              </tr>
            </thead>
            <tbody>
              <ExampleRow>
                <FinnishCell>Odotin tunnin verran.</FinnishCell>
                <EnglishCell>I waited for about an hour.</EnglishCell>
              </ExampleRow>
              <ExampleRow>
                <FinnishCell>Ostan kilon verran omenoita.</FinnishCell>
                <EnglishCell>
                  I&apos;ll buy about a kilogram of apples.
                </EnglishCell>
              </ExampleRow>
              <ExampleRow>
                <FinnishCell>Hän on minua pään verran pidempi.</FinnishCell>
                <EnglishCell>He is about a head taller than me.</EnglishCell>
              </ExampleRow>
            </tbody>
          </ExampleTable>
        </PostpositionSection>

        {/* Asti / Saakka */}
        <PostpositionSection>
          <PostpositionHeader>Asti / Saakka</PostpositionHeader>
          <UsageText>Case: Allative/Illative | Meaning: until, up to</UsageText>
          <ExampleTable>
            <thead>
              <tr>
                <th>Example</th>
                <th>Translation</th>
              </tr>
            </thead>
            <tbody>
              <ExampleRow>
                <FinnishCell>Olin hereillä aamuun asti.</FinnishCell>
                <EnglishCell>I was awake until morning.</EnglishCell>
              </ExampleRow>
              <ExampleRow>
                <FinnishCell>Työskentelin iltaan saakka.</FinnishCell>
                <EnglishCell>I worked until evening.</EnglishCell>
              </ExampleRow>
              <ExampleRow>
                <FinnishCell>Matka jatkuu Helsinkiin saakka.</FinnishCell>
                <EnglishCell>The journey continues up to Helsinki.</EnglishCell>
              </ExampleRow>
            </tbody>
          </ExampleTable>
        </PostpositionSection>
      </CategorySection>
    </Container>
  );
};

export default AbstractPostpositions;
