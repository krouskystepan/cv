"use client";

import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/components/locale-provider";
import { downloadPdf } from "@/lib/pdf-client";

export function DownloadPdfButton({
  variant = "default",
  size = "default",
  className,
  showLabel = true,
}: {
  variant?: "default" | "secondary" | "outline" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  showLabel?: boolean;
}) {
  const { dictionary, locale } = useLocale();

  function handleDownload() {
    downloadPdf(locale);
  }

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleDownload}
      className={className}
      aria-label={dictionary.common.downloadPdfAria}
    >
      <Download className="h-4 w-4" />
      {showLabel && dictionary.common.downloadPdf}
    </Button>
  );
}
