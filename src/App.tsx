import { useState } from 'react';
import { ShoppingCart, X } from 'lucide-react';
import coverBoek from './assets/CoverBoekPapa.png';
import papaPhoto from './assets/Papa_Photo.png';

const BOOK_REVIEWS = [
  { text: "Dit boek lijkt dik, maar leest als een trein...", author: "Robin Demeeter, ondernemer pur sang" },
  { text: "Als je het reilen en zeilen van een onderneming wil kennen, is dit boek echt de moeite.", author: "Prof. dr. Ronald Buyl" },
  { text: "Poelaert verstaat de kunst om concrete zaken in verband met de onderneming aan te brengen. Geen overbodige ballast ... alleen de kern van bedrijfseconomie wordt toegelicht. Het hoofdstuk over boekhouden en kostprijscalculatie is een juweeltje van pedagogische aanpak. Eerst kort de theorie en dan onmiddellijk toegepast in realistische cases.", author: "Francis Cornelis, boekhouder" },
  { text: "Dit boek puilt uit van concrete en toepasbare bedrijfskundige concepten. De opbouw van het boek is zodanig dat de lezer stap voor stap inzicht krijgt in de operationele en financiële werking van de onderneming. Kostprijscalculatie wordt vaak gezien als een moeilijke opdracht. Met dit boek krijgt de lezer tools in handen die het berekenen van kostprijzen van producten plots eenvoudig maken...", author: "Karel van den Berghe, bedrijfsleider Globis" },
  { text: "Een must voor elke verantwoordelijke manager...", author: "Lode Degeyter, algemeen directeur van de Hogeschool West-Vlaanderen" },
  { text: "Als ingenieursstudent uit een niet economische richting gaf dit boek mij een prima inzicht in bedrijfseconomie.", author: "Yasmine Beulque, student biochemie aan de Ugent" },
  { text: "Beschouw dit werk maar als een referentie in de beginselen van bedrijfseconomie. De verdienste is vooral dat het boek elke ondernemer en manager zal weten te prikkelen: van economische concepten tot vennootschapsvormen over kostprijscalculatie en financiële analyse van de onderneming. Alles wordt in een bevattelijke taal concreet en helder gebracht. Een aanrader...", author: "Kurt Coffyn, Global Operations Director Cargill Animal" },
  { text: "Ondernemen is risico durven nemen. Ondernemen is durven buiten de lijntjes kleuren. Ondernemen vereist daarnaast ook grondige kennis van de economische context waarbinnen men opereert. Verder is men het aan zichzelf verplicht om een minimum aan financiële bagage te hebben. Dit vlot geschreven boek helpt je moeiteloos op weg...", author: "Pol Descamps, oud-directeur-beheerder eigenaar Barco Industries" },
  { text: "Bedrijfskunde is een breed studiegebied. Poelaert is erin geslaagd om de 5 kernaspecten ervan duidelijk en helder te belichten. De cases geven duidelijk inzicht in soms complexe vraagstukken.", author: "Dirk Laverge, docent economie aan de Hogeschool West-Vlaanderen" }
];

const MODELS = [
  { 
    name: 'Process Communicatie', 
    desc: 'Ik schets jouw persoonlijk profiel en leer je jezelf beter kennen. Nog sterker: ik leer je anderen haarfijn te lezen en zo krijg je meer van hen gedaan in een correcte, gebalanceerde samenwerking!' 
  },
  { 
    name: 'JoHari Venster', 
    desc: 'Samen verkleinen we jouw blinde vlekken. Ik help je te ontdekken hoe anderen jouw leiderschap ervaren, zodat het vertrouwen en het bewustzijn binnen jouw team sterk groeit.' 
  },
  { 
    name: 'Stress Managementmodel', 
    desc: 'Stress is een signaal dat sturing vraagt. Ik reik je haarscherpe kaders en technieken aan om stressoren in jouw organisatie tijdig te identificeren en gezond te reguleren.' 
  },
  { 
    name: 'Situationeel Leiderschap', 
    desc: 'Eén leiderschapsstijl werkt niet voor iedereen. Ik leer je om jouw sturing flexibel aan te passen aan de taakvolwassenheid en motivatie van elke medewerker voor direct resultaat.' 
  },
  { 
    name: 'Kotter (Veranderingsmanagement)', 
    desc: 'Verandering stuit vaak op weerstand. Met dit beproefde 8-stappenplan begeleid ik je om organisatorische transformaties gestructureerd, gedragen en duurzaam door te voeren.' 
  },
  { 
    name: 'Business Model Canvas', 
    desc: 'Samen brengen we de kern van jouw onderneming terug tot de essentie. Ik help je om alle cruciale bouwstenen van je verdienmodel visueel en strategisch helder te stellen.' 
  },
  { 
    name: '9-Krachten Model van Porter', 
    desc: 'Begrijp de krachten die jouw markt beheersen. Ik analyseer samen met jou de concurrentieomgeving en het winstpotentieel van je zaak voor een sterke strategische voorsprong.' 
  },
  { 
    name: 'Earned Value Management', 
    desc: 'Meten is weten in projectmanagement. Ik geef je de exacte tools om de voortgang, budgetten en prestaties van je projecten objectief te bewaken en tijdig bij te sturen op cijfers.' 
  },
  { 
    name: 'Financieel beheer ontmaskerd!', 
    desc: 'Voor velen is financiën een raadsel en ondoorgrondelijk moeilijk. Ik leer je in een mum van tijd balanslezen, kosten berekenen en samen met jou maken we de ratio-analyse van jouw onderneming!' 
  },
  { 
    name: 'De 4 levensposities! Een echte keuze voor succes', 
    desc: 'Ik leer je inzien vanuit welke levenspositie jij en je teamleden communiceren. Met dit krachtige model van Thomas Harris help ik je om bewust te kiezen voor een constructieve, "I\'m OK, You\'re OK" grondhouding die relaties en samenwerking transformeert!' 
  }
];

const COACHING_SERVICES = [
  { id: 1, title: 'Individuele Executive Coaching', image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  { id: 2, title: 'Team Coaching & Dynamiek', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  { id: 3, title: 'Leiderschapsontwikkeling', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  { id: 4, title: 'Veranderingsmanagement Sessies', image: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' }
];

const CLIENTS = [
  "Bpost", "Proximus", "Biotronik", "PUC KULeuven", "Adecco (BeNeLux)", "Apple Computer BeNeLux", "Barry Callebaut",
  "UGent", "Vrije Universiteit Brussel", "De Vlaamse Gemeenschap", "Stad Gent",
  "AZ Delta (Roeselare)", "Sonaca", "Denys (Bouwfirma)", "Air Belgium International",
  "Christelijke Mutualiteiten (CM)", "KLAV (Koninklijk Limburgs Apothekers Verbond)", "APB (Algemene Pharmaceutische Bond)", 
  "Howest", "Hogeschool Gent (Departement Lerarenopleiding)", "Veronove", "Causamatics",
  "Flanders International College for Osteopathy", "VVT (Vlaamse Vereniging van Tandartsen)", "Philippus Neri GGZ Waas en Dender", 
  "UGain", "Timmermans", "IZIDOC", "OsteoSoft", "Sunair", "Team Consult"
];

const TESTIMONIALS = [
  {
    author: "Paul Meuwissen, Directeur KLAV (Koninklijk Limburgs Apothekers Verbond)",
    text: "De coaching van Prof. Poelaert bracht onmiddellijk helderheid en dynamiek in ons organisatiemodel. Zijn pragmatische aanpak en diepgaande bedrijfskundige inzichten hebben onze werking duurzaam versterkt."
  },
  {
    author: "Vincent Koningsveld, Voorzitter Raad van Bestuur VVT (Vlaamse Vereniging van Tandartsen)",
    text: "Ludo verstaat als geen ander de kunst om complexe leiderschapsvraagstukken te vertalen naar effectieve beslissingen. Zijn strategisch advies gaf ons bestuur het nodige klankbord om de organisatie toekomstbestendig te sturen."
  },
  {
    author: "Algemene Pharmaceutische Bond (APB)",
    text: "Het strategisch advies en de leiderschapsbegeleiding van Prof. Poelaert boden onze organisatie waardevolle kaders en heldere inzichten binnen de farmaceutische sector."
  },
  {
    author: "Philippus Neri GGZ Waas en Dender",
    text: "Prof. Poelaert bracht waardevolle balans, leiderschapsinzichten en organisatiestructuur in onze gezondheidszorgorganisatie."
  },
  {
    author: "Dr. Karl Dujardin, Diensthoofd Cardiologie, Ondervoorzitter Medische Raad AZ Delta",
    text: "De coaching van Ludo is een enorme opsteker geweest en veranderde mijn visie op praktijkvoering grondig. Dankzij zijn advies over leiderschap en transparante communicatie runnen we nu een uiterst efficiënte praktijk met een hecht en gelukkig team."
  },
  {
    author: "Frederik Lievrouw, Logistics Manager",
    text: "Ludo Poelaert leidde ons team in in de techniek van situationeel leiderschap en bracht direct structuur, rust en motivatie. Zijn inzichten lieten me inzien hoe ik mijn leiderschapsstijl haarscherp kon aanpassen aan het ontwikkelingsniveau van elke medewerker."
  },
  {
    author: "Robin Demeeter, CEO Causamatics",
    text: "Het advies van Ludo brengt een zeldzame combinatie van diepe academische kennis en directe praktijkrelevantie. Zijn lessen en inzichten hebben ons vanaf het eerste moment met volle goesting geholpen om ons bedrijf strategisch verder te bouwen."
  },
  {
    author: "Christopher Read, D.O. Osteopaat & Bedrijfsleider",
    text: "Jouw coaching is verrijkend, helder en geeft schitterende resultaten. Op minder dan 9 uur heb jij mijn business in kaart gebracht en samen hebben we een verkoopstrategie bepaald die uitstekend heeft gewerkt."
  },
  {
    author: "Jolien Vanderstappen, Kinesitherapeut Ninove",
    text: "Dankzij het persoonlijke advies en de beheer-tools van Prof. Poelaert ben ik gegroeid van een eenmanszaak naar een bloeiende GCV met 6 collega's. Ik heb nog geen minuut spijt van zijn coaching; het bracht me structuur en succes."
  },
  {
    author: "Hendrik Maes, Praktijkhouder 'In Balans' Haacht",
    text: "Ludo neemt geen blad voor de mond en snijdt meteen naar de kern. Door zijn beproefde methode van leiderschap en cijfermatige transparantie hebben we een sterk merk opgebouwd en groeien we elk kwartaal."
  },
  {
    author: "Egwin Ponette, Osteopaat Osteolab",
    text: "Zijn coaching veranderde mijn wereld ten goede en hielp me van constante operationele druk naar een heldere visie en missie. Collega's tonen meer betrokkenheid en respect, en de praktijk is uitgegroeid tot een geoliede organisatie."
  },
  {
    author: "Frank Demeester, Praktijkhouder Zele",
    text: "Ludo gaf mij persoonlijk advies over mijn praktijk met een positief inspirerende methode. De beslissing om hem in te schakelen is wellicht mijn beste zakelijke beslissing geweest van de afgelopen jaren."
  },
  {
    author: "Hans Schallier, D.O. Osteopaat",
    text: "Ik wil Ludo van harte bedanken voor de boeiende tweedaagse 'Praktijkmanagement'. Het was voor mij een echte eye-opener die op een uiterst enthousiaste en meeslepende manier gebracht werd."
  },
  {
    author: "Jeroen Smesman, Kinesitherapeut Ninove",
    text: "Mijn praktijk is ondertussen ettelijke malen beter gemanaged dan voordien. Ik volg nauwkeurig Ludo's adviezen en bel hem geregeld; hij is voor mij een uiterst betrouwbaar klankbord dat het verschil maakt."
  },
  {
    author: "Benjamin Micholt, Oprichter Micholt Innovations",
    text: "Ludo heeft mij gecoacht en bracht zinvolle, eenvoudige structuur in mijn onderneming. Dankzij zijn begeleiding kreeg ik echt plezier in beursdeelnames en het bezoeken van professionele klanten."
  }
];

function App() {
  const [isMenuOpen] = useState(false);
  const [cart, setCart] = useState<number[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (id: number) => {
    if (!cart.includes(id)) {
      setCart([...cart, id]);
    }
    setIsCartOpen(true);
  };

  const removeFromCart = (id: number) => {
    setCart(cart.filter(item => item !== id));
  };

  const getCartItems = () => {
    return cart.map(id => COACHING_SERVICES.find(s => s.id === id)!);
  };

  const handleCheckout = () => {
    const items = getCartItems().map(i => i.title).join(', ');
    const subject = encodeURIComponent('Aanvraag Coaching Prof. Poelaert: ' + items);
    const body = encodeURIComponent(`Beste Prof. Poelaert,\n\nGraag kom ik met u in contact voor de volgende coaching diensten:\n- ${items}\n\nMet vriendelijke groet,`);
    window.location.href = `mailto:ludo.poelaert@ugent.be?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <header className="header">
        <div className="container header-inner">
          <div className="logo text-center">
            <h1>Ludo Poelaert</h1>
            <div className="logo-subtitle">Professor Emeritus UGent | Coaching & Advies</div>
          </div>
          
          <nav>
            <ul className={`nav ${isMenuOpen ? 'open' : ''}`}>
              <li><a href="#over" className="nav-link">Over</a></li>
              <li><a href="#boek" className="nav-link">Boek</a></li>
              <li><a href="#modellen" className="nav-link">Modellen</a></li>
              <li><a href="#coaching" className="nav-link">Coaching Aanvragen</a></li>
              <li><a href="#referenties" className="nav-link">Referenties</a></li>
            </ul>
          </nav>

          <div className="nav-icons">
            <div className="cart-icon-wrapper" onClick={() => setIsCartOpen(!isCartOpen)}>
              <ShoppingCart size={24} color="var(--color-text)" />
              {cart.length > 0 && <span className="cart-badge">{cart.length}</span>}
            </div>
          </div>
        </div>
      </header>

      {/* Cart Sidebar/Modal overlay */}
      {isCartOpen && (
        <div style={{
          position: 'fixed', top: 0, right: 0, bottom: 0, width: '100%', maxWidth: '400px', 
          backgroundColor: '#fff', zIndex: 1000, boxShadow: '-5px 0 15px rgba(0,0,0,0.1)',
          padding: '2rem', display: 'flex', flexDirection: 'column'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <h3>Jouw Aanvragen</h3>
            <button onClick={() => setIsCartOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
              <X size={24} />
            </button>
          </div>
          
          {cart.length === 0 ? (
            <p>Geen coaching diensten geselecteerd.</p>
          ) : (
            <>
              <div style={{ flexGrow: 1, overflowY: 'auto' }}>
                {getCartItems().map(item => (
                  <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 0', borderBottom: '1px solid var(--color-border)' }}>
                    <span>{item.title}</span>
                    <button onClick={() => removeFromCart(item.id)} style={{ color: 'red', background: 'none', border: 'none', cursor: 'pointer' }}>Verwijder</button>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: '2rem' }}>
                <button className="btn btn-accent" style={{ width: '100%' }} onClick={handleCheckout}>
                  Contact Prof Poelaert for: Aanvraag
                </button>
              </div>

              <div style={{ marginTop: '1.5rem', fontSize: '0.85rem', color: '#666', borderTop: '1px solid #eee', paddingTop: '1rem' }}>
                <p style={{ marginBottom: '0.4rem' }}><strong>Direct Contact:</strong></p>
                <p style={{ marginBottom: '0.2rem' }}>✉️ <a href="mailto:ludo.poelaert@ugent.be" style={{ color: 'var(--color-accent)' }}>ludo.poelaert@ugent.be</a></p>
                <p>📞 <a href="tel:+32477992597" style={{ color: 'var(--color-accent)' }}>+32 477 99 25 97</a></p>
              </div>
            </>
          )}
        </div>
      )}

      <main>
        {/* Hero / Over Section */}
        <section id="over" className="section container">
          <div className="grid-2">
            <div className="hero-text" style={{ textAlign: 'left' }}>
              <h2 style={{ textAlign: 'left', color: 'var(--color-text)', marginBottom: '0.3rem' }}>Ludo Poelaert</h2>
              <h3 style={{ marginBottom: '1.5rem', fontWeight: 400, fontSize: '1.15rem', lineHeight: '1.4', color: '#111111' }}>
                Professor Emeritus bedrijfseconomie, bedrijfsmanagement en ondernemerschap, UGent
              </h3>

              <div style={{ marginBottom: '1.5rem', fontSize: '0.95rem', lineHeight: '1.6', color: '#111111' }}>
                <p style={{ marginBottom: '0.5rem' }}>
                  <strong>Faculteit Ingenieurswetenschappen en Architectuur (FEA)</strong><br />
                  Vakgroep Industriële Systemen en Productontwerp (EA18)
                </p>
                <p style={{ marginBottom: '0.5rem' }}>
                  🎓 <strong>Wetenschappelijk coördinator</strong> van de post-academische opleiding:<br />
                  <em>“Effectief leiderschap: Essentiële toolkit voor ambitieuze managers”</em> aan de UGent (<a href="https://www.ugain.ugent.be/leiderschap2026.htm" target="_blank" rel="noopener noreferrer" style={{ color: '#000000', textDecoration: 'underline', fontWeight: 600 }}>Bekijk UGent opleiding</a>)
                </p>
                <p style={{ marginBottom: '0.5rem' }}>
                  💼 Coach voor zelfstandigen, overheden en bedrijfsleiders.
                </p>
                <p style={{ marginBottom: '0.5rem' }}>
                  🏆 Certified Partner Management Drives.
                </p>
                <p style={{ marginTop: '1rem' }}>
                  📖 Inmiddels verscheen de 4de druk van het handboek <strong>“Bedrijfskunde, de essentie”</strong>.
                </p>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
                <a href="#coaching" className="btn btn-accent" style={{ border: '1px solid #000000', color: '#000000' }}>Vraag Coaching Aan</a>
                <a href="https://www.linkedin.com/in/poelaert" target="_blank" rel="noopener noreferrer" className="btn" style={{ border: '1px solid #000000', color: '#000000' }}>
                  LinkedIn Profiel
                </a>
              </div>

              <div style={{ marginTop: '1.5rem', fontSize: '0.9rem', color: '#555', display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                <span>📞 <strong>Mobiel:</strong> <a href="tel:+32477992597" style={{ color: '#222' }}>(+32) 477 99 25 97</a></span>
                <span>✉️ <strong>E-mail:</strong> <a href="mailto:ludo.poelaert@ugent.be" style={{ color: '#222' }}>ludo.poelaert@ugent.be</a></span>
              </div>
            </div>
            <div>
              <img src={papaPhoto} alt="Ludo Poelaert" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '8px' }} />
            </div>
          </div>
        </section>

        {/* Boek Section */}
        <section id="boek" className="section container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div>
              <div style={{ backgroundColor: '#f0f0f0', padding: '3rem', borderRadius: '8px', textAlign: 'center' }}>
                <h3 style={{ marginBottom: '1rem' }}>Bedrijfskunde de essentie</h3>
                <p className="text-muted" style={{ marginBottom: '2rem' }}>Vierde druk</p>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <img src={coverBoek} alt="Bedrijfskunde de essentie - Vierde druk" style={{ maxHeight: '380px', maxWidth: '100%', objectFit: 'contain', borderRadius: '6px', boxShadow: '0 10px 25px rgba(0,0,0,0.18)' }} />
                </div>
              </div>
            </div>
            <div style={{ paddingLeft: '2rem' }}>
              <h2>Een Standaardwerk</h2>
              <p style={{ marginTop: '1rem' }}>
                In de vierde, geactualiseerde druk van <strong>"Bedrijfskunde de essentie"</strong> biedt Prof. Ludo Poelaert een ongeëvenaard helder overzicht van de fundamenten van modern management en organisatie.
              </p>
              <p style={{ marginTop: '1rem' }}>
                Het boek slaat een stevige brug tussen theorie en praktijk, en behandelt cruciale thema's zoals strategisch management, financiële sturing, leiderschap, en veranderingsprocessen. Het is een onmisbaar handvat voor zowel studenten als doorgewinterde professionals die hun organisatie naar een hoger niveau willen tillen.
              </p>
            </div>
          </div>

          {/* Book Reviews Sub-section */}
          <div style={{ marginTop: '4rem', paddingTop: '3rem', borderTop: '1px solid var(--color-border)' }}>
            <h3 style={{ textTransform: 'uppercase', letterSpacing: '2px', fontSize: '1.1rem', color: '#888', marginBottom: '2rem', textAlign: 'center' }}>
              Wat lezers & experts zeggen over het boek
            </h3>
            <div className="masonry-grid">
              {BOOK_REVIEWS.map((review, idx) => (
                <div key={idx} className="masonry-item">
                  <p style={{ fontStyle: 'italic', color: '#333', fontSize: '0.98rem', marginBottom: '1rem', lineHeight: '1.6' }}>
                    "{review.text}"
                  </p>
                  <cite style={{ fontWeight: 600, color: '#111', fontStyle: 'normal', fontSize: '0.9rem', display: 'block' }}>
                    — {review.author}
                  </cite>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Models Section */}
        <section id="modellen" className="section" style={{ backgroundColor: '#fff', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
          <div className="container">
            <h2 style={{ marginBottom: '3rem' }}>Gebruikte Modellen</h2>
            <div className="masonry-grid">
              {MODELS.map((model, index) => (
                <div key={index} className="model-card">
                  <h3>{model.name}</h3>
                  <p>{model.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Shop / Coaching Section */}
        <section id="coaching" className="section container">
          <h2 style={{ marginBottom: '1rem' }}>Coaching Aanvragen</h2>
          <p className="text-center text-muted" style={{ marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
            Selecteer de gewenste coaching dienst. De aanvraag loopt via persoonlijk contact, er worden geen prijzen vooraf getoond.
          </p>
          
          <div className="shop-grid">
            {COACHING_SERVICES.map(service => (
              <div key={service.id} className="shop-item">
                <img src={service.image} alt={service.title} className="shop-item-image" />
                <h3>{service.title}</h3>
                <p className="shop-item-price">Prijs op aanvraag</p>
                <button 
                  className="btn" 
                  style={{ marginTop: '1rem', width: '100%' }}
                  onClick={() => addToCart(service.id)}
                >
                  {cart.includes(service.id) ? 'Toegevoegd' : 'Voeg toe aan aanvraag'}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials & Clients */}
        <section id="referenties" className="section" style={{ backgroundColor: 'white' }}>
          <div className="container">
            <h2 style={{ marginBottom: '3rem' }}>Wat Klanten Zeggen</h2>
            <div className="masonry-grid" style={{ marginBottom: '4rem' }}>
              {TESTIMONIALS.map((t, idx) => (
                <div key={idx} className="masonry-item" style={{ borderLeft: '4px solid #111111' }}>
                  <p style={{ fontStyle: 'italic', fontSize: '1.02rem', color: '#222', marginBottom: '0.8rem', lineHeight: '1.6' }}>"{t.text}"</p>
                  <cite style={{ fontWeight: 'bold', color: '#111', fontStyle: 'normal', display: 'block' }}>— {t.author}</cite>
                </div>
              ))}
            </div>

            <h2 style={{ marginBottom: '1.5rem', textTransform: 'uppercase', fontSize: '1.2rem', letterSpacing: '2px', color: '#888' }}>
              Organisaties & Bedrijven die beroep deden op Ludo Poelaert
            </h2>
            <p style={{ marginBottom: '2.5rem', color: '#666' }}>
              Een greep uit de bedrijven, overheidsinstanties, ziekenhuizen en praktijken die gebruik maakten van coaching, advies en praktijkmanagement:
            </p>

            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', 
              gap: '1rem' 
            }}>
              {CLIENTS.map((client, idx) => (
                <div key={idx} style={{ 
                  backgroundColor: '#f5f5f7', 
                  padding: '1rem 1.2rem', 
                  borderRadius: '6px', 
                  fontSize: '0.95rem', 
                  fontWeight: 500, 
                  color: '#222',
                  border: '1px solid #e5e5e7',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <span style={{ color: 'var(--color-accent)', marginRight: '8px' }}>•</span> {client}
                </div>
              ))}
            </div>
            <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: '#777', fontStyle: 'italic' }}>
              ...en talloze zelfstandigen met een praktijk of eenmanszaak. Op aanvraag kunnen referenties persoonlijk gecontacteerd worden.
            </p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Ludo Poelaert. Alle rechten voorbehouden.</p>
          <p style={{ marginTop: '0.8rem', fontSize: '0.88rem', color: '#aaa' }}>
            E-mail: <a href="mailto:ludo.poelaert@ugent.be" style={{ color: '#fff', textDecoration: 'underline' }}>ludo.poelaert@ugent.be</a> | 
            Mobiel: <a href="tel:+32477992597" style={{ color: '#fff', textDecoration: 'underline' }}>+32 477 99 25 97</a> | 
            LinkedIn: <a href="https://www.linkedin.com/in/poelaert" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'underline' }}>in/poelaert</a>
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
