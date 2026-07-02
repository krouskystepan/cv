export type EmploymentType =
  'Full-time' | 'Part-time' | 'Contract' | 'Freelance' | 'Internship'

export type LanguageLevel =
  'Native' | 'Fluent' | 'Professional' | 'Intermediate' | 'Basic'

export type AvailabilityStatus =
  | 'Open to opportunities'
  | 'Actively looking'
  | 'Not looking'
  | 'Freelance available'

export interface Profile {
  firstName: string
  lastName: string
  title: string
  location: string
  birthDate?: string
  avatar?: string
  drivingLicense?: string
  availability: AvailabilityStatus
}

export interface Contact {
  email: string
  location: string
  website: string
}

export interface SocialLink {
  platform: 'GitHub' | 'LinkedIn' | 'Twitter' | 'Portfolio' | 'Other'
  label: string
  url: string
}

export interface ExperienceItem {
  id: string
  company: string
  position: string
  employmentType: EmploymentType
  location?: string
  startDate: string
  endDate?: string
  description: string
  responsibilities: string[]
  achievements?: string[]
  technologies: string[]
}

export interface ProjectItem {
  id: string
  title: string
  description: string
  image?: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  portfolioUrl?: string
}

export interface SkillGroup {
  category:
    | 'Frontend'
    | 'Backend'
    | 'Databases'
    | 'Cloud'
    | 'DevOps'
    | 'Platforms'
    | 'Testing'
    | 'Languages'
    | 'Tools'
  skills: string[]
}

export interface EducationItem {
  id: string
  institution: string
  degree: string
  field: string
  location?: string
  startDate: string
  endDate?: string
  description?: string
  achievements?: string[]
}

export interface CertificationItem {
  id: string
  title: string
  issuer: string
  date: string
  credentialUrl?: string
}

export interface AchievementItem {
  id: string
  title: string
  description: string
  date?: string
}

export interface LanguageItem {
  language: string
  level: LanguageLevel
}

export interface ResumeMetadata {
  canonicalUrl: string
  lastUpdated: string
  locale: string
  keywords: string[]
}

export interface Resume {
  profile: Profile
  summary: string
  experience: ExperienceItem[]
  projects: ProjectItem[]
  skills: SkillGroup[]
  education: EducationItem[]
  certifications: CertificationItem[]
  achievements?: AchievementItem[]
  languages: LanguageItem[]
  contact: Contact
  socialLinks: SocialLink[]
  metadata: ResumeMetadata
}
