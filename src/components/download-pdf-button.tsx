'use client'

import { Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { Locale } from '@/i18n/config'
import { downloadPdf } from '@/lib/pdf-client'

export function DownloadPdfButton({
  locale,
  downloadPdfLabel,
  downloadPdfAria,
  variant = 'default',
  size = 'default',
  className,
  showLabel = true,
}: {
  locale: Locale
  downloadPdfLabel: string
  downloadPdfAria: string
  variant?: 'default' | 'secondary' | 'outline' | 'ghost'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  className?: string
  showLabel?: boolean
}) {
  function handleDownload() {
    downloadPdf(locale)
  }

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleDownload}
      className={className}
      aria-label={downloadPdfAria}
    >
      <Download className="h-4 w-4" />
      {showLabel && downloadPdfLabel}
    </Button>
  )
}
