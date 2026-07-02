import type { Resume } from '@/types/resume'
import { resumeSchema } from '@/lib/resume-schema'

export const resumeCs: Resume = resumeSchema.parse({
  profile: {
    firstName: 'Štěpán',
    lastName: 'Krouský',
    title: 'QA Automation Engineer | Full Stack Web Developer',
    location: 'Turnov, Česká republika',
    drivingLicense: 'Skupina B',
    availability: 'Open to opportunities'
  },

  summary:
    'QA Automation Engineer se zkušenostmi s vývojem automatizovaného testování v Pythonu pro automobilové infotainment systémy a tvorbou produkčních webových aplikací v React, Next.js a TypeScript. Zkušenosti z korporátního prostředí, kontraktů i freelance spolupráce v mezinárodních agilních týmech.',

  experience: [
    {
      id: 'exp-1',
      company: 'Entry Engineering s.r.o.',
      position: 'QA Automation Engineer',
      employmentType: 'Full-time',
      location: 'Mladá Boleslav, Středočeský kraj, Česká republika · Hybrid',
      startDate: '2025-09-01',
      description:
        'Automatizace testů v Pythonu pro CARIAD automotive infotainment a konektivitu napříč 4 projekty (2× WP1, 2× WP2).',
      responsibilities: [
        'Vyvíjel a udržoval automatizované testovací scénáře v Pythonu pro automobilové infotainment a konektivní systémy v projektech CARIAD',
        'Navrhoval a implementoval Smoke, Sanity a regresní testovací scénáře podle specifikací v Codebeamer',
        'Spouštěl a monitoroval automatizované testovací kampaně na lokálních i vzdálených testovacích benchích',
        'Analyzoval výsledky testů, zkoumal logy a hlásil chyby přes Jira ve spolupráci s mezinárodními QA a vývojovými týmy',
        'Spravoval testovací automatizaci, pull requesty a peer review přes GitHub',
        'Konfiguroval testovací prostředí a udržoval UI automační prvky pomocí PLATIN, TestHub a UIAutomatorViewer'
      ],
      achievements: [
        'Podílel se na týmové testovací automatizaci zahrnující 300+ automatizovaných testovacích případů napříč 4 projekty CARIAD'
      ],
      technologies: [
        'Python',
        'Test Automation',
        'Jira',
        'Git',
        'GitHub',
        'Software Testing',
        'Codebeamer',
        'CARIAD'
      ]
    },
    {
      id: 'exp-2',
      company: 'Wassa logistic s.r.o.',
      position: 'Web Developer & IT Administrátor',
      employmentType: 'Contract',
      location: 'Česká republika',
      startDate: '2024-09-01',
      endDate: '2025-01-31',
      description:
        'Na základě freelance kontraktu vyvinul firemní web, následně pokračoval ve vývoji interních nástrojů a IT podpoře.',
      responsibilities: [
        'Navrhl, vyvinul a nasadil veřejný firemní web',
        'Vytvořil interní softwarové nástroje podporující každodenní logistické operace',
        'Pomáhal s každodenními IT problémy a technickou podporou'
      ],
      achievements: [
        'Navrhl, vyvinul a nasadil veřejný firemní web',
        'Vyvinul interní business aplikace podporující logistické operace'
      ],
      technologies: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Node.js']
    },
    {
      id: 'exp-3',
      company: 'OSVČ',
      position: 'Full Stack Web Developer',
      employmentType: 'Freelance',
      location: 'Turnov, Liberecký kraj, Česká republika · Remote',
      startDate: '2024-01-01',
      description:
        'Samostatný full-stack vývoj webových aplikací pro klienty – od analýzy požadavků až po nasazení do produkce.',
      responsibilities: [
        'Navrhoval a dodával full-stack webové aplikace pro více klientů od požadavků až po nasazení',
        'Vytvářel responzivní frontend, REST API a databázové integrace v moderních JavaScript stacku',
        'Jako jediný vývojář řídil rozsah projektu, termíny a komunikaci s klientem'
      ],
      achievements: [
        'Od roku 2024 dodal produkční weby a webové aplikace pro různé klienty'
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
        'Figma'
      ]
    },
    {
      id: 'exp-4',
      company: 'EFG CZ spol. s r.o.',
      position: 'Frontend Developer',
      employmentType: 'Internship',
      location: 'Česká republika',
      startDate: '2023-07-01',
      endDate: '2023-08-31',
      description:
        'Školní praxe – frontend vývoj firemního webu v React a Material UI.',
      responsibilities: [
        'Vytvořil responzivní rozhraní firemního webu v React a Material UI',
        'Implementoval znovupoužitelné UI komponenty podle designových specifikací',
        'Přispíval k frontend vývoji v malém dodávkovém týmu'
      ],
      achievements: [
        'Úspěšně absolvoval školní praxi s dodaným frontendem webu během dvouměsíčního období'
      ],
      technologies: ['React', 'MUI', 'JavaScript', 'TypeScript']
    }
  ],

  projects: [
    {
      id: 'proj-1',
      title: 'Discord Gambling Hub',
      description:
        'Modulární Discord hazardní a ekonomický systém s více kasinovými hrami, backendem virtuální měny a integrovaným Next.js administračním dashboardem pro správu hráčů a her v reálném čase.',
      image: '/projects/discord-gambling-bot.png',
      technologies: [
        'Next.js',
        'Node.js',
        'Discord.js',
        'TypeScript',
        'Tailwind',
        'MongoDB'
      ],
      liveUrl: 'https://dc-gambling-client.vercel.app',
      githubUrl: 'https://github.com/krouskystepan/gambling-bot-discord',
      portfolioUrl: 'https://www.krouskystepan.com/projects/discord-gambling-hub'
    },
    {
      id: 'proj-2',
      title: 'Portfolio Platform',
      description:
        'Self-hosted Next.js portfolio platforma běžící na vlastním VPS se službami na subdoménách, nasazením přes GitHub Actions a lehkými interaktivními funkcemi jako achievements a interní nástroje.',
      image: '/projects/portfolio.png',
      technologies: [
        'Next.js',
        'TypeScript',
        'Node.js',
        'PM2',
        'Nginx',
        'VPS',
        'GitHub Actions'
      ],
      liveUrl: 'https://www.krouskystepan.com',
      portfolioUrl: 'https://www.krouskystepan.com/projects/portfolio-platform'
    }
  ],

  skills: [
    {
      category: 'Languages',
      skills: ['TypeScript', 'JavaScript', 'Python', 'Java']
    },
    {
      category: 'Frontend',
      skills: ['React', 'Next.js', 'Tailwind CSS', 'MUI', 'SCSS', 'HTML', 'CSS']
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express.js', 'REST APIs']
    },
    {
      category: 'Databases',
      skills: ['MySQL', 'MariaDB', 'PostgreSQL', 'MongoDB', 'SQL']
    },
    {
      category: 'Testing',
      skills: ['QA Automation', 'Jira', 'Codebeamer']
    },
    {
      category: 'DevOps',
      skills: ['Git', 'GitHub', 'GitHub Actions', 'CI/CD', 'Bash']
    },
    {
      category: 'Cloud',
      skills: ['Vercel', 'Custom VPS', 'Firebase']
    },
    {
      category: 'Platforms',
      skills: ['Linux', 'macOS', 'Windows']
    },
    {
      category: 'Tools',
      skills: ['Figma', 'VS Code', 'Postman']
    }
  ],

  education: [
    {
      id: 'edu-1',
      institution: 'Střední průmyslová škola',
      degree: 'Maturita',
      field: 'Informační technologie',
      location: 'Česká republika',
      startDate: '2020-09-01',
      endDate: '2024-06-30',
      description:
        'Čtyřleté střední technické vzdělání v oboru informačních technologií, programování a vývoje software.',
      achievements: [
        'Vyvinul maturitní projekty v oblasti webového a softwarového vývoje'
      ]
    }
  ],

  certifications: [],

  achievements: [],

  languages: [
    { language: 'Čeština', level: 'Native' },
    { language: 'Angličtina', level: 'Professional' }
  ],

  contact: {
    email: 'stepan.krousky@seznam.cz',
    location: 'Turnov, Česká republika',
    website: 'https://cv.krouskystepan.com'
  },

  socialLinks: [
    {
      platform: 'GitHub',
      label: 'GitHub',
      url: 'https://github.com/krouskystepan'
    },
    {
      platform: 'LinkedIn',
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/krouskystepan'
    },
    {
      platform: 'Portfolio',
      label: 'Portfolio',
      url: 'https://www.krouskystepan.com'
    }
  ],

  metadata: {
    canonicalUrl: 'https://cv.krouskystepan.com',
    lastUpdated: '2026-07-02',
    locale: 'cs_CZ',
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
      'Czech Republic'
    ]
  }
})
