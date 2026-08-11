import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { company, navigation } from "@/content/site";
import { ActionLink } from "./Button";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-18 w-full max-w-[1200px] items-center justify-between px-5 py-4 sm:px-8">
        <Link to="/" className="flex flex-col leading-none" aria-label={`${company.name} — home`}>
          <span className="font-[family-name:var(--font-display)] text-lg font-extrabold tracking-tight text-navy">
            {company.name}
          </span>
          <span className="mt-1 text-[0.625rem] uppercase tracking-[0.2em] text-muted-foreground">
            {company.tagline}
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-navy after:scale-x-100" }}
              inactiveProps={{ className: "text-muted-foreground" }}
              className="relative py-1 text-sm transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-bronze after:transition-transform hover:text-navy"
            >
              {item.label}
            </Link>
          ))}
          <ActionLink to="/contact" className="px-5 py-2.5">
            Contact Us
          </ActionLink>
        </nav>

        <button
          type="button"
          className="-mr-2 p-2 text-navy md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-hairline bg-background md:hidden"
        >
          <div className="mx-auto flex max-w-[1200px] flex-col px-5 py-3 sm:px-8">
            {navigation.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-navy" }}
                inactiveProps={{ className: "text-muted-foreground" }}
                className="border-b border-hairline py-4 text-base last:border-0"
              >
                {item.label}
              </Link>
            ))}
            <ActionLink to="/contact" className="mt-4 mb-2" onClick={() => setOpen(false)}>
              Contact Us
            </ActionLink>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
