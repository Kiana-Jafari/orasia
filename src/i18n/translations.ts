// -----------------------------------------------------------------------------
// Bilingual content (English / Persian). Persian uses a friendly, everyday
// tone rather than formal/bureaucratic business Persian.
// Items still wrapped in [ ... ] are unresolved placeholders (real company
// data not yet provided) and exist in both languages.
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
  packaging: string;
};

type Dict = {
  meta: {
    homeTitle: string;
    homeDescription: string;
    aboutTitle: string;
    aboutDescription: string;
    productsTitle: string;
    productsDescription: string;
    contactTitle: string;
    contactDescription: string;
    productTitleSuffix: string;
  };
  company: {
    name: string;
    tagline: string;
    description: string;
    mission: string;
    address: string;
    hours: string;
  };
  nav: { home: string; about: string; products: string; contact: string };
  actions: {
    contactUs: string;
    exploreProducts: string;
    viewAll: string;
    viewProduct: string;
    requestQuote: string;
    requestInfo: string;
    backToProducts: string;
    sendInquiry: string;
    readOurStory: string;
  };
  labels: {
    menuOpen: string;
    menuClose: string;
    language: string;
    home: string;
    rights: string;
  };
  activities: { number: string; title: string; body: string }[];
  principles: { title: string; body: string }[];
  home: {
    eyebrowHero: string;
    heroLine1: string;
    heroLine2: string;
    introEyebrow: string;
    introTitle: string;
    introText: string;
    activitiesEyebrow: string;
    activitiesTitle: string;
    catalogueEyebrow: string;
    catalogueTitle: string;
    catalogueIntro: string;
    globalEyebrow: string;
    globalTitle: string;
    globalIntro: string;
    ctaTitle: string;
    ctaBody: string;
    ctaEmailPrefix: string;
  };
  about: {
    breadcrumb: string;
    title: string;
    subtitle: string;
    storyEyebrow: string;
    storyTitle: string;
    storyP1: string;
    storyP2: string;
    storyP3: string;
    missionEyebrow: string;
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
    ctaTitle: string;
    ctaBody: string;
    detailsTitle: string;
    notFound: string;
    specs: {
      category: string;
      trade: string;
      origin: string;
      packaging: string;
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
    formEyebrow: string;
    formTitle: string;
    sentMessage: string;
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
  footer: {
    navigationHeading: string;
    contactHeading: string;
    findUs: string;
  };
  productCopy: Record<string, ProductCopy>;
};

const en: Dict = {
  meta: {
    homeTitle: "Orasia Trade | International Trading & Import Export",
    homeDescription:
      "International trading company engaged in the sourcing, import, export and distribution of selected products across global markets.",
    aboutTitle: "About Orasia Trade | International Trading Company",
    aboutDescription:
      "Learn about our international trading business: sourcing, import, export and distribution of selected products for buyers and suppliers worldwide.",
    productsTitle: "Products | Orasia Trade | Import & Export",
    productsDescription:
      "Explore our selected range of products available for international sourcing, import and export. Request information on any item.",
    contactTitle: "Contact Orasia Trade | International Trading",
    contactDescription:
      "Contact our team for product inquiries, sourcing requests, quotations and international trade partnerships.",
    productTitleSuffix: "Orasia Trade | Import & Export",
  },
  company: {
    name: "Orasia Trade",
    tagline: "International Trading | Import & Export",
    description:
      "Orasia Trade is an international trading company engaged in the sourcing, import, export, and distribution of selected products across global markets.",
    mission:
      "To build dependable trade relationships by connecting quality products with the right markets and creating sustainable value for our business partners.",
    address: "Sa'adat Abad, Tehran, Iran",
    hours: "Saturday – Thursday, 09:00 – 17:00",
  },
  nav: { home: "Home", about: "About Us", products: "Products", contact: "Contact" },
  actions: {
    contactUs: "Contact Us",
    exploreProducts: "Explore Products",
    viewAll: "View All Products",
    viewProduct: "View Product",
    requestQuote: "Request a Quote",
    requestInfo: "Request Information",
    backToProducts: "Back to Products",
    sendInquiry: "Send Inquiry",
    readOurStory: "Read Our Story",
  },
  labels: {
    menuOpen: "Open menu",
    menuClose: "Close menu",
    language: "Language",
    home: "Home",
    rights: "All rights reserved.",
  },
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
  home: {
    eyebrowHero: "International Trading Company",
    heroLine1: "Trusted trade,",
    heroLine2: "from source to destination.",
    introEyebrow: "Introduction",
    introTitle: "Who We Are",
    introText:
      "A trading company built on trust, quality, and long-term partnerships across global markets.",
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
    ctaTitle: "Let's Work Together",
    ctaBody:
      "For product inquiries, sourcing requests, or international trade opportunities, get in touch with our team.",
    ctaEmailPrefix: "Or email us directly at",
  },
  about: {
    breadcrumb: "About Us",
    title: "About Orasia Trade",
    subtitle: "Building reliable connections across international markets.",
    storyEyebrow: "Our Story",
    storyTitle: "From Coffee to International Trade",
    storyP1:
      "Orasia Trade began with coffee — and with it, a simple standard that has stayed with us ever since. A young, motivated team took its first steps into international trade by learning, cup by cup, what quality actually means: the sourcing, the grading, and the small decisions that separate a good batch from an exceptional one.",
    storyP2:
      "That standard shaped how we think about every product we bring to market. We don't treat what we trade as inventory — each product carries our name, so it's chosen with the same care you'd give to something you're proud to stand behind. That's why our selection process stays deliberate, even when it would be faster not to be.",
    storyP3:
      "Today, Orasia Trade is a trading company focused on building reliable connections between suppliers, buyers, and international markets. Through our sourcing network and commercial partnerships, we facilitate the movement of selected products across borders with a focus on quality, reliability, and long-term business relationships.",
    missionEyebrow: "Our Mission",
    principlesEyebrow: "Principles",
    principlesTitle: "Our Approach",
    operationsEyebrow: "Our Operations",
    operationsTitle: "Where We Work",
    operationsIntro:
      "We'll be delighted to have a 1:1 meeting with you in our company!",
    imageCaption: "",
  },
  products: {
    breadcrumb: "Products",
    title: "Our Products",
    subtitle: "Explore our selected range of products available for international sourcing, import, and export.",
    filterAll: "All Products",
    filterImport: "Import Products",
    filterExport: "Export Products",
    importEyebrow: "Import",
    importTitle: "Import Products",
    importIntro: "Products sourced from international suppliers for the markets we serve.",
    exportEyebrow: "Export",
    exportTitle: "Export Products",
    exportIntro: "Products offered to international buyers and distribution partners.",
    ctaTitle: "Looking for something specific?",
    ctaBody: "Send us your requirements and we will confirm availability, specifications and terms.",
    detailsTitle: "Product Details",
    notFound: "Product not found",
    specs: {
      category: "Category",
      trade: "Trade",
      origin: "Origin",
      packaging: "Packaging",
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
    formEyebrow: "Inquiry",
    formTitle: "Send Us a Message",
    sentMessage: "Thank you — your inquiry has been captured.",
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
  footer: {
    navigationHeading: "Navigation",
    contactHeading: "Contact",
    findUs: "Find Us",
  },
  productCopy: {
    "import-product-01": {
      name: "Green Coffee Beans",
      category: "Coffee & Beverages",
      summary:
        "Try our premium Green Coffee Beans! We offer delicious Arabica beans from Ethiopia and Colombia, as well as strong Robusta beans from Uganda, Indonesia, and Vietnam. Enjoy great flavors and high quality with our ethically sourced selections, perfect for your roasting adventures!",
      origin: "Ethiopia | Colombia | Uganda | Indonesia | Vietnam",
      packaging: "You can have our 300 g sample for free. Test and become our next permanent customer!",
    },
    "import-product-02": {
      name: "Turmeric",
      category: "Spices & Herbs",
      summary:
        "Golden, earthy, and colorful — Turmeric is chosen for its bright hue and steady quality. A key ingredient for food producers, spice makers, and health-focused brands that need a reliable supplier, batch after batch.",
      origin: "India",
      packaging: "Request a free sample and see the color and aroma for yourself.",
    },
    "import-product-03": {
      name: "Cinnamon",
      category: "Spices & Herbs",
      summary:
        "Warm, aromatic, and full of character — our Cinnamon is sourced from trusted growing regions known for their rich flavor and natural oil content. Whether you're stocking a spice line or supplying bakeries and beverage brands, we bring you a batch worth building a menu around.",
      origin: "Sri Lanka | Indonesia | Vietnam",
      packaging: "Ask us for a sample — taste and smell the difference before you commit to a full order.",
    },
    "export-product-01": {
      name: "Piarom Dates",
      category: "Dried Fruits",
      summary:
        "Slim, dark, and prized for their rich, semi-dry sweetness — Piarom dates are one of the most popular types of dates in Iran. Naturally low in moisture and free from added sugar, they're a favorite for buyers looking for a premium, gift-worthy date.",
      origin: "Iran",
      packaging: "Quote for a request and get a free sample. Check the quality and become our next permanent customer!",
    },
    "export-product-02": {
      name: "Zahedi Dates",
      category: "Dried Fruits",
      summary:
        "Firm, semi-dry, and wonderfully versatile — Zahedi dates hold their shape and texture well, making them a reliable choice for both direct consumption and food processing. A dependable everyday variety trusted by buyers across the world.",
      origin: "Iran",
      packaging: "Quote for a request and get a free sample. Check the quality and become our next permanent customer!",
    },
    "export-product-03": {
      name: "Mazafati Dates",
      category: "Dried Fruits",
      summary:
        "Soft, moist, and deeply sweet — Mazafati is one of Iran's most loved date varieties, known for its dark color and melt-in-your-mouth texture. This is a great choice for buyers who want a product that feels luxurious right away.",
      origin: "Iran",
      packaging: "Quote for a request and get a free sample. Check the quality and become our next permanent customer!",
    },
  },
};

const fa: Dict = {
  meta: {
    homeTitle: "اوراسیا تِرید | بازرگانی بین‌المللی، واردات و صادرات",
    homeDescription:
      "شرکت بازرگانی بین‌المللی که کارش تأمین، واردات، صادرات و توزیع محصولات منتخب توی بازارهای جهانیه.",
    aboutTitle: "درباره اوراسیا تِرید | شرکت بازرگانی بین‌المللی",
    aboutDescription:
      "با کسب‌وکار بازرگانی بین‌المللی ما آشنا شو: تأمین، واردات، صادرات و توزیع محصولات منتخب برای خریداران و تأمین‌کننده‌ها توی سراسر دنیا.",
    productsTitle: "محصولات | اوراسیا تِرید | واردات و صادرات",
    productsDescription:
      "مجموعه منتخب محصولات ما برای تجارت داخلی، تأمین، واردات و صادرات بین‌المللی برای هر مورد درخواست اطلاعات بده.",
    contactTitle: "تماس با اوراسیا تِرید | بازرگانی بین‌المللی",
    contactDescription:
      "برای استعلام محصول، درخواست تأمین کالا، پیش‌فاکتور و همکاری‌های تجاری بین‌المللی با تیم ما تماس بگیر.",
    productTitleSuffix: "اوراسیا تِرید | واردات و صادرات",
  },
  company: {
    name: "Orasia Trade",
    tagline: "بازرگانی بین‌المللی | واردات و صادرات",
    description:
      "اوراسیا تِرید یک شرکت بازرگانی بین‌المللی در حوزه تأمین، واردات، صادرات و توزیع محصولات منتخب در بازارهای جهانی است.",
    mission:
      "هدف ما ایجاد رابطه‌های تجاری قابل‌اعتماد، ارزش پایدار برای شرکای تجاری، و ارائه محصولات با کیفیت است. ",
    address: "سعادت‌آباد، تهران، ایران",
    hours: "شنبه تا پنج‌شنبه، ۹ صبح تا ۵ عصر",
  },
  nav: { home: "خانه", about: "درباره ما", products: "محصولات", contact: "تماس با ما" },
  actions: {
    contactUs: "تماس با ما",
    exploreProducts: "مشاهده محصولات",
    viewAll: "مشاهده همه محصولات",
    viewProduct: "مشاهده محصول",
    requestQuote: "درخواست قیمت",
    requestInfo: "درخواست اطلاعات",
    backToProducts: "برگشت به محصولات",
    sendInquiry: "ارسال پیام",
    readOurStory: "داستان ما",
  },
  labels: {
    menuOpen: "باز کردن منو",
    menuClose: "بستن منو",
    language: "زبان",
    home: "خانه",
    rights: "کلیه حقوق محفوظ است.",
  },
  activities: [
    { number: "01", title: "واردات", body: "تأمین و واردات محصولات منتخب از تأمین‌کننده‌های بین‌المللی." },
    { number: "02", title: "صادرات", body: "ارسال محصولات باکیفیت به خریداران و بازارهای بین‌المللی." },
    { number: "03", title: "تأمین کالا", body: "پیدا کردن تأمین‌کننده و محصول مناسب بر اساس نیاز بازار." },
    { number: "04", title: "تجارت و توزیع", body: "تسهیل روابط تجاری قابل‌اعتماد و جابه‌جایی کالا." },
  ],
  principles: [
    { title: "قابل‌اعتماد بودن", body: "ارتباط مستمر و پایبندی به تعهدات تجاری." },
    { title: "کیفیت", body: "انتخاب دقیق محصولات و تأمین‌کننده‌ها بر اساس نیازهای توافق‌شده." },
    { title: "شفافیت", body: "شرایط روشن، مستندات دقیق و گفتگوی تجاری صریح." },
    { title: "همکاری بلندمدت", body: "رابطه‌هایی که فراتر از یک محموله یا یه معامله ادامه پیدا می‌کنند." },
  ],
  home: {
    eyebrowHero: "شرکت بازرگانی بین‌المللی",
    heroLine1: "تجارتی قابل‌اعتماد،",
    heroLine2: "از مبدا تا مقصد.",
    introEyebrow: "معرفی",
    introTitle: "درباره ما",
    introText: "یک شرکت بازرگانی که پایه‌ و اساس را بر مبنای اعتماد، کیفیت و همکاری بلندمدت در بازارهای جهانی گذاشته است.",
    activitiesEyebrow: "حوزه‌های فعالیت",
    activitiesTitle: "فعالیت های ما دربرگیرنده چه حوزه هایی هستند؟",
    catalogueEyebrow: "کاتالوگ",
    catalogueTitle: "محصولات منتخب",
    catalogueIntro: "گزیده‌ای از سبد واردات و صادرات ما. مشخصات کامل را مطابق با درخواست شما می‌فرستیم.",
    globalEyebrow: "گستره جهانی",
    globalTitle: "اتصال بازارها",
    globalIntro:
      "ما فراتر از مرزها کار می‌کنیم تا محصولات را به بازار های هدف برسانیم — از تأمین و مستندسازی گرفته تا تحویل بین تأمین‌کننده و خریدار.",
    ctaTitle: "مایلید با ما همکاری داشته باشید؟",
    ctaBody: "برای استعلام محصول، درخواست تأمین کالا یا فرصت‌های تجارت بین‌الملل، با تیم ما در تماس باشید.",
    ctaEmailPrefix: "می تونید مستقیم از طریق ایمیل با ما در ارتباط باشید:",
  },
  about: {
    breadcrumb: "درباره ما",
    title: "درباره Orasia Trade",
    subtitle: "ایجاد ارتباطات قابل‌اعتماد در بازارهای بین‌المللی.",
    storyEyebrow: "داستان ما",
    storyTitle: "از قهوه تا تجارت بین‌المللی",
    storyP1: `فعالیت اوراسیا تِرید با فروش داخلی قهوه شروع شد — یک تیم جوان و باانگیزه که قدم اول تجارت را در بازارهای داخلی گذاشت و فنجان به فنجان یاد گرفت که کیفیت واقعی یعنی چه، کدام نوع قهوه با کدام ذائقه سازگار، و نیاز مشتری به چه شکل است.

تجربه ایجاد اعتمادسازی بین ما و مشتری و فروش مویرگی محصول باکیفیتی که در دست داشتیم یک فرآیند خطی نبود؛ بلکه کل اعضای تیم، از بخش بازاریابی و مارکتینگ تا واحد فروش و سرمایه‌گذار اصلی، همه و همه پا به عرصه بازارهای محلی پایتخت گذاشتند و قدم به قدم در حین پروسه یاد گرفتند. (تو پرانتز بگم؛ به قول یکی از بچه‌های تیم، وقتی مسئله فروش محصول باشه، همه باید دست خودشون رو تو این بازار آلوده کنن :) )`,

    storyP2: `اوراسیا از همان ابتدا با یک استاندارد ساده استارت زد؛ استانداردی ماندگار که "چگونگی فکر کردن به هر محصول در بازار هدف" را به ما آموخت. در اوراسیا، ما به محصولی که معامله می‌شود فقط به چشم یک کالا نگاه نمی‌کنیم؛ بلکه باور داریم کیفیت هر کالا در نهایت روایتگر داستان ماست. به همین علت با دقتی محصول را انتخاب می‌کنیم که هرچند زمان‌بر، اما نتیجه رضایت‌بخش مشتری باشد. (تو پرانتز دومم بگم؛ به قول یکی از دوستان بخش طراحی داخلی، در نهایت هدفی که ما در ذهن داریم اینه که انبار مشتری از محصولات ما پر باشه و برند اوراسیا باشه که به چشم میاد.)`,

    storyP3: `امروز، اوراسیا تِرید یک شرکت بازرگانی بین‌المللی است که محوریت اصلی‌اش ساختن ارتباطات بلندمدت و قابل اعتماد بین تأمین‌کننده‌ها، خریداران و بازارهای بین‌المللی، از طریق شبکه تأمین، همکاری‌های تجاری و جابه‌جایی محصولات منتخب با تمرکز روی کیفیت است.`,
    missionEyebrow: "ماموریت ما",
    principlesEyebrow: "اصول",
    principlesTitle: "رویکرد ما",
    operationsEyebrow: "عملیات ما",
    operationsTitle: "کجا کار می‌کنیم",
    operationsIntro: "خوش حال می شویم بتوانیم یک جلسه حضوری در دفتر سعادت آباد داشته باشیم :)",
    imageCaption: "",
  },
  products: {
    breadcrumb: "محصولات",
    title: "محصولات ما",
    subtitle: "مجموعه منتخب محصولات ما برای تجارت داخلی، تأمین، واردات و صادرات بین‌المللی",
    filterAll: "همه محصولات",
    filterImport: "محصولات وارداتی",
    filterExport: "محصولات صادراتی",
    importEyebrow: "واردات",
    importTitle: "محصولات وارداتی",
    importIntro: "محصولاتی که از تأمین‌کننده‌های بین‌المللی برای بازارهای هدف تهیه می‌شوند:",
    exportEyebrow: "صادرات",
    exportTitle: "محصولات صادراتی",
    exportIntro: "محصولاتی که به خریداران و شرکای توزیع بین‌المللی ارائه می‌شوند:",
    ctaTitle: "به دنبال یک محصول خاص هستید؟",
    ctaBody: "محصول مورد نیاز خود را برای ما بفرستید و از موجودی، مشخصات و شرایط مطلع شوید.",
    detailsTitle: "مشخصات محصول",
    notFound: "محصول پیدا نشد",
    specs: {
      category: "دسته‌بندی",
      trade: "نوع تجارت",
      origin: "مبدا",
      packaging: "بسته‌بندی",
      import: "واردات",
      export: "صادرات",
    },
  },
  contact: {
    breadcrumb: "تماس",
    title: "تماس با ما",
    subtitle:
      "چه به دنبال یک تأمین‌کننده قابل‌اعتماد هستید، چه یک فرصت تأمین کالا یا همکاری تجاری بین‌المللی، خوشحال می‌شویم پیغامتان را دریافت کنیم.",
    detailsEyebrow: "جزئیات",
    detailsTitle: "اطلاعات شرکت",
    formEyebrow: "استعلام",
    formTitle: "ارسال پیام:",
    sentMessage: "ممنون از همراهی تون :)))",
    fields: {
      fullName: "نام و نام‌خانوادگی",
      companyName: "نام شرکت",
      email: "ایمیل",
      phone: "تلفن / واتس‌اپ",
      subject: "موضوع",
      message: "پیام",
    },
    info: {
      companyName: "نام شرکت",
      address: "آدرس",
      phone: "تلفن",
      email: "ایمیل",
      whatsapp: "واتس‌اپ",
      hours: "ساعت کاری",
      website: "وب‌سایت",
    },
  },
  footer: {
    navigationHeading: "منو",
    contactHeading: "تماس",
    findUs: "ما را پیدا کنید",
  },
  productCopy: {
    "import-product-01": {
      name: "دانه قهوه سبز",
      category: "قهوه و نوشیدنی",
      summary:
        "دانه قهوه سبز درجه‌یک ما رو امتحان کنید! از عربیکای خوش‌طعم اتیوپی و کلمبیا، تا روبوستای قوی اوگاندا، اندونزی و ویتنام. طعم عالی، کیفیت مرغوب، و تأمین‌شده با ظرافت و دقت بالا، مناسب هر ذائقه و سلیقه ای.",
      origin: "اتیوپی | کلمبیا | اوگاندا | اندونزی | ویتنام",
      packaging: "با دریافت یک نمونه مشتری همیشگی ما شوید!",
    },
    "import-product-02": {
      name: "زردچوبه",
      category: "ادویه و گیاهان دارویی",
      summary:
        "زردچوبه‌ای طلایی، خاکی و پررنگ که به‌ دلیل رنگ روشن و کیفیت پایدار انتخاب شده است یک گزینه کلیدی برای تولیدکنندگان مواد غذایی، سازندگان ادویه و برندهای سلامت‌محور که به دنبال یک تأمین‌کننده قابل‌اعتماد و ثابت هستند.",
      origin: "هند",
      packaging: "با دریافت یک نمونه رایگان و چشیدن عطر و طعم، مشتری همیشگی ما شوید",
    },
    "import-product-03": {
      name: "دارچین",
      category: "ادویه و گیاهان دارویی",
      summary:
        " و مشتری دائمی شوید و مشتری دائمی شویدگرم، معطر و پر از شخصیت — دارچین ما از مناطقی تأمین می‌شود که با طعم غنی و روغن طبیعی شان شناخته می شوند. چه بخواهید خط ادویه‌جات خود را پر کنید، چه به نانوایی‌ها و برندهای نوشیدنی بفروشید، می توانید یک سمپل از طرف ما دریافت کنید و مشتری دائمی شوید.",
      origin: "سریلانکا | اندونزی | ویتنام",
      packaging: "با دریافت یک سمپل طعم و رایحه را امتحان کنید",
    },
    "export-product-01": {
      name: "خرمای پیارم",
      category: "میوه خشک",
      summary:
        "خرمای پیارم یکی از محبوب‌ترین انواع خرمای ایران می باشد. این خرما باریک و تیره بوده، رطوبت کمی داشته، و  به دلیل شیرینی غلیظ و نیمه خشکش انتخاب اول خریدارانی است که به دنبال خرمای پرمیوم و هدیه‌پسند می باشند.",
      origin: "ایران",
      packaging: "با دریافت یک نمونه مشتری همیشگی ما شوید",
    },
    "export-product-02": {
      name: "خرمای زاهدی",
      category: "میوه خشک",
      summary:
        "محکم، نیمه‌خشک — خرمای زاهدی شکل و بافت خود را به خوبی حفظ می‌کند. به همین خاطر هم برای مصرف مستقیم، و هم فرآوری غذایی گزینه قابل‌اعتمادی می باشد. یک نوع همیشگی که خریداران در سراسر دنیا به آن اعتماد دارند.",
      origin: "ایران",
      packaging: "با دریافت یک نمونه مشتری همیشگی ما شوید",
    },
    "export-product-03": {
      name: "خرمای مضافتی",
      category: "میوه خشک",
      summary:
        "نرم، آبدار، و شیرین — خرمای مضافتی به‌ دلیل رنگ تیره و بافت آب‌شونده‌اش یکی از محبوب‌ترین انواع خرمای ایران به شمار می رود. یک انتخاب عالی برای خریدارانی که به دنبال محصولی لوکس می باشند.",
      origin: "ایران",
      packaging: "با دریافت یک نمونه مشتری همیشگی ما شوید",
    },
  },
};

export const dictionaries: Record<Lang, Dict> = { en, fa };
export type Translation = Dict;
