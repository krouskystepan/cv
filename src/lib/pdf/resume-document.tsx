import {
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
} from "@react-pdf/renderer";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
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
import {
  calculateYearsOfExperience,
  getFullName,
  getResume,
} from "@/lib/resume";
import { formatDateRange, formatYearsExperience, formatYearRange } from "@/lib/utils";
import { PDF_FONT } from "@/lib/pdf/fonts";

const black = "#000000";
const bodyColor = "#1a1a1a";
const secondary = "#3d3d3d";
const muted = "#5c5c5c";

const styles = StyleSheet.create({
  page: {
    paddingTop: 30,
    paddingBottom: 26,
    paddingHorizontal: 38,
    fontFamily: PDF_FONT,
    fontSize: 8.5,
    lineHeight: 1.35,
    color: bodyColor,
  },
  header: {
    marginBottom: 8,
    paddingBottom: 6,
    borderBottomWidth: 1.5,
    borderBottomColor: black,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 12,
  },
  headerMain: {
    flex: 1,
    minWidth: 0,
  },
  qrContainer: {
    flexShrink: 0,
    alignItems: "center",
    gap: 2,
  },
  qrImage: {
    width: 56,
    height: 56,
  },
  qrLabel: {
    fontSize: 6,
    lineHeight: 1.2,
    color: muted,
    textAlign: "center",
    maxWidth: 54,
  },
  name: {
    fontSize: 17,
    fontFamily: PDF_FONT,
    fontWeight: 700,
    lineHeight: 1.15,
    color: black,
    marginBottom: 3,
  },
  subtitle: {
    fontSize: 9,
    lineHeight: 1.3,
    color: secondary,
    marginBottom: 3,
  },
  contact: {
    fontSize: 8,
    lineHeight: 1.35,
    color: muted,
    marginBottom: 1,
  },
  section: {
    marginTop: 6,
  },
  sectionTitle: {
    fontSize: 7.5,
    fontFamily: PDF_FONT,
    fontWeight: 700,
    lineHeight: 1.2,
    textTransform: "uppercase",
    letterSpacing: 1.1,
    color: black,
    marginBottom: 3,
    paddingBottom: 2,
    borderBottomWidth: 0.5,
    borderBottomColor: "#cccccc",
  },
  bodyText: {
    fontSize: 8.5,
    lineHeight: 1.35,
    color: bodyColor,
  },
  experienceItem: {
    marginBottom: 4,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  rowMain: {
    flex: 1,
    paddingRight: 8,
  },
  position: {
    fontSize: 9,
    fontFamily: PDF_FONT,
    fontWeight: 700,
    lineHeight: 1.25,
    color: black,
    marginBottom: 1,
  },
  company: {
    fontSize: 8,
    lineHeight: 1.25,
    color: secondary,
  },
  date: {
    fontSize: 7.5,
    lineHeight: 1.25,
    color: muted,
    width: 88,
    textAlign: "right",
    flexShrink: 0,
  },
  bulletRow: {
    flexDirection: "row",
    marginTop: 1,
  },
  bulletDot: {
    width: 7,
    fontSize: 8,
    lineHeight: 1.3,
    color: black,
  },
  bulletText: {
    flex: 1,
    fontSize: 8,
    lineHeight: 1.3,
    color: bodyColor,
  },
  tech: {
    fontSize: 7,
    lineHeight: 1.25,
    color: muted,
    marginTop: 1,
  },
  projectItem: {
    marginBottom: 3,
  },
  projectTitle: {
    fontSize: 8.5,
    fontFamily: PDF_FONT,
    fontWeight: 700,
    lineHeight: 1.25,
    color: black,
    marginBottom: 1,
  },
  skillGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  skillItem: {
    width: "50%",
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 2,
    paddingRight: 6,
  },
  skillLabel: {
    fontSize: 7.5,
    fontFamily: PDF_FONT,
    fontWeight: 700,
    lineHeight: 1.3,
    color: black,
    width: 92,
    flexShrink: 0,
    paddingRight: 4,
  },
  skillValue: {
    flex: 1,
    fontSize: 7.5,
    lineHeight: 1.3,
    color: bodyColor,
  },
  bottomRow: {
    flexDirection: "row",
  },
  bottomCol: {
    flex: 1,
    minWidth: 0,
  },
  bottomColRight: {
    flex: 1,
    minWidth: 0,
    paddingLeft: 14,
  },
  educationItem: {
    marginBottom: 3,
  },
  educationTitle: {
    fontSize: 8.5,
    fontFamily: PDF_FONT,
    fontWeight: 700,
    lineHeight: 1.35,
    color: black,
    marginBottom: 1,
  },
  educationMeta: {
    fontSize: 8,
    lineHeight: 1.25,
    color: secondary,
  },
});

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {children}
    </View>
  );
}

function Bullets({ items }: { items: string[] }) {
  if (items.length === 0) return null;

  return (
    <View>
      {items.map((item) => (
        <View key={item} style={styles.bulletRow}>
          <Text style={styles.bulletDot}>•</Text>
          <Text style={styles.bulletText}>{item}</Text>
        </View>
      ))}
    </View>
  );
}

export function ResumePdfDocument({
  locale = "en",
  qrDataUrl,
}: {
  locale?: Locale;
  qrDataUrl?: string;
}) {
  const resume = getResume(locale);
  const dictionary = getDictionary(locale);
  const name = getFullName(resume);
  const years = calculateYearsOfExperience(resume);

  return (
    <Document
      title={`${name} - ${dictionary.seo.siteName}`}
      author={name}
      subject={dictionary.seo.siteName}
      creator="cv.krouskystepan.com"
    >
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <View style={styles.headerRow}>
            <View style={styles.headerMain}>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.subtitle}>
                {resume.profile.title}  ·  {formatYearsExperience(years, locale)}
              </Text>
              <Text style={styles.contact}>{getContactLine(resume)}</Text>
              <Text style={styles.contact}>{getLinksLine(resume)}</Text>
              {getDrivingLicenseLine(locale, resume) && (
                <Text style={styles.contact}>
                  {getDrivingLicenseLine(locale, resume)}
                </Text>
              )}
            </View>
            {qrDataUrl && (
              <View style={styles.qrContainer}>
                <Image src={qrDataUrl} style={styles.qrImage} />
                <Text style={styles.qrLabel}>{dictionary.common.scanToView}</Text>
              </View>
            )}
          </View>
        </View>

        <Section title={dictionary.print.summary}>
          <Text style={styles.bodyText}>{resume.summary}</Text>
        </Section>

        <Section title={dictionary.print.experience}>
          {resume.experience.map((item) => (
            <View key={item.id} style={styles.experienceItem} wrap={false}>
              <View style={styles.row}>
                <View style={styles.rowMain}>
                  <Text style={styles.position}>{item.position}</Text>
                  <Text style={styles.company}>{item.company}</Text>
                </View>
                <Text style={styles.date}>
                  {formatDateRange(item.startDate, item.endDate, locale)}
                </Text>
              </View>
              <Bullets items={getExperienceBullets(item)} />
              {getExperienceTech(item).length > 0 && (
                <Text style={styles.tech}>
                  {getExperienceTech(item).join(", ")}
                </Text>
              )}
            </View>
          ))}
        </Section>

        <Section title={dictionary.print.selectedProjects}>
          {getPrintProjects(resume).map((project) => (
            <View key={project.id} style={styles.projectItem} wrap={false}>
              <Text style={styles.projectTitle}>{project.title}</Text>
              <Text style={styles.bodyText}>{project.description}</Text>
            </View>
          ))}
        </Section>

        <Section title={dictionary.print.skills}>
          <View style={styles.skillGrid}>
            {getCondensedSkillLines(locale, resume).map((line) => (
              <View key={line.label} style={styles.skillItem}>
                <Text style={styles.skillLabel}>{line.label}</Text>
                <Text style={styles.skillValue}>{line.value}</Text>
              </View>
            ))}
          </View>
        </Section>

        <View style={styles.section} wrap={false}>
          <View style={styles.bottomRow}>
            <View style={styles.bottomCol}>
              <Text style={styles.sectionTitle}>{dictionary.print.education}</Text>
              {resume.education.map((item) => (
                <View key={item.id} style={styles.educationItem}>
                  <Text style={styles.educationTitle}>
                    {item.degree}, {item.field}
                  </Text>
                  <Text style={styles.educationMeta}>{item.institution}</Text>
                  <Text style={styles.tech}>
                    {formatYearRange(item.startDate, item.endDate, locale)}
                  </Text>
                </View>
              ))}
            </View>
            <View style={styles.bottomColRight}>
              <Text style={styles.sectionTitle}>{dictionary.print.languages}</Text>
              <Text style={styles.bodyText}>{getLanguagesLine(locale, resume)}</Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}
