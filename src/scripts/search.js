import { loadPagefind, renderHit } from './search-core.js';

const MAX_RESULTS = 8;
const dlg = document.getElementById('searchDlg');
const openBtn = document.querySelector('.nav-search');

if (dlg && openBtn) {
  const input = dlg.querySelector('.search-input');
  const list = dlg.querySelector('.search-results');
  const status = dlg.querySelector('.search-status');
  const open = () => {
    dlg.showModal();
    input.focus();
    input.select();
    loadPagefind().catch(() => {});
  };

  const run = async () => {
    const q = input.value.trim();
    if (!q) {
      list.replaceChildren();
      status.textContent = '';
      return;
    }
    try {
      const pf = await loadPagefind();
      const res = await pf.debouncedSearch(q, {}, 180);
      if (!res) return; // stigao je noviji upit
      const data = await Promise.all(res.results.slice(0, MAX_RESULTS).map((r) => r.data()));
      if (q !== input.value.trim()) return;
      list.replaceChildren(...data.map(renderHit));
      status.textContent = data.length ? '' : `${dlg.dataset.empty} „${q}“`;
    } catch {
      list.replaceChildren();
      status.textContent = dlg.dataset.error;
    }
  };

  openBtn.addEventListener('click', open);
  input.addEventListener('input', run);
  dlg.querySelector('.search-close').addEventListener('click', () => dlg.close());
  // klik na zatamnjenu pozadinu zatvara
  dlg.addEventListener('click', (e) => {
    if (e.target === dlg) dlg.close();
  });

  dlg.addEventListener('keydown', (e) => {
    if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return;
    const items = [input, ...list.querySelectorAll('.search-hit')];
    const i = items.indexOf(document.activeElement);
    const next = items[(i + (e.key === 'ArrowDown' ? 1 : -1) + items.length) % items.length];
    if (next) {
      e.preventDefault();
      next.focus();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (dlg.open) return;
    const typing = /^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement?.tagName) || document.activeElement?.isContentEditable;
    if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || (e.key === '/' && !typing)) {
      e.preventDefault();
      open();
    }
  });
}
