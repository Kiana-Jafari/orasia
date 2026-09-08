// -----------------------------------------------------------------------------
// Bilingual content (English / Persian). PLACEHOLDERS marked [ ... ] must be
// replaced with real company data. No factual claims are invented here.
// -----------------------------------------------------------------------------

export type Lang = "en" | "fa";

export const languages: { code: Lang; label: string; short: string; dir: "ltr" | "rtl" }[] = [
  { code: "en", label: "English", short: "EN", dir: "ltr" },
  { code: "fa", label: "فارسی", short: "FA", dir: "rtl" },
];

export type ProductCopy = {
  name: string;
  category: string;
  summary: string;
  origin: string;
  formats: string;
  packaging: string;
  moq: string;
  specifications: string;
  certifications: string;
  notes: string;
};

type Dict = {
  company: {
    name: string;
    tagline: string;
    description: string;
    address: string;
    hours: string;
  };
  nav: { home: string; about: string; products: string; contact: string };
  actions: {
    contactUs: string;
    exploreProducts: string;
    learnMore: string;
    viewAll: string;
    viewProduct: string;
    requestQuote: string;
    requestInfo: string;
    backToProducts: string;
    sendInquiry: string;
  };
  labels: {
    navigation: string;
    contact: string;
    breadcrumb: string;
    home: string;
    menuOpen: string;
    menuClose: string;
    productImage: string;
    language: string;
    rights: string;
  };
  markets: string[];
  activities: { number: string; title: string; body: string }[];
  principles: { title: string; body: string }[];
  valuePoints: string[];
  home: {
    eyebrowHero: string;
    heroTitleA: string;
    heroTitleB: string;
    introEyebrow: string;
    introTitle: string;
    introP1: string;
    introP2: string;
    activitiesEyebrow: string;
    activitiesTitle: string;
    catalogueEyebrow: string;
    catalogueTitle: string;
    catalogueIntro: string;
    globalEyebrow: string;
    globalTitle: string;
    globalIntro: string;
    marketsLabel: string;
    marketsNote: string;
    trustEyebrow: string;
    trustTitle: string;
    trustIntro: string;
    ctaTitle: string;
    ctaBody: string;
    ctaEmail: string;
  };
  about: {
    breadcrumb: string;
    title: string;
    subtitle: string;
    overviewEyebrow: string;
    overviewTitle: string;
    p1: string;
    p2: string;
    p3: string;
    missionEyebrow: string;
    mission: string;
    activitiesEyebrow: string;
    activitiesTitle: string;
    principlesEyebrow: string;
    principlesTitle: string;
    operationsEyebrow: string;
    operationsTitle: string;
    operationsIntro: string;
    imageCaption: string;
  };
  products: {
    breadcrumb: string;
    title: string;
    subtitle: string;
    filterAll: string;
    filterImport: string;
    filterExport: string;
    importEyebrow: string;
    importTitle: string;
    importIntro: string;
    exportEyebrow: string;
    exportTitle: string;
    exportIntro: string;
    note: string;
    ctaTitle: string;
    ctaBody: string;
    detailsTitle: string;
    detailsNote: string;
    notFound: string;
    specs: {
      category: string;
      trade: string;
      origin: string;
      formats: string;
      packaging: string;
      moq: string;
      specifications: string;
      certifications: string;
      notes: string;
      import: string;
      export: string;
    };
  };
  contact: {
    breadcrumb: string;
    title: string;
    subtitle: string;
    detailsEyebrow: string;
    detailsTitle: string;
    detailsNote: string;
    formEyebrow: string;
    formTitle: string;
    sent: string;
    fields: {
      fullName: string;
      companyName: string;
      email: string;
      phone: string;
      subject: string;
      message: string;
    };
    info: {
      companyName: string;
      address: string;
      phone: string;
      email: string;
      whatsapp: string;
      hours: string;
      website: string;
    };
  };
  seo: {
    homeTitle: string;
    homeDescription: string;
    aboutTitle: string;
    aboutDescription: string;
    productsTitle: string;
    productsDescription: string;
    contactTitle: string;
    contactDescription: string;
  };
  productCopy: Record<string, ProductCopy>;
};

const placeholderProductEn = (n: string): ProductCopy => ({
  name: `[Product Name ${n}]`,
  category: "[Product Category]",
  summary: "[Short product description — one or two lines describing the product.]",
  origin: "[Country of origin]",
  formats: "[Available formats]",
  packaging: "[Packaging details]",
  moq: "[Minimum order quantity]",
  specifications: "[Specifications to be provided]",
  certifications: "[Certifications to be provided]",
  notes: "[Additional information to be provided]",
});

const placeholderProductFa = (n: string): ProductCopy => ({
  name: `[نام محصول ${n}]`,
  category: "[دسته‌بندی محصول]",
  summary: "[توضیح کوتاه محصول — یک یا دو خط درباره محصول.]",
  origin: "[کشور مبدأ]",
  formats: "[فرم‌های موجود]",
  packaging: "[جزئیات بسته‌بندی]",
  moq: "[حداقل مقدار سفارش]",
  specifications: "[مشخصات فنی ارائه خواهد شد]",
  certifications: "[گواهی‌نامه‌ها ارائه خواهد شد]",
  notes: "[اطلاعات تکمیلی ارائه خواهد شد]",
});

const en: Dict = {
  company: {
    name: "[Company Name]",
    tagline: "International Trading | Import & Export",
    description:
      "[Company Name] is an international trading company engaged in the sourcing, import, export, and distribution of selected products across global markets.",
    address: "[Street Address], [City], [Country]",
    hours: "[Sunday – Thursday, 09:00 – 17:00 (local time)]",
  },
  nav: { home: "Home", about: "About Us", products: "Products", contact: "Contact" },
  actions: {
    contactUs: "Contact Us",
    exploreProducts: "Explore Products",
    learnMore: "Learn More About Us",
    viewAll: "View All Products",
    viewProduct: "View Product",
    requestQuote: "Request a Quote",
    requestInfo: "Request Information",
    backToProducts: "Back to Products",
    sendInquiry: "Send Inquiry",
  },
  labels: {
    navigation: "Navigation",
    contact: "Contact",
    breadcrumb: "Breadcrumb",
    home: "Home",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    productImage: "[Product Image]",
    language: "Language",
    rights: "All rights reserved.",
  },
  markets: ["[Region / Country]", "[Region / Country]", "[Region / Country]", "[Region / Country]"],
  activities: [
    { number: "01", title: "Import", body: "Sourcing and importing selected products from international suppliers." },
    { number: "02", title: "Export", body: "Connecting quality products with international buyers and markets." },
    { number: "03", title: "Sourcing", body: "Identifying suitable suppliers and products according to market requirements." },
    { number: "04", title: "Trade & Distribution", body: "Facilitating reliable commercial relationships and product movement." },
  ],
  principles: [
    { title: "Reliability", body: "Consistent communication and dependable follow-through on commercial commitments." },
    { title: "Quality", body: "Careful selection of products and suppliers against agreed requirements." },
    { title: "Transparency", body: "Clear terms, clear documentation, and straightforward commercial dialogue." },
    { title: "Long-Term Partnerships", body: "Relationships built to continue beyond a single shipment or transaction." },
  ],
  valuePoints: [
    "Reliable sourcing",
    "Quality-focused selection",
    "Responsive communication",
    "International market knowledge",
    "Long-term partnerships",
  ],
  home: {
    eyebrowHero: "International Trading Company",
    heroTitleA: "Connecting Markets.",
    heroTitleB: "Delivering Opportunities.",
    introEyebrow: "Introduction",
    introTitle: "Who We Are",
    introP1:
      "[Company Name] is a trading company focused on building reliable connections between suppliers, buyers, and international markets.",
    introP2:
      "Through our sourcing network and commercial partnerships, we facilitate the movement of selected products across borders with a focus on quality, reliability, and long-term business relationships.",
    activitiesEyebrow: "Business Activities",
    activitiesTitle: "What We Do",
    catalogueEyebrow: "Catalogue",
    catalogueTitle: "Featured Products",
    catalogueIntro:
      "A selection from our import and export portfolio. Full specifications are available on request.",
    globalEyebrow: "Global Reach",
    globalTitle: "Connecting Markets",
    globalIntro:
      "We work across borders to match products with the markets that require them — coordinating sourcing, documentation, and delivery between suppliers and buyers.",
    marketsLabel: "Markets",
    marketsNote: "Placeholder — replace with confirmed markets.",
    trustEyebrow: "Why Work With Us",
    trustTitle: "Built for Long-Term Business",
    trustIntro: "We aim to be a dependable commercial counterpart rather than a one-time intermediary.",
    ctaTitle: "Let's Work Together",
    ctaBody:
      "For product inquiries, sourcing requests, or international trade opportunities, get in touch with our team.",
    ctaEmail: "Or email us directly at",
  },
  about: {
    breadcrumb: "About Us",
    title: "About [Company Name]",
    subtitle: "Building reliable connections across international markets.",
    overviewEyebrow: "Overview",
    overviewTitle: "Company Overview",
    p1: "[Company Name] is an international trading company active in the sourcing, import, export and distribution of selected products. We work between suppliers and buyers, coordinating the commercial and logistical steps required to move goods across borders.",
    p2: "Our main product categories are [Product Category], [Product Category] and [Product Category]. Our geographic focus covers",
    p3: "Our business model is straightforward: we identify requirements, match them with suitable supply, and manage the trade relationship through to delivery. Commercial terms are agreed case by case with each partner. [Replace this paragraph with your confirmed business model description.]",
    missionEyebrow: "Our Mission",
    mission:
      "Our mission is to build dependable trade relationships by connecting quality products with the right markets and creating sustainable value for our business partners.",
    activitiesEyebrow: "Activities",
    activitiesTitle: "Our Activities",
    principlesEyebrow: "Principles",
    principlesTitle: "Our Approach",
    operationsEyebrow: "Our Operations",
    operationsTitle: "Where We Work",
    operationsIntro:
      "Representative image. [Replace with an authentic photograph of your own premises or operations once available — no location is implied here.]",
    imageCaption: "[Placeholder image — not a photograph of the company's premises.]",
  },
  products: {
    breadcrumb: "Products",
    title: "Our Products",
    subtitle:
      "Explore our selected range of products available for international sourcing, import, and export.",
    filterAll: "All Products",
    filterImport: "Import Products",
    filterExport: "Export Products",
    importEyebrow: "Import",
    importTitle: "Import Products",
    importIntro: "Products sourced from international suppliers for the markets we serve.",
    exportEyebrow: "Export",
    exportTitle: "Export Products",
    exportIntro: "Products offered to international buyers and distribution partners.",
    note: "Product names, categories and specifications shown are placeholders and will be replaced with confirmed information. Prices are not published — please request a quotation.",
    ctaTitle: "Looking for something specific?",
    ctaBody: "Send us your requirements and we will confirm availability, specifications and terms.",
    detailsTitle: "Product Details",
    detailsNote: "All values shown are placeholders pending confirmed product data.",
    notFound: "Product not found",
    specs: {
      category: "Category",
      trade: "Trade",
      origin: "Origin",
      formats: "Available formats",
      packaging: "Packaging",
      moq: "Minimum order quantity",
      specifications: "Specifications",
      certifications: "Certifications",
      notes: "Additional information",
      import: "Import",
      export: "Export",
    },
  },
  contact: {
    breadcrumb: "Contact",
    title: "Contact Us",
    subtitle:
      "Whether you are looking for a reliable supplier, sourcing opportunity, or international trade partnership, we would be pleased to hear from you.",
    detailsEyebrow: "Details",
    detailsTitle: "Company Information",
    detailsNote:
      "Contact details are placeholders. A map will be added once a verified business address is provided.",
    formEyebrow: "Inquiry",
    formTitle: "Send Us a Message",
    sent: "Thank you — your inquiry has been captured. [Connect a form service to deliver it.]",
    fields: {
      fullName: "Full Name",
      companyName: "Company Name",
      email: "Email",
      phone: "Phone / WhatsApp",
      subject: "Subject",
      message: "Message",
    },
    info: {
      companyName: "Company Name",
      address: "Address",
      phone: "Phone",
      email: "Email",
      whatsapp: "WhatsApp",
      hours: "Business Hours",
      website: "Website",
    },
  },
  seo: {
    homeTitle: "[Company Name] | International Trading & Import Export",
    homeDescription:
      "International trading company engaged in the sourcing, import, export and distribution of selected products across global markets.",
    aboutTitle: "About [Company Name] | International Trading Company",
    aboutDescription:
      "Learn about our international trading business: sourcing, import, export and distribution of selected products for buyers and suppliers worldwide.",
    productsTitle: "Products | [Company Name] | Import & Export",
    productsDescription:
      "Explore our selected range of products available for international sourcing, import and export. Request information on any item.",
    contactTitle: "Contact [Company Name] | International Trading",
    contactDescription:
      "Contact our team for product inquiries, sourcing requests, quotations and international trade partnerships.",
  },
  productCopy: {
    "import-product-01": placeholderProductEn("01"),
    "import-product-02": placeholderProductEn("02"),
    "import-product-03": placeholderProductEn("03"),
    "export-product-01": placeholderProductEn("04"),
    "export-product-02": placeholderProductEn("05"),
    "export-product-03": placeholderProductEn("06"),
  },
};

const fa: Dict = {
  company: {
    name: "[نام شرکت]",
    tagline: "بازرگانی بین‌المللی | واردات و صادرات",
    description:
      "[نام شرکت] یک شرکت بازرگانی بین‌المللی است که در زمینه تأمین، واردات، صادرات و توزیع محصولات منتخب در بازارهای جهانی فعالیت می‌کند.",
    address: "[نشانی]، [شهر]، [کشور]",
    hours: "[یکشنبه تا پنجشنبه، ۰۹:۰۰ تا ۱۷:۰۰ به وقت محلی]",
  },
  nav: { home: "خانه", about: "درباره ما", products: "محصولات", contact: "تماس با ما" },
  actions: {
    contactUs: "تماس با ما",
    exploreProducts: "مشاهده محصولات",
    learnMore: "بیشتر درباره ما بدانید",
    viewAll: "مشاهده همه محصولات",
    viewProduct: "مشاهده محصول",
    requestQuote: "درخواست پیش‌فاکتور",
    requestInfo: "درخواست اطلاعات",
    backToProducts: "بازگشت به محصولات",
    sendInquiry: "ارسال درخواست",
  },
  labels: {
    navigation: "پیمایش",
    contact: "تماس",
    breadcrumb: "مسیر صفحه",
    home: "خانه",
    menuOpen: "باز کردن منو",
    menuClose: "بستن منو",
    productImage: "[تصویر محصول]",
    language: "زبان",
    rights: "تمامی حقوق محفوظ است.",
  },
  markets: ["[منطقه / کشور]", "[منطقه / کشور]", "[منطقه / کشور]", "[منطقه / کشور]"],
  activities: [
    { number: "۰۱", title: "واردات", body: "تأمین و واردات محصولات منتخب از تأمین‌کنندگان بین‌المللی." },
    { number: "۰۲", title: "صادرات", body: "اتصال محصولات باکیفیت به خریداران و بازارهای بین‌المللی." },
    { number: "۰۳", title: "تأمین کالا", body: "شناسایی تأمین‌کنندگان و محصولات مناسب بر اساس نیاز بازار." },
    { number: "۰۴", title: "تجارت و توزیع", body: "تسهیل روابط تجاری قابل اتکا و جابه‌جایی کالا." },
  ],
  principles: [
    { title: "قابلیت اتکا", body: "ارتباط پیوسته و پایبندی به تعهدات تجاری." },
    { title: "کیفیت", body: "انتخاب دقیق محصولات و تأمین‌کنندگان بر اساس الزامات توافق‌شده." },
    { title: "شفافیت", body: "شرایط روشن، مستندات دقیق و گفت‌وگوی تجاری صریح." },
    { title: "همکاری بلندمدت", body: "روابطی که فراتر از یک محموله یا یک معامله ادامه می‌یابد." },
  ],
  valuePoints: [
    "تأمین قابل اتکا",
    "انتخاب مبتنی بر کیفیت",
    "ارتباط سریع و پاسخگو",
    "شناخت بازارهای بین‌المللی",
    "همکاری‌های بلندمدت",
  ],
  home: {
    eyebrowHero: "شرکت بازرگانی بین‌المللی",
    heroTitleA: "اتصال بازارها.",
    heroTitleB: "ایجاد فرصت‌ها.",
    introEyebrow: "معرفی",
    introTitle: "ما که هستیم",
    introP1:
      "[نام شرکت] یک شرکت بازرگانی است که بر ایجاد ارتباط قابل اتکا میان تأمین‌کنندگان، خریداران و بازارهای بین‌المللی تمرکز دارد.",
    introP2:
      "از طریق شبکه تأمین و همکاری‌های تجاری خود، جابه‌جایی محصولات منتخب میان مرزها را با تمرکز بر کیفیت، قابلیت اتکا و روابط تجاری بلندمدت تسهیل می‌کنیم.",
    activitiesEyebrow: "حوزه‌های فعالیت",
    activitiesTitle: "چه می‌کنیم",
    catalogueEyebrow: "کاتالوگ",
    catalogueTitle: "محصولات منتخب",
    catalogueIntro:
      "گزیده‌ای از سبد واردات و صادرات ما. مشخصات کامل بنا به درخواست ارائه می‌شود.",
    globalEyebrow: "گستره جهانی",
    globalTitle: "اتصال بازارها",
    globalIntro:
      "ما فراتر از مرزها فعالیت می‌کنیم تا محصولات را با بازارهای متقاضی آن‌ها هماهنگ کنیم — از تأمین و مستندسازی تا تحویل میان تأمین‌کننده و خریدار.",
    marketsLabel: "بازارها",
    marketsNote: "نمونه — با بازارهای تأییدشده جایگزین شود.",
    trustEyebrow: "چرا ما",
    trustTitle: "ساخته‌شده برای همکاری بلندمدت",
    trustIntro: "هدف ما این است که یک شریک تجاری قابل اتکا باشیم، نه یک واسطه مقطعی.",
    ctaTitle: "بیایید همکاری کنیم",
    ctaBody:
      "برای استعلام محصول، درخواست تأمین کالا یا فرصت‌های تجارت بین‌الملل با تیم ما در تماس باشید.",
    ctaEmail: "یا مستقیماً به ما ایمیل بزنید:",
  },
  about: {
    breadcrumb: "درباره ما",
    title: "درباره [نام شرکت]",
    subtitle: "ایجاد ارتباط‌های قابل اتکا در بازارهای بین‌المللی.",
    overviewEyebrow: "نمای کلی",
    overviewTitle: "معرفی شرکت",
    p1: "[نام شرکت] یک شرکت بازرگانی بین‌المللی فعال در زمینه تأمین، واردات، صادرات و توزیع محصولات منتخب است. ما میان تأمین‌کنندگان و خریداران قرار می‌گیریم و مراحل تجاری و لجستیکی لازم برای جابه‌جایی کالا میان مرزها را هماهنگ می‌کنیم.",
    p2: "دسته‌بندی‌های اصلی محصولات ما [دسته‌بندی محصول]، [دسته‌بندی محصول] و [دسته‌بندی محصول] است. تمرکز جغرافیایی ما شامل این مناطق است:",
    p3: "مدل کسب‌وکار ما ساده است: نیازها را شناسایی می‌کنیم، آن‌ها را با تأمین مناسب تطبیق می‌دهیم و رابطه تجاری را تا زمان تحویل مدیریت می‌کنیم. شرایط تجاری با هر شریک به‌صورت موردی توافق می‌شود. [این بند را با توضیح تأییدشده مدل کسب‌وکار خود جایگزین کنید.]",
    missionEyebrow: "مأموریت ما",
    mission:
      "مأموریت ما ایجاد روابط تجاری قابل اتکا از طریق اتصال محصولات باکیفیت به بازارهای مناسب و خلق ارزش پایدار برای شرکای تجاری است.",
    activitiesEyebrow: "فعالیت‌ها",
    activitiesTitle: "فعالیت‌های ما",
    principlesEyebrow: "اصول",
    principlesTitle: "رویکرد ما",
    operationsEyebrow: "عملیات ما",
    operationsTitle: "محل فعالیت",
    operationsIntro:
      "تصویر نمادین. [پس از فراهم شدن، با عکس واقعی از محل یا عملیات شرکت جایگزین شود — هیچ مکانی در اینجا ادعا نشده است.]",
    imageCaption: "[تصویر نمونه — عکس واقعی محل شرکت نیست.]",
  },
  products: {
    breadcrumb: "محصولات",
    title: "محصولات ما",
    subtitle: "مجموعه منتخب محصولات ما برای تأمین، واردات و صادرات بین‌المللی را ببینید.",
    filterAll: "همه محصولات",
    filterImport: "محصولات وارداتی",
    filterExport: "محصولات صادراتی",
    importEyebrow: "واردات",
    importTitle: "محصولات وارداتی",
    importIntro: "محصولاتی که از تأمین‌کنندگان بین‌المللی برای بازارهای هدف ما تأمین می‌شوند.",
    exportEyebrow: "صادرات",
    exportTitle: "محصولات صادراتی",
    exportIntro: "محصولات ارائه‌شده به خریداران و شرکای توزیع بین‌المللی.",
    note: "نام‌ها، دسته‌بندی‌ها و مشخصات نمایش‌داده‌شده نمونه هستند و با اطلاعات تأییدشده جایگزین می‌شوند. قیمت‌ها منتشر نمی‌شوند — لطفاً درخواست پیش‌فاکتور بدهید.",
    ctaTitle: "به دنبال محصول خاصی هستید؟",
    ctaBody: "نیازمندی‌های خود را ارسال کنید تا موجودی، مشخصات و شرایط را تأیید کنیم.",
    detailsTitle: "مشخصات محصول",
    detailsNote: "تمام مقادیر نمایش‌داده‌شده نمونه هستند و در انتظار داده‌های تأییدشده‌اند.",
    notFound: "محصول یافت نشد",
    specs: {
      category: "دسته‌بندی",
      trade: "نوع تجارت",
      origin: "مبدأ",
      formats: "فرم‌های موجود",
      packaging: "بسته‌بندی",
      moq: "حداقل مقدار سفارش",
      specifications: "مشخصات فنی",
      certifications: "گواهی‌نامه‌ها",
      notes: "اطلاعات تکمیلی",
      import: "واردات",
      export: "صادرات",
    },
  },
  contact: {
    breadcrumb: "تماس",
    title: "تماس با ما",
    subtitle:
      "چه به دنبال یک تأمین‌کننده قابل اتکا باشید، چه فرصت تأمین کالا یا همکاری تجاری بین‌المللی، از شنیدن پیام شما خوشحال می‌شویم.",
    detailsEyebrow: "جزئیات",
    detailsTitle: "اطلاعات شرکت",
    detailsNote:
      "اطلاعات تماس نمونه هستند. پس از ارائه نشانی تأییدشده، نقشه اضافه خواهد شد.",
    formEyebrow: "استعلام",
    formTitle: "برای ما پیام بفرستید",
    sent: "سپاسگزاریم — پیام شما ثبت شد. [برای ارسال واقعی، سرویس فرم را متصل کنید.]",
    fields: {
      fullName: "نام و نام خانوادگی",
      companyName: "نام شرکت",
      email: "ایمیل",
      phone: "تلفن / واتس‌اپ",
      subject: "موضوع",
      message: "پیام",
    },
    info: {
      companyName: "نام شرکت",
      address: "نشانی",
      phone: "تلفن",
      email: "ایمیل",
      whatsapp: "واتس‌اپ",
      hours: "ساعات کاری",
      website: "وب‌سایت",
    },
  },
  seo: {
    homeTitle: "[نام شرکت] | بازرگانی بین‌المللی، واردات و صادرات",
    homeDescription:
      "شرکت بازرگانی بین‌المللی فعال در تأمین، واردات، صادرات و توزیع محصولات منتخب در بازارهای جهانی.",
    aboutTitle: "درباره [نام شرکت] | شرکت بازرگانی بین‌المللی",
    aboutDescription:
      "با فعالیت بازرگانی بین‌المللی ما آشنا شوید: تأمین، واردات، صادرات و توزیع محصولات منتخب برای خریداران و تأمین‌کنندگان در سراسر جهان.",
    productsTitle: "محصولات | [نام شرکت] | واردات و صادرات",
    productsDescription:
      "مجموعه منتخب محصولات ما برای تأمین، واردات و صادرات بین‌المللی. برای هر مورد درخواست اطلاعات بدهید.",
    contactTitle: "تماس با [نام شرکت] | بازرگانی بین‌المللی",
    contactDescription:
      "برای استعلام محصول، درخواست تأمین، پیش‌فاکتور و همکاری‌های تجاری بین‌المللی با تیم ما تماس بگیرید.",
  },
  productCopy: {
    "import-product-01": placeholderProductFa("۰۱"),
    "import-product-02": placeholderProductFa("۰۲"),
    "import-product-03": placeholderProductFa("۰۳"),
    "export-product-01": placeholderProductFa("۰۴"),
    "export-product-02": placeholderProductFa("۰۵"),
    "export-product-03": placeholderProductFa("۰۶"),
  },
};

export const dictionaries: Record<Lang, Dict> = { en, fa };
export type Translation = Dict;
