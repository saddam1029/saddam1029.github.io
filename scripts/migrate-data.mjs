import fs from 'fs';

const src = fs.readFileSync('_legacy/script.js', 'utf8');

function extract(name) {
  const start = src.indexOf(`const ${name} =`);
  if (start < 0) throw new Error(`missing ${name}`);
  let i = src.indexOf('=', start) + 1;
  while (/\s/.test(src[i])) i++;
  const open = src[i];
  const close = open === '[' ? ']' : '}';
  let depth = 0;
  for (let j = i; j < src.length; j++) {
    const c = src[j];
    if (c === open) depth++;
    else if (c === close) {
      depth--;
      if (depth === 0) return src.slice(i, j + 1);
    }
  }
  throw new Error(`unclosed ${name}`);
}

const projectsLiteral = extract('PROJECTS');
const certsLiteral = extract('CERTIFICATIONS');

// Evaluate as JS object literals (trusted local source)
const PROJECTS = eval(`(${projectsLiteral})`);
const CERTIFICATIONS = eval(`(${certsLiteral})`);

const projectsTs = `import type { Project } from './types';

export const PROJECTS: Project[] = ${JSON.stringify(PROJECTS, null, 2)};

export function getProject(id: string) {
  return PROJECTS.find((p) => p.id === id);
}

export function getAllProjectIds() {
  return PROJECTS.map((p) => p.id);
}
`;

const certsTs = `import type { Certification } from './types';

export const CERTIFICATIONS: Certification[] = ${JSON.stringify(CERTIFICATIONS, null, 2)};
`;

fs.writeFileSync('data/projects.ts', projectsTs);
fs.writeFileSync('data/certifications.ts', certsTs);
console.log(`Migrated ${PROJECTS.length} projects and ${CERTIFICATIONS.length} certifications`);
