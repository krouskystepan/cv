import type { EmploymentType, LanguageLevel, AvailabilityStatus } from "@/types/resume";
import type { SkillGroup } from "@/types/resume";

export interface Dictionary {
  nav: {
    home: string;
    experience: string;
    projects: string;
    skills: string;
    education: string;
    certifications: string;
    contact: string;
  };
  sections: {
    summary: string;
    experience: string;
    projects: string;
    skills: string;
    education: string;
    certifications: string;
    languages: string;
    contact: string;
  };
  common: {
    contact: string;
    email: string;
    location: string;
    website: string;
    drivingLicense: string;
    downloadPdf: string;
    downloadPdfAria: string;
    print: string;
    printAria: string;
    printTitle: string;
    present: string;
    yearsExperience: string;
    responsibilities: string;
    achievements: string;
    liveDemo: string;
    sourceCode: string;
    portfolio: string;
    scanToView: string;
    qrCodeAria: string;
    viewCredential: string;
    openMenu: string;
    closeMenu: string;
    mainNavigation: string;
    copy: string;
    copied: string;
  };
  employmentType: Record<EmploymentType, string>;
  availability: Record<AvailabilityStatus, string>;
  languageLevel: Record<LanguageLevel, string>;
  skillCategory: Record<SkillGroup["category"], string>;
  print: {
    summary: string;
    experience: string;
    selectedProjects: string;
    skills: string;
    education: string;
    languages: string;
  };
  footer: {
    lastUpdated: string;
    rightsReserved: string;
    shortcuts: string;
  };
  seo: {
    siteName: string;
  };
}
