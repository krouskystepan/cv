import type { Locale } from "@/i18n/config";
import { dictionary as cs } from "@/i18n/dictionaries/cs";
import { dictionary as en } from "@/i18n/dictionaries/en";
import type { Dictionary } from "@/i18n/types";

const dictionaries: Record<Locale, Dictionary> = {
  en,
  cs,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
