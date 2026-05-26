/* ═══════════════════════════════════════════
   KARYN HAIR — APP LOGIC
   ═══════════════════════════════════════════ */

// Prevent browser scroll restoration
history.scrollRestoration = 'manual';

const WA = "243812142188";

// Color swatch dots — must match the color names used in products.js
const DOTS = {
  "Natural Black":  "#111111",
  "Dark Brown":     "#3b1f0e",
  "Medium Brown":   "#8B5E3C",
  "Blonde":         "#e8c97c",
  "Burgundy":       "#6e1425"
};

let cart = [];
let activeColor = "All";
const selectedSizes = {}; // { productId: "22 inch" }

/* ═══ CUSTOM CURSOR ═══ */
(function initCursor() {
  const dot  = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  if (!dot || !ring) return;
  let rx = 0, ry = 0, mx = 0, my = 0;
  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top  = my + 'px';
  });
  (function lerp() {
    rx += (mx - rx) * 0.14;
    ry += (my - ry) * 0.14;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(lerp);
  })();
  document.querySelectorAll('a,button,.pcard,.ccard,.feat,.brand,.mob-btn').forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });
})();

/* ═══ NAV SCROLL ═══ */
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  nav.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

/* ═══ TYPEWRITER ═══ */
const phrases = [
  "Premium 13×4 Lace Front Wigs",
  "180% Density — Bone Straight",
  "5 Colors · 5 Lengths",
  "Order via WhatsApp · Pay on Delivery"
];
let phraseIdx = 0, charIdx = 0, deleting = false;

function typewriter() {
  const el = document.getElementById('tw');
  if (!el) return;
  const current = phrases[phraseIdx];
  if (!deleting) {
    el.textContent = current.slice(0, ++charIdx);
    if (charIdx === current.length) {
      deleting = true;
      setTimeout(typewriter, 2200);
      return;
    }
  } else {
    el.textContent = current.slice(0, --charIdx);
    if (charIdx === 0) {
      deleting = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
    }
  }
  setTimeout(typewriter, deleting ? 42 : 72);
}
setTimeout(typewriter, 1000);

/* ═══ MARQUEE ═══ */
(function buildMarquee() {
  const items = [
    'Free Shipping','Premium Quality','Cash on Delivery',
    'Order via WhatsApp','13×4 Lace Front','180% Density',
    'Bone Straight','5 Colors','Karyn Hair',
    'Free Shipping','Premium Quality','Cash on Delivery',
    'Order via WhatsApp','13×4 Lace Front','180% Density',
    'Bone Straight','5 Colors','Karyn Hair'
  ];
  const mq = document.getElementById('mq');
  if (!mq) return;
  items.forEach((t, i) => {
    const s = document.createElement('span');
    s.textContent = t;
    if (i % 3 === 2) s.classList.add('gold');
    mq.appendChild(s);
    const sep = document.createElement('span');
    sep.textContent = '·';
    sep.className = 'marq-sep';
    mq.appendChild(sep);
  });
})();

/* ═══ NAVIGATION ═══ */
function go(pg) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('on'));
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('on'));
  document.querySelectorAll('.mob-btn').forEach(b => b.classList.remove('on'));
  const target = document.getElementById('pg-' + pg);
  if (!target) return;
  target.classList.add('on');
  const lnk = document.getElementById('lnk-' + pg);
  if (lnk) lnk.classList.add('on');
  const mb = document.getElementById('mnav-' + pg);
  if (mb) mb.classList.add('on');
  window.scrollTo({ top: 0, behavior: 'instant' });
  if (pg === 'products') renderGrid();
}

/* ═══ FILTERS ═══ */
function buildFilters() {
  if (typeof PRODUCTS === 'undefined') return;
  const colors = ['All', ...new Set(PRODUCTS.map(p => p.color))];
  const el = document.getElementById('filters');
  if (!el) return;
  el.innerHTML = '';
  colors.forEach(c => {
    const b = document.createElement('button');
    b.className = 'fb' + (c === 'All' ? ' on' : '');
    if (c !== 'All') {
      const d = document.createElement('span');
      d.className = 'cdot';
      d.style.background = DOTS[c] || 'var(--gold)';
      b.appendChild(d);
    }
    b.appendChild(document.createTextNode(c));
    b.onclick = () => {
      activeColor = c;
      document.querySelectorAll('.fb').forEach(x => x.classList.remove('on'));
      b.classList.add('on');
      const g = document.getElementById('grid');
      g.style.opacity = '0';
      setTimeout(() => {
        renderGrid();
        g.style.opacity = '1';
        g.style.transition = 'opacity 0.25s';
      }, 200);
    };
    el.appendChild(b);
  });
}

/* ═══ SIZE SELECTION ═══ */
function selectSize(productId, size, btn) {
  selectedSizes[productId] = size;
  const container = btn.closest('.size-btns');
  if (container) {
    container.querySelectorAll('.size-btn').forEach(b => b.classList.remove('selected'));
  }
  btn.classList.add('selected');
}

/* ═══ PRODUCT GRID ═══ */
function renderGrid() {
  if (typeof PRODUCTS === 'undefined') return;
  const g = document.getElementById('grid');
  if (!g) return;
  const list = activeColor === 'All'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.color === activeColor);
  g.innerHTML = '';

  list.forEach((product, idx) => {
    const card = document.createElement('div');
    card.className = 'pcard';
    const dotColor = DOTS[product.color] || 'var(--gold)';

    // Size buttons
    const sizeBtns = product.sizes.map(s => {
      const active = selectedSizes[product.id] === s.size ? ' selected' : '';
      const label  = s.size.replace(' inch', '"');
      return '<button class="size-btn' + active + '" ' +
             'onclick="selectSize(' + product.id + ',\'' + s.size + '\',this)">' +
             label + '</button>';
    }).join('');

    card.innerHTML =
      '<div class="pcard-img-wrap">' +
        '<img class="pcard-img" src="' + product.image + '" ' +
             'alt="' + product.name + ' — ' + product.color + '" loading="lazy"/>' +
      '</div>' +
      '<div class="pbody">' +
        '<p class="pcat">' +
          '<span class="cdot" style="background:' + dotColor + '"></span>' +
          product.color +
        '</p>' +
        '<h3 class="pname">' + product.name + '</h3>' +
        '<div class="size-selector">' +
          '<p class="size-label">Select Size</p>' +
          '<div class="size-btns">' + sizeBtns + '</div>' +
        '</div>' +
        '<div class="pfoot">' +
          '<p class="pprice">Price: <em class="price-soon">Coming Soon</em></p>' +
          '<button class="abtn" onclick="addC(' + product.id + ',this)">Add to Cart</button>' +
        '</div>' +
      '</div>';

    g.appendChild(card);

    // Staggered reveal
    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('revealed'), idx * 60);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05 });
    obs.observe(card);
  });
}

/* ═══ CART ═══ */
function addC(id, btn) {
  const product = PRODUCTS.find(x => x.id === id);
  if (!product) return;

  const size = selectedSizes[id];
  if (!size) {
    // Shake the size selector to prompt selection
    const card = btn.closest('.pcard');
    if (card) {
      const sel = card.querySelector('.size-selector');
      if (sel) {
        sel.classList.remove('size-required');
        void sel.offsetWidth; // reflow to restart animation
        sel.classList.add('size-required');
        setTimeout(() => sel.classList.remove('size-required'), 700);
      }
    }
    btn.textContent = 'Choose a size!';
    setTimeout(() => { btn.textContent = 'Add to Cart'; }, 1400);
    return;
  }

  const cartKey = id + '-' + size;
  const existing = cart.find(x => x.cartKey === cartKey);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({
      cartKey,
      id,
      name:  product.name,
      color: product.color,
      size,
      image: product.image,
      price: null,
      qty:   1
    });
  }

  updCart();
  btn.textContent = 'Added!';
  btn.classList.add('added');
  setTimeout(() => { btn.textContent = 'Add to Cart'; btn.classList.remove('added'); }, 1300);

  // Badge bounce
  const badge = document.getElementById('cnt');
  if (badge) {
    badge.classList.remove('bounce');
    void badge.offsetWidth;
    badge.classList.add('bounce');
    setTimeout(() => badge.classList.remove('bounce'), 500);
  }
}

function rmC(cartKey) {
  cart = cart.filter(x => x.cartKey !== cartKey);
  updCart();
}

function chQ(cartKey, delta) {
  const item = cart.find(x => x.cartKey === cartKey);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) rmC(cartKey);
  else updCart();
}

function updCart() {
  const count = cart.reduce((s, item) => s + item.qty, 0);
  const total = cart.reduce((s, item) => s + (Number(item.price) || 0) * item.qty, 0);

  // Desktop badge
  const cnt = document.getElementById('cnt');
  if (cnt) cnt.textContent = count;
  // Mobile badge
  const mobCnt = document.getElementById('mob-cnt');
  if (mobCnt) mobCnt.textContent = count > 0 ? '(' + count + ')' : '';
  // Total
  const tot = document.getElementById('tot');
  if (tot) tot.textContent = total > 0 ? '$' + total.toFixed(2) : '—';

  // Cart list
  const el = document.getElementById('clist');
  if (!el) return;
  if (!cart.length) {
    el.innerHTML = '<div class="cempty"><p>Your cart is empty</p><small>Browse the collection</small></div>';
    return;
  }
  el.innerHTML = cart.map(item =>
    '<div class="ci">' +
    '<img src="' + item.image + '" alt="' + item.name + '"/>' +
    '<div class="ci-inf">' +
      '<p class="ci-name">' + item.name + '</p>' +
      '<p class="ci-meta">' + item.color + ' &middot; ' + item.size + '</p>' +
      '<p class="ci-price"><em>Price: Coming Soon</em></p>' +
      '<div class="ci-ctrl">' +
        '<button class="qbtn" onclick="chQ(\'' + item.cartKey + '\',-1)">&#x2212;</button>' +
        '<span class="qn">' + item.qty + '</span>' +
        '<button class="qbtn" onclick="chQ(\'' + item.cartKey + '\',1)">&#x2B;</button>' +
        '<button class="rmbtn" onclick="rmC(\'' + item.cartKey + '\')">Remove</button>' +
      '</div>' +
    '</div></div>'
  ).join('');
}

function openCart() {
  document.getElementById('ov').classList.add('on');
  document.getElementById('cside').classList.add('on');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('ov').classList.remove('on');
  document.getElementById('cside').classList.remove('on');
  document.body.style.overflow = '';
}

function openModal() {
  if (!cart.length) { alert('Your cart is empty!'); return; }
  closeCart();
  document.getElementById('mbg').classList.add('on');
}

function closeModal() {
  document.getElementById('mbg').classList.remove('on');
}

function sendWA() {
  const name  = (document.getElementById('fname').value  || '').trim();
  const phone = (document.getElementById('fphone').value || '').trim();
  if (!name) { document.getElementById('fname').focus(); return; }

  const lines = cart.map(item =>
    '  - ' + item.name + ' (' + item.color + ', ' + item.size + ') x' + item.qty
  ).join('\n');

  const msg =
    'Hello Karyn Hair! 👋\n\n' +
    '*Name:* ' + name + (phone ? '\n*Phone:* ' + phone : '') +
    '\n\n*Order:*\n' + lines +
    '\n\n_(Prices to be confirmed by Karyn Hair)_' +
    '\n\nPayment: Cash on delivery. Please confirm! 🙏';

  const url = 'https://wa.me/' + WA + '?text=' + encodeURIComponent(msg);
  window.open(url, '_blank');
  closeModal();
  cart = [];
  updCart();
  document.getElementById('fname').value  = '';
  document.getElementById('fphone').value = '';
}

/* ═══ INIT ═══ */
(function init() {
  window.scrollTo(0, 0);
  go('home');
  buildFilters();
})();
