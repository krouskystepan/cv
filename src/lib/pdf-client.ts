import type { Locale } from '@/i18n/config'

function getPdfUrl(locale: Locale, inline = false): string {
  const params = new URLSearchParams({
    lang: locale,
    v: String(Date.now()),
  })

  if (inline) {
    params.set('inline', '1')
  }

  return `/api/pdf?${params}`
}

export function downloadPdf(locale: Locale): void {
  window.open(getPdfUrl(locale), '_blank')
}

export function printPdf(locale: Locale): void {
  const iframe = document.createElement('iframe')
  iframe.style.cssText =
    'position:fixed;right:0;bottom:0;width:0;height:0;border:none'
  iframe.src = getPdfUrl(locale, true)
  document.body.appendChild(iframe)

  iframe.onload = () => {
    setTimeout(() => {
      iframe.contentWindow?.focus()
      iframe.contentWindow?.print()
      setTimeout(() => iframe.remove(), 1000)
    }, 250)
  }
}
