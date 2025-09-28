"use client";

import {
  Container,
  Header,
  Title,
  Subtitle,
  Section,
  SectionTitle,
  SectionDescription,
  CategoryGrid,
  CategoryCard,
  ExampleFinnish,
  ExampleEnglish,
  ExampleTranslation,
  UsageNote,
  BusinessTable,
  TableHeader,
  TableCell,
  TableRow,
  DifficultyBadge,
} from "./BusinessFinnish.styles";

// Business Finnish categories and examples
const businessCategories = [
  {
    title: "Meetings & Presentations",
    description:
      "Essential phrases for professional meetings and presentations",
    difficulty: "Intermediate",
    examples: [
      {
        finnish: "Aloitetaan kokous",
        english: "Let's start the meeting",
        context: "Starting a business meeting",
        notes: "Formal opening for meetings",
      },
      {
        finnish: "Siirrytään seuraavaan kohtaan",
        english: "Let's move to the next item",
        context: "Transitioning between agenda items",
        notes: "Professional transition phrase",
      },
      {
        finnish: "Haluaisin esitellä lyhyesti",
        english: "I'd like to briefly present",
        context: "Beginning a presentation",
        notes: "Polite way to start presenting",
      },
      {
        finnish: "Onko kysyttävää?",
        english: "Are there any questions?",
        context: "After presentation",
        notes: "Standard way to invite questions",
      },
      {
        finnish: "Palaan asiaan myöhemmin",
        english: "I'll come back to this later",
        context: "Deferring discussion",
        notes: "Useful for time management",
      },
      {
        finnish: "Olen samaa mieltä",
        english: "I agree",
        context: "Expressing agreement",
        notes: "Formal agreement expression",
      },
      {
        finnish: "En ole ihan varma",
        english: "I'm not quite sure",
        context: "Expressing uncertainty",
        notes: "Polite way to show hesitation",
      },
      {
        finnish: "Voimmeko tiivistää pääkohdat?",
        english: "Can we summarize the main points?",
        context: "Meeting conclusion",
        notes: "Useful for wrapping up",
      },
      {
        finnish: "Aikataulu on tiukka",
        english: "The schedule is tight",
        context: "Discussing deadlines",
        notes: "Managing expectations",
      },
      {
        finnish: "Tarvitsemme lisää aikaa",
        english: "We need more time",
        context: "Requesting extension",
        notes: "Professional delay request",
      },
      {
        finnish: "Mitä ajattelitte aikataulusta?",
        english: "What were you thinking about the schedule?",
        context: "Seeking input",
        notes: "Collaborative planning",
      },
      {
        finnish: "Esitän seuraavan kohdan",
        english: "I'll present the next item",
        context: "Presentation flow",
        notes: "Smooth transition",
      },
      {
        finnish: "Onko kaikilla sama dokumentti?",
        english: "Does everyone have the same document?",
        context: "Meeting preparation",
        notes: "Ensuring alignment",
      },
      {
        finnish: "Voimme siirtyä seuraavaan vaiheeseen",
        english: "We can move to the next phase",
        context: "Project progression",
        notes: "Forward movement",
      },
      {
        finnish: "Kiitos osallistumisestanne",
        english: "Thank you for your participation",
        context: "Meeting closing",
        notes: "Professional closing remark",
      },
      {
        finnish: "Päätetään tähän tältä päivältä",
        english: "Let's conclude for today",
        context: "Ending meeting",
        notes: "Formal meeting end",
      },
    ],
  },
  {
    title: "Email & Correspondence",
    description: "Professional email phrases and business correspondence",
    difficulty: "Intermediate",
    examples: [
      {
        finnish: "Vastaan teille mahdollisimman pian",
        english: "I will get back to you as soon as possible",
        context: "Email response",
        notes: "Professional response time indication",
      },
      {
        finnish: "Liitteenä lähetän",
        english: "I'm sending as an attachment",
        context: "Email with attachments",
        notes: "Standard phrase for attachments",
      },
      {
        finnish: "Odotan teidän vastaustanne",
        english: "I await your response",
        context: "Following up",
        notes: "Polite follow-up phrase",
      },
      {
        finnish: "Ystävällisin terveisin",
        english: "Best regards",
        context: "Email closing",
        notes: "Standard formal closing",
      },
      {
        finnish: "Pyydän teitä ottamaan yhteyttä",
        english: "Please contact me",
        context: "Requesting contact",
        notes: "Polite contact request",
      },
      {
        finnish: "Kiitos nopeasta vastauksestanne",
        english: "Thank you for your quick response",
        context: "Acknowledging response",
        notes: "Professional gratitude expression",
      },
      {
        finnish: "Vahvistan vastaanottaneeni viestinne",
        english: "I confirm I have received your message",
        context: "Email confirmation",
        notes: "Formal receipt acknowledgment",
      },
      {
        finnish: "Palaan asiaan huomenna",
        english: "I will get back to this tomorrow",
        context: "Setting expectations",
        notes: "Clear timeline communication",
      },
      {
        finnish: "Saatte tiedotteen erikseen",
        english: "You will receive the information separately",
        context: "Information distribution",
        notes: "Managing information flow",
      },
      {
        finnish: "Olisiko teille sopiva aika...",
        english: "Would this be a suitable time for you...",
        context: "Scheduling",
        notes: "Polite scheduling request",
      },
      {
        finnish: "Toivon teille mukavaa viikonloppua",
        english: "I wish you a nice weekend",
        context: "Friday emails",
        notes: "Friendly professional closing",
      },
      {
        finnish: "Pidätän oikeuden muutoksiin",
        english: "I reserve the right to make changes",
        context: "Formal communications",
        notes: "Legal protection phrase",
      },
      {
        finnish: "Viesti on luottamuksellinen",
        english: "The message is confidential",
        context: "Sensitive information",
        notes: "Privacy notice",
      },
      {
        finnish: "Liitteenä saatte tarjouspyynnön",
        english: "You will find the request for quotation attached",
        context: "Business proposals",
        notes: "Formal attachment description",
      },
      {
        finnish: "Olen liittänyt dokumentin sähköpostiin",
        english: "I have attached the document to the email",
        context: "Document sharing",
        notes: "Clear attachment mention",
      },
      {
        finnish: "Pysykäämme yhteydessä",
        english: "Let's stay in touch",
        context: "Ongoing communication",
        notes: "Professional relationship building",
      },
    ],
  },
  {
    title: "Negotiations & Deals",
    description: "Phrases for business negotiations and closing deals",
    difficulty: "Advanced",
    examples: [
      {
        finnish: "Voimmeko neuvotella hinnasta?",
        english: "Can we negotiate the price?",
        context: "Price negotiations",
        notes: "Direct but professional negotiation start",
      },
      {
        finnish: "Tarvitsemme paremmat ehdot",
        english: "We need better terms",
        context: "Contract negotiations",
        notes: "Clear statement of requirements",
      },
      {
        finnish: "Sopimus on valmis allekirjoitettavaksi",
        english: "The contract is ready for signing",
        context: "Closing a deal",
        notes: "Final step in negotiations",
      },
      {
        finnish: "Tämä on aloitustarjouksemme",
        english: "This is our initial offer",
        context: "Making an offer",
        notes: "Clear indication of starting position",
      },
      {
        finnish: "Voimme tarjota alennusta",
        english: "We can offer a discount",
        context: "Price discussion",
        notes: "Flexibility in pricing",
      },
      {
        finnish: "Sopiaanko näistä ehdoista?",
        english: "Do we agree on these terms?",
        context: "Confirming agreement",
        notes: "Final confirmation before closing",
      },
      {
        finnish: "Mitä mieltä olette ehdotuksestamme?",
        english: "What do you think about our proposal?",
        context: "Seeking feedback",
        notes: "Collaborative negotiation approach",
      },
      {
        finnish: "Voimme joustaa tässä kohdassa",
        english: "We can be flexible on this point",
        context: "Showing flexibility",
        notes: "Strategic concession",
      },
      {
        finnish: "Tämä on meidän viimeinen tarjouksemme",
        english: "This is our final offer",
        context: "Final negotiations",
        notes: "Setting boundaries",
      },
      {
        finnish: "Sopimus kattaa seuraavat kohdat",
        english: "The contract covers the following points",
        context: "Contract review",
        notes: "Clear scope definition",
      },
      {
        finnish: "Tarvitsemme pidemmän takaisinmaksuajan",
        english: "We need a longer payment term",
        context: "Payment negotiations",
        notes: "Financial term discussion",
      },
      {
        finnish: "Mitä takuuta tarjoatte?",
        english: "What warranty do you offer?",
        context: "Product negotiations",
        notes: "Quality assurance discussion",
      },
      {
        finnish: "Voimmeko sopia koekäyttöajasta?",
        english: "Can we agree on a trial period?",
        context: "Service agreements",
        notes: "Risk mitigation strategy",
      },
      {
        finnish: "Hinta sisältää kaikki verot",
        english: "The price includes all taxes",
        context: "Price clarification",
        notes: "Transparent pricing",
      },
      {
        finnish: "Sopimus on voimassa yhden vuoden",
        english: "The contract is valid for one year",
        context: "Contract duration",
        notes: "Clear timeline setting",
      },
      {
        finnish: "Allekirjoitetaanko sopimus nyt?",
        english: "Shall we sign the contract now?",
        context: "Closing the deal",
        notes: "Final step invitation",
      },
    ],
  },
  {
    title: "Customer Service",
    description: "Professional customer service phrases",
    difficulty: "Intermediate",
    examples: [
      {
        finnish: "Kuinka voimme auttaa?",
        english: "How can we help?",
        context: "Customer inquiry",
        notes: "Standard customer service opening",
      },
      {
        finnish: "Pahoittelen tilannetta",
        english: "I apologize for the situation",
        context: "Handling complaints",
        notes: "Professional apology",
      },
      {
        finnish: "Korjaamme virheen välittömästi",
        english: "We will fix the error immediately",
        context: "Problem resolution",
        notes: "Taking responsibility and action",
      },
      {
        finnish: "Kiitos kärsivällisyydestänne",
        english: "Thank you for your patience",
        context: "During delays",
        notes: "Acknowledging customer's patience",
      },
      {
        finnish: "Palvelemme teitä mielellämme",
        english: "We are happy to serve you",
        context: "General customer service",
        notes: "Positive service attitude",
      },
      {
        finnish: "Toimituksen pitäisi saapua huomenna",
        english: "The delivery should arrive tomorrow",
        context: "Providing updates",
        notes: "Clear timeline information",
      },
      {
        finnish: "Voinko tarjota jotain muuta?",
        english: "Can I offer you something else?",
        context: "Additional assistance",
        notes: "Proactive service approach",
      },
      {
        finnish: "Ymmärrän täysin huolenne",
        english: "I fully understand your concern",
        context: "Empathizing with customers",
        notes: "Building customer rapport",
      },
      {
        finnish: "Tarkistan asian heti",
        english: "I will check this immediately",
        context: "Information verification",
        notes: "Quick response promise",
      },
      {
        finnish: "Palaan asiaan viiden minuutin kuluttua",
        english: "I will get back to you in five minutes",
        context: "Short follow-up",
        notes: "Specific timeline commitment",
      },
      {
        finnish: "Oletteko tyytyväisiä ratkaisuun?",
        english: "Are you satisfied with the solution?",
        context: "Quality check",
        notes: "Ensuring customer satisfaction",
      },
      {
        finnish: "Voimme korvata tuotteen",
        english: "We can replace the product",
        context: "Returns and exchanges",
        notes: "Problem resolution offer",
      },
      {
        finnish: "Saatte hyvityksen seuraavassa laskussa",
        english: "You will receive a credit on your next invoice",
        context: "Financial compensation",
        notes: "Clear compensation information",
      },
      {
        finnish: "Osoittakaa henkilöllisyys",
        english: "Please show your identification",
        context: "Security procedures",
        notes: "Standard security request",
      },
      {
        finnish: "Tarvitsetteko apua asiakirjojen kanssa?",
        english: "Do you need help with the documents?",
        context: "Document assistance",
        notes: "Proactive support offer",
      },
      {
        finnish: "Toivottavasti palvelimme teitä hyvin",
        english: "We hope we served you well",
        context: "Service conclusion",
        notes: "Professional closing",
      },
    ],
  },
  {
    title: "Phone Communication",
    description: "Professional phone etiquette and phrases",
    difficulty: "Intermediate",
    examples: [
      {
        finnish: "Hei, täällä puhuu [Nimi]",
        english: "Hello, this is [Name] speaking",
        context: "Phone introduction",
        notes: "Professional phone greeting",
      },
      {
        finnish: "Voinko olla jotenkin avuksi?",
        english: "How can I help you?",
        context: "Phone assistance",
        notes: "Standard assistance offer",
      },
      {
        finnish: "Voin yhdistää teitä",
        english: "I can connect you",
        context: "Transferring calls",
        notes: "Professional call transfer",
      },
      {
        finnish: "Soitan teille takaisin",
        english: "I will call you back",
        context: "Follow-up calls",
        notes: "Promise to return call",
      },
      {
        finnish: "Kuulenko hyvin?",
        english: "Can you hear me well?",
        context: "Technical issues",
        notes: "Checking call quality",
      },
      {
        finnish: "Hetkinen, yhdistän",
        english: "One moment, I'm connecting you",
        context: "Call transfer process",
        notes: "Professional transfer phrase",
      },
      {
        finnish: "Valitettavasti hän on poissa",
        english: "Unfortunately, he/she is away",
        context: "Unavailable contacts",
        notes: "Professional unavailable message",
      },
      {
        finnish: "Voinko ottaa viestin?",
        english: "Can I take a message?",
        context: "Message taking",
        notes: "Standard message offer",
      },
      {
        finnish: "Toistan puhelinnumeron",
        english: "I'll repeat the phone number",
        context: "Information confirmation",
        notes: "Ensuring accuracy",
      },
      {
        finnish: "Soitan teille huomenna uudelleen",
        english: "I will call you again tomorrow",
        context: "Follow-up planning",
        notes: "Clear follow-up commitment",
      },
      {
        finnish: "Oletteko vielä linjalla?",
        english: "Are you still on the line?",
        context: "Connection check",
        notes: "Verifying call continuity",
      },
      {
        finnish: "Kiitos yhteydenotostanne",
        english: "Thank you for contacting us",
        context: "Call opening",
        notes: "Professional greeting",
      },
      {
        finnish: "Voimmeko keskustella lyhyesti?",
        english: "Can we talk briefly?",
        context: "Time management",
        notes: "Respectful time check",
      },
      {
        finnish: "Puhun hitaammin",
        english: "I'll speak more slowly",
        context: "Clear communication",
        notes: "Accommodating listener",
      },
      {
        finnish: "Toivottavasti autoin teitä",
        english: "I hope I helped you",
        context: "Call closing",
        notes: "Professional closing",
      },
      {
        finnish: "Näkemiin ja hyvää päivänjatkoa",
        english: "Goodbye and have a nice day",
        context: "Call ending",
        notes: "Polite farewell",
      },
    ],
  },
  {
    title: "Networking & Social",
    description: "Phrases for business networking and social situations",
    difficulty: "Intermediate",
    examples: [
      {
        finnish: "Hauska tavata",
        english: "Nice to meet you",
        context: "First meeting",
        notes: "Standard professional greeting",
      },
      {
        finnish: "Mitä mieltä olette...?",
        english: "What is your opinion about...?",
        context: "Seeking opinions",
        notes: "Professional way to ask for input",
      },
      {
        finnish: "Voimmeko puhua asiasta myöhemmin?",
        english: "Can we discuss this later?",
        context: "Deferring conversation",
        notes: "Polite way to postpone discussion",
      },
      {
        finnish: "Kiitos yhteistyöstä",
        english: "Thank you for the cooperation",
        context: "Ending collaboration",
        notes: "Professional gratitude",
      },
      {
        finnish: "Toivottavasti näemme pian",
        english: "Hope to see you soon",
        context: "Farewell",
        notes: "Professional closing remark",
      },
      {
        finnish: "Miten menee?",
        english: "How are things going?",
        context: "Casual business greeting",
        notes: "Friendly professional opening",
      },
      {
        finnish: "Oletko koskaan käynyt...?",
        english: "Have you ever been to...?",
        context: "Small talk",
        notes: "Networking conversation starter",
      },
      {
        finnish: "Mitä kuuluu työprojekteihin?",
        english: "How are the work projects going?",
        context: "Professional small talk",
        notes: "Business-focused conversation",
      },
      {
        finnish: "Voisimme sopia tapaamisesta",
        english: "We could arrange a meeting",
        context: "Follow-up planning",
        notes: "Professional relationship building",
      },
      {
        finnish: "Olisiko teillä aikaa kahville?",
        english: "Would you have time for coffee?",
        context: "Informal meeting request",
        notes: "Casual business invitation",
      },
      {
        finnish: "Kiitos mielenkiintoisesta keskustelusta",
        english: "Thank you for the interesting conversation",
        context: "Ending discussion",
        notes: "Professional appreciation",
      },
      {
        finnish: "Pidän työstänne paljon",
        english: "I really like your work",
        context: "Giving compliments",
        notes: "Professional praise",
      },
      {
        finnish: "Voimmeko vaihtaa yhteystietoja?",
        english: "Can we exchange contact information?",
        context: "Networking",
        notes: "Professional contact exchange",
      },
      {
        finnish: "Mukavaa viikonloppua",
        english: "Have a nice weekend",
        context: "Friday farewell",
        notes: "Friendly professional closing",
      },
      {
        finnish: "Nähdään seuraavassa tapaamisessa",
        english: "See you in the next meeting",
        context: "Future plans",
        notes: "Professional forward-looking",
      },
      {
        finnish: "Pysykäämme yhteydessä",
        english: "Let's stay in touch",
        context: "Ongoing relationship",
        notes: "Professional networking closure",
      },
    ],
  },
];

const BusinessFinnish = () => {
  return (
    <Container>
      <Header>
        <Title>Business Finnish</Title>
        <Subtitle>
          Master professional Finnish for business meetings, emails,
          negotiations, customer service, and networking
        </Subtitle>
      </Header>

      {businessCategories.map((category, index) => (
        <Section key={index}>
          <SectionTitle>
            {category.title}
            <DifficultyBadge $level={category.difficulty.toLowerCase()}>
              {category.difficulty}
            </DifficultyBadge>
          </SectionTitle>
          <SectionDescription>{category.description}</SectionDescription>

          {/* Mobile Card View */}
          <CategoryGrid>
            {category.examples.map((example, idx) => (
              <CategoryCard key={idx}>
                <ExampleFinnish>{example.finnish}</ExampleFinnish>
                <ExampleEnglish>{example.english}</ExampleEnglish>
                <ExampleTranslation>{example.context}</ExampleTranslation>
                <UsageNote>{example.notes}</UsageNote>
              </CategoryCard>
            ))}
          </CategoryGrid>

          {/* Desktop Table View */}
          <BusinessTable>
            <thead>
              <tr>
                <TableHeader>Finnish Phrase</TableHeader>
                <TableHeader>English Translation</TableHeader>
                <TableHeader>Context</TableHeader>
                <TableHeader>Usage Notes</TableHeader>
              </tr>
            </thead>
            <tbody>
              {category.examples.map((example, idx) => (
                <TableRow key={idx}>
                  <TableCell $emphasis>{example.finnish}</TableCell>
                  <TableCell>{example.english}</TableCell>
                  <TableCell>{example.context}</TableCell>
                  <TableCell>
                    <UsageNote>{example.notes}</UsageNote>
                  </TableCell>
                </TableRow>
              ))}
            </tbody>
          </BusinessTable>
        </Section>
      ))}
    </Container>
  );
};

export default BusinessFinnish;
