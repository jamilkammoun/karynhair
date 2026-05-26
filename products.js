/* ═══════════════════════════════════════════════════════════════
   KARYN HAIR — PRODUCT CATALOGUE
   ═══════════════════════════════════════════════════════════════

   HOW TO USE:
   1. Drop new photos/videos into the product's folder,
      e.g.  images/products/black/
      Then add an entry to that product's  media  array:
        { type: "image", src: "images/products/black/7.jpg" }
        { type: "video", src: "images/products/black/7.mp4" }

   2. Set each size's price as a number  →  price: 89.99
      Leave as null to show "Coming Soon".

   3. Save this file — the shop updates instantly.

   5 products = 5 colors, each with 5 selectable lengths
   ═══════════════════════════════════════════════════════════════ */

const PRODUCTS = [

  /* ──────────────────── NATURAL BLACK ──────────────────── */
  /* Files: 1.jpg  2.jpg  3.jpg  4.jpg  5.jpg  6.mp4        */
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
      { size: "20 inch", price: null },
      { size: "22 inch", price: null },
      { size: "24 inch", price: null },
      { size: "26 inch", price: null },
      { size: "28 inch", price: null }
    ]
  },

  /* ──────────────────── DARK BROWN ──────────────────── */
  /* Files: 1.jpg  2.jpg  3.jpg                           */
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
      { size: "20 inch", price: null },
      { size: "22 inch", price: null },
      { size: "24 inch", price: null },
      { size: "26 inch", price: null },
      { size: "28 inch", price: null }
    ]
  },

  /* ──────────────────── MEDIUM BROWN ──────────────────── */
  /* Files: 1.jpg  2.jpg  3.mp4                            */
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
      { size: "20 inch", price: null },
      { size: "22 inch", price: null },
      { size: "24 inch", price: null },
      { size: "26 inch", price: null },
      { size: "28 inch", price: null }
    ]
  },

  /* ──────────────────── BLONDE ──────────────────── */
  /* Files: 1.jpg  2.jpg  3.jpg  4.mp4               */
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
      { size: "20 inch", price: null },
      { size: "22 inch", price: null },
      { size: "24 inch", price: null },
      { size: "26 inch", price: null },
      { size: "28 inch", price: null }
    ]
  },

  /* ──────────────────── BURGUNDY ──────────────────── */
  /* Files: 1.jpg  2.jpg  3.mp4                        */
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
      { size: "20 inch", price: null },
      { size: "22 inch", price: null },
      { size: "24 inch", price: null },
      { size: "26 inch", price: null },
      { size: "28 inch", price: null }
    ]
  }

];
