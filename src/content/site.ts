// -----------------------------------------------------------------------------
// Structural / non-translatable data only. All display text (names, summaries,
// labels, page copy) lives in src/i18n/translations.ts so the site can be
// bilingual without duplicating content in two places.
// -----------------------------------------------------------------------------

import greenCoffeeImage from "@/assets/coffee-sample.png";
import greenCoffeeHeroImage from "@/assets/coffee-background.png";

import turmericProduct from "@/assets/turmeric-product.png";
import turmericHeroImage from "@/assets/turmeric-background.png";

import cinnamonProduct from "@/assets/Cinnamon.webp";
import cinnamonHeroImage from "@/assets/Cinnamon-background.png";

import piaromProduct from "@/assets/piarom-product.png";
import piaromHeroImage from "@/assets/piarom-background.png";

import zahidiProduct from "@/assets/zahidi-product.jpg";
import zahidiHeroImage from "@/assets/zahidi-background.png";

import mazafatiProduct from "@/assets/mazafati-product.jpg";
import mazafatiHeroImage from "@/assets/mazafati-background.png";

// Contact details are not translated (numbers, email, domain, social links).
export const companyContact = {
  phone: "+98 21 2676 1176",
  whatsapp: "+98 919 046 6275",
  email: "commercial@orasiatrade.com",
  website: "orasiatrade.com",
  social: [
    { label: "LinkedIn", href: "https://www.linkedin.com/company/orasia-trade" },
    { label: "Instagram", href: "https://www.instagram.com/orasiatrade" },
  ] as { label: string; href: string }[],
};

export type Product = {
  slug: string;
  trade: "import" | "export";
  image: string;
  heroImage: string;
};

// Names, categories, summaries, origin and packaging text live in
// translations.ts under productCopy[slug] — keyed by the same slug.
export const products: Product[] = [
  { slug: "import-product-01", trade: "import", image: greenCoffeeImage, heroImage: greenCoffeeHeroImage },
  { slug: "import-product-02", trade: "import", image: turmericProduct, heroImage: turmericHeroImage },
  { slug: "import-product-03", trade: "import", image: cinnamonProduct, heroImage: cinnamonHeroImage },
  { slug: "export-product-01", trade: "export", image: piaromProduct, heroImage: piaromHeroImage },
  { slug: "export-product-02", trade: "export", image: zahidiProduct, heroImage: zahidiHeroImage },
  { slug: "export-product-03", trade: "export", image: mazafatiProduct, heroImage: mazafatiHeroImage },
];

// Route paths only — nav labels come from translations.ts (t.nav).
export const navigation = [
  { key: "home", to: "/" },
  { key: "about", to: "/about" },
  { key: "products", to: "/products" },
  { key: "contact", to: "/contact" },
] as const;
