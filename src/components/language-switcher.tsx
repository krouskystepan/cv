"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { localeLabels, locales, type Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

function getLocaleFromPathname(pathname: string): Locale {
  const segment = pathname.split("/")[1];
  return locales.includes(segment as Locale) ? (segment as Locale) : "en";
}

function switchLocalePath(pathname: string, locale: Locale): string {
  const segments = pathname.split("/");
  if (locales.includes(segments[1] as Locale)) {
    segments[1] = locale;
    return segments.join("/") || `/${locale}`;
  }
  return `/${locale}${pathname === "/" ? "" : pathname}`;
}

const localeShortLabels: Record<Locale, string> = {
  en: "EN",
  cs: "CS",
};

export function LanguageSwitcher({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  const pathname = usePathname();
  const currentLocale = getLocaleFromPathname(pathname);

  if (compact) {
    return (
      <div className={cn("flex items-center", className)} role="group" aria-label="Language">
        {locales.map((locale) => {
          const isActive = currentLocale === locale;

          return (
            <Button
              key={locale}
              variant={isActive ? "secondary" : "ghost"}
              size="sm"
              className="h-8 min-w-8 px-2 text-xs font-medium"
              asChild
            >
              <Link
                href={switchLocalePath(pathname, locale)}
                aria-current={isActive ? "page" : undefined}
                aria-label={localeLabels[locale]}
                lang={locale}
                title={localeLabels[locale]}
              >
                {localeShortLabels[locale]}
              </Link>
            </Button>
          );
        })}
      </div>
    );
  }

  return (
    <div className={cn("flex items-center gap-0.5", className)}>
      <Globe
        className="mr-1 hidden h-4 w-4 text-muted-foreground sm:block"
        aria-hidden
      />
      {locales.map((locale) => (
        <Button
          key={locale}
          variant={currentLocale === locale ? "secondary" : "ghost"}
          size="sm"
          className="h-9 px-2.5 text-base"
          asChild
        >
          <Link
            href={switchLocalePath(pathname, locale)}
            aria-current={currentLocale === locale ? "page" : undefined}
            aria-label={localeLabels[locale]}
            lang={locale}
            title={localeLabels[locale]}
          >
            {localeLabels[locale]}
          </Link>
        </Button>
      ))}
    </div>
  );
}
