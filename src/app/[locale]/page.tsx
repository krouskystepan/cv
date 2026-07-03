import dynamic from 'next/dynamic'
import { notFound } from 'next/navigation'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Summary } from '@/components/summary'
import { Experience } from '@/components/experience'
import { Projects } from '@/components/projects'
import { Skills } from '@/components/skills'
import { Education } from '@/components/education'
import { Certifications } from '@/components/certifications'
import { Languages } from '@/components/languages'
import { Footer } from '@/components/footer'
import { isLocale, type Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionary'
import { generatePersonJsonLd } from '@/lib/json-ld'
import { getResume } from '@/lib/resume'

const Contact = dynamic(() =>
  import('@/components/contact').then((mod) => ({ default: mod.Contact })),
)

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale: localeParam } = await params

  if (!isLocale(localeParam)) {
    notFound()
  }

  const locale = localeParam as Locale
  const dictionary = getDictionary(locale)
  const resume = getResume(locale)
  const jsonLd = generatePersonJsonLd(locale)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <Navbar
        locale={locale}
        dictionary={dictionary}
        showCertifications={resume.certifications.length > 0}
      />
      <main className="mx-auto w-full max-w-[900px] px-4 pb-10 sm:px-6 sm:pb-12">
        <Hero locale={locale} />
        <div className="space-y-10 sm:space-y-14">
          <Summary locale={locale} />
          <Experience locale={locale} />
          <Projects locale={locale} />
          <Skills locale={locale} />
          <Education locale={locale} />
          <Certifications locale={locale} />
          <Languages locale={locale} />
          <Contact dictionary={dictionary} resume={resume} />
        </div>
        <Footer locale={locale} />
      </main>
    </>
  )
}
