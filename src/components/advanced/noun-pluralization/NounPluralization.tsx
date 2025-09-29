// "use client";

// import { useState, FormEvent } from "react";
// import {
//   Button,
//   CardLabel,
//   CardRow,
//   CardValue,
//   Container,
//   ContentContainer,
//   ErrorMessage,
//   ExampleCard,
//   ExampleCardsContainer,
//   ExampleSentence,
//   ExampleTable,
//   Form,
//   FormLabel,
//   Header,
//   Input,
//   InputContainer,
//   LoadingContainer,
//   PracticeContainer,
//   PracticeTitle,
//   ResultContainer,
//   ResultItem,
//   ResultLabel,
//   ResultTitle,
//   ResultValue,
//   RuleDescription,
//   RuleTitle,
//   Subtitle,
//   SuccessMessage,
//   TableCell,
//   TableHeader,
//   Title,
//   UsageExplanation,
// } from "./NounPluralization.styles";

// export interface NounPluralization {
//   singular: string;
//   singularStem: string;
//   pluralStem: string;
//   inessive: string;
//   adessive: string;
//   rule: string;
//   english: string;
//   exampleSentence: string;
//   exampleTranslation: string;
// }

// export interface PluralizationRule {
//   name: string;
//   description: string;
//   examples: NounPluralization[];
// }

// // API response interface
// export interface ApiNounResponse {
//   noun?: string;
//   english?: string;
//   pluralization?: NounPluralization;
//   notes?: string;
//   isFinnishInput?: boolean;
// }

// // Data for noun pluralization rules
// const pluralizationRules: PluralizationRule[] = [
//   {
//     name: "Basic i-addition",
//     description: "For words ending in o, ö, u, y - simply add i",
//     examples: [
//       {
//         singular: "koulu",
//         singularStem: "koulu-",
//         pluralStem: "koului-",
//         inessive: "kouluissa",
//         adessive: "kouluilla",
//         rule: "o, ö, u, y pysyvät + i",
//         english: "school",
//         exampleSentence: "Kouluissa on paljon oppilaita.",
//         exampleTranslation: "There are many students in the schools.",
//       },
//       {
//         singular: "talo",
//         singularStem: "talo-",
//         pluralStem: "taloi-",
//         inessive: "taloissa",
//         adessive: "taloilla",
//         rule: "o, ö, u, y pysyvät + i",
//         english: "house",
//         exampleSentence: "Taloissa on kauniit puutarhat.",
//         exampleTranslation: "The houses have beautiful gardens.",
//       },
//       {
//         singular: "sänky",
//         singularStem: "sängy-",
//         pluralStem: "sängyi-",
//         inessive: "sängyissä",
//         adessive: "sängyillä",
//         rule: "o, ö, u, y pysyvät + i",
//         english: "bed",
//         exampleSentence: "Sängyissä on pehmeät tyynyt.",
//         exampleTranslation: "The beds have soft pillows.",
//       },
//     ],
//   },
//   {
//     name: "Vowel removal + i",
//     description:
//       "For words ending in a, ä, e - remove the final vowel and add i",
//     examples: [
//       {
//         singular: "juna",
//         singularStem: "juna-",
//         pluralStem: "juni-",
//         inessive: "junissa",
//         adessive: "junilla",
//         rule: "a, ä, e otetaan pois + i",
//         english: "train",
//         exampleSentence: "Junissa on usein täyttä.",
//         exampleTranslation: "The trains are often full.",
//       },
//       {
//         singular: "kylä",
//         singularStem: "kylä-",
//         pluralStem: "kyli-",
//         inessive: "kylissä",
//         adessive: "kylillä",
//         rule: "a, ä, e otetaan pois + i",
//         english: "village",
//         exampleSentence: "Kylissä järjestetään kesäjuhlia.",
//         exampleTranslation: "Summer festivals are organized in the villages.",
//       },
//       {
//         singular: "ovi",
//         singularStem: "ove-",
//         pluralStem: "ovi-",
//         inessive: "ovissa",
//         adessive: "ovilla",
//         rule: "a, ä, e otetaan pois + i",
//         english: "door",
//         exampleSentence: "Ovissa on vahvat lukot.",
//         exampleTranslation: "The doors have strong locks.",
//       },
//     ],
//   },
//   {
//     name: "a → oi transformation",
//     description: "For two-syllable words with a, i or e in the first syllable",
//     examples: [
//       {
//         singular: "kissa",
//         singularStem: "kissa-",
//         pluralStem: "kissoi-",
//         inessive: "kissoissa",
//         adessive: "kissoilla",
//         rule: "a → oi (kaksi tavua, ensimmäinen tavu a, i tai e)",
//         english: "cat",
//         exampleSentence: "Kissoilla on terävät kynnet.",
//         exampleTranslation: "The cats have sharp claws.",
//       },
//       {
//         singular: "herra",
//         singularStem: "herra-",
//         pluralStem: "herroi-",
//         inessive: "herroissa",
//         adessive: "herroilla",
//         rule: "a → oi (kaksi tavua, ensimmäinen tavu a, i tai e)",
//         english: "gentleman",
//         exampleSentence: "Herroilla on hienot puvut.",
//         exampleTranslation: "The gentlemen have fine suits.",
//       },
//       {
//         singular: "kana",
//         singularStem: "kana-",
//         pluralStem: "kanoi-",
//         inessive: "kanoissa",
//         adessive: "kanoilla",
//         rule: "a → oi (kaksi tavua, ensimmäinen tavu a, i tai e)",
//         english: "chicken",
//         exampleSentence: "Kanoilla on siivet, mutta ne eivät lennä korkealle.",
//         exampleTranslation: "Chickens have wings, but they don't fly high.",
//       },
//     ],
//   },
//   {
//     name: "Double vowel reduction",
//     description: "For words with two vowels - remove the first vowel and add i",
//     examples: [
//       {
//         singular: "puu",
//         singularStem: "puu-",
//         pluralStem: "pui-",
//         inessive: "puissa",
//         adessive: "puilla",
//         rule: "2 vokaalia, otetaan ensimmäinen pois + i",
//         english: "tree",
//         exampleSentence: "Puissa pesii lintuja.",
//         exampleTranslation: "Birds nest in the trees.",
//       },
//       {
//         singular: "työ",
//         singularStem: "työ-",
//         pluralStem: "töi-",
//         inessive: "töissä",
//         adessive: "töillä",
//         rule: "2 vokaalia, otetaan ensimmäinen pois + i",
//         english: "work",
//         exampleSentence: "Töissä pitää olla ajoissa.",
//         exampleTranslation: "You need to be on time at work.",
//       },
//       {
//         singular: "perhe",
//         singularStem: "perhee-",
//         pluralStem: "perhei-",
//         inessive: "perheissä",
//         adessive: "perheillä",
//         rule: "2 vokaalia, otetaan ensimmäinen pois + i",
//         english: "family",
//         exampleSentence: "Perheillä on erilaisia traditioita.",
//         exampleTranslation: "Families have different traditions.",
//       },
//     ],
//   },
//   {
//     name: "Loanwords with i → ei",
//     description: "For loanwords ending in i, change to ei",
//     examples: [
//       {
//         singular: "bussi",
//         singularStem: "bussi-",
//         pluralStem: "bussei-",
//         inessive: "busseissa",
//         adessive: "busseilla",
//         rule: "i → ei (lainasanat)",
//         english: "bus",
//         exampleSentence: "Busseissa on ilmastointi.",
//         exampleTranslation: "The buses have air conditioning.",
//       },
//       {
//         singular: "hotelli",
//         singularStem: "hotelli-",
//         pluralStem: "hotellei-",
//         inessive: "hotelleissa",
//         adessive: "hotelleilla",
//         rule: "i → ei (lainasanat)",
//         english: "hotel",
//         exampleSentence: "Hotelleissa on uima-altaita.",
//         exampleTranslation: "The hotels have swimming pools.",
//       },
//       {
//         singular: "pankki",
//         singularStem: "panki-",
//         pluralStem: "pankei-",
//         inessive: "pankeissa",
//         adessive: "pankeilla",
//         rule: "i → ei (lainasanat)",
//         english: "bank",
//         exampleSentence: "Pankeissa on turvajärjestelmät.",
//         exampleTranslation: "The banks have security systems.",
//       },
//     ],
//   },
//   {
//     name: "Special cases: si remains",
//     description: "Words like käsi and uusi keep si in plural stem",
//     examples: [
//       {
//         singular: "käsi",
//         singularStem: "käde-",
//         pluralStem: "käsi-",
//         inessive: "käsissä",
//         adessive: "käsillä",
//         rule: "si → si",
//         english: "hand",
//         exampleSentence: "Käsissä on sormet.",
//         exampleTranslation: "There are fingers on the hands.",
//       },
//       {
//         singular: "uusi",
//         singularStem: "uude-",
//         pluralStem: "uusi-",
//         inessive: "uusissa",
//         adessive: "uusilla",
//         rule: "si → si",
//         english: "new",
//         exampleSentence: "Uusissa autoissa on monia ominaisuuksia.",
//         exampleTranslation: "The new cars have many features.",
//       },
//     ],
//   },
//   {
//     name: "Long words with a/ä → oi/öi",
//     description:
//       "Words ending in la/lä, na/nä, ra/rä, ija/ijä remove a/ä and add oi/öi",
//     examples: [
//       {
//         singular: "ravintola",
//         singularStem: "ravintola-",
//         pluralStem: "ravintoloi-",
//         inessive: "ravintoloissa",
//         adessive: "ravintoloilla",
//         rule: "la/lä, na/nä, ra/rä, ija/ijä: otetaan a/ä pois + oi/öi",
//         english: "restaurant",
//         exampleSentence: "Ravintoloissa tarjoillaan herkullista ruokaa.",
//         exampleTranslation: "Delicious food is served in the restaurants.",
//       },
//       {
//         singular: "porkkana",
//         singularStem: "porkkana-",
//         pluralStem: "porkkanoi-",
//         inessive: "porkkanoissa",
//         adessive: "porkkanoilla",
//         rule: "la/lä, na/nä, ra/rä, ija/ijä: otetaan a/ä pois + oi/öi",
//         english: "carrot",
//         exampleSentence: "Porkkanoissa on paljon A-vitamiinia.",
//         exampleTranslation: "Carrots contain a lot of vitamin A.",
//       },
//       {
//         singular: "opiskelija",
//         singularStem: "opiskelija-",
//         pluralStem: "opiskelijoi-",
//         inessive: "opiskelijoissa",
//         adessive: "opiskelijoilla",
//         rule: "la/lä, na/nä, ra/rä, ija/ijä: otetaan a/ä pois + oi/öi",
//         english: "student",
//         exampleSentence: "Opiskelijoilla on paljon tenttejä.",
//         exampleTranslation: "The students have many exams.",
//       },
//     ],
//   },
//   {
//     name: "Long words with a/ä → i",
//     description: "Words ending in ma/mä, va/vä, aja/äjä remove a/ä and add i",
//     examples: [
//       {
//         singular: "unelma",
//         singularStem: "unelma-",
//         pluralStem: "unelmi-",
//         inessive: "unelmissa",
//         adessive: "unelmilla",
//         rule: "ma/mä, va/vä, aja/äjä: otetaan a/ä pois + i",
//         english: "dream",
//         exampleSentence: "Unelmissa kaikki on mahdollista.",
//         exampleTranslation: "Everything is possible in dreams.",
//       },
//       {
//         singular: "mukava",
//         singularStem: "mukava-",
//         pluralStem: "mukavi-",
//         inessive: "mukavissa",
//         adessive: "mukavilla",
//         rule: "ma/mä, va/vä, aja/äjä: otetaan a/ä pois + i",
//         english: "nice",
//         exampleSentence: "Mukavissa huoneissa on viihtyisä tunnelma.",
//         exampleTranslation: "Nice rooms have a cozy atmosphere.",
//       },
//       {
//         singular: "opettaja",
//         singularStem: "opettaja-",
//         pluralStem: "opettaji-",
//         inessive: "opettajissa",
//         adessive: "opettajilla",
//         rule: "ma/mä, va/vä, aja/äjä: otetaan a/ä pois + i",
//         english: "teacher",
//         exampleSentence: "Opettajilla on tärkeä tehtävä.",
//         exampleTranslation: "Teachers have an important task.",
//       },
//     ],
//   },
// ];

// // Function to determine the plural stem based on rules
// const getPluralStem = (singular: string): NounPluralization | null => {
//   const lowerSingular = singular.toLowerCase();

//   // Check each rule pattern
//   for (const rule of pluralizationRules) {
//     for (const example of rule.examples) {
//       // Simple pattern matching based on endings
//       if (lowerSingular.endsWith(example.singular.slice(-2))) {
//         // Apply the same transformation as the example
//         let pluralStem = "";

//         if (rule.name === "Basic i-addition") {
//           pluralStem = lowerSingular + "i";
//         } else if (rule.name === "Vowel removal + i") {
//           pluralStem = lowerSingular.slice(0, -1) + "i";
//         } else if (rule.name === "a → oi transformation") {
//           pluralStem = lowerSingular.slice(0, -1) + "oi";
//         } else if (rule.name === "Double vowel reduction") {
//           pluralStem = lowerSingular.slice(0, -1) + "i";
//         } else if (rule.name === "Loanwords with i → ei") {
//           pluralStem = lowerSingular.slice(0, -1) + "ei";
//         } else if (rule.name === "Special cases: si remains") {
//           pluralStem = lowerSingular;
//         } else if (rule.name === "Long words with a/ä → oi/öi") {
//           pluralStem = lowerSingular.slice(0, -1) + "oi";
//         } else if (rule.name === "Long words with a/ä → i") {
//           pluralStem = lowerSingular.slice(0, -1) + "i";
//         }

//         // Generate inessive and adessive forms
//         const inessive = pluralStem + "ssa";
//         const adessive = pluralStem + "lla";

//         return {
//           singular: lowerSingular,
//           singularStem: lowerSingular + "-",
//           pluralStem: pluralStem + "-",
//           inessive,
//           adessive,
//           rule: rule.name,
//           english: example.english,
//           exampleSentence: example.exampleSentence,
//           exampleTranslation: example.exampleTranslation,
//         };
//       }
//     }
//   }

//   return null;
// };

// const NounPluralization = () => {
//   const [input, setInput] = useState<string>("");
//   const [result, setResult] = useState<NounPluralization | null>(null);
//   const [error, setError] = useState<string>("");
//   const [success, setSuccess] = useState<string>("");
//   const [loading, setLoading] = useState<boolean>(false);

//   const analyzeNoun = async (noun: string): Promise<void> => {
//     setLoading(true);
//     setError("");
//     setSuccess("");

//     // First try our local rule-based approach
//     const localResult = getPluralStem(noun);
//     if (localResult) {
//       setResult(localResult);
//       setSuccess(`Plural stem found for "${noun}"`);
//       setLoading(false);
//       return;
//     }

//     // If local approach fails, try the API
//     try {
//       const response = await fetch("/api/noun-pluralization", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ noun }),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.error || "Failed to analyze noun");
//       }

//       const data: ApiNounResponse = await response.json();

//       if (data.pluralization) {
//         setResult(data.pluralization);
//         setSuccess(`Plural stem found for "${noun}"`);
//       } else {
//         throw new Error("No pluralization data received from API");
//       }
//     } catch (err: unknown) {
//       setError(
//         err instanceof Error
//           ? err.message
//           : "Failed to analyze noun. Please try a different word."
//       );
//       setResult(null);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
//     e.preventDefault();
//     setError("");
//     setSuccess("");

//     if (!input.trim()) {
//       setError("Please enter a noun");
//       return;
//     }

//     analyzeNoun(input.trim());
//   };

//   return (
//     <Container>
//       <Header>
//         <Title>Finnish Noun Pluralization</Title>
//         <Subtitle>Learn how to form plural stems and cases in Finnish</Subtitle>
//       </Header>

//       <PracticeContainer>
//         <PracticeTitle>Practice Plural Stem Formation</PracticeTitle>
//         <p>Enter a Finnish noun to see its plural stem and case forms:</p>

//         <Form onSubmit={handleSubmit}>
//           <FormLabel htmlFor="noun-input">
//             Enter a Finnish or English noun:
//           </FormLabel>
//           <InputContainer>
//             <Input
//               id="noun-input"
//               type="text"
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               placeholder="e.g., kissa, talo, opettaja"
//               disabled={loading}
//             />
//             <Button type="submit" $primary disabled={loading}>
//               {loading ? "Analyzing..." : "Analyze"}
//             </Button>
//           </InputContainer>
//         </Form>

//         {error && <ErrorMessage>{error}</ErrorMessage>}

//         {success && <SuccessMessage>{success}</SuccessMessage>}

//         {loading && (
//           <LoadingContainer>
//             <div
//               style={{
//                 animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
//               }}
//             >
//               <div
//                 style={{
//                   borderRadius: "9999px",
//                   backgroundColor: "#bfdbfe",
//                   height: "3rem",
//                   width: "3rem",
//                   marginBottom: "1rem",
//                   marginLeft: "auto",
//                   marginRight: "auto",
//                 }}
//               ></div>
//               <div
//                 style={{
//                   height: "1rem",
//                   backgroundColor: "#bfdbfe",
//                   borderRadius: "0.25rem",
//                   width: "75%",
//                   marginBottom: "0.5rem",
//                   marginLeft: "auto",
//                   marginRight: "auto",
//                 }}
//               ></div>
//               <div
//                 style={{
//                   height: "1rem",
//                   backgroundColor: "#bfdbfe",
//                   borderRadius: "0.25rem",
//                   width: "50%",
//                   marginLeft: "auto",
//                   marginRight: "auto",
//                 }}
//               ></div>
//             </div>
//           </LoadingContainer>
//         )}

//         {result && !loading && (
//           <ResultContainer>
//             <ResultTitle>
//               Pluralization Results for &quot;{result.singular}&quot; (
//               {result.english})
//             </ResultTitle>

//             <ResultItem>
//               <ResultLabel>Singular stem:</ResultLabel>
//               <ResultValue>{result.singularStem}</ResultValue>
//             </ResultItem>

//             <ResultItem>
//               <ResultLabel>Plural stem:</ResultLabel>
//               <ResultValue>{result.pluralStem}</ResultValue>
//             </ResultItem>

//             <ResultItem>
//               <ResultLabel>Inessive plural (-ssa):</ResultLabel>
//               <ResultValue>{result.inessive}</ResultValue>
//             </ResultItem>

//             <ResultItem>
//               <ResultLabel>Adessive plural (-lla):</ResultLabel>
//               <ResultValue>{result.adessive}</ResultValue>
//             </ResultItem>

//             <ResultItem>
//               <ResultLabel>Rule applied:</ResultLabel>
//               <ResultValue>{result.rule}</ResultValue>
//             </ResultItem>

//             {result.exampleSentence && (
//               <>
//                 <ResultItem>
//                   <ResultLabel>Example sentence:</ResultLabel>
//                   <ResultValue>{result.exampleSentence}</ResultValue>
//                 </ResultItem>
//                 <ResultItem>
//                   <ResultLabel>Translation:</ResultLabel>
//                   <ResultValue>{result.exampleTranslation}</ResultValue>
//                 </ResultItem>
//               </>
//             )}
//           </ResultContainer>
//         )}
//       </PracticeContainer>

//       <ContentContainer>
//         <UsageExplanation>
//           <p>
//             In Finnish, we need to find the plural stem before adding case
//             suffixes. To transform the singular stem into the plural stem, we
//             typically add the letter &quot;i&quot;, but there are several
//             important rules to follow.
//           </p>

//           <p>
//             The following diagrams show the transformation process:
//             <br />
//             <strong>
//               Perusmuoto (Basic form) → Yksikön vartalo (Singular stem) →
//               Monikon vartalo (Plural stem) → Monikon inessiivi (-ssa/ssä) or
//               adessiivi (-lla/llä)
//             </strong>
//           </p>
//         </UsageExplanation>
//       </ContentContainer>

//       {pluralizationRules.map((rule, index) => (
//         <ContentContainer key={index}>
//           <RuleTitle>{rule.name}</RuleTitle>
//           <RuleDescription>{rule.description}</RuleDescription>

//           {/* Mobile Card View */}
//           <ExampleCardsContainer>
//             {rule.examples.map((example, idx) => (
//               <ExampleCard key={idx}>
//                 <CardRow>
//                   <CardLabel>Perusmuoto:</CardLabel>
//                   <CardValue>{example.singular}</CardValue>
//                 </CardRow>
//                 <CardRow>
//                   <CardLabel>English:</CardLabel>
//                   <CardValue>{example.english}</CardValue>
//                 </CardRow>
//                 <CardRow>
//                   <CardLabel>Yksikön vartalo:</CardLabel>
//                   <CardValue>{example.singularStem}</CardValue>
//                 </CardRow>
//                 <CardRow>
//                   <CardLabel>Monikon vartalo:</CardLabel>
//                   <CardValue>{example.pluralStem}</CardValue>
//                 </CardRow>
//                 <CardRow>
//                   <CardLabel>Monikon inessiivi/adessiivi:</CardLabel>
//                   <CardValue>
//                     {example.inessive}/{example.adessive}
//                   </CardValue>
//                 </CardRow>
//                 <CardRow>
//                   <CardLabel>Sääntö:</CardLabel>
//                   <CardValue>{example.rule}</CardValue>
//                 </CardRow>
//                 <CardRow>
//                   <CardLabel>Example:</CardLabel>
//                   <CardValue>
//                     {example.exampleSentence}
//                     <ExampleSentence>
//                       {example.exampleTranslation}
//                     </ExampleSentence>
//                   </CardValue>
//                 </CardRow>
//               </ExampleCard>
//             ))}
//           </ExampleCardsContainer>

//           {/* Desktop Table View */}
//           <ExampleTable>
//             <thead>
//               <tr>
//                 <TableHeader>Perusmuoto (Basic form)</TableHeader>
//                 <TableHeader>English</TableHeader>
//                 <TableHeader>Yksikön vartalo (Singular stem)</TableHeader>
//                 <TableHeader>Monikon vartalo (Plural stem)</TableHeader>
//                 <TableHeader>Monikon inessiivi/adessiivi</TableHeader>
//                 <TableHeader>Sääntö (Rule)</TableHeader>
//               </tr>
//             </thead>
//             <tbody>
//               {rule.examples.map((example, idx) => (
//                 <tr key={idx}>
//                   <TableCell>
//                     {example.singular}
//                     <ExampleSentence>{example.exampleSentence}</ExampleSentence>
//                     <ExampleSentence>
//                       {example.exampleTranslation}
//                     </ExampleSentence>
//                   </TableCell>
//                   <TableCell>{example.english}</TableCell>
//                   <TableCell>{example.singularStem}</TableCell>
//                   <TableCell>{example.pluralStem}</TableCell>
//                   <TableCell>
//                     {example.inessive}/{example.adessive}
//                   </TableCell>
//                   <TableCell>{example.rule}</TableCell>
//                 </tr>
//               ))}
//             </tbody>
//           </ExampleTable>
//         </ContentContainer>
//       ))}
//     </Container>
//   );
// };

// export default NounPluralization;
"use client";

import { useState, FormEvent } from "react";
import {
  Button,
  CardLabel,
  CardRow,
  CardValue,
  Container,
  ContentContainer,
  ErrorMessage,
  ExampleCard,
  ExampleCardsContainer,
  ExampleSentence,
  ExampleTable,
  Form,
  FormLabel,
  Header,
  Input,
  InputContainer,
  LoadingContainer,
  PracticeContainer,
  PracticeTitle,
  ResultContainer,
  ResultItem,
  ResultLabel,
  ResultTitle,
  ResultValue,
  RuleDescription,
  RuleTitle,
  Subtitle,
  SuccessMessage,
  TableCell,
  TableHeader,
  Title,
  UsageExplanation,
  CaseExampleContainer,
  CaseExampleItem,
  CaseExampleLabel,
  CaseExampleValue,
} from "./NounPluralization.styles";

export interface NounPluralization {
  singular: string;
  singularStem: string;
  pluralStem: string;
  inessive: string;
  adessive: string;
  partitive: string;
  genitive: string;
  illative: string;
  rule: string;
  english: string;
  exampleSentence: string;
  exampleTranslation: string;
  caseExamples?: {
    inessiveExample: string;
    adessiveExample: string;
    partitiveExample: string;
    genitiveExample: string;
    illativeExample: string;
  };
}

export interface PluralizationRule {
  name: string;
  description: string;
  examples: NounPluralization[];
}

// API response interface
export interface ApiNounResponse {
  noun?: string;
  english?: string;
  pluralization?: NounPluralization;
  notes?: string;
  isFinnishInput?: boolean;
  caseExamples?: {
    inessiveExample: string;
    adessiveExample: string;
    partitiveExample: string;
    genitiveExample: string;
    illativeExample: string;
  };
}

// Data for noun pluralization rules
const pluralizationRules: PluralizationRule[] = [
  {
    name: "Basic i-addition",
    description: "For words ending in o, ö, u, y - simply add i",
    examples: [
      {
        singular: "koulu",
        singularStem: "koulu-",
        pluralStem: "koului-",
        inessive: "kouluissa",
        adessive: "kouluilla",
        partitive: "kouluja",
        genitive: "koulujen",
        illative: "kouluihin",
        rule: "o, ö, u, y pysyvät + i",
        english: "school",
        exampleSentence: "Kouluissa on paljon oppilaita.",
        exampleTranslation: "There are many students in the schools.",
      },
      {
        singular: "talo",
        singularStem: "talo-",
        pluralStem: "taloi-",
        inessive: "taloissa",
        adessive: "taloilla",
        partitive: "taloja",
        genitive: "talojen",
        illative: "taloihin",
        rule: "o, ö, u, y pysyvät + i",
        english: "house",
        exampleSentence: "Taloissa on kauniit puutarhat.",
        exampleTranslation: "The houses have beautiful gardens.",
      },
      {
        singular: "sänky",
        singularStem: "sängy-",
        pluralStem: "sängyi-",
        inessive: "sängyissä",
        adessive: "sängyillä",
        partitive: "sänkyjä",
        genitive: "sänkyjen",
        illative: "sänkyihin",
        rule: "o, ö, u, y pysyvät + i",
        english: "bed",
        exampleSentence: "Sängyissä on pehmeät tyynyt.",
        exampleTranslation: "The beds have soft pillows.",
      },
    ],
  },
  {
    name: "Vowel removal + i",
    description:
      "For words ending in a, ä, e - remove the final vowel and add i",
    examples: [
      {
        singular: "juna",
        singularStem: "juna-",
        pluralStem: "juni-",
        inessive: "junissa",
        adessive: "junilla",
        partitive: "junia",
        genitive: "junien",
        illative: "juniin",
        rule: "a, ä, e otetaan pois + i",
        english: "train",
        exampleSentence: "Junissa on usein täyttä.",
        exampleTranslation: "The trains are often full.",
      },
      {
        singular: "kylä",
        singularStem: "kylä-",
        pluralStem: "kyli-",
        inessive: "kylissä",
        adessive: "kylillä",
        partitive: "kyliä",
        genitive: "kylien",
        illative: "kyliin",
        rule: "a, ä, e otetaan pois + i",
        english: "village",
        exampleSentence: "Kylissä järjestetään kesäjuhlia.",
        exampleTranslation: "Summer festivals are organized in the villages.",
      },
      {
        singular: "ovi",
        singularStem: "ove-",
        pluralStem: "ovi-",
        inessive: "ovissa",
        adessive: "ovilla",
        partitive: "ovia",
        genitive: "ovien",
        illative: "oviin",
        rule: "a, ä, e otetaan pois + i",
        english: "door",
        exampleSentence: "Ovissa on vahvat lukot.",
        exampleTranslation: "The doors have strong locks.",
      },
    ],
  },
  {
    name: "a → oi transformation",
    description: "For two-syllable words with a, i or e in the first syllable",
    examples: [
      {
        singular: "kissa",
        singularStem: "kissa-",
        pluralStem: "kissoi-",
        inessive: "kissoissa",
        adessive: "kissoilla",
        partitive: "kissoja",
        genitive: "kissojen",
        illative: "kissoihin",
        rule: "a → oi (kaksi tavua, ensimmäinen tavu a, i tai e)",
        english: "cat",
        exampleSentence: "Kissoilla on terävät kynnet.",
        exampleTranslation: "The cats have sharp claws.",
      },
      {
        singular: "herra",
        singularStem: "herra-",
        pluralStem: "herroi-",
        inessive: "herroissa",
        adessive: "herroilla",
        partitive: "herroja",
        genitive: "herrojen",
        illative: "herroihin",
        rule: "a → oi (kaksi tavua, ensimmäinen tavu a, i tai e)",
        english: "gentleman",
        exampleSentence: "Herroilla on hienot puvut.",
        exampleTranslation: "The gentlemen have fine suits.",
      },
      {
        singular: "kana",
        singularStem: "kana-",
        pluralStem: "kanoi-",
        inessive: "kanoissa",
        adessive: "kanoilla",
        partitive: "kanoja",
        genitive: "kanojen",
        illative: "kanoihin",
        rule: "a → oi (kaksi tavua, ensimmäinen tavu a, i tai e)",
        english: "chicken",
        exampleSentence: "Kanoilla on siivet, mutta ne eivät lennä korkealle.",
        exampleTranslation: "Chickens have wings, but they don't fly high.",
      },
    ],
  },
  {
    name: "Double vowel reduction",
    description: "For words with two vowels - remove the first vowel and add i",
    examples: [
      {
        singular: "puu",
        singularStem: "puu-",
        pluralStem: "pui-",
        inessive: "puissa",
        adessive: "puilla",
        partitive: "puita",
        genitive: "puiden",
        illative: "puihin",
        rule: "2 vokaalia, otetaan ensimmäinen pois + i",
        english: "tree",
        exampleSentence: "Puissa pesii lintuja.",
        exampleTranslation: "Birds nest in the trees.",
      },
      {
        singular: "työ",
        singularStem: "työ-",
        pluralStem: "töi-",
        inessive: "töissä",
        adessive: "töillä",
        partitive: "töitä",
        genitive: "töiden",
        illative: "töihin",
        rule: "2 vokaalia, otetaan ensimmäinen pois + i",
        english: "work",
        exampleSentence: "Töissä pitää olla ajoissa.",
        exampleTranslation: "You need to be on time at work.",
      },
      {
        singular: "perhe",
        singularStem: "perhee-",
        pluralStem: "perhei-",
        inessive: "perheissä",
        adessive: "perheillä",
        partitive: "perheitä",
        genitive: "perheiden",
        illative: "perheihin",
        rule: "2 vokaalia, otetaan ensimmäinen pois + i",
        english: "family",
        exampleSentence: "Perheillä on erilaisia traditioita.",
        exampleTranslation: "Families have different traditions.",
      },
    ],
  },
  {
    name: "Loanwords with i → ei",
    description: "For loanwords ending in i, change to ei",
    examples: [
      {
        singular: "bussi",
        singularStem: "bussi-",
        pluralStem: "bussei-",
        inessive: "busseissa",
        adessive: "busseilla",
        partitive: "busseja",
        genitive: "bussejen",
        illative: "busseihin",
        rule: "i → ei (lainasanat)",
        english: "bus",
        exampleSentence: "Busseissa on ilmastointi.",
        exampleTranslation: "The buses have air conditioning.",
      },
      {
        singular: "hotelli",
        singularStem: "hotelli-",
        pluralStem: "hotellei-",
        inessive: "hotelleissa",
        adessive: "hotelleilla",
        partitive: "hotelleja",
        genitive: "hotellejen",
        illative: "hotelleihin",
        rule: "i → ei (lainasanat)",
        english: "hotel",
        exampleSentence: "Hotelleissa on uima-altaita.",
        exampleTranslation: "The hotels have swimming pools.",
      },
      {
        singular: "pankki",
        singularStem: "panki-",
        pluralStem: "pankei-",
        inessive: "pankeissa",
        adessive: "pankeilla",
        partitive: "pankkeja",
        genitive: "pankkejen",
        illative: "pankkeihin",
        rule: "i → ei (lainasanat)",
        english: "bank",
        exampleSentence: "Pankeissa on turvajärjestelmät.",
        exampleTranslation: "The banks have security systems.",
      },
    ],
  },
  {
    name: "Special cases: si remains",
    description: "Words like käsi and uusi keep si in plural stem",
    examples: [
      {
        singular: "käsi",
        singularStem: "käde-",
        pluralStem: "käsi-",
        inessive: "käsissä",
        adessive: "käsillä",
        partitive: "käsiä",
        genitive: "käsien",
        illative: "käsiin",
        rule: "si → si",
        english: "hand",
        exampleSentence: "Käsissä on sormet.",
        exampleTranslation: "There are fingers on the hands.",
      },
      {
        singular: "uusi",
        singularStem: "uude-",
        pluralStem: "uusi-",
        inessive: "uusissa",
        adessive: "uusilla",
        partitive: "uusija",
        genitive: "uusien",
        illative: "uusiin",
        rule: "si → si",
        english: "new",
        exampleSentence: "Uusissa autoissa on monia ominaisuuksia.",
        exampleTranslation: "The new cars have many features.",
      },
    ],
  },
  {
    name: "Long words with a/ä → oi/öi",
    description:
      "Words ending in la/lä, na/nä, ra/rä, ija/ijä remove a/ä and add oi/öi",
    examples: [
      {
        singular: "ravintola",
        singularStem: "ravintola-",
        pluralStem: "ravintoloi-",
        inessive: "ravintoloissa",
        adessive: "ravintoloilla",
        partitive: "ravintoloita",
        genitive: "ravintoloiden",
        illative: "ravintoloihin",
        rule: "la/lä, na/nä, ra/rä, ija/ijä: otetaan a/ä pois + oi/öi",
        english: "restaurant",
        exampleSentence: "Ravintoloissa tarjoillaan herkullista ruokaa.",
        exampleTranslation: "Delicious food is served in the restaurants.",
      },
      {
        singular: "porkkana",
        singularStem: "porkkana-",
        pluralStem: "porkkanoi-",
        inessive: "porkkanoissa",
        adessive: "porkkanoilla",
        partitive: "porkkanoita",
        genitive: "porkkanoiden",
        illative: "porkkanoihin",
        rule: "la/lä, na/nä, ra/rä, ija/ijä: otetaan a/ä pois + oi/öi",
        english: "carrot",
        exampleSentence: "Porkkanoissa on paljon A-vitamiinia.",
        exampleTranslation: "Carrots contain a lot of vitamin A.",
      },
      {
        singular: "opiskelija",
        singularStem: "opiskelija-",
        pluralStem: "opiskelijoi-",
        inessive: "opiskelijoissa",
        adessive: "opiskelijoilla",
        partitive: "opiskelijoita",
        genitive: "opiskelijoiden",
        illative: "opiskelijoihin",
        rule: "la/lä, na/nä, ra/rä, ija/ijä: otetaan a/ä pois + oi/öi",
        english: "student",
        exampleSentence: "Opiskelijoilla on paljon tenttejä.",
        exampleTranslation: "The students have many exams.",
      },
    ],
  },
  {
    name: "Long words with a/ä → i",
    description: "Words ending in ma/mä, va/vä, aja/äjä remove a/ä and add i",
    examples: [
      {
        singular: "unelma",
        singularStem: "unelma-",
        pluralStem: "unelmi-",
        inessive: "unelmissa",
        adessive: "unelmilla",
        partitive: "unelmia",
        genitive: "unelmien",
        illative: "unelmiin",
        rule: "ma/mä, va/vä, aja/äjä: otetaan a/ä pois + i",
        english: "dream",
        exampleSentence: "Unelmissa kaikki on mahdollista.",
        exampleTranslation: "Everything is possible in dreams.",
      },
      {
        singular: "mukava",
        singularStem: "mukava-",
        pluralStem: "mukavi-",
        inessive: "mukavissa",
        adessive: "mukavilla",
        partitive: "mukavia",
        genitive: "mukavien",
        illative: "mukaviin",
        rule: "ma/mä, va/vä, aja/äjä: otetaan a/ä pois + i",
        english: "nice",
        exampleSentence: "Mukavissa huoneissa on viihtyisä tunnelma.",
        exampleTranslation: "Nice rooms have a cozy atmosphere.",
      },
      {
        singular: "opettaja",
        singularStem: "opettaja-",
        pluralStem: "opettaji-",
        inessive: "opettajissa",
        adessive: "opettajilla",
        partitive: "opettajia",
        genitive: "opettajien",
        illative: "opettajiin",
        rule: "ma/mä, va/vä, aja/äjä: otetaan a/ä pois + i",
        english: "teacher",
        exampleSentence: "Opettajilla on tärkeä tehtävä.",
        exampleTranslation: "Teachers have an important task.",
      },
    ],
  },
];

// Function to determine the plural stem based on rules
const getPluralStem = (singular: string): NounPluralization | null => {
  const lowerSingular = singular.toLowerCase();

  // Check each rule pattern
  for (const rule of pluralizationRules) {
    for (const example of rule.examples) {
      // Simple pattern matching based on endings
      if (lowerSingular.endsWith(example.singular.slice(-2))) {
        // Apply the same transformation as the example
        let pluralStem = "";

        if (rule.name === "Basic i-addition") {
          pluralStem = lowerSingular + "i";
        } else if (rule.name === "Vowel removal + i") {
          pluralStem = lowerSingular.slice(0, -1) + "i";
        } else if (rule.name === "a → oi transformation") {
          pluralStem = lowerSingular.slice(0, -1) + "oi";
        } else if (rule.name === "Double vowel reduction") {
          pluralStem = lowerSingular.slice(0, -1) + "i";
        } else if (rule.name === "Loanwords with i → ei") {
          pluralStem = lowerSingular.slice(0, -1) + "ei";
        } else if (rule.name === "Special cases: si remains") {
          pluralStem = lowerSingular;
        } else if (rule.name === "Long words with a/ä → oi/öi") {
          pluralStem = lowerSingular.slice(0, -1) + "oi";
        } else if (rule.name === "Long words with a/ä → i") {
          pluralStem = lowerSingular.slice(0, -1) + "i";
        }

        // Generate case forms
        const inessive = pluralStem + "ssa";
        const adessive = pluralStem + "lla";
        const partitive = pluralStem + "a";
        const genitive = pluralStem + "en";
        const illative = pluralStem + "in";

        return {
          singular: lowerSingular,
          singularStem: lowerSingular + "-",
          pluralStem: pluralStem + "-",
          inessive,
          adessive,
          partitive,
          genitive,
          illative,
          rule: rule.name,
          english: example.english,
          exampleSentence: example.exampleSentence,
          exampleTranslation: example.exampleTranslation,
        };
      }
    }
  }

  return null;
};

const NounPluralization = () => {
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<NounPluralization | null>(null);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const analyzeNoun = async (noun: string): Promise<void> => {
    setLoading(true);
    setError("");
    setSuccess("");

    // First try our local rule-based approach
    const localResult = getPluralStem(noun);
    if (localResult) {
      setResult(localResult);
      setSuccess(`Plural stem found for "${noun}"`);
      setLoading(false);
      return;
    }

    // If local approach fails, try the API
    try {
      const response = await fetch("/api/noun-pluralization", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ noun }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to analyze noun");
      }

      const data: ApiNounResponse = await response.json();

      if (data.pluralization) {
        // Merge API response with case examples if available
        const mergedResult = {
          ...data.pluralization,
          caseExamples: data.caseExamples,
        };
        setResult(mergedResult);
        setSuccess(`Plural stem found for "${noun}"`);
      } else {
        throw new Error("No pluralization data received from API");
      }
    } catch (err: unknown) {
      setError(
        err instanceof Error
          ? err.message
          : "Failed to analyze noun. Please try a different word."
      );
      setResult(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!input.trim()) {
      setError("Please enter a noun");
      return;
    }

    analyzeNoun(input.trim());
  };

  return (
    <Container>
      <Header>
        <Title>Finnish Noun Pluralization</Title>
        <Subtitle>Learn how to form plural stems and cases in Finnish</Subtitle>
      </Header>

      <PracticeContainer>
        <PracticeTitle>Practice Plural Stem Formation</PracticeTitle>
        <p>Enter a Finnish noun to see its plural stem and case forms:</p>

        <Form onSubmit={handleSubmit}>
          <FormLabel htmlFor="noun-input">
            Enter a Finnish or English noun:
          </FormLabel>
          <InputContainer>
            <Input
              id="noun-input"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="e.g., kissa, talo, opettaja"
              disabled={loading}
            />
            <Button type="submit" $primary disabled={loading}>
              {loading ? "Analyzing..." : "Analyze"}
            </Button>
          </InputContainer>
        </Form>

        {error && <ErrorMessage>{error}</ErrorMessage>}

        {success && <SuccessMessage>{success}</SuccessMessage>}

        {loading && (
          <LoadingContainer>
            <div
              style={{
                animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
              }}
            >
              <div
                style={{
                  borderRadius: "9999px",
                  backgroundColor: "#bfdbfe",
                  height: "3rem",
                  width: "3rem",
                  marginBottom: "1rem",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              ></div>
              <div
                style={{
                  height: "1rem",
                  backgroundColor: "#bfdbfe",
                  borderRadius: "0.25rem",
                  width: "75%",
                  marginBottom: "0.5rem",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              ></div>
              <div
                style={{
                  height: "1rem",
                  backgroundColor: "#bfdbfe",
                  borderRadius: "0.25rem",
                  width: "50%",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              ></div>
            </div>
          </LoadingContainer>
        )}

        {result && !loading && (
          <ResultContainer>
            <ResultTitle>
              Pluralization Results for &quot;{result.singular}&quot; (
              {result.english})
            </ResultTitle>

            <ResultItem>
              <ResultLabel>Singular stem:</ResultLabel>
              <ResultValue>{result.singularStem}</ResultValue>
            </ResultItem>

            <ResultItem>
              <ResultLabel>Plural stem:</ResultLabel>
              <ResultValue>{result.pluralStem}</ResultValue>
            </ResultItem>

            <CaseExampleContainer>
              <CaseExampleItem>
                <CaseExampleLabel>Inessive plural (-ssa):</CaseExampleLabel>
                <CaseExampleValue>
                  <strong>{result.inessive}</strong>
                  {result.caseExamples?.inessiveExample && (
                    <ExampleSentence>
                      Example: {result.caseExamples.inessiveExample}
                    </ExampleSentence>
                  )}
                </CaseExampleValue>
              </CaseExampleItem>

              <CaseExampleItem>
                <CaseExampleLabel>Adessive plural (-lla):</CaseExampleLabel>
                <CaseExampleValue>
                  <strong>{result.adessive}</strong>
                  {result.caseExamples?.adessiveExample && (
                    <ExampleSentence>
                      Example: {result.caseExamples.adessiveExample}
                    </ExampleSentence>
                  )}
                </CaseExampleValue>
              </CaseExampleItem>

              <CaseExampleItem>
                <CaseExampleLabel>Partitive plural:</CaseExampleLabel>
                <CaseExampleValue>
                  <strong>{result.partitive}</strong>
                  {result.caseExamples?.partitiveExample && (
                    <ExampleSentence>
                      Example: {result.caseExamples.partitiveExample}
                    </ExampleSentence>
                  )}
                </CaseExampleValue>
              </CaseExampleItem>

              <CaseExampleItem>
                <CaseExampleLabel>Genitive plural:</CaseExampleLabel>
                <CaseExampleValue>
                  <strong>{result.genitive}</strong>
                  {result.caseExamples?.genitiveExample && (
                    <ExampleSentence>
                      Example: {result.caseExamples.genitiveExample}
                    </ExampleSentence>
                  )}
                </CaseExampleValue>
              </CaseExampleItem>

              <CaseExampleItem>
                <CaseExampleLabel>Illative plural:</CaseExampleLabel>
                <CaseExampleValue>
                  <strong>{result.illative}</strong>
                  {result.caseExamples?.illativeExample && (
                    <ExampleSentence>
                      Example: {result.caseExamples.illativeExample}
                    </ExampleSentence>
                  )}
                </CaseExampleValue>
              </CaseExampleItem>
            </CaseExampleContainer>

            <ResultItem>
              <ResultLabel>Rule applied:</ResultLabel>
              <ResultValue>{result.rule}</ResultValue>
            </ResultItem>

            {result.exampleSentence && (
              <>
                <ResultItem>
                  <ResultLabel>General example:</ResultLabel>
                  <ResultValue>
                    {result.exampleSentence}
                    <ExampleSentence>
                      {result.exampleTranslation}
                    </ExampleSentence>
                  </ResultValue>
                </ResultItem>
              </>
            )}
          </ResultContainer>
        )}
      </PracticeContainer>

      <ContentContainer>
        <UsageExplanation>
          <p>
            In Finnish, we need to find the plural stem before adding case
            suffixes. To transform the singular stem into the plural stem, we
            typically add the letter &quot;i&quot;, but there are several
            important rules to follow.
          </p>

          <p>
            The following diagrams show the transformation process:
            <br />
            <strong>
              Perusmuoto (Basic form) → Yksikön vartalo (Singular stem) →
              Monikon vartalo (Plural stem) → Monikon cases (-ssa, -lla, -a,
              -en, -in)
            </strong>
          </p>
        </UsageExplanation>
      </ContentContainer>

      {pluralizationRules.map((rule, index) => (
        <ContentContainer key={index}>
          <RuleTitle>{rule.name}</RuleTitle>
          <RuleDescription>{rule.description}</RuleDescription>

          {/* Mobile Card View */}
          <ExampleCardsContainer>
            {rule.examples.map((example, idx) => (
              <ExampleCard key={idx}>
                <CardRow>
                  <CardLabel>Perusmuoto:</CardLabel>
                  <CardValue>{example.singular}</CardValue>
                </CardRow>
                <CardRow>
                  <CardLabel>English:</CardLabel>
                  <CardValue>{example.english}</CardValue>
                </CardRow>
                <CardRow>
                  <CardLabel>Yksikön vartalo:</CardLabel>
                  <CardValue>{example.singularStem}</CardValue>
                </CardRow>
                <CardRow>
                  <CardLabel>Monikon vartalo:</CardLabel>
                  <CardValue>{example.pluralStem}</CardValue>
                </CardRow>
                <CardRow>
                  <CardLabel>Cases:</CardLabel>
                  <CardValue>
                    -ssa: {example.inessive}
                    <br />
                    -lla: {example.adessive}
                    <br />
                    -a: {example.partitive}
                    <br />
                    -en: {example.genitive}
                    <br />
                    -in: {example.illative}
                  </CardValue>
                </CardRow>
                <CardRow>
                  <CardLabel>Sääntö:</CardLabel>
                  <CardValue>{example.rule}</CardValue>
                </CardRow>
                <CardRow>
                  <CardLabel>Example:</CardLabel>
                  <CardValue>
                    {example.exampleSentence}
                    <ExampleSentence>
                      {example.exampleTranslation}
                    </ExampleSentence>
                  </CardValue>
                </CardRow>
              </ExampleCard>
            ))}
          </ExampleCardsContainer>

          {/* Desktop Table View */}
          <ExampleTable>
            <thead>
              <tr>
                <TableHeader>Perusmuoto (Basic form)</TableHeader>
                <TableHeader>English</TableHeader>
                <TableHeader>Yksikön vartalo (Singular stem)</TableHeader>
                <TableHeader>Monikon vartalo (Plural stem)</TableHeader>
                <TableHeader>Cases (-ssa/-lla/-a/-en/-in)</TableHeader>
                <TableHeader>Sääntö (Rule)</TableHeader>
              </tr>
            </thead>
            <tbody>
              {rule.examples.map((example, idx) => (
                <tr key={idx}>
                  <TableCell>
                    {example.singular}
                    <ExampleSentence>{example.exampleSentence}</ExampleSentence>
                    <ExampleSentence>
                      {example.exampleTranslation}
                    </ExampleSentence>
                  </TableCell>
                  <TableCell>{example.english}</TableCell>
                  <TableCell>{example.singularStem}</TableCell>
                  <TableCell>{example.pluralStem}</TableCell>
                  <TableCell>
                    <strong>-ssa:</strong> {example.inessive}
                    <br />
                    <strong>-lla:</strong> {example.adessive}
                    <br />
                    <strong>-a:</strong> {example.partitive}
                    <br />
                    <strong>-en:</strong> {example.genitive}
                    <br />
                    <strong>-in:</strong> {example.illative}
                  </TableCell>
                  <TableCell>{example.rule}</TableCell>
                </tr>
              ))}
            </tbody>
          </ExampleTable>
        </ContentContainer>
      ))}
    </Container>
  );
};

export default NounPluralization;
