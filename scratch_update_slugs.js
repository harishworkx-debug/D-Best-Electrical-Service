import fs from 'fs';
import path from 'path';

const SRC_DIR = './src';
const LOCATION_SUFFIX = '-in-college-park-ga';

// Old slugs to new slugs mapping
const oldSlugs = [
  'electrical-installation',
  'electrical-repairs-troubleshooting',
  'electrical-wiring-rewiring',
  'electrical-panel-services',
  'circuit-breaker-services',
  'outlet-switch-installation',
  'indoor-lighting-installation',
  'outdoor-lighting-installation',
  'ceiling-fan-installation',
  'electrical-safety-inspections'
];

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let original = content;

  oldSlugs.forEach(slug => {
    // Replace exact URL matches like "/electrical-installation"
    const regex1 = new RegExp(`['"\`]/(${slug})['"\`]`, 'g');
    content = content.replace(regex1, (match, p1) => match.replace(p1, p1 + LOCATION_SUFFIX));
    
    // Replace exact slug string matches like 'electrical-installation'
    const regex2 = new RegExp(`['"\`](${slug})['"\`]`, 'g');
    content = content.replace(regex2, (match, p1) => match.replace(p1, p1 + LOCATION_SUFFIX));
  });

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Updated ${filePath}`);
  }
}

function traverseDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      traverseDir(fullPath);
    } else if (fullPath.endsWith('.ts') || fullPath.endsWith('.tsx')) {
      replaceInFile(fullPath);
    }
  }
}

traverseDir(SRC_DIR);
console.log('Done replacing slugs!');
