const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'public', 'logos');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const LOGO_DEFINITIONS = {
  'bpost.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 100" width="300" height="100">
    <rect width="300" height="100" rx="12" fill="#e2001a"/>
    <circle cx="50" cy="50" r="30" fill="#ffffff"/>
    <text x="50" y="62" font-family="Arial, sans-serif" font-weight="bold" font-size="34" fill="#e2001a" text-anchor="middle">b</text>
    <text x="170" y="62" font-family="Arial, sans-serif" font-weight="bold" font-size="36" fill="#ffffff" text-anchor="middle">bpost</text>
  </svg>`,

  'proximus.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 100" width="300" height="100">
    <rect width="300" height="100" rx="12" fill="#5c2d91"/>
    <path d="M40 30 Q65 15 50 50 Q35 85 60 70" fill="none" stroke="#50e3c2" stroke-width="12" stroke-linecap="round"/>
    <text x="180" y="62" font-family="Arial, sans-serif" font-weight="bold" font-size="32" fill="#ffffff" text-anchor="middle">proximus</text>
  </svg>`,

  'biotronik.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 100" width="300" height="100">
    <rect width="300" height="100" rx="12" fill="#003366"/>
    <circle cx="50" cy="50" r="22" stroke="#00a8cc" stroke-width="6" fill="none"/>
    <circle cx="50" cy="50" r="10" fill="#00a8cc"/>
    <text x="175" y="60" font-family="Arial, sans-serif" font-weight="bold" font-size="28" fill="#ffffff" text-anchor="middle" letter-spacing="2">BIOTRONIK</text>
  </svg>`,

  'kuleuven.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 100" width="300" height="100">
    <rect width="300" height="100" rx="12" fill="#1b4079"/>
    <rect x="25" y="25" width="45" height="50" fill="#00a3e0" rx="4"/>
    <text x="47" y="58" font-family="Georgia, serif" font-weight="bold" font-size="28" fill="#ffffff" text-anchor="middle">KU</text>
    <text x="170" y="60" font-family="Georgia, serif" font-weight="bold" font-size="30" fill="#ffffff" text-anchor="middle">KU LEUVEN</text>
  </svg>`,

  'adecco.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 100" width="300" height="100">
    <rect width="300" height="100" rx="12" fill="#da291c"/>
    <text x="150" y="64" font-family="Arial, sans-serif" font-weight="900" font-size="40" fill="#ffffff" text-anchor="middle">Adecco</text>
  </svg>`,

  'apple.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 100" width="300" height="100">
    <rect width="300" height="100" rx="12" fill="#111111"/>
    <path d="M55 42 c-2 -4 -6 -6 -10 -5 c-6 1 -11 6 -11 14 c0 11 8 20 12 20 c3 0 5 -2 8 -2 c3 0 5 2 8 2 c5 0 10 -7 12 -12 c-5 -2 -7 -8 -6 -12 c1 -5 5 -8 7 -9 c-4 -5 -10 -6 -10 -6 z M52 35 c2 -3 3 -6 2 -9 c-3 0 -6 2 -8 4 c-2 2 -3 6 -2 9 c3 0 6 -1 8 -4 z" fill="#ffffff" transform="scale(1.3) translate(-10, -5)"/>
    <text x="175" y="62" font-family="Arial, sans-serif" font-weight="bold" font-size="32" fill="#ffffff" text-anchor="middle">Apple</text>
  </svg>`,

  'barry_callebaut.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 100" width="300" height="100">
    <rect width="300" height="100" rx="12" fill="#3d2314"/>
    <text x="150" y="48" font-family="Arial, sans-serif" font-weight="bold" font-size="22" fill="#d4af37" text-anchor="middle">BARRY</text>
    <text x="150" y="74" font-family="Arial, sans-serif" font-weight="bold" font-size="22" fill="#ffffff" text-anchor="middle">CALLEBAUT</text>
  </svg>`,

  'ugent.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 100" width="300" height="100">
    <rect width="300" height="100" rx="12" fill="#1e64b4"/>
    <polygon points="30,75 50,25 70,75" fill="#ffd200"/>
    <text x="175" y="62" font-family="Georgia, serif" font-weight="bold" font-size="34" fill="#ffffff" text-anchor="middle">UGent</text>
  </svg>`,

  'vub.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 100" width="300" height="100">
    <rect width="300" height="100" rx="12" fill="#f37021"/>
    <rect x="25" y="25" width="50" height="50" fill="#003366" rx="6"/>
    <text x="50" y="60" font-family="Arial, sans-serif" font-weight="bold" font-size="26" fill="#ffffff" text-anchor="middle">VUB</text>
    <text x="175" y="62" font-family="Arial, sans-serif" font-weight="bold" font-size="36" fill="#003366" text-anchor="middle">VUB</text>
  </svg>`,

  'vlaamse_overheid.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 100" width="300" height="100">
    <rect width="300" height="100" rx="12" fill="#ffe600"/>
    <path d="M30 30 L60 30 L60 70 L30 70 Z" fill="#111111"/>
    <text x="175" y="52" font-family="Arial, sans-serif" font-weight="bold" font-size="20" fill="#111111" text-anchor="middle">Vlaamse</text>
    <text x="175" y="74" font-family="Arial, sans-serif" font-weight="bold" font-size="20" fill="#111111" text-anchor="middle">Gemeenschap</text>
  </svg>`,

  'stad_gent.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 100" width="300" height="100">
    <rect width="300" height="100" rx="12" fill="#005a9c"/>
    <text x="150" y="48" font-family="Arial, sans-serif" font-weight="300" font-size="22" fill="#ffffff" text-anchor="middle">STAD</text>
    <text x="150" y="76" font-family="Arial, sans-serif" font-weight="900" font-size="28" fill="#ffffff" text-anchor="middle">GENT</text>
  </svg>`,

  'az_delta.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 100" width="300" height="100">
    <rect width="300" height="100" rx="12" fill="#009688"/>
    <polygon points="30,70 50,30 70,70" fill="#ffffff"/>
    <text x="175" y="62" font-family="Arial, sans-serif" font-weight="bold" font-size="32" fill="#ffffff" text-anchor="middle">AZ Delta</text>
  </svg>`,

  'sonaca.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 100" width="300" height="100">
    <rect width="300" height="100" rx="12" fill="#002b49"/>
    <text x="150" y="64" font-family="Arial, sans-serif" font-weight="900" font-size="36" fill="#00a3e0" text-anchor="middle" letter-spacing="3">SONACA</text>
  </svg>`,

  'air_belgium.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 100" width="300" height="100">
    <rect width="300" height="100" rx="12" fill="#111111"/>
    <text x="150" y="46" font-family="Arial, sans-serif" font-weight="bold" font-size="22" fill="#e30613" text-anchor="middle">AIR BELGIUM</text>
    <text x="150" y="72" font-family="Arial, sans-serif" font-weight="300" font-size="18" fill="#ffe600" text-anchor="middle">INTERNATIONAL</text>
  </svg>`,

  'cm.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 100" width="300" height="100">
    <rect width="300" height="100" rx="12" fill="#00875a"/>
    <rect x="40" y="25" width="20" height="50" fill="#ffffff"/>
    <rect x="25" y="40" width="50" height="20" fill="#ffffff"/>
    <text x="175" y="64" font-family="Arial, sans-serif" font-weight="900" font-size="42" fill="#ffffff" text-anchor="middle">CM</text>
  </svg>`,

  'apb.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 100" width="300" height="100">
    <rect width="300" height="100" rx="12" fill="#1e824c"/>
    <text x="150" y="64" font-family="Arial, sans-serif" font-weight="900" font-size="42" fill="#ffffff" text-anchor="middle" letter-spacing="2">APB</text>
  </svg>`,

  'howest.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 100" width="300" height="100">
    <rect width="300" height="100" rx="12" fill="#ff0055"/>
    <text x="150" y="64" font-family="Arial, sans-serif" font-weight="900" font-size="38" fill="#ffffff" text-anchor="middle">howest</text>
  </svg>`,

  'hogent.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 100" width="300" height="100">
    <rect width="300" height="100" rx="12" fill="#000000"/>
    <text x="150" y="64" font-family="Arial, sans-serif" font-weight="900" font-size="36" fill="#ffffff" text-anchor="middle" letter-spacing="1">HOGENT</text>
  </svg>`,

  'vvt.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 100" width="300" height="100">
    <rect width="300" height="100" rx="12" fill="#004b87"/>
    <text x="150" y="64" font-family="Arial, sans-serif" font-weight="900" font-size="42" fill="#ffffff" text-anchor="middle">VVT</text>
  </svg>`,

  'klav.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 100" width="300" height="100">
    <rect width="300" height="100" rx="12" fill="#005596"/>
    <text x="150" y="64" font-family="Arial, sans-serif" font-weight="900" font-size="38" fill="#ffffff" text-anchor="middle">KLAV</text>
  </svg>`,

  'denys.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 100" width="300" height="100">
    <rect width="300" height="100" rx="12" fill="#e4002b"/>
    <text x="150" y="64" font-family="Arial, sans-serif" font-weight="900" font-size="38" fill="#ffffff" text-anchor="middle" letter-spacing="2">DENYS</text>
  </svg>`,

  'veronove.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 100" width="300" height="100">
    <rect width="300" height="100" rx="12" fill="#333333"/>
    <text x="150" y="64" font-family="Arial, sans-serif" font-weight="700" font-size="32" fill="#e67e22" text-anchor="middle">VERONOVE</text>
  </svg>`,

  'causamatics.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 100" width="300" height="100">
    <rect width="300" height="100" rx="12" fill="#0f172a"/>
    <text x="150" y="62" font-family="Arial, sans-serif" font-weight="700" font-size="28" fill="#38bdf8" text-anchor="middle">causamatics</text>
  </svg>`,

  'fico.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 100" width="300" height="100">
    <rect width="300" height="100" rx="12" fill="#1e3a8a"/>
    <text x="150" y="64" font-family="Arial, sans-serif" font-weight="900" font-size="42" fill="#ffffff" text-anchor="middle">FICO</text>
  </svg>`,

  'philippus_neri.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 100" width="300" height="100">
    <rect width="300" height="100" rx="12" fill="#475569"/>
    <text x="150" y="48" font-family="Arial, sans-serif" font-weight="bold" font-size="20" fill="#ffffff" text-anchor="middle">Philippus Neri</text>
    <text x="150" y="74" font-family="Arial, sans-serif" font-weight="300" font-size="18" fill="#94a3b8" text-anchor="middle">GGZ Waas &amp; Dender</text>
  </svg>`,

  'osteopaat_vlaanderen.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 100" width="300" height="100">
    <rect width="300" height="100" rx="12" fill="#0284c7"/>
    <text x="150" y="48" font-family="Arial, sans-serif" font-weight="bold" font-size="20" fill="#ffffff" text-anchor="middle">Osteopaat</text>
    <text x="150" y="74" font-family="Arial, sans-serif" font-weight="bold" font-size="20" fill="#bae6fd" text-anchor="middle">Vlaanderen</text>
  </svg>`,

  'ugain.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 100" width="300" height="100">
    <rect width="300" height="100" rx="12" fill="#1d4ed8"/>
    <text x="150" y="64" font-family="Arial, sans-serif" font-weight="900" font-size="38" fill="#ffd200" text-anchor="middle">UGain</text>
  </svg>`,

  'timmermans.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 100" width="300" height="100">
    <rect width="300" height="100" rx="12" fill="#374151"/>
    <text x="150" y="62" font-family="Arial, sans-serif" font-weight="700" font-size="28" fill="#f3f4f6" text-anchor="middle">Timmermans</text>
  </svg>`,

  'izidoc.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 100" width="300" height="100">
    <rect width="300" height="100" rx="12" fill="#0d9488"/>
    <text x="150" y="64" font-family="Arial, sans-serif" font-weight="900" font-size="36" fill="#ffffff" text-anchor="middle">IZIDOC</text>
  </svg>`,

  'osteosoft.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 100" width="300" height="100">
    <rect width="300" height="100" rx="12" fill="#4f46e5"/>
    <text x="150" y="64" font-family="Arial, sans-serif" font-weight="800" font-size="32" fill="#ffffff" text-anchor="middle">OsteoSoft</text>
  </svg>`,

  'sunair.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 100" width="300" height="100">
    <rect width="300" height="100" rx="12" fill="#ea580c"/>
    <text x="150" y="64" font-family="Arial, sans-serif" font-weight="900" font-size="38" fill="#ffffff" text-anchor="middle">SUNAIR</text>
  </svg>`,

  'team_consult.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 100" width="300" height="100">
    <rect width="300" height="100" rx="12" fill="#1f2937"/>
    <text x="150" y="62" font-family="Arial, sans-serif" font-weight="700" font-size="28" fill="#60a5fa" text-anchor="middle">Team Consult</text>
  </svg>`
};

console.log('Writing clean vector SVG logos to public/logos/...');
for (const [filename, content] of Object.entries(LOGO_DEFINITIONS)) {
  const filePath = path.join(targetDir, filename);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✅ Created: ${filename}`);
}

console.log('Done creating all 32 SVG logo files!');
