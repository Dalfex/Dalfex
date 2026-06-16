/**
 * i18n configuration for the Dalfex landing.
 *
 * The site ships two static routes:
 *   /     -> English (default)
 *   /es   -> Spanish
 *
 * A small inline script in the layout redirects first-time visitors from `/`
 * to `/es` when their browser prefers Spanish, and the manual EN/ES toggle
 * stores the choice in localStorage (`dalfex-lang`) so it is respected on
 * subsequent visits.
 */
export const LANGS = ["en", "es"] as const;
export type Lang = (typeof LANGS)[number];

export const DEFAULT_LANG: Lang = "en";

/** A string with one value per supported language. */
export type Localized = Record<Lang, string>;

export function isLang(value: unknown): value is Lang {
  return typeof value === "string" && (LANGS as readonly string[]).includes(value);
}

/** Pick the value for a language from a Localized string. */
export function tr(value: Localized, lang: Lang): string {
  return value[lang] ?? value[DEFAULT_LANG];
}

/** Route prefix for a language ("" for the default, "/es" for Spanish). */
export function langPath(lang: Lang): string {
  return lang === DEFAULT_LANG ? "/" : `/${lang}`;
}

const NUMBER_WORDS: Record<Lang, string[]> = {
  en: ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"],
  es: ["Cero", "Uno", "Dos", "Tres", "Cuatro", "Cinco", "Seis", "Siete", "Ocho", "Nueve", "Diez"],
};

/** Capitalized word for a small count, e.g. (3, "es") -> "Tres". */
export function numberWord(n: number, lang: Lang): string {
  return NUMBER_WORDS[lang][n] ?? String(n);
}
