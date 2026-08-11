import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/content/site";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex h-full flex-col border border-hairline bg-background transition-colors hover:border-navy/30">
      <div className="flex aspect-4/3 items-center justify-center overflow-hidden bg-ivory">
        {/* PLACEHOLDER: replace with real product photography */}
        <span className="px-6 text-center text-xs uppercase tracking-[0.18em] text-muted-foreground">
          [Product Image]
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="eyebrow">{product.category}</p>
        <h3 className="mt-3 text-xl text-navy">{product.name}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{product.summary}</p>
        <Link
          to="/products/$slug"
          params={{ slug: product.slug }}
          className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-navy transition-colors hover:text-bronze"
        >
          View Product
          <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </article>
  );
}
