import QRCode from 'qrcode'
import {
  PDF_QR_DISPLAY_SIZE,
  PDF_QR_RENDER_SCALE,
  QR_CODE_COLORS,
  QR_CODE_ERROR_CORRECTION,
  QR_CODE_MARGIN,
} from '@/lib/qr-code'

export async function generateQrDataUrl(url: string): Promise<string> {
  return QRCode.toDataURL(url, {
    width: PDF_QR_DISPLAY_SIZE * PDF_QR_RENDER_SCALE,
    margin: QR_CODE_MARGIN,
    errorCorrectionLevel: QR_CODE_ERROR_CORRECTION,
    color: {
      dark: QR_CODE_COLORS.dark,
      light: QR_CODE_COLORS.light,
    },
  })
}
