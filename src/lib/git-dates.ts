import { execSync } from 'node:child_process';
import { existsSync } from 'node:fs';

// Datum poslednjeg commit-a koji je dirao izvor sadrzaja (proizvod ili vrsta): fajl -> YYYY-MM-DD.
// Prazno kad je clone plitak (datumi bi bili lazni) ili git nije dostupan.
let cache: Map<string, string> | undefined;
export function gitDates(): Map<string, string> {
  if (cache) return cache;
  const dates = (cache = new Map<string, string>());
  if (!existsSync('.git') || existsSync('.git/shallow')) return dates;
  try {
    const log = execSync('git log --name-only --format=@%cI -- src/content/products src/content/species', { encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 });
    let date = '';
    for (const line of log.split('\n')) {
      if (line.startsWith('@')) date = line.slice(1, 11);
      else if (line && !dates.has(line)) dates.set(line, date);
    }
  } catch (e) {
    console.warn('[git-dates] git log nije uspeo, lastmod se preskace:', (e as Error).message);
  }
  return dates;
}
