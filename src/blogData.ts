export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  publication?: string;
  pdfUrl?: string;
  excerpt: string;
  isUpcoming?: boolean;
  content?: {
    introduction: string;
    sections: {
      heading: string;
      body: string[];
      quote?: string;
      highlightBox?: {
        title: string;
        points: { label: string; text: string }[];
      };
    }[];
    takeaways: string[];
    authorNote?: string;
  };
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'tandarts-zorgverlener-ondernemer',
    slug: 'tandarts-zorgverlener-en-ondernemer',
    title: 'De tandarts als zorgverlener én ondernemer: Een delicate maar succesvolle balans',
    subtitle: 'Waarom het delegeren van de managementrol leidt tot rust in het hoofd, gemotiveerde medewerkers en een florerende praktijk.',
    date: 'December 2023',
    readTime: '5 min leestijd',
    category: 'Zorg & Praktijkmanagement',
    tags: ['Zorgsector', 'Tandartsen', 'Praktijkmanagement', 'Leiderschap', 'Delegeren', 'VVT'],
    publication: 'Gepubliceerd in VVT Magazine (Vlaamse Vereniging van Tandartsen)',
    pdfUrl: '/artikels/VVT_MAGAZINE_DECEMBER_2023_Poelaert_Tandarts.pdf',
    excerpt: 'Als tandarts ben je in de eerste plaats opgeleid om tandzorg te verlenen. Bedrijfsvoering wordt gedurende de opleiding sterk onderbelicht. Vele tandarts-praktijkhouders ervaren meer en meer een knagend spanningsveld tussen zorgverlener en ondernemer in de zorg...',
    isUpcoming: false,
    content: {
      introduction: 'Want ja, je bent als tandarts – zonder het wellicht ooit zo gepland te hebben – zorgondernemer. Je neemt immers vele typische ondernemersrisico’s zoals het investeren in spitstechnologische apparatuur, het aansturen van zorgmedewerkers en collega’s, het samenwerken in associatief verband en het voldoen aan een alsmaar complexere regelgeving. Het zijn vele zware petten die een zorgprofessional tegelijk moet opzetten.',
      sections: [
        {
          heading: 'Het knagend spanningsveld & de bijzondere druk',
          body: [
            'De combinatie van tandheelkunde en ondernemerschap wordt door veel praktijkhouders ervaren als een vrij zware druk. De tandartspraktijk is namelijk een heel bijzondere onderneming.',
            'Daar waar een klassieke onderneming veelal wisselende klanten heeft, bouwt een tandarts een langdurige band op: patiënten keren jaar na jaar terug. Bovendien zorgt de zorgondernemer veelal zélf voor de omzet aan de stoel, terwijl in een klassiek bedrijf de eigenaar zich focust op de algemene leiding en het personeel de operationele omzet genereert.',
            'Als tandarts ben je echter klinisch opgeleid om hoogwaardige tandzorg te verlenen. Bedrijfsvoering, financieel management en leidinggeven kwamen tijdens de academische opleiding nauwelijks aan bod. Het gevolg is een continu, knagend gevoel van achter de feiten aanlopen.'
          ],
          quote: 'Ook jij kan die succesvolle ondernemer worden die voorrang geeft aan de patiënten, niet sprakeloos staat bij de boekhouder en collega’s blijvend weet te motiveren.'
        },
        {
          heading: 'De Drie Rollen in elke zorgpraktijk',
          body: [
            'Om rust en overzicht te herwinnen, is het essentieel om haarscherp onderscheid te maken tussen de drie verschillende rollen die binnen een praktijk moeten worden ingevuld:'
          ],
          highlightBox: {
            title: 'De 3 Rollen van de Praktijkhouder',
            points: [
              {
                label: '1. De Zorgverlener',
                text: 'Het hoofd van het tandheelkundig team aan de stoel. Hier ligt je klinische passie en expertise, en hier borg je de patiëntenzorg en behandelkwaliteit.'
              },
              {
                label: '2. De Leider',
                text: 'Het bepalen van het ‘waarom’ van de praktijk: de missie, visie en strategische doelen. Deze rol inspireert, motiveert en geeft richting aan het hele team.'
              },
              {
                label: '3. De Manager',
                text: 'De organisatie, taakverdeling, administratie, opvolging van protocollen, voorraad en deadlines. Dit is waar de meeste praktijkhouders vastlopen!'
              }
            ]
          }
        },
        {
          heading: 'Dé Oplossing: Durf de rol van manager te delegeren!',
          body: [
            'Vele tandartsen proberen alle drie de rollen zelf te vervullen. En dat is nu net iets te veel van het goede.',
            'Wat als jij je ‘rol van manager’ nu eens delegeert aan mensen uit je eigen praktijk? Wat als je jouw medewerkers echt verantwoordelijk maakt voor administratieve, organisatorische en logistieke taken?',
            'Het structureel delegeren van verantwoordelijkheden empowert medewerkers en geeft ze vleugels. Mijn advies aan elke praktijkhouder is: laat je mensen zélf denken en beslissen. Wie zijn rol als zorgverlener én als leider opneemt en durft te delegeren, kan alleen maar winnen.',
            'Je krijgt medewerkers die voelen dat ze ertoe doen. Je wordt verlost van taken die energie vreten maar wel moeten gebeuren. Het resultaat is een zeldzame en zalige rust in je hoofd en een helikopterzicht over een gonzende praktijk.'
          ],
          quote: 'Zorg … leid en delegeer. Wie durft delegeren, gaat weer fluitend door het leven dankzij rust in het hoofd in een nochtans bloeiende praktijk.'
        },
        {
          heading: 'Het 4-Stappenplan naar ontspannen praktijkleiderschap',
          body: [
            'Mijn veelvuldige coachings van tandartsen en medische groepspraktijken hebben geleerd dat velen slechts een klein duwtje in de rug nodig hebben om tot actie over te gaan. Via een beproefd stappenplan kan elke praktijkhouder deze leiderschapsrol succesvol ontwikkelen:',
            '1. Inzicht in jezelf én in de medewerkers: Leer de verschillende persoonlijkheidstypes haarfijn ‘lezen’ zodat je op een natuurlijke manier gedaan krijgt wat nodig is.',
            '2. Een aantrekkelijke missie en visie ontwikkelen: Een helder kompas dat medewerkers inspireert en helpt om in het dagelijks werk autonoom bij te sturen.',
            '3. Financiële basiskennis: De essentiële ratio’s begrijpen om gelijkwaardig, zelfverzekerd en effectief met je boekhouder te schakelen.',
            '4. Concrete leiderschapstechnieken & delegeren: Praktische handvatten om taken los te laten en medewerkers blijvend te motiveren.'
          ]
        }
      ],
      takeaways: [
        'Tandartspraktijken zijn unieke zorgondernemingen waar klinische kwaliteit en bedrijfsvoering moeten samenkomen.',
        'Probeer niet tegelijk zorgverlener, leider én manager te zijn: delegeer de managementrol.',
        'Delegeren ontlast jou als praktijkhouder en geeft medewerkers eigenaarschap en motivatie (win-win-win).',
        'Rust in het hoofd en een strategisch helikopterzicht zijn bereikbaar via een gestructureerd stappenplan.'
      ],
      authorNote: 'Prof. Em. ir. Ludo Poelaert coacht al meer dan 21 jaar leidinggevenden, ziekenhuizen, artsen- en tandartspraktijken. Hij doceert management aan de UGent en volgde opleidingen aan Vlerick, London Business School en INSEAD.'
    }
  },
  {
    id: 'situationeel-leiderschap-praktijk',
    slug: 'situationeel-leiderschap-in-de-medische-praktijk',
    title: 'Situationeel Leiderschap in de praktijk: Waarom één stijl van aansturen nooit werkt',
    subtitle: 'Hoe je medewerkers motiveert door je stijl aan te passen aan hun competentie en betrokkenheid.',
    date: 'Binnenkort (Volgende maand)',
    readTime: '4 min leestijd',
    category: 'Leiderschap & Teamontwikkeling',
    tags: ['Situationeel Leiderschap', 'Hersey & Blanchard', 'Teamdynamiek', 'Coaching'],
    excerpt: 'Veel leidinggevenden sturen al hun medewerkers op exact dezelfde manier aan. De één voelt zich betutteld, de ander voelt zich aan zijn lot overgelaten. Ontdek hoe je schakelt tussen instrueren, coachen, ondersteunen en delegeren...',
    isUpcoming: true
  },
  {
    id: 'financiele-ratios-ontmaskerd',
    slug: 'financiele-ratios-ontmaskerd-voor-praktijkhouders',
    title: 'Financiële ratio’s ontmaskerd: Wat je boekhouder je niet vertelt over cashflow en solvabiliteit',
    subtitle: 'Begrijp de cijfers achter je onderneming in minder dan een kwartier zonder economische achtergrond.',
    date: 'Binnenkort',
    readTime: '6 min leestijd',
    category: 'Financiën & Strategie',
    tags: ['Financiële Analyse', 'Cashflow', 'Solvabiliteit', 'Praktijkrendement'],
    excerpt: 'Als de boekhouder zijn jaarrekening presenteert, knikken veel ondernemers beleefd maar zien ze door de bomen het bos niet meer. Welke 4 ratio’s vertellen je in 2 minuten de werkelijke gezondheid van jouw onderneming?',
    isUpcoming: true
  },
  {
    id: 'stress-draagkracht-zorgsector',
    slug: 'van-werkdruk-naar-werkplezier-stress-in-de-zorg',
    title: 'Van werkdruk naar werkplezier: De balans tussen draagkracht en draaglast in de zorg',
    subtitle: 'Hoe herken je de vroege signalen van overbelasting bij jezelf en je team vóór het te laat is?',
    date: 'Binnenkort',
    readTime: '5 min leestijd',
    category: 'Welzijn & Veerkracht',
    tags: ['Stressmanagement', 'Burnout-preventie', 'Veerkracht', 'Zorgprofessionals'],
    excerpt: 'Stress is geen zwakte, maar een fysiologisch signaal dat het evenwicht tussen draagkracht en draaglast verstoord is. Met het juiste kader zet je stress om in hernieuwde focus en werkplezier...',
    isUpcoming: true
  }
];
