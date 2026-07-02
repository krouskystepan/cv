import Link from "next/link";
import { ExternalLink } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Section } from "@/components/section";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { getResume } from "@/lib/resume";
import { formatDate } from "@/lib/utils";

export function Certifications({ locale }: { locale: Locale }) {
  const resume = getResume(locale);
  const dictionary = getDictionary(locale);

  if (resume.certifications.length === 0) return null;

  return (
    <Section id="certifications" title={dictionary.sections.certifications}>
      <div className="grid gap-3 sm:grid-cols-2">
        {resume.certifications.map((cert) => (
          <Card key={cert.id} className="hover:shadow-md">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg leading-snug">
                {cert.title}
              </CardTitle>
              <CardDescription>{cert.issuer}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <time className="text-base text-muted-foreground" dateTime={cert.date}>
                {formatDate(cert.date, locale)}
              </time>
              {cert.credentialUrl && (
                <Link
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-print inline-flex items-center gap-1 text-base font-medium text-highlight hover:underline"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  {dictionary.common.viewCredential}
                </Link>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
