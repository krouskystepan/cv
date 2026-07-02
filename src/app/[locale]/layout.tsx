import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { LocaleProvider } from '@/components/locale-provider'
import { KeyboardShortcuts } from '@/components/keyboard-shortcuts'
import { isLocale, type Locale } from '@/i18n/config'
import { generateMetadata as generateResumeMetadata } from '@/lib/seo'
import { generatePersonJsonLd } from '@/lib/json-ld'

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
  const jsonLd = generatePersonJsonLd(locale)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LocaleProvider locale={locale}>
        {children}
        <KeyboardShortcuts />
      </LocaleProvider>
    </>
  )
}
