import { loadPagefind, renderHit } from './search-core.js';

const PAGE_SIZE = 12;
const root = document.querySelector('.srp');

if (root) {
  const S = JSON.parse(root.dataset.strings);
  const plural = new Intl.PluralRules(root.dataset.lang);
  const input = root.querySelector('.srp-input');
  const filtersEl = root.querySelector('.srp-filters');
  const status = root.querySelector('.srp-status');
  const list = root.querySelector('.srp-results');
  const more = root.querySelector('.srp-more');

  const params = new URLSearchParams(location.search);
  const q = (params.get('q') || '').trim();
  let tip = params.get('tip') || '';
  let results = [];
  let shown = 0;

  const countText = (n) => `${n} ${S.count[plural.select(n)] ?? S.count.other}`;

  const showMore = async () => {
    more.disabled = true;
    const batch = await Promise.all(results.slice(shown, shown + PAGE_SIZE).map((r) => r.data()));
    list.append(...batch.map(renderHit));
    shown += batch.length;
    more.hidden = shown >= results.length;
    more.disabled = false;
  };

  const renderFilters = (counts) => {
    const total = Object.values(counts).reduce((a, b) => a + b, 0);
    const pill = (key, label, n) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'srp-pill';
      b.setAttribute('aria-pressed', String(tip === key));
      b.textContent = `${label} (${n})`;
      b.addEventListener('click', () => {
        tip = key;
        const url = new URL(location.href);
        if (key) url.searchParams.set('tip', key);
        else url.searchParams.delete('tip');
        history.replaceState(null, '', url);
        search();
      });
      return b;
    };
    const pills = Object.keys(S.types)
      .filter((k) => counts[k])
      .map((k) => pill(k, S.types[k], counts[k]));
    filtersEl.replaceChildren(...(pills.length > 1 ? [pill('', S.all, total), ...pills] : []));
  };

  const search = async () => {
    try {
      const pf = await loadPagefind();
      await pf.filters(); // bez ovoga search() ne vraća broj rezultata po filteru
      const res = await pf.search(q, tip ? { filters: { tip } } : {});
      results = res.results;
      shown = 0;
      list.replaceChildren();
      renderFilters(res.totalFilters?.tip ?? {});
      status.textContent = results.length ? countText(results.length) : `${S.empty} „${q}“`;
      if (results.length) await showMore();
      else more.hidden = true;
    } catch {
      status.textContent = S.error;
    }
  };

  more.addEventListener('click', showMore);
  input.value = q;
  if (q) search();
  else input.focus();
}
