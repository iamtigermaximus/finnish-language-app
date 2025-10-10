"use client";
import React, { useState } from "react";
import {
  CaseTitle,
  Container,
  MobileCaseSection,
  MobileTable,
  MobileTableCell,
  MobileTableContainer,
  MobileTableHeader,
  SectionTitle,
  StyledTable,
  StyledTableCell,
  StyledTableHeader,
  Title,
} from "./AdjectivesOpposites.styles";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXY".split("");

const oppositesData = {
  A: [
    {
      english: "About",
      finnish: "Noin",
      oppositeEnglish: "Exactly",
      oppositeFinnish: "Tarkalleen",
    },
    {
      english: "Above",
      finnish: "Yläpuolella",
      oppositeEnglish: "Below",
      oppositeFinnish: "Alapuolella",
    },
    {
      english: "Absence",
      finnish: "Poissaolo",
      oppositeEnglish: "Presence",
      oppositeFinnish: "Paikallaolo",
    },
    {
      english: "Abundance",
      finnish: "Runsaus",
      oppositeEnglish: "Lack",
      oppositeFinnish: "Puute",
    },
    {
      english: "To accept",
      finnish: "Hyväksyä",
      oppositeEnglish: "To refuse",
      oppositeFinnish: "Kieltäytyä",
    },
    {
      english: "Accidental",
      finnish: "Sattumalta",
      oppositeEnglish: "Intentional",
      oppositeFinnish: "Tarkoituksellinen",
    },
    {
      english: "Active",
      finnish: "Aktiivinen",
      oppositeEnglish: "Lazy",
      oppositeFinnish: "Laiska",
    },
    {
      english: "To add",
      finnish: "Lisätä",
      oppositeEnglish: "To subtract",
      oppositeFinnish: "Vähentää",
    },
    {
      english: "To admit",
      finnish: "Myöntää",
      oppositeEnglish: "To deny",
      oppositeFinnish: "Kieltää",
    },
    {
      english: "Adult",
      finnish: "Aikuinen",
      oppositeEnglish: "Child",
      oppositeFinnish: "Lapsi",
    },
    {
      english: "Advanced",
      finnish: "Edistynyt",
      oppositeEnglish: "Elementary",
      oppositeFinnish: "Perus",
    },
    {
      english: "Affirmative",
      finnish: "Myönteinen",
      oppositeEnglish: "Negative",
      oppositeFinnish: "Kielteinen",
    },
    {
      english: "Afraid",
      finnish: "Peloissaan",
      oppositeEnglish: "Brave",
      oppositeFinnish: "Rohkea",
    },
    {
      english: "After",
      finnish: "Jälkeen",
      oppositeEnglish: "Before",
      oppositeFinnish: "Ennen",
    },
    {
      english: "Against",
      finnish: "Vastaan",
      oppositeEnglish: "For",
      oppositeFinnish: "Varten",
    },
    {
      english: "Alike",
      finnish: "Samanlainen",
      oppositeEnglish: "Different",
      oppositeFinnish: "Erilainen",
    },
    {
      english: "Alive",
      finnish: "Elävä",
      oppositeEnglish: "Dead",
      oppositeFinnish: "Kuollut",
    },
    {
      english: "All",
      finnish: "Kaikki",
      oppositeEnglish: "None",
      oppositeFinnish: "Ei mitään, ei mikään",
    },
    {
      english: "To allow",
      finnish: "Sallia",
      oppositeEnglish: "To forbid",
      oppositeFinnish: "Kieltää",
    },
    {
      english: "Already",
      finnish: "Jo",
      oppositeEnglish: "Not yet",
      oppositeFinnish: "Ei vielä",
    },
    {
      english: "Always",
      finnish: "Aina",
      oppositeEnglish: "Never",
      oppositeFinnish: "Ei koskaan",
    },
    {
      english: "Ancient, old",
      finnish: "Muinainen, vanha",
      oppositeEnglish: "Modern",
      oppositeFinnish: "Uudenaikainen",
    },
    {
      english: "To agree",
      finnish: "Sopia",
      oppositeEnglish: "To refuse, to argue",
      oppositeFinnish: "Kieltäytyä, Riidellä",
    },
    {
      english: "Amateur",
      finnish: "Amatööri",
      oppositeEnglish: "Professional",
      oppositeFinnish: "Ammattilainen",
    },
    {
      english: "To amuse, to be interested in",
      finnish: "Viihdyttää",
      oppositeEnglish: "To bore",
      oppositeFinnish: "Kyllästyttää",
    },
    {
      english: "Ancestor",
      finnish: "Esivanhemmat",
      oppositeEnglish: "Descendant",
      oppositeFinnish: "Jälkeläinen",
    },
    {
      english: "Angel",
      finnish: "Enkeli",
      oppositeEnglish: "Devil",
      oppositeFinnish: "Paholainen",
    },
    {
      english: "Animal",
      finnish: "Eläin",
      oppositeEnglish: "Human",
      oppositeFinnish: "Ihminen",
    },
    {
      english: "To annoy",
      finnish: "Ärsyttää",
      oppositeEnglish: "To satisfy",
      oppositeFinnish: "Tyydyttää",
    },
    {
      english: "To answer",
      finnish: "Vastata",
      oppositeEnglish: "To ask",
      oppositeFinnish: "Kysyä",
    },
    {
      english: "Answer",
      finnish: "Vastaus",
      oppositeEnglish: "Question",
      oppositeFinnish: "Kysymys",
    },
    {
      english: "Antonym",
      finnish: "Vastakohta",
      oppositeEnglish: "Synonym",
      oppositeFinnish: "Synonyymi",
    },
    {
      english: "Apart",
      finnish: "Erillään",
      oppositeEnglish: "Together",
      oppositeFinnish: "Yhdessä",
    },
    {
      english: "Approximately",
      finnish: "Noin",
      oppositeEnglish: "Exactly",
      oppositeFinnish: "Tarkalleen",
    },
    {
      english: "To argue",
      finnish: "Riidellä",
      oppositeEnglish: "To agree",
      oppositeFinnish: "Sopia",
    },
    {
      english: "To arrest",
      finnish: "Pidättää",
      oppositeEnglish: "To free, to set free",
      oppositeFinnish: "Vapauttaa",
    },
    {
      english: "Arrival",
      finnish: "Saapuminen",
      oppositeEnglish: "Departure",
      oppositeFinnish: "Lähtö",
    },
    {
      english: "To arrive",
      finnish: "Saapua",
      oppositeEnglish: "To depart, to leave",
      oppositeFinnish: "Lähteä",
    },
    {
      english: "Artificial",
      finnish: "Keinotekoinen",
      oppositeEnglish: "Natural",
      oppositeFinnish: "Luonnollinen",
    },
    {
      english: "Ascent",
      finnish: "Nousu",
      oppositeEnglish: "Descent",
      oppositeFinnish: "Laskeutuminen",
    },
    {
      english: "To ask",
      finnish: "Kysyä",
      oppositeEnglish: "To answer",
      oppositeFinnish: "Vastata",
    },
    {
      english: "Asleep",
      finnish: "Nukkuva",
      oppositeEnglish: "Awake",
      oppositeFinnish: "Hereillä",
    },
    {
      english: "To attack",
      finnish: "Hyökätä",
      oppositeEnglish: "To defend",
      oppositeFinnish: "Puolustaa",
    },
    {
      english: "Attack",
      finnish: "Hyökkäys",
      oppositeEnglish: "Defence, protection",
      oppositeFinnish: "Puolustus, suojaus",
    },
    {
      english: "Attic",
      finnish: "Ullakko",
      oppositeEnglish: "Cellar",
      oppositeFinnish: "Kellari",
    },
    {
      english: "Autumn",
      finnish: "Syksy",
      oppositeEnglish: "Spring",
      oppositeFinnish: "Kevät",
    },
    {
      english: "Awake",
      finnish: "Hereillä",
      oppositeEnglish: "Asleep",
      oppositeFinnish: "Unessa",
    },
    {
      english: "Awful",
      finnish: "Hirveä",
      oppositeEnglish: "Delicious, nice, pleasant",
      oppositeFinnish: "Herkullinen, kiva, miellyttävä",
    },
  ],
  B: [
    {
      english: "Back, behind",
      finnish: "Takana",
      oppositeEnglish: "In front of",
      oppositeFinnish: "Edessä",
    },
    {
      english: "Background",
      finnish: "Tausta",
      oppositeEnglish: "Foreground",
      oppositeFinnish: "Etuala",
    },
    {
      english: "Backward",
      finnish: "Takaperin",
      oppositeEnglish: "Forward",
      oppositeFinnish: "Eteenpäin",
    },
    {
      english: "Bad",
      finnish: "Huono",
      oppositeEnglish: "Good",
      oppositeFinnish: "Hyvä",
    },
    {
      english: "Bad luck",
      finnish: "Huono onni",
      oppositeEnglish: "Fortune, good luck",
      oppositeFinnish: "Onni, onnea",
    },
    {
      english: "Beauty",
      finnish: "Kauneus",
      oppositeEnglish: "Ugliness",
      oppositeFinnish: "Rumuus",
    },
    {
      english: "Before",
      finnish: "Ennen",
      oppositeEnglish: "After",
      oppositeFinnish: "Jälkeen",
    },
    {
      english: "To begin",
      finnish: "Aloittaa, alkaa",
      oppositeEnglish: "To end, to stop, to finish",
      oppositeFinnish: "Lopettaa, pysähtyä, saada valmiiksi",
    },
    {
      english: "Beginning",
      finnish: "Alku",
      oppositeEnglish: "End, ending",
      oppositeFinnish: "Pääty, Päätös",
    },
    {
      english: "Behind",
      finnish: "Takana",
      oppositeEnglish: "In front of",
      oppositeFinnish: "Edessä",
    },
    {
      english: "Below",
      finnish: "Alapuolella",
      oppositeEnglish: "Above",
      oppositeFinnish: "Yläpuolella",
    },
    {
      english: "Best",
      finnish: "Paras",
      oppositeEnglish: "Worst",
      oppositeFinnish: "Pahin",
    },
    {
      english: "Better",
      finnish: "Parempi",
      oppositeEnglish: "Worse",
      oppositeFinnish: "Huonompi",
    },
    {
      english: "Beautiful, handsome, pretty",
      finnish: "Kaunis, komea, viehättävä",
      oppositeEnglish: "Ugly",
      oppositeFinnish: "Ruma",
    },
    {
      english: "Big, large",
      finnish: "Iso",
      oppositeEnglish: "Small, little",
      oppositeFinnish: "Pieni",
    },
    {
      english: "Birth",
      finnish: "Syntymä",
      oppositeEnglish: "Death",
      oppositeFinnish: "Kuolema",
    },
    {
      english: "Bitter, sour",
      finnish: "Kitkerä, kirpeä",
      oppositeEnglish: "Sweet",
      oppositeFinnish: "Makea",
    },
    {
      english: "Black",
      finnish: "Musta",
      oppositeEnglish: "White",
      oppositeFinnish: "Valkoinen",
    },
    {
      english: "Blunt",
      finnish: "Tylppä",
      oppositeEnglish: "Sharp",
      oppositeFinnish: "Terävä",
    },
    {
      english: "Body",
      finnish: "Keho",
      oppositeEnglish: "Soul",
      oppositeFinnish: "Sielu",
    },
    {
      english: "To bore",
      finnish: "Kyllästyttää",
      oppositeEnglish: "To amuse, to be interested in",
      oppositeFinnish: "Viihdyttää",
    },
    {
      english: "Boring, dull",
      finnish: "Tylsä, ikäva",
      oppositeEnglish: "Exciting, interesting",
      oppositeFinnish: "Jännittävä, kiinnostava",
    },
    {
      english: "To borrow",
      finnish: "Lainata",
      oppositeEnglish: "To lend",
      oppositeFinnish: "Lainata",
    },
    {
      english: "Bottom",
      finnish: "Pohja",
      oppositeEnglish: "Top",
      oppositeFinnish: "Kärki",
    },
    {
      english: "Boy",
      finnish: "Poika",
      oppositeEnglish: "Girl",
      oppositeFinnish: "Tyttö",
    },
    {
      english: "Brave",
      finnish: "Rohkea",
      oppositeEnglish: "Cowardly, afraid",
      oppositeFinnish: "Peloissaan",
    },
    {
      english: "To break",
      finnish: "Rikkoutua",
      oppositeEnglish: "To mend, to fix, to repair",
      oppositeFinnish: "Korjata, fixata",
    },
    {
      english: "Broad",
      finnish: "Laaja",
      oppositeEnglish: "Narrow",
      oppositeFinnish: "Kapea",
    },
    {
      english: "Brother",
      finnish: "Veli",
      oppositeEnglish: "Sister",
      oppositeFinnish: "Sisko",
    },
    {
      english: "To build, to create, to form",
      finnish: "Rakentaa",
      oppositeEnglish: "To destroy",
      oppositeFinnish: "Tuhota",
    },
    {
      english: "Busy",
      finnish: "Kiireinen",
      oppositeEnglish: "Lazy",
      oppositeFinnish: "Laiska",
    },
    {
      english: "To buy",
      finnish: "Ostaa",
      oppositeEnglish: "To sell",
      oppositeFinnish: "Myydä",
    },
  ],
  C: [
    {
      english: "Calm",
      finnish: "Rauhallinen",
      oppositeEnglish: "Excited",
      oppositeFinnish: "Innoissaan",
    },
    {
      english: "Careful",
      finnish: "Varovainen",
      oppositeEnglish: "Careless",
      oppositeFinnish: "Varomaton",
    },
    {
      english: "Careless",
      finnish: "Varomaton",
      oppositeEnglish: "Careful",
      oppositeFinnish: "Varovainen",
    },
    {
      english: "To catch",
      finnish: "Napata",
      oppositeEnglish: "To miss, to throw",
      oppositeFinnish: "Kaivata, heittää",
    },
    {
      english: "Ceiling",
      finnish: "Katto",
      oppositeEnglish: "Floor",
      oppositeFinnish: "Lattia",
    },
    {
      english: "Cellar",
      finnish: "Kellari",
      oppositeEnglish: "Attic",
      oppositeFinnish: "Ullakko",
    },
    {
      english: "Centre",
      finnish: "Keskusta",
      oppositeEnglish: "Outskirts, suburb",
      oppositeFinnish: "Laitamat, lähiö",
    },
    {
      english: "Certainly",
      finnish: "Varmasti",
      oppositeEnglish: "Probably",
      oppositeFinnish: "Todennäköisesti",
    },
    {
      english: "Changeable",
      finnish: "Vaihteleva",
      oppositeEnglish: "Constant",
      oppositeFinnish: "Jatkuva",
    },
    {
      english: "Cheap",
      finnish: "Halpa",
      oppositeEnglish: "Expensive",
      oppositeFinnish: "Kallis",
    },
    {
      english: "Child",
      finnish: "Lapsi",
      oppositeEnglish: "Adult",
      oppositeFinnish: "Aikuinen",
    },
    {
      english: "Children",
      finnish: "Children",
      oppositeEnglish: "Parents",
      oppositeFinnish: "Vanhemmat",
    },
    {
      english: "Clean",
      finnish: "Puhdas",
      oppositeEnglish: "Dirty",
      oppositeFinnish: "Likainen",
    },
    {
      english: "Clear",
      finnish: "Selkeä",
      oppositeEnglish: "Cloudy",
      oppositeFinnish: "Pilvinen",
    },
    {
      english: "Clever",
      finnish: "Taitava",
      oppositeEnglish: "Stupid",
      oppositeFinnish: "Tyhmä",
    },
    {
      english: "To close",
      finnish: "Sulkea",
      oppositeEnglish: "To open",
      oppositeFinnish: "Avata",
    },
    {
      english: "Closed",
      finnish: "Suljettu",
      oppositeEnglish: "Open",
      oppositeFinnish: "Auki",
    },
    {
      english: "Cloudy",
      finnish: "Pilvinen",
      oppositeEnglish: "Clear, sunny, bright",
      oppositeFinnish: "Selkeä, aurinkoinen, kirkas",
    },
    {
      english: "Cold",
      finnish: "Kylmä",
      oppositeEnglish: "Hot",
      oppositeFinnish: "Kuuma",
    },
    {
      english: "Cold",
      finnish: "Kylmä",
      oppositeEnglish: "Heat",
      oppositeFinnish: "Lämpö",
    },
    {
      english: "To come",
      finnish: "Tulla",
      oppositeEnglish: "To go",
      oppositeFinnish: "Mennä",
    },
    {
      english: "Comedy",
      finnish: "Komedia",
      oppositeEnglish: "Drama, tragedy",
      oppositeFinnish: "Draama, tragedia",
    },
    {
      english: "Complicated",
      finnish: "Monimutkainen",
      oppositeEnglish: "Simple",
      oppositeFinnish: "Yksinkertainen",
    },
    {
      english: "Compliment",
      finnish: "Kohteliaisuus",
      oppositeEnglish: "Insult",
      oppositeFinnish: "Loukkaus",
    },
    {
      english: "Compulsory",
      finnish: "Pakollinen",
      oppositeEnglish: "Voluntary",
      oppositeFinnish: "Vapaaehtoinen",
    },
    {
      english: "To connect",
      finnish: "Liittää",
      oppositeEnglish: "To separate",
      oppositeFinnish: "Erottaa",
    },
    {
      english: "Consonant",
      finnish: "Konsonantti",
      oppositeEnglish: "Vowel",
      oppositeFinnish: "Vokaali",
    },
    {
      english: "Constant",
      finnish: "Jatkuva",
      oppositeEnglish: "Changeable",
      oppositeFinnish: "Vaihteleva",
    },
    {
      english: "To continue",
      finnish: "Jatkaa",
      oppositeEnglish: "To interrupt",
      oppositeFinnish: "Keskeyttää",
    },
    {
      english: "Cool",
      finnish: "Viileä",
      oppositeEnglish: "Warm",
      oppositeFinnish: "Lämmin",
    },
    {
      english: "Correct",
      finnish: "Oikea",
      oppositeEnglish: "False, wrong",
      oppositeFinnish: "Väärä",
    },
    {
      english: "Courage",
      finnish: "Rohkeus",
      oppositeEnglish: "Fear",
      oppositeFinnish: "Pelko",
    },
    {
      english: "Courageous",
      finnish: "Miehuullinen",
      oppositeEnglish: "Cowardly",
      oppositeFinnish: "Peloissaan",
    },
    {
      english: "Cowardly",
      finnish: "Peloissaan",
      oppositeEnglish: "Brave, courageous",
      oppositeFinnish: "Rohkea, miehuullinen",
    },
    {
      english: "To create, to build, to form",
      finnish: "Luoda, rakentaa, muodostaa",
      oppositeEnglish: "To destroy",
      oppositeFinnish: "Tuhota",
    },
    {
      english: "Cruel",
      finnish: "Julma",
      oppositeEnglish: "Humane, kind",
      oppositeFinnish: "Inhimillinen, kiltti",
    },
    {
      english: "To cry",
      finnish: "Itkeä",
      oppositeEnglish: "To laugh",
      oppositeFinnish: "Nauraa",
    },
    {
      english: "To damage",
      finnish: "Vahingoittaa",
      oppositeEnglish: "To repair, to fix, to mend",
      oppositeFinnish: "Korjata, fixata",
    },
  ],
  D: [
    {
      english: "Danger",
      finnish: "Vaara",
      oppositeEnglish: "Security, safety",
      oppositeFinnish: "Turvallisuus",
    },
    {
      english: "Dangerous",
      finnish: "Vaarallinen",
      oppositeEnglish: "Safe",
      oppositeFinnish: "Turvallinen",
    },
    {
      english: "Dark",
      finnish: "Pimeä",
      oppositeEnglish: "Light",
      oppositeFinnish: "Vaalea",
    },
    {
      english: "Daughter",
      finnish: "Tytär",
      oppositeEnglish: "Son",
      oppositeFinnish: "Poika",
    },
    {
      english: "Dawn",
      finnish: "Valjeta",
      oppositeEnglish: "Dusk",
      oppositeFinnish: "Hämärä",
    },
    {
      english: "Day",
      finnish: "Päivä",
      oppositeEnglish: "Night",
      oppositeFinnish: "Yö",
    },
    {
      english: "Dead",
      finnish: "Kuollut",
      oppositeEnglish: "Alive",
      oppositeFinnish: "Elävä",
    },
    {
      english: "Death",
      finnish: "Kuolema",
      oppositeEnglish: "Birth",
      oppositeFinnish: "Syntymä",
    },
    {
      english: "Deep",
      finnish: "Syvä",
      oppositeEnglish: "Shallow",
      oppositeFinnish: "Matala",
    },
    {
      english: "Defeat",
      finnish: "Häviö",
      oppositeEnglish: "Victory",
      oppositeFinnish: "Voitto",
    },
    {
      english: "Defence, protection",
      finnish: "Puolustus, suojaus",
      oppositeEnglish: "Attack",
      oppositeFinnish: "Hyökkäys",
    },
    {
      english: "To defend",
      finnish: "Puolustaa",
      oppositeEnglish: "To attack",
      oppositeFinnish: "Hyökätä",
    },
    {
      english: "Delicious, nice, pleasant",
      finnish: "Herkullinen, kiva, miellyttävä",
      oppositeEnglish: "Awful",
      oppositeFinnish: "Hirveä",
    },
    {
      english: "To deny",
      finnish: "Kieltää",
      oppositeEnglish: "To admit",
      oppositeFinnish: "Myöntää",
    },
    {
      english: "To depart, to leave",
      finnish: "Saapua",
      oppositeEnglish: "To arrive",
      oppositeFinnish: "Saapua",
    },
    {
      english: "Departure",
      finnish: "Lähtö",
      oppositeEnglish: "Arrival",
      oppositeFinnish: "Saapuminen",
    },
    {
      english: "Descent",
      finnish: "Laskeutuminen",
      oppositeEnglish: "Ascent",
      oppositeFinnish: "Nousu",
    },
    {
      english: "Desperate",
      finnish: "Epätoivoinen",
      oppositeEnglish: "Hopeful",
      oppositeFinnish: "Toiveikas",
    },
    {
      english: "To destroy",
      finnish: "Tuhota",
      oppositeEnglish: "To build, to create, to form",
      oppositeFinnish: "Rakentaa, luoda, muodostaa",
    },
    {
      english: "Destruction",
      finnish: "Tuho",
      oppositeEnglish: "Construction",
      oppositeFinnish: "Rakentaminen",
    },
    {
      english: "Devil",
      finnish: "Paholainen",
      oppositeEnglish: "Angel",
      oppositeFinnish: "Enkeli",
    },
    {
      english: "Dictatorship",
      finnish: "Diktatuuri",
      oppositeEnglish: "Republic",
      oppositeFinnish: "Tasavalta",
    },
    {
      english: "To die",
      finnish: "Kuolla",
      oppositeEnglish: "To live",
      oppositeFinnish: "Elää",
    },
    {
      english: "Different",
      finnish: "Erilainen",
      oppositeEnglish: "Alike, equal, the same",
      oppositeFinnish: "Samanlainen",
    },
    {
      english: "Difficult",
      finnish: "Vaikea",
      oppositeEnglish: "Easy",
      oppositeFinnish: "Helppo",
    },
    {
      english: "Dirty",
      finnish: "Likainen",
      oppositeEnglish: "Clean",
      oppositeFinnish: "Puhdas",
    },
    {
      english: "Disease",
      finnish: "Tauti",
      oppositeEnglish: "Health",
      oppositeFinnish: "Terveys",
    },
    {
      english: "Distant",
      finnish: "Kaukainen",
      oppositeEnglish: "Near",
      oppositeFinnish: "Lähellä",
    },
    {
      english: "To divide, to separate",
      finnish: "Jakaa, Erottaa",
      oppositeEnglish: "To unite",
      oppositeFinnish: "Yhdistyä",
    },
    {
      english: "Division",
      finnish: "Jako",
      oppositeEnglish: "Unity",
      oppositeFinnish: "Yhtenäisyys",
    },
    {
      english: "To divorce",
      finnish: "Erota",
      oppositeEnglish: "To marry",
      oppositeFinnish: "Vihkiä",
    },
    {
      english: "Divorce",
      finnish: "Avioero",
      oppositeEnglish: "Marriage, wedding",
      oppositeFinnish: "Avioliitto, häät",
    },
    {
      english: "Divorced",
      finnish: "Eronnut",
      oppositeEnglish: "Married",
      oppositeFinnish: "Naimisissa",
    },
    {
      english: "Domestic",
      finnish: "Kotimainen",
      oppositeEnglish: "Foreign",
      oppositeFinnish: "Ulkomainen",
    },
    {
      english: "Down",
      finnish: "Alas",
      oppositeEnglish: "Up",
      oppositeFinnish: "Ylös",
    },
    {
      english: "Downstairs",
      finnish: "Alakerta",
      oppositeEnglish: "Upstairs",
      oppositeFinnish: "Yläkerrassa",
    },
    {
      english: "Drama",
      finnish: "Draama",
      oppositeEnglish: "Comedy",
      oppositeFinnish: "Komedia",
    },
    {
      english: "Dry",
      finnish: "Kuiva",
      oppositeEnglish: "Humid, wet",
      oppositeFinnish: "Kostea, märkä",
    },
    {
      english: "Dull",
      finnish: "Tylsä",
      oppositeEnglish: "Interesting",
      oppositeFinnish: "Kiinnostava",
    },
    {
      english: "Dusk",
      finnish: "Hämärä",
      oppositeEnglish: "Dawn",
      oppositeFinnish: "Valjeta",
    },
  ],
  E: [
    {
      english: "Early",
      finnish: "Aikainen",
      oppositeEnglish: "Late",
      oppositeFinnish: "Myöhäinen",
    },
    {
      english: "East",
      finnish: "Itä",
      oppositeEnglish: "West",
      oppositeFinnish: "Länsi",
    },
    {
      english: "Easy",
      finnish: "Helppo",
      oppositeEnglish: "Difficult, hard",
      oppositeFinnish: "Vaikea, ankara",
    },
    {
      english: "Elementary",
      finnish: "Perus",
      oppositeEnglish: "Advanced",
      oppositeFinnish: "Edistynyt",
    },
    {
      english: "Emigration",
      finnish: "Maastamuutto",
      oppositeEnglish: "Immigration",
      oppositeFinnish: "Maahanmuutto",
    },
    {
      english: "Empty",
      finnish: "Tyhjä",
      oppositeEnglish: "Full",
      oppositeFinnish: "Täysi",
    },
    {
      english: "To end",
      finnish: "Loppua",
      oppositeEnglish: "To begin, to start",
      oppositeFinnish: "Aloittaa, alkaa",
    },
    {
      english: "End",
      finnish: "Loppu",
      oppositeEnglish: "Beginning",
      oppositeFinnish: "Alku",
    },
    {
      english: "Ending",
      finnish: "Päätös",
      oppositeEnglish: "Beginning",
      oppositeFinnish: "Alku",
    },
    {
      english: "Enemy",
      finnish: "Vihollinen",
      oppositeEnglish: "Friend",
      oppositeFinnish: "Ystävä",
    },
    {
      english: "To enjoy",
      finnish: "Nauttia",
      oppositeEnglish: "To hate",
      oppositeFinnish: "Vihata",
    },
    {
      english: "Entrance",
      finnish: "Sisäänkäynti",
      oppositeEnglish: "Exit",
      oppositeFinnish: "Eoistuminen",
    },
    {
      english: "Equal",
      finnish: "Samanlainen",
      oppositeEnglish: "Different",
      oppositeFinnish: "Erilainen",
    },
    {
      english: "Even",
      finnish: "Jopa",
      oppositeEnglish: "Odd",
      oppositeFinnish: "Pariton",
    },
    {
      english: "Evening",
      finnish: "Ilta",
      oppositeEnglish: "Morning",
      oppositeFinnish: "Aamu",
    },
    {
      english: "Everybody",
      finnish: "Jokainen",
      oppositeEnglish: "Nobody",
      oppositeFinnish: "Ei kukaan",
    },
    {
      english: "Everything",
      finnish: "Kaikki",
      oppositeEnglish: "Nothing",
      oppositeFinnish: "Ei mitään, ei mikään",
    },
    {
      english: "Exactly",
      finnish: "Tarkalleen",
      oppositeEnglish: "About, approximately",
      oppositeFinnish: "Noin",
    },
    {
      english: "Excited",
      finnish: "Innoissaan",
      oppositeEnglish: "Calm",
      oppositeFinnish: "Rauhallinen",
    },
    {
      english: "Exciting",
      finnish: "Jännittävä",
      oppositeEnglish: "Boring",
      oppositeFinnish: "Tylsä",
    },
    {
      english: "To exclude",
      finnish: "Poistaa",
      oppositeEnglish: "To include",
      oppositeFinnish: "Sisällyttää",
    },
    {
      english: "Exit",
      finnish: "Poistuminen",
      oppositeEnglish: "Entrance",
      oppositeFinnish: "Sisäänkäynti",
    },
    {
      english: "Expensive",
      finnish: "Kallis",
      oppositeEnglish: "Cheap",
      oppositeFinnish: "Halpa",
    },
    {
      english: "Export",
      finnish: "Viedä",
      oppositeEnglish: "Import",
      oppositeFinnish: "Tuonti",
    },
    {
      english: "Exposure",
      finnish: "Valotus",
      oppositeEnglish: "Shelter",
      oppositeFinnish: "Suoja",
    },
    {
      english: "Extreme",
      finnish: "Äärimmäinen",
      oppositeEnglish: "Moderate",
      oppositeFinnish: "Kohtalainen",
    },
    {
      english: "To fail",
      finnish: "Läpäistä",
      oppositeEnglish: "To succeed, to pass",
      oppositeFinnish: "Onnistua, epäonnistua",
    },
  ],
  F: [
    {
      english: "Failure",
      finnish: "Vika",
      oppositeEnglish: "Success",
      oppositeFinnish: "Menestys",
    },
    {
      english: "False",
      finnish: "Väärä",
      oppositeEnglish: "Correct, true",
      oppositeFinnish: "Oikea, totta",
    },
    {
      english: "Far",
      finnish: "Kaukana",
      oppositeEnglish: "Near",
      oppositeFinnish: "Lähellä",
    },
    {
      english: "Fast",
      finnish: "Nopea",
      oppositeEnglish: "Slow",
      oppositeFinnish: "Hidas",
    },
    {
      english: "Fat",
      finnish: "Lihava",
      oppositeEnglish: "Slim, thin",
      oppositeFinnish: "Hoikka, laiha",
    },
    {
      english: "Fear",
      finnish: "Pelko",
      oppositeEnglish: "Courage",
      oppositeFinnish: "Rohkeus",
    },
    {
      english: "Female",
      finnish: "Naispuolinen",
      oppositeEnglish: "Male",
      oppositeFinnish: "Miespuolinen",
    },
    {
      english: "Few",
      finnish: "Harvat",
      oppositeEnglish: "Many",
      oppositeFinnish: "Monet",
    },
    {
      english: "Final",
      finnish: "Loppu",
      oppositeEnglish: "First",
      oppositeFinnish: "Ensimmäinen",
    },
    {
      english: "To find",
      finnish: "Löytää",
      oppositeEnglish: "To lose",
      oppositeFinnish: "Hävitä",
    },
    {
      english: "To finish",
      finnish: "Lopettaa",
      oppositeEnglish: "To begin, to start",
      oppositeFinnish: "Alkaa",
    },
    {
      english: "Finish",
      finnish: "Lopettaa",
      oppositeEnglish: "Start",
      oppositeFinnish: "Alkaa",
    },
    {
      english: "First",
      finnish: "Ensimmäinen",
      oppositeEnglish: "Final, last",
      oppositeFinnish: "Loppu, viime",
    },
    {
      english: "To fix, to mend, to repair",
      finnish: "Korjata, fixata",
      oppositeEnglish: "To break",
      oppositeFinnish: "Rikkoutua",
    },
    {
      english: "Flat",
      finnish: "Tasainen",
      oppositeEnglish: "Hilly",
      oppositeFinnish: "Mäkinen",
    },
    {
      english: "Floor",
      finnish: "Lattia",
      oppositeEnglish: "Ceiling",
      oppositeFinnish: "Katto",
    },
    {
      english: "To follow",
      finnish: "Seurata",
      oppositeEnglish: "To lead",
      oppositeFinnish: "Johtaa",
    },
    {
      english: "To forbid",
      finnish: "Kieltää",
      oppositeEnglish: "To allow, to let, to permit",
      oppositeFinnish: "Sallia",
    },
    {
      english: "For",
      finnish: "Varten",
      oppositeEnglish: "Against",
      oppositeFinnish: "Vastaan",
    },
    {
      english: "Foreground",
      finnish: "Etuala",
      oppositeEnglish: "Background",
      oppositeFinnish: "Tausta",
    },
    {
      english: "Foreign",
      finnish: "Ulkomainen",
      oppositeEnglish: "Domestic",
      oppositeFinnish: "Kotimainen",
    },
    {
      english: "Foreigner",
      finnish: "Ulkomaalainen",
      oppositeEnglish: "Native",
      oppositeFinnish: "Syntyperäinen",
    },
    {
      english: "To forget",
      finnish: "Unohtaa",
      oppositeEnglish: "To remember",
      oppositeFinnish: "Muistaa",
    },
    {
      english: "To form, to build, to create",
      finnish: "Muodostaa, rakentaa, luoda",
      oppositeEnglish: "To destroy",
      oppositeFinnish: "Tuhota",
    },
    {
      english: "Fortune",
      finnish: "Onni",
      oppositeEnglish: "Bad luck",
      oppositeFinnish: "uono onni",
    },
    {
      english: "Forward",
      finnish: "Eteenpäin",
      oppositeEnglish: "Backward",
      oppositeFinnish: "Takaperin",
    },
    {
      english: "To free, to set free",
      finnish: "Vapauttaa",
      oppositeEnglish: "To arrest",
      oppositeFinnish: "Pidättää",
    },
    {
      english: "To freeze",
      finnish: "Jäätyä",
      oppositeEnglish: "To melt",
      oppositeFinnish: "Sulaa",
    },
    {
      english: "Frequently",
      finnish: "Usein",
      oppositeEnglish: "Occasionally",
      oppositeFinnish: "Joskus",
    },
    {
      english: "Fresh",
      finnish: "Tuore",
      oppositeEnglish: "Old, stale",
      oppositeFinnish: "Vanha, tunkkainen",
    },
    {
      english: "Friend",
      finnish: "Ystävä",
      oppositeEnglish: "Enemy",
      oppositeFinnish: "Vihollinen",
    },
    {
      english: "Front",
      finnish: "Etu",
      oppositeEnglish: "Rear",
      oppositeFinnish: "Taka",
    },
    {
      english: "In front of",
      finnish: "Edessä",
      oppositeEnglish: "Back, behind",
      oppositeFinnish: "Takana",
    },
    {
      english: "Full",
      finnish: "Täysi",
      oppositeEnglish: "Empty",
      oppositeFinnish: "Tyhjä",
    },
    {
      english: "Funny",
      finnish: "Hauska",
      oppositeEnglish: "Serious",
      oppositeFinnish: "Vakava",
    },
    {
      english: "Future",
      finnish: "Tulevaisuus",
      oppositeEnglish: "Past, present",
      oppositeFinnish: "Menneisyys, nykyinen",
    },
  ],
  G: [
    {
      english: "General",
      finnish: "Yleinen",
      oppositeEnglish: "Particular, special",
      oppositeFinnish: "Erityinen",
    },
    {
      english: "Generous",
      finnish: "Antelias",
      oppositeEnglish: "Mean",
      oppositeFinnish: "Ilkeä",
    },
    {
      english: "Gentle",
      finnish: "Lempeä",
      oppositeEnglish: "Violent, rough, strict",
      oppositeFinnish: "Väkivaltainen, karkea, tiukka",
    },
    {
      english: "Gentleman",
      finnish: "Herrasmies",
      oppositeEnglish: "Lady",
      oppositeFinnish: "Neiti",
    },
    {
      english: "Giant",
      finnish: "Jätti",
      oppositeEnglish: "Tiny, very little, small",
      oppositeFinnish: "Pikkuruinen, pieni",
    },
    {
      english: "Girl",
      finnish: "Tyttö",
      oppositeEnglish: "Boy",
      oppositeFinnish: "Poika",
    },
    {
      english: "To give",
      finnish: "Antaa",
      oppositeEnglish: "To take",
      oppositeFinnish: "Ottaa",
    },
    {
      english: "To go",
      finnish: "Mennä",
      oppositeEnglish: "To come, to stop",
      oppositeFinnish: "Tulla, lopettaa",
    },
    {
      english: "Good",
      finnish: "Hyvä",
      oppositeEnglish: "Bad",
      oppositeFinnish: "Huono",
    },
    {
      english: "Good luck",
      finnish: "Onnea",
      oppositeEnglish: "Bad luck",
      oppositeFinnish: "Huono onni",
    },
    {
      english: "Grown-up",
      finnish: "Aikuinen",
      oppositeEnglish: "Child",
      oppositeFinnish: "Lapsi",
    },
    {
      english: "Guest",
      finnish: "Vieras",
      oppositeEnglish: "Host",
      oppositeFinnish: "Isäntä",
    },
    {
      english: "Guilty",
      finnish: "Syyllinen",
      oppositeEnglish: "Innocent",
      oppositeFinnish: "Viaton",
    },
  ],
  H: [
    {
      english: "Happiness",
      finnish: "Onnellisuus",
      oppositeEnglish: "Sadness",
      oppositeFinnish: "Surullisuus",
    },
    {
      english: "Happy",
      finnish: "Iloinen",
      oppositeEnglish: "Sad",
      oppositeFinnish: "Surullinen",
    },
    {
      english: "Handsome",
      finnish: "Komea",
      oppositeEnglish: "Ugly",
      oppositeFinnish: "Rumu",
    },
    {
      english: "Hard",
      finnish: "Vaikea",
      oppositeEnglish: "Easy, soft",
      oppositeFinnish: "Helppo, pehmeä",
    },
    {
      english: "To harvest",
      finnish: "Sadonkorjuu",
      oppositeEnglish: "To plant",
      oppositeFinnish: "Istuttaa",
    },
    {
      english: "To hate",
      finnish: "Vihata",
      oppositeEnglish: "To enjoy, to like, to love",
      oppositeFinnish: "Nauttia, pitää, rakastaa",
    },
    {
      english: "Health",
      finnish: "Terveys",
      oppositeEnglish: "Disease, illness",
      oppositeFinnish: "Tauti, sairaus",
    },
    {
      english: "Healthy",
      finnish: "Terve",
      oppositeEnglish: "Ill, sick",
      oppositeFinnish: "Sairas",
    },
    {
      english: "Heat",
      finnish: "Lämpö",
      oppositeEnglish: "Cold",
      oppositeFinnish: "Kylmä",
    },
    {
      english: "Heaven",
      finnish: "Taivas",
      oppositeEnglish: "Hell",
      oppositeFinnish: "Helvetti",
    },
    {
      english: "Heavy",
      finnish: "Raskas",
      oppositeEnglish: "Light",
      oppositeFinnish: "Kevyt",
    },
    {
      english: "Hell",
      finnish: "Helvetti",
      oppositeEnglish: "Heaven",
      oppositeFinnish: "Taivas",
    },
    {
      english: "Here",
      finnish: "Tässä",
      oppositeEnglish: "There",
      oppositeFinnish: "Tuolla, siellä",
    },
    {
      english: "High",
      finnish: "Korkea",
      oppositeEnglish: "Deep",
      oppositeFinnish: "Syvä",
    },
    {
      english: "High",
      finnish: "Korkea",
      oppositeEnglish: "Low",
      oppositeFinnish: "Matala",
    },
    {
      english: "Hilly",
      finnish: "Mäkinen",
      oppositeEnglish: "Flat",
      oppositeFinnish: "Tasainen",
    },
    {
      english: "To hit",
      finnish: "Lyödä",
      oppositeEnglish: "To miss",
      oppositeFinnish: "Kaivata",
    },
    {
      english: "Hopeful",
      finnish: "Toiveikas",
      oppositeEnglish: "Desperate, hopeless",
      oppositeFinnish: "Epätoivoinen, toivoton",
    },
    {
      english: "Hopeless",
      finnish: "Toivoton",
      oppositeEnglish: "Hopeful",
      oppositeFinnish: "Toiveikas",
    },
    {
      english: "Horizontal",
      finnish: "Vaakasuora",
      oppositeEnglish: "Vertical",
      oppositeFinnish: "Pystysuora",
    },
    {
      english: "Host",
      finnish: "Isäntä",
      oppositeEnglish: "Guest, visitor",
      oppositeFinnish: "Vieras, vierailija",
    },
    {
      english: "Hot",
      finnish: "Kuuma",
      oppositeEnglish: "Cold",
      oppositeFinnish: "Kylmä",
    },
    {
      english: "Huge",
      finnish: "Valtava",
      oppositeEnglish: "Tiny",
      oppositeFinnish: "Pikkuruinen",
    },
    {
      english: "Human",
      finnish: "Ihminen",
      oppositeEnglish: "Animal",
      oppositeFinnish: "Eläin",
    },
    {
      english: "Humane",
      finnish: "Inhimillinen",
      oppositeEnglish: "Cruel",
      oppositeFinnish: "Julma",
    },
    {
      english: "Humid",
      finnish: "Kostea",
      oppositeEnglish: "Dry",
      oppositeFinnish: "Kuiva",
    },
    {
      english: "Hungry",
      finnish: "Nälkäinen",
      oppositeEnglish: "Thirsty",
      oppositeFinnish: "Janoinen",
    },
    {
      english: "Husband",
      finnish: "Aviomies",
      oppositeEnglish: "Wife",
      oppositeFinnish: "Vaimo",
    },
  ],
  // Continue with other letters...
  I: [
    {
      english: "In front of",
      finnish: "Edessä",
      oppositeEnglish: "Back, behind",
      oppositeFinnish: "Takana",
    },
    {
      english: "To ignore",
      finnish: "Sivuuttaa",
      oppositeEnglish: "To notice",
      oppositeFinnish: "Huomata",
    },
    {
      english: "Ill",
      finnish: "Sairas",
      oppositeEnglish: "Healthy, well",
      oppositeFinnish: "Terve",
    },
    {
      english: "Immigration",
      finnish: "Maahanmuutto",
      oppositeEnglish: "Emigration",
      oppositeFinnish: "Maastamuutto",
    },
    {
      english: "Import",
      finnish: "Tuonti",
      oppositeEnglish: "Export",
      oppositeFinnish: "Viedä",
    },
    {
      english: "In",
      finnish: "Sisään",
      oppositeEnglish: "Out",
      oppositeFinnish: "Ulos",
    },
    {
      english: "To include",
      finnish: "Sisällyttää",
      oppositeEnglish: "To exclude",
      oppositeFinnish: "Poistaa",
    },
    {
      english: "To increase",
      finnish: "Kasvaa",
      oppositeEnglish: "To reduce",
      oppositeFinnish: "Vähentää",
    },
    {
      english: "Innocent",
      finnish: "Viaton",
      oppositeEnglish: "Guilty",
      oppositeFinnish: "Syyllinen",
    },
    {
      english: "Inside",
      finnish: "Sisällä",
      oppositeEnglish: "Outside",
      oppositeFinnish: "Ulkopuolella",
    },
    {
      english: "Insult",
      finnish: "Loukkaus",
      oppositeEnglish: "Compliment",
      oppositeFinnish: "Kohteliaisuus",
    },
    {
      english: "Intelligent",
      finnish: "Älykäs",
      oppositeEnglish: "Silly, stupid",
      oppositeFinnish: "Typerä, tyhmä",
    },
    {
      english: "Intentional",
      finnish: "Tarkoituksellinen",
      oppositeEnglish: "Accidental",
      oppositeFinnish: "Sattumalta",
    },
    {
      english: "To be interested in",
      finnish: "Viihdyttää",
      oppositeEnglish: "To bore",
      oppositeFinnish: "Kyllästyttää",
    },
    {
      english: "Interesting",
      finnish: "Kiinnostava",
      oppositeEnglish: "Boring, dull",
      oppositeFinnish: "Tylsä, ikäva",
    },
    {
      english: "To interrupt",
      finnish: "Keskeyttää",
      oppositeEnglish: "To continue",
      oppositeFinnish: "Jatkaa",
    },
  ],
  J: [
    {
      english: "Junior",
      finnish: "Nuorempi",
      oppositeEnglish: "Senior",
      oppositeFinnish: "Seniori",
    },
  ],
  K: [
    {
      english: "Kind",
      finnish: "Kiltti",
      oppositeEnglish: "Cruel",
      oppositeFinnish: "Julma",
    },
  ],
  L: [
    {
      english: "Lack",
      finnish: "Vaje",
      oppositeEnglish: "Abundance, plenty",
      oppositeFinnish: "Runsaus",
    },
    {
      english: "Lady",
      finnish: "Neiti",
      oppositeEnglish: "Gentleman",
      oppositeFinnish: "Herrasmies",
    },
    {
      english: "To land",
      finnish: "Laskeutua",
      oppositeEnglish: "To take off",
      oppositeFinnish: "Lähteä",
    },
    {
      english: "Land",
      finnish: "Maa",
      oppositeEnglish: "Water",
      oppositeFinnish: "Vesi",
    },
    {
      english: "Large",
      finnish: "Iso",
      oppositeEnglish: "Small",
      oppositeFinnish: "Pieni",
    },
    {
      english: "Last",
      finnish: "Viime",
      oppositeEnglish: "First",
      oppositeFinnish: "Ensimmäinen",
    },
    {
      english: "Late",
      finnish: "Myöhäinen",
      oppositeEnglish: "Early",
      oppositeFinnish: "Aikainen",
    },
    {
      english: "To laugh",
      finnish: "Nauraa",
      oppositeEnglish: "To cry",
      oppositeFinnish: "Itkeä",
    },
    {
      english: "Lazy",
      finnish: "Laiska",
      oppositeEnglish: "Active",
      oppositeFinnish: "Aktiivinen",
    },
    {
      english: "To lead",
      finnish: "Johtaa",
      oppositeEnglish: "To follow",
      oppositeFinnish: "Seurata",
    },
    {
      english: "To learn",
      finnish: "Oppia",
      oppositeEnglish: "To teach",
      oppositeFinnish: "Opettaa",
    },
    {
      english: "To leave",
      finnish: "Lähteä",
      oppositeEnglish: "To arrive",
      oppositeFinnish: "Saapua",
    },
    {
      english: "Left",
      finnish: "Vasen",
      oppositeEnglish: "Right",
      oppositeFinnish: "Oikea",
    },
    {
      english: "To lend",
      finnish: "Lainata",
      oppositeEnglish: "To borrow",
      oppositeFinnish: "Lainata",
    },
    {
      english: "Less",
      finnish: "Vähemmän",
      oppositeEnglish: "More",
      oppositeFinnish: "Enemmän",
    },
    {
      english: "To let",
      finnish: "Sallia",
      oppositeEnglish: "To forbid",
      oppositeFinnish: "Kieltää",
    },
    {
      english: "To lie",
      finnish: "Maata",
      oppositeEnglish: "To stand",
      oppositeFinnish: "Seisoa",
    },
    {
      english: "Life",
      finnish: "Elämä",
      oppositeEnglish: "Death",
      oppositeFinnish: "Kuolema",
    },
    {
      english: "Light",
      finnish: "Vaalea",
      oppositeEnglish: "Dark",
      oppositeFinnish: "Pimeä",
    },
    {
      english: "Light",
      finnish: "Kevyt",
      oppositeEnglish: "Heavy",
      oppositeFinnish: "Raskas",
    },
    {
      english: "To like",
      finnish: "Pitää",
      oppositeEnglish: "To hate",
      oppositeFinnish: "Vihata",
    },
    {
      english: "Liquid",
      finnish: "Neste",
      oppositeEnglish: "Solid",
      oppositeFinnish: "Vankka",
    },
    {
      english: "Little, small",
      finnish: "Pieni, pikku",
      oppositeEnglish: "Big, large",
      oppositeFinnish: "Iso, suuri",
    },
    {
      english: "Little",
      finnish: "Vähän",
      oppositeEnglish: "Much",
      oppositeFinnish: "Paljon",
    },
    {
      english: "To live",
      finnish: "Elää",
      oppositeEnglish: "To die",
      oppositeFinnish: "Kuolla",
    },
    {
      english: "Long",
      finnish: "Pitkä",
      oppositeEnglish: "Short",
      oppositeFinnish: "Lyhyt",
    },
    {
      english: "To lose",
      finnish: "Hävitä",
      oppositeEnglish: "To win",
      oppositeFinnish: "Voittaa",
    },
    {
      english: "Loser",
      finnish: "Häviäjä",
      oppositeEnglish: "Winner",
      oppositeFinnish: "Voittaja",
    },
    {
      english: "Loud",
      finnish: "Äänekäs",
      oppositeEnglish: "Quiet",
      oppositeFinnish: "Hiljainen",
    },
    {
      english: "To love",
      finnish: "Rakastaa",
      oppositeEnglish: "To hate",
      oppositeFinnish: "Vihata",
    },
    {
      english: "Lovely",
      finnish: "Ihana",
      oppositeEnglish: "Terrible",
      oppositeFinnish: "Kauhea",
    },
    {
      english: "Low",
      finnish: "Matala",
      oppositeEnglish: "High",
      oppositeFinnish: "Korkea",
    },
    {
      english: "To lower",
      finnish: "Laskea",
      oppositeEnglish: "To raise",
      oppositeFinnish: "Nostaa",
    },
  ],
  // Add more letters as needed...
  M: [
    {
      english: "Major",
      finnish: "Merkittävä",
      oppositeEnglish: "Minor",
      oppositeFinnish: "Vähäpätöinen",
    },
    {
      english: "Male",
      finnish: "Miespuolinen",
      oppositeEnglish: "Female",
      oppositeFinnish: "Naispuolinen",
    },
    {
      english: "Man",
      finnish: "Mies",
      oppositeEnglish: "Woman",
      oppositeFinnish: "Nainen",
    },
    {
      english: "Many",
      finnish: "Monet",
      oppositeEnglish: "Few, some",
      oppositeFinnish: "Harvat, joku",
    },
    {
      english: "Marriage",
      finnish: "Avioliitto",
      oppositeEnglish: "Divorce",
      oppositeFinnish: "Avioero",
    },
    {
      english: "Married",
      finnish: "Naimisissa",
      oppositeEnglish: "Divorced, single",
      oppositeFinnish: "Eronnut, yksittäinen",
    },
    {
      english: "To marry",
      finnish: "Vihkiä",
      oppositeEnglish: "To divorce",
      oppositeFinnish: "Erota",
    },
    {
      english: "Master",
      finnish: "Mestari",
      oppositeEnglish: "Servant",
      oppositeFinnish: "Palvelija",
    },
    {
      english: "Maximum",
      finnish: "Maksimaalinen",
      oppositeEnglish: "Minimum",
      oppositeFinnish: "Vähimmäis",
    },
    {
      english: "Mean",
      finnish: "Ilkeä",
      oppositeEnglish: "Generous",
      oppositeFinnish: "Antelias",
    },
    {
      english: "To melt",
      finnish: "Sulaa",
      oppositeEnglish: "To freeze",
      oppositeFinnish: "Jäätyä",
    },
    {
      english: "Men",
      finnish: "Miehet",
      oppositeEnglish: "Women",
      oppositeFinnish: "Naiset",
    },
    {
      english: "To mend, to fix",
      finnish: "Korjata, fixata",
      oppositeEnglish: "To break",
      oppositeFinnish: "Rikkoutua",
    },
    {
      english: "Mess",
      finnish: "Sotku",
      oppositeEnglish: "Order",
      oppositeFinnish: "Hallittu",
    },
    {
      english: "Midnight",
      finnish: "Keskiyö",
      oppositeEnglish: "Noon",
      oppositeFinnish: "Keskipäivä",
    },
    {
      english: "Minimum",
      finnish: "Vähimmäis",
      oppositeEnglish: "Maximum",
      oppositeFinnish: "Maksimaalinen",
    },
    {
      english: "Minor",
      finnish: "Vähäpätöinen",
      oppositeEnglish: "Major",
      oppositeFinnish: "Merkittävä",
    },
    {
      english: "To miss",
      finnish: "Menettää",
      oppositeEnglish: "To hit",
      oppositeFinnish: "Lyödä",
    },
    {
      english: "To miss",
      finnish: "Menettää",
      oppositeEnglish: "To catch",
      oppositeFinnish: "Napata",
    },
    {
      english: "Moderate",
      finnish: "Kohtalainen",
      oppositeEnglish: "Extreme",
      oppositeFinnish: "Äärimmäinen",
    },
    {
      english: "Modern",
      finnish: "Uudenaikainen",
      oppositeEnglish: "Ancient, old",
      oppositeFinnish: "Muinainen, vanha",
    },
    {
      english: "Monarchy",
      finnish: "Monarkia",
      oppositeEnglish: "Republic",
      oppositeFinnish: "Tasavalta",
    },
    {
      english: "Moon",
      finnish: "Kuu",
      oppositeEnglish: "Sun",
      oppositeFinnish: "Aurinko",
    },
    {
      english: "More",
      finnish: "Enemmän",
      oppositeEnglish: "Less",
      oppositeFinnish: "Vähemmän",
    },
    {
      english: "Morning",
      finnish: "Aamu",
      oppositeEnglish: "Evening",
      oppositeFinnish: "Ilta",
    },
    {
      english: "Mountain",
      finnish: "Vuori",
      oppositeEnglish: "Valley",
      oppositeFinnish: "Laakso",
    },
    {
      english: "Much",
      finnish: "Paljon",
      oppositeEnglish: "Little",
      oppositeFinnish: "Vähän",
    },
  ],
  N: [
    {
      english: "Narrow",
      finnish: "Kapea",
      oppositeEnglish: "Broad, wide",
      oppositeFinnish: "Laaja, leveä",
    },
    {
      english: "Nasty",
      finnish: "Ilkeä",
      oppositeEnglish: "Nice, pleasant",
      oppositeFinnish: "Kiva, miellyttävä",
    },
    {
      english: "Native",
      finnish: "Syntyperäinen",
      oppositeEnglish: "Foreigner, stranger",
      oppositeFinnish: "Ulkomaalainen, muukalainen",
    },
    {
      english: "Natural",
      finnish: "Luonnollinen",
      oppositeEnglish: "Artificial",
      oppositeFinnish: "Keinotekoinen",
    },
    {
      english: "Near",
      finnish: "Lähellä",
      oppositeEnglish: "Distant, far",
      oppositeFinnish: "Kaukainen, kaukana",
    },
    {
      english: "Negative",
      finnish: "Kielteinen",
      oppositeEnglish: "Affirmative",
      oppositeFinnish: "Myönteinen",
    },
    {
      english: "Nephew",
      finnish: "Veljenpoika",
      oppositeEnglish: "Niece",
      oppositeFinnish: "Veljentytär",
    },
    {
      english: "Never",
      finnish: "Ei koskaan",
      oppositeEnglish: "Always",
      oppositeFinnish: "Aina",
    },
    {
      english: "New",
      finnish: "Uusi",
      oppositeEnglish: "Ancient, old",
      oppositeFinnish: "Muinainen, vanha",
    },
    {
      english: "Nice",
      finnish: "Kiva",
      oppositeEnglish: "Awful, nasty",
      oppositeFinnish: "Hirveä, ilkeä",
    },
    {
      english: "Niece",
      finnish: "Veljentytär",
      oppositeEnglish: "Nephew",
      oppositeFinnish: "Veljenpoika",
    },
    {
      english: "Night",
      finnish: "Yö",
      oppositeEnglish: "Day",
      oppositeFinnish: "Päivä",
    },
    {
      english: "No",
      finnish: "Ei",
      oppositeEnglish: "Yes",
      oppositeFinnish: "Kyllä",
    },
    {
      english: "Nobody",
      finnish: "Ei kukaan",
      oppositeEnglish: "Everybody",
      oppositeFinnish: "Jokainen",
    },
    {
      english: "Noisy",
      finnish: "Meluisa",
      oppositeEnglish: "Quiet, silent",
      oppositeFinnish: "Äänetön, hiljainen",
    },
    {
      english: "Noon",
      finnish: "Keskipäivä",
      oppositeEnglish: "Midnight",
      oppositeFinnish: "Keskiyö",
    },
    {
      english: "None of",
      finnish: "Ei mikään",
      oppositeEnglish: "All of",
      oppositeFinnish: "Kaikki",
    },
    {
      english: "Normal",
      finnish: "Tavallinen",
      oppositeEnglish: "Strange",
      oppositeFinnish: "Outo",
    },
    {
      english: "North",
      finnish: "Pohjoinen",
      oppositeEnglish: "South",
      oppositeFinnish: "Etelä",
    },
    {
      english: "Not yet",
      finnish: "Ei vielä",
      oppositeEnglish: "Already",
      oppositeFinnish: "Jo",
    },
    {
      english: "Nothing",
      finnish: "Ei mitään, ei mikään",
      oppositeEnglish: "Everything",
      oppositeFinnish: "Kaikki",
    },
    {
      english: "To notice",
      finnish: "Huomata",
      oppositeEnglish: "To ignore",
      oppositeFinnish: "Sivuuttaa",
    },
    {
      english: "Now",
      finnish: "Nyt",
      oppositeEnglish: "Then",
      oppositeFinnish: "Sitten",
    },
  ],
  O: [
    {
      english: "Occasionally",
      finnish: "Joskus",
      oppositeEnglish: "Frequently",
      oppositeFinnish: "Usein",
    },
    {
      english: "Occupied",
      finnish: "Varattu",
      oppositeEnglish: "Vacant",
      oppositeFinnish: "Vapaa",
    },
    {
      english: "Odd",
      finnish: "Pariton",
      oppositeEnglish: "Even",
      oppositeFinnish: "Jopa",
    },
    {
      english: "Off",
      finnish: "Sammutettu",
      oppositeEnglish: "On",
      oppositeFinnish: "Käytössä",
    },
    {
      english: "Often",
      finnish: "Usein",
      oppositeEnglish: "Seldom, sometimes",
      oppositeFinnish: "Harvoin, joskus",
    },
    {
      english: "Old",
      finnish: "Vanha",
      oppositeEnglish: "Modern, new, young",
      oppositeFinnish: "Uudenaikainen, uusi, nuori",
    },
    {
      english: "On",
      finnish: "Käytössä",
      oppositeEnglish: "Off",
      oppositeFinnish: "Sammutettu",
    },
    {
      english: "Open",
      finnish: "Auki",
      oppositeEnglish: "Closed, shut",
      oppositeFinnish: "Suljettu, kiinni",
    },
    {
      english: "Opponent",
      finnish: "Vastustaja",
      oppositeEnglish: "Supporter",
      oppositeFinnish: "Tukija",
    },
    {
      english: "Order",
      finnish: "Hallittu",
      oppositeEnglish: "Mess",
      oppositeFinnish: "Sotku",
    },
    {
      english: "Ordinary",
      finnish: "Tavallinen",
      oppositeEnglish: "Special",
      oppositeFinnish: "Erityinen",
    },
    {
      english: "Other",
      finnish: "Muut",
      oppositeEnglish: "Same",
      oppositeFinnish: "Sama",
    },
    {
      english: "Out",
      finnish: "Ulos",
      oppositeEnglish: "In",
      oppositeFinnish: "Sisään",
    },
    {
      english: "Outside",
      finnish: "Ulkopuolella",
      oppositeEnglish: "Inside",
      oppositeFinnish: "Sisällä",
    },
    {
      english: "Outskirts",
      finnish: "Laitamat",
      oppositeEnglish: "Centre",
      oppositeFinnish: "Keskusta",
    },
    {
      english: "Over",
      finnish: "Yllä",
      oppositeEnglish: "Under",
      oppositeFinnish: "Alla",
    },
  ],
  P: [
    {
      english: "Parents",
      finnish: "Vanhemmat",
      oppositeEnglish: "Children",
      oppositeFinnish: "Lapset",
    },
    {
      english: "Part",
      finnish: "Osa",
      oppositeEnglish: "Whole",
      oppositeFinnish: "Koko",
    },
    {
      english: "Partial",
      finnish: "Osittainen",
      oppositeEnglish: "Total",
      oppositeFinnish: "Koko",
    },
    {
      english: "Particular",
      finnish: "Erityinen",
      oppositeEnglish: "General",
      oppositeFinnish: "Yleinen",
    },
    {
      english: "To pass",
      finnish: "Läpäistä",
      oppositeEnglish: "To fail",
      oppositeFinnish: "Epäonnistua",
    },
    {
      english: "Past",
      finnish: "Menneisyys",
      oppositeEnglish: "Future, present",
      oppositeFinnish: "Tulevaisuus, nykyinen",
    },
    {
      english: "Peace",
      finnish: "Rauha",
      oppositeEnglish: "War",
      oppositeFinnish: "Sota",
    },
    {
      english: "To permit",
      finnish: "Sallia",
      oppositeEnglish: "To forbid",
      oppositeFinnish: "Kieltää",
    },
    {
      english: "To plant",
      finnish: "Istuttaa",
      oppositeEnglish: "To harvest",
      oppositeFinnish: "Sadonkorjuu",
    },
    {
      english: "Plenty",
      finnish: "Paljon",
      oppositeEnglish: "Lack",
      oppositeFinnish: "Puute",
    },
    {
      english: "Pleasant",
      finnish: "Miellyttävä",
      oppositeEnglish: "Awful",
      oppositeFinnish: "Hirveä",
    },
    {
      english: "Polite",
      finnish: "Kohtelias",
      oppositeEnglish: "Rude",
      oppositeFinnish: "Töykeä",
    },
    {
      english: "Poor",
      finnish: "Köyhä",
      oppositeEnglish: "Rich, wealthy",
      oppositeFinnish: "Rikas, varakas",
    },
    {
      english: "Poverty",
      finnish: "Köyhyys",
      oppositeEnglish: "Wealth",
      oppositeFinnish: "Rikkaus",
    },
    {
      english: "Powerful",
      finnish: "Voimakas",
      oppositeEnglish: "Weak",
      oppositeFinnish: "Heikko",
    },
    {
      english: "Presence",
      finnish: "Paikallaolo",
      oppositeEnglish: "Absence",
      oppositeFinnish: "Poissaolo",
    },
    {
      english: "Present",
      finnish: "Nykyinen",
      oppositeEnglish: "Past, future",
      oppositeFinnish: "Menneisyys, tulevaisuus",
    },
    {
      english: "Pretty",
      finnish: "Viehättävä",
      oppositeEnglish: "Ugly",
      oppositeFinnish: "Rumu",
    },
    {
      english: "Private",
      finnish: "Yksityinen",
      oppositeEnglish: "Public",
      oppositeFinnish: "Julkinen",
    },
    {
      english: "Probably",
      finnish: "Todennäköisesti",
      oppositeEnglish: "Certainly",
      oppositeFinnish: "Varmasti",
    },
    {
      english: "Professional",
      finnish: "Ammattilainen",
      oppositeEnglish: "Amateur",
      oppositeFinnish: "Amatööri",
    },
    {
      english: "To protect",
      finnish: "Suojella",
      oppositeEnglish: "To attack",
      oppositeFinnish: "Hyökätä",
    },
    {
      english: "Protection",
      finnish: "Suojaus",
      oppositeEnglish: "Attack",
      oppositeFinnish: "Hyökkäys",
    },
    {
      english: "Public",
      finnish: "Julkinen",
      oppositeEnglish: "Private",
      oppositeFinnish: "Yksityinen",
    },
    {
      english: "To pull",
      finnish: "Vetää",
      oppositeEnglish: "To push",
      oppositeFinnish: "Työntää",
    },
    {
      english: "Pupil",
      finnish: "Oppilas",
      oppositeEnglish: "Teacher",
      oppositeFinnish: "Opettaja",
    },
    {
      english: "To push",
      finnish: "Työntää",
      oppositeEnglish: "To pull",
      oppositeFinnish: "Vetää",
    },
  ],
  Q: [
    {
      english: "Question",
      finnish: "Kysymys",
      oppositeEnglish: "Answer",
      oppositeFinnish: "Vastaus",
    },
    {
      english: "Quick",
      finnish: "Nopea",
      oppositeEnglish: "Slow",
      oppositeFinnish: "Hidas",
    },
    {
      english: "Quiet",
      finnish: "Hiljainen",
      oppositeEnglish: "Loud, noisy",
      oppositeFinnish: "Äänekäs, meluisa",
    },
    {
      english: "To raise",
      finnish: "Nostaa",
      oppositeEnglish: "To lower",
      oppositeFinnish: "Laskea",
    },
  ],
  R: [
    {
      english: "Rainy",
      finnish: "Sateinen",
      oppositeEnglish: "Sunny",
      oppositeFinnish: "Aurinkoinen",
    },
    {
      english: "Rear",
      finnish: "Rear",
      oppositeEnglish: "Front",
      oppositeFinnish: "Etu",
    },
    {
      english: "To receive",
      finnish: "Saada",
      oppositeEnglish: "To send",
      oppositeFinnish: "Lähettää",
    },
    {
      english: "To reduce",
      finnish: "Vähentää",
      oppositeEnglish: "To increase",
      oppositeFinnish: "Kasvaa",
    },
    {
      english: "To refuse",
      finnish: "Kieltäytyä",
      oppositeEnglish: "To agree, to accept",
      oppositeFinnish: "Hyväksyä",
    },
    {
      english: "Regret",
      finnish: "Katua",
      oppositeEnglish: "Satisfaction",
      oppositeFinnish: "Tyytyväisyys",
    },
    {
      english: "To remember",
      finnish: "Muistaa",
      oppositeEnglish: "To forget",
      oppositeFinnish: "Unohtaa",
    },
    {
      english: "To repair, to fix, to mend",
      finnish: "Korjata, fixata",
      oppositeEnglish: "To damage",
      oppositeFinnish: "Vahingoittaa",
    },
    {
      english: "To reply",
      finnish: "Vastata",
      oppositeEnglish: "To ask",
      oppositeFinnish: "Kysyä",
    },
    {
      english: "Reply",
      finnish: "Vastaus",
      oppositeEnglish: "Question",
      oppositeFinnish: "Kysymys",
    },
    {
      english: "Republic",
      finnish: "Tasavalta",
      oppositeEnglish: "Dictatorship, monarchy",
      oppositeFinnish: "Diktatuuri, monarkia",
    },
    {
      english: "To rest",
      finnish: "Levätä",
      oppositeEnglish: "To work",
      oppositeFinnish: "Työskennellä",
    },
    {
      english: "Rich",
      finnish: "Rikas",
      oppositeEnglish: "Poor",
      oppositeFinnish: "Köyhä",
    },
    {
      english: "Right",
      finnish: "Oikea",
      oppositeEnglish: "Left",
      oppositeFinnish: "Vasen",
    },
    {
      english: "Right",
      finnish: "Oikea",
      oppositeEnglish: "Wrong",
      oppositeFinnish: "Väärä",
    },
    {
      english: "To rise",
      finnish: "Nousta",
      oppositeEnglish: "To sink",
      oppositeFinnish: "Upota",
    },
    {
      english: "Rough",
      finnish: "Karkea",
      oppositeEnglish: "Gentle",
      oppositeFinnish: "Lempeä",
    },
    {
      english: "Rough",
      finnish: "Karhea",
      oppositeEnglish: "Smooth, soft",
      oppositeFinnish: "Sileä, pehmeä",
    },
    {
      english: "Rude",
      finnish: "Töykeä",
      oppositeEnglish: "Polite",
      oppositeFinnish: "Kohtelias",
    },
    {
      english: "Rural",
      finnish: "Maaseudun",
      oppositeEnglish: "Urban",
      oppositeFinnish: "Urbaani",
    },
  ],
  S: [
    {
      english: "Sad",
      finnish: "Surullinen",
      oppositeEnglish: "Happy",
      oppositeFinnish: "Iloinen",
    },
    {
      english: "Sadness",
      finnish: "Surullisuus",
      oppositeEnglish: "Happiness",
      oppositeFinnish: "Onnellisuus",
    },
    {
      english: "Safe",
      finnish: "Turvallinen",
      oppositeEnglish: "Dangerous",
      oppositeFinnish: "Vaarallinen",
    },
    {
      english: "Safety",
      finnish: "Turvallisuus",
      oppositeEnglish: "Danger",
      oppositeFinnish: "Vaara",
    },
    {
      english: "Salt",
      finnish: "Suola",
      oppositeEnglish: "Sugar",
      oppositeFinnish: "Sokeri",
    },
    {
      english: "Same",
      finnish: "Samanlainen",
      oppositeEnglish: "Different",
      oppositeFinnish: "Erilainen",
    },
    {
      english: "Satisfaction",
      finnish: "Tyytyväisyys",
      oppositeEnglish: "Regret",
      oppositeFinnish: "Katua",
    },
    {
      english: "To satisfy",
      finnish: "Tyydyttää",
      oppositeEnglish: "To annoy",
      oppositeFinnish: "Ärsyttää",
    },
    {
      english: "To save",
      finnish: "Säästää",
      oppositeEnglish: "To spend",
      oppositeFinnish: "Kuluttaa",
    },
    {
      english: "To scream",
      finnish: "Huutaa",
      oppositeEnglish: "To whisper",
      oppositeFinnish: "Kuiskata",
    },
    {
      english: "Security",
      finnish: "Turvallisuus",
      oppositeEnglish: "Danger",
      oppositeFinnish: "Vaara",
    },
    {
      english: "Seldom",
      finnish: "Harvoin",
      oppositeEnglish: "Often",
      oppositeFinnish: "Usein",
    },
    {
      english: "To sell",
      finnish: "Myydä",
      oppositeEnglish: "To buy",
      oppositeFinnish: "Ostaa",
    },
    {
      english: "To send",
      finnish: "Lähettää",
      oppositeEnglish: "To receive",
      oppositeFinnish: "Saada",
    },
    {
      english: "Senior",
      finnish: "Seniori",
      oppositeEnglish: "Junior",
      oppositeFinnish: "Nuorempi",
    },
    {
      english: "To separate",
      finnish: "Erottaa",
      oppositeEnglish: "To connect, to unite",
      oppositeFinnish: "Liittää, yhdistyä",
    },
    {
      english: "Serious",
      finnish: "Vakava",
      oppositeEnglish: "Funny",
      oppositeFinnish: "Hauska",
    },
    {
      english: "Servant",
      finnish: "Palvelija",
      oppositeEnglish: "Master",
      oppositeFinnish: "Mestari",
    },
    {
      english: "Shallow",
      finnish: "Matala",
      oppositeEnglish: "Deep",
      oppositeFinnish: "Syvä",
    },
    {
      english: "Sharp",
      finnish: "Terävä",
      oppositeEnglish: "Blunt",
      oppositeFinnish: "Tylppä",
    },
    {
      english: "Shelter",
      finnish: "Suoja",
      oppositeEnglish: "Exposure",
      oppositeFinnish: "Valotus",
    },
    {
      english: "Short",
      finnish: "Lyhyt",
      oppositeEnglish: "Long, tall",
      oppositeFinnish: "Pitkä",
    },
    {
      english: "To close",
      finnish: "Sulkea",
      oppositeEnglish: "To open",
      oppositeFinnish: "Avata",
    },
    {
      english: "To shout",
      finnish: "Huutaa",
      oppositeEnglish: "To whisper",
      oppositeFinnish: "Kuiskata",
    },
    {
      english: "Sick",
      finnish: "Sairas",
      oppositeEnglish: "Healthy",
      oppositeFinnish: "Terve",
    },
    {
      english: "Silent",
      finnish: "Hiljainen",
      oppositeEnglish: "Noisy",
      oppositeFinnish: "Meluisa",
    },
    {
      english: "Silly",
      finnish: "Typerä",
      oppositeEnglish: "Intelligent",
      oppositeFinnish: "Älykäs",
    },
    {
      english: "Simple",
      finnish: "Yksinkertainen",
      oppositeEnglish: "Complicated",
      oppositeFinnish: "Monimutkainen",
    },
    {
      english: "To sink",
      finnish: "Upota",
      oppositeEnglish: "To rise",
      oppositeFinnish: "Nousta",
    },
    {
      english: "Single",
      finnish: "Yksittäinen",
      oppositeEnglish: "Married",
      oppositeFinnish: "Naimisissa",
    },
    {
      english: "Sister",
      finnish: "Sisko",
      oppositeEnglish: "Brother",
      oppositeFinnish: "Veli",
    },
    {
      english: "To sit",
      finnish: "Istua",
      oppositeEnglish: "To stand",
      oppositeFinnish: "Seisoa",
    },
    {
      english: "Slim",
      finnish: "Hoikka",
      oppositeEnglish: "Fat",
      oppositeFinnish: "Lihava",
    },
    {
      english: "Slow",
      finnish: "Hidas",
      oppositeEnglish: "Fast",
      oppositeFinnish: "Nopea",
    },
    {
      english: "Small, little",
      finnish: "Pieni, pikku",
      oppositeEnglish: "Big, large, tall",
      oppositeFinnish: "Iso, suuri, pitkä",
    },
    {
      english: "Smooth",
      finnish: "Sileä",
      oppositeEnglish: "Rough",
      oppositeFinnish: "Karhea",
    },
    {
      english: "Soft",
      finnish: "Pehmeä",
      oppositeEnglish: "Hard, rough",
      oppositeFinnish: "Kova, karhea",
    },
    {
      english: "Solid",
      finnish: "Vankka",
      oppositeEnglish: "Liquid",
      oppositeFinnish: "Neste",
    },
    {
      english: "Some",
      finnish: "Joku",
      oppositeEnglish: "Many",
      oppositeFinnish: "Monet",
    },
    {
      english: "Sometimes",
      finnish: "Joskus",
      oppositeEnglish: "Often",
      oppositeFinnish: "Usein",
    },
    {
      english: "Son",
      finnish: "Poika",
      oppositeEnglish: "Daughter",
      oppositeFinnish: "Tytär",
    },
    {
      english: "Soul",
      finnish: "Sielu",
      oppositeEnglish: "Body",
      oppositeFinnish: "Keho",
    },
    {
      english: "Sour",
      finnish: "Kirpeä",
      oppositeEnglish: "Sweet",
      oppositeFinnish: "Makea",
    },
    {
      english: "South",
      finnish: "Etelä",
      oppositeEnglish: "North",
      oppositeFinnish: "Pohjoinen",
    },
    {
      english: "Special",
      finnish: "Erityinen",
      oppositeEnglish: "Ordinary",
      oppositeFinnish: "Tavallinen",
    },
    {
      english: "Spring",
      finnish: "Kevät",
      oppositeEnglish: "Autumn",
      oppositeFinnish: "Syksy",
    },
    {
      english: "To stand",
      finnish: "Seisoa",
      oppositeEnglish: "To sit",
      oppositeFinnish: "Istua",
    },
    {
      english: "To start",
      finnish: "Aloittaa, alkaa",
      oppositeEnglish: "To end, to stop, to finish",
      oppositeFinnish: "Lopettaa, pysähtyä, saada valmiiksi",
    },
    {
      english: "Start",
      finnish: "Alkaa",
      oppositeEnglish: "Finish, end, stop",
      oppositeFinnish: "Lopettaa, loppu, loppua",
    },
    {
      english: "To stop",
      finnish: "Pysähtyä",
      oppositeEnglish: "To start, to go",
      oppositeFinnish: "Alkaa, mennä",
    },
    {
      english: "To stand",
      finnish: "Seisoa",
      oppositeEnglish: "To lie",
      oppositeFinnish: "Maata",
    },
    {
      english: "Strange",
      finnish: "Outo",
      oppositeEnglish: "Normal",
      oppositeFinnish: "Tavallinen",
    },
    {
      english: "Stranger",
      finnish: "Muukalainen",
      oppositeEnglish: "Native",
      oppositeFinnish: "Syntyperäinen",
    },
    {
      english: "Strict",
      finnish: "Tiukka",
      oppositeEnglish: "Gentle",
      oppositeFinnish: "Lempeä",
    },
    {
      english: "Strong",
      finnish: "Vahva",
      oppositeEnglish: "Weak",
      oppositeFinnish: "Heikko",
    },
    {
      english: "Student",
      finnish: "Opiskelija",
      oppositeEnglish: "Teacher",
      oppositeFinnish: "Opettaja",
    },
    {
      english: "Stupid",
      finnish: "Tyhmä",
      oppositeEnglish: "Clever, intelligent",
      oppositeFinnish: "Taitava, älykäs",
    },
    {
      english: "To succeed",
      finnish: "Onnistua",
      oppositeEnglish: "To fail",
      oppositeFinnish: "Epäonnistua",
    },
    {
      english: "Success",
      finnish: "Menestys",
      oppositeEnglish: "Failure",
      oppositeFinnish: "Vika",
    },
    {
      english: "To subtract",
      finnish: "Vähentää",
      oppositeEnglish: "To add",
      oppositeFinnish: "Lisätä",
    },
    {
      english: "Sugar",
      finnish: "Sokeri",
      oppositeEnglish: "Salt",
      oppositeFinnish: "Suola",
    },
    {
      english: "Summer",
      finnish: "Kesä",
      oppositeEnglish: "Winter",
      oppositeFinnish: "Talvi",
    },
    {
      english: "Sun",
      finnish: "Aurinko",
      oppositeEnglish: "Moon",
      oppositeFinnish: "Kuu",
    },
    {
      english: "Sunny",
      finnish: "Aurinkoinen",
      oppositeEnglish: "Cloudy, rainy",
      oppositeFinnish: "Pilvinen, sateinen",
    },
    {
      english: "Supporter",
      finnish: "Tukija",
      oppositeEnglish: "Opponent",
      oppositeFinnish: "Vastustaja",
    },
    {
      english: "Surprised",
      finnish: "Yllättynyt",
      oppositeEnglish: "Terrified",
      oppositeFinnish: "Kauhistunut",
    },
    {
      english: "To suspect",
      finnish: "Epäillä",
      oppositeEnglish: "To trust",
      oppositeFinnish: "Luottaa",
    },
    {
      english: "Sweet",
      finnish: "Makea",
      oppositeEnglish: "Bitter, sour",
      oppositeFinnish: "Kitkerä, kirpeä",
    },
    {
      english: "Synonym",
      finnish: "Synonyymi",
      oppositeEnglish: "Antonym",
      oppositeFinnish: "Vastakohta",
    },
  ],
  T: [
    {
      english: "To take",
      finnish: "Ottaa",
      oppositeEnglish: "To give",
      oppositeFinnish: "Antaa",
    },
    {
      english: "To take off",
      finnish: "Lähteä",
      oppositeEnglish: "To land",
      oppositeFinnish: "Laskeutua",
    },
    {
      english: "Tall",
      finnish: "Pitkä",
      oppositeEnglish: "Small, short",
      oppositeFinnish: "Pieni, lyhyt",
    },
    {
      english: "To teach",
      finnish: "Opettaa",
      oppositeEnglish: "To learn",
      oppositeFinnish: "Oppia",
    },
    {
      english: "Teacher",
      finnish: "Opettaja",
      oppositeEnglish: "Pupil, student",
      oppositeFinnish: "Oppilas, opiskelija",
    },
    {
      english: "Then",
      finnish: "Sitten",
      oppositeEnglish: "Now",
      oppositeFinnish: "Nyt",
    },
    {
      english: "Terrible",
      finnish: "Kauhea",
      oppositeEnglish: "Lovely",
      oppositeFinnish: "Ihana",
    },
    {
      english: "Terrified",
      finnish: "Kauhistunut",
      oppositeEnglish: "Surprised",
      oppositeFinnish: "Yllättynyt",
    },
    {
      english: "There",
      finnish: "Tuolla, siellä",
      oppositeEnglish: "Here",
      oppositeFinnish: "Tässä",
    },
    {
      english: "Thick",
      finnish: "Paksu",
      oppositeEnglish: "Thin",
      oppositeFinnish: "Laiha",
    },
    {
      english: "Thin",
      finnish: "Laiha",
      oppositeEnglish: "Thick, fat",
      oppositeFinnish: "Paksu, Lihava",
    },
    {
      english: "Thirsty",
      finnish: "Janoinen",
      oppositeEnglish: "Hungry",
      oppositeFinnish: "Nälkäinen",
    },
    {
      english: "To throw",
      finnish: "Heittää",
      oppositeEnglish: "To catch",
      oppositeFinnish: "Napata",
    },
    {
      english: "Tight",
      finnish: "Kireä",
      oppositeEnglish: "Loose",
      oppositeFinnish: "Löysä",
    },
    {
      english: "Tiny",
      finnish: "Pikkuruinen",
      oppositeEnglish: "Giant, huge",
      oppositeFinnish: "Jätti, valtava",
    },
    {
      english: "Together",
      finnish: "Yhdessä",
      oppositeEnglish: "Apart",
      oppositeFinnish: "Erillään",
    },
    {
      english: "Tomorrow",
      finnish: "Huomenna",
      oppositeEnglish: "Yesterday",
      oppositeFinnish: "Eilen",
    },
    {
      english: "Top",
      finnish: "Kärki",
      oppositeEnglish: "Bottom",
      oppositeFinnish: "Pohja",
    },
    {
      english: "Total",
      finnish: "Koko",
      oppositeEnglish: "Partial",
      oppositeFinnish: "Osittainen",
    },
    {
      english: "Town",
      finnish: "Kaupunki",
      oppositeEnglish: "Village",
      oppositeFinnish: "Kylä",
    },
    {
      english: "Tragedy",
      finnish: "Tragedia",
      oppositeEnglish: "Comedy",
      oppositeFinnish: "Komedia",
    },
    {
      english: "True",
      finnish: "Totta",
      oppositeEnglish: "False",
      oppositeFinnish: "Väärä",
    },
    {
      english: "To trust",
      finnish: "Luottaa",
      oppositeEnglish: "To suspect",
      oppositeFinnish: "Epäillä",
    },
  ],
  U: [
    {
      english: "Ugliness",
      finnish: "Rumuus",
      oppositeEnglish: "Beauty",
      oppositeFinnish: "Kauneus",
    },
    {
      english: "Ugly",
      finnish: "Ruma",
      oppositeEnglish: "Beautiful, handsome, pretty",
      oppositeFinnish: "Kaunis, komea, viehättävä",
    },
    {
      english: "Under",
      finnish: "Alla",
      oppositeEnglish: "Over",
      oppositeFinnish: "Yllä",
    },
    {
      english: "To unite",
      finnish: "Yhdistyä",
      oppositeEnglish: "To divide, to separate",
      oppositeFinnish: "Jakaa, erottaa",
    },
    {
      english: "Unity",
      finnish: "Yhtenäisyys",
      oppositeEnglish: "Division",
      oppositeFinnish: "Jako",
    },
    {
      english: "Up",
      finnish: "Ylös",
      oppositeEnglish: "Down",
      oppositeFinnish: "Alas",
    },
    {
      english: "Upstairs",
      finnish: "Yläkerrassa",
      oppositeEnglish: "Downstairs",
      oppositeFinnish: "Alakerta",
    },
    {
      english: "Urban",
      finnish: "Urbaani",
      oppositeEnglish: "Rural",
      oppositeFinnish: "Maaseudun",
    },
    {
      english: "Useful",
      finnish: "Hyödyllinen",
      oppositeEnglish: "Useless",
      oppositeFinnish: "Hyödytön",
    },
    {
      english: "Useless",
      finnish: "Hyödytön",
      oppositeEnglish: "Useful",
      oppositeFinnish: "Hyödyllinen",
    },
  ],
  V: [
    {
      english: "Vacant",
      finnish: "Vapaa",
      oppositeEnglish: "Occupied",
      oppositeFinnish: "Varattu",
    },
    {
      english: "Valley",
      finnish: "Laakso",
      oppositeEnglish: "Mountain",
      oppositeFinnish: "Valley",
    },
    {
      english: "Vertical",
      finnish: "Pystysuora",
      oppositeEnglish: "Horizontal",
      oppositeFinnish: "Vaakasuora",
    },
    {
      english: "Victory",
      finnish: "Voitto",
      oppositeEnglish: "Defeat",
      oppositeFinnish: "Häviö",
    },
    {
      english: "Village",
      finnish: "Kylä",
      oppositeEnglish: "Town",
      oppositeFinnish: "Kaupunki",
    },
    {
      english: "Violent",
      finnish: "Väkivaltainen",
      oppositeEnglish: "Gentle",
      oppositeFinnish: "Lempeä",
    },
    {
      english: "Visitor",
      finnish: "Vierailija",
      oppositeEnglish: "Host",
      oppositeFinnish: "Isäntä",
    },
    {
      english: "Voluntary",
      finnish: "Vapaaehtoinen",
      oppositeEnglish: "Compulsory",
      oppositeFinnish: "Pakollinen",
    },
    {
      english: "Vowel",
      finnish: "Vokaali",
      oppositeEnglish: "Consonant",
      oppositeFinnish: "Konsonantti",
    },
  ],
  W: [
    {
      english: "War",
      finnish: "Sota",
      oppositeEnglish: "Peace",
      oppositeFinnish: "Rauha",
    },
    {
      english: "Warm",
      finnish: "Lämmin",
      oppositeEnglish: "Cool",
      oppositeFinnish: "Viileä",
    },
    {
      english: "To waste",
      finnish: "Tuhlata",
      oppositeEnglish: "To save",
      oppositeFinnish: "Säästää",
    },
    {
      english: "Water",
      finnish: "Vesi",
      oppositeEnglish: "Land",
      oppositeFinnish: "Maa",
    },
    {
      english: "Weak",
      finnish: "Heikko",
      oppositeEnglish: "Powerful, strong",
      oppositeFinnish: "Voimakas, vahva",
    },
    {
      english: "Wealth",
      finnish: "Rikkaus",
      oppositeEnglish: "Poverty",
      oppositeFinnish: "Köyhyys",
    },
    {
      english: "Wealthy",
      finnish: "Varakas",
      oppositeEnglish: "Poor",
      oppositeFinnish: "Köyhä",
    },
    {
      english: "Wedding",
      finnish: "Häät",
      oppositeEnglish: "Divorce",
      oppositeFinnish: "Erota",
    },
    {
      english: "Well",
      finnish: "Terve",
      oppositeEnglish: "Ill",
      oppositeFinnish: "Sairas",
    },
    {
      english: "West",
      finnish: "Länsi",
      oppositeEnglish: "East",
      oppositeFinnish: "Itä",
    },
    {
      english: "Wet",
      finnish: "Märkä",
      oppositeEnglish: "Dry",
      oppositeFinnish: "Kuiva",
    },
    {
      english: "To whisper",
      finnish: "Kuiskata",
      oppositeEnglish: "To scream, to shout",
      oppositeFinnish: "Huutaa, karjua",
    },
    {
      english: "White",
      finnish: "Valkoinen",
      oppositeEnglish: "Black",
      oppositeFinnish: "Black",
    },
    {
      english: "Whole",
      finnish: "Koko",
      oppositeEnglish: "Part",
      oppositeFinnish: "Part",
    },
    {
      english: "Wide",
      finnish: "Leveä",
      oppositeEnglish: "Narrow",
      oppositeFinnish: "Kapea",
    },
    {
      english: "Wife",
      finnish: "Vaimo",
      oppositeEnglish: "Husband",
      oppositeFinnish: "Aviomies",
    },
    {
      english: "To win",
      finnish: "Voittaa",
      oppositeEnglish: "To lose",
      oppositeFinnish: "Hävitä",
    },
    {
      english: "Winner",
      finnish: "Voittaja",
      oppositeEnglish: "Loser",
      oppositeFinnish: "Häviäjä",
    },
    {
      english: "Winter",
      finnish: "Talvi",
      oppositeEnglish: "Summer",
      oppositeFinnish: "Kesä",
    },
    {
      english: "To work",
      finnish: "Työskennellä",
      oppositeEnglish: "To rest",
      oppositeFinnish: "Levätä",
    },
    {
      english: "Woman",
      finnish: "Nainen",
      oppositeEnglish: "Man",
      oppositeFinnish: "Mies",
    },
    {
      english: "Women",
      finnish: "Naiset",
      oppositeEnglish: "Men",
      oppositeFinnish: "Miehet",
    },
    {
      english: "Worse",
      finnish: "Huonompi",
      oppositeEnglish: "Better",
      oppositeFinnish: "Parempi",
    },
    {
      english: "Worst",
      finnish: "Pahin",
      oppositeEnglish: "Best",
      oppositeFinnish: "Paras",
    },
    {
      english: "Wrong",
      finnish: "Väärä",
      oppositeEnglish: "Correct, right",
      oppositeFinnish: "Oikea",
    },
  ],
  Y: [
    {
      english: "Yes",
      finnish: "Kyllä",
      oppositeEnglish: "No",
      oppositeFinnish: "Ei",
    },
    {
      english: "Yesterday",
      finnish: "Eilen",
      oppositeEnglish: "Tomorrow",
      oppositeFinnish: "Huomenna",
    },
    {
      english: "Young",
      finnish: "Nuori",
      oppositeEnglish: "Old",
      oppositeFinnish: "Vanha",
    },
  ],
};

const AdjectivesOpposites = () => {
  const [selectedLetter, setSelectedLetter] = useState("A");

  const handleLetterClick = (letter: string) => {
    setSelectedLetter(letter);
    const element = document.getElementById(`letter-${letter}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Container>
      <Title>Finnish Adjectives & Opposites</Title>

      <div>
        <p style={{ padding: "10px 0" }}>
          Mastering vocabulary means not just learning words, but understanding
          their relationships. Knowing adjective opposites helps you express
          contrasting ideas and build more nuanced conversations in Finnish.
        </p>

        <p style={{ padding: "10px 0" }}>
          This comprehensive list pairs adjectives with their direct opposites,
          giving you double the vocabulary power and helping you think in
          Finnish more naturally.
        </p>

        <p style={{ padding: "10px 0", fontStyle: "italic" }}>
          Note: This collection is continuously being refined. Some word choices
          may vary in everyday Finnish usage.
        </p>
      </div>

      {/* Alphabet Navigation */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
          justifyContent: "center",
          margin: "20px 0",
          padding: "15px",
          backgroundColor: "#f8f9fa",
          borderRadius: "8px",
          border: "1px solid #e0e0e0",
        }}
      >
        {alphabet.map((letter) => (
          <button
            key={letter}
            onClick={() => handleLetterClick(letter)}
            style={{
              padding: "8px 12px",
              border: "1px solid #2c5aa0",
              backgroundColor: selectedLetter === letter ? "#2c5aa0" : "white",
              color: selectedLetter === letter ? "white" : "#2c5aa0",
              borderRadius: "4px",
              cursor: "pointer",
              fontWeight: "bold",
              minWidth: "40px",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              if (selectedLetter !== letter) {
                e.currentTarget.style.backgroundColor = "#e3ecf7";
              }
            }}
            onMouseLeave={(e) => {
              if (selectedLetter !== letter) {
                e.currentTarget.style.backgroundColor = "white";
              }
            }}
          >
            {letter}
          </button>
        ))}
      </div>

      {/* Adjective Tables */}
      {alphabet.map((letter) => (
        <div key={letter} id={`letter-${letter}`}>
          <SectionTitle>
            Adjectives that begin with the letter {letter}
          </SectionTitle>
          <StyledTable>
            <thead>
              <tr>
                <StyledTableHeader>English</StyledTableHeader>
                <StyledTableHeader>Finnish</StyledTableHeader>
                <StyledTableHeader>Opposite (English)</StyledTableHeader>
                <StyledTableHeader>Opposite (Finnish)</StyledTableHeader>
              </tr>
            </thead>
            <tbody>
              {oppositesData[letter as keyof typeof oppositesData]?.map(
                (row, index) => (
                  <tr key={index}>
                    <StyledTableCell>{row.english}</StyledTableCell>
                    <StyledTableCell>{row.finnish}</StyledTableCell>
                    <StyledTableCell>{row.oppositeEnglish}</StyledTableCell>
                    <StyledTableCell>{row.oppositeFinnish}</StyledTableCell>
                  </tr>
                )
              )}
            </tbody>
          </StyledTable>

          <MobileTableContainer>
            <MobileCaseSection>
              <CaseTitle>
                Adjectives that begin with the letter {letter}
              </CaseTitle>
              <MobileTable>
                <thead>
                  <tr>
                    <MobileTableHeader>English</MobileTableHeader>
                    <MobileTableHeader>Finnish</MobileTableHeader>
                    <MobileTableHeader>Opposite (English)</MobileTableHeader>
                    <MobileTableHeader>Opposite (Finnish)</MobileTableHeader>
                  </tr>
                </thead>
                <tbody>
                  {oppositesData[letter as keyof typeof oppositesData]?.map(
                    (row, index) => (
                      <tr key={index}>
                        <MobileTableCell>{row.english}</MobileTableCell>
                        <MobileTableCell>{row.finnish}</MobileTableCell>
                        <MobileTableCell>{row.oppositeEnglish}</MobileTableCell>
                        <MobileTableCell>{row.oppositeFinnish}</MobileTableCell>
                      </tr>
                    )
                  )}
                </tbody>
              </MobileTable>
            </MobileCaseSection>
          </MobileTableContainer>
        </div>
      ))}
    </Container>
  );
};

export default AdjectivesOpposites;
