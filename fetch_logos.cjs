const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const LOGOS = [
  { name: 'bpost', filename: 'bpost.svg', url: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Bpost_logo.svg' },
  { name: 'proximus', filename: 'proximus.svg', url: 'https://upload.wikimedia.org/wikipedia/commons/2/23/Proximus_logo.svg' },
  { name: 'biotronik', filename: 'biotronik.svg', url: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Biotronik_Logo.svg' },
  { name: 'kuleuven', filename: 'kuleuven.svg', url: 'https://upload.wikimedia.org/wikipedia/commons/0/07/KU_Leuven_logo.svg' },
  { name: 'adecco', filename: 'adecco.svg', url: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Adecco_logo.svg' },
  { name: 'apple', filename: 'apple.svg', url: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
  { name: 'barry_callebaut', filename: 'barry_callebaut.svg', url: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Barry_Callebaut_logo.svg' },
  { name: 'ugent', filename: 'ugent.svg', url: 'https://upload.wikimedia.org/wikipedia/commons/0/08/UGent_logo.svg' },
  { name: 'vub', filename: 'vub.svg', url: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Logo_VUB.svg' },
  { name: 'vlaamse_overheid', filename: 'vlaamse_overheid.svg', url: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Logo_Vlaanderen_Geel-Zwart.svg' },
  { name: 'stad_gent', filename: 'stad_gent.svg', url: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Logo_Stad_Gent.svg' },
  { name: 'az_delta', filename: 'az_delta.svg', url: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/AZ_Delta_logo.svg' },
  { name: 'sonaca', filename: 'sonaca.svg', url: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Sonaca_logo.svg' },
  { name: 'air_belgium', filename: 'air_belgium.svg', url: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Air_Belgium_logo.svg' },
  { name: 'cm', filename: 'cm.svg', url: 'https://upload.wikimedia.org/wikipedia/commons/0/06/Christelijke_Mutualiteit_logo.svg' },
  { name: 'howest', filename: 'howest.svg', url: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Howest_logo.svg' },
  { name: 'hogent', filename: 'hogent.svg', url: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Logo_HOGENT.svg' },
  { name: 'apb', filename: 'apb.png', url: 'https://www.apb.be/SiteCollectionImages/LogoAPB.svg' },
  { name: 'vvt', filename: 'vvt.png', url: 'https://www.vvt.be/sites/default/files/logo-vvt.png' }
];

const targetDir = path.join(__dirname, 'public', 'logos');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

function downloadFile(item) {
  return new Promise((resolve) => {
    const dest = path.join(targetDir, item.filename);
    const file = fs.createWriteStream(dest);
    const client = item.url.startsWith('https') ? https : http;

    client.get(item.url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    }, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        https.get(response.headers.location, {
          headers: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
          }
        }, (res2) => {
          res2.pipe(file);
          file.on('finish', () => {
            file.close();
            console.log(`✅ Downloaded: ${item.filename}`);
            resolve(true);
          });
        });
        return;
      }
      
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`✅ Downloaded: ${item.filename}`);
        resolve(true);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      console.error(`❌ Failed ${item.filename}:`, err.message);
      resolve(false);
    });
  });
}

async function run() {
  console.log('Downloading company logos...');
  for (const item of LOGOS) {
    await downloadFile(item);
  }
  console.log('Done!');
}

run();
