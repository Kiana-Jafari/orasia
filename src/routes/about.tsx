import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/Section";
import { ActionLink } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { company, principles } from "@/content/site";
import cargo from "@/assets/cargo-ship.jpg";

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
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        breadcrumb="About Us"
        title={`About ${company.name}`}
        subtitle="Building reliable connections across international markets."
        image={cargo}
        imageAlt="Aerial view of a container vessel at sea"
      />

      <Section>
        <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          <SectionHeading eyebrow="Our Story" title="From Coffee to International Trade" />

          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              {company.name} began with coffee — and with it, a simple standard that has stayed
              with us ever since. A young, motivated team took its first steps into international
              trade by learning, cup by cup, what quality actually means: the sourcing, the grading,
              and the small decisions that separate a good batch from an exceptional one.
            </p>

            <p>
              That standard shaped how we think about every product we bring to market. We don't
              treat what we trade as inventory — each product carries our name, so it's chosen with
              the same care you'd give to something you're proud to stand behind. That's why our
              selection process stays deliberate, even when it would be faster not to be.
            </p>

            <p>
              Today, {company.name} is a trading company focused on building reliable connections
              between suppliers, buyers, and international markets. Through our sourcing network
              and commercial partnerships, we facilitate the movement of selected products across
              borders with a focus on quality, reliability, and long-term business relationships.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="dark">
        <div className="max-w-3xl">
          <p className="eyebrow-light">Our Mission</p>
          <p className="mt-6 font-[Calibri,sans-serif] text-2xl leading-snug text-primary-foreground sm:text-3xl">
            {company.mission}
          </p>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Principles" title="Our Approach" />
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((p) => (
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
              eyebrow="Our Operations"
              title="Where We Work"
            />
            <ActionLink to="/contact" variant="outline" className="mt-8">
              Contact Us
            </ActionLink>
          </div>
          <figure>
            <img
              alt="An image of the company"
              width={1200}
              height={1400}
              loading="lazy"
              className="aspect-4/3 w-full rounded-sm object-cover"
            />
            <figcaption className="mt-3 text-xs text-muted-foreground">
            </figcaption>
          </figure>
        </div>
      </Section>
    </>
  );
}
