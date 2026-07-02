'use client'

import { createContext, useContext } from 'react'
import type { Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionary'
import type { Dictionary } from '@/i18n/types'
import { getResumeData } from '@/data/index'
import type { Resume } from '@/types/resume'

interface LocaleContextValue {
  locale: Locale
  dictionary: Dictionary
  resume: Resume
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

export function LocaleProvider({
  locale,
  children,
}: {
  locale: Locale
  children: React.ReactNode
}) {
  const value: LocaleContextValue = {
    locale,
    dictionary: getDictionary(locale),
    resume: getResumeData(locale),
  }

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  )
}

export function useLocale() {
  const context = useContext(LocaleContext)
  if (!context) {
    throw new Error('useLocale must be used within LocaleProvider')
  }
  return context
}
