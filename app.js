/* Shared product catalog + cart + page wiring (basic, no backend). */
(function () {
  const BUSINESS = {
    name: "Madni Care Center",
    tagline: "Authentic Unani herbal remedies — Madni Dawakhana",
    audience: "Men & Women • Age 18+",
  };

  const IMG = "assets/products";

  // Catalog amounts are stored in PKR (Pakistani Rupees).
  const BASE_PRODUCTS = [
    {
      id: "majoon-sultani-jawahardar",
      name: "Majoon Sultani Jawahardar",
      short: "Premium royal majoon with saffron, amber & gold leaf.",
      description:
        "معجون سلطانی جواہردار — a premium traditional majoon prepared with saffron, ambergris, musk, almonds, pistachios, silver & gold leaf, and honey. Formulated by Hakeem Ibn-e-Hakeem Hafiz Ali Jawad Akhtar. Take half a small spoon every 1–2 days at night with milk, about 1.5 hours after dinner.",
      image: `${IMG}/majoon-sultani-jawahardar.png`,
      price: 15000,
      compareAt: 18000,
      category: "Herbal",
      subcategory: "Majoon",
      strength: "Premium",
      rating: 4.9,
      reviewCount: 96,
      tags: ["Bestseller", "Premium", "Royal formula"],
      reviews: [
        { name: "Hassan", stars: 5, text: "Hafiz g — loha paar ki cheez hai. Original quality." },
        { name: "Omar", stars: 4, text: "Solid results. Delivery thori late thi lekin product acha hai." },
      ],
    },
    {
      id: "majoon-muqawwi-shahi-ambari",
      name: "Majoon Muqawwi Shahi Ambari",
      short: "Royal amber strengthening majoon for daily vitality.",
      description:
        "معجون مقوی شاہی عنبری — prepared from complete desi herbal ingredients. A strengthening royal formula. Take half a small spoon 1–2 times daily with milk or as directed on the label.",
      image: `${IMG}/majoon-muqawwi-shahi-ambari.png`,
      price: 12000,
      compareAt: 14500,
      category: "Herbal",
      subcategory: "Majoon",
      strength: "Active",
      rating: 4.8,
      reviewCount: 74,
      tags: ["Royal", "Strengthening"],
      reviews: [
        { name: "Bilal", stars: 5, text: "Quality packaging aur asar dono theek." },
        { name: "Maryam", stars: 5, text: "Premium feel — worth the price." },
      ],
    },
    {
      id: "super-power-golden-capsule",
      name: "Super Power Golden Capsule",
      short: "Herbal capsules for strength, stamina & vitality.",
      description:
        "سپر پاور گولڈن کیپسول — supports male vitality, nervous strength, and overall stamina. Ingredients include clove, saffron, sandfish, castoreum, nutmeg, silver calx & orpiment. Take one capsule with lukewarm milk two hours after dinner.",
      image: `${IMG}/super-power-golden-capsule.png`,
      price: 5500,
      compareAt: 6500,
      category: "Herbal",
      subcategory: "Capsules",
      strength: "Active",
      rating: 4.8,
      reviewCount: 112,
      tags: ["Bestseller", "Golden capsules"],
      reviews: [
        { name: "Ahmed", stars: 5, text: "Asar acha hai — regular use se farq para." },
        { name: "Kamran", stars: 4, text: "Original lagta hai. Reorder karunga." },
      ],
    },
    {
      id: "hab-e-mumsik-jadeed",
      name: "Hab-e-Mumsik Jadeed",
      short: "Traditional herbal hab pills for male wellness.",
      description:
        "حب ممسک جدید — classic herbal hab formulation in pill form. Follow label directions for dosage. Store in a cool, dry place.",
      image: `${IMG}/hab-e-mumsik-jadeed.png`,
      price: 4800,
      compareAt: 5600,
      category: "Herbal",
      subcategory: "Hab",
      strength: "Active",
      rating: 4.7,
      reviewCount: 68,
      tags: ["Traditional", "Herbal hab"],
      reviews: [{ name: "Saad", stars: 5, text: "Purana formula — asli cheez." }],
    },
    {
      id: "habshi-tila-e-ant",
      name: "Habshi Tila-e-Antishari",
      short: "Medicated herbal oil — external use only.",
      description:
        "حبشی طلاء — medicated oil with mace, saffron, sandfish, musk, ambergris & olive oil. Apply 5 drops at night before sleep with gentle massage as directed. External use only.",
      image: `${IMG}/habshi-tila-e-ant.png`,
      price: 4500,
      compareAt: 5200,
      category: "Herbal",
      subcategory: "Tila",
      strength: "Active",
      rating: 4.7,
      reviewCount: 55,
      tags: ["Tila", "External use"],
      reviews: [{ name: "Naveed", stars: 5, text: "Quality oil — original feel." }],
    },
    {
      id: "bichhoo-tila",
      name: "Bichhoo Tila",
      short: "Traditional medicated oil with herbal extracts.",
      description:
        "بچھو طلاء — medicated oil with aqarqarha, mace, red velvet mite, leech, earthworm, sandfish, olive oil & sweet oil. Apply 4–5 drops at night with light massage as directed on the label.",
      image: `${IMG}/bichhoo-tila.png`,
      price: 4500,
      compareAt: 5200,
      category: "Herbal",
      subcategory: "Tila",
      strength: "Active",
      rating: 4.6,
      reviewCount: 42,
      tags: ["Tila", "External use"],
      reviews: [{ name: "Raza", stars: 5, text: "Asli tila — packaging bhi achi." }],
    },
    {
      id: "safoof-mughalliz-khas",
      name: "Safoof-e-Mughalliz Khas",
      short: "Special herbal powder — morning dose with milk.",
      description:
        "سفوف مغلظ خاص — prepared from complete desi herbal ingredients. Take one small spoon with milk on an empty stomach in the morning.",
      image: `${IMG}/safoof-mughalliz-khas.png`,
      price: 3800,
      compareAt: 4500,
      category: "Herbal",
      subcategory: "Safoof",
      strength: "Active",
      rating: 4.7,
      reviewCount: 58,
      tags: ["Safoof", "Morning dose"],
      reviews: [{ name: "Tariq", stars: 5, text: "Regular use se farq hai." }],
    },
    {
      id: "safoof-sperm-mawallid-khas",
      name: "Safoof Sperm o Mawallid Khas",
      short: "Special safoof for reproductive wellness.",
      description:
        "سفوف سپرم و مولد خاص — herbal powder prepared from desi jari booti. Take half a spoon with milk on an empty stomach morning and evening.",
      image: `${IMG}/safoof-sperm-mawallid-khas.png`,
      price: 4200,
      compareAt: 5000,
      category: "Herbal",
      subcategory: "Safoof",
      strength: "Active",
      rating: 4.7,
      reviewCount: 47,
      tags: ["Safoof", "Special formula"],
      reviews: [{ name: "Imran", stars: 5, text: "Hakeem ka formula — trustworthy." }],
    },
    {
      id: "taryaq-sugar-diabetes",
      name: "Taryaq Sugar (Diabetes A)",
      short: "Herbal powder support for blood sugar balance.",
      description:
        "تریاق شوگر (ذیابیطس A) — prepared from complete desi herbal plants. Follow label directions for daily use.",
      image: `${IMG}/taryaq-sugar-diabetes.png`,
      price: 3500,
      compareAt: 4200,
      category: "Diabetes",
      subcategory: "Safoof",
      strength: "Daily",
      rating: 4.6,
      reviewCount: 63,
      tags: ["Diabetes support", "Herbal"],
      reviews: [{ name: "Farah", stars: 5, text: "Sugar control mein help milti hai." }],
    },
    {
      id: "control-sugar",
      name: "Control Sugar (Diabetes)",
      short: "Herbal powder for sugar management.",
      description:
        "کنٹرول شوگر (ذیابیطس) — prepared from complete desi jari booti. Use as directed on the label.",
      image: `${IMG}/control-sugar.png`,
      price: 3500,
      compareAt: 4200,
      category: "Diabetes",
      subcategory: "Safoof",
      strength: "Daily",
      rating: 4.6,
      reviewCount: 51,
      tags: ["Diabetes support", "Herbal"],
      reviews: [{ name: "Asim", stars: 4, text: "Regular use ke sath sugar stable rehti hai." }],
    },
    {
      id: "anti-pressure",
      name: "Anti-Pressure (High BP)",
      short: "Herbal powder for blood pressure support.",
      description:
        "Anti-Pressure — herbal powder prepared from desi ingredients for high blood pressure support. Follow label directions.",
      image: `${IMG}/anti-pressure.png`,
      price: 3500,
      compareAt: 4200,
      category: "Heart Health",
      subcategory: "Safoof",
      strength: "Daily",
      rating: 4.5,
      reviewCount: 38,
      tags: ["BP support", "Herbal"],
      reviews: [{ name: "Khalid", stars: 4, text: "BP readings better after regular use." }],
    },
    {
      id: "arq-un-nisa-joint-pain",
      name: "Arq-un-Nisa (Joint & Sciatica)",
      short: "Capsules for joint pain and sciatica relief.",
      description:
        "عرق النساء وجع المفاصل — prepared from complete desi herbal ingredients. Take one capsule morning and evening after meals with tea or milk.",
      image: `${IMG}/arq-un-nisa-joint-pain.png`,
      price: 4200,
      compareAt: 5000,
      category: "Joint & Pain",
      subcategory: "Capsules",
      strength: "Active",
      rating: 4.6,
      reviewCount: 44,
      tags: ["Joint pain", "Sciatica"],
      reviews: [{ name: "Sana", stars: 5, text: "Ghrun mein aram mila — acha product." }],
    },
    {
      id: "likoreen-capsules",
      name: "Likoreen (Leucor) Capsules",
      short: "Herbal capsules for women's wellness.",
      description:
        "لیکورین (لیکور) کیپسول — prepared from complete desi herbal ingredients. Take on an empty stomach morning and evening with lukewarm milk as directed.",
      image: `${IMG}/likoreen-capsules.png`,
      price: 4000,
      compareAt: 4800,
      category: "Women's Health",
      subcategory: "Capsules",
      strength: "Daily",
      rating: 4.6,
      reviewCount: 36,
      tags: ["Women's health", "Herbal"],
      reviews: [{ name: "Ayesha", stars: 5, text: "Effective aur gentle dono." }],
    },
    {
      id: "likoreen-safoof",
      name: "Likoreen Safoof",
      short: "Herbal powder for women's wellness.",
      description:
        "لیکورین سفوف — prepared from complete desi herbal ingredients. Take one dose morning and evening on an empty stomach with lukewarm milk.",
      image: `${IMG}/likoreen-safoof.png`,
      price: 3200,
      compareAt: 3800,
      category: "Women's Health",
      subcategory: "Safoof",
      strength: "Daily",
      rating: 4.5,
      reviewCount: 29,
      tags: ["Women's health", "Safoof"],
      reviews: [{ name: "Nida", stars: 5, text: "Powder form convenient hai." }],
    },
    {
      id: "aksir-e-maida",
      name: "Aksir-e-Maida (Digestive Safoof)",
      short: "Digestive herbal powder with ginger, fennel & ajwain.",
      description:
        "اکسیر معدہ (سفوف ہاضم) — digestive safoof with ginger, mint, fennel, turmeric, ajwain & more. Use as directed on the label.",
      image: `${IMG}/aksir-e-maida.png`,
      price: 2800,
      compareAt: 3400,
      category: "Digestive",
      subcategory: "Safoof",
      strength: "Daily",
      rating: 4.6,
      reviewCount: 41,
      tags: ["Digestion", "Safoof"],
      reviews: [{ name: "Hina", stars: 5, text: "Hazma theek rehta hai is se." }],
    },
    {
      id: "akseer-bawaseer-capsules",
      name: "Akseer-e-Bawaseer Capsules",
      short: "Herbal capsules for hemorrhoid relief.",
      description:
        "اکسیر بواسیر (کپسول) — prepared from complete desi herbal ingredients. Take one capsule morning and evening with water after meals.",
      image: `${IMG}/akseer-bawaseer-capsules.png`,
      price: 4000,
      compareAt: 4800,
      category: "Digestive",
      subcategory: "Capsules",
      strength: "Active",
      rating: 4.5,
      reviewCount: 33,
      tags: ["Digestive", "Capsules"],
      reviews: [{ name: "Waqas", stars: 4, text: "Relief mila — recommended." }],
    },
    {
      id: "herbal-majoon-jar",
      name: "Herbal Majoon (Jar)",
      short: "Traditional herbal majoon in glass jar with spoon.",
      description:
        "Traditional herbal majoon packed fresh in a glass jar with cork seal and wooden spoon. Small-batch prepared at Madni Dawakhana.",
      image: `${IMG}/herbal-majoon-jar.png`,
      price: 6500,
      compareAt: 7800,
      category: "Herbal",
      subcategory: "Majoon",
      strength: "Daily",
      rating: 4.7,
      reviewCount: 52,
      tags: ["Jar pack", "Traditional"],
      reviews: [{ name: "Danish", stars: 5, text: "Fresh aur achi packaging." }],
    },
    /* --- Pansar store (regular dry goods; same gradient-style card images as other products) --- */
    {
      id: "haldi-powder-pansar",
      name: "Haldi (Turmeric) Powder",
      short: "Clean ground turmeric for daily use.",
      description:
        "Finely ground haldi for cooking and traditional use. Store in an airtight jar away from moisture.",
      price: 480,
      compareAt: 620,
      category: "Pansar Store",
      subcategory: "Spices",
      strength: "Daily",
      rating: 4.6,
      reviewCount: 52,
      tags: ["Pansar", "Powder"],
      reviews: [
        { name: "Khalid", stars: 5, text: "Colour aur smell dono theek — pansar jaisi feel." },
        { name: "Saima", stars: 4, text: "Packaging achi thi, value okay." },
      ],
    },
    {
      id: "sonth-powder-pansar",
      name: "Sonth (Dry Ginger) Powder",
      short: "Aromatic dry ginger powder.",
      description:
        "Dry ginger (sonth) powder for warm drinks and cooking. Keep sealed to preserve aroma.",
      price: 520,
      compareAt: 650,
      category: "Pansar Store",
      subcategory: "Spices",
      strength: "Daily",
      rating: 4.5,
      reviewCount: 38,
      tags: ["Pansar", "Warmth"],
      reviews: [{ name: "Tariq", stars: 5, text: "Zaiqa saaf hai, ghar wale khush." }],
    },
    {
      id: "desi-gur-pansar",
      name: "Desi Jaggery (Gur)",
      short: "Traditional jaggery block / pieces.",
      description:
        "Natural-style gur for tea and traditional recipes. Break as needed; store cool and dry.",
      price: 380,
      compareAt: 480,
      category: "Pansar Store",
      subcategory: "Sweeteners",
      strength: "Daily",
      rating: 4.7,
      reviewCount: 44,
      tags: ["Pansar", "Natural"],
      reviews: [
        { name: "Farzana", stars: 5, text: "Meetha balance acha — zyada artificial nahi." },
      ],
    },
    {
      id: "mishri-rock-pansar",
      name: "Mishri (Rock Sugar)",
      short: "Crystal mishri for tea and mouth freshness.",
      description:
        "Clean mishri crystals. Popular for kadha-style drinks and light sweetness.",
      price: 290,
      compareAt: 380,
      category: "Pansar Store",
      subcategory: "Sweeteners",
      strength: "Gentle",
      rating: 4.4,
      reviewCount: 29,
      tags: ["Pansar", "Crystals"],
      reviews: [{ name: "Asim", stars: 4, text: "Choti packing convenient thi." }],
    },
    {
      id: "sauf-whole-pansar",
      name: "Saunf (Fennel) — Pansar Pack",
      short: "Whole fennel seeds, daily pack.",
      description:
        "Whole aromatic saunf for after-meals and home mixes. Same quality line as our herbal saunf listing.",
      price: 340,
      compareAt: 420,
      category: "Pansar Store",
      subcategory: "Seeds",
      strength: "Daily",
      rating: 4.6,
      reviewCount: 31,
      tags: ["Pansar", "Whole"],
      reviews: [{ name: "Nabeel", stars: 5, text: "Khushboo strong — pansar wali vibe." }],
    },
    {
      id: "namak-black-pansar",
      name: "Kala Namak (Black Salt)",
      short: "Powdered black salt for chaat &amp; drinks.",
      description:
        "Finely ground kala namak for raita, fruit chaat, and jaljeera-style drinks.",
      price: 220,
      compareAt: 280,
      category: "Pansar Store",
      subcategory: "Spices",
      strength: "Daily",
      rating: 4.5,
      reviewCount: 27,
      tags: ["Pansar", "Powder"],
      reviews: [{ name: "Hira", stars: 4, text: "Thik thak — price ke hisaab se theek." }],
    },
  ];

  // --- User-added products (persisted in localStorage) ---
  const USER_PRODUCTS_KEY = "pangy_user_products_v1";

  function loadUserProducts() {
    try {
      const raw = localStorage.getItem(USER_PRODUCTS_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      if (!Array.isArray(parsed)) return [];
      // Minimal validation of shape.
      return parsed
        .filter((p) => p && typeof p === "object" && typeof p.id === "string" && typeof p.name === "string")
        .map((p) => ({
          id: p.id,
          name: p.name,
          short: typeof p.short === "string" ? p.short : "",
          description: typeof p.description === "string" ? p.description : "",
          price: Number(p.price),
          compareAt: typeof p.compareAt === "number" ? p.compareAt : Number(p.price),
          category: typeof p.category === "string" ? p.category : "General",
          subcategory: typeof p.subcategory === "string" ? p.subcategory : "",
          strength: typeof p.strength === "string" ? p.strength : "",
          rating: typeof p.rating === "number" ? p.rating : 0,
          reviewCount: typeof p.reviewCount === "number" ? p.reviewCount : 0,
          tags: Array.isArray(p.tags) ? p.tags.filter((t) => typeof t === "string") : [],
          reviews: Array.isArray(p.reviews) ? p.reviews : [],
          image: typeof p.image === "string" ? p.image : "",
        }))
        .filter((p) => Number.isFinite(p.price) && p.price >= 0);
    } catch {
      return [];
    }
  }

  function saveUserProducts(list) {
    localStorage.setItem(USER_PRODUCTS_KEY, JSON.stringify(list));
  }

  function makeProductId(name) {
    const slug = String(name || "")
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
    return `u-${slug || "product"}-${Date.now()}`;
  }

  // NOTE: this variable is updated after backend sync (if backend is running).
  let PRODUCTS = BASE_PRODUCTS.concat(loadUserProducts());

  // --- Pricing overrides (editable from phone, stored in localStorage) ---
  const PRICE_KEY = "pangy_price_overrides_v1";
  function loadPriceOverrides() {
    try {
      const raw = localStorage.getItem(PRICE_KEY);
      const parsed = raw ? JSON.parse(raw) : {};
      return parsed && typeof parsed === "object" ? parsed : {};
    } catch {
      return {};
    }
  }

  function priceFor(product) {
    const overrides = loadPriceOverrides();
    const o = overrides?.[product.id];
    return Number(o?.price ?? product.price);
  }

  function compareFor(product) {
    const overrides = loadPriceOverrides();
    const o = overrides?.[product.id];
    // If compareAt is not provided in overrides, fall back to product.compareAt (if any).
    const base = typeof product.compareAt === "number" ? product.compareAt : product.price;
    const v = o?.compareAt;
    return typeof v === "number" ? v : Number(base);
  }

  function setPriceOverride(productId, next) {
    const overrides = loadPriceOverrides();
    overrides[productId] = { ...overrides[productId], ...next };
    localStorage.setItem(PRICE_KEY, JSON.stringify(overrides));
  }

  // --- Backend sync (optional) ---
  async function initBackendSync() {
    // If opened from local files (file://), fetching backend endpoints will fail.
    if (location.protocol === "file:") return;
    try {
      const [overridesRes, userProductsRes] = await Promise.all([
        fetch("/api/pricing-overrides", { cache: "no-store" }),
        fetch("/api/user-products", { cache: "no-store" }),
      ]);

      if (overridesRes && overridesRes.ok) {
        const overrides = await overridesRes.json();
        localStorage.setItem(PRICE_KEY, JSON.stringify(overrides || {}));
      }
      if (userProductsRes && userProductsRes.ok) {
        const list = await userProductsRes.json();
        localStorage.setItem(USER_PRODUCTS_KEY, JSON.stringify(Array.isArray(list) ? list : []));
      }

      // Recompute the merged product list using the updated localStorage cache.
      PRODUCTS = BASE_PRODUCTS.concat(loadUserProducts());
    } catch {
      // Backend not running or unreachable; keep localStorage-based data.
    }
  }

  const PRICE_CURRENCY = "PKR";
  const PRICE_LOCALE = "en-PK";
  /** Demo thresholds in PKR (aligned to former USD-style cart logic). */
  const FREE_SHIPPING_MIN_PKR = 3000;
  const STANDARD_SHIPPING_PKR = 1400;

  const money = (n) =>
    Number(n).toLocaleString(PRICE_LOCALE, {
      style: "currency",
      currency: PRICE_CURRENCY,
      maximumFractionDigits: 0,
    });

  const qs = (sel, el = document) => el.querySelector(sel);
  const qsa = (sel, el = document) => Array.from(el.querySelectorAll(sel));

  function svgProductDataUri(productId) {
    // Deterministic gradient based on id (no external assets).
    const prod = PRODUCTS.find((x) => x.id === productId);
    const isPansar = prod?.category === "Pansar Store";
    let hash = 0;
    for (let i = 0; i < productId.length; i++) hash = (hash * 31 + productId.charCodeAt(i)) >>> 0;

    let hueA;
    let hueB;
    let hueC;
    let baseFill;
    let gradOp;
    let frameStroke;
    let path1;
    let path2;
    let subtext;

    if (isPansar) {
      // Warm spice / jaggery / haldi tones — visually distinct from herbal greens.
      const w = hash % 48;
      hueA = 22 + w;
      hueB = (hueA + 52) % 360;
      hueC = (hueA + 118) % 360;
      baseFill = `hsl(${hueA} 42% 91%)`;
      gradOp = "0.22";
      frameStroke = "rgba(120,72,28,0.22)";
      path1 = "rgba(180,95,32,0.42)";
      path2 = "rgba(165,124,48,0.38)";
      subtext = "Pansar store • Spices & daily essentials";
    } else {
      hueA = hash % 360;
      hueB = (hueA + 55) % 360;
      hueC = (hueA + 140) % 360;
      baseFill = `hsl(${hueA} 65% 94%)`;
      gradOp = "0.14";
      frameStroke = "rgba(23,59,45,0.18)";
      path1 = "rgba(47,158,91,0.38)";
      path2 = "rgba(212,166,75,0.35)";
      subtext = "Herbal quality • Fresh batches";
    }

    const svg = encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="820" viewBox="0 0 1200 820">
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="hsl(${hueA} ${isPansar ? "82% 58%" : "90% 65%"})" stop-opacity="0.95"/>
            <stop offset="0.5" stop-color="hsl(${hueB} ${isPansar ? "78% 54%" : "85% 62%"})" stop-opacity="0.92"/>
            <stop offset="1" stop-color="hsl(${hueC} ${isPansar ? "72% 50%" : "85% 58%"})" stop-opacity="0.90"/>
          </linearGradient>
          <radialGradient id="r" cx="30%" cy="30%" r="70%">
            <stop offset="0" stop-color="white" stop-opacity="${isPansar ? "0.38" : "0.45"}"/>
            <stop offset="1" stop-color="white" stop-opacity="0"/>
          </radialGradient>
          <filter id="grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" stitchTiles="stitch"/>
            <feColorMatrix type="saturate" values="0"/>
            <feComponentTransfer>
              <feFuncA type="table" tableValues="0 0.08"/>
            </feComponentTransfer>
          </filter>
        </defs>
        <rect width="1200" height="820" fill="${baseFill}"/>
        <rect width="1200" height="820" fill="url(#g)" opacity="${gradOp}"/>
        <circle cx="330" cy="250" r="330" fill="url(#r)"/>
        <circle cx="860" cy="540" r="380" fill="url(#r)"/>
        <g opacity="0.18" filter="url(#grain)"><rect width="1200" height="820"/></g>
        <g opacity="0.96">
          <rect x="86" y="86" width="1028" height="648" rx="44" fill="rgba(255,255,255,0.78)" stroke="${frameStroke}" stroke-width="2"/>
          <path d="M 190 560 C 290 470, 420 640, 540 540 C 660 440, 800 640, 970 520" fill="none"
            stroke="${path1}" stroke-width="12" stroke-linecap="round"/>
          <path d="M 230 390 C 330 320, 440 480, 560 420 C 680 360, 780 510, 920 410" fill="none"
            stroke="${path2}" stroke-width="7" stroke-linecap="round"/>
          <text x="140" y="210" fill="${isPansar ? "rgba(72,42,18,0.9)" : "rgba(23,59,45,0.88)"}" font-size="54" font-family="ui-sans-serif,system-ui" font-weight="850" letter-spacing="-0.6">
            ${escapeXml(BUSINESS.name)}
          </text>
          <text x="140" y="270" fill="${isPansar ? "rgba(100,62,28,0.72)" : "rgba(23,59,45,0.65)"}" font-size="26" font-family="ui-sans-serif,system-ui" font-weight="650">
            ${escapeXml(subtext)}
          </text>
        </g>
      </svg>`
    );
    return `data:image/svg+xml;charset=utf-8,${svg}`;
  }

  /** Custom photo when `product.image` is set; otherwise generated SVG. */
  function productImageUrl(product) {
    if (!product?.id) return svgProductDataUri("");
    const src = product.image;
    if (typeof src === "string" && src.trim()) return escapeXml(src.trim());
    return svgProductDataUri(product.id);
  }

  function escapeXml(str) {
    return String(str)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&apos;");
  }

  // --- Cart (localStorage) ---
  const CART_KEY = "pangy_cart_v1";

  function loadCart() {
    try {
      const raw = localStorage.getItem(CART_KEY);
      const parsed = raw ? JSON.parse(raw) : { items: {} };
      if (!parsed || typeof parsed !== "object") return { items: {} };
      if (!parsed.items || typeof parsed.items !== "object") return { items: {} };
      return parsed;
    } catch {
      return { items: {} };
    }
  }

  function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    updateCartCount();
  }

  function cartCount(cart = loadCart()) {
    return Object.values(cart.items).reduce((sum, qty) => sum + Number(qty || 0), 0);
  }

  function updateCartCount() {
    const count = cartCount();
    qsa('[data-cart-count]').forEach((el) => (el.textContent = String(count)));
  }

  function addToCart(productId, qty = 1) {
    const cart = loadCart();
    cart.items[productId] = (Number(cart.items[productId] || 0) + Number(qty || 0));
    if (cart.items[productId] <= 0) delete cart.items[productId];
    saveCart(cart);
    toast("Added to cart");
  }

  function setCartQty(productId, qty) {
    const cart = loadCart();
    const n = Number(qty || 0);
    if (n <= 0) delete cart.items[productId];
    else cart.items[productId] = n;
    saveCart(cart);
  }

  function clearCart() {
    saveCart({ items: {} });
  }

  function cartLines(cart = loadCart()) {
    const lines = [];
    for (const [id, qty] of Object.entries(cart.items)) {
      const product = PRODUCTS.find((p) => p.id === id);
      if (!product) continue;
      const effectivePrice = priceFor(product);
      lines.push({
        product,
        qty: Number(qty || 0),
        lineTotal: Number(qty || 0) * effectivePrice,
      });
    }
    return lines;
  }

  // --- UI helpers ---
  let toastTimer = null;
  function toast(message) {
    const el = qs("#toast");
    if (!el) return;
    const msg = qs('[data-toast-text]', el);
    if (msg) msg.textContent = message;
    el.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove("show"), 1800);
  }

  function renderStars(stars) {
    const full = Math.round(Number(stars || 0));
    const icons = [];
    for (let i = 1; i <= 5; i++) {
      const on = i <= full ? " on" : "";
      icons.push(
        `<svg class="star${on}" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>`
      );
    }
    return `<span class="stars" aria-label="Rating ${full} out of 5">${icons.join("")}</span>`;
  }

  function initMobileNav() {
    qsa(".nav").forEach((nav) => {
      if (nav.querySelector(".nav-toggle")) return;
      const links = nav.querySelector(".nav-links");
      if (!links) return;

      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "nav-toggle";
      btn.setAttribute("aria-expanded", "false");
      btn.setAttribute("aria-label", "Open menu");
      btn.innerHTML =
        '<span aria-hidden="true"></span><span aria-hidden="true"></span><span aria-hidden="true"></span>';
      nav.insertBefore(btn, links);

      const close = () => {
        links.classList.remove("is-open");
        nav.classList.remove("nav-open");
        btn.setAttribute("aria-expanded", "false");
        btn.setAttribute("aria-label", "Open menu");
      };

      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const open = !links.classList.contains("is-open");
        links.classList.toggle("is-open", open);
        nav.classList.toggle("nav-open", open);
        btn.setAttribute("aria-expanded", open ? "true" : "false");
        btn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      });

      links.querySelectorAll("a").forEach((a) => a.addEventListener("click", close));
      document.addEventListener("click", (e) => {
        if (!nav.contains(e.target)) close();
      });
    });
  }

  // --- Page init ---
  document.addEventListener("DOMContentLoaded", async () => {
    // Fill business placeholders
    qsa("[data-biz-name]").forEach((el) => (el.textContent = BUSINESS.name));
    qsa("[data-biz-tagline]").forEach((el) => (el.textContent = BUSINESS.tagline));
    qsa("[data-biz-audience]").forEach((el) => (el.textContent = BUSINESS.audience));

    // Mark active nav link based on body data-page
    const page = document.body?.dataset?.page || "";
    qsa("[data-nav]").forEach((a) => {
      if (a.dataset.nav === page) a.setAttribute("aria-current", "page");
    });

    initMobileNav();

    await initBackendSync();

    updateCartCount();

    // Hook buttons with data-add
    document.body.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-add]");
      if (!btn) return;
      e.preventDefault();
      e.stopPropagation();
      const id = btn.getAttribute("data-add");
      addToCart(id, 1);
    });

    // Page-specific renderers
    if (page === "home") initHome();
    if (page === "products") initProducts();
    if (page === "product") initProduct();
    if (page === "cart") initCart();
    if (page === "checkout") initCheckout();
    if (page === "contact") initContact();
    if (page === "pricing") initPricing();
    if (page === "add-product") initAddProduct();
  });

  function initHome() {
    const featuredMount = qs("#featuredGrid");
    if (featuredMount) {
      // Top sellers: highest rated first.
      const featured = PRODUCTS.slice()
        .sort((a, b) => (b.rating - a.rating) || (b.reviewCount - a.reviewCount))
        .slice(0, 6);
      featuredMount.innerHTML = featured.map((p) => productCard(p)).join("");
    }

    const pansarMount = qs("#pansarGrid");
    if (pansarMount) {
      const pansarItems = PRODUCTS.filter((p) => p.category === "Pansar Store")
        .slice()
        .sort((a, b) => (b.rating - a.rating) || (b.reviewCount - a.reviewCount))
        .slice(0, 6);
      pansarMount.innerHTML = pansarItems.map((p) => productCard(p)).join("");
    }

    // Category tiles (deep-link into products page)
    const catMount = qs("#categoryTiles");
    if (catMount) {
      const cats = Array.from(new Set(PRODUCTS.map((p) => p.category)));
      const tiles = cats.slice(0, 6).map((c) => categoryTile(c));
      catMount.innerHTML = tiles.join("");
    }

    // Testimonials (pull top reviews across products)
    const tMount = qs("#testimonials");
    if (tMount) {
      const snippets = [];
      for (const p of PRODUCTS) {
        for (const r of p.reviews || []) {
          snippets.push({ ...r, productName: p.name, productId: p.id });
        }
      }
      // deterministic "shuffle": sort by stars desc then name
      snippets.sort((a, b) => (b.stars - a.stars) || a.name.localeCompare(b.name));
      tMount.innerHTML = snippets.slice(0, 3).map((r) => testimonialCard(r)).join("");
    }

    // Remedies for cough/cold (demo curation)
    const remediesMount = qs("#remediesGrid");
    if (remediesMount) {
      const curated = PRODUCTS.filter((p) => {
        const cat = p.category || "";
        // Light heuristic based on common herbal store groupings.
        return cat === "Tea" || cat === "Honey" || cat === "Herbal Items" || cat === "Herbal";
      })
        .slice()
        .sort((a, b) => (b.rating - a.rating) || (b.reviewCount - a.reviewCount))
        .slice(0, 6);
      remediesMount.innerHTML = curated.map((p) => productCard(p)).join("");
    }

    // Recent posts (placeholder cards)
    const postsMount = qs("#postsGrid");
    if (postsMount) {
      const posts = [
        { title: "New Launches: Daily Herbal Combos", text: "Simple bundles to support your routine (demo content).", tag: "New Launch" },
        { title: "How to Use Herbal Seeds Safely", text: "Easy tips for daily use and storage (demo content).", tag: "Guide" },
        { title: "Tea & Honey: Calm Evening Ritual", text: "A gentle wind-down routine with warm water (demo content).", tag: "Wellness" },
      ];
      postsMount.innerHTML = posts
        .slice(0, 3)
        .map(
          (p) => `
          <article class="card product store-card" style="overflow:hidden;">
            <div class="img" style="aspect-ratio: 1/1; background-image: var(--cover-image); background-size: contain; background-repeat: no-repeat; background-position: center; background-color: rgba(251,246,234,.92);"></div>
            <div class="meta">
              <div class="row" style="gap:4px;">
                <span class="chip">${escapeXml(p.tag)}</span>
                <span class="spacer"></span>
              </div>
              <h3 class="title" style="margin:10px 0 0;">${escapeXml(p.title)}</h3>
              <p class="desc">${escapeXml(p.text)}</p>
              <div class="row" style="margin-top:4px;">
                <a class="btn small" href="contact.html">Read more</a>
              </div>
            </div>
          </article>
        `
        )
        .join("");
    }

    // Newsletter demo
    const newsletterForm = qs("#newsletterForm");
    if (newsletterForm) {
      newsletterForm.addEventListener("submit", (e) => {
        e.preventDefault();
        newsletterForm.reset();
        toast("Subscribed (demo)");
      });
    }

    // Quiz demo button
    const quizBtn = qs("#quizBtn");
    quizBtn?.addEventListener("click", () => toast("Quiz started (demo)"));
  }

  function initProducts() {
    const mount = qs("#productsGrid");
    if (!mount) return;

    const search = qs("#search");
    const category = qs("#category");
    const subcategory = qs("#subcategory");
    const sort = qs("#sort");

    const categories = ["All", ...Array.from(new Set(PRODUCTS.map((p) => p.category)))];
    if (category) {
      category.innerHTML = categories.map((c) => `<option value="${escapeXml(c)}">${escapeXml(c)}</option>`).join("");
    }

    // Prefill from URL params (used by homepage category tiles)
    const params = new URLSearchParams(location.search);
    const qParam = (params.get("q") || "").trim();
    const catParam = (params.get("category") || "").trim();
    const subParam = (params.get("subcategory") || "").trim();
    const sortParam = (params.get("sort") || "").trim();
    if (search && qParam) search.value = qParam;
    if (category && catParam && categories.includes(catParam)) category.value = catParam;
    if (sort && sortParam) sort.value = sortParam;

    function setSubcategoryOptions(catValue) {
      if (!subcategory) return;
      if (!catValue || catValue === "All") {
        subcategory.innerHTML = `<option value="All">All</option>`;
        subcategory.value = "All";
        subcategory.disabled = true;
        return;
      }
      const subs = Array.from(
        new Set(PRODUCTS.filter((p) => p.category === catValue).map((p) => p.subcategory).filter(Boolean))
      ).sort((a, b) => a.localeCompare(b));
      subcategory.innerHTML = [`<option value="All">All</option>`, ...subs.map((s) => `<option value="${escapeXml(s)}">${escapeXml(s)}</option>`)].join("");
      subcategory.disabled = subs.length === 0;
      if (subParam && subs.includes(subParam)) subcategory.value = subParam;
      else subcategory.value = "All";
    }

    setSubcategoryOptions(category?.value || "All");

    function run() {
      const q = (search?.value || "").trim().toLowerCase();
      const cat = category?.value || "All";
      const sub = subcategory?.value || "All";
      const s = sort?.value || "featured";

      let list = PRODUCTS.slice();
      if (cat !== "All") list = list.filter((p) => p.category === cat);
      if (sub !== "All") list = list.filter((p) => (p.subcategory || "") === sub);
      if (q) list = list.filter((p) => (p.name + " " + p.short + " " + p.description).toLowerCase().includes(q));

      if (s === "price-asc") list.sort((a, b) => priceFor(a) - priceFor(b));
      if (s === "price-desc") list.sort((a, b) => priceFor(b) - priceFor(a));
      if (s === "rating") list.sort((a, b) => b.rating - a.rating);

      mount.innerHTML = list.map((p) => productCard(p)).join("");
      const count = qs("#resultsCount");
      if (count) count.textContent = `${list.length} product${list.length === 1 ? "" : "s"}`;
    }

    if (category) {
      category.addEventListener("input", () => {
        setSubcategoryOptions(category.value);
        run();
      });
    }
    [search, subcategory, sort].forEach((el) => el && el.addEventListener("input", run));
    run();
  }

  function initProduct() {
    const mount = qs("#productMount");
    if (!mount) return;

    const params = new URLSearchParams(location.search);
    const id = params.get("id") || PRODUCTS[0]?.id;
    const product = PRODUCTS.find((p) => p.id === id) || PRODUCTS[0];

    document.title = `${product.name} • ${BUSINESS.name}`;

    const chips = product.tags.map((t) => `<span class="chip">${escapeXml(t)}</span>`).join(" ");
    const reviews = (product.reviews || []).map((r) => reviewCard(r)).join("");
    const ratingRow = `${renderStars(product.rating)} <span class="muted">(${product.reviewCount} reviews)</span>`;
    const effectivePrice = priceFor(product);
    const effectiveCompare = compareFor(product);

    mount.innerHTML = `
      <div class="two-col product-detail">
        <div class="card product">
          <div class="img">
            <img alt="${escapeXml(product.name)}" src="${productImageUrl(product)}"/>
          </div>
        </div>
        <div class="stack">
          <div class="card pad">
            <div class="row" style="gap:8px; align-items:flex-start; flex-wrap:wrap;">
              <div class="stack" style="gap:6px; flex:1 1 220px; min-width:0;">
                <h1 style="margin:0; line-height:1.15; letter-spacing:-0.4px; font-size:clamp(1.35rem, 5vw, 1.85rem);">${escapeXml(product.name)}</h1>
                <div class="row" style="gap:4px; flex-wrap:wrap;">${chips}</div>
                <div class="row" style="gap:4px; flex-wrap:wrap;">${ratingRow}</div>
              </div>
              <div class="stack buy-box" style="gap:8px; flex:1 1 200px;">
                <div class="row" style="justify-content:flex-start; gap:10px; flex-wrap:wrap;">
                  <div class="price" style="font-size:clamp(1.15rem, 4.5vw, 1.35rem);">${money(effectivePrice)}</div>
                  <div class="old-price">${money(effectiveCompare)}</div>
                </div>
                <button class="btn primary" data-add="${escapeXml(product.id)}">Add to cart</button>
                <a class="btn" href="cart.html">View cart</a>
              </div>
            </div>
            <div class="divider"></div>
            <p class="muted" style="margin:0;">${escapeXml(product.description)}</p>
            <div class="divider"></div>
            <div class="grid" style="gap:4px;">
              <div class="col-6">
                <div class="note">
                  <strong>Suggested use:</strong> Follow label directions. If you’re unsure, start with a smaller serving.
                </div>
              </div>
              <div class="col-6">
                <div class="note">
                  <strong>Shipping:</strong> Dispatch in 24–48 hours. Packed for freshness.
                </div>
              </div>
            </div>
          </div>

          <div class="card pad">
            <h2 style="margin:0 0 10px;">Customer reviews</h2>
            <p class="subhead">Real feedback from customers who purchased this product.</p>
            <div class="stack" style="gap:4px;">
              ${reviews || `<p class="muted" style="margin:0;">No reviews yet.</p>`}
            </div>
          </div>
        </div>
      </div>
    `;

    const more = qs("#moreGrid");
    if (more) {
      const also = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 6);
      more.innerHTML = also.map((p) => productCard(p)).join("");
    }
  }

  function initCart() {
    const mount = qs("#cartMount");
    if (!mount) return;

    function render() {
      const lines = cartLines();
      const empty = lines.length === 0;

      if (empty) {
        mount.innerHTML = `
          <div class="card pad">
            <h2 style="margin:0 0 8px;">Your cart is empty</h2>
            <p class="muted" style="margin:0 0 14px;">Browse products and add your favorites.</p>
            <a class="btn primary" href="products.html">Shop products</a>
          </div>
        `;
        return;
      }

      const subtotal = lines.reduce((s, l) => s + l.lineTotal, 0);
      const shipping = subtotal >= FREE_SHIPPING_MIN_PKR ? 0 : STANDARD_SHIPPING_PKR;
      const tax = subtotal * 0.06;
      const total = subtotal + shipping + tax;

      mount.innerHTML = `
        <div class="two-col">
          <div class="card pad">
            <h2 style="margin:0 0 10px;">Cart items</h2>
            <div class="table-wrap">
            <table class="table" aria-label="Cart table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th class="right">Price</th>
                  <th class="right">Qty</th>
                  <th class="right">Total</th>
                  <th class="right">Remove</th>
                </tr>
              </thead>
              <tbody>
                ${lines
                  .map(
                    (l) => `
                  <tr>
                    <td>
                      <div class="row" style="align-items:flex-start;">
                        <img src="${productImageUrl(l.product)}" alt="" width="64" height="64" style="border-radius:12px; border:1px solid rgba(23,59,45,.12); object-fit:contain; background:rgba(251,246,234,.9); flex-shrink:0;" />
                        <div class="stack" style="gap:4px;">
                          <div style="font-weight:800; letter-spacing:-0.2px;">${escapeXml(l.product.name)}</div>
                          <div class="muted" style="font-size:12px;">${escapeXml(l.product.short)}</div>
                          <a class="muted" href="product.html?id=${encodeURIComponent(l.product.id)}">View details</a>
                        </div>
                      </div>
                    </td>
                    <td class="right">${money(priceFor(l.product))}</td>
                    <td class="right">
                      <input class="input" style="max-width:92px; margin-left:auto;" type="number" min="1" step="1" value="${l.qty}" data-qty="${escapeXml(
                      l.product.id
                    )}" />
                    </td>
                    <td class="right" style="font-weight:850;">${money(l.lineTotal)}</td>
                    <td class="right">
                      <button class="btn danger small" data-remove="${escapeXml(l.product.id)}">Remove</button>
                    </td>
                  </tr>
                `
                  )
                  .join("")}
              </tbody>
            </table>
            </div>
            <div class="row" style="margin-top:8px;">
              <button class="btn" id="clearCart">Clear cart</button>
              <div class="spacer"></div>
              <a class="btn" href="products.html">Continue shopping</a>
            </div>
          </div>

          <div class="card pad">
            <h2 style="margin:0 0 10px;">Order summary</h2>
            <div class="stack" style="gap:4px;">
              <div class="row"><span class="muted">Subtotal</span><span class="spacer"></span><strong>${money(
                subtotal
              )}</strong></div>
              <div class="row"><span class="muted">Shipping</span><span class="spacer"></span><strong>${money(
                shipping
              )}</strong></div>
              <div class="row"><span class="muted">Estimated tax</span><span class="spacer"></span><strong>${money(
                tax
              )}</strong></div>
              <div class="divider"></div>
              <div class="row" style="font-size:18px;"><span>Total</span><span class="spacer"></span><strong>${money(
                total
              )}</strong></div>
              <p class="help" style="margin:0;">Free shipping on orders over ${money(FREE_SHIPPING_MIN_PKR)}.</p>
              <a class="btn primary" href="checkout.html">Proceed to checkout</a>
              <div class="alert">
                This is a demo checkout (no payment processor). You can connect Stripe/PayPal later.
              </div>
            </div>
          </div>
        </div>
      `;

      // bindings
      qsa("[data-qty]").forEach((input) => {
        input.addEventListener("change", () => {
          const id = input.getAttribute("data-qty");
          const qty = Math.max(1, Number(input.value || 1));
          setCartQty(id, qty);
          render();
        });
      });
      qsa("[data-remove]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const id = btn.getAttribute("data-remove");
          setCartQty(id, 0);
          toast("Removed");
          render();
        });
      });
      const clearBtn = qs("#clearCart");
      clearBtn?.addEventListener("click", () => {
        clearCart();
        toast("Cart cleared");
        render();
      });
    }

    render();
  }

  function initCheckout() {
    const mount = qs("#checkoutMount");
    if (!mount) return;

    const lines = cartLines();
    if (lines.length === 0) {
      mount.innerHTML = `
        <div class="card pad">
          <h2 style="margin:0 0 8px;">Your cart is empty</h2>
          <p class="muted" style="margin:0 0 14px;">Add items before checking out.</p>
          <a class="btn primary" href="products.html">Shop products</a>
        </div>
      `;
      return;
    }

    const subtotal = lines.reduce((s, l) => s + l.lineTotal, 0);
    const shipping = subtotal >= FREE_SHIPPING_MIN_PKR ? 0 : STANDARD_SHIPPING_PKR;
    const tax = subtotal * 0.06;
    const total = subtotal + shipping + tax;

    mount.innerHTML = `
      <div class="two-col">
        <form class="card pad" id="checkoutForm">
          <h2 style="margin:0 0 10px;">Checkout</h2>
          <p class="subhead">Enter delivery details. This demo will place a sample order and clear the cart.</p>

          <div class="grid" style="gap:4px;">
            <div class="col-6 field">
              <label for="fullName">Full name</label>
              <input class="input" id="fullName" name="fullName" autocomplete="name" required placeholder="e.g., Ali Khan"/>
            </div>
            <div class="col-6 field">
              <label for="phone">Phone</label>
              <input class="input" id="phone" name="phone" autocomplete="tel" required placeholder="e.g., +92 300 1234567"/>
            </div>
            <div class="col-12 field">
              <label for="email">Email</label>
              <input class="input" id="email" name="email" type="email" autocomplete="email" required placeholder="you@example.com"/>
              <p class="help">We send the order summary to this email (demo only).</p>
            </div>
            <div class="col-12 field">
              <label for="address">Address</label>
              <input class="input" id="address" name="address" autocomplete="street-address" required placeholder="Street, city, area"/>
            </div>
            <div class="col-6 field">
              <label for="city">City</label>
              <input class="input" id="city" name="city" autocomplete="address-level2" required placeholder="e.g., Lahore"/>
            </div>
            <div class="col-6 field">
              <label for="notes">Order notes (optional)</label>
              <input class="input" id="notes" name="notes" placeholder="Any delivery instructions?"/>
            </div>
          </div>

          <div class="divider"></div>
          <div class="row">
            <a class="btn" href="cart.html">Back to cart</a>
            <div class="spacer"></div>
            <button class="btn primary" type="submit">Place order • ${money(total)}</button>
          </div>
        </form>

        <div class="card pad">
          <h2 style="margin:0 0 10px;">Your items</h2>
          <div class="stack" style="gap:4px;">
            ${lines
              .map(
                (l) => `
              <div class="row" style="align-items:flex-start;">
                <img src="${productImageUrl(l.product)}" alt="" width="56" height="40" style="border-radius:12px; border:1px solid rgba(255,255,255,.14); object-fit:cover;" />
                <div class="stack" style="gap:2px;">
                  <div style="font-weight:800;">${escapeXml(l.product.name)} <span class="muted">× ${l.qty}</span></div>
                  <div class="muted" style="font-size:12px;">${escapeXml(l.product.category)} • ${escapeXml(l.product.strength)}</div>
                </div>
                <div class="spacer"></div>
                <strong>${money(l.lineTotal)}</strong>
              </div>
            `
              )
              .join("")}
            <div class="divider"></div>
            <div class="row"><span class="muted">Subtotal</span><span class="spacer"></span><strong>${money(
              subtotal
            )}</strong></div>
            <div class="row"><span class="muted">Shipping</span><span class="spacer"></span><strong>${money(
              shipping
            )}</strong></div>
            <div class="row"><span class="muted">Estimated tax</span><span class="spacer"></span><strong>${money(
              tax
            )}</strong></div>
            <div class="divider"></div>
            <div class="row" style="font-size:18px;"><span>Total</span><span class="spacer"></span><strong>${money(
              total
            )}</strong></div>
            <div class="alert">No payment is collected in this demo.</div>
          </div>
        </div>
      </div>
    `;

    const form = qs("#checkoutForm");
    form?.addEventListener("submit", (e) => {
      e.preventDefault();
      clearCart();
      toast("Order placed");
      setTimeout(() => (location.href = "thankyou.html"), 450);
    });
  }

  function initContact() {
    const form = qs("#contactForm");
    if (!form) return;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      form.reset();
      toast("Message sent (demo)");
    });
  }

  function productCard(p) {
    const chips = p.tags.slice(0, 2).map((t) => `<span class="chip">${escapeXml(t)}</span>`).join(" ");
    const effectivePrice = priceFor(p);
    const effectiveCompare = compareFor(p);
    return `
      <article class="card product store-card">
        <a href="product.html?id=${encodeURIComponent(p.id)}" style="display:block;">
          <div class="img">
            <img alt="${escapeXml(p.name)}" src="${productImageUrl(p)}" loading="lazy"/>
          </div>
          <div class="meta">
            <div class="row" style="gap:4px;">
              <h3 class="title">${escapeXml(p.name)}</h3>
              <div class="spacer"></div>
              ${renderStars(p.rating)}
            </div>
            <p class="desc">${escapeXml(p.short)}</p>
            <div class="chip-row">${chips}</div>
            <div class="price-row">
              <div class="price">${money(effectivePrice)}</div>
              <div class="old-price">${money(effectiveCompare)}</div>
              <div class="spacer"></div>
              <button class="btn primary small" type="button" data-add="${escapeXml(p.id)}">Add</button>
            </div>
          </div>
        </a>
      </article>
    `;
  }

  function initPricing() {
    const mount = qs("#pricingMount");
    if (!mount) return;

    const products = PRODUCTS.slice().sort((a, b) => a.name.localeCompare(b.name));
    const overrides = loadPriceOverrides();

    mount.innerHTML = `
      <div class="card pad">
        <h1 style="margin:0 0 10px; letter-spacing:-0.4px;">Pricing Control</h1>
        <p class="subhead" style="margin:0;">
          Update day-to-day prices from your phone. All amounts are in <strong>PKR</strong> (Pakistani Rupees). Prices update instantly for this browser (stored in localStorage).
        </p>
        <div class="divider"></div>

        <table class="table" aria-label="Pricing table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Category</th>
              <th>Subcategory</th>
              <th class="right">Price (PKR)</th>
              <th class="right">Compare at (PKR)</th>
            </tr>
          </thead>
          <tbody>
            ${products
              .map((p) => {
                const o = overrides?.[p.id] || {};
                const curPrice = typeof o.price === "number" ? o.price : p.price;
                const curCompare = typeof o.compareAt === "number" ? o.compareAt : p.compareAt;
                return `
                  <tr>
                    <td>
                      <div style="font-weight:850; letter-spacing:-0.2px;">${escapeXml(p.name)}</div>
                      <div class="muted" style="font-size:12px;">${escapeXml(p.short)}</div>
                    </td>
                    <td>${escapeXml(p.category)}</td>
                    <td>${escapeXml(p.subcategory || "-")}</td>
                    <td class="right">
                      <input class="input" style="max-width:120px; text-align:right;" type="number" step="1" min="0" value="${curPrice}" data-price="${escapeXml(p.id)}" aria-label="Price in PKR for ${escapeXml(p.name)}" />
                    </td>
                    <td class="right">
                      <input class="input" style="max-width:120px; text-align:right;" type="number" step="1" min="0" value="${curCompare}" data-compare="${escapeXml(p.id)}" aria-label="Compare at in PKR for ${escapeXml(p.name)}" />
                    </td>
                  </tr>
                `;
              })
              .join("")}
          </tbody>
        </table>

        <div class="row" style="margin-top:4px;">
          <button class="btn primary" id="savePricing" type="button">Save pricing</button>
          <div class="spacer"></div>
          <a class="btn" href="products.html">View shop</a>
        </div>

        <div class="alert" style="margin-top:4px;">
          Important: This demo uses localStorage. For shared, real pricing across all devices, connect a backend/admin dashboard.
        </div>
      </div>
    `;

    qs("#savePricing")?.addEventListener("click", () => {
      // Persist all edited values.
      for (const p of products) {
        const priceInput = qs(`[data-price="${p.id}"]`);
        const compareInput = qs(`[data-compare="${p.id}"]`);
        const nextPrice = Number(priceInput?.value);
        const nextCompare = Number(compareInput?.value);
        if (Number.isFinite(nextPrice) && nextPrice >= 0) setPriceOverride(p.id, { price: nextPrice });
        if (Number.isFinite(nextCompare) && nextCompare >= 0) setPriceOverride(p.id, { compareAt: nextCompare });
      }
      toast("Pricing updated");
      // Small delay so UI feels responsive.
      setTimeout(() => (location.href = "products.html"), 250);
    });
  }

  function initAddProduct() {
    const mount = qs("#addProductMount");
    if (!mount) return;

    // Keep UI text simple; pricing/images remain auto-generated.
    mount.innerHTML = `
      <div class="card pad">
        <h1 style="margin:0 0 10px; letter-spacing:-0.4px;">Add product</h1>
        <p class="subhead" style="margin:0;">
          Add a new item to your shop. This demo saves products in localStorage for this browser/device.
        </p>
        <div class="divider"></div>

        <form id="addProductForm" class="stack" style="gap:4px;">
          <div class="grid" style="gap:4px;">
            <div class="col-6 field">
              <label for="pName">Product name *</label>
              <input class="input" id="pName" name="pName" required placeholder="e.g., Herbal Tea Blend" />
            </div>
            <div class="col-6 field">
              <label for="pShort">Short description *</label>
              <input class="input" id="pShort" name="pShort" required placeholder="e.g., Calm evenings in every cup" />
            </div>

            <div class="col-12 field">
              <label for="pDesc">Full description *</label>
              <textarea class="input" id="pDesc" name="pDesc" rows="5" required placeholder="Explain ingredients, usage, and benefits..."></textarea>
            </div>

            <div class="col-6 field">
              <label for="pCategory">Category *</label>
              <input class="input" id="pCategory" name="pCategory" required placeholder="e.g., Herbal Items" />
            </div>
            <div class="col-6 field">
              <label for="pSubcategory">Subcategory</label>
              <input class="input" id="pSubcategory" name="pSubcategory" placeholder="e.g., Seeds" />
            </div>

            <div class="col-6 field">
              <label for="pPrice">Price (PKR) *</label>
              <input class="input" id="pPrice" name="pPrice" type="number" inputmode="numeric" step="1" min="0" required placeholder="e.g., 2500" />
            </div>
            <div class="col-6 field">
              <label for="pCompareAt">Compare at in PKR (optional)</label>
              <input class="input" id="pCompareAt" name="pCompareAt" type="number" inputmode="numeric" step="1" min="0" placeholder="(leave empty for same price)" />
            </div>

            <div class="col-12 field">
              <label for="pTags">Tags (comma separated)</label>
              <input class="input" id="pTags" name="pTags" placeholder="e.g., Bestseller, Pure, Pansar store" />
              <p class="help">Tags help customers quickly understand the product.</p>
            </div>
          </div>

          <div class="divider"></div>
          <div class="row">
            <a class="btn" href="products.html">Cancel</a>
            <div class="spacer"></div>
            <button class="btn primary" type="submit">Add to shop</button>
          </div>

          <div class="alert">
            Note: For real multi-device product management, connect a backend or admin system.
          </div>
        </form>
      </div>
    `;

    const form = qs("#addProductForm");
    form?.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = qs("#pName")?.value?.trim();
      const short = qs("#pShort")?.value?.trim();
      const description = qs("#pDesc")?.value?.trim();
      const category = qs("#pCategory")?.value?.trim();
      const subcategory = qs("#pSubcategory")?.value?.trim();
      const price = Number(qs("#pPrice")?.value);
      const compareAtRaw = qs("#pCompareAt")?.value;
      const compareAt = compareAtRaw === "" ? price : Number(compareAtRaw);
      const tagsRaw = qs("#pTags")?.value || "";
      const tags = tagsRaw
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean)
        .slice(0, 10);

      if (!name || !short || !description || !category || !Number.isFinite(price) || price < 0) {
        toast("Please fill all required fields.");
        return;
      }

      const userProducts = loadUserProducts();
      const id = makeProductId(name);

      userProducts.push({
        id,
        name,
        short,
        description,
        price,
        compareAt: Number.isFinite(compareAt) ? compareAt : price,
        category,
        subcategory,
        strength: "",
        rating: 0,
        reviewCount: 0,
        tags,
        reviews: [],
      });

      saveUserProducts(userProducts);
      toast("Product added");

      setTimeout(() => (location.href = `product.html?id=${encodeURIComponent(id)}`), 250);
    });
  }

  function categoryTile(categoryName) {
    const count = PRODUCTS.filter((p) => p.category === categoryName).length;
    const href = `products.html?category=${encodeURIComponent(categoryName)}`;
    return `
      <a class="tile" href="${href}" aria-label="Shop category ${escapeXml(categoryName)}">
        <div class="top">
          <div class="icon" aria-hidden="true"></div>
          <div class="stack" style="gap:4px;">
            <p class="title">${escapeXml(categoryName)}</p>
            <p class="text">${count} item${count === 1 ? "" : "s"} • Tap to browse</p>
          </div>
        </div>
        <div style="margin-top:4px;">
          <span class="chip">Explore</span>
        </div>
      </a>
    `;
  }

  function testimonialCard(r) {
    return `
      <div class="card soft" style="padding:8px; border-radius: 16px; border: 1px solid rgba(255,255,255,.12); background: rgba(255,255,255,.04);">
        <div class="row" style="gap:4px;">
          <strong>${escapeXml(r.name)}</strong>
          <span class="spacer"></span>
          ${renderStars(r.stars)}
        </div>
        <p class="muted" style="margin:10px 0 0;">${escapeXml(r.text)}</p>
        <div class="row" style="margin-top:4px;">
          <a class="muted" href="product.html?id=${encodeURIComponent(r.productId)}">On: ${escapeXml(r.productName)}</a>
          <span class="spacer"></span>
          <span class="chip">Verified-style</span>
        </div>
      </div>
    `;
  }

  function reviewCard(r) {
    const stars = renderStars(r.stars);
    return `
      <div class="card soft" style="padding:8px; border-radius: 16px;">
        <div class="row" style="gap:4px;">
          <strong>${escapeXml(r.name)}</strong>
          <span class="spacer"></span>
          ${stars}
        </div>
        <p class="muted" style="margin:10px 0 0;">${escapeXml(r.text)}</p>
      </div>
    `;
  }

  // Expose minimal API for debugging (optional)
  window.PANGY = { PRODUCTS, BASE_PRODUCTS, addToCart, loadCart, clearCart };
})();

