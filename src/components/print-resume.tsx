import { PrintQrCode } from "@/components/print-qr-code";
import {
  getCondensedSkillLines,
  getContactLine,
  getDrivingLicenseLine,
  getExperienceBullets,
  getExperienceTech,
  getLanguagesLine,
  getLinksLine,
  getPrintProjects,
} from "@/lib/resume-print";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import {
  calculateYearsOfExperience,
  getFullName,
  getResume,
} from "@/lib/resume";
import { formatDateRange, formatYearsExperience, formatYearRange } from "@/lib/utils";

export function PrintResume({ locale }: { locale: Locale }) {
  const resume = getResume(locale);
  const dictionary = getDictionary(locale);
  const name = getFullName(resume);
  const years = calculateYearsOfExperience(resume);

  return (
    <article className="print-resume hidden print:block">
      <header className="print-header">
        <div className="print-header-row">
          <div className="print-header-main">
            <h1>{name}</h1>
            <p className="print-subtitle">
              {resume.profile.title} · {formatYearsExperience(years, locale)}
            </p>
            <p className="print-contact">{getContactLine(resume)}</p>
            <p className="print-contact">{getLinksLine(resume)}</p>
            {getDrivingLicenseLine(locale, resume) && (
              <p className="print-contact">
                {getDrivingLicenseLine(locale, resume)}
              </p>
            )}
          </div>
          <PrintQrCode
            url={resume.metadata.canonicalUrl}
            label={dictionary.common.scanToView}
          />
        </div>
      </header>

      <section className="print-section">
        <h2>{dictionary.print.summary}</h2>
        <p className="print-body">{resume.summary}</p>
      </section>

      <section className="print-section">
        <h2>{dictionary.print.experience}</h2>
        {resume.experience.map((item) => (
          <div key={item.id} className="print-entry">
            <div className="print-entry-header">
              <div>
                <p className="print-entry-title">{item.position}</p>
                <p className="print-entry-subtitle">{item.company}</p>
              </div>
              <time className="print-entry-date">
                {formatDateRange(item.startDate, item.endDate, locale)}
              </time>
            </div>
            <ul className="print-bullets">
              {getExperienceBullets(item).map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
            <p className="print-meta">
              {getExperienceTech(item).join(", ")}
            </p>
          </div>
        ))}
      </section>

      <section className="print-section">
        <h2>{dictionary.print.selectedProjects}</h2>
        {getPrintProjects(resume).map((project) => (
          <div key={project.id} className="print-entry">
            <p className="print-entry-title">{project.title}</p>
            <p className="print-body">{project.description}</p>
          </div>
        ))}
      </section>

      <section className="print-section">
        <h2>{dictionary.print.skills}</h2>
        <dl className="print-skills">
          {getCondensedSkillLines(locale, resume).map((line) => (
            <div key={line.label} className="print-skill-row">
              <dt>{line.label}</dt>
              <dd>{line.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="print-section print-bottom">
        <div>
          <h2>{dictionary.print.education}</h2>
          {resume.education.map((item) => (
            <div key={item.id} className="print-entry">
              <p className="print-entry-title">
                {item.degree}, {item.field}
              </p>
              <p className="print-entry-subtitle">{item.institution}</p>
              <p className="print-meta">
                {formatYearRange(item.startDate, item.endDate, locale)}
              </p>
            </div>
          ))}
        </div>
        <div>
          <h2>{dictionary.print.languages}</h2>
          <p className="print-body">{getLanguagesLine(locale, resume)}</p>
        </div>
      </section>
    </article>
  );
}
