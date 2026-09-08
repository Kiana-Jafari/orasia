import { languages, useI18n } from "@/i18n";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ className }: { className?: string }) {
  const { lang, setLang, t } = useI18n();

  return (
    <div
      role="group"
      aria-label={t.labels.language}
      className={cn("inline-flex items-center border border-hairline", className)}
    >
      {languages.map((l) => (
        <button
          key={l.code}
          type="button"
          onClick={() => setLang(l.code)}
          aria-pressed={lang === l.code}
          lang={l.code}
          className={cn(
            "px-3 py-1.5 text-xs font-medium tracking-[0.08em] transition-colors",
            lang === l.code
              ? "bg-navy text-primary-foreground"
              : "text-muted-foreground hover:text-navy",
          )}
        >
          {l.code === "fa" ? l.label : l.short}
        </button>
      ))}
    </div>
  );
}
