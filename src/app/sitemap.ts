import type { MetadataRoute } from 'next'
import { locales } from '@/i18n/config'
import { resume } from '@/data/resume'
import { getLastUpdatedDate } from '@/lib/resume'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = resume.metadata.canonicalUrl
  const lastModified = getLastUpdatedDate()

  return locales.map((locale) => ({
    url: `${baseUrl}/${locale}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: locale === 'en' ? 1 : 0.9,
  }))
}
