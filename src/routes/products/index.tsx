import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Section, SectionHeading } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import { ProductCard } from "@/components/ProductCard";
import { ActionLink } from "@/components/Button";
import { products } from "@/content/site";
import cargo from "@/assets/cargo-ship.jpg";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Products | [Company Name] | Import & Export" },
      {
        name: "description",
        content:
          "Explore our selected range of products available for international sourcing, import and export. Request information on any item.",
      },
      { property: "og:title", content: "Products | [Company Name] | Import & Export" },
      {
        property: "og:description",
        content: "Selected products available for international sourcing, import and export.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});

type Filter = "all" | "import" | "export";

const filters: { key: Filter; label: string }[] = [
  { key: "all", label: "All Products" },
  { key: "import", label: "Import Products" },
  { key: "export", label: "Export Products" },
];

function ProductsPage() {
  const [filter, setFilter] = useState<Filter>("all");
  const importProducts = products.filter((p) => p.trade === "import");
  const exportProducts = products.filter((p) => p.trade === "export");

  return (
    <>
      <PageHero
        breadcrumb="Products"
        title="Our Products"
        subtitle="Explore our selected range of products available for international sourcing, import, and export."
        image={cargo}
        imageAlt="Container vessel photographed from above at sea"
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
              className={`-mb-px border-b-2 px-4 py-3 text-sm transition-colors ${
                filter === f.key
                  ? "border-bronze text-navy"
                  : "border-transparent text-muted-foreground hover:text-navy"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {(filter === "all" || filter === "import") && (
          <div className="mt-14">
            <SectionHeading
              eyebrow="Import"
              title="Import Products"
              intro="Products sourced from international suppliers for the markets we serve."
            />
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {importProducts.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        )}

        {(filter === "all" || filter === "export") && (
          <div className="mt-20">
            <SectionHeading
              eyebrow="Export"
              title="Export Products"
              intro="Products offered to international buyers and distribution partners."
            />
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {exportProducts.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        )}

        <p className="mt-16 text-sm text-muted-foreground">
          Product names, categories and specifications shown are placeholders and will be replaced with
          confirmed information. Prices are not published — please request a quotation.
        </p>
      </Section>

      <Section tone="dark">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-xl">
            <h2 className="text-3xl text-primary-foreground sm:text-4xl">
              Looking for something specific?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-primary-foreground/70">
              Send us your requirements and we will confirm availability, specifications and terms.
            </p>
          </div>
          <ActionLink to="/contact" variant="onDark">
            Request a Quote
          </ActionLink>
        </div>
      </Section>
    </>
  );
}
