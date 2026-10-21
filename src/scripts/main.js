// ===== THEME TOGGLE =====
(function () {
  const btn = document.getElementById('themeToggle');
  if (!btn) return;
  if (localStorage.getItem('theme') === 'dark')
    document.body.classList.add('dark');
  btn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem(
      'theme',
      document.body.classList.contains('dark') ? 'dark' : 'light'
    );
  });
})();

// ===== KORPA =====
(function () {
  const overlay = document.getElementById('cartOverlay');
  const panel = document.getElementById('cartPanel');
  const itemsWrap = document.getElementById('cartItems');
  const foot = document.getElementById('cartFoot');
  const badge = document.getElementById('cartBadge');
  const countEl = document.getElementById('cartCount');
  const totalEl = document.getElementById('cartTotal');
  const openBtn = document.getElementById('cartOpen');
  const closeBtn = document.getElementById('cartClose');
  const continueBtn = document.getElementById('cartContinue');
  // strane bez korpa-sidebar markupa (npr. korpa.html) preskacu korpa logiku
  if (!panel || !itemsWrap || !overlay) return;
  let items = []; // {name, price, img, qty}
  const t = {
    sr: { empty: 'Vaša korpa je prazna.', remove: 'Izbaci' },
    en: { empty: 'Your cart is empty.', remove: 'Remove' },
    ru: { empty: 'Ваша корзина пуста.', remove: 'Удалить' },
  }[document.documentElement.lang] || { empty: 'Vaša korpa je prazna.', remove: 'Izbaci' };

  const fmt = (n) => n.toLocaleString('sr-RS') + ' din';

  function open() {
    overlay.classList.add('open');
    panel.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function close() {
    overlay.classList.remove('open');
    panel.classList.remove('open');
    document.body.style.overflow = '';
  }

  function add(name, price, img) {
    const ex = items.find((i) => i.name === name);
    if (ex) ex.qty++;
    else items.push({ name, price, img, qty: 1 });
    render();
    open();
  }
  function changeQty(name, d) {
    const it = items.find((i) => i.name === name);
    if (!it) return;
    it.qty += d;
    if (it.qty <= 0) items = items.filter((i) => i.name !== name);
    render();
  }
  function remove(name) {
    items = items.filter((i) => i.name !== name);
    render();
  }

  function render() {
    const count = items.reduce((s, i) => s + i.qty, 0);
    const total = items.reduce((s, i) => s + i.price * i.qty, 0);
    badge.textContent = count;
    badge.classList.toggle('empty', count <= 0);
    countEl.textContent = count;
    totalEl.textContent = fmt(total);
    if (!items.length) {
      foot.style.display = 'none';
      itemsWrap.innerHTML =
        '<div class="cart-empty"><svg viewBox="0 0 24 24" width="54" height="54" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 01-8 0"/></svg><p>' + t.empty + '</p></div>';
      return;
    }
    foot.style.display = 'block';
    itemsWrap.innerHTML = items
      .map(
        (i) => `
      <div class="cart-item">
        <div class="cart-item-img"><img src="${i.img}" alt="${i.name}"></div>
        <div class="cart-item-main">
          <div class="cart-item-name">${i.name}</div>
          <div class="cart-item-price">${fmt(i.price)}</div>
          <div class="cart-qty">
            <button data-act="dec" data-name="${i.name}">−</button>
            <span>${i.qty}</span>
            <button data-act="inc" data-name="${i.name}">+</button>
          </div>
        </div>
        <button class="cart-item-remove" data-act="rm" data-name="${i.name}">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m2 0v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6"/></svg>
          ${t.remove}
        </button>
      </div>`
      )
      .join('');
  }

  // dogadjaji unutar korpe
  itemsWrap.addEventListener('click', (e) => {
    const b = e.target.closest('[data-act]');
    if (!b) return;
    const name = b.dataset.name;
    if (b.dataset.act === 'inc') changeQty(name, 1);
    else if (b.dataset.act === 'dec') changeQty(name, -1);
    else if (b.dataset.act === 'rm') remove(name);
  });

  // dugmad "U korpu"
  document.querySelectorAll('.add-cart').forEach((b) =>
    b.addEventListener('click', (e) => {
      e.preventDefault();
      add(b.dataset.name, +b.dataset.price, b.dataset.img);
    })
  );

  if (openBtn) openBtn.addEventListener('click', open);
  if (closeBtn) closeBtn.addEventListener('click', close);
  if (continueBtn) continueBtn.addEventListener('click', close);
  overlay.addEventListener('click', close);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });

  render();
})();

// jezik dropdown
const langDd = document.getElementById('langDd');
if (langDd) {
  langDd.querySelector('.lang-trigger').addEventListener('click', (e) => {
    e.stopPropagation();
    langDd.classList.toggle('open');
  });
  document.addEventListener('click', () => langDd.classList.remove('open'));
}

// mobilni meni
const burger = document.querySelector('.burger'),
  mm = document.getElementById('mobileMenu');
burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  mm.classList.toggle('open');
});
mm.querySelectorAll('.m-has-sub > .m-toggle').forEach((t) =>
  t.addEventListener('click', (e) => {
    e.preventDefault();
    t.parentElement.classList.toggle('open');
  })
);
mm.querySelectorAll('a').forEach((a) =>
  a.addEventListener('click', () => {
    burger.classList.remove('open');
    mm.classList.remove('open');
  })
);

// karuseli
const tracks = {
  rep: document.getElementById('repTrack'),
  help: document.getElementById('helpTrack'),
};
document.querySelectorAll('.car-btn').forEach((b) =>
  b.addEventListener('click', () => {
    const t = tracks[b.dataset.car];
    if (!t) return;
    const card = t.querySelector(':scope > *');
    const w = card ? card.getBoundingClientRect().width : 300;
    t.scrollBy({ left: w * b.dataset.dir * 1.2, behavior: 'smooth' });
  })
);

// galerija filteri
document.querySelectorAll('.gal-filter').forEach((f) =>
  f.addEventListener('click', () => {
    document
      .querySelectorAll('.gal-filter')
      .forEach((x) => x.classList.remove('active'));
    f.classList.add('active');
    const cat = f.dataset.filter;
    document.querySelectorAll('.gal-item').forEach((it) => {
      it.classList.toggle('hide', cat !== 'all' && it.dataset.cat !== cat);
    });
  })
);

// lightbox
(function () {
  const lb = document.getElementById('lb');
  if (!lb) return;
  const items = [...document.querySelectorAll('.gal-item')];
  const lbImg = document.getElementById('lbImg'),
    lbCat = document.getElementById('lbCat'),
    lbName = document.getElementById('lbName'),
    lbCount = document.getElementById('lbCount');
  let visible = [],
    cur = 0;

  function buildVisible() {
    visible = items.filter((it) => !it.classList.contains('hide'));
  }
  function show(i) {
    buildVisible();
    if (!visible.length) return;
    cur = (i + visible.length) % visible.length;
    const it = visible[cur];
    const img = it.querySelector('img');
    lbImg.src = img.src;
    lbImg.alt = img.alt;
    lbCat.textContent = it.querySelector('.cap small').textContent;
    lbName.textContent = it.querySelector('.cap b').textContent;
    lbCount.textContent = cur + 1 + ' / ' + visible.length;
  }
  function openLb(it) {
    buildVisible();
    show(visible.indexOf(it));
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeLb() {
    lb.classList.remove('open');
    document.body.style.overflow = '';
  }

  items.forEach((it) => it.addEventListener('click', () => openLb(it)));
  document.getElementById('lbClose').addEventListener('click', closeLb);
  document.getElementById('lbPrev').addEventListener('click', (e) => {
    e.stopPropagation();
    show(cur - 1);
  });
  document.getElementById('lbNext').addEventListener('click', (e) => {
    e.stopPropagation();
    show(cur + 1);
  });
  lb.addEventListener('click', (e) => {
    if (e.target === lb) closeLb();
  });
  document.addEventListener('keydown', (e) => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') closeLb();
    else if (e.key === 'ArrowLeft') show(cur - 1);
    else if (e.key === 'ArrowRight') show(cur + 1);
  });
  let tx = 0;
  lb.addEventListener('touchstart', (e) => (tx = e.changedTouches[0].clientX), {
    passive: true,
  });
  lb.addEventListener(
    'touchend',
    (e) => {
      const d = e.changedTouches[0].clientX - tx;
      if (Math.abs(d) > 50) show(d > 0 ? cur - 1 : cur + 1);
    },
    { passive: true }
  );
})();

// FAQ akordeon
document.querySelectorAll('.faq-q').forEach((q) =>
  q.addEventListener('click', () => {
    const item = q.parentElement,
      open = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach((i) => {
      i.classList.remove('open');
      i.querySelector('.faq-a').style.maxHeight = null;
    });
    if (!open) {
      item.classList.add('open');
      const a = item.querySelector('.faq-a');
      a.style.maxHeight = a.scrollHeight + 'px';
    }
  })
);

// testimonial slider
(function () {
  const track = document.getElementById('testiTrack');
  if (!track) return;
  const slides = track.children.length;
  const dotsWrap = document.getElementById('testiDots');
  let idx = 0,
    timer;
  for (let i = 0; i < slides; i++) {
    const d = document.createElement('span');
    if (i === 0) d.classList.add('active');
    d.addEventListener('click', () => {
      idx = i;
      render();
      restart();
    });
    dotsWrap.appendChild(d);
  }
  const dots = dotsWrap.children;
  function render() {
    track.style.transform = 'translateX(-' + idx * 100 + '%)';
    [...dots].forEach((d, i) => d.classList.toggle('active', i === idx));
  }
  function go(n) {
    idx = (n + slides) % slides;
    render();
  }
  function restart() {
    clearInterval(timer);
    timer = setInterval(() => go(idx + 1), 5500);
  }
  document.querySelector('.testi-arrow.next').addEventListener('click', () => {
    go(idx + 1);
    restart();
  });
  document.querySelector('.testi-arrow.prev').addEventListener('click', () => {
    go(idx - 1);
    restart();
  });
  restart();
})();

// reveal
const io = new IntersectionObserver(
  (es) =>
    es.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    }),
  { threshold: 0.12 }
);
document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

// count up
const cio = new IntersectionObserver(
  (es) =>
    es.forEach((e) => {
      if (e.isIntersecting) {
        const el = e.target,
          t = +el.dataset.count;
        let n = 0,
          s = Math.ceil(t / 55);
        const iv = setInterval(() => {
          n += s;
          if (n >= t) {
            n = t;
            clearInterval(iv);
          }
          el.textContent = n.toLocaleString('sr-RS') + (t >= 300 ? '+' : '');
        }, 24);
        cio.unobserve(el);
      }
    }),
  { threshold: 0.5 }
);
document
  .querySelectorAll('.stat b, .about-stat b')
  .forEach((el) => cio.observe(el));

// ===== HUBSPOT FORME =====
async function hsSubmit(formGuid, fields) {
  const hutk = document.cookie.match(/hubspotutk=([^;]*)/);
  const res = await fetch(
    'https://api.hsforms.com/submissions/v3/integration/submit/147517248/' +
      formGuid,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fields,
        context: {
          hutk: hutk ? hutk[1] : undefined,
          pageUri: window.location.href,
          pageName: document.title,
        },
      }),
    }
  );
  return res.ok;
}
window.hsSubmit = hsSubmit;

// newsletter (footer)
(function () {
  const texts = {
    sr: {
      invalid: 'Unesite ispravnu e-mail adresu.',
      error: 'Došlo je do greške. Molimo pokušajte ponovo.',
      sending: 'Slanje...',
      done: 'Uspešno ste se prijavili. Hvala!',
    },
    en: {
      invalid: 'Please enter a valid email address.',
      error: 'Something went wrong. Please try again.',
      sending: 'Sending...',
      done: 'You have subscribed successfully. Thank you!',
    },
    ru: {
      invalid: 'Введите корректный адрес электронной почты.',
      error: 'Произошла ошибка. Пожалуйста, попробуйте снова.',
      sending: 'Отправка...',
      done: 'Вы успешно подписались. Спасибо!',
    },
  };
  const t = texts[document.documentElement.lang] || texts.sr;

  document.querySelectorAll('.news-form').forEach((formEl) => {
    const input = formEl.querySelector('input[type="email"]');
    const btn = formEl.querySelector('button');
    if (!input || !btn) return;

    async function submit() {
      const email = input.value.trim();
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
        alert(t.invalid);
        input.focus();
        return;
      }
      btn.disabled = true;
      const origText = btn.textContent;
      btn.textContent = t.sending;
      let ok = false;
      try {
        ok = await hsSubmit('8476e38d-9972-4d26-91f4-7c8638f7f601', [
          { name: 'email', value: email },
          { name: 'newsletter', value: 'Yes' },
        ]);
      } catch (e) {}
      if (ok) {
        formEl.innerHTML = '<p class="news-done">' + t.done + '</p>';
      } else {
        alert(t.error);
        btn.disabled = false;
        btn.textContent = origText;
      }
    }

    btn.addEventListener('click', submit);
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') submit();
    });
  });
})();

// hero slider
(function () {
  const slides = document.querySelectorAll('#heroBg .slide');
  const dots = document.querySelectorAll('.hero-dots span');
  if (!slides.length) return;
  const loadRest = () => document.getElementById('heroBg').classList.add('ready');
  if (document.readyState === 'complete') loadRest();
  else addEventListener('load', loadRest);
  let idx = 0,
    timer;
  function show(n) {
    idx = (n + slides.length) % slides.length;
    slides.forEach((s, i) => s.classList.toggle('active', i === idx));
    dots.forEach((d, i) => d.classList.toggle('active', i === idx));
  }
  function restart() {
    clearInterval(timer);
    timer = setInterval(() => show(idx + 1), 5000);
  }
  dots.forEach((d, i) =>
    d.addEventListener('click', () => {
      show(i);
      restart();
    })
  );
  restart();
})();
