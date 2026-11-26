// Pagefind indeks nastaje posle `pnpm build`; za `astro dev` ga kopira `pnpm search:dev` u public/pagefind.
let loading;

// jedan zajednički promise, da otvaranje i prvi upit ne učitaju Pagefind dvaput
export const loadPagefind = () => {
  loading ??= (async () => {
    // pun URL, jer Vite u dev-u dodaje ?import na putanje koje počinju sa / i server vraća 500
    const url = new URL('/pagefind/pagefind.js', location.origin).href;
    const pf = await import(/* @vite-ignore */ url);
    await pf.options({ excerptLength: 18 });
    await pf.init();
    return pf;
  })().catch((e) => {
    loading = undefined;
    throw e;
  });
  return loading;
};

/** Jedan rezultat (data() iz Pagefind-a) kao <li><a class="search-hit">. */
export const renderHit = (d) => {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.href = d.url;
  a.className = 'search-hit';
  if (d.meta.image) {
    const img = document.createElement('img');
    img.src = d.meta.image;
    img.alt = '';
    img.loading = 'lazy';
    img.width = 64;
    img.height = 64;
    img.onerror = () => img.remove();
    a.append(img);
  }
  const body = document.createElement('span');
  const title = document.createElement('b');
  title.textContent = d.meta.title || d.url;
  const ex = document.createElement('span');
  ex.className = 'search-ex';
  // excerpt je iz našeg indeksa: Pagefind escapuje tekst i dodaje samo <mark>
  ex.innerHTML = d.excerpt;
  body.append(title, ex);
  a.append(body);
  if (d.meta.price) {
    const price = document.createElement('span');
    price.className = 'search-price';
    price.textContent = d.meta.price;
    a.append(price);
  }
  li.append(a);
  return li;
};
