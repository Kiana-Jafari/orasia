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
  tone?: "light" | "ivory" | "slate" | "dark";
  id?: string;
}) {
  const tones = {
    light: "bg-background text-foreground",
    ivory: "bg-paper text-foreground",
    slate: "bg-slate-light text-foreground",
    dark: "bg-navy text-primary-foreground",
  } as const;
  return (
    <section id={id} className={cn("py-16 md:py-24", tones[tone], className)}>
      <div className="mx-auto w-full max-w-[1360px] px-5 sm:px-8 lg:px-10">{children}</div>
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
      {eyebrow ? (
        <p className={cn(onDark ? "eyebrow-light" : "eyebrow")}>
          {eyebrow}
        </p>
      ) : null}
      <As
        className={cn(
          "mt-4 text-3xl font-medium leading-tight sm:text-4xl md:text-5xl",
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
