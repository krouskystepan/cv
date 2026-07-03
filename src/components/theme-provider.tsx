'use client'

import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from 'react'

type Theme = 'light' | 'dark'

const ThemeContext = createContext<{
  theme: Theme
  setTheme: (theme: Theme) => void
} | null>(null)

export function ThemeProvider({
  children,
  defaultTheme,
}: {
  children: ReactNode
  defaultTheme: Theme
}) {
  const [theme, setThemeState] = useState(defaultTheme)

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next)
    document.documentElement.classList.toggle('dark', next === 'dark')
    document.cookie = `theme=${next}; path=/; max-age=31536000; samesite=lax`
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}
