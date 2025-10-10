"use client";
import React, { useState } from "react";
import {
  CaseTitle,
  CompactMobileTable,
  Container,
  MobileCaseSection,
  MobileTableCell,
  MobileTableContainer,
  MobileTableHeader,
  SectionTitle,
  StyledTable,
  StyledTableCell,
  StyledTableHeader,
  Title,
} from "./AdjectiveComparisonsList.styles";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWY".split(""); // No Z in the data

const adjectiveData = {
  A: [
    {
      adjective: "Angry, mad",
      finnish: "vihainen",
      comparative: "vihaisempi",
      superlative: "vihaisin",
    },
    {
      adjective: "Active",
      finnish: "aktiivinen",
      comparative: "aktiivisempi",
      superlative: "aktiivisin",
    },
    {
      adjective: "Amazing",
      finnish: "uskomaton",
      comparative: "uskomattomampi",
      superlative: "uskomattomin",
    },
  ],
  B: [
    {
      adjective: "Bad",
      finnish: "huono",
      comparative: "huonompi",
      superlative: "huonoin",
    },
    {
      adjective: "Beautiful",
      finnish: "kaunis",
      comparative: "kauniimpi",
      superlative: "kaunein",
    },
    {
      adjective: "Big",
      finnish: "iso",
      comparative: "isompi",
      superlative: "isoin",
    },
    {
      adjective: "Bitter",
      finnish: "katkera",
      comparative: "katkerampi",
      superlative: "katkerin",
    },
    {
      adjective: "Black",
      finnish: "musta",
      comparative: "mustempi",
      superlative: "mustin",
    },
    {
      adjective: "Bland",
      finnish: "mieto",
      comparative: "miedompi",
      superlative: "miedoin",
    },
    {
      adjective: "Bloody",
      finnish: "verinen",
      comparative: "verisempi",
      superlative: "verisin",
    },
    {
      adjective: "Blue",
      finnish: "sininen",
      comparative: "sinisempi",
      superlative: "sinisin",
    },
    {
      adjective: "Bossy",
      finnish: "määräilevä",
      comparative: "määräilevämpi",
      superlative: "määräilevin",
    },
    {
      adjective: "Brave, bold",
      finnish: "rohkea",
      comparative: "rohkeampi",
      superlative: "rohkein",
    },
    {
      adjective: "Bright",
      finnish: "kirkas",
      comparative: "kirkkaampi",
      superlative: "kirkkain",
    },
    {
      adjective: "Busy",
      finnish: "kiireinen",
      comparative: "kiireisempi",
      superlative: "kiireisin",
    },
    {
      adjective: "Brave",
      finnish: "urhea",
      comparative: "urheampi",
      superlative: "urhein",
    },
  ],
  C: [
    {
      adjective: "Calm",
      finnish: "rauhallinen",
      comparative: "rauhallisempi",
      superlative: "rauhallisin",
    },
    {
      adjective: "Cheap",
      finnish: "halpa",
      comparative: "halvempi",
      superlative: "halvin",
    },
    {
      adjective: "Chubby",
      finnish: "pullea",
      comparative: "pulleampi",
      superlative: "pullein",
    },
    {
      adjective: "Classy",
      finnish: "tyylikäs",
      comparative: "tyylikkäämpi",
      superlative: "tyylikkäin",
    },
    {
      adjective: "Clean",
      finnish: "puhdas",
      comparative: "puhtaampi",
      superlative: "puhtain",
    },
    {
      adjective: "Clear",
      finnish: "selkeä",
      comparative: "selkeämpi",
      superlative: "selkein",
    },
    {
      adjective: "Clever",
      finnish: "älykäs",
      comparative: "älykkäämpi",
      superlative: "älykkäin",
    },
    {
      adjective: "Close, near",
      finnish: "lähellä",
      comparative: "lähempänä",
      superlative: "lähimpänä",
    },
    {
      adjective: "Cloudy",
      finnish: "pilvinen",
      comparative: "pilvisempi",
      superlative: "pilvisin",
    },
    {
      adjective: "Clumsy",
      finnish: "kömpelö",
      comparative: "kömpelömpi",
      superlative: "kömpelöin",
    },
    {
      adjective: "Coarse, rough",
      finnish: "karkea",
      comparative: "karkeampi",
      superlative: "karkein",
    },
    {
      adjective: "Cold",
      finnish: "kylmä",
      comparative: "kylmempi",
      superlative: "kylmin",
    },
    {
      adjective: "Cool",
      finnish: "viileä",
      comparative: "viileämpi",
      superlative: "viilein",
    },
    {
      adjective: "Crazy",
      finnish: "hullu",
      comparative: "hullumpi",
      superlative: "hulluin",
    },
    {
      adjective: "Creamy",
      finnish: "kermainen",
      comparative: "kermaisempi",
      superlative: "kermaisin",
    },
    {
      adjective: "Creepy",
      finnish: "kammottava",
      comparative: "kammottavampi",
      superlative: "kammottavin",
    },
    {
      adjective: "Crispy",
      finnish: "rapea",
      comparative: "rapeampi",
      superlative: "rapein",
    },
    {
      adjective: "Cruel",
      finnish: "julma",
      comparative: "julmempi",
      superlative: "julmin",
    },
    {
      adjective: "Crunchy",
      finnish: "rouhea",
      comparative: "rouheampi",
      superlative: "rouhein",
    },
    {
      adjective: "Curly",
      finnish: "kihara",
      comparative: "kiharampi",
      superlative: "kiharaisin",
    },
    {
      adjective: "Curvy",
      finnish: "kurvikas",
      comparative: "kurvikkaampi",
      superlative: "kurvikkain",
    },
    {
      adjective: "Cute",
      finnish: "söpö",
      comparative: "söpömpi",
      superlative: "söpöin",
    },
    {
      adjective: "Calm",
      finnish: "tyyni",
      comparative: "tyynempi",
      superlative: "tyynin",
    },
  ],
  D: [
    {
      adjective: "Dark",
      finnish: "pimeä",
      comparative: "pimeämpi",
      superlative: "pimein",
    },
    {
      adjective: "Deadly",
      finnish: "kuolettava",
      comparative: "kuolettavampi",
      superlative: "kuolettavin",
    },
    {
      adjective: "Deep",
      finnish: "syvä",
      comparative: "syvempi",
      superlative: "syvin",
    },
    {
      adjective: "Dense",
      finnish: "tiheä",
      comparative: "tiheämpi",
      superlative: "tihein",
    },
    {
      adjective: "Dirty",
      finnish: "likainen",
      comparative: "likaisempi",
      superlative: "likaisin",
    },
    {
      adjective: "Dry",
      finnish: "kuiva",
      comparative: "kuivempi",
      superlative: "kuivin",
    },
    {
      adjective: "Dull",
      finnish: "tylsä",
      comparative: "tylsempi",
      superlative: "tylsin",
    },
    {
      adjective: "Dumb",
      finnish: "tyhmä",
      comparative: "tyhmempi",
      superlative: "tyhmin",
    },
    {
      adjective: "Dusty",
      finnish: "pölyinen",
      comparative: "pölyisempi",
      superlative: "pölyisin",
    },
    {
      adjective: "Different",
      finnish: "erilainen",
      comparative: "erilaisempi",
      superlative: "erilaisin",
    },
  ],
  E: [
    {
      adjective: "Early",
      finnish: "aikainen",
      comparative: "aikaisempi",
      superlative: "aikaisin",
    },
    {
      adjective: "Easy",
      finnish: "helppo",
      comparative: "helpompi",
      superlative: "helpoin",
    },
    {
      adjective: "Empty",
      finnish: "tyhjä",
      comparative: "tyhempi",
      superlative: "tyhin",
    },
    {
      adjective: "Exciting",
      finnish: "jännittävä",
      comparative: "jännittävämpi",
      superlative: "jännittävin",
    },
  ],
  F: [
    {
      adjective: "Fair",
      finnish: "reilu",
      comparative: "reilumpi",
      superlative: "reiluin",
    },
    {
      adjective: "Fancy",
      finnish: "ylellinen",
      comparative: "ylellisempi",
      superlative: "ylellisin",
    },
    {
      adjective: "Far",
      finnish: "kaukana",
      comparative: "kauempana",
      superlative: "kauimpana",
    },
    {
      adjective: "Fast, quick",
      finnish: "nopea",
      comparative: "nopeampi",
      superlative: "nopein",
    },
    {
      adjective: "Fat",
      finnish: "lihava",
      comparative: "lihavampi",
      superlative: "lihavin",
    },
    {
      adjective: "Few",
      finnish: "harva",
      comparative: "harvempi",
      superlative: "harvin",
    },
    {
      adjective: "Fierce",
      finnish: "raju",
      comparative: "rajumpi",
      superlative: "rajuin",
    },
    {
      adjective: "Filthy",
      finnish: "saastainen",
      comparative: "saastaisempi",
      superlative: "saastaisin",
    },
    {
      adjective: "Fine",
      finnish: "hieno",
      comparative: "hienompi",
      superlative: "hienoin",
    },
    {
      adjective: "Firm",
      finnish: "kiinteä",
      comparative: "kiinteämpi",
      superlative: "kiintein",
    },
    {
      adjective: "Fit",
      finnish: "solakka",
      comparative: "solakampi",
      superlative: "solakoin",
    },
    {
      adjective: "Flaky",
      finnish: "hiutaleinen",
      comparative: "hiutaleisempi",
      superlative: "hiutaleisin",
    },
    {
      adjective: "Flat, smooth",
      finnish: "tasainen",
      comparative: "tasaisempi",
      superlative: "tasaisin",
    },
    {
      adjective: "Fresh",
      finnish: "tuore",
      comparative: "tuoreempi",
      superlative: "tuorein",
    },
    {
      adjective: "Friendly",
      finnish: "ystävällinen",
      comparative: "ystävällisempi",
      superlative: "ystävällisin",
    },
    {
      adjective: "Full",
      finnish: "täysi",
      comparative: "täydempi",
      superlative: "täysin",
    },
    {
      adjective: "Funny",
      finnish: "hauska",
      comparative: "hauskempi",
      superlative: "hauskin",
    },
    {
      adjective: "Free",
      finnish: "vapaa",
      comparative: "vapaampi",
      superlative: "vapain",
    },
  ],
  G: [
    {
      adjective: "Gentle",
      finnish: "lempeä",
      comparative: "lempeämpi",
      superlative: "lempein",
    },
    {
      adjective: "Gloomy",
      finnish: "synkkä",
      comparative: "synkempi",
      superlative: "synkin",
    },
    {
      adjective: "Good",
      finnish: "hyvä",
      comparative: "parempi",
      superlative: "paras",
    },
    {
      adjective: "Grand",
      finnish: "valtava",
      comparative: "valtavampi",
      superlative: "valtavin",
    },
    {
      adjective: "Grave",
      finnish: "vakava",
      comparative: "vakavampi",
      superlative: "vakavin",
    },
    {
      adjective: "Greasy",
      finnish: "rasvainen",
      comparative: "rasvaisempi",
      superlative: "rasvaisin",
    },
    {
      adjective: "Great",
      finnish: "loistava",
      comparative: "loistavampi",
      superlative: "loistavin",
    },
    {
      adjective: "Greedy",
      finnish: "ahne",
      comparative: "ahneempi",
      superlative: "ahnein",
    },
    {
      adjective: "Gross",
      finnish: "ällöttävä",
      comparative: "ällöttävämpi",
      superlative: "ällöttävin",
    },
    {
      adjective: "Guilty",
      finnish: "syyllinen",
      comparative: "syyllisempi",
      superlative: "syyllisin",
    },
  ],
  H: [
    {
      adjective: "Hairy",
      finnish: "karvainen",
      comparative: "karvaisempi",
      superlative: "karvaisin",
    },
    {
      adjective: "Handy",
      finnish: "kätevä",
      comparative: "kätevämpi",
      superlative: "kätevin",
    },
    {
      adjective: "Happy",
      finnish: "onnellinen",
      comparative: "onnellisempi",
      superlative: "onnellisin",
    },
    {
      adjective: "Hard, tough",
      finnish: "kova",
      comparative: "kovempi",
      superlative: "kovin",
    },
    {
      adjective: "Harsh",
      finnish: "ankara",
      comparative: "ankarampi",
      superlative: "ankarin",
    },
    {
      adjective: "Healthy",
      finnish: "terveellinen",
      comparative: "terveellisempi",
      superlative: "terveellisin",
    },
    {
      adjective: "Heavy",
      finnish: "raskas",
      comparative: "raskaampi",
      superlative: "raskain",
    },
    {
      adjective: "High",
      finnish: "korkea",
      comparative: "korkeampi",
      superlative: "korkein",
    },
    {
      adjective: "Hip",
      finnish: "ajanmukainen",
      comparative: "ajanmukaisempi",
      superlative: "ajanmukaisin",
    },
    {
      adjective: "Hot",
      finnish: "kuuma",
      comparative: "kuumempi",
      superlative: "kuumin",
    },
    {
      adjective: "Humble",
      finnish: "nöyrä",
      comparative: "nöyrempi",
      superlative: "nöyrin",
    },
    {
      adjective: "Hungry",
      finnish: "nälkäinen",
      comparative: "nälkäisempi",
      superlative: "nälkäisin",
    },
    {
      adjective: "Honest",
      finnish: "rehellinen",
      comparative: "rehellisempi",
      superlative: "rehellisin",
    },
  ],
  I: [
    {
      adjective: "Icy",
      finnish: "jäinen",
      comparative: "jäisempi",
      superlative: "jäisin",
    },
    {
      adjective: "Itchy",
      finnish: "kutittava",
      comparative: "kutittavampi",
      superlative: "kutittavin",
    },
    {
      adjective: "Important",
      finnish: "tärkeä",
      comparative: "tärkeämpi",
      superlative: "tärkein",
    },
  ],
  J: [
    {
      adjective: "Juicy",
      finnish: "mehukas",
      comparative: "mehukkaampi",
      superlative: "mehukkain",
    },
    {
      adjective: "Joyful",
      finnish: "iloinen",
      comparative: "iloiseampi",
      superlative: "iloisin",
    },
  ],
  K: [
    {
      adjective: "Kind",
      finnish: "kiltti",
      comparative: "kiltimpi",
      superlative: "kiltein",
    },
    {
      adjective: "Knowledgeable",
      finnish: "tietävä",
      comparative: "tietävämpi",
      superlative: "tietävin",
    },
  ],
  L: [
    {
      adjective: "Large",
      finnish: "suuri",
      comparative: "suurempi",
      superlative: "suurin",
    },
    {
      adjective: "Late",
      finnish: "myöhäinen",
      comparative: "myöhäisempi",
      superlative: "myöhäisin",
    },
    {
      adjective: "Lazy",
      finnish: "laiska",
      comparative: "laiskempi",
      superlative: "laiskin",
    },
    {
      adjective: "Light",
      finnish: "kevyt",
      comparative: "kevyempi",
      superlative: "kevyin",
    },
    {
      adjective: "Likely",
      finnish: "todennäköinen",
      comparative: "todennäköisempi",
      superlative: "todennäköisin",
    },
    {
      adjective: "Lively",
      finnish: "vilkas",
      comparative: "vilkkaampi",
      superlative: "vilkkain",
    },
    {
      adjective: "Lonely",
      finnish: "yksinäinen",
      comparative: "yksinäisempi",
      superlative: "yksinäisin",
    },
    {
      adjective: "Long, tall",
      finnish: "pitkä",
      comparative: "pidempi",
      superlative: "pisin",
    },
    {
      adjective: "Loud",
      finnish: "äänekäs",
      comparative: "äänekkäämpi",
      superlative: "äänekkäin",
    },
    {
      adjective: "Lovely",
      finnish: "ihana",
      comparative: "ihanampi",
      superlative: "ihanin",
    },
    {
      adjective: "Low, shallow",
      finnish: "matala",
      comparative: "matalampi",
      superlative: "matalin",
    },
    {
      adjective: "Lucky",
      finnish: "onnekas",
      comparative: "onnekkaampi",
      superlative: "onnekkain",
    },
  ],
  M: [
    {
      adjective: "Mean, nasty",
      finnish: "ilkeä",
      comparative: "ilkeämpi",
      superlative: "ilkein",
    },
    {
      adjective: "Messy",
      finnish: "sotkuinen",
      comparative: "sotkuisempi",
      superlative: "sotkuisin",
    },
    {
      adjective: "Mild",
      finnish: "lievä",
      comparative: "lievempi",
      superlative: "lievin",
    },
    {
      adjective: "Moist, damp",
      finnish: "kostea",
      comparative: "kosteampi",
      superlative: "kostein",
    },
    {
      adjective: "Modern",
      finnish: "moderni",
      comparative: "modernimpi",
      superlative: "modein",
    },
  ],
  N: [
    {
      adjective: "Narrow",
      finnish: "kapea",
      comparative: "kapeampi",
      superlative: "kapein",
    },
    {
      adjective: "Nasty, naughty",
      finnish: "tuhma",
      comparative: "tuhmempi",
      superlative: "tuhmin",
    },
    {
      adjective: "Neat",
      finnish: "siisti",
      comparative: "siistimpi",
      superlative: "siistein",
    },
    {
      adjective: "Needy",
      finnish: "tarvitseva",
      comparative: "tarvitsevampi",
      superlative: "tarvitsevin",
    },
    {
      adjective: "New",
      finnish: "uusi",
      comparative: "uudempi",
      superlative: "uusin",
    },
    {
      adjective: "Nice",
      finnish: "mukava",
      comparative: "mukavampi",
      superlative: "mukavin",
    },
    {
      adjective: "Noisy",
      finnish: "meluisa",
      comparative: "meluisampi",
      superlative: "meluisin",
    },
    {
      adjective: "Normal",
      finnish: "normaali",
      comparative: "normaalimpi",
      superlative: "normaalein",
    },
  ],
  O: [
    {
      adjective: "Oily",
      finnish: "öljyinen",
      comparative: "öljyisempi",
      superlative: "öljyisin",
    },
    {
      adjective: "Old",
      finnish: "vanha",
      comparative: "vanhempi",
      superlative: "vanhin",
    },
    {
      adjective: "Open",
      finnish: "avoin",
      comparative: "avoiampi",
      superlative: "avoimin",
    },
  ],
  P: [
    {
      adjective: "Plain",
      finnish: "tavallinen",
      comparative: "tavallisempi",
      superlative: "tavallisin",
    },
    {
      adjective: "Polite",
      finnish: "kohtelias",
      comparative: "kohteliaampi",
      superlative: "kohteliain",
    },
    {
      adjective: "Poor",
      finnish: "köyhä",
      comparative: "köyhempi",
      superlative: "köyhin",
    },
    {
      adjective: "Pretty",
      finnish: "nätti",
      comparative: "nätimpi",
      superlative: "nätein",
    },
    {
      adjective: "Proud",
      finnish: "ylpeä",
      comparative: "ylpeämpi",
      superlative: "ylpein",
    },
    {
      adjective: "Patient",
      finnish: "kärsivällinen",
      comparative: "kärsivällisempi",
      superlative: "kärsivällisin",
    },
  ],
  Q: [
    {
      adjective: "Quiet",
      finnish: "hiljainen",
      comparative: "hiljaisempi",
      superlative: "hiljaisin",
    },
    {
      adjective: "Quick",
      finnish: "nopea",
      comparative: "nopeampi",
      superlative: "nopein",
    },
  ],
  R: [
    {
      adjective: "Rich",
      finnish: "rikas",
      comparative: "rikkaampi",
      superlative: "rikkain",
    },
    {
      adjective: "Right",
      finnish: "oikea",
      comparative: "oikeampi",
      superlative: "oikein",
    },
  ],
  S: [
    {
      adjective: "Sad",
      finnish: "surullinen",
      comparative: "surullisempi",
      superlative: "surullisin",
    },
    {
      adjective: "Safe",
      finnish: "turvallinen",
      comparative: "turvallisempi",
      superlative: "turvallisin",
    },
    {
      adjective: "Salty",
      finnish: "suolainen",
      comparative: "suolaisempi",
      superlative: "suolaisin",
    },
    {
      adjective: "Sane",
      finnish: "täysijärkinen",
      comparative: "täysijärkisempi",
      superlative: "täysijärkisin",
    },
    {
      adjective: "Scary",
      finnish: "pelottava",
      comparative: "pelottavampi",
      superlative: "pelottavin",
    },
    {
      adjective: "Sharp",
      finnish: "terävä",
      comparative: "terävämpi",
      superlative: "terävin",
    },
    {
      adjective: "Shiny",
      finnish: "kiiltävä",
      comparative: "kiiltävämpi",
      superlative: "kiiltävin",
    },
    {
      adjective: "Short",
      finnish: "lyhyt",
      comparative: "lyhyempi",
      superlative: "lyhin",
    },
    {
      adjective: "Shy",
      finnish: "ujo",
      comparative: "ujompi",
      superlative: "ujoin",
    },
    {
      adjective: "Silly",
      finnish: "typerä",
      comparative: "typerämpi",
      superlative: "typerin",
    },
    {
      adjective: "Simple",
      finnish: "yksinkertainen",
      comparative: "yksinkertaisempi",
      superlative: "yksinkertaisin",
    },
    {
      adjective: "Sincere",
      finnish: "rehellinen",
      comparative: "rehellisempi",
      superlative: "rehellisin",
    },
    {
      adjective: "Skinny",
      finnish: "laiha",
      comparative: "laihempi",
      superlative: "laihin",
    },
    {
      adjective: "Sleepy",
      finnish: "unelias",
      comparative: "uneliaampi",
      superlative: "uneliain",
    },
    {
      adjective: "Slim",
      finnish: "hoikka",
      comparative: "hoikempi",
      superlative: "hoikin",
    },
    {
      adjective: "Slimy",
      finnish: "limainen",
      comparative: "limaisempi",
      superlative: "limaisin",
    },
    {
      adjective: "Slow",
      finnish: "hidas",
      comparative: "hitaampi",
      superlative: "hitain",
    },
    {
      adjective: "Small, little",
      finnish: "pieni",
      comparative: "pienempi",
      superlative: "pienin",
    },
    {
      adjective: "Smart",
      finnish: "fiksu",
      comparative: "fiksumpi",
      superlative: "fiksuin",
    },
    {
      adjective: "Smelly",
      finnish: "haiseva",
      comparative: "haisevampi",
      superlative: "haisevin",
    },
    {
      adjective: "Smoky",
      finnish: "savuinen",
      comparative: "savuisempi",
      superlative: "savuisin",
    },
    {
      adjective: "Soft",
      finnish: "pehmeä",
      comparative: "pehmeämpi",
      superlative: "pehmein",
    },
    {
      adjective: "Sore",
      finnish: "kipeä",
      comparative: "kipeämpi",
      superlative: "kipein",
    },
    {
      adjective: "Sour",
      finnish: "hapan",
      comparative: "happamampi",
      superlative: "happamin",
    },
    {
      adjective: "Spicy",
      finnish: "mausteinen",
      comparative: "mausteisempi",
      superlative: "mausteisin",
    },
    {
      adjective: "Steep",
      finnish: "jyrkkä",
      comparative: "jyrkempi",
      superlative: "jyrkein",
    },
    {
      adjective: "Stingy",
      finnish: "pistava",
      comparative: "pistavampi",
      superlative: "pistavin",
    },
    {
      adjective: "Strange, odd, weird",
      finnish: "outo",
      comparative: "oudompi",
      superlative: "oudoin",
    },
    {
      adjective: "Strict",
      finnish: "tiukka",
      comparative: "tiukempi",
      superlative: "tiukin",
    },
    {
      adjective: "Strong",
      finnish: "vahva",
      comparative: "vahvempi",
      superlative: "vahvin",
    },
    {
      adjective: "Sunny",
      finnish: "aurinkoinen",
      comparative: "aurinkoisempi",
      superlative: "aurinkoisin",
    },
    {
      adjective: "Sweaty",
      finnish: "hikinen",
      comparative: "hikisempi",
      superlative: "hikisin",
    },
    {
      adjective: "Sweet",
      finnish: "makea",
      comparative: "makeampi",
      superlative: "makein",
    },
    {
      adjective: "Serious",
      finnish: "vakava",
      comparative: "vakavampi",
      superlative: "vakavin",
    },
  ],
  T: [
    {
      adjective: "Tan",
      finnish: "ruskea",
      comparative: "ruskeampi",
      superlative: "ruskein",
    },
    {
      adjective: "Tasty",
      finnish: "maukas",
      comparative: "maukkaampi",
      superlative: "maukkain",
    },
    {
      adjective: "Thick",
      finnish: "paksu",
      comparative: "paksumpi",
      superlative: "paksuin",
    },
    {
      adjective: "Thin",
      finnish: "ohut",
      comparative: "ohuempi",
      superlative: "ohuin",
    },
    {
      adjective: "Thirsty",
      finnish: "janoinen",
      comparative: "janoisempi",
      superlative: "janoisin",
    },
    {
      adjective: "Tiny",
      finnish: "pikkuruinen",
      comparative: "pikkuruisempi",
      superlative: "pikkuruisin",
    },
    {
      adjective: "True",
      finnish: "todellinen",
      comparative: "todellisempi",
      superlative: "todellisin",
    },
    {
      adjective: "Tired",
      finnish: "väsynyt",
      comparative: "väsyneempi",
      superlative: "väsynein",
    },
  ],
  U: [
    {
      adjective: "Ugly",
      finnish: "ruma",
      comparative: "rumempi",
      superlative: "rumin",
    },
    {
      adjective: "Unhappy",
      finnish: "onneton",
      comparative: "onnetomampi",
      superlative: "onnetomin",
    },
  ],
  V: [
    {
      adjective: "Valuable",
      finnish: "arvokas",
      comparative: "arvokkaampi",
      superlative: "arvokkain",
    },
    {
      adjective: "Various",
      finnish: "erilainen",
      comparative: "erilaisempi",
      superlative: "erilaisin",
    },
  ],
  W: [
    {
      adjective: "Warm",
      finnish: "lämmin",
      comparative: "lämpimämpi",
      superlative: "lämpimin",
    },
    {
      adjective: "Weak, faint",
      finnish: "heikko",
      comparative: "heikompi",
      superlative: "heikoin",
    },
    {
      adjective: "Wealthy",
      finnish: "varakas",
      comparative: "varakkaampi",
      superlative: "varakkain",
    },
    {
      adjective: "Wet",
      finnish: "märkä",
      comparative: "märempi",
      superlative: "märin",
    },
    {
      adjective: "Wide, broad",
      finnish: "laaja",
      comparative: "laajempi",
      superlative: "laajin",
    },
    {
      adjective: "Wild",
      finnish: "villi",
      comparative: "villimpi",
      superlative: "villein",
    },
    {
      adjective: "Windy",
      finnish: "tuulinen",
      comparative: "tuulisempi",
      superlative: "tuulisin",
    },
    {
      adjective: "Wise",
      finnish: "viisas",
      comparative: "viisaampi",
      superlative: "viisain",
    },
    {
      adjective: "Worldly",
      finnish: "maallinen",
      comparative: "maallisempi",
      superlative: "maallisin",
    },
    {
      adjective: "Worthy",
      finnish: "arvoinen",
      comparative: "arvokkaampi",
      superlative: "arvokkain",
    },
    {
      adjective: "Worried",
      finnish: "huolestunut",
      comparative: "huolestuneempi",
      superlative: "huolestunein",
    },
  ],
  Y: [
    {
      adjective: "Young",
      finnish: "nuori",
      comparative: "nuorempi",
      superlative: "nuorin",
    },
    // {
    //   adjective: "Younger",
    //   finnish: "nuorempi",
    //   comparative: "nuorempi",
    //   superlative: "nuorin",
    // },
  ],
};

const AdjectiveComparisonList = () => {
  const [selectedLetter, setSelectedLetter] = useState("A");

  const handleLetterClick = (letter: string) => {
    setSelectedLetter(letter);
    // Scroll to the section
    const element = document.getElementById(`letter-${letter}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Container>
      <Title>Finnish Adjective Comparison List</Title>

      <div>
        <p style={{ padding: "10px 0" }}>
          A comprehensive alphabetical list of Finnish adjectives with their
          comparative and superlative forms. Being able to describe and compare
          things is key for fluency.
        </p>

        <p style={{ padding: "10px 0", fontStyle: "italic" }}>
          Note: This is a work in progress. Some words may not be the ideal
          first choice used by native speakers.
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
                <StyledTableHeader>Comparative</StyledTableHeader>
                <StyledTableHeader>Superlative</StyledTableHeader>
              </tr>
            </thead>
            <tbody>
              {adjectiveData[letter as keyof typeof adjectiveData]?.map(
                (row, index) => (
                  <tr key={index}>
                    <StyledTableCell>{row.adjective}</StyledTableCell>
                    <StyledTableCell>{row.finnish}</StyledTableCell>
                    <StyledTableCell>{row.comparative}</StyledTableCell>
                    <StyledTableCell>{row.superlative}</StyledTableCell>
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
              <CompactMobileTable>
                <thead>
                  <tr>
                    <MobileTableHeader>English</MobileTableHeader>
                    <MobileTableHeader>Finnish</MobileTableHeader>
                    <MobileTableHeader>Comparative</MobileTableHeader>
                    <MobileTableHeader>Superlative</MobileTableHeader>
                  </tr>
                </thead>
                <tbody>
                  {adjectiveData[letter as keyof typeof adjectiveData]?.map(
                    (row, index) => (
                      <tr key={index}>
                        <MobileTableCell>{row.adjective}</MobileTableCell>
                        <MobileTableCell>{row.finnish}</MobileTableCell>
                        <MobileTableCell>{row.comparative}</MobileTableCell>
                        <MobileTableCell>{row.superlative}</MobileTableCell>
                      </tr>
                    )
                  )}
                </tbody>
              </CompactMobileTable>
            </MobileCaseSection>
          </MobileTableContainer>
        </div>
      ))}
    </Container>
  );
};

export default AdjectiveComparisonList;
