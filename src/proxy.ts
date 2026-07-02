import { NextRequest, NextResponse } from 'next/server'
import { defaultLocale, isLocale, locales, type Locale } from '@/i18n/config'

function getPreferredLocale(request: NextRequest): Locale {
  const cookieLocale = request.cookies.get('locale')?.value
  if (cookieLocale && isLocale(cookieLocale)) {
    return cookieLocale
  }

  const acceptLanguage = request.headers.get('accept-language')
  if (acceptLanguage) {
    const preferred = acceptLanguage
      .split(',')
      .map((part) => part.split(';')[0]?.trim().toLowerCase())
      .find((lang) => lang?.startsWith('cs'))

    if (preferred) {
      return 'cs'
    }
  }

  return defaultLocale
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  const pathnameHasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  )

  if (pathnameHasLocale) {
    const locale = pathname.split('/')[1]
    if (!isLocale(locale)) {
      return NextResponse.redirect(new URL(`/${defaultLocale}`, request.url))
    }

    const response = NextResponse.next()
    response.headers.set('x-next-locale', locale)
    response.cookies.set('locale', locale, { path: '/' })
    return response
  }

  const locale = getPreferredLocale(request)
  const url = request.nextUrl.clone()
  url.pathname = `/${locale}${pathname === '/' ? '' : pathname}`
  return NextResponse.redirect(url)
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
}
