import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Section, SectionHeading } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import { ProductCard } from "@/components/ProductCard";
import { ActionLink } from "@/components/Button";
import { products, type Product } from "@/content/site";
import { useI18n } from "@/i18n";
import productsImage from "@/assets/products.png";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Products | Orasia Trade | Import & Export" },
      {
        name: "description",
        content:
          "Explore our selected range of products available for international sourcing, import and export. Request information on any item.",
      },
      { property: "og:title", content: "Products | Orasia Trade | Import & Export" },
      {
        property: "og:description",
        content: "Selected products available for international sourcing, import and export.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://orasiatrade.com/products" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://orasiatrade.com/products",
      },
    ],
  }),
  component: ProductsPage,
});

type Filter = "all" | "import" | "export";

function ProductGroup({
  eyebrow,
  title,
  intro,
  items,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  items: Product[];
}) {
  if (items.length === 0) return null;
  return (
    <div className="mt-14 first:mt-0">
      <SectionHeading eyebrow={eyebrow} title={title} intro={intro} />
      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </div>
  );
}

function ProductsPage() {
  const { t } = useI18n();
  const [filter, setFilter] = useState<Filter>("all");
  const importProducts = products.filter((p) => p.trade === "import");
  const exportProducts = products.filter((p) => p.trade === "export");

  const filters: { key: Filter; label: string }[] = [
    { key: "all", label: t.products.filterAll },
    { key: "import", label: t.products.filterImport },
    { key: "export", label: t.products.filterExport },
  ];

  return (
    <>
      <PageHero
        breadcrumb={t.products.breadcrumb}
        title={t.products.title}
        subtitle={t.products.subtitle}
        image={productsImage}
        imageAlt="Products"
      />

      <Section>
        <div
          role="tablist"
          aria-label="Product categories"
          className="flex flex-wrap gap-2 border-b border-hairline"
        >
          {filters.map((f) => (
            <button
              key={f.key}
              role="tab"
              type="button"
              aria-selected={filter === f.key}
              onClick={() => setFilter(f.key)}
              className={`-mb-px border-b-2 px-4 py-3 text-sm transition-colors ${filter === f.key
                ? "border-bronze text-navy"
                : "border-transparent text-muted-foreground hover:text-navy"
                }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {filter === "all" || filter === "import" ? (
          <ProductGroup
            eyebrow={t.products.importEyebrow}
            title={t.products.importTitle}
            intro={t.products.importIntro}
            items={importProducts}
          />
        ) : null}

        {filter === "all" || filter === "export" ? (
          <ProductGroup
            eyebrow={t.products.exportEyebrow}
            title={t.products.exportTitle}
            intro={t.products.exportIntro}
            items={exportProducts}
          />
        ) : null}
      </Section>

      <Section tone="dark">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-xl">
            <h2 className="text-3xl text-primary-foreground sm:text-4xl">{t.products.ctaTitle}</h2>
            <p className="mt-4 text-base leading-relaxed text-primary-foreground/70">{t.products.ctaBody}</p>
          </div>
          <ActionLink to="/contact" variant="onDark">
            {t.actions.requestQuote}
          </ActionLink>
        </div>
      </Section>
    </>
  );
}
