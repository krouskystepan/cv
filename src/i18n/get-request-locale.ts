import { headers } from "next/headers";
import { defaultLocale, isLocale, type Locale } from "@/i18n/config";

export async function getRequestLocale(): Promise<Locale> {
  const headersList = await headers();
  const locale = headersList.get("x-next-locale");

  if (locale && isLocale(locale)) {
    return locale;
  }

  return defaultLocale;
}
