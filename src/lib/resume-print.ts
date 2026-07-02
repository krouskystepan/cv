import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { getResume } from "@/lib/resume";
import { formatLanguageLabel } from "@/lib/utils";
import type { ExperienceItem, ProjectItem, Resume, SkillGroup } from "@/types/resume";

export const PRINT_LIMITS = {
  experienceBullets: 2,
  maxProjects: 2,
  maxTechPerJob: 5,
} as const;

export function getExperienceBullets(item: ExperienceItem): string[] {
  if (item.achievements.length > 0) {
    return item.achievements.slice(0, PRINT_LIMITS.experienceBullets);
  }

  if (item.description) {
    return [item.description];
  }

  return item.responsibilities.slice(0, PRINT_LIMITS.experienceBullets);
}

export function getExperienceTech(item: ExperienceItem): string[] {
  return item.technologies.slice(0, PRINT_LIMITS.maxTechPerJob);
}

export function getPrintProjects(resume: Resume): ProjectItem[] {
  return resume.projects.slice(0, PRINT_LIMITS.maxProjects);
}

export const PRINT_SKILL_CATEGORIES = [
  "Languages",
  "Frontend",
  "Backend",
  "Databases",
  "Testing",
  "DevOps",
  "Cloud",
  "Platforms",
  "Tools",
] as const satisfies readonly SkillGroup["category"][];

export function getCondensedSkillLines(
  locale: Locale,
  resume: Resume = getResume(locale),
  categories: readonly SkillGroup["category"][] = PRINT_SKILL_CATEGORIES
): { label: string; value: string }[] {
  const dictionary = getDictionary(locale);
  const byCategory = new Map(
    resume.skills.map((g) => [g.category, g] as const)
  );

  return categories
    .map((category) => byCategory.get(category))
    .filter((g): g is NonNullable<typeof g> => g !== undefined)
    .map((g) => ({
      label: dictionary.skillCategory[g.category],
      value: g.skills.slice(0, 8).join(", "),
    }));
}

export function getContactLine(resume: Resume): string {
  const parts = [resume.contact.email, resume.contact.location].filter(Boolean);

  return parts.join("  ·  ");
}

export function getLinksLine(resume: Resume): string {
  return resume.socialLinks
    .map((l) => l.url.replace(/^https?:\/\/(www\.)?/, ""))
    .join("  ·  ");
}

export function getLanguagesLine(
  locale: Locale,
  resume: Resume = getResume(locale)
): string {
  return resume.languages
    .map((l) => formatLanguageLabel(l.language, l.level, locale))
    .join("  ·  ");
}

export function getDrivingLicenseLine(
  locale: Locale,
  resume: Resume = getResume(locale)
): string | null {
  if (!resume.profile.drivingLicense) return null;

  const dictionary = getDictionary(locale);
  return `${dictionary.common.drivingLicense}: ${resume.profile.drivingLicense}`;
}
