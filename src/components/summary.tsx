import { Section } from "@/components/section";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { getResume } from "@/lib/resume";

export function Summary({ locale }: { locale: Locale }) {
  const resume = getResume(locale);
  const dictionary = getDictionary(locale);

  return (
    <Section id="summary" title={dictionary.sections.summary}>
      <p className="max-w-prose text-base leading-relaxed text-pretty text-foreground/90 sm:text-lg">
        {resume.summary}
      </p>
    </Section>
  );
}
