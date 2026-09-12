import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Section, SectionHeading } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/Button";
import { company } from "@/content/site";
import worldMap from "@/assets/world-map.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Orasia Trade | International Trading" },
      {
        name: "description",
        content:
          "Contact our team for product inquiries, sourcing requests, quotations and international trade partnerships.",
      },
      { property: "og:title", content: "Contact Orasia Trade | International Trading" },
      {
        property: "og:description",
        content: "Get in touch for sourcing requests, quotations and trade partnerships.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const fields = [
  { id: "fullName", label: "Full Name", type: "text", required: true, autoComplete: "name" },
  { id: "companyName", label: "Company Name", type: "text", required: false, autoComplete: "organization" },
  { id: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
  { id: "phone", label: "Phone / WhatsApp", type: "tel", required: false, autoComplete: "tel" },
  { id: "subject", label: "Subject", type: "text", required: true, autoComplete: "off" },
] as const;

function ContactPage() {
  const [sent, setSent] = useState(false);

  // NOTE: no backend connected yet. Values are collected here so this handler can
  // later be pointed at an email service or form provider.
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    console.info("Inquiry submitted (not yet delivered — connect a form service):", data);
    setSent(true);
  }

  const details = [
    { label: "Company Name", value: company.name },
    { label: "Address", value: company.address },
    { label: "Phone", value: company.phone, href: `tel:${company.phone}` },
    { label: "Email", value: company.email, href: `mailto:${company.email}` },
    { label: "WhatsApp", value: company.whatsapp },
    { label: "Business Hours", value: company.hours },
    { label: "Website", value: company.website },
  ];

  return (
    <>
      <PageHero
        breadcrumb="Contact"
        title="Contact Us"
        subtitle="Whether you are looking for a reliable supplier, sourcing opportunity, or international trade partnership, we would be pleased to hear from you."
        image={worldMap}
        imageAlt="Stylised dotted world map"
      />

      <Section>
        <div className="grid gap-14 md:grid-cols-[0.85fr_1.15fr] md:gap-20">
          <div>
            <SectionHeading eyebrow="Details" title="Company Information" />
            <dl className="mt-8">
              {details.map((d) => (
                <div key={d.label} className="border-b border-hairline py-4 first:border-t">
                  <dt className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{d.label}</dt>
                  <dd className="mt-1.5 text-sm text-navy">
                    {d.href ? (
                      <a className="transition-colors hover:text-bronze" href={d.href}>
                        {d.value}
                      </a>
                    ) : (
                      d.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 text-xs text-muted-foreground">
              Contact details are placeholders. A map will be added once a verified business address is
              provided.
            </p>
          </div>

          <div>
            <SectionHeading eyebrow="Inquiry" title="Send Us a Message" />
            <form onSubmit={handleSubmit} className="mt-8 grid gap-6 sm:grid-cols-2">
              {fields.map((f) => (
                <div key={f.id} className={f.id === "subject" ? "sm:col-span-2" : ""}>
                  <label htmlFor={f.id} className="block text-sm font-medium text-navy">
                    {f.label}
                    {f.required ? <span className="text-bronze"> *</span> : null}
                  </label>
                  <input
                    id={f.id}
                    name={f.id}
                    type={f.type}
                    required={f.required}
                    autoComplete={f.autoComplete}
                    className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-3 text-sm text-foreground transition-colors placeholder:text-muted-foreground focus:border-bronze focus:outline-none"
                  />
                </div>
              ))}
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-navy">
                  Message<span className="text-bronze"> *</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-3 text-sm text-foreground transition-colors focus:border-bronze focus:outline-none"
                />
              </div>
              <div className="sm:col-span-2 flex flex-wrap items-center gap-4">
                <Button type="submit">Send Inquiry</Button>
                {sent ? (
                  <p role="status" className="text-sm text-muted-foreground">
                    Thank you — your inquiry has been captured. [Connect a form service to deliver it.]
                  </p>
                ) : null}
              </div>
            </form>
          </div>
        </div>
      </Section>
    </>
  );
}
