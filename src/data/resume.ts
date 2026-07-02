import type { Resume } from '@/types/resume'
import { resumeSchema } from '@/lib/resume-schema'

export const resume: Resume = resumeSchema.parse({
  profile: {
    firstName: 'Štěpán',
    lastName: 'Krouský',
    title: 'QA Automation Engineer | Full Stack Web Developer',
    location: 'Turnov, Czech Republic',
    drivingLicense: 'Category B',
    availability: 'Open to opportunities',
  },

  summary:
    'QA Automation Engineer with experience developing Python-based automated testing for automotive infotainment systems and building production web applications using React, Next.js, and TypeScript. Experienced across corporate, contract, and freelance environments within international agile teams.',

  experience: [
    {
      id: 'exp-1',
      company: 'Entry Engineering s.r.o.',
      position: 'Quality Assurance Automation Engineer',
      employmentType: 'Full-time',
      location: 'Mladá Boleslav, Central Bohemia, Czech Republic · Hybrid',
      startDate: '2025-09-01',
      description:
        'Python test automation for CARIAD automotive infotainment and connectivity across 4 projects (2 WP1, 2 WP2).',
      responsibilities: [
        'Develop and maintain automated test suites in Python for automotive infotainment and connectivity systems in CARIAD projects',
        'Design and implement Smoke, Sanity, and regression test scenarios from Codebeamer specifications',
        'Execute and monitor automated test campaigns on local and remote test benches',
        'Analyze test results, investigate logs, and report defects through Jira in collaboration with international QA and development teams',
        'Manage test automation code, pull requests, and peer reviews via GitHub',
        'Configure test environments and maintain UI automation elements using PLATIN, TestHub, and UIAutomatorViewer',
      ],
      achievements: [
        'Contributed to a team test automation suite of 300+ automated test cases across 4 CARIAD projects',
      ],
      technologies: [
        'Python',
        'Test Automation',
        'Jira',
        'Git',
        'GitHub',
        'Software Testing',
        'Codebeamer',
        'CARIAD',
      ],
    },
    {
      id: 'exp-2',
      company: 'Wassa logistic s.r.o.',
      position: 'Web Developer & IT Administrator',
      employmentType: 'Contract',
      location: 'Czech Republic',
      startDate: '2024-09-01',
      endDate: '2025-01-31',
      description:
        'Delivered the company website on a freelance contract, then stayed on to build internal tools and help with IT when needed.',
      responsibilities: [
        "Designed, developed, and deployed the company's public-facing website",
        'Built internal software tools supporting daily logistics operations',
        'Assisted with day-to-day IT issues and technical support',
      ],
      achievements: [
        "Designed, developed, and deployed the company's public website",
        'Developed internal business applications supporting logistics operations',
      ],
      technologies: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Node.js'],
    },
    {
      id: 'exp-3',
      company: 'Self-employed',
      position: 'Full Stack Web Developer',
      employmentType: 'Freelance',
      location: 'Turnov, Liberec, Czech Republic · Remote',
      startDate: '2024-01-01',
      description:
        'Independent full-stack web development for clients, delivering production applications from requirements through deployment.',
      responsibilities: [
        'Designed and delivered full-stack web applications for multiple clients from requirements through deployment',
        'Built responsive frontends, REST APIs, and database integrations using modern JavaScript stacks',
        'Managed project scope, timelines, and client communication as sole developer',
      ],
      achievements: [
        'Delivered production websites and web applications across diverse client engagements since 2024',
      ],
      technologies: [
        'Next.js',
        'TypeScript',
        'Node.js',
        'Express',
        'Tailwind CSS',
        'Prisma',
        'PostgreSQL',
        'MongoDB',
        'Git',
        'Figma',
      ],
    },
    {
      id: 'exp-4',
      company: 'EFG CZ spol. s r.o.',
      position: 'Frontend Developer',
      employmentType: 'Internship',
      location: 'Czech Republic',
      startDate: '2023-07-01',
      endDate: '2023-08-31',
      description:
        'School internship - frontend development for a company website using React and Material UI.',
      responsibilities: [
        'Built responsive company website interfaces with React and Material UI',
        'Implemented reusable UI components from design specifications',
        'Contributed to frontend development within a small delivery team',
      ],
      achievements: [
        'Completed school internship with a delivered website frontend within a two-month period',
      ],
      technologies: ['React', 'MUI', 'JavaScript', 'TypeScript'],
    },
  ],

  projects: [
    {
      id: 'proj-1',
      title: 'Discord Gambling Hub',
      description:
        'A modular Discord gambling and economy system featuring multiple casino-style games, a virtual currency backend, and an integrated Next.js admin dashboard for real-time player and game management.',
      image: '/projects/discord-gambling-bot.png',
      technologies: [
        'Next.js',
        'Node.js',
        'Discord.js',
        'TypeScript',
        'Tailwind',
        'MongoDB',
      ],
      liveUrl: 'https://dc-gambling-client.vercel.app',
      githubUrl: 'https://github.com/krouskystepan/gambling-bot-discord',
      portfolioUrl:
        'https://www.krouskystepan.com/projects/discord-gambling-hub',
    },
    {
      id: 'proj-2',
      title: 'Portfolio Platform',
      description:
        'A self-hosted Next.js portfolio platform running on a custom VPS with subdomain-based services, GitHub Actions deployment, and lightweight interactive features such as achievements and internal tools.',
      image: '/projects/portfolio.png',
      technologies: [
        'Next.js',
        'TypeScript',
        'Node.js',
        'PM2',
        'Nginx',
        'VPS',
        'GitHub Actions',
      ],
      liveUrl: 'https://www.krouskystepan.com',
      portfolioUrl: 'https://www.krouskystepan.com/projects/portfolio-platform',
    },
  ],

  skills: [
    {
      category: 'Languages',
      skills: ['TypeScript', 'JavaScript', 'Python', 'Java'],
    },
    {
      category: 'Frontend',
      skills: [
        'React',
        'Next.js',
        'Tailwind CSS',
        'MUI',
        'SCSS',
        'HTML',
        'CSS',
      ],
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express.js', 'REST APIs'],
    },
    {
      category: 'Databases',
      skills: ['MySQL', 'MariaDB', 'PostgreSQL', 'MongoDB', 'SQL'],
    },
    {
      category: 'Testing',
      skills: ['QA Automation', 'Jira', 'Codebeamer'],
    },
    {
      category: 'DevOps',
      skills: ['Git', 'GitHub', 'GitHub Actions', 'CI/CD', 'Bash'],
    },
    {
      category: 'Cloud',
      skills: ['Vercel', 'Custom VPS', 'Firebase'],
    },
    {
      category: 'Platforms',
      skills: ['Linux', 'macOS', 'Windows'],
    },
    {
      category: 'Tools',
      skills: ['Figma', 'VS Code', 'Postman'],
    },
  ],

  education: [
    {
      id: 'edu-1',
      institution: 'Střední průmyslová škola',
      degree: 'Secondary School Diploma (Maturita)',
      field: 'Information Technology',
      location: 'Czech Republic',
      startDate: '2020-09-01',
      endDate: '2024-06-30',
      description:
        'Four-year secondary technical education in information technology, programming, and software development.',
      achievements: [
        'Developed graduation projects in web and software development',
      ],
    },
  ],

  certifications: [],

  languages: [
    { language: 'Czech', level: 'Native' },
    { language: 'English', level: 'Professional' },
  ],

  contact: {
    email: 'stepan.krousky@seznam.cz',
    location: 'Turnov, Czech Republic',
    website: 'https://krouskystepan.com',
  },

  socialLinks: [
    {
      platform: 'GitHub',
      label: 'GitHub',
      url: 'https://github.com/krouskystepan',
    },
    {
      platform: 'LinkedIn',
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/krouskystepan',
    },
    {
      platform: 'Portfolio',
      label: 'Portfolio',
      url: 'https://www.krouskystepan.com',
    },
  ],

  metadata: {
    canonicalUrl: 'https://cv.krouskystepan.com',
    lastUpdated: '2026-07-02',
    locale: 'en_US',
    keywords: [
      'QA Automation Engineer',
      'Test Automation',
      'QA Automation',
      'Python',
      'CARIAD',
      'Automotive Testing',
      'React',
      'Next.js',
      'TypeScript',
      'Turnov',
      'Czech Republic',
    ],
  },
})
