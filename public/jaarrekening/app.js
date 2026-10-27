"use strict";

/* ---------- Instellingen ---------- */
// Let op: dit is een lokale demo. De code staat zichtbaar in de browser en is dus geen echte beveiliging.
const ACCESS_CODE = "ARTS2026";

const $ = (id) => document.getElementById(id);
const eur = (n) => n.toLocaleString("nl-BE", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });
const pct = (n) => (n * 100).toLocaleString("nl-BE", { maximumFractionDigits: 0 }) + " %";

/* ---------- Voorbeeldcijfers: Huisartsenpraktijk Janssens BV ---------- */
const BAL = {
  gebouw: 250000, apparatuur: 110000,
  voorraad: 20000, vorderingen: 90000, bank: 130000,
  kapitaal: 100000, reserves: 200000,
  ltSchulden: 200000, leveranciers: 40000, fiscaal: 60000
};
const vast = BAL.gebouw + BAL.apparatuur;
const vlot = BAL.voorraad + BAL.vorderingen + BAL.bank;
const ev = BAL.kapitaal + BAL.reserves;
const ktSch = BAL.leveranciers + BAL.fiscaal;
const totaal = vast + vlot;

const balansTabel = `
<div class="two">
  <table><caption><strong>ACTIVA</strong> (waarin staat het geld?)</caption>
    <tr><td>Materiële vaste activa</td><td class="n"></td></tr>
    <tr><td>&nbsp;&nbsp;Praktijkpand</td><td class="n">${eur(BAL.gebouw)}</td></tr>
    <tr><td>&nbsp;&nbsp;Medische apparatuur</td><td class="n">${eur(BAL.apparatuur)}</td></tr>
    <tr><td>Vlottende activa</td><td class="n"></td></tr>
    <tr><td>&nbsp;&nbsp;Voorraad medisch materiaal</td><td class="n">${eur(BAL.voorraad)}</td></tr>
    <tr><td>&nbsp;&nbsp;Vorderingen (te ontvangen)</td><td class="n">${eur(BAL.vorderingen)}</td></tr>
    <tr><td>&nbsp;&nbsp;Liquide middelen (bank)</td><td class="n">${eur(BAL.bank)}</td></tr>
    <tr class="total"><td>TOTAAL ACTIVA</td><td class="n">${eur(totaal)}</td></tr>
  </table>
  <table><caption><strong>PASSIVA</strong> (wie heeft het geld gefinancierd?)</caption>
    <tr><td>Eigen vermogen</td><td class="n"></td></tr>
    <tr><td>&nbsp;&nbsp;Kapitaal</td><td class="n">${eur(BAL.kapitaal)}</td></tr>
    <tr><td>&nbsp;&nbsp;Reserves en overgedragen winst</td><td class="n">${eur(BAL.reserves)}</td></tr>
    <tr><td>Schulden op meer dan 1 jaar</td><td class="n"></td></tr>
    <tr><td>&nbsp;&nbsp;Bankkrediet (pand)</td><td class="n">${eur(BAL.ltSchulden)}</td></tr>
    <tr><td>Schulden op ten hoogste 1 jaar</td><td class="n"></td></tr>
    <tr><td>&nbsp;&nbsp;Leveranciers</td><td class="n">${eur(BAL.leveranciers)}</td></tr>
    <tr><td>&nbsp;&nbsp;Belastingen, RSZ en lonen</td><td class="n">${eur(BAL.fiscaal)}</td></tr>
    <tr class="total"><td>TOTAAL PASSIVA</td><td class="n">${eur(ev + BAL.ltSchulden + ktSch)}</td></tr>
  </table>
</div>`;

/* ---------- Oefeningen ---------- */
function feedback(el, ok, msg) {
  el.className = "fb " + (ok ? "ok" : "bad");
  el.textContent = msg;
}

function exerciseClassify(box) {
  const cats = ["Vast actief", "Vlottend actief", "Eigen vermogen", "Schuld > 1 jaar", "Schuld ≤ 1 jaar"];
  const items = [
    ["Praktijkpand", 0], ["Echografietoestel", 0], ["Bankrekening", 1], ["Voorraad vaccins", 1],
    ["Nog te ontvangen bedragen van patiënten en mutualiteiten", 1], ["Ingebracht kapitaal van de vennoten", 2],
    ["Overgedragen winst uit vorige jaren", 2], ["Hypothecair krediet van 15 jaar", 3],
    ["Openstaande factuur van de leverancier", 4], ["Te betalen RSZ en btw", 4]
  ];
  box.innerHTML = `<h3>Oefening: waar hoort het thuis?</h3><p>Kies per post de juiste rubriek van de balans.</p>`;
  const rows = items.map(([label, ans]) => {
    const row = document.createElement("div"); row.className = "item";
    const span = document.createElement("span"); span.textContent = label;
    const sel = document.createElement("select");
    sel.setAttribute("aria-label", label);
    sel.add(new Option("Kies…", ""));
    cats.forEach((c, i) => sel.add(new Option(c, i)));
    row.append(span, sel); box.append(row);
    return { row, sel, ans };
  });
  const btn = document.createElement("button"); btn.className = "btn"; btn.type = "button"; btn.textContent = "Nakijken";
  const fb = document.createElement("div"); fb.setAttribute("role", "status");
  btn.onclick = () => {
    let good = 0;
    rows.forEach(({ row, sel, ans }) => {
      const ok = sel.value !== "" && +sel.value === ans;
      row.className = "item " + (ok ? "right" : "wrong"); if (ok) good++;
    });
    feedback(fb, good === rows.length, `${good} van ${rows.length} juist.` + (good === rows.length ? " Uitstekend!" : " Rood = nog eens nadenken: bezit en gebruik (activa) of financiering (passiva)?"));
  };
  box.append(btn, fb);
}

function exerciseNumbers(box, title, intro, fields, tip) {
  box.innerHTML = `<h3>${title}</h3><p>${intro}</p>`;
  const inputs = fields.map((f) => {
    const row = document.createElement("div"); row.className = "row";
    const id = "f" + Math.random().toString(36).slice(2, 8);
    const lab = document.createElement("label"); lab.htmlFor = id; lab.textContent = f.label;
    const inp = document.createElement("input"); inp.type = "number"; inp.id = id; inp.step = "any"; inp.inputMode = "decimal";
    row.append(lab, inp);
    if (f.unit) { const u = document.createElement("span"); u.textContent = f.unit; row.append(u); }
    box.append(row);
    return { inp, ans: f.ans, tol: f.tol ?? 0.5 };
  });
  const btn = document.createElement("button"); btn.className = "btn"; btn.type = "button"; btn.textContent = "Nakijken";
  const fb = document.createElement("div"); fb.setAttribute("role", "status");
  btn.onclick = () => {
    const wrong = inputs.filter(({ inp, ans, tol }) => inp.value === "" || Math.abs(+inp.value - ans) > tol).length;
    feedback(fb, wrong === 0, wrong === 0 ? "Correct! " : `${wrong} antwoord(en) kloppen niet. ` + tip);
  };
  box.append(btn, fb);
}

/* ---------- Lessen ---------- */
const lessons = [
  {
    title: "Waarom een jaarrekening lezen?",
    html: `
      <p>Als arts bent u vaak zelfstandige, vennoot of bestuurder van een praktijk of vennootschap. U moet dus beoordelen of uw praktijk gezond is, ook als u de boekhouding niet zelf bijhoudt.</p>
      <div class="analogy"><strong>Vergelijking met de geneeskunde</strong><br>
      De <strong>balans</strong> is een foto op één moment, zoals een bloedonderzoek: wat bezit de praktijk en hoe is dat gefinancierd?<br>
      De <strong>resultatenrekening</strong> is de film over een jaar, zoals een monitor: hoeveel kwam binnen, hoeveel ging eruit en wat bleef over?</div>
      <h3>De jaarrekening in één oogopslag</h3>
      <table>
        <tr><th>Onderdeel</th><th>Vraag die het beantwoordt</th></tr>
        <tr><td>Balans</td><td>Wat bezit de praktijk en wat is ze verschuldigd?</td></tr>
        <tr><td>Resultatenrekening</td><td>Heeft de praktijk dit jaar winst of verlies gemaakt?</td></tr>
      </table>
      <div class="callout">Elke volgende les gebruikt dezelfde fictieve praktijk: <strong>Huisartsenpraktijk Janssens BV</strong>.</div>`,
    quiz: [
      { q: "Welk onderdeel toont de situatie op één bepaald moment?", o: ["De balans", "De resultatenrekening"], a: 0, why: "De balans is een momentopname, meestal op 31 december." },
      { q: "Welk onderdeel toont of er over het boekjaar winst is gemaakt?", o: ["De balans", "De resultatenrekening"], a: 1, why: "De resultatenrekening vergelijkt opbrengsten en kosten over een periode." },
      { q: "Wat is de beste vergelijking met een bloedonderzoek?", o: ["De balans", "De resultatenrekening"], a: 0, why: "Een bloedonderzoek is een momentopname, net als de balans." }
    ]
  },
  {
    title: "De balans: activa en passiva",
    html: `
      <p>De balans heeft twee kanten die altijd even groot zijn.</p>
      <div class="two">
        <div class="analogy"><strong>Activa (links)</strong><br>Waarin zit het geld van de praktijk? Praktijkpand, apparatuur, voorraad, geld op de bank en bedragen die u nog moet ontvangen.</div>
        <div class="analogy"><strong>Passiva (rechts)</strong><br>Wie heeft dat gefinancierd? Uzelf en de vennoten (eigen vermogen) of anderen (schulden).</div>
      </div>
      <div class="callout"><strong>Gouden regel:</strong> totaal activa = totaal passiva.</div>
      <h3>De rubrieken</h3>
      <ul>
        <li><strong>Vaste activa:</strong> blijven jaren in de praktijk, zoals pand en toestellen.</li>
        <li><strong>Vlottende activa:</strong> worden binnen een jaar omgezet in geld: voorraad, vorderingen, bankgeld.</li>
        <li><strong>Eigen vermogen:</strong> kapitaal, reserves en overgedragen winst. Dit is van de aandeelhouders.</li>
        <li><strong>Schulden op lange termijn:</strong> terugbetaling na meer dan 1 jaar, zoals een bankkrediet voor het pand.</li>
        <li><strong>Schulden op korte termijn:</strong> te betalen binnen 1 jaar: leveranciers, RSZ, btw, belastingen.</li>
      </ul>`,
    exercise: exerciseClassify,
    quiz: [
      { q: "Een krediet van 15 jaar voor het praktijkpand staat bij…", o: ["Vaste activa", "Eigen vermogen", "Schulden op meer dan 1 jaar", "Schulden op ten hoogste 1 jaar"], a: 2, why: "Het is een schuld met een looptijd langer dan een jaar." },
      { q: "Geld op de bankrekening hoort bij…", o: ["Vlottende activa", "Eigen vermogen", "Vaste activa"], a: 0, why: "Liquide middelen zijn vlottende activa." },
      { q: "Wat is waar over activa en passiva?", o: ["Activa zijn altijd groter", "Passiva zijn altijd groter", "Ze zijn altijd gelijk"], a: 2, why: "Elk bezit is op een of andere manier gefinancierd, dus de totalen zijn gelijk." }
    ]
  },
  {
    title: "Een balans lezen: stap voor stap",
    html: `
      <p>Hieronder ziet u de balans van onze praktijk. Lees ze in drie stappen.</p>
      ${balansTabel}
      <h3>Drie leesstappen</h3>
      <ol>
        <li><strong>Hoe groot is de praktijk?</strong> Kijk naar het totaal: ${eur(totaal)}.</li>
        <li><strong>Hoe is ze gefinancierd?</strong> Eigen vermogen ${eur(ev)} van ${eur(totaal)} is ${pct(ev / totaal)}. De rest is schuld.</li>
        <li><strong>Kan ze haar rekeningen betalen?</strong> Vergelijk de vlottende activa (${eur(vlot)}) met de schulden op korte termijn (${eur(ktSch)}).</li>
      </ol>
      <div class="callout">Een groot eigen vermogen en voldoende vlottende middelen zijn goede tekenen. Veel kortlopende schulden en weinig geld op de bank zijn een alarmsignaal.</div>`,
    exercise: (box) => exerciseNumbers(box, "Oefening: de ontbrekende post",
      `Het totaal van de activa is ${eur(totaal)}. Het eigen vermogen is ${eur(ev)} en de schulden op lange termijn zijn ${eur(BAL.ltSchulden)}. Bereken de schulden op korte termijn.`,
      [{ label: "Schulden op ten hoogste 1 jaar (€)", ans: ktSch }], "Tip: activa min eigen vermogen min lange schulden."),
    quiz: [
      { q: `Hoeveel eigen vermogen heeft de praktijk?`, o: [eur(ev), eur(totaal), eur(BAL.ltSchulden)], a: 0, why: `Kapitaal ${eur(BAL.kapitaal)} plus reserves ${eur(BAL.reserves)}.` },
      { q: "Welk bedrag zou u bekijken om te weten of de praktijk op korte termijn kan betalen?", o: ["Vaste activa", "Vlottende activa tegenover korte schulden", "Het kapitaal alleen"], a: 1, why: "Zo ziet u of er genoeg geld en vorderingen zijn om de rekeningen te betalen." },
      { q: "Als de schulden stijgen en het eigen vermogen daalt, wordt de praktijk…", o: ["Financieel sterker", "Financieel kwetsbaarder", "Dat zegt niets"], a: 1, why: "De praktijk hangt dan meer af van schuldeisers." }
    ]
  },
  {
    title: "De resultatenrekening lezen",
    html: `
      <p>De resultatenrekening begint met de omzet en trekt daar stap voor stap kosten van af. De tussenresultaten zijn de belangrijkste cijfers.</p>
      <table>
        <tr><th>Post</th><th class="n">Bedrag</th></tr>
        <tr><td>Omzet (honoraria)</td><td class="n">${eur(480000)}</td></tr>
        <tr><td>− Handelsgoederen en medisch materiaal</td><td class="n">${eur(60000)}</td></tr>
        <tr><td>− Diensten en diverse goederen (huur, verzekeringen, software)</td><td class="n">${eur(90000)}</td></tr>
        <tr><td>− Bezoldigingen en sociale lasten</td><td class="n">${eur(180000)}</td></tr>
        <tr><td>− Afschrijvingen op apparatuur en pand</td><td class="n">${eur(30000)}</td></tr>
        <tr><td>− Andere bedrijfskosten</td><td class="n">${eur(10000)}</td></tr>
        <tr class="total"><td>= BEDRIJFSRESULTAAT</td><td class="n">${eur(110000)}</td></tr>
        <tr><td>+ Financiële opbrengsten</td><td class="n">${eur(2000)}</td></tr>
        <tr><td>− Financiële kosten (rente op het krediet)</td><td class="n">${eur(8000)}</td></tr>
        <tr class="total"><td>= WINST VOOR BELASTINGEN</td><td class="n">${eur(104000)}</td></tr>
        <tr><td>− Belastingen</td><td class="n">${eur(26000)}</td></tr>
        <tr class="total"><td>= WINST VAN HET BOEKJAAR</td><td class="n">${eur(78000)}</td></tr>
      </table>
      <h3>Wat u moet weten</h3>
      <ul>
        <li><strong>Bedrijfsresultaat:</strong> wat de praktijk verdient met haar eigenlijke werk, vóór rente en belastingen.</li>
        <li><strong>Afschrijvingen:</strong> een kost zonder uitgave. Een toestel dat 10 jaar meegaat, wordt over 10 jaar als kost verdeeld.</li>
        <li><strong>Financieel resultaat:</strong> rente die u betaalt of ontvangt.</li>
        <li><strong>Winst of verlies van het boekjaar:</strong> het eindresultaat na belasting. Het verhoogt het eigen vermogen op de balans.</li>
      </ul>`,
    exercise: (box) => exerciseNumbers(box, "Oefening: bereken zelf de tussenresultaten",
      "Gebruik de cijfers hierboven.",
      [{ label: "Bedrijfsresultaat (€)", ans: 110000 }, { label: "Winst voor belastingen (€)", ans: 104000 }, { label: "Winst van het boekjaar (€)", ans: 78000 }],
      "Tip: begin bij de omzet en trek alle bedrijfskosten af."),
    quiz: [
      { q: "Wat is het bedrijfsresultaat?", o: ["Omzet min bedrijfskosten", "Winst na belastingen", "Geld op de bank"], a: 0, why: "Het toont wat het eigenlijke werk van de praktijk opbrengt." },
      { q: "Afschrijvingen zijn…", o: ["Een uitgave van cash dit jaar", "Een kost die de aankoop van een duurzaam goed over jaren spreidt", "Een belasting"], a: 1, why: "Het geld is vaak al eerder uitgegeven. De kost wordt nu verdeeld." },
      { q: "Waar kunt u de rente op het bankkrediet terugvinden?", o: ["In de omzet", "In de financiële kosten", "In de afschrijvingen"], a: 1, why: "Rente staat bij de financiële kosten, onder het bedrijfsresultaat." }
    ]
  },
  {
    title: "De resultaatverwerking: wat gebeurt er met de winst?",
    html: `
      <p>Aan het einde van de resultatenrekening blijft een <strong>winst van het boekjaar</strong> over (bij praktijk Janssens: ${eur(78000)}). Maar wat gebeurt er met dat resultaat? Dat toont de <strong>resultaatverwerking</strong>.</p>
      
      <div class="analogy"><strong>Winst is geen cash op de bank!</strong><br>
      Een praktijk kan € 78.000 winst maken terwijl er op de bankrekening nauwelijks cash staat. De winst kan immers al vastzitten in nieuw aangekochte apparatuur, voorraad of nog te ontvangen erelonen van mutualiteiten.</div>

      <h3>De drie bestemmingen van de winst</h3>
      <table>
        <tr><th>Bestemming</th><th>Wat betekent dit voor uw praktijk?</th></tr>
        <tr><td><strong>1. Toevoegen aan de reserves</strong></td><td>De winst blijft in de vennootschap. Dit versterkt het eigen vermogen en vergroot uw financiële buffer (solvabiliteit). Denk aan de gewone reserve of de fiscaal gunstige <em>liquidatiereserve</em>.</td></tr>
        <tr><td><strong>2. Overgedragen winst</strong></td><td>Winst die 'geparkeerd' blijft op de balans om er in een later boekjaar een beslissing over te nemen.</td></tr>
        <tr><td><strong>3. Uitkeren als dividend</strong></td><td>Winst die uitgekeerd wordt aan de aandeelhouders/artsen privé. Hierop is roerende voorheffing verschuldigd (standaard 30 %, of 15 % via het VVPRbis-stelsel of liquidatiereserve).</td></tr>
      </table>

      <h3>Voorbeeld: Resultaatverwerking Huisartsenpraktijk Janssens BV</h3>
      <table>
        <tr><th>Post</th><th class="n">Bedrag</th></tr>
        <tr><td>Te bestemmen winst van het boekjaar</td><td class="n">${eur(78000)}</td></tr>
        <tr><td>− Toevoeging aan de overige reserves (buffer)</td><td class="n">${eur(20000)}</td></tr>
        <tr><td>− Toevoeging aan de liquidatiereserve (fiscale opbouw)</td><td class="n">${eur(28000)}</td></tr>
        <tr><td>− Over te dragen winst naar volgend boekjaar</td><td class="n">${eur(10000)}</td></tr>
        <tr class="total"><td>= UIT TE KEREN DIVIDEND (bruto aan vennoten)</td><td class="n">${eur(20000)}</td></tr>
      </table>

      <div class="callout"><strong>Opgelet (WVV - vennootschapswetgeving):</strong> Vóór een BV dividenden mag uitkeren, moet het bestuursorgaan verplicht de <em>netto-actieftest</em> (blijft het eigen vermogen positief?) en de <em>liquiditeitstest</em> (kan de praktijk de komende 12 maanden al haar schulden betalen?) uitvoeren.</div>`,
    exercise: (box) => exerciseNumbers(box, "Oefening: bereken het dividend",
      `Huisartsenpraktijk Janssens heeft ${eur(78000)} winst. De vennoten beslissen om ${eur(25000)} te reserveren als buffer en ${eur(13000)} over te dragen naar volgend jaar. De rest wordt uitgekeerd als dividend. Bereken het totale bruto dividend.`,
      [{ label: "Uit te keren dividend (€)", ans: 40000 }],
      "Tip: trek van de totale winst (€ 78.000) de reserves (€ 25.000) en de overgedragen winst (€ 13.000) af."),
    quiz: [
      { q: "Wat gebeurt er met het eigen vermogen als winst wordt toegevoegd aan de reserves?", o: ["Het eigen vermogen stijgt", "Het eigen vermogen daalt", "Het eigen vermogen blijft exact gelijk"], a: 0, why: "Reserves vormen een vast onderdeel van het eigen vermogen op de passivazijde van de balans." },
      { q: "Waarom staat een winst van € 78.000 niet automatisch als cash op de bank?", o: ["Omdat winst al geïnvesteerd kan zijn in apparatuur of nog openstaat bij debiteuren", "Omdat de overheid de helft meteen opeist", "Omdat de boekhouder dat bedrag blokkeert"], a: 0, why: "Winst is een boekhoudkundig overschot van opbrengsten min kosten, geen kastoestand." },
      { q: "Mag een medische praktijkvennootschap (BV) zomaar alle beschikbare cash als dividend uitkeren?", o: ["Ja, het geld is van de vennoten", "Neen, het bestuur moet via een balans- en liquiditeitstest bewijzen dat de praktijk levensvatbaar blijft"], a: 1, why: "Het vennootschapsrecht verplicht de netto-actief- en liquiditeitstest om schuldeisers en de continuïteit te beschermen." }
    ]
  },
  {
    title: "Kerncijfers: gezond of niet?",
    html: `
      <p>Met drie eenvoudige verhoudingen krijgt u snel een beeld van de gezondheid van een praktijk.</p>
      <table>
        <tr><th>Kengetal</th><th>Formule</th><th>Richtwaarde</th></tr>
        <tr><td><strong>Solvabiliteit</strong></td><td>eigen vermogen ÷ totaal passiva</td><td>vanaf ± 30 % is gezond</td></tr>
        <tr><td><strong>Liquiditeit</strong></td><td>vlottende activa ÷ schulden op korte termijn</td><td>minstens 1, liefst 1,5 of meer</td></tr>
        <tr><td><strong>Winstmarge</strong></td><td>winst van het boekjaar ÷ omzet</td><td>hangt van de sector af, positief is het minimum</td></tr>
      </table>
      <div class="analogy"><strong>Zo lees je het:</strong> solvabiliteit zegt hoe sterk de praktijk is op lange termijn, liquiditeit hoe veilig ze is op korte termijn en winstmarge hoeveel van elke euro omzet overblijft.</div>
      <div class="callout">Richtwaarden zijn een eerste indicatie. Bespreek de cijfers altijd met uw boekhouder of accountant.</div>`,
    exercise: (box) => exerciseNumbers(box, "Oefening: bereken de kengetallen van praktijk Janssens",
      `Eigen vermogen ${eur(ev)}, totaal ${eur(totaal)}, vlottende activa ${eur(vlot)}, korte schulden ${eur(ktSch)}, winst ${eur(78000)}, omzet ${eur(480000)}.`,
      [{ label: "Solvabiliteit (%)", ans: ev / totaal * 100, tol: 1 }, { label: "Liquiditeit (ratio, 2 decimalen)", ans: vlot / ktSch, tol: 0.05 }, { label: "Winstmarge (%)", ans: 78000 / 480000 * 100, tol: 1 }],
      "Tip: deel steeds het juiste bedrag door de juiste noemer."),
    quiz: [
      { q: "Een liquiditeit van 0,6 betekent…", o: ["Er is genoeg geld om alle korte schulden te betalen", "De korte schulden zijn groter dan wat er vlot beschikbaar is", "De praktijk is zeer winstgevend"], a: 1, why: "Onder 1 kan de praktijk haar korte schulden niet volledig dekken met vlottende activa." },
      { q: "Wat meet solvabiliteit?", o: ["Hoeveel van de financiering uit eigen middelen komt", "Hoeveel cash er op de bank staat", "Hoeveel winst er is"], a: 0, why: "Hoe hoger, hoe minder afhankelijk van schuldeisers." },
      { q: "Winst van 50.000 op een omzet van 500.000 geeft een winstmarge van…", o: ["5 %", "10 %", "50 %"], a: 1, why: "50.000 ÷ 500.000 = 10 %." }
    ]
  },
  {
    title: "Casus: twee praktijken vergelijken",
    html: `
      <p>Twee collega-artsen vragen u om raad. Ze willen een vennoot opnemen in hun praktijk. Welke ziet er financieel gezonder uit?</p>
      <div class="two">
        <table><caption><strong>Praktijk A</strong></caption>
          <tr><td>Omzet</td><td class="n">${eur(520000)}</td></tr>
          <tr><td>Winst van het boekjaar</td><td class="n">${eur(15000)}</td></tr>
          <tr><td>Solvabiliteit</td><td class="n">12 %</td></tr>
          <tr><td>Liquiditeit</td><td class="n">0,6</td></tr>
          <tr><td>Bankkrediet</td><td class="n">${eur(450000)}</td></tr>
        </table>
        <table><caption><strong>Praktijk B</strong></caption>
          <tr><td>Omzet</td><td class="n">${eur(430000)}</td></tr>
          <tr><td>Winst van het boekjaar</td><td class="n">${eur(60000)}</td></tr>
          <tr><td>Solvabiliteit</td><td class="n">48 %</td></tr>
          <tr><td>Liquiditeit</td><td class="n">1,9</td></tr>
          <tr><td>Bankkrediet</td><td class="n">${eur(80000)}</td></tr>
        </table>
      </div>
      <div class="callout">Praktijk A heeft de hoogste omzet, maar omzet alleen zegt niets over gezondheid. Kijk naar winst, financiering en liquiditeit.</div>`,
    quiz: [
      { q: "Welke praktijk heeft de sterkste financiële structuur?", o: ["Praktijk A, want de omzet is hoger", "Praktijk B, want solvabiliteit en liquiditeit zijn beter"], a: 1, why: "B heeft 48 % eigen vermogen en voldoende middelen om korte schulden te betalen." },
      { q: "Wat is het grootste risico bij Praktijk A?", o: ["Te weinig omzet", "Veel schulden en een liquiditeit onder 1", "Te veel reserves"], a: 1, why: "Met 12 % solvabiliteit en 0,6 liquiditeit komt A snel in betalingsproblemen." },
      { q: "Wat is de beste volgende stap voor u als kandidaat-vennoot?", o: ["Meteen tekenen", "De volledige jaarrekeningen van meerdere jaren opvragen en met een accountant bespreken", "Enkel de omzet vergelijken"], a: 1, why: "Eén jaar zegt weinig. Het verloop over meerdere jaren en professioneel advies zijn essentieel." }
    ]
  }
];

/* ---------- Voortgang ---------- */
let user = null;
let current = 0;
const key = () => "jr-progress-" + user.toLowerCase();
const loadProgress = () => { try { return JSON.parse(localStorage.getItem(key())) || {}; } catch { return {}; } };
const saveProgress = (p) => localStorage.setItem(key(), JSON.stringify(p));

function renderNav() {
  const p = loadProgress();
  const list = $("lesson-list"); list.replaceChildren();
  lessons.forEach((l, i) => {
    const li = document.createElement("li");
    const b = document.createElement("button"); b.type = "button";
    b.textContent = `${i + 1}. ${l.title}`;
    if (p[i] != null) b.className = "done";
    if (i === current) b.setAttribute("aria-current", "true");
    b.onclick = () => openLesson(i);
    li.append(b); list.append(li);
  });
  const doneCount = Object.keys(p).length;
  $("bar-fill").style.width = (doneCount / lessons.length * 100) + "%";
  $("bar-text").textContent = `${doneCount} van ${lessons.length} lessen afgerond`;
}

function renderQuiz(lesson, idx, wrap) {
  const answers = {};
  wrap.innerHTML = "<h3>Controlevragen</h3>";
  lesson.quiz.forEach((q, qi) => {
    const div = document.createElement("div"); div.className = "q";
    const fs = document.createElement("fieldset");
    const lg = document.createElement("legend"); lg.textContent = q.q; fs.append(lg);
    const expl = document.createElement("div"); expl.className = "expl"; expl.setAttribute("aria-live", "polite");
    const btns = q.o.map((text, oi) => {
      const b = document.createElement("button"); b.type = "button"; b.className = "opt"; b.textContent = text;
      b.onclick = () => {
        btns.forEach((x, xi) => { x.disabled = true; if (xi === q.a) x.classList.add("right"); });
        if (oi !== q.a) b.classList.add("wrong");
        expl.textContent = (oi === q.a ? "Juist. " : "Niet helemaal. ") + q.why;
        answers[qi] = oi === q.a;
        if (Object.keys(answers).length === lesson.quiz.length) finishLesson(idx, Object.values(answers).filter(Boolean).length, lesson.quiz.length);
      };
      fs.append(b); return b;
    });
    fs.append(expl); div.append(fs); wrap.append(div);
  });
}

function finishLesson(idx, good, total) {
  const p = loadProgress(); p[idx] = Math.max(p[idx] ?? 0, good); saveProgress(p);
  renderNav();
  const fb = $("lesson-done");
  if (fb) feedback(fb, true, `Les afgerond: ${good} van ${total} juist.`);
}

function openLesson(i) {
  current = i;
  const l = lessons[i];
  const main = $("content");
  main.innerHTML = `<h2>Les ${i + 1}: ${l.title}</h2>${l.html}`;
  if (l.exercise) { const ex = document.createElement("div"); ex.className = "exercise"; main.append(ex); l.exercise(ex); }
  const quiz = document.createElement("div"); quiz.className = "quiz"; main.append(quiz);
  renderQuiz(l, i, quiz);
  const done = document.createElement("div"); done.id = "lesson-done"; done.setAttribute("role", "status"); main.append(done);

  const nav = document.createElement("div"); nav.className = "nav-row";
  const prev = document.createElement("button"); prev.className = "btn"; prev.type = "button"; prev.textContent = "← Vorige";
  prev.disabled = i === 0; prev.onclick = () => openLesson(i - 1);
  const next = document.createElement("button"); next.className = "btn"; next.type = "button";
  next.textContent = i === lessons.length - 1 ? "Resultaat bekijken" : "Volgende →";
  next.onclick = () => (i === lessons.length - 1 ? showFinal() : openLesson(i + 1));
  nav.append(prev, next); main.append(nav);
  renderNav();
  main.focus(); window.scrollTo({ top: 0 });
}

function showFinal() {
  const p = loadProgress();
  const total = lessons.reduce((s, l) => s + l.quiz.length, 0);
  const good = Object.values(p).reduce((s, v) => s + v, 0);
  const all = Object.keys(p).length === lessons.length;
  const main = $("content");
  main.innerHTML = `<div class="final"><h2>Uw resultaat</h2><div class="score"></div><p></p></div>`;
  main.querySelector(".score").textContent = `${good} / ${total}`;
  main.querySelector("p").textContent = all
    ? `Proficiat ${user}! U beheerst nu de basis van de balans, de resultatenrekening én de resultaatverwerking. Neem bij strategische beslissingen steeds uw cijfers en uw accountant mee in het gesprek.`
    : `Nog ${lessons.length - Object.keys(p).length} les(sen) af te ronden. Kies ze links in het menu.`;
  const back = document.createElement("button"); back.className = "btn"; back.textContent = "Terug naar les 1"; back.onclick = () => openLesson(0);
  main.querySelector(".final").append(back);
  main.focus();
}

/* ---------- Aanmelden ---------- */
function showApp() {
  $("login").hidden = true; $("app").hidden = false;
  $("hello").textContent = user;
  openLesson(0);
}

$("toggle-code").onclick = (e) => {
  const inp = $("code"); const show = inp.type === "password";
  inp.type = show ? "text" : "password";
  e.currentTarget.textContent = show ? "Verberg" : "Toon";
  e.currentTarget.setAttribute("aria-pressed", String(show));
};

$("login-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = $("name").value.trim();
  const err = $("login-error");
  if ($("code").value.trim().toUpperCase() !== ACCESS_CODE) {
    err.textContent = "Onjuiste toegangscode."; err.hidden = false; return;
  }
  err.hidden = true; user = name || "Dokter";
  sessionStorage.setItem("jr-user", user);
  showApp();
});

$("logout").onclick = () => {
  sessionStorage.removeItem("jr-user"); user = null;
  $("app").hidden = true; $("login").hidden = false; $("code").value = "";
};

const saved = sessionStorage.getItem("jr-user");
if (saved) { user = saved; showApp(); }
