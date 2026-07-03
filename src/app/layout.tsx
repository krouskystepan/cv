import type { Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { cookies } from 'next/headers'
import { ThemeProvider } from '@/components/theme-provider'
import { getRequestLocale } from '@/i18n/get-request-locale'
import { cn } from '@/lib/utils'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin', 'latin-ext'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin', 'latin-ext'],
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const locale = await getRequestLocale()
  const theme =
    (await cookies()).get('theme')?.value === 'dark' ? 'dark' : 'light'

  return (
    <html
      lang={locale}
      data-scroll-behavior="smooth"
      className={cn(
        geistSans.variable,
        geistMono.variable,
        'h-full',
        theme === 'dark' && 'dark',
      )}
    >
      <body className="min-h-full bg-background text-foreground antialiased">
        <ThemeProvider defaultTheme={theme}>{children}</ThemeProvider>
      </body>
    </html>
  )
}
