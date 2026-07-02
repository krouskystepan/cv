import {
  Cloud,
  Code2,
  Database,
  GitBranch,
  Layout,
  Monitor,
  Server,
  TestTube2,
  Wrench,
  type LucideIcon,
} from 'lucide-react'
import { Section } from '@/components/section'
import type { Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionary'
import { getResume } from '@/lib/resume'
import type { SkillGroup } from '@/types/resume'

const categoryIcons: Record<SkillGroup['category'], LucideIcon> = {
  Frontend: Layout,
  Backend: Server,
  Databases: Database,
  Cloud: Cloud,
  DevOps: GitBranch,
  Platforms: Monitor,
  Testing: TestTube2,
  Languages: Code2,
  Tools: Wrench,
}

export function Skills({ locale }: { locale: Locale }) {
  const resume = getResume(locale)
  const dictionary = getDictionary(locale)

  return (
    <Section id="skills" title={dictionary.sections.skills}>
      <div className="divide-y divide-border rounded-lg border border-border bg-card">
        {resume.skills.map((group) => {
          const Icon = categoryIcons[group.category] ?? Code2

          return (
            <div
              key={group.category}
              className="flex flex-col gap-2 px-4 py-3 sm:grid sm:grid-cols-[auto_1fr] sm:items-center sm:gap-x-5 sm:py-2.5"
            >
              <div className="flex items-center gap-2 whitespace-nowrap">
                <Icon className="h-4 w-4 shrink-0 text-highlight" aria-hidden />
                <h3 className="text-base font-medium text-foreground">
                  {dictionary.skillCategory[group.category]}
                </h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-md bg-accent px-2 py-0.5 text-sm font-medium text-foreground/90"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
