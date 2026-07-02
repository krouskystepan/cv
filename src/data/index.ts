import type { Locale } from "@/i18n/config";
import { resume as resumeEn } from "@/data/resume";
import { resumeCs } from "@/data/resume-cs";
import type { Resume } from "@/types/resume";

const resumes: Record<Locale, Resume> = {
  en: resumeEn,
  cs: resumeCs,
};

export function getResumeData(locale: Locale): Resume {
  return resumes[locale];
}
