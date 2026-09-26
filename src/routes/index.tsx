import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/Section";
import { ActionLink } from "@/components/Button";
import { ProductCard } from "@/components/ProductCard";
import { products, companyContact } from "@/content/site";
import { useI18n } from "@/i18n";
import heroPort from "@/assets/hero-port.webp";
import worldMap from "@/assets/world-map.jpg";
import team from "@/assets/core-team.webp";

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
      { property: "og:url", content: "https://orasiatrade.com/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://orasiatrade.com/" }],
  }),
  component: HomePage,
});

function HomePage() {
  const { t } = useI18n();
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
        <div className="absolute inset-0 -z-10 bg-linear-to-r from-navy-deep/35 via-navy-deep/21 to-navy-deep/7 rtl:bg-linear-to-l" />
        <div className="mx-auto w-full max-w-[1200px] px-5 py-16 sm:px-8 md:py-20">
          <div className="max-w-2xl reveal">
            <p className="eyebrow text-primary-foreground/75">{t.home.eyebrowHero}</p>
            <h1 className="mt-4 text-4xl leading-[1.08] text-primary-foreground sm:text-5xl md:text-6xl">
              {t.home.heroLine1}
              <br />
              {t.home.heroLine2}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/95 sm:text-lg">
              {t.company.description}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <ActionLink to="/products" variant="primary" className="bg-primary-foreground text-navy hover:bg-ivory">
                {t.actions.exploreProducts}
              </ActionLink>
              <ActionLink to="/contact" variant="onDark">
                {t.actions.contactUs}
              </ActionLink>
            </div>
          </div>
        </div>
      </section>

      {/* Who we are */}
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">

          {/* Text */}
          <div className="max-w-2xl">
            <SectionHeading
              eyebrow={t.home.introEyebrow}
              title={t.home.introTitle}
            />

            <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>{t.home.introText}</p>
            </div>

            <ActionLink to="/about" variant="outline" className="mt-6">
              {t.actions.readOurStory}
            </ActionLink>
          </div>

          {/* Team image */}
          <div className="overflow-hidden rounded-2xl">
            <img
              src={team}
              alt="Orasia Trade team"
              className="h-full w-full object-cover"
            />
          </div>

        </div>
      </Section>

      {/* What we do */}
      <Section tone="ivory" className="py-14 md:py-20">
        <SectionHeading eyebrow={t.home.activitiesEyebrow} title={t.home.activitiesTitle} />
        <div className="mt-8 grid gap-px border-t border-hairline sm:grid-cols-2 lg:grid-cols-4">
          {t.activities.map((a) => (
            <div key={a.number} className="border-b border-hairline py-6 pe-8 sm:border-b-0 sm:pt-6">
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
            eyebrow={t.home.catalogueEyebrow}
            title={t.home.catalogueTitle}
            intro={t.home.catalogueIntro}
          />
          <ActionLink to="/products" variant="outline">
            {t.actions.viewAll}
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
              eyebrow={t.home.globalEyebrow}
              title={t.home.globalTitle}
              onDark
              intro={t.home.globalIntro}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <Section tone="dark">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-xl">
            <h2 className="text-3xl text-primary-foreground sm:text-4xl">{t.home.ctaTitle}</h2>
            <p className="mt-4 text-base leading-relaxed text-primary-foreground/70">{t.home.ctaBody}</p>
          </div>
          <ActionLink to="/contact" variant="onDark">
            {t.actions.contactUs}
          </ActionLink>
        </div>
        <p className="mt-10 text-sm text-primary-foreground/50">
          {t.home.ctaEmailPrefix}{" "}
          <Link to="/contact" className="underline underline-offset-4 hover:text-primary-foreground">
            {companyContact.email}
          </Link>
        </p>
      </Section>
    </>
  );
}