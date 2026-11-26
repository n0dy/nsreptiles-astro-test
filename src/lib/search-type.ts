export type SearchType = 'zivotinje' | 'kompleti' | 'terarijumi' | 'akvarijumi' | 'oprema' | 'vodici' | 'strane';

// redosled je bitan: proizvodi pre vodiča (/terarijumi/ je vodič, /proizvodi/terarijumi/ proizvod)
const RULES: [RegExp, SearchType][] = [
  [/\/(proizvodi\/terarijumi|products\/terrariums)\//, 'terarijumi'],
  [/\/(proizvodi\/akvarijumi|products\/aquariums)\//, 'akvarijumi'],
  [/\/(proizvodi\/oprema|products\/equipment)\//, 'oprema'],
  [/\/(zivotinje|animals)\//, 'zivotinje'],
  [/\/(kompleti|starter-kits)\//, 'kompleti'],
  [/^\/(terarijumi|akvarijumi|akvaristika)\/|\/guides\/|\/(akvarijumi-za-pocetnike|hrana-za-gustere)\.html$/, 'vodici'],
];

/** Vrsta strane za filter u pretrazi, po putanji (npr. "/proizvodi/oprema/x.html" -> "oprema"). */
export function searchType(path: string): SearchType {
  return RULES.find(([re]) => re.test(path))?.[1] ?? 'strane';
}
