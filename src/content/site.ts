// -----------------------------------------------------------------------------
// PLACEHOLDER CONTENT — replace every value marked [ ... ] with real company data.
// No factual claims, statistics, certifications or partners are invented here.
// -----------------------------------------------------------------------------

import greenCoffeeImage from "@/assets/coffee-sample.png"
import greenCoffeeHeroImage from "@/assets/coffee-background.png"

import turmericProduct from "@/assets/turmeric-product.png"
import turmericHeroImage from "@/assets/turmeric-background.png"

import cinnamonProduct from "@/assets/Cinnamon.webp"
import cinnamonHeroImage from "@/assets/Cinnamon-background.png"

import piaromProduct from "@/assets/piarom-product.png"
import piaromHeroImage from "@/assets/piarom-background.png"

import zahidiProduct from "@/assets/zahidi-product.png"
import zahidiHeroImage from "@/assets/zahidi-background.png"

import mazafatiProduct from "@/assets/mazafati-product.png"
import mazafatiHeroImage from "@/assets/mazafati-background.png"

export const company = {
  name: "Orasia Trade",
  shortName: "Orasia",
  tagline: "International Trading | Import & Export",
  description:
    "Orasia Trade is an international trading company engaged in the sourcing, import, export, and distribution of selected products across global markets.",
  mission:
    "To build dependable trade relationships by connecting quality products with the right markets and creating sustainable value for our business partners.",
  address: "Sa'adat Abad, Tehran, Iran",
  phone: "+98 21 2676 1176",
  whatsapp: "+98 919 046 6275",
  email: "commercial@orasiatrade.com",
  website: "orasiatrade.com",
  hours: "Saturday – Thursday, 09:00 – 17:00",
  social: [
    { label: "LinkedIn", href: "https://www.linkedin.com/company/orasia-trade" },
    { label: "Instagram", href: "https://www.instagram.com/orasiatrade" },
  ] as { label: string; href: string }[],
};

export const activities = [
  {
    number: "01",
    title: "Import",
    body: "Sourcing and importing selected products from international suppliers.",
  },
  {
    number: "02",
    title: "Export",
    body: "Connecting quality products with international buyers and markets.",
  },
  {
    number: "03",
    title: "Sourcing",
    body: "Identifying suitable suppliers and products according to market requirements.",
  },
  {
    number: "04",
    title: "Trade & Distribution",
    body: "Facilitating reliable commercial relationships and product movement.",
  },
];

export const principles = [
  {
    title: "Reliability",
    body: "Consistent communication and dependable follow-through on commercial commitments.",
  },
  {
    title: "Quality",
    body: "Careful selection of products and suppliers against agreed requirements.",
  },
  {
    title: "Transparency",
    body: "Clear terms, clear documentation, and straightforward commercial dialogue.",
  },
  {
    title: "Long-Term Partnerships",
    body: "Relationships built to continue beyond a single shipment or transaction.",
  },
];

export type Product = {
  slug: string;
  name: string;
  category: string;
  trade: "import" | "export";
  summary: string;
  image: string;
  heroImage: string;
  origin: string;
  packaging: string;
};

// PLACEHOLDER catalogue. Replace names, categories and specifications with real data.
export const products: Product[] = [
  {
    slug: "import-product-01",
    name: "Green Coffee Beans",
    category: "Coffee & Beverages",
    trade: "import",
    summary: "Try our premium Green Coffee Beans! We offer delicious Arabica beans from Ethiopia and Colombia, as well as strong Robusta beans from Uganda, Indonesia, and Vietnam. Enjoy great flavors and high quality with our ethically sourced selections, perfect for your roasting adventures!",
    image: greenCoffeeImage,
    heroImage: greenCoffeeHeroImage,
    origin: "Ethiopia | Colombia | Uganda | Indonesia | Vietnam",
    formats: "Green Coffee Beans | Roasted Coffee Beans",
    packaging: "You can have our 300 g sample for free. Test and become our next permanent customer!",
    moq: "100 kg",
    specifications: "[Specifications to be provided]",
    certifications: "[Certifications to be provided]",
    notes: "[Additional information to be provided]",
  },
  {
    slug: "import-product-02",
    name: "Turmeric",
    category: "Spices & Herbs",
    trade: "import",
    summary: "Golden, earthy, and colorful — Turmeric is chosen for its bright hue and steady quality. A key ingredient for food producers, spice makers, and health-focused brands that need a reliable supplier, batch after batch.",
    image: turmericProduct,
    heroImage: turmericHeroImage,
    origin: "India",
    formats: "[Available formats]",
    packaging: "Request a free sample and see the color and aroma for yourself.",
    moq: "[Minimum order quantity]",
    specifications: "[Specifications to be provided]",
    certifications: "[Certifications to be provided]",
    notes: "[Additional information to be provided]",
  },
  {
    slug: "import-product-03",
    name: "Cinnamon",
    category: "Spices & Herbs",
    trade: "import",
    summary: "Warm, aromatic, and full of character — our Cinnamon is sourced from trusted growing regions known for their rich flavor and natural oil content. Whether you're stocking a spice line or supplying bakeries and beverage brands, we bring you a batch worth building a menu around.",
    image: cinnamonProduct,
    heroImage: cinnamonHeroImage,
    origin: "Sri Lanka | Indonesia | Vietnam",
    formats: "[Available formats]",
    packaging: "Ask us for a sample — taste and smell the difference before you commit to a full order.",
    moq: "[Minimum order quantity]",
    specifications: "[Specifications to be provided]",
    certifications: "[Certifications to be provided]",
    notes: "[Additional information to be provided]",
  },
  {
    slug: "export-product-01",
    name: "Piarom Dates",
    category: "Dried Fruits",
    trade: "export",
    summary: "Slim, dark, and prized for their rich, semi-dry sweetness — Piarom dates are one of Iran's most popular types of dates in Iran. Naturally low in moisture and free from added sugar, they're a favorite for buyers looking for a premium, gift-worthy date.",
    image: piaromProduct,
    heroImage: piaromHeroImage,
    origin: "Iran",
    formats: "Whole Dates",
    packaging: "[Packaging details]",
    moq: "[Minimum order quantity]",
    specifications: "[Specifications to be provided]",
    certifications: "[Certifications to be provided]",
    notes: "[Additional information to be provided]",
  },
  {
    slug: "export-product-02",
    name: "Zahedi Dates",
    category: "Dried Fruits",
    trade: "export",
    summary: "Firm, semi-dry, and wonderfully versatile — Zahedi dates hold their shape and texture well, making them a reliable choice for both direct consumption and food processing. A dependable everyday variety trusted by buyers across the world.",
    image: zahidiProduct,
    heroImage: zahidiHeroImage,
    origin: "Iran",
    formats: "[Available formats]",
    packaging: "[Packaging details]",
    moq: "[Minimum order quantity]",
    specifications: "[Specifications to be provided]",
    certifications: "[Certifications to be provided]",
    notes: "[Additional information to be provided]",
  },
  {
    slug: "export-product-03",
    name: "Mazafati Dates",
    category: "Dried Fruits",
    trade: "export",
    summary: "Soft, moist, and deeply sweet — Mazafati is one of Iran's most loved date varieties, known for its dark color and melt-in-your-mouth texture. This is a great choice for buyers who want a product that feels luxurious right away.",
    image: mazafatiProduct,
    heroImage: mazafatiHeroImage,
    origin: "Iran",
    formats: "[Available formats]",
    packaging: "[Packaging details]",
    moq: "[Minimum order quantity]",
    specifications: "[Specifications to be provided]",
    certifications: "[Certifications to be provided]",
    notes: "[Additional information to be provided]",
  },
];

export const navigation = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Contact", to: "/contact" },
] as const;
