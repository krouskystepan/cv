import { Badge } from '@/components/ui/badge'
import { Section } from '@/components/section'
import type { Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionary'
import { getResume } from '@/lib/resume'
import { formatDateRange } from '@/lib/utils'

export function Experience({ locale }: { locale: Locale }) {
  const resume = getResume(locale)
  const dictionary = getDictionary(locale)

  return (
    <Section id="experience" title={dictionary.sections.experience}>
      <ol className="relative space-y-8">
        {resume.experience.map((item, index) => (
          <li key={item.id} className="relative pl-8">
            {index < resume.experience.length - 1 && (
              <span
                className="absolute left-[5px] top-2 h-full w-px bg-border"
                aria-hidden
              />
            )}
            <span
              className="absolute left-0 top-2 h-[11px] w-[11px] rounded-full border-2 border-foreground bg-background"
              aria-hidden
            />

            <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-base font-semibold text-foreground sm:text-lg">
                  {item.position}
                </h3>
                <p className="text-sm text-foreground/80 sm:text-base">
                  {item.company}
                  {item.location && (
                    <span className="text-muted-foreground">
                      {' '}
                      · {item.location}
                    </span>
                  )}
                </p>
              </div>
              <div className="mt-1 shrink-0 text-sm text-muted-foreground sm:mt-0 sm:text-base sm:text-right">
                <time dateTime={item.startDate}>
                  {formatDateRange(item.startDate, item.endDate, locale)}
                </time>
                <p className="text-sm">
                  {dictionary.employmentType[item.employmentType]}
                </p>
              </div>
            </div>

            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              {item.description}
            </p>

            {item.responsibilities.length > 0 && (
              <div className="mt-4">
                <h4 className="mb-2 text-sm font-medium uppercase tracking-wide text-muted-foreground">
                  {dictionary.common.responsibilities}
                </h4>
                <ul className="space-y-1.5 text-base text-foreground/90">
                  {item.responsibilities.map((resp) => (
                    <li key={resp} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground" />
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {item.achievements && item.achievements.length > 0 && (
              <div className="mt-4">
                <h4 className="mb-2 text-sm font-medium uppercase tracking-wide text-muted-foreground">
                  {dictionary.common.achievements}
                </h4>
                <ul className="space-y-1.5 text-base text-foreground/90">
                  {item.achievements.map((ach) => (
                    <li key={ach} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground" />
                      {ach}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-4 flex flex-wrap gap-1.5">
              {item.technologies.map((tech) => (
                <Badge key={tech} variant="outline">
                  {tech}
                </Badge>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
