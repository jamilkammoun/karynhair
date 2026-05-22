/* ═══════════════════════════════════════════
   KARYN HAIR — APP LOGIC
   ═══════════════════════════════════════════ */

const WA = "00243812142188";
const DOTS = {
  "Blonde Highlight": "#e8d08a",
  "Dark Brown":       "#3b1f0e",
  "Auburn Red":       "#8b2500",
  "Honey Brown":      "#c47c2b",
  "Jet Black":        "#111"
};

let cart = [], aclr = "All";

/* ─── CUSTOM CURSOR ──────────────────────────── */
(function initCursor() {
  const dot  = document.getElementById("cursor-dot");
  const ring = document.getElementById("cursor-ring");
  if (!dot || !ring) return;

  let rx = 0, ry = 0, mx = 0, my = 0;

  document.addEventListener("mousemove", e => {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx + "px";
    dot.style.top  = my + "px";
  });

  (function lerp() {
    rx += (mx - rx) * 0.14;
    ry += (my - ry) * 0.14;
    ring.style.left = rx + "px";
    ring.style.top  = ry + "px";
    requestAnimationFrame(lerp);
  })();

  document.querySelectorAll("a, button, .pcard, .ccard, .feat, .brand, .mob-btn").forEach(el => {
    el.addEventListener("mouseenter", () => document.body.classList.add("cursor-hover"));
    el.addEventListener("mouseleave", () => document.body.classList.remove("cursor-hover"));
  });
})();

/* ─── NAV SCROLL EFFECT ──────────────────────── */
window.addEventListener("scroll", () => {
  const nav = document.getElementById("navbar");
  if (!nav) return;
  if (window.scrollY > 60) nav.classList.add("scrolled");
  else nav.classList.remove("scrolled");
}, { passive: true });

/* ─── TYPEWRITER ─────────────────────────────── */
const phr = [
  "Premium 13×4 Lace Front Wigs",
  "180% Density — Bone Straight",
  "5 Colors · 5 Lengths",
  "Order via WhatsApp · Pay on Delivery"
];
let pi = 0, ci = 0, dl = false;

function tw() {
  const el = document.getElementById("tw");
  if (!el) return;
  const cur = phr[pi];
  if (!dl) {
    el.textContent = cur.slice(0, ++ci);
    if (ci === cur.length) { dl = true; setTimeout(tw, 2200); return; }
  } else {
    el.textContent = cur.slice(0, --ci);
    if (ci === 0) { dl = false; pi = (pi + 1) % phr.length; }
  }
  setTimeout(tw, dl ? 42 : 72);
}
setTimeout(tw, 900);

/* ─── MARQUEE BUILD ──────────────────────────── */
(function buildMarquee() {
  const items = [
    "Free Shipping", "Premium Quality", "Cash on Delivery",
    "Order via WhatsApp", "13×4 Lace Front", "180% Density",
    "Bone Straight", "5 Colors", "Karyn Hair",
    "Free Shipping", "Premium Quality", "Cash on Delivery",
    "Order via WhatsApp", "13×4 Lace Front", "180% Density",
    "Bone Straight", "5 Colors", "Karyn Hair"
  ];
  const mq = document.getElementById("mq");
  if (!mq) return;
  items.forEach((t, i) => {
    const s = document.createElement("span");
    s.textContent = t;
    if (i % 3 === 2) s.classList.add("gold");
    mq.appendChild(s);
    const sep = document.createElement("span");
    sep.textContent = "·";
    sep.className = "marq-sep";
    mq.appendChild(sep);
  });
})();

/* ─── NAVIGATION ─────────────────────────────── */
function go(pg) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("on"));
  document.querySelectorAll(".nav-links a").forEach(a => a.classList.remove("on"));
  document.querySelectorAll(".mob-btn").forEach(b => b.classList.remove("on"));
  document.getElementById("pg-" + pg).classList.add("on");
  const lnk = document.getElementById("lnk-" + pg);
  if (lnk) lnk.classList.add("on");
  const mb = document.getElementById("mnav-" + pg);
  if (mb) mb.classList.add("on");
  window.scrollTo(0, 0);
  if (pg === "products") renderGrid();
}

document.getElementById("mnav-home").classList.add("on");

/* ─── FILTERS ────────────────────────────────── */
function buildFilters() {
  const cols = ["All", ...new Set(P.map(p => p.c))];
  const el = document.getElementById("filters");
  el.innerHTML = "";
  cols.forEach(c => {
    const b = document.createElement("button");
    b.className = "fb" + (c === "All" ? " on" : "");
    if (c !== "All") {
      const d = document.createElement("span");
      d.className = "cdot";
      d.style.background = DOTS[c] || "var(--gold)";
      b.appendChild(d);
    }
    b.appendChild(document.createTextNode(c));
    b.onclick = () => {
      aclr = c;
      document.querySelectorAll(".fb").forEach(x => x.classList.remove("on"));
      b.classList.add("on");
      const g = document.getElementById("grid");
      g.style.opacity = "0";
      g.style.transition = "opacity 0.25s";
      setTimeout(() => {
        renderGrid();
        g.style.opacity = "1";
      }, 260);
    };
    el.appendChild(b);
  });
}
buildFilters();

/* ─── PRODUCT GRID ───────────────────────────── */
function renderGrid() {
  const g = document.getElementById("grid");
  const list = aclr === "All" ? P : P.filter(p => p.c === aclr);
  g.innerHTML = "";

  list.forEach((p, idx) => {
    const d = document.createElement("div");
    d.className = "pcard";

    const dotColor = DOTS[p.c] || "var(--gold)";
    d.innerHTML =
      '<div class="pcard-img-wrap">' +
        '<img class="pcard-img" src="' + p.i + '" alt="' + p.n + '" loading="lazy"/>' +
      '</div>' +
      (p.b ? '<span class="pbadge">' + p.b + '</span>' : '') +
      '<div class="pbody">' +
        '<p class="pcat"><span class="cdot" style="background:' + dotColor + '"></span>' + p.c + '</p>' +
        '<h3 class="pname">' + p.n + '</h3>' +
        '<p class="pcode">Color: ' + p.cd + '</p>' +
        '<div class="pfoot">' +
          '<p class="pprice">$' + p.p.toFixed(2) + '</p>' +
          '<button class="abtn" onclick="addC(' + p.id + ',this)">Add to Cart</button>' +
        '</div>' +
      '</div>';

    g.appendChild(d);

    /* staggered IntersectionObserver reveal */
    const delay = idx * 80;
    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.animationDelay = "0ms";
            entry.target.classList.add("revealed");
          }, delay);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    obs.observe(d);
  });
}

/* ─── CART ───────────────────────────────────── */
function addC(id, btn) {
  const p = P.find(x => x.id === id);
  const ex = cart.find(x => x.id === id);
  if (ex) ex.qty++;
  else cart.push({ ...p, qty: 1 });
  updCart();
  btn.textContent = "Added!";
  btn.classList.add("added");
  setTimeout(() => { btn.textContent = "Add to Cart"; btn.classList.remove("added"); }, 1300);
  /* badge bounce */
  const b = document.getElementById("cnt");
  b.classList.remove("bounce");
  void b.offsetWidth; /* reflow to restart animation */
  b.classList.add("bounce");
  setTimeout(() => b.classList.remove("bounce"), 500);
}

function rmC(id) { cart = cart.filter(x => x.id !== id); updCart(); }

function chQ(id, d) {
  const it = cart.find(x => x.id === id);
  if (!it) return;
  it.qty += d;
  if (it.qty <= 0) rmC(id);
  else updCart();
}

function updCart() {
  const total = cart.reduce((s, i) => s + i.p * i.qty, 0);
  const count = cart.reduce((s, i) => s + i.qty, 0);
  document.getElementById("cnt").textContent = count;
  document.getElementById("tot").textContent = "$" + total.toFixed(2);
  const el = document.getElementById("clist");
  if (!cart.length) {
    el.innerHTML = '<div class="cempty"><p>Your cart is empty</p><small>Browse the collection</small></div>';
    return;
  }
  el.innerHTML = cart.map(it =>
    '<div class="ci">' +
    '<img src="' + it.i + '" alt="' + it.n + '"/>' +
    '<div class="ci-inf">' +
      '<p class="ci-name">' + it.n + '</p>' +
      '<p class="ci-meta">' + it.c + ' &middot; ' + it.s + '</p>' +
      '<p class="ci-price">$' + (it.p * it.qty).toFixed(2) + '</p>' +
      '<div class="ci-ctrl">' +
        '<button class="qbtn" onclick="chQ(' + it.id + ',-1)">&#x2212;</button>' +
        '<span class="qn">' + it.qty + '</span>' +
        '<button class="qbtn" onclick="chQ(' + it.id + ',1)">&#x2B;</button>' +
        '<button class="rmbtn" onclick="rmC(' + it.id + ')">Remove</button>' +
      '</div>' +
    '</div></div>'
  ).join("");
}

function openCart() {
  document.getElementById("ov").classList.add("on");
  document.getElementById("cside").classList.add("on");
  document.body.style.overflow = "hidden";
}

function closeCart() {
  document.getElementById("ov").classList.remove("on");
  document.getElementById("cside").classList.remove("on");
  document.body.style.overflow = "";
}

function openModal() {
  if (!cart.length) return;
  closeCart();
  document.getElementById("mbg").classList.add("on");
}

function closeModal() { document.getElementById("mbg").classList.remove("on"); }

function sendWA() {
  const name  = document.getElementById("fname").value.trim();
  const phone = document.getElementById("fphone").value.trim();
  if (!name) { document.getElementById("fname").focus(); return; }
  const total = cart.reduce((s, i) => s + i.p * i.qty, 0);
  const lines = cart.map(i =>
    "  - " + i.n + " (" + i.c + ", " + i.s + ") x" + i.qty + " = $" + (i.p * i.qty).toFixed(2)
  ).join("\n");
  const msg =
    "Hello Karyn Hair!\n\n" +
    "Name: *" + name + "*" + (phone ? "\nPhone: " + phone : "") +
    "\n\nOrder:\n" + lines +
    "\n\n*Total: $" + total.toFixed(2) + "*" +
    "\n\nPayment: Cash on delivery. Please confirm!";
  window.open("https://wa.me/" + WA + "?text=" + encodeURIComponent(msg), "_blank");
  closeModal();
  cart = [];
  updCart();
}
