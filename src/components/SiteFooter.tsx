import { Link } from "@tanstack/react-router";
import { navigation, companyContact } from "@/content/site";
import { useI18n } from "@/i18n";

export function SiteFooter() {
  const { t } = useI18n();

  return (
    <footer className="bg-navy-deep text-primary-foreground">
      <div className="mx-auto grid w-full max-w-[1200px] gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.4fr_1fr_1.2fr]">
        <nav aria-label="Footer">
          <h2 className="eyebrow-light">{t.footer.navigationHeading}</h2>
          <ul className="mt-5 space-y-3">
            {navigation.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  {t.nav[item.key]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="eyebrow-light">{t.footer.contactHeading}</h2>

          <ul className="mt-5 space-y-3 text-sm text-primary-foreground/70">
            <li>
              <a
                className="transition-colors hover:text-primary-foreground"
                href={`mailto:${companyContact.email}`}
              >
                {companyContact.email}
              </a>
            </li>

            <li>
              <a
                className="transition-colors hover:text-primary-foreground"
                href={`tel:${companyContact.phone}`}
              >
                {companyContact.phone}
              </a>
            </li>

            <li className="max-w-xs leading-relaxed">
              {t.company.address}
            </li>
          </ul>

          {companyContact.social.length > 0 ? (
            <ul className="mt-5 flex gap-4">
              {companyContact.social.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        <div>
          <h2 className="eyebrow-light">{t.footer.findUs}</h2>

          <div className="mt-5 overflow-hidden rounded-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3236.6919991960585!2d51.37717990963689!3d35.78294147244006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e07c8b7c67f53%3A0xda622d61ebdd0300!2sTehran%20Province%2C%20Tehran%2C%20District%202%2C%20E%20Sarv%20St%2C%20Iran!5e0!3m2!1sen!2s!4v1789562801287!5m2!1sen!2s"
              className="h-[220px] w-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Orasia Trade location"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto w-full max-w-[1200px] px-5 py-6 sm:px-8">
          <p className="text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} {t.company.name}. {t.labels.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}