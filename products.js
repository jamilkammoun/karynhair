/* ═══════════════════════════════════════════════════════════════
   KARYN HAIR — PRODUCT CATALOGUE
   ═══════════════════════════════════════════════════════════════

   HOW TO USE:
   1. Set each product's price as a number  →  price: 89.99
   2. Drop your photos into  images/products/
      using the exact filename shown in each  image:  field.
   3. Save this file — the shop updates instantly.

   25 products = 5 colors × 5 lengths
   ═══════════════════════════════════════════════════════════════ */

const PRODUCTS = [

  /* ──────────────────── NATURAL BLACK ──────────────────── */
  {
    id:    1,
    name:  "13×4 Lace Wig — Bone Straight",
    color: "Natural Black",
    size:  "16 inch",
    price: "",
    image: "images/products/black-16.jpg"
  },
  {
    id:    2,
    name:  "13×4 Lace Wig — Bone Straight",
    color: "Natural Black",
    size:  "18 inch",
    price: "",
    image: "images/products/black-18.jpg"
  },
  {
    id:    3,
    name:  "13×4 Lace Wig — Bone Straight",
    color: "Natural Black",
    size:  "20 inch",
    price: "",
    image: "images/products/black-20.jpg"
  },
  {
    id:    4,
    name:  "13×4 Lace Wig — Bone Straight",
    color: "Natural Black",
    size:  "22 inch",
    price: "",
    image: "images/products/black-22.jpg"
  },
  {
    id:    5,
    name:  "13×4 Lace Wig — Bone Straight",
    color: "Natural Black",
    size:  "24 inch",
    price: "",
    image: "images/products/black-24.jpg"
  },

  /* ──────────────────── DARK BROWN ──────────────────── */
  {
    id:    6,
    name:  "13×4 Lace Wig — Bone Straight",
    color: "Dark Brown",
    size:  "16 inch",
    price: "",
    image: "images/products/dark-brown-16.jpg"
  },
  {
    id:    7,
    name:  "13×4 Lace Wig — Bone Straight",
    color: "Dark Brown",
    size:  "18 inch",
    price: "",
    image: "images/products/dark-brown-18.jpg"
  },
  {
    id:    8,
    name:  "13×4 Lace Wig — Bone Straight",
    color: "Dark Brown",
    size:  "20 inch",
    price: "",
    image: "images/products/dark-brown-20.jpg"
  },
  {
    id:    9,
    name:  "13×4 Lace Wig — Bone Straight",
    color: "Dark Brown",
    size:  "22 inch",
    price: "",
    image: "images/products/dark-brown-22.jpg"
  },
  {
    id:   10,
    name:  "13×4 Lace Wig — Bone Straight",
    color: "Dark Brown",
    size:  "24 inch",
    price: "",
    image: "images/products/dark-brown-24.jpg"
  },

  /* ──────────────────── MEDIUM BROWN ──────────────────── */
  {
    id:   11,
    name:  "13×4 Lace Wig — Bone Straight",
    color: "Medium Brown",
    size:  "16 inch",
    price: "",
    image: "images/products/medium-brown-16.jpg"
  },
  {
    id:   12,
    name:  "13×4 Lace Wig — Bone Straight",
    color: "Medium Brown",
    size:  "18 inch",
    price: "",
    image: "images/products/medium-brown-18.jpg"
  },
  {
    id:   13,
    name:  "13×4 Lace Wig — Bone Straight",
    color: "Medium Brown",
    size:  "20 inch",
    price: "",
    image: "images/products/medium-brown-20.jpg"
  },
  {
    id:   14,
    name:  "13×4 Lace Wig — Bone Straight",
    color: "Medium Brown",
    size:  "22 inch",
    price: "",
    image: "images/products/medium-brown-22.jpg"
  },
  {
    id:   15,
    name:  "13×4 Lace Wig — Bone Straight",
    color: "Medium Brown",
    size:  "24 inch",
    price: "",
    image: "images/products/medium-brown-24.jpg"
  },

  /* ──────────────────── BLONDE ──────────────────── */
  {
    id:   16,
    name:  "13×4 Lace Wig — Bone Straight",
    color: "Blonde",
    size:  "16 inch",
    price: "",
    image: "images/products/blonde-16.jpg"
  },
  {
    id:   17,
    name:  "13×4 Lace Wig — Bone Straight",
    color: "Blonde",
    size:  "18 inch",
    price: "",
    image: "images/products/blonde-18.jpg"
  },
  {
    id:   18,
    name:  "13×4 Lace Wig — Bone Straight",
    color: "Blonde",
    size:  "20 inch",
    price: "",
    image: "images/products/blonde-20.jpg"
  },
  {
    id:   19,
    name:  "13×4 Lace Wig — Bone Straight",
    color: "Blonde",
    size:  "22 inch",
    price: "",
    image: "images/products/blonde-22.jpg"
  },
  {
    id:   20,
    name:  "13×4 Lace Wig — Bone Straight",
    color: "Blonde",
    size:  "24 inch",
    price: "",
    image: "images/products/blonde-24.jpg"
  },

  /* ──────────────────── BURGUNDY ──────────────────── */
  {
    id:   21,
    name:  "13×4 Lace Wig — Bone Straight",
    color: "Burgundy",
    size:  "16 inch",
    price: "",
    image: "images/products/burgundy-16.jpg"
  },
  {
    id:   22,
    name:  "13×4 Lace Wig — Bone Straight",
    color: "Burgundy",
    size:  "18 inch",
    price: "",
    image: "images/products/burgundy-18.jpg"
  },
  {
    id:   23,
    name:  "13×4 Lace Wig — Bone Straight",
    color: "Burgundy",
    size:  "20 inch",
    price: "",
    image: "images/products/burgundy-20.jpg"
  },
  {
    id:   24,
    name:  "13×4 Lace Wig — Bone Straight",
    color: "Burgundy",
    size:  "22 inch",
    price: "",
    image: "images/products/burgundy-22.jpg"
  },
  {
    id:   25,
    name:  "13×4 Lace Wig — Bone Straight",
    color: "Burgundy",
    size:  "24 inch",
    price: "",
    image: "images/products/burgundy-24.jpg"
  }

];
