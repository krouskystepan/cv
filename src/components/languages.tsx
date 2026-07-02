import { Section } from '@/components/section'
import type { Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionary'
import { getResume } from '@/lib/resume'

export function Languages({ locale }: { locale: Locale }) {
  const resume = getResume(locale)
  const dictionary = getDictionary(locale)

  return (
    <Section id="languages" title={dictionary.sections.languages}>
      <dl className="grid gap-3 sm:grid-cols-2">
        {resume.languages.map((item) => (
          <div
            key={item.language}
            className="flex flex-col gap-1 rounded-lg border border-border bg-card px-4 py-3 shadow-sm min-[400px]:flex-row min-[400px]:items-center min-[400px]:justify-between sm:py-3.5"
          >
            <dt className="text-base font-semibold text-foreground">
              {item.language}
            </dt>
            <dd className="text-base text-muted-foreground">
              {dictionary.languageLevel[item.level]}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
