import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/Section";
import { ActionLink } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { useI18n } from "@/i18n";
import location from "@/assets/location.jpg";
import yazdanSerious from "@/assets/yazdan-serious.webp";
import yazdanCandid from "@/assets/yazdan.webp";
import mehdiSerious from "@/assets/mehdi-serious.webp";
import mehdiCandid from "@/assets/mehdi.webp";
import kianaImage from "@/assets/kiana.webp";

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

      <Section className="py-16 md:py-20">
        <SectionHeading
          eyebrow={t.about.teamEyebrow}
          title={t.about.teamTitle}
          intro={t.about.teamIntro}
        />

        <div className="mt-14 grid gap-14 lg:grid-cols-3">
          {t.about.teamMembers.map((member, index) => {
            const images = [
              {
                primary: yazdanSerious,
                candid: yazdanCandid,
                candidAlt: "Yazdan in a relaxed moment",
              },
              {
                primary: mehdiSerious,
                candid: mehdiCandid,
                candidAlt: "Mohammadmehdi in a relaxed moment",
              },
              {
                primary: kianaImage,
                candid: null,
                candidAlt: "",
              },
            ];

            const imageSet = images[index];

            return (
              <article key={member.name} className="group">
                {/* Primary portrait */}
                <div className="relative">
                  <div className="overflow-hidden rounded-sm bg-muted">
                    <img
                      src={imageSet.primary}
                      alt={`${member.name} — ${member.role}`}
                      width={900}
                      height={1100}
                      loading="lazy"
                      className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-[1.01]"
                    />
                  </div>

                  {/* Candid photo */}
                  {imageSet.candid ? (
                    <div className="absolute -bottom-8 left-6 w-[34%] overflow-hidden border-4 border-background bg-background shadow-lg">
                      <img
                        src={imageSet.candid}
                        alt={imageSet.candidAlt}
                        width={500}
                        height={650}
                        loading="lazy"
                        className="aspect-[4/5] w-full object-cover"
                      />
                    </div>
                  ) : null}
                </div>

                {/* Name & role */}
                <div className={imageSet.candid ? "mt-14" : "mt-8"}>
                  <h3 className="text-2xl text-navy">{member.name}</h3>

                  <p className="mt-2 text-sm font-medium tracking-wide text-bronze">
                    {member.role}
                  </p>
                </div>

                {/* Story + caption */}
                <div className="mt-6 border-t border-hairline pt-5">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {member.story}
                  </p>

                  <p className="mt-5 text-sm italic text-navy/70">
                    {member.caption}
                  </p>
                </div>
              </article>
            );
          })}
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
