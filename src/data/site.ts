import lineupAsset from "@/assets/aquatru-lineup-2.png.asset.json";
import whatsInWaterAsset from "@/assets/whats-in-your-water.jpg.asset.json";
import whatsLurkingAsset from "@/assets/whats-lurking.jpg.asset.json";
import contaminantsAsset from "@/assets/contaminants.jpg.asset.json";
import residentialImg from "@/assets/product-residential.jpg";
import commercialImg from "@/assets/product-commercial.jpg";
import partsImg from "@/assets/product-parts.jpg";
import aboutImg from "@/assets/about.jpg";

const heroImg = lineupAsset.url;

export const images = { heroImg, residentialImg, commercialImg, partsImg, aboutImg };

export type Product = {
  id: string;
  name: string;
  category: "Residential" | "Commercial" | "Spare Parts";
  tagline: string;
  description: string;
  image: string;
  price: string;
  specs: { label: string; value: string }[];
};

export const products: Product[] = [
  {
    id: "aqua-home-6stage",
    name: "AquaHome 6-Stage RO System",
    category: "Residential",
    tagline: "Under-sink reverse osmosis for family drinking water.",
    description:
      "Our best-selling residential system removes up to 99% of dissolved solids, chlorine, heavy metals and microorganisms — delivering crisp, great-tasting water straight from a dedicated designer faucet.",
    image: residentialImg,
    price: "From AED 1,450",
    specs: [
      { label: "Filtration stages", value: "6 (sediment, carbon x2, RO membrane, post-carbon, mineralizer)" },
      { label: "Daily capacity", value: "280 litres / day" },
      { label: "TDS rejection", value: "Up to 99%" },
      { label: "Tank", value: "12 L pressurized storage" },
      { label: "Warranty", value: "2 years, on-site" },
    ],
  },
  {
    id: "aqua-home-uv",
    name: "AquaHome UV + RO Purifier",
    category: "Residential",
    tagline: "RO purification with UV sterilization for total safety.",
    description:
      "Adds a pharmaceutical-grade UV chamber to our 6-stage platform, neutralizing bacteria and viruses — ideal for villas and homes with storage tanks.",
    image: residentialImg,
    price: "From AED 1,950",
    specs: [
      { label: "Filtration stages", value: "7 (incl. UV sterilizer)" },
      { label: "Daily capacity", value: "300 litres / day" },
      { label: "UV dose", value: "30 mJ/cm²" },
      { label: "Smart alerts", value: "Filter-life & lamp indicator" },
      { label: "Warranty", value: "2 years, on-site" },
    ],
  },
  {
    id: "villa-softener",
    name: "VillaGuard Whole-House Softener",
    category: "Residential",
    tagline: "Protect every tap, appliance and pipe in your villa.",
    description:
      "A whole-house softening and filtration station that eliminates hardness scale, protects water heaters and leaves skin and hair noticeably softer.",
    image: aboutImg,
    price: "From AED 4,800",
    specs: [
      { label: "Flow rate", value: "Up to 2,500 L/h" },
      { label: "Resin", value: "High-capacity food-grade cation resin" },
      { label: "Control", value: "Automatic digital valve" },
      { label: "Footprint", value: "Compact cabinet, outdoor rated" },
      { label: "Warranty", value: "3 years" },
    ],
  },
  {
    id: "commercial-ro-1000",
    name: "ProFlow 1000 Commercial RO Plant",
    category: "Commercial",
    tagline: "1,000 GPD turnkey plant for restaurants and offices.",
    description:
      "Engineered for cafés, restaurants, clinics and offices. Stainless-steel frame, TFC membranes and digital TDS monitoring keep your business running on pure water.",
    image: commercialImg,
    price: "Contact for pricing",
    specs: [
      { label: "Capacity", value: "1,000 GPD (~3,800 L/day)" },
      { label: "Membranes", value: "4 × 4040 TFC" },
      { label: "Recovery", value: "50–60%" },
      { label: "Monitoring", value: "Digital TDS + flow panel" },
      { label: "Warranty", value: "1 year, AMC available" },
    ],
  },
  {
    id: "commercial-ro-5000",
    name: "ProFlow 5000 Industrial RO Plant",
    category: "Commercial",
    tagline: "Industrial-scale purification for facilities and labor camps.",
    description:
      "A skid-mounted industrial plant serving hotels, schools, labor accommodation and light industry — designed, installed and maintained by our in-house engineering team.",
    image: commercialImg,
    price: "Contact for pricing",
    specs: [
      { label: "Capacity", value: "5,000 GPD (~19,000 L/day)" },
      { label: "Pre-treatment", value: "Multimedia + softener + dosing" },
      { label: "PLC control", value: "Auto flush, low-pressure protection" },
      { label: "Compliance", value: "Dubai Municipality potable standards" },
      { label: "Warranty", value: "1 year, AMC available" },
    ],
  },
  {
    id: "filter-cartridge-set",
    name: "Annual Filter Cartridge Set",
    category: "Spare Parts",
    tagline: "Complete genuine replacement set for 5–6 stage systems.",
    description:
      "Genuine sediment, carbon block and post-carbon cartridges matched to your system. Replace annually for peak performance and taste.",
    image: partsImg,
    price: "From AED 220",
    specs: [
      { label: "Includes", value: "Sediment, GAC, CTO, post-carbon" },
      { label: "Compatibility", value: 'Standard 10" housings' },
      { label: "Service option", value: "Free fitting with any AMC plan" },
    ],
  },
  {
    id: "ro-membrane-75gpd",
    name: "RO Membrane 75 GPD",
    category: "Spare Parts",
    tagline: "High-rejection TFC membrane, the heart of your RO.",
    description:
      "Premium thin-film composite membrane with stable salt rejection and long service life. Recommended replacement every 24 months.",
    image: partsImg,
    price: "From AED 180",
    specs: [
      { label: "Capacity", value: "75 GPD" },
      { label: "Rejection", value: "98% stabilized" },
      { label: "Life", value: "24 months (typical)" },
    ],
  },
  {
    id: "fittings-connectors",
    name: "Fittings & Connectors Kit",
    category: "Spare Parts",
    tagline: "Food-grade quick-connect fittings, valves and tubing.",
    description:
      "Everything a technician needs for leak-free installs and repairs — John Guest-style quick fittings, ball valves, and NSF-certified tubing.",
    image: partsImg,
    price: "From AED 60",
    specs: [
      { label: "Material", value: "Food-grade POM / PE" },
      { label: "Certification", value: "NSF / FDA compliant" },
      { label: "Sizes", value: '1/4" and 3/8"' },
    ],
  },
];

export const testimonials = [
  {
    name: "Fatima Al Mansoori",
    location: "Arabian Ranches, Dubai",
    quote:
      "The team tested our villa's water, explained everything clearly, and installed the whole-house system in one morning. The difference in taste — and on our skin — was immediate.",
    rating: 5,
  },
  {
    name: "Rajan Menon",
    location: "Restaurant Owner, Sharjah",
    quote:
      "Our café runs on the ProFlow plant. Two years, zero downtime, and their AMC team just shows up before filters are due. Completely hassle-free.",
    rating: 5,
  },
  {
    name: "Sarah Whitfield",
    location: "Jumeirah Lake Towers, Dubai",
    quote:
      "Booked a free consultation on WhatsApp, installation happened the next day. Transparent pricing, tidy work, and the water tastes incredible.",
    rating: 5,
  },
  {
    name: "Ahmed Hassan",
    location: "Facility Manager, Abu Dhabi",
    quote:
      "They maintain the RO plants across three of our buildings. Reports are on time, response is fast, and water quality tests pass every single time.",
    rating: 5,
  },
];

export const faqs = [
  {
    q: "Is tap water in the UAE safe to drink?",
    a: "Municipal water meets safety standards at the source, but it travels through building pipes and storage tanks that can introduce sediment, chlorine by-products and microbial growth. A certified RO or whole-house system guarantees quality at the point of use.",
  },
  {
    q: "How often do filters and membranes need replacement?",
    a: "Pre-filters every 6–12 months, post-carbon annually, and RO membranes roughly every 24 months — depending on usage and feed-water quality. Our AMC plans handle all replacements automatically.",
  },
  {
    q: "How long does installation take?",
    a: "A standard under-sink RO system takes 60–90 minutes. Whole-house and commercial plants are typically installed within one working day, scheduled at your convenience.",
  },
  {
    q: "Do you offer free water testing?",
    a: "Yes. Every free consultation includes an on-site TDS and chlorine test so we can recommend the right system for your actual water — not a one-size-fits-all package.",
  },
  {
    q: "What warranty and support do you provide?",
    a: "Residential systems carry a 2-year on-site warranty (3 years for whole-house stations). Our support line and WhatsApp are answered 24/7, with same-day technician dispatch across the UAE.",
  },
  {
    q: "Which areas do you serve?",
    a: "We cover Dubai, Sharjah, Ajman, Abu Dhabi and the Northern Emirates, with installation teams based in Dubai and Abu Dhabi.",
  },
];

export const posts = [
  {
    slug: "whats-in-your-water",
    title: "What's In Your Water? The Hidden Minerals You Drink Every Day",
    excerpt:
      "Discover the hidden minerals in your water and how they affect your health every day — from harmless calcium to the compounds you'd rather filter out.",
    date: "2026-09-02",
    author: "Eng. Omar Khalid",
    image: whatsInWaterAsset.url,
    body: [
      "Every glass of water you drink carries more than H2O. Dissolved minerals, salts, treatment by-products and traces of whatever your building's pipework contributes all travel with it. Some of that is good for you: calcium and magnesium give water its clean, rounded taste and contribute to daily mineral intake.",
      "Other passengers are less welcome. Chlorine and its by-products, added to keep municipal water microbiologically safe, affect taste and odour. Sediment picked up in older pipes and rooftop tanks carries a metallic edge. And in hard-water areas the same minerals that taste pleasant leave scale on kettles, glassware and water heaters.",
      "The point isn't to fear your water — it's to know it. A two-minute on-site test tells you your TDS, hardness and chlorine levels, and from there the right system is an easy, evidence-based decision. Book a free water test and we'll show you exactly what's in your glass.",
    ],
  },
  {
    slug: "whats-lurking-in-your-water",
    title: "What's Lurking In Your Water: Physical, Chemical & Biological Contaminants",
    excerpt:
      "Chlorine, lead, fluoride, pesticides, arsenic, sediment, nitrates and mercury — the eight contaminant groups every UAE household should understand.",
    date: "2026-08-28",
    author: "Aisha Rahman",
    image: whatsLurkingAsset.url,
    body: [
      "Water contamination falls into three families. Physical contaminants are the ones you can often see or feel: sediment, rust particles and cloudiness from tank build-up. Chemical contaminants — chlorine, fluoride, nitrates, pesticides — are invisible and only show up in testing. Biological contaminants are living organisms: bacteria, viruses and parasites that thrive in warm, stagnant storage.",
      "Heavy metals deserve their own mention. Lead, mercury and arsenic can leach from ageing plumbing and fittings, and they accumulate in the body over time rather than passing through. Nitrates matter most for infants and pregnant women. None of these change the taste of your water, which is precisely why they go unnoticed.",
      "A properly specified reverse osmosis system removes up to 99% of dissolved solids, including the heavy metals and chemical residues on this list, while UV sterilization handles the biological side. Protect your family today — start with a free test so the system you buy matches the contaminants you actually have.",
    ],
  },
  {
    slug: "biological-and-heavy-metal-contaminants",
    title: "Biological & Heavy Metal Contaminants: Is Your Water Truly Safe?",
    excerpt:
      "Bacteria, viruses and parasites on one side; lead, mercury, cadmium, chromium-6 and copper on the other. Here's what each one does and how to stop it.",
    date: "2026-08-24",
    author: "Eng. Omar Khalid",
    image: contaminantsAsset.url,
    body: [
      "On the biological side, three groups matter. Bacteria such as E. coli, Salmonella and Legionella can multiply in warm storage tanks. Viruses including Norovirus, Hepatitis A and Rotavirus survive in water and require very low doses to cause illness. Parasites like Giardia and Cryptosporidium are chlorine-resistant, which makes physical and UV barriers essential.",
      "Heavy metals are the slower threat. Lead damages the brain and kidneys. Mercury harms the nervous system. Cadmium is linked to kidney disease. Chromium-6 is a known carcinogen. Copper, in excess, causes liver damage. All five can enter drinking water through corroding pipework, fittings and solder rather than at the treatment plant.",
      "The good news: a multi-stage RO system with a UV chamber addresses both families at once — the membrane rejects dissolved metals, and UV neutralizes anything living that reaches it. Ask us for an on-site assessment and we'll tell you honestly whether you need one, both, or neither.",
    ],
  },
  {
    slug: "uae-water-tds-explained",
    title: "What TDS Really Means for Your Family's Water in the UAE",
    excerpt:
      "Total Dissolved Solids is the number on every water report — here's what it is, what it isn't, and the range you actually want at your tap.",
    date: "2026-08-18",
    author: "Eng. Omar Khalid",
    image: residentialImg,
    body: [
      "Total Dissolved Solids (TDS) measures everything dissolved in a litre of your water — minerals, salts, and metals — in milligrams per litre. UAE desalinated water typically leaves the plant between 100–200 mg/L, but by the time it reaches your tap through building tanks and pipes, readings of 300–600 mg/L are common.",
      "TDS itself isn't a direct safety measure: calcium and magnesium raise it harmlessly, while some contaminants don't raise it at all. What it does tell you is whether your purification system is working. A healthy RO system should deliver 50–150 mg/L — low enough for a crisp, clean taste, high enough to retain a pleasant mineral balance.",
      "During every free consultation we test your tap water on-site and show you the before-and-after numbers, so the performance of your system is never a matter of faith — it's on the meter.",
    ],
  },
  {
    slug: "ro-vs-uv-vs-softener",
    title: "RO vs UV vs Softener: Which System Does Your Home Need?",
    excerpt:
      "Reverse osmosis, ultraviolet sterilization and water softening solve three different problems. Here's a plain-English guide to choosing the right combination.",
    date: "2026-07-30",
    author: "Aisha Rahman",
    image: heroImg,
    body: [
      "Reverse osmosis removes dissolved solids, chlorine, heavy metals and most microorganisms — it's the right answer for drinking and cooking water. UV sterilization kills bacteria and viruses but removes nothing physical, making it a powerful add-on where storage tanks are involved. Softeners don't purify at all: they remove hardness minerals that scale your pipes, heaters and fixtures.",
      "For most UAE apartments, a 6-stage under-sink RO is the sweet spot. Villas with rooftop tanks benefit from adding UV, and homes battling limescale on glass and fixtures should consider a whole-house softener upstream of everything else.",
      "The honest answer is that it depends on your water — which is why we always start with a free test rather than a sales pitch.",
    ],
  },
  {
    slug: "water-tank-cleaning-importance",
    title: "The Hidden Risk in Your Building's Water Tank",
    excerpt:
      "Dubai Municipality recommends tank cleaning every six months. Here's what accumulates in an unmaintained tank — and how point-of-use purification protects you either way.",
    date: "2026-06-22",
    author: "Eng. Omar Khalid",
    image: aboutImg,
    body: [
      "Heat, dust and time are unkind to stored water. Sediment settles, chlorine dissipates, and biofilm can develop on tank walls — especially in rooftop tanks exposed to the UAE summer. Municipality guidelines call for professional cleaning and disinfection every six months, but compliance varies widely between buildings.",
      "Even with diligent tank maintenance, water quality can fluctuate between cleaning cycles. A point-of-use RO system acts as your final barrier: whatever happens upstream, the water at your glass is consistent, tested and pure.",
      "Ask your building management for the last tank-cleaning certificate — and book a free water test with us to see what's actually reaching your tap.",
    ],
  },
];
