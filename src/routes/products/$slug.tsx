import { createFileRoute, notFound } from "@tanstack/react-router";
import { Section } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import { ActionLink } from "@/components/Button";
import { products } from "@/content/site";

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
    return {
      meta: [
        { title: `${product.name} | Orasia Trade | Import & Export` },
        { name: "description", content: `${product.name} — ${product.category}. ${product.summary}` },
        { property: "og:title", content: `${product.name} | Orasia Trade` },
        { property: "og:description", content: product.summary },
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

  const specs = [
    { label: "Category", value: product.category },
    { label: "Trade", value: product.trade === "import" ? "Import" : "Export" },
    { label: "Origin", value: product.origin },
    { label: "Available formats", value: product.formats },
    { label: "Packaging", value: product.packaging },
    { label: "Minimum order quantity", value: product.moq },
    { label: "Specifications", value: product.specifications },
    { label: "Certifications", value: product.certifications },
    { label: "Additional information", value: product.notes },
  ];

  return (
    <>
      <PageHero
        breadcrumb={product.name}
        parent={{ label: "Products", to: "/products" }}
        title={product.name}
        subtitle={product.summary}
        image={product.heroImage}
        imageAlt={`${product.name} product`}
      />

      <Section>
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">

          <div className="aspect-4/3 overflow-hidden bg-ivory">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <p className="eyebrow">{product.category}</p>

            <h2 className="mt-3 text-3xl text-navy">
            Product Details
            </h2>

            <dl className="mt-8">
              {specs.map((s) => (
                <div
                  key={s.label}
                  className="grid grid-cols-1 gap-1 border-b border-hairline py-4 first:border-t sm:grid-cols-[180px_1fr] sm:gap-6"
                >
                <dt className="text-sm text-muted-foreground">
                  {s.label}
                </dt>

                <dd className="text-sm text-navy">
                  {s.value}
                </dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex flex-wrap gap-3">
              <ActionLink to="/contact">
                Request Information
              </ActionLink>

              <ActionLink to="/products" variant="outline">
                Back to Products
              </ActionLink>
            </div>

            <p className="mt-6 text-xs text-muted-foreground">
              All values shown are placeholders pending confirmed product data.
            </p>
          </div>

        </div>
      </Section>
    </>
  );
}
