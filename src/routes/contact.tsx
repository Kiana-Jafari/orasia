import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";

import { Section, SectionHeading } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/Button";
import { companyContact } from "@/content/site";
import { useI18n } from "@/i18n";

import worldMap from "@/assets/world-map.jpg";
import { submitContactForm } from "@/functions/contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      {
        title: "Contact Orasia Trade | International Trading",
      },
      {
        name: "description",
        content:
          "Contact our team for product inquiries, sourcing requests, quotations and international trade partnerships.",
      },
      {
        property: "og:title",
        content: "Contact Orasia Trade | International Trading",
      },
      {
        property: "og:description",
        content:
          "Get in touch for sourcing requests, quotations and trade partnerships.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:url",
        content: "https://orasiatrade.com/contact",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://orasiatrade.com/contact",
      },
    ],
  }),

  component: ContactPage,
});

function ContactPage() {
  const { t } = useI18n();
  const [sent, setSent] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = Object.fromEntries(
      new FormData(event.currentTarget),
    ) as {
      fullName: string;
      companyName?: string;
      email: string;
      phone?: string;
      subject: string;
      message: string;
    };

    try {
      await submitContactForm({ data });
      setSent(true);
    } catch (err) {
      console.error(err);
    }
  }

  const fields = [
    {
      id: "fullName",
      label: t.contact.fields.fullName,
      type: "text",
      required: true,
      autoComplete: "name",
    },
    {
      id: "companyName",
      label: t.contact.fields.companyName,
      type: "text",
      required: false,
      autoComplete: "organization",
    },
    {
      id: "email",
      label: t.contact.fields.email,
      type: "email",
      required: true,
      autoComplete: "email",
    },
    {
      id: "phone",
      label: t.contact.fields.phone,
      type: "tel",
      required: false,
      autoComplete: "tel",
    },
    {
      id: "subject",
      label: t.contact.fields.subject,
      type: "text",
      required: true,
      autoComplete: "off",
    },
  ] as const;

  const details = [
    {
      label: t.contact.info.companyName,
      value: t.company.name,
    },
    {
      label: t.contact.info.address,
      value: t.company.address,
    },
    {
      label: t.contact.info.phone,
      value: companyContact.phone,
      href: `tel:${companyContact.phone}`,
    },
    {
      label: t.contact.info.email,
      value: companyContact.email,
      href: `mailto:${companyContact.email}`,
    },
    {
      label: t.contact.info.whatsapp,
      value: companyContact.whatsapp,
    },
    {
      label: t.contact.info.hours,
      value: t.company.hours,
    },
    {
      label: t.contact.info.website,
      value: companyContact.website,
    },
  ];

  return (
    <>
      <PageHero
        breadcrumb={t.contact.breadcrumb}
        title={t.contact.title}
        subtitle={t.contact.subtitle}
        image={worldMap}
        imageAlt="Stylised dotted world map"
      />

      <Section>
        <div className="grid gap-14 md:grid-cols-[0.85fr_1.15fr] md:gap-20">
          <div>
            <SectionHeading
              eyebrow={t.contact.detailsEyebrow}
              title={t.contact.detailsTitle}
            />

            <dl className="mt-8">
              {details.map((d) => (
                <div
                  key={d.label}
                  className="border-b border-hairline py-4 first:border-t"
                >
                  <dt className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                    {d.label}
                  </dt>

                  <dd className="mt-1.5 text-sm text-navy">
                    {d.href ? (
                      <a
                        className="transition-colors hover:text-bronze"
                        href={d.href}
                      >
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
              {t.contact.detailsNote}
            </p>
          </div>

          <div>
            <SectionHeading
              eyebrow={t.contact.formEyebrow}
              title={t.contact.formTitle}
            />

            <form
              onSubmit={handleSubmit}
              className="mt-8 grid gap-6 sm:grid-cols-2"
            >
              {fields.map((f) => (
                <div
                  key={f.id}
                  className={
                    f.id === "subject"
                      ? "sm:col-span-2"
                      : ""
                  }
                >
                  <label
                    htmlFor={f.id}
                    className="block text-sm font-medium text-navy"
                  >
                    {f.label}
                    {f.required ? (
                      <span className="text-bronze"> *</span>
                    ) : null}
                  </label>

                  <input
                    id={f.id}
                    name={f.id}
                    type={f.type}
                    required={f.required}
                    autoComplete={f.autoComplete}
                    className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-3 text-sm text-foreground transition-all duration-200 placeholder:text-muted-foreground focus:border-bronze focus:shadow-[0_0_0_3px_oklch(0.68_0.07_85_/_15%)] focus:outline-none"
                  />
                </div>
              ))}

              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-navy"
                >
                  {t.contact.fields.message}
                  <span className="text-bronze"> *</span>
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-3 text-sm text-foreground transition-all duration-200 focus:border-bronze focus:shadow-[0_0_0_3px_oklch(0.68_0.07_85_/_15%)] focus:outline-none"
                />
              </div>

              <div className="sm:col-span-2 flex flex-wrap items-center gap-4">
                <Button type="submit">
                  {t.actions.sendInquiry}
                </Button>

                {sent ? (
                  <p
                    role="status"
                    className="reveal flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="size-4 shrink-0 text-gold"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>

                    {t.contact.sentMessage}
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