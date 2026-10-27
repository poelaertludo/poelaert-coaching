/**
 * Trajecten achter de knoppen in "Gebruikte Modellen".
 *
 * Elk traject volgt dezelfde filosofie: kennismaking, nulmeting, coachingsessies en opvolging.
 * Om een nieuw traject toe te voegen: voeg hieronder een item toe met als sleutel de EXACTE
 * naam van het model uit MODELS (App.tsx). Het model krijgt dan automatisch een traject-venster.
 */

export interface Traject {
  /** Korte zin onder de titel */
  intro: string;
  /** Herkenbare situaties (bij voorkeur 4) */
  herkenbaar: string[];
  /** Wat de klant na het traject kan (bij voorkeur 4 à 5) */
  leerdoelen: string[];
  /** Optionele tool die in het traject wordt aangebracht (komt in een apart blok) */
  tool?: { naam: string; titel: string; tekst: string };
  /** Specifieke invulling van de 4 vaste stappen */
  stappen: {
    kennismaking: string;
    nulmeting: string;
    sessies: string;
    opvolging: string;
  };
}

/**
 * Link om een kennismaking te boeken.
 * Zet hier later de link van je online agenda (Calendly, Google Agenda, Microsoft Bookings).
 * Zolang dit leeg is, opent de knop een vooraf ingevuld e-mailbericht.
 */
export const KENNISMAKING_URL = 'https://calendar.app.google/UEwvToJLxp8oqrS17';
export const KENNISMAKING_EMAIL = 'ludo.poelaert@ugent.be';

export const TRAJECTEN: Record<string, Traject> = {
  'Process Communicatie': {
    intro:
      'Leer jezelf beter kennen en anderen haarfijn lezen: met Process Communicatie (Taibi Kahler) communiceer je op maat van je gesprekspartner en krijg je meer gedaan in een correcte, gebalanceerde samenwerking.',
    herkenbaar: [
      'Ik zeg het duidelijk, maar mijn boodschap komt niet aan.',
      'Met sommige collega\'s of medewerkers loopt het steeds stroef en ik weet niet waarom.',
      'Onder druk reageer ik (of anderen) op een manier die we achteraf betreuren.',
      'Ik wil mensen beter motiveren, maar wat bij de een werkt, werkt bij de ander niet.',
    ],
    leerdoelen: [
      'Je eigen persoonlijkheidsprofiel en dat van anderen begrijpen',
      'Herkennen hoe iemand het liefst communiceert en de waarneming van de wereld',
      'Je communicatie afstemmen op de ander, zodat je boodschap aankomt',
      'Stresspatronen bij jezelf en anderen tijdig herkennen en erop reageren',
      'Mensen gerichter motiveren en een samenwerking in balans houden',
    ],
    stappen: {
      kennismaking:
        'In 20 minuten (gratis) bekijken we jouw vraag en situatie: een lastige samenwerking, een team of jezelf beter leren kennen? We beslissen samen of coaching zinvol is.',
      nulmeting:
        'We brengen jouw persoonlijk profiel in kaart en bekijken hoe je nu communiceert, met wie het goed loopt en met wie niet. Zo weten we waar je nu staat.',
      sessies:
        'Je leert jouw profiel en dat van anderen lezen en oefent met concrete situaties uit je eigen werk: gesprekken voeren, feedback geven, motiveren en omgaan met stress.',
      opvolging:
        'Na een afgesproken periode kijken we terug: wat is veranderd in je gesprekken en samenwerking? We sturen bij waar nodig, zodat het resultaat blijft.',
    },
  },
  'Financieel beheer ontmaskerd!': {
    intro:
      'Van een raadsel naar een instrument: je leert je cijfers lezen, begrijpen en gebruiken om betere beslissingen te nemen.',
    herkenbaar: [
      'Mijn praktijk of zaak draait goed, maar ik weet niet wat er netto overblijft.',
      'Ik overweeg een investering, een verbouwing of een vennoot en ik twijfel.',
      'De jaarrekening komt binnen en ik lees ze niet echt.',
      'Ik weet niet wat een prestatie of product mij werkelijk kost.',
    ],
    leerdoelen: [
      'Een balans en een resultatenrekening zelfstandig lezen',
      'De kostprijs van je prestaties of producten berekenen',
      'Je solvabiliteit, liquiditeit en rentabiliteit begrijpen (ratio-analyse)',
      'Een investering objectief beoordelen',
      'Met meer zekerheid praten met je boekhouder of bank',
    ],
    stappen: {
      kennismaking:
        'In 20 minuten (gratis) bekijken we jouw vraag en situatie: een praktijk, een eenmanszaak of een vennootschap? We beslissen samen of coaching zinvol is.',
      nulmeting:
        'Je bezorgt je laatste jaarrekening(en). Ik analyseer samen met jou je financiële structuur, kosten en rentabiliteit, zodat we weten waar je nu staat.',
      sessies:
        'Balanslezen, resultatenrekening, kostprijsberekening, ratio-analyse en investeringsanalyse. Alles op jouw eigen cijfers, met concrete tools die je meteen toepast.',
      opvolging:
        'Na een afgesproken periode meten we opnieuw: wat is verbeterd en welke beslissingen zijn genomen? We sturen bij waar nodig, zodat het resultaat blijft.',
    },
  },
  'Earned Value Management (Effectief projecten managen)': {
    intro:
      'Meten is weten: je leert objectief te zien waar je project staat in tijd en geld, en tijdig bij te sturen voordat het te laat is.',
    herkenbaar: [
      'Mijn project loopt uit en niemand weet precies sinds wanneer.',
      'We zijn "bijna klaar", maar het budget is al op.',
      'Ik krijg rapporten, maar geen echt zicht op wat er bereikt is voor het geld dat we uitgaven.',
      'Ik moet aan de directie of opdrachtgever uitleggen waar het project werkelijk staat.',
    ],
    leerdoelen: [
      'Een project opdelen in meetbare werkpakketten',
      'Planned Value, Earned Value en Actual Cost begrijpen en berekenen',
      'Kostenindex (CPI) en planningsindex (SPI) lezen en interpreteren',
      'De eindkost en einddatum van een project tijdig voorspellen',
      'Met cijfers rapporteren aan directie en opdrachtgever',
      'Slack gebruiken om projectcommunicatie en opvolging te stroomlijnen',
    ],
    tool: {
      naam: 'Slack',
      titel: 'Introductie tot een zeer effectieve tool, namelijk Slack',
      tekst:
        'Je maakt kennis met Slack en leert hoe je het inzet voor je project: gesprekken per project of werkpakket, snelle afspraken en een vlotte opvolging van je team, op één plaats in plaats van in eindeloze e-mails.',
    },
    stappen: {
      kennismaking:
        'In 20 minuten (gratis) bekijken we jouw project of projectorganisatie: wat loopt er, wat zijn de pijnpunten en wat wil je bereiken? We beslissen samen of coaching zinvol is.',
      nulmeting:
        'We bekijken jouw lopend project: planning, budget en voortgangsrapportering. Zo zien we waar je nu staat en welke gegevens nodig zijn om Earned Value Management toe te passen.',
      sessies:
        'Werkpakketten bepalen, Planned Value, Earned Value en Actual Cost berekenen, CPI en SPI interpreteren en prognoses maken. Telkens op jouw eigen project, met tools die je meteen gebruikt.',
      opvolging:
        'Na een afgesproken periode meten we opnieuw: klopt de voorspelling, zijn de afwijkingen kleiner geworden, welke beslissingen zijn genomen? We sturen bij waar nodig.',
    },
  },
  'JoHari Venster': {
    intro:
      'Verklein je blinde vlekken: ontdek hoe anderen jouw gedrag en leiderschap echt ervaren, en bouw zo aan meer vertrouwen en openheid in je team.',
    herkenbaar: [
      'Ik krijg signalen dat ik anders overkom dan ik bedoel, maar ik weet niet welke.',
      'Mijn team zegt weinig, en ik weet niet wat er echt leeft.',
      'Ik wil meer feedback, maar ik weet niet hoe ik erom moet vragen.',
      'Ik voel dat ik mijn potentieel nog niet volledig benut.',
    ],
    leerdoelen: [
      'De vier velden van het JoHari Venster begrijpen: open, blind, verborgen en onbekend',
      'Feedback vragen en ontvangen zonder in de verdediging te schieten',
      'Gepast delen van jezelf om het open veld te vergroten',
      'Je blinde vlekken herkennen en erover in gesprek gaan',
      'Vertrouwen en bewustzijn in je team versterken',
    ],
    stappen: {
      kennismaking:
        'In 20 minuten (gratis) bekijken we jouw vraag: waar loop je tegenaan in je samenwerking of leiderschap? We beslissen samen of coaching zinvol is.',
      nulmeting:
        'Je verzamelt, met mijn begeleiding, feedback van collega\'s of medewerkers. Zo krijgen we een eerste beeld van jouw open veld en je blinde vlekken.',
      sessies:
        'We bespreken de feedback en oefenen in concrete situaties: feedback vragen, geven en ontvangen, en gepast jezelf tonen. Zo vergroot je stap voor stap je open veld.',
      opvolging:
        'Na een afgesproken periode meten we opnieuw: hoe ervaren anderen jou nu? We sturen bij waar nodig, zodat het resultaat blijft.',
    },
  },
  'Stress Managementmodel': {
    intro:
      'Stress is een signaal dat sturing vraagt. Je leert waar jouw sweet spot ligt, hoe je stressoren tijdig herkent en hoe je ze gezond reguleert.',
    herkenbaar: [
      'Ik werk voortdurend onder druk en kom nauwelijks tot rust.',
      'Ik merk dat mijn prestaties dalen en ik maak meer fouten.',
      'Een of meer medewerkers lijken uitgeput of afgehaakt.',
      'Ik wil burn-out voorkomen, bij mezelf en in mijn team.',
    ],
    leerdoelen: [
      'Het verband tussen stress en prestatie begrijpen (wet van Yerkes-Dodson)',
      'Je eigen stressniveau en vroege signalen herkennen',
      'Stressoren in je werk en organisatie identificeren',
      'Concrete technieken toepassen om stress te reguleren',
      'Je team helpen binnen de optimale zone te werken',
    ],
    stappen: {
      kennismaking:
        'In 20 minuten (gratis) bekijken we jouw situatie: waar komt de druk vandaan en wat is de impact? We beslissen samen of coaching zinvol is.',
      nulmeting:
        'We brengen jouw stresssituatie in kaart: waar sta je op de curve, welke stressoren spelen en welke signalen zie je bij jezelf of je team?',
      sessies:
        'Je werkt aan haarscherpe kaders en technieken om stressoren te beheersen: prioriteiten stellen, grenzen bewaken, herstel inbouwen en gesprekken voeren over druk.',
      opvolging:
        'Na een afgesproken periode kijken we terug: waar sta je nu op de curve? We sturen bij waar nodig, zodat het resultaat blijft.',
    },
  },
  'Situationeel Leiderschap': {
    intro:
      'Eén leiderschapsstijl werkt niet voor iedereen. Je leert je sturing flexibel aanpassen aan de taakvolwassenheid en motivatie van elke medewerker.',
    herkenbaar: [
      'Wat bij de ene medewerker werkt, werkt bij de andere niet.',
      'Ik controleer te veel, of ik laat te veel los.',
      'Ik delegeer en het resultaat valt tegen.',
      'Een medewerker is gemotiveerd maar nog niet bekwaam, of omgekeerd.',
    ],
    leerdoelen: [
      'De vier stijlen kennen: sturen, coachen, ondersteunen en delegeren',
      'Het ontwikkelingsniveau van een medewerker per taak inschatten',
      'Je stijl afstemmen op de situatie en de persoon',
      'Doeltreffend delegeren met duidelijke afspraken',
      'Medewerkers laten groeien naar zelfstandigheid',
    ],
    stappen: {
      kennismaking:
        'In 20 minuten (gratis) bekijken we jouw leiderschapsvraag: welke medewerkers of situaties vragen je aandacht? We beslissen samen of coaching zinvol is.',
      nulmeting:
        'We bekijken jouw huidige stijl en die van enkele medewerkers per taak. Zo zien we waar jouw stijl en hun behoefte niet op elkaar aansluiten.',
      sessies:
        'Je oefent met concrete cases uit je eigen team: de juiste stijl kiezen, gesprekken voeren en delegeren. Telkens met tools die je meteen toepast.',
      opvolging:
        'Na een afgesproken periode kijken we terug: wat is veranderd in je team en bij je medewerkers? We sturen bij waar nodig, zodat het resultaat blijft.',
    },
  },
  'Kotter (Veranderingsmanagement)': {
    intro:
      'Verandering stuit vaak op weerstand. Met het beproefde 8-stappenplan van Kotter voer je veranderingen gestructureerd, gedragen en duurzaam door.',
    herkenbaar: [
      'Er staat een verandering op til en ik weet niet hoe eraan te beginnen.',
      'Mijn team of medewerkers verzetten zich tegen de nieuwe aanpak.',
      'Een eerdere verandering is na een tijd weggesijpeld.',
      'Ik heb een visie, maar ik krijg anderen er niet in mee.',
    ],
    leerdoelen: [
      'De 8 stappen van Kotter begrijpen en toepassen',
      'Urgentiebesef creëren en een sturende coalitie bouwen',
      'Een heldere visie formuleren en breed communiceren',
      'Weerstand begrijpen en obstakels wegnemen',
      'Snelle successen realiseren en de verandering verankeren',
    ],
    stappen: {
      kennismaking:
        'In 20 minuten (gratis) bekijken we jouw verandering: wat wil je bereiken en waar loop je op vast? We beslissen samen of coaching zinvol is.',
      nulmeting:
        'We bekijken waar je organisatie of team nu staat in de 8 stappen: wat is er al gedaan, wat ontbreekt en waar zit de weerstand?',
      sessies:
        'Stap voor stap werk je aan jouw eigen veranderingsplan: urgentie, coalitie, visie, communicatie, obstakels en snelle successen. Telkens op jouw concrete situatie.',
      opvolging:
        'Na een afgesproken periode meten we opnieuw: is de verandering verankerd? We sturen bij waar nodig, zodat het resultaat blijft.',
    },
  },
  'Business Model Canvas': {
    intro:
      'Breng de kern van je onderneming terug tot de essentie: je verdienmodel visueel en strategisch helder op één blad.',
    herkenbaar: [
      'Ik start een zaak of praktijk en wil mijn idee scherp krijgen.',
      'Mijn onderneming draait, maar ik zie niet waar de winst echt vandaan komt.',
      'Ik overweeg een nieuwe richting, een nieuw aanbod of een andere doelgroep.',
      'Mijn partners of team hebben niet dezelfde kijk op de onderneming.',
    ],
    leerdoelen: [
      'De 9 bouwstenen van het Business Model Canvas begrijpen',
      'Je waardepropositie en klantsegmenten scherp formuleren',
      'Kanalen, klantrelaties en inkomstenstromen in kaart brengen',
      'Je kostenstructuur en kernmiddelen doorlichten',
      'Een helder en toetsbaar verdienmodel op papier zetten',
    ],
    stappen: {
      kennismaking:
        'In 20 minuten (gratis) bekijken we jouw onderneming of idee: waar sta je en wat wil je bereiken? We beslissen samen of coaching zinvol is.',
      nulmeting:
        'We vullen samen een eerste canvas in van jouw huidige situatie. Zo zien we meteen welke bouwstenen sterk zijn en welke vragen oproepen.',
      sessies:
        'Je werkt de bouwstenen een voor een uit en test ze: waarde, klanten, kanalen, middelen, kosten en inkomsten. Alles op jouw eigen onderneming.',
      opvolging:
        'Na een afgesproken periode kijken we terug: wat is uitgevoerd en wat leverde het op? We sturen het canvas bij waar nodig.',
    },
  },
  '9-Krachten Model van Porter': {
    intro:
      'Begrijp de krachten die jouw markt beheersen: je analyseert de concurrentieomgeving en het winstpotentieel van je zaak voor een strategische voorsprong.',
    herkenbaar: [
      'De concurrentie in mijn sector neemt toe en ik weet niet hoe te reageren.',
      'Klanten of leveranciers leggen steeds meer hun wil op.',
      'Ik overweeg een nieuwe markt of een nieuw aanbod.',
      'Ik wil weten hoe aantrekkelijk mijn sector werkelijk is.',
    ],
    leerdoelen: [
      'De vijf klassieke krachten van Porter begrijpen en toepassen',
      'De vier moderne krachten toevoegen: digitalisering, regelgeving, complementors en globalisering',
      'De onderhandelingsmacht van afnemers en leveranciers inschatten',
      'Toetredingsbarrières en substituten correct beoordelen',
      'De concurrentiële rivaliteit in je sector analyseren',
      'Een strategie bepalen die past bij je positie in de markt',
    ],
    stappen: {
      kennismaking:
        'In 20 minuten (gratis) bekijken we jouw markt en vraag: waar voel je druk? We beslissen samen of coaching zinvol is.',
      nulmeting:
        'We schetsen samen de huidige situatie van jouw sector en jouw positie erin. Zo zien we welke krachten voor jou het zwaarst wegen.',
      sessies:
        'Je analyseert elke kracht op jouw eigen markt en vertaalt de bevindingen naar strategische keuzes: positionering, differentiatie en prioriteiten.',
      opvolging:
        'Na een afgesproken periode kijken we terug: hoe is de markt veranderd en wat leverden je keuzes op? We sturen bij waar nodig.',
    },
  },
  'De 4 levensposities! Een echte keuze voor succes': {
    intro:
      'Ontdek vanuit welke levenspositie jij en je teamleden communiceren, en kies bewust voor een constructieve "Ik ben OK, jij bent OK" grondhouding.',
    herkenbaar: [
      'Ik merk dat gesprekken vaak in dezelfde negatieve patronen belanden.',
      'Ik heb de neiging om anderen de schuld te geven, of net om mezelf klein te maken.',
      'Een collega of medewerker reageert steeds afwerend of onderdanig.',
      'Ik wil dat samenwerking en relaties op wederzijds respect steunen.',
    ],
    leerdoelen: [
      'De vier levensposities van Thomas Harris herkennen',
      'Je eigen positie en die van anderen bewust onderkennen',
      'Patronen herkennen die relaties en samenwerking verstoren',
      'Bewust kiezen voor "Ik ben OK, jij bent OK"',
      'Constructiever communiceren en samenwerken',
    ],
    stappen: {
      kennismaking:
        'In 20 minuten (gratis) bekijken we jouw vraag: welke relaties of gesprekken lopen moeilijk? We beslissen samen of coaching zinvol is.',
      nulmeting:
        'We brengen in kaart vanuit welke positie je in verschillende situaties en met verschillende mensen communiceert.',
      sessies:
        'Je oefent met concrete situaties uit je werk en leven: patronen doorbreken, anders reageren en bewust kiezen voor een constructieve grondhouding.',
      opvolging:
        'Na een afgesproken periode kijken we terug: wat is veranderd in je relaties en samenwerking? We sturen bij waar nodig, zodat het resultaat blijft.',
    },
  },
};
