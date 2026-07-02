import type { Locale } from '@/i18n/config'
import { openGraphLocales } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionary'
import { BRAND_IMAGE_SIZE, getBrandImageAlt } from '@/lib/brand'
import { getFullName, getResume } from '@/lib/resume'

export function generateMetadata(locale: Locale) {
  const resume = getResume(locale)
  const dictionary = getDictionary(locale)
  const name = getFullName(resume)
  const title = `${name} - ${resume.profile.title}`
  const description = resume.summary.slice(0, 160)
  const baseUrl = resume.metadata.canonicalUrl
  const url = `${baseUrl}/${locale}`
  const brandImage = {
    url: `/${locale}/opengraph-image`,
    width: BRAND_IMAGE_SIZE.width,
    height: BRAND_IMAGE_SIZE.height,
    alt: getBrandImageAlt(name),
  }

  return {
    title,
    description,
    keywords: resume.metadata.keywords,
    authors: [{ name }],
    creator: name,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: url,
      languages: {
        en: `${baseUrl}/en`,
        cs: `${baseUrl}/cs`,
      },
    },
    openGraph: {
      type: 'profile' as const,
      locale: openGraphLocales[locale],
      url,
      title,
      description,
      siteName: `${name} - ${dictionary.seo.siteName}`,
      images: [brandImage],
    },
    twitter: {
      card: 'summary_large_image' as const,
      title,
      description,
      images: [`/${locale}/twitter-image`],
    },
    robots: {
      index: true,
      follow: true,
    },
    icons: {
      icon: '/favicon.svg',
      shortcut: '/favicon.svg',
      apple: '/favicon.svg',
    },
  }
}
