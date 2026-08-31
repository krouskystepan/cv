import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import type { Locale } from '@/i18n/config'
import { dateLocales } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionary'
import type { LanguageLevel } from '@/types/resume'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(dateString: string, locale: Locale = 'en'): string {
  const date = new Date(dateString)
  return date.toLocaleDateString(dateLocales[locale], {
    month: 'short',
    year: 'numeric',
  })
}

export function formatYear(dateString: string): string {
  return String(new Date(dateString).getFullYear())
}

export function formatDateRange(
  startDate: string,
  endDate: string | undefined,
  locale: Locale = 'en',
): string {
  const dictionary = getDictionary(locale)
  const start = formatDate(startDate, locale)
  const end = endDate ? formatDate(endDate, locale) : dictionary.common.present
  return `${start} - ${end}`
}

export function formatYearRange(
  startDate: string,
  endDate: string | undefined,
  locale: Locale = 'en',
): string {
  const dictionary = getDictionary(locale)
  const start = formatYear(startDate)
  const end = endDate ? formatYear(endDate) : dictionary.common.present
  return `${start} - ${end}`
}

export function getTenure(
  startDate: string,
  endDate?: string,
): { years: number; months: number } {
  const start = new Date(startDate)
  const end = endDate ? new Date(endDate) : new Date()
  let totalMonths =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth())

  if (end.getDate() < start.getDate()) {
    totalMonths -= 1
  }

  if (totalMonths < 1) {
    totalMonths = 1
  }

  return {
    years: Math.floor(totalMonths / 12),
    months: totalMonths % 12,
  }
}

export function formatTenure(
  startDate: string,
  endDate: string | undefined,
  locale: Locale = 'en',
): string {
  const { years, months } = getTenure(startDate, endDate)
  const loc = dateLocales[locale]
  const parts: string[] = []

  if (years > 0) {
    parts.push(
      new Intl.NumberFormat(loc, {
        style: 'unit',
        unit: 'year',
        unitDisplay: 'long',
      }).format(years),
    )
  }

  if (months > 0) {
    parts.push(
      new Intl.NumberFormat(loc, {
        style: 'unit',
        unit: 'month',
        unitDisplay: 'long',
      }).format(months),
    )
  }

  return parts.join(', ')
}

export function formatYearsExperience(
  years: number,
  locale: Locale = 'en',
): string {
  const dictionary = getDictionary(locale)
  return dictionary.common.yearsExperience.replace('{years}', String(years))
}

export function formatLanguageLabel(
  language: string,
  level: LanguageLevel,
  locale: Locale = 'en',
): string {
  const dictionary = getDictionary(locale)
  return `${language} - ${dictionary.languageLevel[level]}`
}
