// -----------------------------------------------------------------------------
// PLACEHOLDER CONTENT — replace every value marked [ ... ] with real company data.
// No factual claims, statistics, certifications or partners are invented here.
// -----------------------------------------------------------------------------

export const company = {
  name: "[Company Name]",
  shortName: "[Company]",
  tagline: "International Trading | Import & Export",
  description:
    "[Company Name] is an international trading company engaged in the sourcing, import, export, and distribution of selected products across global markets.",
  address: "[Street Address], [City], [Country]",
  phone: "[+00 000 000 0000]",
  whatsapp: "[+00 000 000 0000]",
  email: "[info@company.com]",
  website: "[www.company.com]",
  hours: "[Sunday – Thursday, 09:00 – 17:00 (local time)]",
  social: [] as { label: string; href: string }[], // Add only real, existing accounts.
};

export const markets = [
  "[Region / Country]",
  "[Region / Country]",
  "[Region / Country]",
  "[Region / Country]",
];

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

export const valuePoints = [
  "Reliable sourcing",
  "Quality-focused selection",
  "Responsive communication",
  "International market knowledge",
  "Long-term partnerships",
];

export type Product = {
  slug: string;
  name: string;
  category: string;
  trade: "import" | "export";
  summary: string;
  origin: string;
  formats: string;
  packaging: string;
  moq: string;
  specifications: string;
  certifications: string;
  notes: string;
};

// PLACEHOLDER catalogue. Replace names, categories and specifications with real data.
export const products: Product[] = [
  {
    slug: "import-product-01",
    name: "[Product Name 01]",
    category: "[Product Category]",
    trade: "import",
    summary: "[Short product description — one or two lines describing the product.]",
    origin: "[Country of origin]",
    formats: "[Available formats]",
    packaging: "[Packaging details]",
    moq: "[Minimum order quantity]",
    specifications: "[Specifications to be provided]",
    certifications: "[Certifications to be provided]",
    notes: "[Additional information to be provided]",
  },
  {
    slug: "import-product-02",
    name: "[Product Name 02]",
    category: "[Product Category]",
    trade: "import",
    summary: "[Short product description — one or two lines describing the product.]",
    origin: "[Country of origin]",
    formats: "[Available formats]",
    packaging: "[Packaging details]",
    moq: "[Minimum order quantity]",
    specifications: "[Specifications to be provided]",
    certifications: "[Certifications to be provided]",
    notes: "[Additional information to be provided]",
  },
  {
    slug: "import-product-03",
    name: "[Product Name 03]",
    category: "[Product Category]",
    trade: "import",
    summary: "[Short product description — one or two lines describing the product.]",
    origin: "[Country of origin]",
    formats: "[Available formats]",
    packaging: "[Packaging details]",
    moq: "[Minimum order quantity]",
    specifications: "[Specifications to be provided]",
    certifications: "[Certifications to be provided]",
    notes: "[Additional information to be provided]",
  },
  {
    slug: "export-product-01",
    name: "[Product Name 04]",
    category: "[Product Category]",
    trade: "export",
    summary: "[Short product description — one or two lines describing the product.]",
    origin: "[Country of origin]",
    formats: "[Available formats]",
    packaging: "[Packaging details]",
    moq: "[Minimum order quantity]",
    specifications: "[Specifications to be provided]",
    certifications: "[Certifications to be provided]",
    notes: "[Additional information to be provided]",
  },
  {
    slug: "export-product-02",
    name: "[Product Name 05]",
    category: "[Product Category]",
    trade: "export",
    summary: "[Short product description — one or two lines describing the product.]",
    origin: "[Country of origin]",
    formats: "[Available formats]",
    packaging: "[Packaging details]",
    moq: "[Minimum order quantity]",
    specifications: "[Specifications to be provided]",
    certifications: "[Certifications to be provided]",
    notes: "[Additional information to be provided]",
  },
  {
    slug: "export-product-03",
    name: "[Product Name 06]",
    category: "[Product Category]",
    trade: "export",
    summary: "[Short product description — one or two lines describing the product.]",
    origin: "[Country of origin]",
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
