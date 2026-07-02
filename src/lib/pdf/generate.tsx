import React from "react";
import { renderToBuffer } from "@react-pdf/renderer";
import type { Locale } from "@/i18n/config";
import { registerPdfFonts } from "@/lib/pdf/fonts";
import { ResumePdfDocument } from "@/lib/pdf/resume-document";
import { getFullName, getResume } from "@/lib/resume";

export async function generateResumePdf(locale: Locale = "en"): Promise<Buffer> {
  registerPdfFonts();
  const buffer = await renderToBuffer(<ResumePdfDocument locale={locale} />);
  return Buffer.from(buffer);
}

function slugifyAscii(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .toLowerCase();
}

export function getPdfFilename(locale: Locale = "en"): string {
  const suffix = locale === "cs" ? "zivotopis" : "resume";
  return `${slugifyAscii(getFullName(getResume(locale)))}-${suffix}.pdf`;
}

export function getPdfContentDisposition(locale: Locale = "en"): string {
  const asciiFilename = getPdfFilename(locale);
  const utf8Filename = `${getFullName(getResume(locale)).replace(/\s+/g, "-").toLowerCase()}-${locale === "cs" ? "zivotopis" : "resume"}.pdf`;

  return `attachment; filename="${asciiFilename}"; filename*=UTF-8''${encodeURIComponent(utf8Filename)}`;
}
