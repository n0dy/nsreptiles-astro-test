const escape = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// Naslov u dve boje kao na pocetnoj: poslednja rec u <b> (zelena), zajedno sa kratkim
// predlogom/brojem ispred nje ("po meri", "3D pozadinom"). Tekst koji vec ima <b> ostaje kakav jeste.
export function twoTone(title: string): string {
  if (title.includes('<b>')) return title;
  const words = title.trim().split(/\s+/);
  if (words.length < 2) return escape(title);
  const tail = words.length > 2 && words[words.length - 2].length <= 2 ? 2 : 1;
  const head = words.slice(0, -tail).join(' ');
  return `${escape(head)} <b>${escape(words.slice(-tail).join(' '))}</b>`;
}
