import React from "react";
import { renderToBuffer } from "@react-pdf/renderer";
import type { Locale } from "@/i18n/config";
import { registerPdfFonts } from "@/lib/pdf/fonts";
import { generateQrDataUrl } from "@/lib/pdf/qr-code";
import { ResumePdfDocument } from "@/lib/pdf/resume-document";
import { getFullName, getResume } from "@/lib/resume";
import { stripDiacritics } from "@/lib/strip-diacritics";

export async function generateResumePdf(locale: Locale = "en"): Promise<Buffer> {
  registerPdfFonts();
  const resume = getResume(locale);
  const qrDataUrl = await generateQrDataUrl(resume.metadata.canonicalUrl);
  const buffer = await renderToBuffer(
    <ResumePdfDocument locale={locale} qrDataUrl={qrDataUrl} />
  );
  return Buffer.from(buffer);
}

function slugifyAscii(text: string): string {
  return stripDiacritics(text)
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .toLowerCase();
}

export function getPdfFilename(locale: Locale = "en"): string {
  const suffix = locale === "cs" ? "zivotopis" : "cv";
  return `${slugifyAscii(getFullName(getResume(locale)))}-${suffix}.pdf`;
}

export function getPdfContentDisposition(
  locale: Locale = "en",
  inline = false
): string {
  const asciiFilename = getPdfFilename(locale);
  const utf8Filename = `${stripDiacritics(getFullName(getResume(locale))).replace(/\s+/g, "-").toLowerCase()}-${locale === "cs" ? "zivotopis" : "cv"}.pdf`;
  const type = inline ? "inline" : "attachment";

  return `${type}; filename="${asciiFilename}"; filename*=UTF-8''${encodeURIComponent(utf8Filename)}`;
}
