/* ═══════════════════════════════════════════
   KARYN HAIR — APP LOGIC
   ═══════════════════════════════════════════ */

history.scrollRestoration = 'manual';

const WA = "243812142188";

const DOTS = {
  "Natural Black":  "#111111",
  "Dark Brown":     "#3b1f0e",
  "Medium Brown":   "#8B5E3C",
  "Blonde":         "#e8c97c",
  "Burgundy":       "#6e1425"
};

const COLOR_KEYS = {
  "Natural Black":  "color_natural_black",
  "Dark Brown":     "color_dark_brown",
  "Medium Brown":   "color_medium_brown",
  "Blonde":         "color_blonde",
  "Burgundy":       "color_burgundy"
};

/* ═══ TRANSLATIONS ═══ */
const T = {
  en: {
    nav_home:    'Home',
    nav_products:'Products',
    nav_contact: 'Contact',
    nav_cart:    'Cart',

    hero_eyebrow:  'Established in Luxury',
    hero_tagline:  'Premium Lace Wigs — Delivered to You',
    hero_cta_shop: 'Shop Collection',
    hero_cta_wa:   'WhatsApp Us',
    hero_scroll:   'Scroll',

    tw_0: 'Premium 13×4 Lace Front Wigs',
    tw_1: '180% Density — Bone Straight',
    tw_2: '5 Colors · 5 Lengths',
    tw_3: 'Order via WhatsApp · Pay on Delivery',

    marq_items: ['Free Shipping','Premium Quality','Cash on Delivery','Order via WhatsApp','13×4 Lace Front','180% Density','Bone Straight','5 Colors','Karyn Hair'],

    feat_1_title: 'Nationwide Delivery',
    feat_1_desc:  'Fast & secure delivery across the country. Arrives beautifully packaged.',
    feat_2_title: 'Premium Quality',
    feat_2_desc:  '13×4 lace front, 180% density, 100% human hair. Undetectable hairline.',
    feat_3_title: 'Pay on Delivery',
    feat_3_desc:  'No upfront payment required. Pay cash when your wig arrives at your door.',
    feat_4_title: 'WhatsApp Orders',
    feat_4_desc:  'Order directly on WhatsApp. Quick responses, personal service, easy process.',

    products_title_1:  'The',
    products_title_em: 'Collection',
    products_subtitle: 'Hand-selected premium lace wigs — 5 shades, 5 lengths, one standard of excellence.',
    filter_label: 'Filter by Color',
    filter_all:   'All',
    size_label:   'Select Size',
    add_to_cart:  'Add to Cart',
    add_added:    'Added!',
    choose_size:  'Choose a size!',
    price_from:   'From',
    price_soon:   'Coming Soon',
    photos_count: ' photos',
    remove:       'Remove',

    color_natural_black: 'Natural Black',
    color_dark_brown:    'Dark Brown',
    color_medium_brown:  'Medium Brown',
    color_blonde:        'Blonde',
    color_burgundy:      'Burgundy',

    product_name: '13×4 Lace Wig Straight',

    contact_title_1:   'Get in',
    contact_title_em:  'Touch',
    contact_subtitle:  'We are here to help you find your perfect wig. Reach out via WhatsApp for the fastest response.',
    contact_wa_title:  'WhatsApp',
    contact_wa_desc:   'Order, ask questions or get advice directly on WhatsApp.',
    contact_web_title: 'Website',
    contact_web_desc:  'Browse our full collection online and explore all available styles and colors.',
    contact_web_link:  'View Collection',
    contact_del_title: 'Delivery',
    contact_del_desc:  'Nationwide cash on delivery. No payment required until your wig arrives.',
    contact_del_link:  'Ask about delivery',
    contact_wa_btn:    'Order via WhatsApp',

    cart_title:     'Your Cart',
    cart_empty:     'Your cart is empty',
    cart_browse:    'Browse the collection',
    cart_total:     'Total',
    cart_order_btn: 'Place Order via WhatsApp',

    mob_home:    'Home',
    mob_shop:    'Shop',
    mob_cart:    'Cart',
    mob_contact: 'Contact',

    modal_title:  'Complete Your Order',
    modal_desc:   'Enter your details and we will send your order via WhatsApp for confirmation.',
    modal_name:   'Your full name *',
    modal_phone:  'Phone number (optional)',
    modal_send:   'Send Order via WhatsApp',
    modal_cancel: 'Cancel',

    footer_copy: '© 2025 Karyn Hair. All rights reserved.',

    faq_eyebrow: 'Common Questions',
    faq_title:   'Frequently <em>Asked</em>',
    faq_items: [
      {
        q: 'What type of hair is used?',
        a: 'Our wigs are made with 100% real human hair — the highest quality available. The lace is HD (High Definition), making it virtually invisible against all skin tones for the most natural look possible.'
      },
      {
        q: 'How long does the wig last?',
        a: 'With proper care, our wigs can last 1 to 2 years or more. We recommend washing every 2–3 weeks, sleeping with a satin bonnet, and avoiding excessive heat to preserve the hair quality.'
      },
      {
        q: 'How do I install the wig?',
        a: 'The 13×4 lace front can be installed with or without glue. Lay the lace along your hairline, trim it to fit, and secure as preferred. The HD lace melts seamlessly for a glueless look. We recommend watching a tutorial for first-time installation.'
      },
      {
        q: 'Do you offer returns?',
        a: 'We accept returns on unworn, unaltered wigs in original packaging within 7 days of delivery. Please contact us via WhatsApp before sending any item back so we can guide you through the process.'
      },
      {
        q: 'How do I place an order?',
        a: 'Ordering is easy! Select your wig color and size on this website, add it to your cart, and place the order via WhatsApp — or message us directly. We offer cash on delivery, so no payment is needed upfront.'
      }
    ],

    wa_cart_empty:  'Your cart is empty!',
    wa_msg_greeting:'Hello Karyn Hair! 👋',
    wa_msg_name:    'Name',
    wa_msg_phone:   'Phone',
    wa_msg_order:   'Order',
    wa_msg_confirm: '_(Prices to be confirmed by Karyn Hair)_',
    wa_msg_payment: 'Payment: Cash on delivery. Please confirm! 🙏'
  },

  fr: {
    nav_home:    'Accueil',
    nav_products:'Produits',
    nav_contact: 'Contact',
    nav_cart:    'Panier',

    hero_eyebrow:  "L’Excellence au Naturel",
    hero_tagline:  'Perruques Lace Premium — Livrées Chez Vous',
    hero_cta_shop: 'Voir la Collection',
    hero_cta_wa:   'Nous Contacter',
    hero_scroll:   'Défiler',

    tw_0: 'Perruques Lace Front 13×4 Premium',
    tw_1: 'Densité 180% — Ultra Lisse',
    tw_2: '5 Couleurs · 5 Longueurs',
    tw_3: 'Commander via WhatsApp · Paiement à la Livraison',

    marq_items: ['Livraison Gratuite','Qualité Premium','Paiement à la Livraison','Commander via WhatsApp','Lace Front 13×4','Densité 180%','Ultra Lisse','5 Couleurs','Karyn Hair'],

    feat_1_title: 'Livraison Nationale',
    feat_1_desc:  'Livraison rapide et sécurisée dans tout le pays. Arrivée dans un bel emballage.',
    feat_2_title: 'Qualité Premium',
    feat_2_desc:  'Lace front 13×4, densité 180%, cheveux 100% humains. Ligne de départ indétectable.',
    feat_3_title: 'Paiement à la Livraison',
    feat_3_desc:  'Aucun paiement anticipé requis. Payez en espèces à la réception de votre perruque.',
    feat_4_title: 'Commandes WhatsApp',
    feat_4_desc:  'Commandez directement sur WhatsApp. Réponses rapides, service personnalisé.',

    products_title_1:  'La',
    products_title_em: 'Collection',
    products_subtitle: "Perruques lace premium sélectionnées à la main — 5 teintes, 5 longueurs, un seul standard d’excellence.",
    filter_label: 'Filtrer par Couleur',
    filter_all:   'Toutes',
    size_label:   'Choisir la Taille',
    add_to_cart:  'Ajouter au Panier',
    add_added:    'Ajouté !',
    choose_size:  'Choisissez une taille !',
    price_from:   'À partir de',
    price_soon:   'Bientôt Disponible',
    photos_count: ' photos',
    remove:       'Retirer',

    color_natural_black: 'Noir Naturel',
    color_dark_brown:    'Brun Foncé',
    color_medium_brown:  'Brun Moyen',
    color_blonde:        'Blonde',
    color_burgundy:      'Bordeaux',

    product_name: 'Perruque Lace 13×4 Lisse',

    contact_title_1:   'Nous',
    contact_title_em:  'Contacter',
    contact_subtitle:  'Nous sommes là pour vous aider à trouver la perruque parfaite. Contactez-nous via WhatsApp pour une réponse rapide.',
    contact_wa_title:  'WhatsApp',
    contact_wa_desc:   'Commandez, posez des questions ou demandez conseil directement sur WhatsApp.',
    contact_web_title: 'Site Web',
    contact_web_desc:  'Parcourez notre collection complète en ligne et explorez tous les styles et couleurs disponibles.',
    contact_web_link:  'Voir la Collection',
    contact_del_title: 'Livraison',
    contact_del_desc:  'Paiement à la livraison partout dans le pays. Aucun paiement requis avant réception.',
    contact_del_link:  'Renseignements livraison',
    contact_wa_btn:    'Commander via WhatsApp',

    cart_title:     'Votre Panier',
    cart_empty:     'Votre panier est vide',
    cart_browse:    'Parcourez la collection',
    cart_total:     'Total',
    cart_order_btn: 'Commander via WhatsApp',

    mob_home:    'Accueil',
    mob_shop:    'Boutique',
    mob_cart:    'Panier',
    mob_contact: 'Contact',

    modal_title:  'Finaliser votre commande',
    modal_desc:   'Entrez vos coordonnées et nous enverrons votre commande via WhatsApp pour confirmation.',
    modal_name:   'Votre nom complet *',
    modal_phone:  'Numéro de téléphone (optionnel)',
    modal_send:   'Envoyer la commande via WhatsApp',
    modal_cancel: 'Annuler',

    footer_copy: '© 2025 Karyn Hair. Tous droits réservés.',

    faq_eyebrow: 'Questions Fréquentes',
    faq_title:   'Questions <em>Fréquentes</em>',
    faq_items: [
      {
        q: 'Quel type de cheveux est utilisé ?',
        a: 'Nos perruques sont fabriquées avec des cheveux 100% naturels humains — la plus haute qualité disponible. La lace est HD (Haute Définition), la rendant pratiquement invisible sur toutes les carnations pour un look des plus naturels.'
      },
      {
        q: 'Combien de temps dure la perruque ?',
        a: 'Avec des soins appropriés, nos perruques peuvent durer 1 à 2 ans ou plus. Nous recommandons un lavage toutes les 2–3 semaines, de dormir avec un bonnet en satin et d’éviter la chaleur excessive pour préserver la qualité des cheveux.'
      },
      {
        q: 'Comment installer la perruque ?',
        a: 'Le lace front 13×4 peut être installé avec ou sans colle. Posez simplement la lace le long de votre ligne capillaire, découpez-la à la mesure et fixez-la selon votre préférence. La lace HD se fond parfaitement pour un look sans colle. Nous recommandons de regarder un tutoriel pour une première installation.'
      },
      {
        q: 'Acceptez-vous les retours ?',
        a: 'Nous acceptons les retours de perruques non portées et non modifiées dans leur emballage d’origine dans les 7 jours suivant la livraison. Veuillez nous contacter via WhatsApp avant de renvoyer tout article pour que nous puissions vous guider.'
      },
      {
        q: 'Comment passer une commande ?',
        a: 'Commander est simple ! Sélectionnez la couleur et la taille de votre perruque sur ce site, ajoutez-la au panier et passez la commande via WhatsApp — ou contactez-nous directement. Nous offrons le paiement à la livraison, aucun paiement anticipé n’est nécessaire.'
      }
    ],

    wa_cart_empty:  'Votre panier est vide !',
    wa_msg_greeting:'Bonjour Karyn Hair ! 👋',
    wa_msg_name:    'Nom',
    wa_msg_phone:   'Téléphone',
    wa_msg_order:   'Commande',
    wa_msg_confirm: '_(Prix à confirmer par Karyn Hair)_',
    wa_msg_payment: 'Paiement : Paiement à la livraison. Merci de confirmer ! 🙏'
  }
};

/* ═══ LANGUAGE STATE ═══ */
let LANG = 'en';

function t(key) {
  return (T[LANG] && T[LANG][key] !== undefined) ? T[LANG][key] : (T['en'][key] !== undefined ? T['en'][key] : key);
}

function tColor(color) {
  const key = COLOR_KEYS[color];
  return key ? t(key) : color;
}

function applyLang(lang) {
  LANG = lang;
  localStorage.setItem('lang', lang);

  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('on', b.dataset.lang === lang);
  });

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const val = T[LANG] && T[LANG][key] !== undefined ? T[LANG][key] : T['en'][key];
    if (val !== undefined) el.textContent = val;
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    const val = T[LANG] && T[LANG][key] !== undefined ? T[LANG][key] : T['en'][key];
    if (val !== undefined) el.placeholder = val;
  });

  buildMarquee();
  buildFilters();
  renderGrid();
  buildFAQ();
  updCart();

  // Reset typewriter
  phraseIdx = 0; charIdx = 0; deleting = false;
  clearTimeout(twTimeout);
  const twEl = document.getElementById('tw');
  if (twEl) twEl.textContent = '';
  twTimeout = setTimeout(typewriter, 600);
}

/* ═══ STATE ═══ */
let cart        = [];
let activeColor = 'All';
const selectedSizes = {};

// Gallery state
let glMedia  = [];
let glIdx    = 0;
let glTouchX = null;

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
let phraseIdx = 0, charIdx = 0, deleting = false;
let twTimeout = null;

function typewriter() {
  const el = document.getElementById('tw');
  if (!el) return;
  const phrases = [t('tw_0'), t('tw_1'), t('tw_2'), t('tw_3')];
  const current = phrases[phraseIdx % phrases.length];
  if (!deleting) {
    el.textContent = current.slice(0, ++charIdx);
    if (charIdx === current.length) {
      deleting = true;
      twTimeout = setTimeout(typewriter, 2200);
      return;
    }
  } else {
    el.textContent = current.slice(0, --charIdx);
    if (charIdx === 0) {
      deleting = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
    }
  }
  twTimeout = setTimeout(typewriter, deleting ? 42 : 72);
}

/* ═══ MARQUEE ═══ */
function buildMarquee() {
  const items = t('marq_items');
  const doubled = [...items, ...items];
  const mq = document.getElementById('mq');
  if (!mq) return;
  mq.innerHTML = '';
  doubled.forEach((text, i) => {
    const s = document.createElement('span');
    s.textContent = text;
    if (i % 3 === 2) s.classList.add('gold');
    mq.appendChild(s);
    const sep = document.createElement('span');
    sep.textContent = '·';
    sep.className = 'marq-sep';
    mq.appendChild(sep);
  });
}

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

/* ═══ FAQ ═══ */
function buildFAQ() {
  const section = document.getElementById('faq-section');
  if (!section) return;
  const items = t('faq_items');
  section.innerHTML =
    '<div class="faq-inner">' +
      '<p class="faq-eyebrow">' + t('faq_eyebrow') + '</p>' +
      '<h2 class="faq-title">' + t('faq_title') + '</h2>' +
      '<div class="faq-list">' +
        items.map(function(item, i) {
          return (
            '<div class="faq-item" id="faq-item-' + i + '">' +
              '<button class="faq-q" onclick="toggleFAQ(' + i + ')">' +
                '<span>' + item.q + '</span>' +
                '<svg class="faq-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 9l6 6 6-6"/></svg>' +
              '</button>' +
              '<div class="faq-a" id="faq-a-' + i + '">' +
                '<div class="faq-a-inner">' + item.a + '</div>' +
              '</div>' +
            '</div>'
          );
        }).join('') +
      '</div>' +
    '</div>';
}

function toggleFAQ(idx) {
  const item   = document.getElementById('faq-item-' + idx);
  const answer = document.getElementById('faq-a-' + idx);
  if (!item || !answer) return;
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(function(el) {
    el.classList.remove('open');
    const a = el.querySelector('.faq-a');
    if (a) a.style.maxHeight = '0';
  });
  if (!isOpen) {
    item.classList.add('open');
    answer.style.maxHeight = answer.scrollHeight + 'px';
  }
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
    b.className = 'fb' + (c === activeColor ? ' on' : '');
    if (c !== 'All') {
      const d = document.createElement('span');
      d.className = 'cdot';
      d.style.background = DOTS[c] || 'var(--gold)';
      b.appendChild(d);
    }
    b.appendChild(document.createTextNode(c === 'All' ? t('filter_all') : tColor(c)));
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

  // Update price display
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  const sizeObj = product.sizes.find(s => s.size === size);
  const priceEl = document.getElementById('pprice-' + productId);
  if (priceEl && sizeObj) {
    if (sizeObj.price !== null) {
      priceEl.innerHTML = '<em class="price-val">$' + sizeObj.price + '</em>';
    } else {
      priceEl.innerHTML = '<em class="price-soon">' + t('price_soon') + '</em>';
    }
  }
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
    const card       = document.createElement('div');
    card.className   = 'pcard';
    const dotColor   = DOTS[product.color] || 'var(--gold)';
    const thumb      = (product.media && product.media[0]) ? product.media[0].src : product.image;
    const hasGallery = product.media && product.media.length > 0;
    const count      = hasGallery ? product.media.length : 0;

    // Price logic
    const selSizeObj = selectedSizes[product.id]
      ? product.sizes.find(s => s.size === selectedSizes[product.id])
      : null;
    const firstPriced = product.sizes.find(s => s.price !== null);
    let priceHtml;
    if (selSizeObj && selSizeObj.price !== null) {
      priceHtml = '<em class="price-val">$' + selSizeObj.price + '</em>';
    } else if (firstPriced) {
      priceHtml = '<span class="price-from">' + t('price_from') + '</span> <em class="price-val">$' + firstPriced.price + '</em>';
    } else {
      priceHtml = '<em class="price-soon">' + t('price_soon') + '</em>';
    }

    const sizeBtns = product.sizes.map(s => {
      const active = selectedSizes[product.id] === s.size ? ' selected' : '';
      return '<button class="size-btn' + active + '" ' +
             'onclick="selectSize(' + product.id + ',\'' + s.size.replace(/'/g, "\\'") + '\',this)">' +
             s.size + '</button>';
    }).join('');

    card.innerHTML =
      '<div class="pcard-img-wrap' + (hasGallery ? ' has-gallery' : '') + '"' +
           (hasGallery ? ' onclick="openGallery(' + product.id + ',0)" role="button" tabindex="0"' : '') + '>' +
        '<img class="pcard-img" src="' + thumb + '" ' +
             'alt="' + t('product_name') + ' — ' + tColor(product.color) + '" loading="lazy" draggable="false"/>' +
        (hasGallery
          ? '<div class="pimg-overlay">' +
              '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">' +
                '<path d="M15 3h6m0 0v6m0-6l-7 7M9 21H3m0 0v-6m0 6l7-7"/>' +
              '</svg>' +
              (count > 1 ? '<span class="pimg-count">' + count + t('photos_count') + '</span>' : '') +
            '</div>'
          : '') +
      '</div>' +
      '<div class="pbody">' +
        '<p class="pcat">' +
          '<span class="cdot" style="background:' + dotColor + '"></span>' +
          tColor(product.color) +
        '</p>' +
        '<h3 class="pname">' + t('product_name') + '</h3>' +
        '<div class="size-selector">' +
          '<p class="size-label">' + t('size_label') + '</p>' +
          '<div class="size-btns">' + sizeBtns + '</div>' +
        '</div>' +
        '<div class="pfoot">' +
          '<p class="pprice" id="pprice-' + product.id + '">' + priceHtml + '</p>' +
          '<button class="abtn" onclick="addC(' + product.id + ',this)">' + t('add_to_cart') + '</button>' +
        '</div>' +
      '</div>';

    g.appendChild(card);

    if (hasGallery) {
      const wrap = card.querySelector('.pcard-img-wrap');
      wrap.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openGallery(product.id, 0); }
      });
    }

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

/* ═══════════════════════════════════════════
   GALLERY MODAL
   ═══════════════════════════════════════════ */

function openGallery(productId, startIdx) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product || !product.media || !product.media.length) return;
  glMedia = product.media;
  glIdx   = startIdx || 0;
  document.getElementById('glbg').classList.add('on');
  document.body.style.overflow = 'hidden';
  renderGallerySlide();
}

function closeGallery() {
  const bg = document.getElementById('glbg');
  if (!bg) return;
  const vid = document.querySelector('#gl-stage video');
  if (vid) vid.pause();
  bg.classList.remove('on');
  document.body.style.overflow = '';
}

function galleryNav(dir) {
  const newIdx = glIdx + dir;
  if (newIdx < 0 || newIdx >= glMedia.length) return;
  const vid = document.querySelector('#gl-stage video');
  if (vid) vid.pause();
  glIdx = newIdx;
  renderGallerySlide();
}

function renderGallerySlide() {
  const stage = document.getElementById('gl-stage');
  const dots  = document.getElementById('gl-dots');
  const prev  = document.getElementById('gl-prev');
  const next  = document.getElementById('gl-next');
  if (!stage) return;

  const item    = glMedia[glIdx];
  const isVideo = item.type === 'video' || /\.mp4$/i.test(item.src);

  if (isVideo) {
    stage.innerHTML =
      '<video src="' + item.src + '" controls autoplay playsinline ' +
      'style="max-width:88vw;max-height:80vh;object-fit:contain;display:block;outline:none;border:1px solid var(--border);"></video>';
  } else {
    stage.innerHTML =
      '<img src="' + item.src + '" alt="Product photo ' + (glIdx + 1) + ' of ' + glMedia.length + '" ' +
      'draggable="false"/>';
  }

  if (prev) prev.style.display = glIdx === 0                   ? 'none' : 'flex';
  if (next) next.style.display = glIdx === glMedia.length - 1  ? 'none' : 'flex';

  if (dots) {
    dots.innerHTML = '';
    if (glMedia.length > 1) {
      glMedia.forEach((_, i) => {
        const d = document.createElement('button');
        d.className = 'gl-dot' + (i === glIdx ? ' on' : '');
        d.setAttribute('aria-label', 'Go to photo ' + (i + 1));
        d.onclick = () => {
          const v = document.querySelector('#gl-stage video');
          if (v) v.pause();
          glIdx = i;
          renderGallerySlide();
        };
        dots.appendChild(d);
      });
    }
  }
}

/* ═══ CART ═══ */
function addC(id, btn) {
  const product = PRODUCTS.find(x => x.id === id);
  if (!product) return;

  const size = selectedSizes[id];
  if (!size) {
    const card = btn.closest('.pcard');
    if (card) {
      const sel = card.querySelector('.size-selector');
      if (sel) {
        sel.classList.remove('size-required');
        void sel.offsetWidth;
        sel.classList.add('size-required');
        setTimeout(() => sel.classList.remove('size-required'), 700);
      }
    }
    btn.textContent = t('choose_size');
    setTimeout(() => { btn.textContent = t('add_to_cart'); }, 1400);
    return;
  }

  const thumb    = (product.media && product.media[0]) ? product.media[0].src : product.image;
  const sizeObj  = product.sizes.find(s => s.size === size);
  const price    = sizeObj && sizeObj.price !== null ? sizeObj.price : null;
  const cartKey  = id + '-' + size;
  const existing = cart.find(x => x.cartKey === cartKey);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ cartKey, id, color: product.color, size, image: thumb, price, qty: 1 });
  }

  updCart();
  btn.textContent = t('add_added');
  btn.classList.add('added');
  setTimeout(() => { btn.textContent = t('add_to_cart'); btn.classList.remove('added'); }, 1300);

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
  const count = cart.reduce((s, i) => s + i.qty, 0);
  const total = cart.reduce((s, i) => s + (Number(i.price) || 0) * i.qty, 0);

  const cnt = document.getElementById('cnt');
  if (cnt) cnt.textContent = count;
  const mobCnt = document.getElementById('mob-cnt');
  if (mobCnt) mobCnt.textContent = count > 0 ? '(' + count + ')' : '';
  const tot = document.getElementById('tot');
  if (tot) tot.textContent = total > 0 ? '$' + total.toFixed(2) : '—';

  const el = document.getElementById('clist');
  if (!el) return;
  if (!cart.length) {
    el.innerHTML =
      '<div class="cempty">' +
        '<p>' + t('cart_empty') + '</p>' +
        '<small>' + t('cart_browse') + '</small>' +
      '</div>';
    return;
  }
  el.innerHTML = cart.map(item => {
    const priceDisplay = item.price !== null
      ? '$' + item.price
      : '<em>' + t('price_soon') + '</em>';
    return (
      '<div class="ci">' +
      '<img src="' + item.image + '" alt=""/>' +
      '<div class="ci-inf">' +
        '<p class="ci-name">' + t('product_name') + '</p>' +
        '<p class="ci-meta">' + tColor(item.color) + ' &middot; ' + item.size + '</p>' +
        '<p class="ci-price">' + priceDisplay + '</p>' +
        '<div class="ci-ctrl">' +
          '<button class="qbtn" onclick="chQ(\'' + item.cartKey + '\',-1)">&#x2212;</button>' +
          '<span class="qn">' + item.qty + '</span>' +
          '<button class="qbtn" onclick="chQ(\'' + item.cartKey + '\',1)">&#x2B;</button>' +
          '<button class="rmbtn" onclick="rmC(\'' + item.cartKey + '\')">' + t('remove') + '</button>' +
        '</div>' +
      '</div></div>'
    );
  }).join('');
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
  if (!cart.length) { alert(t('wa_cart_empty')); return; }
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
    '  - ' + t('product_name') + ' (' + tColor(item.color) + ', ' + item.size + ')' +
    (item.price !== null ? ' — $' + item.price : '') + ' x' + item.qty
  ).join('\n');

  const msg =
    t('wa_msg_greeting') + '\n\n' +
    '*' + t('wa_msg_name') + ':* ' + name +
    (phone ? '\n*' + t('wa_msg_phone') + ':* ' + phone : '') +
    '\n\n*' + t('wa_msg_order') + ':*\n' + lines +
    '\n\n' + t('wa_msg_confirm') +
    '\n\n' + t('wa_msg_payment');

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

  // Load saved language
  LANG = localStorage.getItem('lang') || 'en';

  // Apply initial language to static elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const val = T[LANG] && T[LANG][key] !== undefined ? T[LANG][key] : T['en'][key];
    if (val !== undefined) el.textContent = val;
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    const val = T[LANG] && T[LANG][key] !== undefined ? T[LANG][key] : T['en'][key];
    if (val !== undefined) el.placeholder = val;
  });
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('on', b.dataset.lang === LANG);
  });

  go('home');
  buildFilters();
  buildFAQ();
  buildMarquee();

  twTimeout = setTimeout(typewriter, 1000);

  // Gallery keyboard navigation
  document.addEventListener('keydown', e => {
    const bg = document.getElementById('glbg');
    if (!bg || !bg.classList.contains('on')) return;
    if (e.key === 'ArrowLeft')  { e.preventDefault(); galleryNav(-1); }
    if (e.key === 'ArrowRight') { e.preventDefault(); galleryNav(1);  }
    if (e.key === 'Escape')     closeGallery();
  });

  // Gallery touch swipe
  const glbg = document.getElementById('glbg');
  if (glbg) {
    glbg.addEventListener('touchstart', e => {
      if (e.target.closest('button, video')) return;
      glTouchX = e.touches[0].clientX;
    }, { passive: true });

    glbg.addEventListener('touchend', e => {
      if (glTouchX === null) return;
      const dx = e.changedTouches[0].clientX - glTouchX;
      glTouchX = null;
      if (Math.abs(dx) < 44) return;
      galleryNav(dx < 0 ? 1 : -1);
    }, { passive: true });
  }
})();
