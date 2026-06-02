/* ═══════════════════════════════════════════════════════════════
   KARYN HAIR — PRODUCT CATALOGUE
   ═══════════════════════════════════════════════════════════════

   HOW TO USE:
   1. Drop new photos/videos into the product's folder,
      e.g.  images/products/black/
      Then add an entry to that product's  media  array:
        { type: "image", src: "images/products/black/7.jpg" }
        { type: "video", src: "images/products/black/7.mp4" }

   2. Set each size's price as a number  →  price: 170
      Leave as null to show "Coming Soon".

   3. Save this file — the shop updates instantly.

   5 products = 5 colors, each with 5 selectable lengths
   ═══════════════════════════════════════════════════════════════ */

const PRODUCTS = [

  /* ──────────────────── NATURAL BLACK ──────────────────── */
  {
    id:          1,
    name:        "13×4 Lace Wig Straight",
    color:       "Natural Black",
    image:       "images/products/black/1.jpg",
    mediaFolder: "images/products/black/",
    media: [
      { type: "image", src: "images/products/black/1.jpg" },
      { type: "image", src: "images/products/black/2.jpg" },
      { type: "image", src: "images/products/black/3.jpg" },
      { type: "image", src: "images/products/black/4.jpg" },
      { type: "image", src: "images/products/black/5.jpg" },
      { type: "video", src: "images/products/black/6.mp4" }
    ],
    sizes: [
      { size: '20"', price: 170 },
      { size: '22"', price: 200 },
      { size: '24"', price: 220 },
      { size: '26"', price: 250 },
      { size: '28"', price: 270 }
    ]
  },

  /* ──────────────────── DARK BROWN ──────────────────── */
  {
    id:          2,
    name:        "13×4 Lace Wig Straight",
    color:       "Dark Brown",
    image:       "images/products/dark-brown/1.jpg",
    mediaFolder: "images/products/dark-brown/",
    media: [
      { type: "image", src: "images/products/dark-brown/1.jpg" },
      { type: "image", src: "images/products/dark-brown/2.jpg" },
      { type: "image", src: "images/products/dark-brown/3.jpg" }
    ],
    sizes: [
      { size: '20"', price: 170 },
      { size: '22"', price: 200 },
      { size: '24"', price: 220 },
      { size: '26"', price: 250 },
      { size: '28"', price: 270 }
    ]
  },

  /* ──────────────────── MEDIUM BROWN ──────────────────── */
  {
    id:          3,
    name:        "13×4 Lace Wig Straight",
    color:       "Medium Brown",
    image:       "images/products/medium-brown/1.jpg",
    mediaFolder: "images/products/medium-brown/",
    media: [
      { type: "image", src: "images/products/medium-brown/1.jpg" },
      { type: "image", src: "images/products/medium-brown/2.jpg" },
      { type: "video", src: "images/products/medium-brown/3.mp4" }
    ],
    sizes: [
      { size: '20"', price: 170 },
      { size: '22"', price: 200 },
      { size: '24"', price: 220 },
      { size: '26"', price: 250 },
      { size: '28"', price: 270 }
    ]
  },

  /* ──────────────────── BLONDE ──────────────────── */
  {
    id:          4,
    name:        "13×4 Lace Wig Straight",
    color:       "Blonde",
    image:       "images/products/blonde/1.jpg",
    mediaFolder: "images/products/blonde/",
    media: [
      { type: "image", src: "images/products/blonde/1.jpg" },
      { type: "image", src: "images/products/blonde/2.jpg" },
      { type: "image", src: "images/products/blonde/3.jpg" },
      { type: "video", src: "images/products/blonde/4.mp4" }
    ],
    sizes: [
      { size: '20"', price: 170 },
      { size: '22"', price: 200 },
      { size: '24"', price: 220 },
      { size: '26"', price: 250 },
      { size: '28"', price: 270 }
    ]
  },

  /* ──────────────────── BURGUNDY ──────────────────── */
  {
    id:          5,
    name:        "13×4 Lace Wig Straight",
    color:       "Burgundy",
    image:       "images/products/burgundy/1.jpg",
    mediaFolder: "images/products/burgundy/",
    media: [
      { type: "image", src: "images/products/burgundy/1.jpg" },
      { type: "image", src: "images/products/burgundy/2.jpg" },
      { type: "video", src: "images/products/burgundy/3.mp4" }
    ],
    sizes: [
      { size: '20"', price: 170 },
      { size: '22"', price: 200 },
      { size: '24"', price: 220 },
      { size: '26"', price: 250 },
      { size: '28"', price: 270 }
    ]
  }

];
