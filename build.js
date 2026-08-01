const fs = require('fs');
const path = require('path');

const source = path.join(__dirname, 'index.html');
const outputDir = path.join(__dirname, 'dist');
const destination = path.join(outputDir, 'index.html');

if (!fs.existsSync(source)) {
  console.error('No se encontró index.html en la raíz del proyecto.');
  process.exit(1);
}

fs.mkdirSync(outputDir, { recursive: true });
fs.copyFileSync(source, destination);
console.log('Landing preparada en dist/index.html');
