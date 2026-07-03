import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { KeyboardShortcuts } from '@/components/keyboard-shortcuts'
import { locales, isLocale, type Locale } from '@/i18n/config'
import { generateMetadata as generateResumeMetadata } from '@/lib/seo'

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) {
    return {}
  }

  return generateResumeMetadata(locale)
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const { locale: localeParam } = await params

  if (!isLocale(localeParam)) {
    notFound()
  }

  const locale = localeParam as Locale

  return (
    <>
      {children}
      <KeyboardShortcuts locale={locale} />
    </>
  )
}
