import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "outline" | "ghost" | "onDark";

const base =
  "inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-200 disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary: "bg-navy text-primary-foreground hover:bg-navy-deep",
  outline: "border border-navy/25 text-navy hover:border-navy hover:bg-navy hover:text-primary-foreground",
  ghost: "text-navy hover:text-bronze px-0 py-0",
  onDark:
    "border border-primary-foreground/35 text-primary-foreground hover:bg-primary-foreground hover:text-navy",
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
