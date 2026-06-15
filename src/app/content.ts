// ── Feature images ──────────────────────────────────────────────────────────
// To swap an image: add your file to src/app/assets/, then update the import below.
import originImg    from "../imports/origin_monto.jpg";
import qualityImg   from "../imports/haende_monto.jpg";
import balanceImg   from "../imports/Home/d0e3502ca8c5c6d3b36afc91a3644da3d8ad70af.png";

// ── Mobile feature images (reuse desktop images) ────────────────────────────
import mobileOriginImg  from "../imports/origin_monto.jpg";
import mobileQualityImg from "../imports/haende_monto.jpg";

export const content = {
  // ── Ticker (appears twice: header strip + mid-page divider) ──
  ticker: "PURITY BORN ABOVE GURGL",

  // ── First headline section ──
  headline1: {
    eyebrow: "What Matters Most Is Near",
    title: "A Water in Perfect Natural Harmony",
  },

  // ── Italic pull-quote (appears twice) ──
  quote: "Mont.O honours the exceptional quality of the Gurgl mountain springs. Naturally filtered through alpine rock, it emerges crystal clear, smooth and perfectly balanced. An unobtrusive companion that allows every flavour to speak for itself.",

  // ── Three icon+text blocks ──
  qualities: [
    {
      title: "Spring Fresh",
      body: "From the Alpine spring to your table with minimal distance in between, preserving its natural freshness every step of the way.",
    },
    {
      title: "Untouched",
      body: "Protected deep within the mountains, Mont.O remains true to its natural origin.",
    },
    {
      title: "Crystal Clear",
      body: "Its extraordinary clarity begins deep within the pristine geology of the Alps.",
    },
  ],

  // ── Three image+text feature blocks ──
  // image: swap the import at the top of this file to change the photo
  features: [
    {
      title: "Origin",
      body: "High in the Gurgl Mountains of the Ötztal Alps, at elevations exceeding 3,000 metres, Mont.O begins its journey. Naturally filtered through ancient Alpine rock, it acquires the clarity, purity and balance that define its exceptional character. ",
      image: originImg,
      mobileImage: mobileOriginImg,
    },
    {
      title: "Quality",
      body: "True quality reveals itself in balance. With its smooth texture and clean finish, Mont.O complements rather than competes, enhancing flavours without overshadowing them. An ideal companion to fine cuisine and exceptional wines. ",
      image: qualityImg,
      mobileImage: mobileQualityImg,
    },
    {
      title: "Balance",
      body: "Composition is a matter of balance. Carefully measured carbonation enhances freshness and texture without overwhelming the palate, creating a refined and harmonious drinking experience. ",
      image: balanceImg,
      mobileImage: mobileOriginImg,
    },
  ],

  // ── Product section headline ──
  headline2: {
    eyebrow: "ESSENTIAL BY NATURE",
    title: "Two varieties. Not more. Not less.",
  },

  // ── Two product cards ──
  products: [
    {
      title: "Sparkling",
      body: "Mont.O Sparkling combines exceptional purity with a finely balanced level of carbonation. Delicate effervescence brings freshness and liveliness while maintaining a smooth, elegant character. Refined and unobtrusive, it enhances the dining experience without ever demanding attention, making it the perfect companion to fine cuisine and exceptional wines. ",
    },
    {
      title: "Natural",
      body: "Mont.O Natural is defined by clarity, balance and restraint. Free from carbonation, it reveals the water's pure character with a smooth texture and clean finish. Elegant and understated, it complements flavours without distraction, making it an ideal companion to fine cuisine, exceptional wines and everyday moments alike. ",
    },
  ],

  // ── Third headline section ──
  headline3: {
    eyebrow: "EXPERIENCE IT FIRSTHAND",
    title: "Exclusive. Distinctive. Unmistakably Mont.O.",
  },

  // ── Footer ──
  footer: {
    address: "Mont.O embodies everything Gurgler Wasser stands for. Created exclusively for exceptional moments. ",
    nav: ["English", "Datenschutz", "Impressum"],
  },
};
