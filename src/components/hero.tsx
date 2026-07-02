import Link from 'next/link'
import { Code2, Globe, Link as LinkIcon, Mail, MapPin } from 'lucide-react'
import { AvailabilityDot } from '@/components/availability-dot'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { DownloadPdfButton } from '@/components/download-pdf-button'
import type { Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionary'
import {
  calculateYearsOfExperience,
  getCurrentPosition,
  getFullName,
  getResume,
} from '@/lib/resume'
import { formatYearsExperience } from '@/lib/utils'

export function Hero({ locale }: { locale: Locale }) {
  const resume = getResume(locale)
  const dictionary = getDictionary(locale)
  const years = calculateYearsOfExperience(resume)
  const currentPosition = getCurrentPosition(resume)
  const github = resume.socialLinks.find((l) => l.platform === 'GitHub')
  const linkedin = resume.socialLinks.find((l) => l.platform === 'LinkedIn')
  const portfolio = resume.socialLinks.find((l) => l.platform === 'Portfolio')

  return (
    <header
      id="home"
      className="scroll-mt-20 pb-6 pt-6 sm:pb-8 sm:pt-8 md:pt-12"
    >
      <p className="mb-3 flex items-center gap-1.5 text-sm text-muted-foreground sm:mb-4 sm:text-base">
        <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden />
        {resume.profile.location}
      </p>

      <h1 className="text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl md:text-5xl">
        {getFullName(resume)}
      </h1>

      <p className="mt-2 text-base text-pretty text-muted-foreground sm:mt-3 sm:text-lg md:text-xl">
        {resume.profile.title}
      </p>

      <div className="no-print mt-5 flex flex-col gap-2 sm:mt-6 sm:flex-row sm:flex-wrap">
        <DownloadPdfButton className="w-full sm:w-auto" />
        <Button variant="outline" asChild className="w-full sm:w-auto">
          <Link href="#contact">
            <Mail className="h-4 w-4" />
            {dictionary.common.contact}
          </Link>
        </Button>
        {portfolio && (
          <Button variant="outline" asChild className="w-full sm:w-auto">
            <a href={portfolio.url} target="_blank" rel="noopener noreferrer">
              <Globe className="h-4 w-4" />
              {dictionary.common.portfolio}
            </a>
          </Button>
        )}
        {github && (
          <Button variant="outline" asChild className="w-full sm:w-auto">
            <a href={github.url} target="_blank" rel="noopener noreferrer">
              <Code2 className="h-4 w-4" />
              GitHub
            </a>
          </Button>
        )}
        {linkedin && (
          <Button variant="outline" asChild className="w-full sm:w-auto">
            <a href={linkedin.url} target="_blank" rel="noopener noreferrer">
              <LinkIcon className="h-4 w-4" />
              LinkedIn
            </a>
          </Button>
        )}
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        <Badge variant="secondary">
          {formatYearsExperience(years, locale)}
        </Badge>
        {currentPosition && <Badge variant="outline">{currentPosition}</Badge>}
        <Badge variant="outline" className="gap-2">
          {resume.profile.availability !== 'Not looking' && <AvailabilityDot />}
          {dictionary.availability[resume.profile.availability]}
        </Badge>
        {resume.profile.drivingLicense && (
          <Badge variant="outline">
            {dictionary.common.drivingLicense}: {resume.profile.drivingLicense}
          </Badge>
        )}
      </div>
    </header>
  )
}
