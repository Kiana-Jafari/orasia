import { createFileRoute, notFound } from "@tanstack/react-router";
import { Section } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import { ActionLink } from "@/components/Button";
import { products } from "@/content/site";
import { dictionaries } from "@/i18n/translations";
import { useI18n } from "@/i18n";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = products.find((p) => p.slug === params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Product not found" }, { name: "robots", content: "noindex" }] };
    }
    const { product } = loaderData;
    const copy = dictionaries.en.productCopy[product.slug];
    return {
      meta: [
        { title: `${copy.name} | ${dictionaries.en.meta.productTitleSuffix}` },
        { name: "description", content: `${copy.name} — ${copy.category}. ${copy.summary}` },
        { property: "og:title", content: `${copy.name} | Orasia Trade` },
        { property: "og:description", content: copy.summary },
        { property: "og:type", content: "product" },
        { property: "og:url", content: `/products/${product.slug}` },
      ],
      links: [{ rel: "canonical", href: `/products/${product.slug}` }],
    };
  },
  component: ProductDetail,
});

function ProductDetail() {
  const { product } = Route.useLoaderData();
  const { t } = useI18n();
  const copy = t.productCopy[product.slug];

  const specs = [
    { label: t.products.specs.category, value: copy.category },
    { label: t.products.specs.trade, value: product.trade === "import" ? t.products.specs.import : t.products.specs.export },
    { label: t.products.specs.origin, value: copy.origin },
    { label: t.products.specs.packaging, value: copy.packaging },
  ];

  return (
    <>
      <PageHero
        breadcrumb={copy.name}
        parent={{ label: t.products.breadcrumb, to: "/products" }}
        title={copy.name}
        subtitle={copy.summary}
        image={product.heroImage}
        imageAlt={`${copy.name} product`}
      />

      <Section>
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div className="mx-auto aspect-square w-full max-w-sm overflow-hidden bg-ivory shadow-sm transition-shadow duration-300 hover:shadow-md md:mx-0">
            <img
              src={product.image}
              alt={copy.name}
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.04]"
            />
          </div>

          <div>
            <p className="eyebrow">{copy.category}</p>

            <h2 className="mt-3 text-3xl text-navy">{t.products.detailsTitle}</h2>

            <dl className="mt-8">
              {specs.map((s) => (
                <div
                  key={s.label}
                  className="grid grid-cols-1 gap-1 border-b border-hairline py-4 first:border-t sm:grid-cols-[180px_1fr] sm:gap-6"
                >
                  <dt className="text-sm text-muted-foreground">{s.label}</dt>
                  <dd className="text-sm text-navy">{s.value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex flex-wrap gap-3">
              <ActionLink to="/contact">{t.actions.requestInfo}</ActionLink>
              <ActionLink to="/products" variant="outline">
                {t.actions.backToProducts}
              </ActionLink>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
