import type { Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionary'
import {
  getCurrentYear,
  getFullName,
  getLastUpdatedFormatted,
  getResume,
} from '@/lib/resume'

export function Footer({ locale }: { locale: Locale }) {
  const resume = getResume(locale)
  const dictionary = getDictionary(locale)

  return (
    <footer className="no-print mt-10 border-t border-border py-6 sm:mt-14">
      <div className="flex flex-col gap-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:text-base">
        <div className="space-y-1">
          <p>
            {dictionary.footer.lastUpdated}:{' '}
            {getLastUpdatedFormatted(locale)}
          </p>
          <p>
            © {getCurrentYear()} {getFullName(resume)}.{' '}
            {dictionary.footer.rightsReserved}
          </p>
        </div>
        <div className="space-y-1 sm:text-right">
          <p className="hidden text-sm sm:inline">
            {dictionary.footer.shortcuts}
          </p>
        </div>
      </div>
    </footer>
  )
}
