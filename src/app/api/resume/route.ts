import { NextRequest, NextResponse } from 'next/server'
import { isLocale } from '@/i18n/config'
import {
  calculateAge,
  calculateYearsOfExperience,
  getCurrentPosition,
  getFullName,
  getResume,
} from '@/lib/resume'

export async function GET(request: NextRequest) {
  const lang = request.nextUrl.searchParams.get('lang')
  const locale = lang && isLocale(lang) ? lang : 'en'
  const resume = getResume(locale)

  const data = {
    ...resume,
    computed: {
      fullName: getFullName(resume),
      yearsOfExperience: calculateYearsOfExperience(resume),
      age: calculateAge(resume.profile.birthDate, resume),
      currentPosition: getCurrentPosition(resume),
      currentYear: new Date().getFullYear(),
    },
  }

  return NextResponse.json(data, {
    headers: {
      'Cache-Control': 'public, max-age=3600',
    },
  })
}
