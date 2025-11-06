import { globSync, readFileSync, writeFileSync } from 'fs';
import { PackageJson } from './package-json';



console.log(`Aggiornamento delle dipendenze`);

const mainPackageFile = JSON.parse(readFileSync('package.json', 'utf-8')) as PackageJson;
const mainDependencies = Object.assign({}, mainPackageFile.dependencies, mainPackageFile.devDependencies, mainPackageFile.peerDependencies);

// Utilizzare glob per leggere tutti i package.json nelle sottocartelle dentro a projects
const projectFiles = globSync('projects/**/package.json');

// Aggiornamento della versione di ogni project file trovato
for (const filePath of projectFiles) {
  try {
    const packageFile = JSON.parse(readFileSync(filePath, 'utf-8')) as PackageJson;
    let modified = false;
    if (packageFile.peerDependencies) {
      Object.keys(packageFile.peerDependencies).forEach(dep => {
        if (mainDependencies[dep] && mainDependencies[dep] !== packageFile.peerDependencies![dep]) {
          console.info(`Replacing ${dep} peer dependency with version ${mainDependencies[dep]} in ${packageFile.name}`);
          packageFile.peerDependencies![dep] = mainDependencies[dep];
          modified = true;
        }
      });
    }

    if (packageFile.dependencies) {
      Object.keys(packageFile.dependencies).forEach(dep => {
        if (mainDependencies[dep] && mainDependencies[dep] !== packageFile.dependencies![dep]) {
          console.info(`Aggiornata dipendenza ${dep} con versione ${mainDependencies[dep]} in ${packageFile.name}`);
          packageFile.dependencies![dep] = mainDependencies[dep];
          modified = true;
        }
      });
    }

    if (modified) {
      writeFileSync(filePath, JSON.stringify(packageFile, null, 2) + '\n');
      console.log(`Aggiornato: ${filePath}`);
    }
  } catch (error) {
    console.error(`Errore durante l'aggiornamento di ${filePath}:`, error);
    process.exit(1);
  }
}
