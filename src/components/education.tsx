import { Section } from '@/components/section'
import type { Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionary'
import { getResume } from '@/lib/resume'
import { formatYearRange } from '@/lib/utils'

export function Education({ locale }: { locale: Locale }) {
  const resume = getResume(locale)
  const dictionary = getDictionary(locale)

  return (
    <Section id="education" title={dictionary.sections.education}>
      <ol className="relative space-y-8">
        {resume.education.map((item, index) => (
          <li key={item.id} className="relative pl-8">
            {index < resume.education.length - 1 && (
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
                  {item.degree}
                </h3>
                <p className="text-sm font-medium text-foreground/90 sm:text-base">
                  {item.institution}
                  {item.location && (
                    <span className="font-normal text-muted-foreground">
                      {' '}
                      · {item.location}
                    </span>
                  )}
                </p>
                <p className="text-sm text-foreground/75 sm:text-base">
                  {item.field}
                </p>
              </div>
              <time
                className="mt-1 shrink-0 text-sm text-muted-foreground sm:mt-0 sm:text-base"
                dateTime={item.startDate}
              >
                {formatYearRange(item.startDate, item.endDate, locale)}
              </time>
            </div>

            {item.description && (
              <p className="mt-3 text-base leading-relaxed text-foreground/80">
                {item.description}
              </p>
            )}

            {item.achievements && item.achievements.length > 0 && (
              <ul className="mt-3 space-y-2 text-base text-foreground/85">
                {item.achievements.map((ach) => (
                  <li key={ach} className="flex gap-2.5">
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-foreground" />
                    {ach}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </Section>
  )
}
