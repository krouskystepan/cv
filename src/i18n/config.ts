export const locales = ["en", "cs"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  en: "English",
  cs: "Čeština",
};

export const dateLocales: Record<Locale, string> = {
  en: "en-US",
  cs: "cs-CZ",
};

export const openGraphLocales: Record<Locale, string> = {
  en: "en_US",
  cs: "cs_CZ",
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
