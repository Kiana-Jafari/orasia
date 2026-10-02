import { languages, localizedPath, useI18n } from "@/i18n";
import { cn } from "@/lib/utils";
import { useLocation, useNavigate } from "@tanstack/react-router";

export function LanguageSwitcher({ className }: { className?: string }) {
  const { lang, setLang, t } = useI18n();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div
      role="group"
      aria-label={t.labels.language}
      className={cn("inline-flex items-center gap-1 border border-primary-foreground/15 bg-primary-foreground/5 p-1", className)}
    >
      {languages.map((l) => (
        <button
          key={l.code}
          type="button"
          onClick={() => {
            setLang(l.code);
            const current = location.pathname.replace(/^\/(fa|en)/, "") || "/";
            navigate({ to: localizedPath(l.code, current) as any });
          }}
          aria-pressed={lang === l.code}
          lang={l.code}
          className={cn(
            "px-3 py-1.5 text-xs font-semibold transition-colors",
            lang === l.code
              ? "bg-gold text-navy"
              : "text-primary-foreground/55 hover:text-primary-foreground",
          )}
        >
          {l.short}
        </button>
      ))}
    </div>
  );
}
