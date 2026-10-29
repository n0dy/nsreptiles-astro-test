// ===== THEME TOGGLE =====
(function () {
  const btn = document.getElementById('themeToggle');
  if (!btn) return;
  btn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem(
      'theme',
      document.body.classList.contains('dark') ? 'dark' : 'light'
    );
  });
})();

// sistemsko podesavanje "smanji animacije": bez auto-slajdera i brojanja
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

// jezik dropdown
const langDd = document.getElementById('langDd');
if (langDd) {
  langDd.querySelector('.lang-trigger').addEventListener('click', (e) => {
    e.stopPropagation();
    e.currentTarget.setAttribute('aria-expanded', langDd.classList.toggle('open'));
  });
  document.addEventListener('click', () => {
    langDd.classList.remove('open');
    langDd.querySelector('.lang-trigger').setAttribute('aria-expanded', false);
  });
}

// mobilni meni
const burger = document.querySelector('.burger'),
  mm = document.getElementById('mobileMenu');
burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  burger.setAttribute('aria-expanded', mm.classList.toggle('open'));
});
mm.querySelectorAll('.m-has-sub > .m-toggle').forEach((t) =>
  t.addEventListener('click', (e) => {
    t.setAttribute('aria-expanded', t.parentElement.classList.toggle('open'));
  })
);
mm.querySelectorAll('a').forEach((a) =>
  a.addEventListener('click', () => {
    burger.classList.remove('open');
    burger.setAttribute('aria-expanded', false);
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
document.querySelectorAll('.faq-q').forEach((q) => {
  q.setAttribute('aria-expanded', false);
  q.addEventListener('click', () => {
    const item = q.parentElement,
      open = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach((i) => {
      i.classList.remove('open');
      i.querySelector('.faq-a').style.maxHeight = null;
      i.querySelector('.faq-q')?.setAttribute('aria-expanded', false);
    });
    if (!open) {
      item.classList.add('open');
      q.setAttribute('aria-expanded', true);
      const a = item.querySelector('.faq-a');
      a.style.maxHeight = a.scrollHeight + 'px';
    }
  });
});

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
    if (!reduceMotion) timer = setInterval(() => go(idx + 1), 5500);
  }
  const slider = track.closest('.testi-slider');
  slider.addEventListener('mouseenter', () => clearInterval(timer));
  slider.addEventListener('mouseleave', restart);
  slider.addEventListener('focusin', () => clearInterval(timer));
  slider.addEventListener('focusout', restart);
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

// count up: HTML vec ima pravi broj (za Google i bez JS), animacija krece od 0 tek kad se vidi
const fmtCount = (n, t) => n.toLocaleString(document.documentElement.lang) + (t >= 300 ? '+' : '');
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
          el.textContent = fmtCount(n, t);
        }, 24);
        cio.unobserve(el);
      }
    }),
  { threshold: 0.5 }
);
if (!reduceMotion)
  document.querySelectorAll('.stat b').forEach((el) => {
    // animira se samo broj ispod ekrana; vidljiv pri ucitavanju ostaje kakav jeste
    if (el.getBoundingClientRect().top <= innerHeight) return;
    el.textContent = fmtCount(0, +el.dataset.count);
    cio.observe(el);
  });

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

// nav postaje pun kad hero izadje iz ekrana
(function () {
  const hero = document.querySelector('.hero, .page-head');
  const nav = document.querySelector('.nav');
  if (!hero || !nav) return;
  new IntersectionObserver(([e]) => nav.classList.toggle('nav-solid', !e.isIntersecting), {
    rootMargin: '-80px 0px 0px 0px',
  }).observe(hero);
})();

// hero slider
(function () {
  const slides = document.querySelectorAll('#heroBg .slide');
  const dots = document.querySelectorAll('.hero-dots button');
  if (!slides.length) return;
  const loadRest = () => document.getElementById('heroBg').classList.add('ready');
  if (document.readyState === 'complete') loadRest();
  else addEventListener('load', loadRest);
  let idx = 0,
    timer;
  function show(n) {
    idx = (n + slides.length) % slides.length;
    slides.forEach((s, i) => s.classList.toggle('active', i === idx));
    dots.forEach((d, i) => {
      d.classList.toggle('active', i === idx);
      d.classList.toggle('done', i < idx);
      d.setAttribute('aria-current', i === idx ? 'true' : 'false');
    });
  }
  function restart() {
    clearInterval(timer);
    if (!reduceMotion) timer = setInterval(() => show(idx + 1), 5000);
  }
  const go = (n) => {
    show(n);
    restart();
  };
  dots.forEach((d, i) => d.addEventListener('click', () => go(i)));
  document.querySelectorAll('.hero-arrow').forEach((b) => b.addEventListener('click', () => go(idx + Number(b.dataset.dir))));
  show(0);
  restart();
})();
