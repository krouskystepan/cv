import type { Locale } from '@/i18n/config'
import { getFullName, getResume } from '@/lib/resume'

export function generatePersonJsonLd(locale: Locale = 'en') {
  const resume = getResume(locale)
  const name = getFullName(resume)
  const sameAs = resume.socialLinks.map((link) => link.url)

  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name,
    jobTitle: resume.profile.title,
    email: resume.contact.email,
    url: resume.metadata.canonicalUrl,
    address: {
      '@type': 'PostalAddress',
      addressLocality: resume.contact.location,
    },
    sameAs,
    knowsAbout: resume.skills.flatMap((group) => group.skills),
    alumniOf: resume.education.map((edu) => ({
      '@type': 'EducationalOrganization',
      name: edu.institution,
    })),
    worksFor: resume.experience
      .filter((exp) => !exp.endDate)
      .map((exp) => ({
        '@type': 'Organization',
        name: exp.company,
      })),
  }
}
