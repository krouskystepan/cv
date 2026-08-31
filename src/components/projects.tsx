import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Section } from '@/components/section'
import type { Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionary'
import { getResume } from '@/lib/resume'

export function Projects({ locale }: { locale: Locale }) {
  const resume = getResume(locale)
  const dictionary = getDictionary(locale)

  return (
    <Section id="projects" title={dictionary.sections.projects}>
      <div className="flex flex-col gap-4">
        {resume.projects.map((project, index) => (
          <Card
            key={project.id}
            className="overflow-hidden sm:grid sm:grid-cols-[minmax(0,17.5rem)_minmax(0,1fr)] sm:items-stretch"
          >
            {project.image && (
              <div className="relative aspect-video w-full overflow-hidden border-b border-border bg-accent sm:aspect-auto sm:min-h-54 sm:border-b-0 sm:border-r">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority={index === 0}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 100vw, 280px"
                />
              </div>
            )}
            <div className="flex min-w-0 flex-col">
              <CardHeader className="pb-3">
                <CardTitle className="text-base sm:text-lg">
                  {project.title}
                </CardTitle>
                <CardDescription className="leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
                {project.portfolioUrl && (
                  <div className="no-print text-base font-medium">
                    <Link
                      href={project.portfolioUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-highlight hover:underline"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      {dictionary.common.portfolio}
                    </Link>
                  </div>
                )}
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}
