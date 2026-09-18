import { Link } from "@tanstack/react-router";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useI18n } from "@/i18n";

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
  const { t, dir } = useI18n();
  const Chevron = dir === "rtl" ? ChevronLeft : ChevronRight;

  return (
    <section className="relative isolate min-h-[390px] overflow-hidden bg-navy-deep md:min-h-[470px]">
      <img
        src={image}
        alt={imageAlt}
        width={1600}
        height={900}
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-60"
      />
      <div className="absolute inset-0 -z-10 bg-linear-to-t from-navy-deep/70 via-navy-deep/46 to-navy/32" />
      <div className="mx-auto flex min-h-[390px] w-full max-w-[1360px] flex-col justify-end px-5 py-14 sm:px-8 md:min-h-[470px] md:py-20 lg:px-10">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-xs text-primary-foreground/60">
            <li>
              <Link to="/" className="hover:text-primary-foreground">
                {t.labels.home}
              </Link>
            </li>
            {parent ? (
              <>
                <li aria-hidden="true">
                  <Chevron size={12} />
                </li>
                <li>
                  <Link to={parent.to} className="hover:text-primary-foreground">
                    {parent.label}
                  </Link>
                </li>
              </>
            ) : null}
            <li aria-hidden="true">
              <Chevron size={12} />
            </li>
            <li aria-current="page" className="text-primary-foreground/90">
              {breadcrumb}
            </li>
          </ol>
        </nav>
        <h1 className="mt-8 max-w-4xl text-4xl font-medium leading-tight text-primary-foreground sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/95 sm:text-lg">
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  );
}
