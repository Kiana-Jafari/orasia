import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export function PageHero({
  breadcrumb,
  parent,
  title,
  subtitle,
  image,
  imageAlt,
}: {
  breadcrumb: string;
  parent?: { label: string; to: string };
  title: string;
  subtitle?: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-deep">
      <img
        src={image}
        alt={imageAlt}
        width={1600}
        height={900}
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-35"
      />
      <div className="absolute inset-0 -z-10 bg-navy-deep/60" />
      <div className="mx-auto w-full max-w-[1200px] px-5 py-20 sm:px-8 md:py-28">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-xs text-primary-foreground/60">
            <li>
              <Link to="/" className="hover:text-primary-foreground">
                Home
              </Link>
            </li>
            {parent ? (
              <>
                <li aria-hidden="true">
                  <ChevronRight size={12} />
                </li>
                <li>
                  <Link to={parent.to} className="hover:text-primary-foreground">
                    {parent.label}
                  </Link>
                </li>
              </>
            ) : null}
            <li aria-hidden="true">
              <ChevronRight size={12} />
            </li>
            <li aria-current="page" className="text-primary-foreground/90">
              {breadcrumb}
            </li>
          </ol>
        </nav>
        <h1 className="mt-8 max-w-3xl text-4xl leading-tight text-primary-foreground sm:text-5xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/75 sm:text-lg">
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  );
}
