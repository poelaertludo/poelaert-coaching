import { useState } from 'react';
import { ShoppingCart, X } from 'lucide-react';
import coverBoek from './assets/CoverBoekPapa.png';

const MODELS = [
  { name: 'Process Communicatie', desc: 'Inzicht in persoonlijkheidsstructuren en communicatiestijlen om effectiever samen te werken.' },
  { name: 'JoHari Venster', desc: 'Een model om de communicatie en het bewustzijn tussen individuen in een groep te verbeteren.' },
  { name: 'Stress Managementmodel', desc: 'Technieken en kaders om stressoren te identificeren en gezond te reguleren.' },
  { name: 'Situationeel Leiderschap', desc: 'De leiderschapsstijl aanpassen aan de taakvolwassenheid van de medewerker.' },
  { name: 'Kotter (Veranderingsmanagement)', desc: 'Het 8-stappenplan om succesvol en duurzaam organisatorische veranderingen door te voeren.' },
  { name: 'Business Model Canvas', desc: 'Een visueel overzicht van de bouwstenen van een onderneming of project.' },
  { name: '9-Krachten Model van Porter', desc: 'Strategisch model om de concurrentieomgeving en winstpotentieel te analyseren (voorheen 5-krachten).' },
  { name: 'Earned Value Management', desc: 'Projectmanagement-techniek om projectprestaties en voortgang objectief te meten.' }
];

const COACHING_SERVICES = [
  { id: 1, title: 'Individuele Executive Coaching', image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  { id: 2, title: 'Team Coaching & Dynamiek', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  { id: 3, title: 'Leiderschapsontwikkeling', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  { id: 4, title: 'Veranderingsmanagement Sessies', image: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' }
];

const CLIENTS = [
  "Bpost", "Proximus", "Adecco (BeNeLux)", "Apple Computer BeNeLux", "Barry Callebaut",
  "UGent", "Vrije Universiteit Brussel", "De Vlaamse Gemeenschap", "Stad Gent",
  "AZ Delta (Roeselare)", "Sonaca", "Denys (Bouwfirma)", "Air Belgium International",
  "Christelijke Mutualiteiten (CM)", "KLAV", "Howest", "Veronove", "Causamatics",
  "Flanders International College for Osteopathy", "VVT", "UGain", "Timmermans",
  "IZIDOC", "OsteoSoft", "AZ Delta", "Sunair", "Team Consult"
];

const TESTIMONIALS = [
  {
    author: "Frederik Lievrouw, Logistics Manager",
    text: "Ludo Poelaert leidde ons team in in de techniek van situationeel leiderschap en bracht direct structuur, rust en motivatie. Zijn inzichten lieten me inzien hoe ik mijn leiderschapsstijl haarscherp kon aanpassen aan het ontwikkelingsniveau van elke medewerker."
  },
  {
    author: "Dr. Erik Van Holsbeek, Orthopedist AZ Delta / E.Z.",
    text: "De coaching van Ludo is een enorme opsteker geweest en veranderde mijn visie op praktijkvoering grondig. Dankzij zijn advies over leiderschap en transparante communicatie runnen we nu een uiterst efficiënte praktijk met een hecht en gelukkig team."
  },
  {
    author: "Robin Demeeter, CEO Causamatics",
    text: "Het advies van Ludo brengt een zeldzame combinatie van diepe academische kennis en directe praktijkrelevantie. Zijn lessen en inzichten hebben ons vanaf het eerste moment met volle goesting geholpen om ons bedrijf strategisch verder te bouwen."
  },
  {
    author: "Jolien Vanderstappen, Kinesitherapeut & Praktijkhouder",
    text: "Dankzij het persoonlijke advies en de beheer-tools van Prof. Poelaert ben ik gegroeid van een eenmanszaak naar een bloeiende groepspraktijk met 6 collega's. Ik heb nog geen seconde spijt gehad van zijn coaching; het heeft mijn zaak naar een hoger niveau getild."
  },
  {
    author: "Hendrik Maes, Oprichter 'In Balans'",
    text: "Ludo neemt geen blad voor de mond en snijdt meteen naar de kern van wat er beter kan. Door zijn beproefde leiderschapsmethode en cijfermatige transparantie hebben we een sterk merk opgebouwd en groeien we elk kwartaal."
  },
  {
    author: "Egwin Ponette, Osteopaat Osteoponette",
    text: "Zijn coaching veranderde mijn wereld ten goede en hielp me van constante operationele druk naar een heldere visie en missie. Collega's tonen meer betrokkenheid en respect, en de praktijk is uitgegroeid tot een geoliede organisatie."
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
    const subject = encodeURIComponent('Aanvraag Coaching: ' + items);
    const body = encodeURIComponent(`Beste Prof. Poelaert,\n\nGraag kom ik met u in contact voor de volgende coaching diensten:\n- ${items}\n\nMet vriendelijke groet,`);
    window.location.href = `mailto:ludopoelaert@example.com?subject=${subject}&body=${body}`;
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
            </>
          )}
        </div>
      )}

      <main>
        {/* Hero Section */}
        <section id="over" className="section container">
          <div className="grid-2">
            <div className="hero-text" style={{ textAlign: 'left' }}>
              <h2 style={{ textAlign: 'left', color: 'var(--color-text)' }}>Bedrijfskunde, de essentie</h2>
              <h3 className="text-accent" style={{ marginBottom: '1rem', fontWeight: 400 }}>Door Ludo Poelaert</h3>
              <p>
                Ludo Poelaert, Professor Emeritus aan de UGent, deelt zijn jarenlange academische en praktische expertise in zijn veelgeprezen boek <strong>"Bedrijfskunde, de essentie"</strong>. 
              </p>
              <p>
                Met een scherp inzicht in zowel theorie als de dagelijkse realiteit van organisaties, biedt hij coaching en begeleiding aan leidinggevenden en teams die streven naar excellentie, verandering en duurzame groei.
              </p>
              <div style={{ marginTop: '2rem' }}>
                <a href="#coaching" className="btn btn-accent">Vraag Coaching Aan</a>
              </div>
            </div>
            <div>
              {/* This is where the book cover / portrait will go */}
              <div style={{ width: '100%', paddingBottom: '120%', backgroundColor: '#f0f0f0', position: 'relative', overflow: 'hidden', borderRadius: '8px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                 <img src="/Papa_Photo.png" alt="Ludo Poelaert" style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </section>

        {/* Boek Section */}
        <section id="boek" className="section container" style={{ paddingTop: '0' }}>
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
              <h2>Het Standaardwerk</h2>
              <p style={{ marginTop: '1rem' }}>
                In de vierde, geactualiseerde druk van <strong>"Bedrijfskunde de essentie"</strong> biedt Prof. Ludo Poelaert een ongeëvenaard helder overzicht van de fundamenten van modern management en organisatie.
              </p>
              <p style={{ marginTop: '1rem' }}>
                Het boek slaat een stevige brug tussen theorie en praktijk, en behandelt cruciale thema's zoals strategisch management, financiële sturing, leiderschap, en veranderingsprocessen. Het is een onmisbaar handvat voor zowel studenten als doorgewinterde professionals die hun organisatie naar een hoger niveau willen tillen.
              </p>
            </div>
          </div>
        </section>

        {/* Models Section */}
        <section id="modellen" className="section" style={{ backgroundColor: '#fff', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
          <div className="container">
            <h2 style={{ marginBottom: '3rem' }}>Gebruikte Modellen</h2>
            <div className="grid-3">
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
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '5rem' }}>
              {TESTIMONIALS.map((t, idx) => (
                <div key={idx} className="testimonial" style={{ borderLeft: '4px solid var(--color-accent)', paddingLeft: '1.5rem', backgroundColor: '#fafafa', padding: '1.5rem', borderRadius: '0 8px 8px 0' }}>
                  <p style={{ fontStyle: 'italic', fontSize: '1.05rem', color: '#333', marginBottom: '0.8rem' }}>"{t.text}"</p>
                  <cite style={{ fontWeight: 'bold', color: 'var(--color-primary)', fontStyle: 'normal' }}>— {t.author}</cite>
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
          <p style={{ marginTop: '1rem', fontSize: '0.85rem', color: '#999' }}>
            Contact: <a href="mailto:ludopoelaert@example.com">ludopoelaert@example.com</a>
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
