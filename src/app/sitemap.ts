import type { MetadataRoute } from 'next'
import { locales } from '@/i18n/config'
import { resume } from '@/data/resume'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = resume.metadata.canonicalUrl

  return locales.map((locale) => ({
    url: `${baseUrl}/${locale}`,
    lastModified: resume.metadata.lastUpdated,
    changeFrequency: 'monthly',
    priority: locale === 'en' ? 1 : 0.9,
  }))
}
