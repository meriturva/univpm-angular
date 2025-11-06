import { globSync, readFileSync, writeFileSync } from 'fs';

let newVersion = process.argv[2];

if (!newVersion) {
  console.log('Nessuna versione trovata come argomento');
  console.log('Uso la versione del package.json principale');
  const packageFile = readFileSync('package.json', 'utf-8');
  newVersion = JSON.parse(packageFile).version;
}

console.log(`Aggiornamento delle versioni a: ${newVersion}`);

// Utilizzare glob per leggere tutti i package.json nelle sottocartelle dentro a projects
const projectFiles = globSync('projects/**/package.json');

// Aggiornamento della versione di ogni project file trovato
for (const filePath of projectFiles) {
  try {
    const packageJson = JSON.parse(readFileSync(filePath, 'utf-8'));
    packageJson.version = newVersion;
    writeFileSync(filePath, JSON.stringify(packageJson, null, 2) + '\n');
    console.log(`Aggiornato: ${filePath} -> ${newVersion}`);
  } catch (error) {
    console.error(`Errore durante l'aggiornamento di ${filePath}:`, error);
    process.exit(1);
  }
}
