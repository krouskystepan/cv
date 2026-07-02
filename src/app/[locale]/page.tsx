import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Summary } from "@/components/summary";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Education } from "@/components/education";
import { Certifications } from "@/components/certifications";
import { Languages } from "@/components/languages";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { PrintResume } from "@/components/print-resume";
import { getRequestLocale } from "@/i18n/get-request-locale";

export default async function HomePage() {
  const locale = await getRequestLocale();

  return (
    <>
      <PrintResume locale={locale} />
      <div className="print:hidden">
        <Navbar />
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
            <Contact />
          </div>
          <Footer locale={locale} />
        </main>
      </div>
    </>
  );
}
