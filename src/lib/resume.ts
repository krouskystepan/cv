import { getResumeData } from '@/data/index'
import type { Locale } from '@/i18n/config'
import { dateLocales } from '@/i18n/config'
import { resume as resumeEn } from '@/data/resume'
import type { ExperienceItem, Resume } from '@/types/resume'

export function getResume(locale: Locale = 'en'): Resume {
  return getResumeData(locale)
}

export function getFullName(resume: Resume = resumeEn): string {
  return `${resume.profile.firstName} ${resume.profile.lastName}`
}

export function getCurrentYear(): number {
  return new Date().getFullYear()
}

export function getLastUpdatedFormatted(
  locale: Locale = 'en',
  resume: Resume = getResumeData(locale),
): string {
  return new Date(resume.metadata.lastUpdated).toLocaleDateString(
    dateLocales[locale],
    {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    },
  )
}

export function calculateAge(
  birthDate?: string,
  resume: Resume = resumeEn,
): number | null {
  const date = birthDate ?? resume.profile.birthDate
  if (!date) return null
  const birth = new Date(date)
  const today = new Date()
  let age = today.getFullYear() - birth.getFullYear()
  const monthDiff = today.getMonth() - birth.getMonth()
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--
  }
  return age
}

function getExperienceMonths(item: ExperienceItem): number {
  const start = new Date(item.startDate)
  const end = item.endDate ? new Date(item.endDate) : new Date()
  return (
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth())
  )
}

export function calculateYearsOfExperience(resume: Resume = resumeEn): number {
  if (resume.experience.length === 0) return 0

  const sorted = [...resume.experience].sort(
    (a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime(),
  )

  const earliest = new Date(sorted[0].startDate)
  const latestEnd = resume.experience.reduce((latest, item) => {
    const end = item.endDate ? new Date(item.endDate) : new Date()
    return end > latest ? end : latest
  }, new Date(0))

  const totalMonths =
    (latestEnd.getFullYear() - earliest.getFullYear()) * 12 +
    (latestEnd.getMonth() - earliest.getMonth())

  const overlapAdjusted = resume.experience.reduce((sum, item) => {
    return sum + getExperienceMonths(item)
  }, 0)

  const months = Math.max(totalMonths, Math.round(overlapAdjusted * 0.85))
  return Math.max(1, Math.round(months / 12))
}

export function getCurrentPosition(resume: Resume = resumeEn): string | null {
  const current = resume.experience.filter((item) => !item.endDate)
  if (current.length === 0) return null
  if (current.length === 1) {
    return `${current[0].position} @ ${current[0].company}`
  }
  return current.map((item) => item.position).join(' · ')
}

export function getSocialLink(
  platform: 'GitHub' | 'LinkedIn' | 'Portfolio',
  resume: Resume = resumeEn,
): string | undefined {
  return resume.socialLinks.find((link) => link.platform === platform)?.url
}

export { resumeEn as resume }
