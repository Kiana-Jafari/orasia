import { Link } from "@tanstack/react-router";
import { company, navigation } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-primary-foreground">
      <div className="mx-auto grid w-full max-w-[1200px] gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.4fr_1fr_1.2fr]">
        <nav aria-label="Footer">
          <h2 className="eyebrow-light">Navigation</h2>
          <ul className="mt-5 space-y-3">
            {navigation.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="eyebrow-light">Contact</h2>
          <ul className="mt-5 space-y-3 text-sm text-primary-foreground/70">
            <li>
              <a className="transition-colors hover:text-primary-foreground" href={`mailto:${company.email}`}>
                {company.email}
              </a>
            </li>
            <li>
              <a className="transition-colors hover:text-primary-foreground" href={`tel:${company.phone}`}>
                {company.phone}
              </a>
            </li>
            <li className="max-w-xs leading-relaxed">{company.address}</li>
          </ul>
          {company.social.length > 0 ? (
            <ul className="mt-5 flex gap-4">
              {company.social.map((s) => (
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
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto w-full max-w-[1200px] px-5 py-6 sm:px-8">
          <p className="text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
