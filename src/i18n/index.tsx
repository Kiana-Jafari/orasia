import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { dictionaries, languages, type Lang, type Translation } from "./translations";

const STORAGE_KEY = "site-lang";

type I18nValue = {
  lang: Lang;
  dir: "ltr" | "rtl";
  setLang: (lang: Lang) => void;
  t: Translation;
};

const I18nContext = createContext<I18nValue | null>(null);

function isLang(value: unknown): value is Lang {
  return value === "en" || value === "fa";
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === "undefined") return "en";
    const match = window.location.pathname.match(/^\/(fa|en)(?:\/|$)/);
    if (match?.[1] === "fa") return "fa";
    if (match?.[1] === "en") return "en";
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isLang(stored)) return stored;
    return navigator.language?.toLowerCase().startsWith("fa") ? "fa" : "en";
  });

  const dir = lang === "fa" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang, dir]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* storage unavailable */
    }
  }, []);

  const value = useMemo<I18nValue>(
    () => ({ lang, dir, setLang, t: dictionaries[lang] }),
    [lang, dir, setLang],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}

export function localizedPath(lang: Lang, path = "/") {
  const clean = path === "/" ? "" : `/${path.replace(/^\//, "")}`;
  return `/${lang}${clean}`;
}

export { languages };
export type { Lang };
