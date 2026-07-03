'use client'

import { QRCodeSVG } from 'qrcode.react'
import { BRAND_IMAGE_PATH } from '@/lib/brand'
import {
  QR_CODE_COLORS,
  QR_CODE_ERROR_CORRECTION,
  QR_CODE_MARGIN,
  QR_DISPLAY_SIZE,
  QR_LOGO_SIZE,
} from '@/lib/qr-code'

export function QrCode({
  url,
  qrCodeAria,
  scanToViewLabel,
}: {
  url: string
  qrCodeAria: string
  scanToViewLabel: string
}) {
  return (
    <div className="no-print flex shrink-0 flex-col items-center gap-2.5 rounded-xl border border-border bg-card p-4 shadow-sm">
      <div className="rounded-lg bg-white p-2 shadow-sm ring-1 ring-black/5 dark:ring-white/10">
        <QRCodeSVG
          value={url}
          size={QR_DISPLAY_SIZE}
          level={QR_CODE_ERROR_CORRECTION}
          marginSize={QR_CODE_MARGIN}
          bgColor={QR_CODE_COLORS.light}
          fgColor={QR_CODE_COLORS.dark}
          imageSettings={{
            src: BRAND_IMAGE_PATH,
            width: QR_LOGO_SIZE,
            height: QR_LOGO_SIZE,
            excavate: true,
          }}
          aria-label={qrCodeAria}
        />
      </div>
      <p className="max-w-28 text-center text-xs font-medium text-balance text-muted-foreground">
        {scanToViewLabel}
      </p>
    </div>
  )
}
