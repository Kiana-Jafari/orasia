import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navigation } from "@/content/site";
import { useI18n } from "@/i18n";
import { ActionLink } from "./Button";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { t } = useI18n();

  return (
    <header className="sticky top-0 z-50 border-b border-primary-foreground/10 bg-navy/95 backdrop-blur-xl">
      <div className="mx-auto flex h-20 w-full max-w-[1360px] items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link to="/" className="flex items-center gap-3" aria-label={`${t.company.name} — ${t.labels.home}`}>
          <span className="grid size-9 place-items-center border border-gold/40 bg-gold/10 font-[family-name:var(--font-display)] text-lg text-gold">O</span>
          <span className="flex flex-col leading-none">
            <span className="font-[family-name:var(--font-display)] text-[15px] font-medium uppercase text-primary-foreground">Orasia</span>
            <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.28em] text-primary-foreground/45">Trade</span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-primary-foreground after:scale-x-100" }}
              inactiveProps={{ className: "text-primary-foreground/55" }}
              className="relative py-1 text-sm transition-colors after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-gold after:transition-transform hover:text-primary-foreground"
            >
              {t.nav[item.key]}
            </Link>
          ))}
          <LanguageSwitcher />
          <ActionLink to="/contact" className="px-5 py-2.5">
            {t.actions.contactUs}
          </ActionLink>
        </nav>

        <button
          type="button"
          className="-me-2 p-2 text-primary-foreground md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? t.labels.menuClose : t.labels.menuOpen}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-primary-foreground/10 bg-navy md:hidden"
        >
          <div className="mx-auto flex max-w-[1200px] flex-col px-5 py-3 sm:px-8">
            {navigation.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-primary-foreground" }}
                inactiveProps={{ className: "text-primary-foreground/60" }}
                className="border-b border-primary-foreground/10 py-4 text-base last:border-0"
              >
                {t.nav[item.key]}
              </Link>
            ))}
            <div className="mt-4 mb-2">
              <LanguageSwitcher />
            </div>
            <ActionLink to="/contact" className="mb-2" onClick={() => setOpen(false)}>
              {t.actions.contactUs}
            </ActionLink>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
