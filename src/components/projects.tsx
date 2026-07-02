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
      <div className="grid gap-4 sm:grid-cols-2">
        {resume.projects.map((project) => (
          <Card
            key={project.id}
            className="group overflow-hidden hover:shadow-md"
          >
            {project.image && (
              <div className="relative aspect-video w-full overflow-hidden border-b border-border bg-accent">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  sizes="(max-width: 900px) 100vw, 400px"
                />
              </div>
            )}
            <CardHeader className="pb-3">
              <CardTitle className="text-base sm:text-lg">
                {project.title}
              </CardTitle>
              <CardDescription className="leading-relaxed text-foreground/75">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
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
          </Card>
        ))}
      </div>
    </Section>
  )
}
