'use client'

import { useEffect } from 'react'
import { useLocale } from '@/components/locale-provider'
import { downloadPdf, printPdf } from '@/lib/pdf-client'

export function KeyboardShortcuts() {
  const { locale } = useLocale()

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      const isMod = event.metaKey || event.ctrlKey

      if (isMod && event.key === 'p') {
        event.preventDefault()
        printPdf(locale)
      }

      if (isMod && event.key === 'd') {
        event.preventDefault()
        downloadPdf(locale)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [locale])

  return null
}
