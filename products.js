/**
 * products.js
 * ------------------------------------------------------------
 * Central product catalog. Add new items here to scale the site —
 * the homepage grid and product bridge pages render from this array,
 * so no HTML editing is required to add products.
 *
 * Field notes:
 * - id:            unique slug, used for routing (?product=id) and as a DOM key
 * - title:         product name, shown in Fraunces (display serif)
 * - brand:         partner brand name, shown as a muted eyebrow
 * - imageUrl:      product image (ideally 3:4 or 4:5 portrait — matches Pinterest pin ratio)
 * - imageAlt:      accessible description of the image (also helps SEO from Pinterest referrals)
 * - affiliateLink: outbound tracking link to the partner/affiliate program
 * - price:         display string, keep currency symbol included
 * - description:   1–2 sentence "why we love it" copy
 * - collection:     used for homepage filtering ("Editor's Picks", "Trending", etc.)
 * - featured:      boolean — true = eligible for a full Product Bridge Page
 */

const PRODUCTS = [
  {
    id: "linen-weekend-tote",
    title: "Linen Weekend Tote",
    brand: "Maren & Co.",
    imageUrl: "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=600&q=80",
    imageAlt: "Natural linen tote bag with leather handles on a wooden bench",
    affiliateLink: "https://partner-brand.example.com/products/linen-tote?ref=YOUR_AFFILIATE_ID",
    price: "$68",
    description: "Holds a laptop, a water bottle, and a farmers-market haul without ever looking overstuffed.",
    collection: "Editor's Picks",
    featured: true
  },
  {
    id: "ceramic-pour-over-set",
    title: "Ceramic Pour-Over Set",
    brand: "Hearth Studio",
    imageUrl: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&q=80",
    imageAlt: "Matte white ceramic pour-over coffee dripper with wooden collar",
    affiliateLink: "https://partner-brand.example.com/products/pour-over-set?ref=YOUR_AFFILIATE_ID",
    price: "$42",
    description: "Slows your morning down on purpose — the wood collar stays cool to the touch even mid-pour.",
    collection: "Trending",
    featured: true
  },
  {
    id: "recycled-wool-throw",
    title: "Recycled Wool Throw",
    brand: "Norrland",
    imageUrl: "https://images.unsplash.com/photo-1580301762395-83c8f0d4b8f9?w=600&q=80",
    imageAlt: "Charcoal grey wool throw blanket folded on a linen sofa",
    affiliateLink: "https://partner-brand.example.com/products/wool-throw?ref=YOUR_AFFILIATE_ID",
    price: "$89",
    description: "Made from reclaimed wool fiber — heavier than it looks, softens more with every wash.",
    collection: "Editor's Picks",
    featured: false
  },
  {
    id: "brass-desk-lamp",
    title: "Brass Articulating Desk Lamp",
    brand: "Fielding Home",
    imageUrl: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&q=80",
    imageAlt: "Brass articulating desk lamp with warm bulb glow on a wooden desk",
    affiliateLink: "https://partner-brand.example.com/products/brass-lamp?ref=YOUR_AFFILIATE_ID",
    price: "$134",
    description: "The articulating arm actually locks in place — no slow droop after a week of use.",
    collection: "Trending",
    featured: true
  },
  {
    id: "stoneware-planter",
    title: "Stoneware Planter, Speckled",
    brand: "Terra & Bloom",
    imageUrl: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600&q=80",
    imageAlt: "Speckled stoneware planter with trailing pothos plant",
    affiliateLink: "https://partner-brand.example.com/products/stoneware-planter?ref=YOUR_AFFILIATE_ID",
    price: "$36",
    description: "Drainage hole and matching saucer included — rare at this price point.",
    collection: "Editor's Picks",
    featured: false
  },
  {
    id: "cast-iron-skillet",
    title: "Pre-Seasoned Cast Iron Skillet",
    brand: "Amberlea Kitchen",
    imageUrl: "https://images.unsplash.com/photo-1595475207225-428b62bda831?w=600&q=80",
    imageAlt: "Cast iron skillet with roasted vegetables on a stovetop",
    affiliateLink: "https://partner-brand.example.com/products/cast-iron-skillet?ref=YOUR_AFFILIATE_ID",
    price: "$54",
    description: "Arrives already seasoned — first cook doesn't stick, no ritual required.",
    collection: "Trending",
    featured: false
  }
];

// Expose for render.js (and any future product-bridge.js page script)
if (typeof module !== "undefined" && module.exports) {
  module.exports = PRODUCTS;
}
