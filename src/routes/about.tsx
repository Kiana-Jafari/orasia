import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/Section";
import { ActionLink } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { useI18n } from "@/i18n";
import location from "@/assets/location.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Orasia Trade | International Trading Company" },
      {
        name: "description",
        content:
          "Learn about our international trading business: sourcing, import, export and distribution of selected products for buyers and suppliers worldwide.",
      },
      { property: "og:title", content: "About Orasia Trade | International Trading Company" },
      {
        property: "og:description",
        content: "Building reliable connections across international markets.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://orasiatrade.com/about" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://orasiatrade.com/about",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t } = useI18n();

  return (
    <>
      <PageHero
        breadcrumb={t.about.breadcrumb}
        title={t.about.title}
        subtitle={t.about.subtitle}
        image={location}
        imageAlt="Aerial view of a container vessel at sea"
      />

      <Section>
        <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          <SectionHeading eyebrow={t.about.storyEyebrow} title={t.about.storyTitle} />

          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>{t.about.storyP1}</p>
            <p>{t.about.storyP2}</p>
            <p>{t.about.storyP3}</p>
          </div>
        </div>
      </Section>

      <Section tone="dark">
        <div className="max-w-3xl">
          <p className="eyebrow-light">{t.about.missionEyebrow}</p>
          <p className="mt-6 font-[Calibri,sans-serif] text-2xl leading-snug text-primary-foreground sm:text-3xl">
            {t.company.mission}
          </p>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow={t.about.principlesEyebrow} title={t.about.principlesTitle} />
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {t.principles.map((p) => (
            <div key={p.title} className="border-t border-navy/80 pt-6">
              <h3 className="text-lg text-navy">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="ivory">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <SectionHeading
              eyebrow={t.about.operationsEyebrow}
              title={t.about.operationsTitle}
              intro={t.about.operationsIntro}
            />

            <ActionLink to="/contact" variant="outline" className="mt-8">
              {t.actions.contactUs}
            </ActionLink>
          </div>
          <figure>
            <img
              src={location}
              alt="An image of the company"
              width={1200}
              height={1400}
              loading="lazy"
              className="aspect-4/3 w-full rounded-sm object-cover"
            />
            {t.about.imageCaption ? (
              <figcaption className="mt-3 text-xs text-muted-foreground">{t.about.imageCaption}</figcaption>
            ) : null}
          </figure>
        </div>
      </Section>
    </>
  );
}
