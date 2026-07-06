import { z } from 'zod'

const employmentTypeSchema = z.enum([
  'Full-time',
  'Part-time',
  'Contract',
  'Freelance',
  'Internship',
])

const languageLevelSchema = z.enum([
  'Native',
  'Fluent',
  'Professional',
  'Intermediate',
  'Basic',
])

const availabilitySchema = z.enum([
  'Open to opportunities',
  'Actively looking',
  'Not looking',
  'Freelance available',
])

export const resumeSchema = z.object({
  profile: z.object({
    firstName: z.string().min(1),
    lastName: z.string().min(1),
    title: z.string().min(1),
    location: z.string().min(1),
    birthDate: z.string().optional(),
    avatar: z.string().url().optional(),
    drivingLicense: z.string().optional(),
    availability: availabilitySchema,
  }),
  summary: z.string().min(1),
  experience: z.array(
    z.object({
      id: z.string(),
      company: z.string(),
      position: z.string(),
      employmentType: employmentTypeSchema,
      location: z.string().optional(),
      startDate: z.string(),
      endDate: z.string().optional(),
      description: z.string(),
      responsibilities: z.array(z.string()),
      achievements: z.array(z.string()).optional(),
      technologies: z.array(z.string()),
    }),
  ),
  projects: z.array(
    z.object({
      id: z.string(),
      title: z.string(),
      description: z.string(),
      image: z.string().optional(),
      technologies: z.array(z.string()),
      liveUrl: z.string().url().optional(),
      githubUrl: z.string().url().optional(),
      portfolioUrl: z.string().url().optional(),
    }),
  ),
  skills: z.array(
    z.object({
      category: z.enum([
        'Frontend',
        'Backend',
        'Databases',
        'Cloud',
        'DevOps',
        'Platforms',
        'Testing',
        'Languages',
        'Tools',
      ]),
      skills: z.array(z.string()),
    }),
  ),
  education: z.array(
    z.object({
      id: z.string(),
      institution: z.string(),
      degree: z.string(),
      field: z.string(),
      location: z.string().optional(),
      startDate: z.string(),
      endDate: z.string().optional(),
      description: z.string().optional(),
      achievements: z.array(z.string()).optional(),
    }),
  ),
  certifications: z.array(
    z.object({
      id: z.string(),
      title: z.string(),
      issuer: z.string(),
      date: z.string(),
      credentialUrl: z.string().url().optional(),
    }),
  ),
  achievements: z
    .array(
      z.object({
        id: z.string(),
        title: z.string(),
        description: z.string(),
        date: z.string().optional(),
      }),
    )
    .optional(),
  languages: z.array(
    z.object({
      language: z.string(),
      level: languageLevelSchema,
    }),
  ),
  contact: z.object({
    email: z.string().email(),
    location: z.string(),
    website: z.string().url(),
  }),
  socialLinks: z.array(
    z.object({
      platform: z.enum(['GitHub', 'LinkedIn', 'Twitter', 'Portfolio', 'Other']),
      label: z.string(),
      url: z.string().url(),
    }),
  ),
  metadata: z.object({
    canonicalUrl: z.string().url(),
    locale: z.string(),
    keywords: z.array(z.string()),
  }),
})

export type ResumeSchema = z.infer<typeof resumeSchema>
