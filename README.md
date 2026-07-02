# CV

A bilingual resume and portfolio site built with Next.js. Content is stored as typed TypeScript data and rendered as a web page, print layout, JSON API, and downloadable PDF.

## Quick start

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) - you will be redirected to `/en` or `/cs` based on your language preference.

## Documentation

**[Project guide →](docs/PROJECT.md)**

The guide covers project structure, how data flows through the app, where to edit resume content vs. UI labels, and how to add sections or locales.

### Where to edit what

| I want to…                                     | Edit                                              |
| ---------------------------------------------- | ------------------------------------------------- |
| Change jobs, projects, skills, contact info    | `src/data/resume.ts` and `src/data/resume-cs.ts`  |
| Change button text, nav labels, section titles | `src/i18n/dictionaries/en.ts` and `cs.ts`         |
| Change layout or add a UI section              | `src/components/` and `src/app/[locale]/page.tsx` |
| Change site URL or SEO keywords                | `metadata` in both resume data files              |

## Scripts

| Command      | Description            |
| ------------ | ---------------------- |
| `pnpm dev`   | Development server     |
| `pnpm build` | Production build       |
| `pnpm start` | Serve production build |
| `pnpm lint`  | Run ESLint             |

## Locales

- English - `/en`
- Czech - `/cs`

Resume content is fully translated per locale. UI chrome (buttons, headings) comes from i18n dictionaries.

## API

- `GET /api/resume?lang=en` - resume JSON with computed fields
- `GET /api/pdf?lang=en` - downloadable PDF
