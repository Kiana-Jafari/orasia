import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowLeft } from "lucide-react";
import type { Product } from "@/content/site";
import { useI18n } from "@/i18n";

export function ProductCard({ product }: { product: Product }) {
  const { t, dir } = useI18n();
  const copy = t.productCopy[product.slug];
  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight;

  return (
    <article className="group flex h-full flex-col border-t border-navy/20 bg-transparent pt-4 transition-transform duration-300 ease-out hover:-translate-y-1">
      <div className="mx-auto aspect-square w-[78%] overflow-hidden bg-slate-light shadow-sm transition-shadow duration-300 group-hover:shadow-md">
        <img
          src={product.image}
          alt={copy.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
        />
      </div>
      <div className="flex flex-1 flex-col pt-5">
        <p className="eyebrow">{copy.category}</p>
        <h3 className="mt-3 text-2xl font-medium text-navy">{copy.name}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{copy.summary}</p>
        <Link
          to="/products/$slug"
          params={{ slug: product.slug }}
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy transition-colors hover:text-gold"
        >
          {t.actions.viewProduct}
          <Arrow size={15} className="transition-transform rtl:group-hover:-translate-x-0.5 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </article>
  );
}
