import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "outline" | "ghost" | "onDark";

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-sm px-6 py-3 text-sm font-semibold transition-all duration-200 active:scale-[0.97] disabled:opacity-60 disabled:active:scale-100";

const variants: Record<Variant, string> = {
  primary: "bg-gold text-navy hover:bg-primary-foreground",
  outline: "border border-navy/30 text-navy hover:border-navy hover:bg-navy hover:text-primary-foreground",
  ghost: "text-navy hover:text-gold px-0 py-0",
  onDark:
    "border border-gold/70 text-primary-foreground hover:bg-gold hover:text-navy",
};

export function ActionLink({
  to,
  variant = "primary",
  className,
  children,
  onClick,
}: {
  to: string;
  variant?: Variant;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}) {
  return (
    <Link to={to} onClick={onClick} className={cn(base, variants[variant], className)}>
      {children}
    </Link>
  );
}

export function Button({
  variant = "primary",
  className,
  ...props
}: ComponentProps<"button"> & { variant?: Variant }) {
  return <button className={cn(base, variants[variant], className)} {...props} />;
}
