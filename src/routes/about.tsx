import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/Section";
import { ActionLink } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { activities, company, markets, principles } from "@/content/site";
import cargo from "@/assets/cargo-ship.jpg";
import warehouse from "@/assets/warehouse.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About [Company Name] | International Trading Company" },
      {
        name: "description",
        content:
          "Learn about our international trading business: sourcing, import, export and distribution of selected products for buyers and suppliers worldwide.",
      },
      { property: "og:title", content: "About [Company Name] | International Trading Company" },
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
          <SectionHeading eyebrow="Overview" title="Company Overview" />
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              {company.name} is an international trading company active in the sourcing, import, export
              and distribution of selected products. We work between suppliers and buyers, coordinating
              the commercial and logistical steps required to move goods across borders.
            </p>
            <p>
              Our main product categories are [Product Category], [Product Category] and [Product
              Category]. Our geographic focus covers {markets.join(", ")}.
            </p>
            <p>
              Our business model is straightforward: we identify requirements, match them with suitable
              supply, and manage the trade relationship through to delivery. Commercial terms are agreed
              case by case with each partner. [Replace this paragraph with your confirmed business model
              description.]
            </p>
          </div>
        </div>
      </Section>

      <Section tone="dark">
        <div className="max-w-3xl">
          <p className="eyebrow">Our Mission</p>
          <p className="mt-6 font-[family-name:var(--font-display)] text-2xl leading-snug text-primary-foreground sm:text-3xl">
            Our mission is to build dependable trade relationships by connecting quality products with the
            right markets and creating sustainable value for our business partners.
          </p>
        </div>
      </Section>

      <Section tone="ivory">
        <SectionHeading eyebrow="Activities" title="Our Activities" />
        <div className="mt-14 grid gap-px sm:grid-cols-2">
          {activities.map((a) => (
            <div key={a.number} className="border-t border-hairline py-8 pr-8">
              <span className="font-[family-name:var(--font-display)] text-sm font-semibold text-bronze">
                {a.number}
              </span>
              <h3 className="mt-4 text-xl text-navy">{a.title}</h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">{a.body}</p>
            </div>
          ))}
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
              intro="Representative image. [Replace with an authentic photograph of your own premises or operations once available — no location is implied here.]"
            />
            <ActionLink to="/contact" variant="outline" className="mt-8">
              Contact Us
            </ActionLink>
          </div>
          <figure>
            <img
              src={warehouse}
              alt="Interior of a distribution warehouse with palletised goods"
              width={1200}
              height={1400}
              loading="lazy"
              className="aspect-4/3 w-full rounded-sm object-cover"
            />
            <figcaption className="mt-3 text-xs text-muted-foreground">
              [Placeholder image — not a photograph of the company's premises.]
            </figcaption>
          </figure>
        </div>
      </Section>
    </>
  );
}
