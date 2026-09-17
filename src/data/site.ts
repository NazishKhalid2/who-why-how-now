import lineupAsset from "@/assets/aquatru-lineup-2.png.asset.json";
import whatsInWaterAsset from "@/assets/whats-in-your-water.jpg.asset.json";
import whatsLurkingAsset from "@/assets/whats-lurking.jpg.asset.json";
import contaminantsAsset from "@/assets/contaminants.jpg.asset.json";

const heroImg = lineupAsset.url;

export const images = { heroImg };

export type Product = {
  id: string;
  name: string;
  category: "Residential" | "Commercial" | "Spare Parts";
  tagline: string;
  description: string;
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
      "An under-sink reverse osmosis system that reduces dissolved solids, chlorine, heavy metals and microorganisms, delivering clear, great-tasting water from a dedicated drinking-water faucet.",
    price: "From AED 1,450",
    specs: [
      {
        label: "Filtration stages",
        value: "6 (sediment, carbon x2, RO membrane, post-carbon, mineralizer)",
      },
      { label: "Daily capacity", value: "280 litres / day" },
      { label: "Tank", value: "12 L pressurized storage" },
      { label: "Installation", value: "Under-sink, single visit" },
    ],
  },
  {
    id: "aqua-home-uv",
    name: "AquaHome UV + RO Purifier",
    category: "Residential",
    tagline: "RO purification with UV sterilization.",
    description:
      "Adds a UV chamber to the 6-stage platform to neutralize bacteria and viruses. Suited to villas and homes supplied from storage tanks.",
    price: "From AED 1,950",
    specs: [
      { label: "Filtration stages", value: "7 (incl. UV sterilizer)" },
      { label: "Daily capacity", value: "300 litres / day" },
      { label: "Indicators", value: "Filter-life and lamp indicator" },
      { label: "Installation", value: "Under-sink, single visit" },
    ],
  },
  {
    id: "villa-softener",
    name: "VillaGuard Whole-House Softener",
    category: "Residential",
    tagline: "Protect every tap, appliance and pipe in your villa.",
    description:
      "A whole-house softening and filtration station that reduces hardness scale, protects water heaters and improves how water feels on skin and hair.",
    price: "From AED 4,800",
    specs: [
      { label: "Flow rate", value: "Up to 2,500 L/h" },
      { label: "Resin", value: "High-capacity food-grade cation resin" },
      { label: "Control", value: "Automatic digital valve" },
      { label: "Footprint", value: "Compact cabinet, outdoor rated" },
    ],
  },
  {
    id: "commercial-ro-1000",
    name: "ProFlow 1000 Commercial RO Plant",
    category: "Commercial",
    tagline: "1,000 GPD turnkey plant for restaurants and offices.",
    description:
      "Built for cafes, restaurants, clinics and offices. Stainless-steel frame, TFC membranes and digital TDS monitoring.",
    price: "Contact for pricing",
    specs: [
      { label: "Capacity", value: "1,000 GPD (about 3,800 L/day)" },
      { label: "Membranes", value: "4 x 4040 TFC" },
      { label: "Recovery", value: "50 to 60%" },
      { label: "Monitoring", value: "Digital TDS and flow panel" },
    ],
  },
  {
    id: "commercial-ro-5000",
    name: "ProFlow 5000 Industrial RO Plant",
    category: "Commercial",
    tagline: "Industrial-scale purification for facilities and accommodation.",
    description:
      "A skid-mounted industrial plant for hotels, schools, staff accommodation and light industry, installed and maintained by our own team.",
    price: "Contact for pricing",
    specs: [
      { label: "Capacity", value: "5,000 GPD (about 19,000 L/day)" },
      { label: "Pre-treatment", value: "Multimedia, softener and dosing" },
      { label: "PLC control", value: "Auto flush, low-pressure protection" },
      { label: "Service", value: "Maintenance plans available" },
    ],
  },
  {
    id: "filter-cartridge-set",
    name: "Annual Filter Cartridge Set",
    category: "Spare Parts",
    tagline: "Complete replacement set for 5 and 6 stage systems.",
    description:
      "Sediment, carbon block and post-carbon cartridges matched to your system. Replace annually for consistent performance and taste.",
    price: "From AED 220",
    specs: [
      { label: "Includes", value: "Sediment, GAC, CTO, post-carbon" },
      { label: "Compatibility", value: 'Standard 10" housings' },
      { label: "Service option", value: "Fitting available with a maintenance plan" },
    ],
  },
  {
    id: "ro-membrane-75gpd",
    name: "RO Membrane 75 GPD",
    category: "Spare Parts",
    tagline: "High-rejection TFC membrane, the heart of your RO.",
    description:
      "Thin-film composite membrane with stable salt rejection. Typical replacement interval is around 24 months, depending on feed water.",
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
      "Quick-connect fittings, ball valves and food-grade tubing for leak-free installations and repairs.",
    price: "From AED 60",
    specs: [
      { label: "Material", value: "Food-grade POM / PE" },
      { label: "Sizes", value: '1/4" and 3/8"' },
    ],
  },
];

export const faqs = [
  {
    q: "Is tap water in the UAE safe to drink?",
    a: "Municipal water meets safety standards at the source, but it travels through building pipes and storage tanks that can introduce sediment, chlorine by-products and microbial growth. An RO or whole-house system treats the water at the point of use.",
  },
  {
    q: "How often do filters and membranes need replacement?",
    a: "Pre-filters every 6 to 12 months, post-carbon annually, and RO membranes roughly every 24 months, depending on usage and feed-water quality. Maintenance plans cover these replacements for you.",
  },
  {
    q: "How long does installation take?",
    a: "A standard under-sink RO system takes about 60 to 90 minutes. Whole-house and commercial plants are typically installed within one working day, scheduled at your convenience.",
  },
  {
    q: "Do you offer free water testing?",
    a: "Yes. Every free consultation includes an on-site TDS and chlorine test so we can recommend a system that matches your actual water.",
  },
  {
    q: "When can I reach you?",
    a: "We are open 7 days a week from 8:00 AM to 9:00 PM. Call or WhatsApp 050-7183290, or email sales.aquatru@gmail.com.",
  },
  {
    q: "Which areas do you serve?",
    a: "We serve homes and businesses across the UAE from our base in Al Muteena, Deira, Dubai.",
  },
];

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image?: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "whats-in-your-water",
    title: "What's In Your Water? The Hidden Minerals You Drink Every Day",
    excerpt:
      "The minerals in your water and how they affect daily life, from harmless calcium to the compounds you would rather filter out.",
    date: "2026-09-02",
    author: "MENA AQUA Tru",
    image: whatsInWaterAsset.url,
    body: [
      "Every glass of water carries more than H2O. Dissolved minerals, salts, treatment by-products and traces of whatever your building's pipework contributes all travel with it. Some of that is useful: calcium and magnesium give water its clean, rounded taste.",
      "Other passengers are less welcome. Chlorine and its by-products, added to keep municipal water microbiologically safe, affect taste and odour. Sediment picked up in older pipes and rooftop tanks carries a metallic edge. In hard-water areas, the same minerals that taste pleasant leave scale on kettles, glassware and water heaters.",
      "The point is not to fear your water, it is to know it. A short on-site test tells you your TDS, hardness and chlorine levels, and from there the right system is an evidence-based decision. Book a free water test and we will show you what is in your glass.",
    ],
  },
  {
    slug: "whats-lurking-in-your-water",
    title: "What's Lurking In Your Water: Physical, Chemical & Biological Contaminants",
    excerpt:
      "Chlorine, lead, fluoride, pesticides, arsenic, sediment, nitrates and mercury: the contaminant groups every UAE household should understand.",
    date: "2026-08-28",
    author: "MENA AQUA Tru",
    image: whatsLurkingAsset.url,
    body: [
      "Water contamination falls into three families. Physical contaminants are the ones you can often see or feel: sediment, rust particles and cloudiness from tank build-up. Chemical contaminants such as chlorine, fluoride, nitrates and pesticides are invisible and only show up in testing. Biological contaminants are living organisms that thrive in warm, stagnant storage.",
      "Heavy metals deserve their own mention. Lead, mercury and arsenic can leach from ageing plumbing and fittings, and they accumulate in the body over time rather than passing through. Nitrates matter most for infants and pregnant women. None of these change the taste of your water, which is why they go unnoticed.",
      "A properly specified reverse osmosis system reduces dissolved solids, including heavy metals and chemical residues, while UV sterilization addresses the biological side. Start with a free test so the system you buy matches the contaminants you actually have.",
    ],
  },
  {
    slug: "biological-and-heavy-metal-contaminants",
    title: "Biological & Heavy Metal Contaminants: Is Your Water Truly Safe?",
    excerpt:
      "Bacteria, viruses and parasites on one side; lead, mercury, cadmium, chromium-6 and copper on the other. What each one does and how to stop it.",
    date: "2026-08-24",
    author: "MENA AQUA Tru",
    image: contaminantsAsset.url,
    body: [
      "On the biological side, three groups matter. Bacteria such as E. coli, Salmonella and Legionella can multiply in warm storage tanks. Viruses including Norovirus, Hepatitis A and Rotavirus survive in water and require very low doses to cause illness. Parasites like Giardia and Cryptosporidium are chlorine-resistant, which makes physical and UV barriers important.",
      "Heavy metals are the slower threat. Lead affects the brain and kidneys. Mercury harms the nervous system. Cadmium is linked to kidney disease. Chromium-6 is a known carcinogen. Copper, in excess, causes liver damage. All five can enter drinking water through corroding pipework, fittings and solder rather than at the treatment plant.",
      "A multi-stage RO system with a UV chamber addresses both families at once: the membrane rejects dissolved metals, and UV neutralizes anything living that reaches it. Ask us for an on-site assessment and we will tell you honestly whether you need one, both, or neither.",
    ],
  },
  {
    slug: "uae-water-tds-explained",
    title: "What TDS Really Means for Your Family's Water in the UAE",
    excerpt:
      "Total Dissolved Solids is the number on every water report. Here is what it is, what it is not, and the range you want at your tap.",
    date: "2026-08-18",
    author: "MENA AQUA Tru",
    body: [
      "Total Dissolved Solids (TDS) measures everything dissolved in a litre of your water, including minerals, salts and metals, in milligrams per litre. Desalinated water typically leaves the plant at a low reading, but by the time it reaches your tap through building tanks and pipes, readings are often much higher.",
      "TDS itself is not a direct safety measure: calcium and magnesium raise it harmlessly, while some contaminants do not raise it at all. What it does tell you is whether your purification system is working. A healthy RO system delivers a low reading with a clean taste and a pleasant mineral balance.",
      "During every free consultation we test your tap water on-site and show you the before and after numbers, so the performance of your system is on the meter rather than a matter of trust.",
    ],
  },
  {
    slug: "ro-vs-uv-vs-softener",
    title: "RO vs UV vs Softener: Which System Does Your Home Need?",
    excerpt:
      "Reverse osmosis, ultraviolet sterilization and water softening solve three different problems. A plain guide to choosing the right combination.",
    date: "2026-07-30",
    author: "MENA AQUA Tru",
    image: heroImg,
    body: [
      "Reverse osmosis reduces dissolved solids, chlorine, heavy metals and most microorganisms, which makes it the right answer for drinking and cooking water. UV sterilization neutralizes bacteria and viruses but removes nothing physical, making it a useful addition where storage tanks are involved. Softeners do not purify at all: they remove hardness minerals that scale your pipes, heaters and fixtures.",
      "For most UAE apartments, a 6-stage under-sink RO is the sensible starting point. Villas with rooftop tanks benefit from adding UV, and homes dealing with limescale on glass and fixtures should consider a whole-house softener upstream of everything else.",
      "The honest answer is that it depends on your water, which is why we start with a free test rather than a sales pitch.",
    ],
  },
  {
    slug: "water-tank-cleaning-importance",
    title: "The Hidden Risk in Your Building's Water Tank",
    excerpt:
      "What accumulates in an unmaintained water tank, and how point-of-use purification protects you either way.",
    date: "2026-06-22",
    author: "MENA AQUA Tru",
    body: [
      "Heat, dust and time are unkind to stored water. Sediment settles, chlorine dissipates, and biofilm can develop on tank walls, especially in rooftop tanks exposed to the UAE summer. Regular professional cleaning and disinfection is recommended, but practice varies widely between buildings.",
      "Even with diligent tank maintenance, water quality can fluctuate between cleaning cycles. A point-of-use RO system acts as a final barrier: whatever happens upstream, the water at your glass is consistent and tested.",
      "Ask your building management for the last tank-cleaning certificate, and book a free water test with us to see what is actually reaching your tap.",
    ],
  },
];
