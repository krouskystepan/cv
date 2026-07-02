export const QR_CODE_COLORS = {
  dark: '#0f172a',
  light: '#ffffff',
} as const

export const QR_CODE_ERROR_CORRECTION = 'Q' as const

/** Module margin around the QR pattern (spec recommends 4; 2 is enough with outer padding). */
export const QR_CODE_MARGIN = 2

export const QR_DISPLAY_SIZE = 112

export const QR_LOGO_SIZE = 22

export const PDF_QR_DISPLAY_SIZE = 64

/** Render PDF QR at higher pixel density for crisp print output. */
export const PDF_QR_RENDER_SCALE = 4
