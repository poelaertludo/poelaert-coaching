"use strict";

/* ---------- Instellingen ---------- */
const ACCESS_CODE = "ARTS2026";

const $ = (id) => document.getElementById(id);
const eur = (n) => n.toLocaleString("nl-BE", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });
const pct = (n) => (n * 100).toLocaleString("nl-BE", { maximumFractionDigits: 1 }) + " %";

/* =========================================================================
   TRAJECT 1: BASIS - HUISARTSENPRAKTIJK JANSSENS BV
   ========================================================================= */
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

/* =========================================================================
   TRAJECT 2: REAL TANDARTS BV - CIJFERS & TABELLEN
   ========================================================================= */
const RT = {
  balanstotaal20: 197936,
  balanstotaal21: 313845,
  balanstotaal22: 440340.39,
  vasteActiva: 28586.24,
  installatiesBoek: 0,
  installatiesAanschaf: 46842.02,
  meubilairBoek: 16754.11,
  overigeVasteBoek: 11832.13,
  vlottendeActiva: 411754.15,
  voorraden: 0,
  rcBestuurder: 162935.31,
  liquideMiddelen: 202337.56,
  overlopendActief: 46481.28,
  eigenVermogen: 398183.63,
  inbreng: 12400.00,
  reservesOnbeschikbaar: 1860.00,
  liquidatiereserve: 383922.93,
  schuldenTotaal: 42156.76,
  schuldenLang: 0.00,
  schuldenKortFinancieel: 23381.89,
  leveranciers: 3580.72,
  belastingschulden: 14784.65,
  omzet: 367559.18,
  omzetMutualiteit: 181523.92,
  omzetBancontact: 116709.97,
  omzetCovid: 45590.00,
  omzetGetuigschriften: 20431.00,
  directeKosten60: 69097.07,
  laboTandtechniek: 50792.21,
  verbruiksgoederen: 18304.86,
  contributiemarge: 298462.11,
  dienstenOverhead61: 130049.11,
  vergoedingBestuurder: 49842.62,
  afschrijvingen: 6261.34,
  bedrijfswinst: 177253.36,
  financieleKosten: 1302.98,
  winstVoorBelasting: 175950.40,
  belastingen: 51784.65,
  nettowinst: 124165.75,
  solvabiliteit: 90.43,
  liquiditeit: 8.75
};

const balansTabelRealTandarts = `
<div class="two">
  <table><caption><strong>ACTIVA (30/06/2022)</strong> (Bezittingen)</caption>
    <tr><td><strong>VASTE ACTIVA (Code 21/28)</strong></td><td class="n"><strong>${eur(RT.vasteActiva)}</strong></td></tr>
    <tr><td>&nbsp;&nbsp;Installaties, machines &amp; uitrusting (Rubriek 23)</td><td class="n">${eur(RT.installatiesBoek)}</td></tr>
    <tr><td>&nbsp;&nbsp;Meubilair &amp; kantoormaterieel (Rubriek 24)</td><td class="n">${eur(RT.meubilairBoek)}</td></tr>
    <tr><td>&nbsp;&nbsp;Overige materiële vaste activa (Rubriek 26)</td><td class="n">${eur(RT.overigeVasteBoek)}</td></tr>
    <tr><td><strong>VLOTTENDE ACTIVA (Code 29/58)</strong></td><td class="n"><strong>${eur(RT.vlottendeActiva)}</strong></td></tr>
    <tr><td>&nbsp;&nbsp;Voorraden (disposables direct geboekt)</td><td class="n">${eur(RT.voorraden)}</td></tr>
    <tr><td>&nbsp;&nbsp;Debet Rekening-Courant Zaakvoerder (Rubriek 416)</td><td class="n" style="color:var(--bad);font-weight:700;">${eur(RT.rcBestuurder)}</td></tr>
    <tr><td>&nbsp;&nbsp;Liquide middelen (bank &amp; kas) (Rubriek 54/58)</td><td class="n">${eur(RT.liquideMiddelen)}</td></tr>
    <tr><td>&nbsp;&nbsp;Overlopende rekeningen (te innen mutualiteit)</td><td class="n">${eur(RT.overlopendActief)}</td></tr>
    <tr class="total"><td>TOTAAL VAN DE ACTIVA (Code 20/58)</td><td class="n">${eur(RT.balanstotaal22)}</td></tr>
  </table>
  <table><caption><strong>PASSIVA (30/06/2022)</strong> (Financiering)</caption>
    <tr><td><strong>EIGEN VERMOGEN (Code 10/15)</strong></td><td class="n"><strong>${eur(RT.eigenVermogen)}</strong></td></tr>
    <tr><td>&nbsp;&nbsp;Inbreng / Kapitaal (Rubriek 11)</td><td class="n">${eur(RT.inbreng)}</td></tr>
    <tr><td>&nbsp;&nbsp;Statutair onbeschikbare reserve (Rubriek 1311)</td><td class="n">${eur(RT.reservesOnbeschikbaar)}</td></tr>
    <tr><td>&nbsp;&nbsp;Beschikbare Liquidatiereserve (Rubriek 1331)</td><td class="n" style="color:var(--ok);font-weight:700;">${eur(RT.liquidatiereserve)}</td></tr>
    <tr><td><strong>SCHULDEN (Code 17/49)</strong></td><td class="n"><strong>${eur(RT.schuldenTotaal)}</strong></td></tr>
    <tr><td>&nbsp;&nbsp;Schulden op meer dan 1 jaar (Rubriek 17)</td><td class="n">${eur(RT.schuldenLang)}</td></tr>
    <tr><td>&nbsp;&nbsp;Kortlopend belastingkrediet (VA) (Rubriek 430)</td><td class="n">${eur(RT.schuldenKortFinancieel)}</td></tr>
    <tr><td>&nbsp;&nbsp;Handelsschulden / leveranciers (Rubriek 440)</td><td class="n">${eur(RT.leveranciers)}</td></tr>
    <tr><td>&nbsp;&nbsp;Belastingen &amp; bedrijfsvoorheffing (Rubriek 45)</td><td class="n">${eur(RT.belastingschulden)}</td></tr>
    <tr class="total"><td>TOTAAL VAN DE PASSIVA (Code 10/49)</td><td class="n">${eur(RT.balanstotaal22)}</td></tr>
  </table>
</div>`;

/* ---------- Hulpfuncties Oefeningen ---------- */
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
    feedback(fb, good === rows.length, `${good} van ${rows.length} juist.` + (good === rows.length ? " Uitstekend!" : " Rood = bezit/gebruik (activa) of financiering (passiva)?"));
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
    feedback(fb, wrong === 0, wrong === 0 ? "Correct!" : `${wrong} antwoord(en) kloppen niet. ` + tip);
  };
  box.append(btn, fb);
}

/* =========================================================================
   LESSENREEKS 1: BASISCURSUS (HUISARTSENPRAKTIJK JANSSENS BV)
   ========================================================================= */
const LESSONS_BASIS = [
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
        <li><strong>Winst van het boekjaar:</strong> het eindresultaat na belasting. Dit verhoogt het eigen vermogen op de balans.</li>
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

/* =========================================================================
   LESSENREEKS 2: REAL TANDARTS BV - MASTERCLASS ANALYSE
   ========================================================================= */
const LESSONS_REAL_TANDARTS = [
  {
    title: "De NBB Jaarrekening van Tandartspraktijk BV",
    html: `
      <p>In dit tweede traject analyseren we de <strong>officiële, echte jaarrekening</strong> van een bloeiende tandartspraktijk in Vlaanderen, zoals neergelegd bij de Balanscentrale van de Nationale Bank van België (NBB).</p>
      
      <div class="analogy"><strong>Waarom de NBB-jaarrekening?</strong><br>
      Als arts-bestuurder of kandidaat-vennoot is de officiële NBB-jaarrekening het publieke visitekaartje van elke praktijkvennootschap. Kleine vennootschappen publiceren volgens een verkort model.</div>

      <h3>De evolutie van het balanstotaal (Code 20/58 &amp; 10/49)</h3>
      <table>
        <tr><th>Boekjaar</th><th class="n">Balanstotaal</th><th class="n">Evolutie</th><th>Klinische &amp; Financiële Situatie</th></tr>
        <tr><td>30/06/2020</td><td class="n">${eur(RT.balanstotaal20)}</td><td class="n">Basis</td><td>Opstart- en consolidatiefase.</td></tr>
        <tr><td>30/06/2021</td><td class="n">${eur(RT.balanstotaal21)}</td><td class="n">+58,6 %</td><td>Sterke stijging na de eerste Covid-golf.</td></tr>
        <tr><td>30/06/2022</td><td class="n"><strong>${eur(RT.balanstotaal22)}</strong></td><td class="n"><strong>+40,3 %</strong></td><td>Volle capaciteit, hoge cashgeneratie (+122,5 % over 2 jaar!).</td></tr>
      </table>

      <div class="callout"><strong>Waarom ontbreekt de omzet in de NBB-publicatie?</strong><br>
      Kleine vennootschappen zijn volgens het Belgisch vennootschapsrecht (art. 3:17 WVV) niet verplicht hun omzet publiek te maken. Ze mogen starten met de <strong>Brutomarge (Code 9900: ${eur(RT.brutomarge)})</strong> om concurrentiegevoelige informatie te beschermen. In de interne boekhouding blijkt de werkelijke omzet ${eur(RT.omzet)} te bedragen.</div>`,
    exercise: (box) => exerciseNumbers(box, "Oefening: bereken de groei van het vermogen",
      `In 2020 bedroeg het balanstotaal ${eur(RT.balanstotaal20)}. In 2022 groeide dit naar ${eur(RT.balanstotaal22)}. Bereken de absolute toename van het vermogen.`,
      [{ label: "Toename balanstotaal over 2 jaar (€)", ans: RT.balanstotaal22 - RT.balanstotaal20, tol: 1 }],
      "Tip: trek het balanstotaal van 2020 af van dat van 2022."),
    quiz: [
      { q: "Waarom toont de gepubliceerde NBB-jaarrekening van deze praktijk geen omzet?", o: ["Omdat kleine vennootschappen wettelijk mogen starten bij de Brutomarge (code 9900) ter bescherming van privacy", "Omdat tandartsen geen btw-omzet hebben", "Omdat de boekhouder dat vergeten is"], a: 0, why: "Het Belgisch vennootschapsrecht (WVV) staat kleine vennootschappen toe de omzet niet publiek vrij te geven." },
      { q: "Hoeveel bedraagt het balanstotaal van de praktijk per 30/06/2022?", o: [eur(RT.balanstotaal22), eur(RT.omzet), eur(RT.brutomarge)], a: 0, why: "Code 20/58 (Activa) en Code 10/49 (Passiva) bedragen exact € 440.340,39." },
      { q: "Wat valt direct op aan de groei van het balanstotaal (+122,5% in 2 jaar)?", o: ["De praktijk heeft massaal schulden gemaakt", "De praktijk genereert een zeer sterke interne vermogensgroei", "De praktijk krimpt"], a: 1, why: "Het vermogen verdubbelde in 2 jaar tijd, bijna uitsluitend gevoed door winstreserves." }
    ]
  },
  {
    title: "Activa Rubrieken 21/28: Materiële Vaste Activa & Afschrijvingen",
    html: `
      <p>Kijken we naar de bezittingen (Activa), dan stuiten we direct op een merkwaardige paradox: de <strong>Materiële Vaste Activa bedragen slechts ${eur(RT.vasteActiva)}</strong> (amper 6,5 % van het balanstotaal!).</p>
      
      <h3>Dissectie van de Uitrusting &amp; Afschrijvingstabel</h3>
      <table>
        <tr><th>Actiefpost &amp; Toestel</th><th>Aankoopdatum</th><th class="n">Aanschafwaarde</th><th class="n">Boekwaarde '22</th><th>Afschrijvingstermijn</th></tr>
        <tr><td>Sirona Behandeleenheid (unit)</td><td>08/03/2014</td><td class="n">${eur(11000)}</td><td class="n" style="color:var(--bad);font-weight:700;">€ 0</td><td>5 jaar (volledig afgeschreven)</td></tr>
        <tr><td>Digora Optime RX Scanner</td><td>30/06/2012</td><td class="n">${eur(8000)}</td><td class="n" style="color:var(--bad);font-weight:700;">€ 0</td><td>6 jaar (volledig afgeschreven)</td></tr>
        <tr><td>Dürr VSA 300S Afzuiger</td><td>06/06/2018</td><td class="n">${eur(3098)}</td><td class="n" style="color:var(--bad);font-weight:700;">€ 0</td><td>5 jaar (laatste afschrijving in 2022)</td></tr>
        <tr><td>A-dec Dentale LED-lamp</td><td>08/11/2013</td><td class="n">${eur(4832)}</td><td class="n" style="color:var(--bad);font-weight:700;">€ 0</td><td>5 jaar (volledig afgeschreven)</td></tr>
        <tr><td>Meubilair &amp; Rollend materieel (auto, kasten, tablet)</td><td>2021-2022</td><td class="n">${eur(19469)}</td><td class="n">${eur(RT.meubilairBoek)}</td><td>Recent aangeschaft</td></tr>
        <tr><td>Overige vaste activa (zonwering, laminaat, alarm)</td><td>2015-2022</td><td class="n">${eur(32449)}</td><td class="n">${eur(RT.overigeVasteBoek)}</td><td>Vastgoedinrichting</td></tr>
        <tr class="total"><td>TOTAAL MATERIËLE VASTE ACTIVA (Code 22/27)</td><td></td><td class="n">${eur(101532)}</td><td class="n">${eur(RT.vasteActiva)}</td><td>Reeds € 72.946 afgeschreven</td></tr>
      </table>

      <div class="callout"><strong>De Klinische &amp; Strategische Waarschuwing van Prof. Poelaert:</strong><br>
      Het kabinet draait op medische toestellen die <em>boekhoudkundig op € 0 staan</em>. Dit levert nu tijdelijk een zeer hoge boekhoudkundige winst op (want er zijn nauwelijks nog afschrijvingskosten), maar het is een <strong>fata morgana</strong>: de apparatuur is technisch en ergonomisch aan het verouderen. Binnen 1 tot 3 jaar staat deze praktijk voor een zware investeringsgolf (Capex) van € 50.000 tot € 80.000 voor een nieuwe behandelstoel en beeldvorming!</div>`,
    exercise: (box) => exerciseNumbers(box, "Oefening: bereken de totale afschrijvingen",
      `De totale aanschafwaarde van alle materiële vaste activa bedraagt ${eur(101532)}. De huidige boekwaarde bedraagt nog slechts ${eur(RT.vasteActiva)}. Hoeveel euro heeft de vennootschap inmiddels cumulatief afgeschreven?`,
      [{ label: "Reeds afgeschreven bedrag (€)", ans: 101532 - RT.vasteActiva, tol: 1 }],
      "Tip: trek de huidige boekwaarde af van de aanschafwaarde."),
    quiz: [
      { q: "Wat betekent het als de Sirona-behandelunit op de balans op € 0 staat?", o: ["Het toestel is kapot en werkt niet meer", "Het toestel is boekhoudkundig volledig fiscaal afgeschreven, maar kan fysiek nog in gebruik zijn", "Het toestel is gratis geschonken door de leverancier"], a: 1, why: "Afschrijven is een fiscale spreiding over de gebruiksduur. Na de termijn is de boekwaarde € 0, ook al functioneert het toestel nog." },
      { q: "Welk risico loopt een praktijk waar alle medische machines voor 100% afgeschreven zijn?", o: ["Geen enkel risico, want er zijn geen schulden", "Binnenkort is er een aanzienlijke investeringskost (Capex) nodig om versleten apparatuur te vernieuwen", "De vennootschap moet verplicht liquideren"], a: 1, why: "Verouderde apparatuur verhoogt het risico op uitval en vraagt op korte termijn forse herinvesteringen." },
      { q: "Waarom heeft deze tandartspraktijk geen post 'Terreinen en gebouwen' op haar balans staan?", o: ["Omdat de tandarts het praktijkpand privé bezit en verhuurt aan de vennootschap", "Omdat tandartsen geen vastgoed mogen bezitten", "Omdat het pand illegaal gebouwd is"], a: 0, why: "Veel artsen houden het onroerend goed privé aan en laten de vennootschap een maandelijkse huur betalen." }
    ]
  },
  {
    title: "Vlottende Activa Rubriek 40/41 & 54/58: De Fiscale Tijdbom (Debet RC)",
    html: `
      <p>Maar liefst <strong>93,5 % van alle bezittingen</strong> (${eur(RT.vlottendeActiva)}) zijn vlottende activa. Als we deze rubriek ontleden, ontdekken we de grootste financiële kwetsbaarheid van deze praktijk.</p>
      
      <h3>De samenstelling van de Vlottende Activa</h3>
      <table>
        <tr><th>Actiefpost</th><th class="n">Bedrag</th><th class="n">Aandeel</th><th>Toelichting</th></tr>
        <tr><td>Voorraden (Code 3)</td><td class="n">${eur(0)}</td><td class="n">0,0 %</td><td>Disposables en composieten worden direct als kost geboekt.</td></tr>
        <tr><td><strong>Debet Rekening-Courant Zaakvoerder (Rubriek 416)</strong></td><td class="n" style="color:var(--bad);font-weight:700;">${eur(RT.rcBestuurder)}</td><td class="n" style="color:var(--bad);font-weight:700;">37,0 %</td><td>Geld dat de tandarts privé uit de praktijk heeft gehaald!</td></tr>
        <tr><td><strong>Liquide middelen (bank &amp; kas) (Code 54/58)</strong></td><td class="n" style="color:var(--ok);font-weight:700;">${eur(RT.liquideMiddelen)}</td><td class="n">45,9 %</td><td>Enorme cashbuffer op de zicht- en spaarrekening.</td></tr>
        <tr><td>Overlopende rekeningen (Code 490/1)</td><td class="n">${eur(RT.overlopendActief)}</td><td class="n">10,6 %</td><td>Prestaties mei-juni nog te ontvangen van mutualiteiten.</td></tr>
        <tr class="total"><td>TOTAAL VLOTTENDE ACTIVA</td><td class="n">${eur(RT.vlottendeActiva)}</td><td class="n">93,5 %</td><td></td></tr>
      </table>

      <div class="callout" style="border-left-color:var(--bad);"><strong>De Fiscale Tijdbom: Rekening 416000 (${eur(RT.rcBestuurder)})</strong><br>
      De tandarts heeft in de loop der jaren ruim <strong>€ 162.000 méér privé opgenomen</strong> dan hij als officieel loon of dividend heeft aangegeven. De vennootschap heeft dit geld dus feitelijk 'voorgeschoten' aan de arts.<br><br>
      <strong>Het gevaar van de fiscus (art. 18 KB/WIB 92):</strong><br>
      De belastingdienst beschouwt een debetstand op de rekening-courant als een <em>renteloze geldlening</em> aan de bestuurder en rekent een torenhoge fictieve debetrente aan (rond 6 à 10 % per jaar!). Dit levert een zwaar <strong>Voordeel Alle Aard (VAA)</strong> op dat privé in de personenbelasting wordt belast tegen het marginaal tarief (tot 53,5 % inclusief gemeentebelasting). De tandarts betaalt elk jaar duizenden euro's pure belasting over geld dat hij allang heeft uitgegeven!</div>`,
    exercise: (box) => exerciseNumbers(box, "Oefening: bereken de liquide reserves en vorderingen",
      `De totale kasmiddelen op de bank bedragen ${eur(RT.liquideMiddelen)} en de te ontvangen mutualiteitsgelden bedragen ${eur(44863)}. Hoeveel vrije middelen kan de praktijk op zeer korte termijn aanspreken?`,
      [{ label: "Totaal direct beschikbaar (€)", ans: RT.liquideMiddelen + 44863, tol: 1 }],
      "Tip: tel de liquide middelen en de verkregen opbrengsten van de mutualiteit bij elkaar op."),
    quiz: [
      { q: "Wat betekent het als rekening 416 (Rekening-Courant Zaakvoerder) een debetstand heeft van € 162.935?", o: ["De vennootschap heeft een schuld aan de arts", "De arts heeft een schuld aan zijn eigen vennootschap (hij heeft geld privé opgenomen)", "Het is een spaarrekening voor de pensioenopbouw"], a: 1, why: "Een debetstand op actief betekent dat de vennootschap een vordering heeft op de arts privé." },
      { q: "Waarom noemt Prof. Poelaert een debet rekening-courant een 'fiscale tijdbom'?", o: ["Omdat de fiscus een fictieve rente (VAA) aanrekent die privé zwaar wordt belast tegen maximaal 53,5%", "Omdat de vennootschap automatisch failliet wordt verklaard", "Omdat de bank direct alle rekeningen blokkeert"], a: 0, why: "Art. 18 KB/WIB 92 belast de niet-betaalde rente als een zwaar belastbaar voordeel van alle aard in de personenbelasting." },
      { q: "Waarom heeft deze tandartspraktijk € 0 voorraad op de balans staan?", o: ["Omdat alle voorraad gestolen is", "Omdat alle verbruiksgoederen (composiet, verdoving) bij aankoop meteen in kosten (rekening 604) worden geboekt", "Omdat tandartsen geen voorraad mogen hebben"], a: 1, why: "In kleine solopraktijken wordt courant gewerkt zonder formele balansinventaris; aankopen gaan direct naar de resultatenrekening." }
    ]
  },
  {
    title: "Passiva Rubriek 10/15: Eigen Vermogen & Triomf van de Liquidatiereserve",
    html: `
      <p>De passiefzijde toont de financiering. Hier schittert de balans van Real Tandarts: het <strong>Eigen Vermogen bedraagt maar liefst ${eur(RT.eigenVermogen)}</strong> (${pct(RT.eigenVermogen / RT.balanstotaal22)} van het balanstotaal!).</p>
      
      <h3>De samenstelling van het Eigen Vermogen</h3>
      <table>
        <tr><th>Passiefpost</th><th class="n">Bedrag</th><th class="n">Aandeel</th><th>Betekenis</th></tr>
        <tr><td>Inbreng / Kapitaal (Code 11)</td><td class="n">${eur(RT.inbreng)}</td><td class="n">2,8 %</td><td>Het oorspronkelijk gestorte startkapitaal van de BV.</td></tr>
        <tr><td>Statutair onbeschikbare reserve (Code 1311)</td><td class="n">${eur(RT.reservesOnbeschikbaar)}</td><td class="n">0,4 %</td><td>Wettelijke buffer gevormd bij oprichting.</td></tr>
        <tr><td><strong>Beschikbare Liquidatiereserve (Code 1331)</strong></td><td class="n" style="color:var(--ok);font-weight:700;">${eur(RT.liquidatiereserve)}</td><td class="n" style="color:var(--ok);font-weight:700;">87,2 %</td><td>Opgebouwde winstreserves onder het gunstige liquidatieregime.</td></tr>
        <tr class="total"><td>TOTAAL EIGEN VERMOGEN (Code 10/15)</td><td class="n">${eur(RT.eigenVermogen)}</td><td class="n">90,4 %</td><td>Solvabiliteit van meer dan 90 %!</td></tr>
      </table>

      <div class="callout"><strong>De Triomf van de Liquidatiereserve (${eur(RT.liquidatiereserve)}):</strong><br>
      In plaats van jaarlijks dividenden uit te keren tegen het standaardtarief van 30 % roerende voorheffing, heeft deze tandarts zijn winsten systematisch gereserveerd via de <em>liquidatiereserve</em>:<br>
      1. Bij aanleg betaalt de vennootschap een eenmalige anticipatieve heffing van <strong>10 %</strong>.<br>
      2. Na een wachttijd van 5 jaar kan de tandarts dit geld privé uitkeren tegen slechts <strong>5 % bijkomende roerende voorheffing</strong>.<br>
      3. Totale belastingdruk: amper <strong>13,64 %</strong> in plaats van de klassieke 30 %! Dit verklaart de gigantische vermogensopbouw in de vennootschap.</div>`,
    exercise: (box) => exerciseNumbers(box, "Oefening: bereken de solvabiliteitsgraad",
      `Het eigen vermogen bedraagt ${eur(RT.eigenVermogen)} en het totale passief bedraagt ${eur(RT.balanstotaal22)}. Bereken het percentage eigen vermogen (de solvabiliteit).`,
      [{ label: "Solvabiliteit (%)", ans: RT.solvabiliteit, tol: 0.2 }],
      "Tip: deel het eigen vermogen door het balanstotaal en vermenigvuldig met 100."),
    quiz: [
      { q: "Wat is het percentage eigen vermogen (solvabiliteit) van Real Tandarts BV?", o: ["90,4 %", "50,0 %", "12,5 %"], a: 0, why: "€ 398.184 eigen vermogen op € 440.340 totaal passief geeft een buitengewone solvabiliteit van 90,43%." },
      { q: "Wat is het grote fiscale voordeel van een liquidatiereserve t.o.v. een gewoon dividend?", o: ["Er is helemaal geen belasting verschuldigd", "De roerende voorheffing daalt na 5 jaar wachttijd naar 5% (totale druk ~13,64% i.p.v. 30%)", "De vennootschap krijgt een subsidie van het RIZIV"], a: 1, why: "Door 10% anticipatief en na 5 jaar 5% bijkomend te betalen, bespaart de arts meer dan de helft aan roerende voorheffing." },
      { q: "Kan de tandarts de liquidatiereserve van € 383.923 zomaar morgen integraal cash opnemen?", o: ["Ja, het staat op de bank", "Neen, want € 162.935 zit al vast in de debet rekening-courant en er moet rekening gehouden worden met de 5-jarige wachttermijn", "Neen, want de staat eist 80% op"], a: 1, why: "Een aanzienlijk deel van de reserves is feitelijk al eerder privé opgenomen via de debet-stand van de rekening-courant!" }
    ]
  },
  {
    title: "Passiva Rubriek 17 & 42/48: Schulden & Het Vreemd Vermogen",
    html: `
      <p>Terwijl veel ondernemingen gebukt gaan onder bankleningen en kredieten, vertoont het vreemd vermogen van Real Tandarts BV een opmerkelijk rustig beeld: de totale schulden bedragen slechts <strong>${eur(RT.schuldenTotaal)}</strong> (amper 9,6 % van het balanstotaal!).</p>
      
      <h3>De samenstelling van de Schulden</h3>
      <table>
        <tr><th>Schuldenpost</th><th class="n">Bedrag</th><th>Aard van de schuld</th></tr>
        <tr><td><strong>Schulden op meer dan 1 jaar (Code 17)</strong></td><td class="n" style="color:var(--ok);font-weight:700;">€ 0</td><td><strong>Geen enkel langetermijnkrediet of banklening!</strong></td></tr>
        <tr><td>Schulden op ten hoogste 1 jaar (Code 42/48)</td><td class="n">${eur(41747)}</td><td>Kortlopende operationele schulden:</td></tr>
        <tr><td>&nbsp;&nbsp;Kortlopend krediet KBC (Rekening 430000)</td><td class="n">${eur(RT.schuldenKortFinancieel)}</td><td>Voorafbetalingslening vennootschapsbelasting (VA-krediet).</td></tr>
        <tr><td>&nbsp;&nbsp;Handelsschulden / Leveranciers (Rekening 440000)</td><td class="n">${eur(RT.leveranciers)}</td><td>Openstaande facturen dental depots (betaald binnen 6,5 dagen).</td></tr>
        <tr><td>&nbsp;&nbsp;Belastingen &amp; Bedrijfsvoorheffing (Rekening 45)</td><td class="n">${eur(RT.belastingschulden)}</td><td>Geraamde vennootschapsbelasting en bedrijfsvoorheffing juni.</td></tr>
        <tr><td>Overlopende rekeningen passief (Code 492/3)</td><td class="n">${eur(410)}</td><td>Kleine toe te rekenen kosten.</td></tr>
        <tr class="total"><td>TOTAAL VAN DE SCHULDEN (Code 17/49)</td><td class="n">${eur(RT.schuldenTotaal)}</td><td>Slechts 9,57 % van het passief!</td></tr>
      </table>

      <div class="callout"><strong>Waarom leent de praktijk € 23.382 voor belastingen als er € 202.000 op de bank staat?</strong><br>
      Veel artsen vragen zich af waarom de vennootschap een banklening afsluit voor voorafbetalingen terwijl er ruim voldoende cash is. De verklaring is fiscaal-financieel slim:<br>
      De bank biedt een speciaal <em>VA-krediet (Voorafbetalingskrediet)</em> aan tegen een zeer lage vaste rente (in dit boekjaar bedroeg de intrest amper <strong>€ 299,98</strong>!). Door dit krediet te gebruiken worden de zware belastingvermeerderingen van de fiscus vermeden, terwijl de eigen cashbuffer van € 202.000 onaangeroerd op de rekening blijft staan als veilige noodbuffer.</div>`,
    exercise: (box) => exerciseNumbers(box, "Oefening: bereken de algemene schuldgraad",
      `De totale schulden bedragen ${eur(RT.schuldenTotaal)} op een balanstotaal van ${eur(RT.balanstotaal22)}. Bereken de algemene schuldgraad in procent.`,
      [{ label: "Schuldgraad (%)", ans: (RT.schuldenTotaal / RT.balanstotaal22) * 100, tol: 0.2 }],
      "Tip: deel de totale schulden door het balanstotaal en vermenigvuldig met 100."),
    quiz: [
      { q: "Hoeveel langetermijnschulden (looptijd > 1 jaar) heeft Real Tandarts BV?", o: ["€ 0,00", "€ 50.000", "€ 162.935"], a: 0, why: "Code 17 staat op nul; alle vroegere investeringsleningen voor apparatuur zijn volledig afgelost." },
      { q: "Wat is de gemiddelde betalingstermijn van leveranciersfacturen in deze praktijk?", o: ["Slechts 6,5 dagen (vrijwel onmiddellijke contante betaling)", "90 dagen", "180 dagen"], a: 0, why: "Met amper € 3.580 handelsschulden op € 69.000 directe aankopen betaalt de tandarts zijn leveranciers uitzonderlijk stipt." },
      { q: "Waarom heeft de vennootschap een schuld van € 23.382 bij KBC?", o: ["Omdat de praktijk in geldnood zat", "Het is een fiscaal VA-krediet om belastingvermeerderingen te vermijden tegen een minieme rente", "Het is de autolening van de partner"], a: 1, why: "Een VA-lening is een klassiek bankinstrument om kwartaalbelastingen te financieren zonder de eigen thesaurie aan te spreken." }
    ]
  },
  {
    title: "De Resultatenrekening: Omzet, Rubriek 60 & Rubriek 61",
    html: `
      <p>Nu duiken we in de resultatenrekening (de 'film' over het boekjaar). Hier wordt duidelijk waarom deze tandartspraktijk een buitengewone winstmachine is.</p>
      
      <h3>1. De Omzetdissectie (${eur(RT.omzet)})</h3>
      <table>
        <tr><th>Inkomstenstroom</th><th class="n">Bedrag</th><th class="n">Aandeel</th><th>Klinische Duiding</th></tr>
        <tr><td>Derdebetaler Mutualiteiten (Rekening 700200)</td><td class="n">${eur(RT.omzetMutualiteit)}</td><td class="n">49,4 %</td><td>Verplichte en courante derdebetalersregeling.</td></tr>
        <tr><td>Bancontact aan de stoel (Rekening 700300)</td><td class="n">${eur(RT.omzetBancontact)}</td><td class="n">31,8 %</td><td>Remgelden en supplementen direct betaald door patiënten.</td></tr>
        <tr><td>Forfait beschermingsmateriaal RIZIV (Rekening 700610)</td><td class="n" style="color:var(--warn);font-weight:700;">${eur(RT.omzetCovid)}</td><td class="n" style="font-weight:700;">12,4 %</td><td>Tijdelijke Covid-19 tegemoetkoming!</td></tr>
        <tr><td>Getuigschriften contant (Rekening 700100)</td><td class="n">${eur(RT.omzetGetuigschriften)}</td><td class="n">5,6 %</td><td>Klassieke contante betalingen.</td></tr>
        <tr><td>RIZIV Accreditering &amp; Payconiq</td><td class="n">${eur(3304)}</td><td class="n">0,9 %</td><td>Vaste vergoedingen.</td></tr>
        <tr class="total"><td>TOTALE OMZET (Code 70)</td><td class="n">${eur(RT.omzet)}</td><td class="n">100,0 %</td><td>Gerealiseerd door de behandelend arts.</td></tr>
      </table>

      <h3>2. De Directe Kosten &amp; Contributiemarge (Rubriek 60)</h3>
      <table>
        <tr><th>Directe Kostenpost</th><th class="n">Bedrag</th><th class="n">% Omzet</th><th>Klinische Duiding</th></tr>
        <tr><td>Aankopen Tandtechnieker / Labo (Rekening 604300)</td><td class="n">${eur(RT.laboTandtechniek)}</td><td class="n">13,8 %</td><td>Kroon- en brugwerk, prothesen, aligners.</td></tr>
        <tr><td>Verbruiksgoederen / Disposables (Rekening 604100)</td><td class="n">${eur(RT.verbruiksgoederen)}</td><td class="n">5,0 %</td><td>Composiet, hechtmateriaal, handschoenen, verdoving.</td></tr>
        <tr class="total"><td>TOTALE DIRECTE KOSTEN (Rubriek 60)</td><td class="n">${eur(RT.directeKosten60)}</td><td class="n">18,8 %</td><td>Zeer strak en efficiënt aankoopbeleid!</td></tr>
        <tr class="total" style="background:#e8f6ee;"><td>CONTRIBUTIEMARGE (Omzet min Directe Kosten)</td><td class="n" style="color:var(--ok);">${eur(RT.contributiemarge)}</td><td class="n" style="color:var(--ok);font-weight:700;">81,2 %</td><td>Voor elke € 100 blijft € 81,20 over voor overhead &amp; winst!</td></tr>
      </table>

      <h3>3. Diensten en Diverse Goederen (Rubriek 61: ${eur(RT.dienstenOverhead61)}) &amp; Winst</h3>
      <ul>
        <li><strong>Bezoldiging zaakvoerder (Rekening 618):</strong> ${eur(RT.vergoedingBestuurder)} (stabiel loonpakket).</li>
        <li><strong>Overige exploitatiekosten:</strong> Huur praktijkruimte, erelonen accountant, sociaal secretariaat, IT-software, verzekeringen en nutsvoorzieningen.</li>
        <li><strong>Afschrijvingen (Code 630):</strong> Amper ${eur(RT.afschrijvingen)} (door het bijna volledig afgeschreven machinepark).</li>
        <li><strong>Bedrijfswinst (Code 9901):</strong> ${eur(RT.bedrijfswinst)}</li>
        <li><strong>Vennootschapsbelasting (Code 67/77):</strong> ${eur(RT.belastingen)}</li>
        <li><strong>NETTOWINST VAN HET BOEKJAAR (Code 9904):</strong> <strong style="color:var(--ok);font-size:1.15rem;">${eur(RT.nettowinst)}</strong> (Nettomarge van <strong>33,8 %</strong>!).</li>
      </ul>`,
    exercise: (box) => exerciseNumbers(box, "Oefening: bereken de nettowinstmarge",
      `De nettowinst bedraagt ${eur(RT.nettowinst)} op een totale omzet van ${eur(RT.omzet)}. Hoeveel procent nettowinst houdt de praktijk over per euro omzet?`,
      [{ label: "Nettowinstmarge (%)", ans: (RT.nettowinst / RT.omzet) * 100, tol: 0.3 }],
      "Tip: deel de nettowinst door de omzet en doe maal 100."),
    quiz: [
      { q: "Wat is de contributiemarge van deze tandartspraktijk (omzet min directe kosten labo en verbruiksmaterialen)?", o: ["81,2 %", "50,0 %", "25,0 %"], a: 0, why: "Van elke € 100 omzet blijft € 81,20 over om overheadkosten, afschrijvingen en winst te dekken." },
      { q: "Wat is het effect van het wegvallen van het Covid-forfait beschermingsmateriaal (€ 45.590)?", o: ["Geen enkel effect", "Dit vertegenwoordigt 12,4% van de omzet en zal de bedrijfswinst direct drukken als er geen extra prestaties tegenover staan", "De belastingdienst betaalt dit automatisch terug"], a: 1, why: "Dit was een tijdelijke RIZIV-steunmaatregel die een forse pure marge opleverde." },
      { q: "Hoeveel bedraagt de uiteindelijke zuivere nettowinst na belasting?", o: [eur(RT.nettowinst), eur(RT.bedrijfswinst), eur(RT.brutomarge)], a: 0, why: "De nettowinst na alle exploitatiekosten en na € 51.785 belastingen bedraagt exact € 124.165,75." }
    ]
  },
  {
    title: "Ratiodiagnostiek & Het Strategisch Actieplan",
    html: `
      <p>Als we alle cijfers synthetiseren, zien we een praktijk met een <strong>schitterende operationele gezondheid</strong>, maar met <strong>twee acute strategisch-fiscale risico's</strong> die moeten worden aangepakt.</p>
      
      <h3>De Financiële Gezondheidskaart (Ratiodiagnostiek)</h3>
      <table>
        <tr><th>Financiële Ratio</th><th class="n">Waarde Real Tandarts</th><th>Norm Gezonde Praktijk</th><th>Diagnose van Prof. Poelaert</th></tr>
        <tr><td><strong>Solvabiliteit</strong> (Eigen vermogen / Passiva)</td><td class="n" style="color:var(--ok);font-weight:700;">90,43 %</td><td>Min. 30 %, Veilig > 50 %</td><td>Uitmuntend. De praktijk is nagenoeg volledig schuldvrij.</td></tr>
        <tr><td><strong>Liquiditeit</strong> (Vlottend actief / Korte schuld)</td><td class="n" style="color:var(--ok);font-weight:700;">8,75</td><td>Min. 1,0, Veilig > 1,5</td><td>Gigantische buffer. Kan korte schulden bijna 9x betalen.</td></tr>
        <tr><td><strong>Nettothesaurie</strong> (Vrije kasmiddelen)</td><td class="n" style="color:var(--ok);font-weight:700;">${eur(RT.liquideMiddelen)}</td><td>Positief</td><td>Enorme cashberg op de bankrekening.</td></tr>
        <tr><td><strong>Nettowinstmarge</strong></td><td class="n" style="color:var(--ok);font-weight:700;">33,78 %</td><td>> 15 %</td><td>Uitzonderlijk winstgevend verdienmodel.</td></tr>
      </table>

      <h3>Het Strategisch Actieplan in 3 Stappen (Advies van Prof. Ludo Poelaert)</h3>
      <ol>
        <li>
          <strong>Stap 1: Ontmijn de Debet Rekening-Courant (${eur(RT.rcBestuurder)}) via de Liquidatiereserve</strong><br>
          De tandarts moet <em>geen privé-geld storten</em> om zijn schuld aan de vennootschap in te lossen! De vennootschap bezit immers ruim <strong>${eur(RT.liquidatiereserve)} aan beschikbare liquidatiereserves</strong>. Door een dividenduitkering toe te kennen uit de 'oude' liquidatiereserves (onderworpen aan slechts 5 % roerende voorheffing), wordt het netto-dividend administratief verrekend met de debetstand van de rekening-courant.<br>
          <em>Gevolg:</em> De debetstand zakt naar nul, de fiscus kan geen fictieve rente (VAA) meer belasten, en de jaarlijkse privébelastingfactuur daalt met duizenden euro's!
        </li>
        <li>
          <strong>Stap 2: Behoud het Verlaagd Vennootschapstarief (20 %) &amp; IPT-optimalisatie</strong><br>
          De huidige bezoldiging van de zaakvoerder bedraagt ${eur(RT.vergoedingBestuurder)}. Dit ligt net boven de wettelijke drempel van <strong>€ 45.000</strong>. Deze drempel moet nauwlettend bewaakt worden om het verlaagd vennootschapstarief van 20 % (op de eerste € 100.000 winst) niet te verliezen, én om de fiscale aftrekbaarheid van de Individuele Pensioentoezegging (IPT, de 80%-regel) maximaal te benutten.
        </li>
        <li>
          <strong>Stap 3: Reserveren voor Vervangingsinvesteringen (Capex)</strong><br>
          Met een volledig afgeschreven behandelunit en RX-scanner moet de praktijk ${eur(50000)} tot ${eur(80000)} van de huidige kasmiddelen van ${eur(RT.liquideMiddelen)} oormerken voor een technologische vernieuwingsoperatie.
        </li>
      </ol>`,
    exercise: (box) => exerciseNumbers(box, "Oefening: bereken de resterende liquidatiereserve na ontmijning",
      `De beschikbare liquidatiereserve bedraagt ${eur(RT.liquidatiereserve)}. Als de tandarts ${eur(RT.rcBestuurder)} gebruikt om zijn rekening-courant volledig administratief weg te werken, hoeveel liquidatiereserve blijft er dan nog over in de vennootschap?`,
      [{ label: "Resterende reserve (€)", ans: RT.liquidatiereserve - RT.rcBestuurder, tol: 1 }],
      "Tip: trek de schuld van de rekening-courant af van de totale liquidatiereserve."),
    quiz: [
      { q: "Hoe kan de tandarts zijn schuld van € 162.935 aan zijn vennootschap oplossen zónder privé nieuw geld te moeten storten?", o: ["Door een dividend toe te kennen uit de opgebouwde liquidatiereserve en dit administratief te verrekenen", "Door de vennootschap failliet te laten gaan", "Door een lening aan te gaan bij familie"], a: 0, why: "Een dividenduitkering uit de liquidatiereserve levert een schuld van de vennootschap aan de arts op, die de vordering op de arts perfect compenseert." },
      { q: "Wat is de minimale jaarlijkse bezoldiging van de bedrijfsleider om van het verlaagd vennootschapstarief (20%) te genieten?", o: ["€ 45.000", "€ 10.000", "€ 100.000"], a: 0, why: "Het fiscaal wetboek vereist een minimale bezoldiging van € 45.000 (of minstens gelijk aan de belastbare winst) om van het gunsttarief van 20% te genieten." },
      { q: "Wat toont de liquiditeitsratio van 8,75 aan over de financiële veerkracht van deze praktijk?", o: ["De praktijk heeft een overvloed aan kasmiddelen en kan elke kortlopende verplichting moeiteloos en direct voldoen", "De praktijk is bijna failliet", "De praktijk heeft te veel voorraden"], a: 0, why: "Een liquiditeit van 8,75 betekent dat er voor elke euro kortlopende schuld bijna 9 euro direct beschikbare middelen klaarstaan." }
    ]
  }
];

/* =========================================================================
   ROUTING & TRACK SELECTOR LOGIC
   ========================================================================= */
const TRACKS = {
  basis: {
    name: "Basis Jaarrekening (Huisartsenpraktijk Janssens)",
    lessons: LESSONS_BASIS
  },
  realtandarts: {
    name: "Masterclass: Real Tandarts BV (NBB)",
    lessons: LESSONS_REAL_TANDARTS
  }
};

let currentTrack = "basis";
let user = null;
let current = 0;

const key = () => `jr-progress-${currentTrack}-${user.toLowerCase()}`;
const loadProgress = () => { try { return JSON.parse(localStorage.getItem(key())) || {}; } catch { return {}; } };
const saveProgress = (p) => localStorage.setItem(key(), JSON.stringify(p));

function getActiveLessons() {
  return TRACKS[currentTrack].lessons;
}

function renderNav() {
  const lessons = getActiveLessons();
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
  const lessons = getActiveLessons();
  const l = lessons[i];
  const main = $("content");
  main.innerHTML = `<div style="font-size:0.85rem;color:var(--muted);text-transform:uppercase;letter-spacing:0.5px;font-weight:700;margin-bottom:0.5rem;">${TRACKS[currentTrack].name}</div><h2>Les ${i + 1}: ${l.title}</h2>${l.html}`;
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
  const lessons = getActiveLessons();
  const p = loadProgress();
  const total = lessons.reduce((s, l) => s + l.quiz.length, 0);
  const good = Object.values(p).reduce((s, v) => s + v, 0);
  const all = Object.keys(p).length === lessons.length;
  const main = $("content");
  main.innerHTML = `<div class="final"><h2>Uw resultaat: ${TRACKS[currentTrack].name}</h2><div class="score"></div><p></p></div>`;
  main.querySelector(".score").textContent = `${good} / ${total}`;
  main.querySelector("p").textContent = all
    ? `Proficiat ${user}! U beheerst nu dit leertraject. Neem bij strategische keuzes steeds uw cijfers en uw accountant mee in het gesprek.`
    : `Nog ${lessons.length - Object.keys(p).length} les(sen) af te ronden in dit traject. Kies ze links in het menu.`;
  
  const wrap = document.createElement("div");
  wrap.style.display = "flex";
  wrap.style.gap = "1rem";
  wrap.style.justifyContent = "center";
  wrap.style.marginTop = "1.5rem";

  const back = document.createElement("button"); back.className = "btn"; back.textContent = "Terug naar les 1"; back.onclick = () => openLesson(0);
  wrap.append(back);

  if (currentTrack === "basis") {
    const nextTr = document.createElement("button"); nextTr.className = "primary"; nextTr.style.marginTop = "0"; nextTr.style.width = "auto";
    nextTr.textContent = "Ga door naar Masterclass Real Tandarts →";
    nextTr.onclick = () => {
      $("track-select").value = "realtandarts";
      currentTrack = "realtandarts";
      openLesson(0);
    };
    wrap.append(nextTr);
  }

  main.querySelector(".final").append(wrap);
  main.focus();
}

/* ---------- Aanmelden & Event Listeners ---------- */
function showApp() {
  $("login").hidden = true; $("app").hidden = false;
  $("hello").textContent = user;
  
  const trSel = $("track-select");
  if (trSel) {
    trSel.value = currentTrack;
    trSel.onchange = (e) => {
      currentTrack = e.target.value;
      current = 0;
      openLesson(0);
    };
  }
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
