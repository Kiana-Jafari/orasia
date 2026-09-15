import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/Section";
import { ActionLink } from "@/components/Button";
import { ProductCard } from "@/components/ProductCard";
import { activities, company, products } from "@/content/site";
import heroPort from "@/assets/hero-port.png";
import worldMap from "@/assets/world-map.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Orasia Trade | International Trading & Import Export" },
      {
        name: "description",
        content:
          "International trading company engaged in the sourcing, import, export and distribution of selected products across global markets.",
      },
      { property: "og:title", content: "Orasia Trade | International Trading & Import Export" },
      {
        property: "og:description",
        content:
          "Sourcing, import, export and distribution of selected products across international markets.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  const featured = products.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative isolate flex min-h-[560px] items-end overflow-hidden bg-navy-deep md:min-h-[640px]">
        <img
          src={heroPort}
          alt="Container terminal at dusk with stacked shipping containers and gantry cranes"
          width={1920}
          height={1088}
          fetchPriority="high"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-95"
        />
        <div className="absolute inset-0 -z-10 bg-linear-to-r from-navy-deep/50 via-navy-deep/30 to-navy-deep/10" />
        <div className="mx-auto w-full max-w-[1200px] px-5 py-16 sm:px-8 md:py-20">
          <div className="max-w-2xl reveal">
            <p className="eyebrow text-primary-foreground/75">International Trading Company</p>
            <h1 className="mt-4 text-4xl leading-[1.08] text-primary-foreground sm:text-5xl md:text-6xl">
              Trusted trade,
              <br />
              from source to destination.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/95 sm:text-lg">
              {company.description}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <ActionLink to="/products" variant="primary" className="bg-primary-foreground text-navy hover:bg-ivory">
                Explore Products
              </ActionLink>
              <ActionLink to="/contact" variant="onDark">
                Contact Us
              </ActionLink>
            </div>
          </div>
        </div>
      </section>

      {/* Who we are */}
      <Section>
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <SectionHeading eyebrow="Introduction" title="Who We Are" />
            <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
                A trading company built on trust, quality, and long-term partnerships across global markets.
              </p>
            </div>
            <ActionLink to="/about" variant="outline" className="mt-6">Read Our Story</ActionLink>
          </div>
          <img
            alt="An image of us"
            width={1200}
            height={1400}
            loading="lazy"
            className="aspect-4/5 w-full rounded-sm object-cover md:aspect-3/4"
          />
        </div>
      </Section>

      {/* What we do */}
      <Section tone="ivory" className="py-14 md:py-20">
        <SectionHeading eyebrow="Business Activities" title="What We Do" />
        <div className="mt-8 grid gap-px border-t border-hairline sm:grid-cols-2 lg:grid-cols-4">
          {activities.map((a) => (
            <div key={a.number} className="border-b border-hairline py-6 pr-8 sm:border-b-0 sm:pt-6">
              <span className="font-[family-name:var(--font-display)] text-sm font-semibold text-bronze">
                {a.number}
              </span>
              <h3 className="mt-3 text-lg text-navy">{a.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Featured products */}
      <Section>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Catalogue"
            title="Featured Products"
            intro="A selection from our import and export portfolio. Full specifications are available on request."
          />
          <ActionLink to="/products" variant="outline">
            View All Products
          </ActionLink>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </Section>

      {/* Global markets */}
      <section className="relative isolate overflow-hidden bg-navy py-14 md:py-20">
        <img
          src={worldMap}
          alt="Stylised dotted world map"
          width={1600}
          height={800}
          loading="lazy"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-90"
        />

        <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
          <div>
            <SectionHeading
              eyebrow="Global Reach"
              title="Connecting Markets"
              onDark
              intro="We work across borders to match products with the markets that require them — coordinating sourcing, documentation, and delivery between suppliers and buyers."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <Section tone="dark">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-xl">
            <h2 className="text-3xl text-primary-foreground sm:text-4xl">Let's Work Together</h2>
            <p className="mt-4 text-base leading-relaxed text-primary-foreground/70">
              For product inquiries, sourcing requests, or international trade opportunities, get in touch
              with our team.
            </p>
          </div>
          <ActionLink to="/contact" variant="onDark">
            Contact Us
          </ActionLink>
        </div>
        <p className="mt-10 text-sm text-primary-foreground/50">
          Or email us directly at{" "}
          <Link to="/contact" className="underline underline-offset-4 hover:text-primary-foreground">
            {company.email}
          </Link>
        </p>
      </Section>
    </>
  );
}
