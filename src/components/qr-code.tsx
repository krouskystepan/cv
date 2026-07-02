"use client";

import { QRCodeSVG } from "qrcode.react";
import { useLocale } from "@/components/locale-provider";

export function QrCode() {
  const { dictionary, resume } = useLocale();

  return (
    <div className="no-print flex max-w-32 flex-col items-center gap-2 rounded-lg border border-border bg-card p-4 shadow-sm">
      <QRCodeSVG
        value={resume.metadata.canonicalUrl}
        size={96}
        level="M"
        bgColor="transparent"
        fgColor="currentColor"
        className="text-foreground"
        aria-label={dictionary.common.qrCodeAria}
      />
      <p className="max-w-24 text-center text-sm text-balance text-muted-foreground">
        {dictionary.common.scanToView}
      </p>
    </div>
  );
}
