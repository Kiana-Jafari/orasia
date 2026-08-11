import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Section({
  children,
  className,
  tone = "light",
  id,
}: {
  children: ReactNode;
  className?: string;
  tone?: "light" | "ivory" | "dark";
  id?: string;
}) {
  const tones = {
    light: "bg-background text-foreground",
    ivory: "bg-ivory text-foreground",
    dark: "bg-navy text-primary-foreground",
  } as const;
  return (
    <section id={id} className={cn("py-20 md:py-28", tones[tone], className)}>
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  as: As = "h2",
  align = "left",
  onDark = false,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  as?: "h1" | "h2";
  align?: "left" | "center";
  onDark?: boolean;
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <As
        className={cn(
          "mt-3 text-3xl leading-tight sm:text-4xl md:text-[2.75rem]",
          onDark ? "text-primary-foreground" : "text-navy",
        )}
      >
        {title}
      </As>
      {intro ? (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed",
            onDark ? "text-primary-foreground/75" : "text-muted-foreground",
          )}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}
