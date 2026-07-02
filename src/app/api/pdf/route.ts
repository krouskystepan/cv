import { NextRequest, NextResponse } from "next/server";
import { isLocale } from "@/i18n/config";
import { generateResumePdf, getPdfContentDisposition } from "@/lib/pdf/generate";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  try {
    const lang = request.nextUrl.searchParams.get("lang");
    const locale = lang && isLocale(lang) ? lang : "en";
    const inline = request.nextUrl.searchParams.get("inline") === "1";
    const pdfBuffer = await generateResumePdf(locale);

    return new NextResponse(new Uint8Array(pdfBuffer), {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": getPdfContentDisposition(locale, inline),
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    console.error("PDF generation failed:", error);
    return NextResponse.json(
      { error: "Failed to generate PDF" },
      { status: 500 }
    );
  }
}
