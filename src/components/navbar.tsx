'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { Menu, Printer, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { DownloadPdfButton } from '@/components/download-pdf-button'
import { LanguageSwitcher } from '@/components/language-switcher'
import { ThemeToggle } from '@/components/theme-toggle'
import { useLocale } from '@/components/locale-provider'
import { cn } from '@/lib/utils'

export function Navbar() {
  const { dictionary, resume } = useLocale()
  const [activeSection, setActiveSection] = useState('home')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const baseNavItems = useMemo(
    () => [
      { href: '#home', label: dictionary.nav.home },
      { href: '#experience', label: dictionary.nav.experience },
      { href: '#projects', label: dictionary.nav.projects },
      { href: '#skills', label: dictionary.nav.skills },
      { href: '#education', label: dictionary.nav.education },
      {
        href: '#certifications',
        label: dictionary.nav.certifications,
        show: () => resume.certifications.length > 0
      },
      { href: '#contact', label: dictionary.nav.contact }
    ],
    [dictionary.nav, resume.certifications.length]
  )

  const navItems = useMemo(
    () => baseNavItems.filter((item) => !item.show || item.show()),
    [baseNavItems]
  )

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 8)

      const sections = navItems.map((item) => item.href.slice(1))
      const scrollPosition = window.scrollY + 120

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [navItems])

  useEffect(() => {
    if (!mobileOpen) return

    document.body.style.overflow = 'hidden'

    function handleResize() {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('resize', handleResize)
    }
  }, [mobileOpen])

  function handlePrint() {
    window.print()
  }

  return (
    <header
      className={cn(
        'no-print sticky top-0 z-50 w-full',
        !mobileOpen &&
          'transition-[border-color,background-color,box-shadow] duration-300',
        mobileOpen
          ? 'z-80 border-b border-border bg-background'
          : scrolled
            ? 'border-b border-border/80 bg-background/85 shadow-sm shadow-black/5 backdrop-blur-lg backdrop-saturate-150'
            : 'border-b border-transparent bg-background/40 backdrop-blur-sm'
      )}
    >
      <nav
        className="mx-auto flex h-16 w-full max-w-[900px] items-center justify-between gap-3 px-6"
        aria-label={dictionary.common.mainNavigation}
      >
        <div className="flex min-w-0 items-center">
          <ul className="hidden items-center gap-0.5 lg:flex">
          {navItems.map((item) => {
            const sectionId = item.href.slice(1)
            const isActive = activeSection === sectionId

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    'relative rounded-md px-2.5 py-1.5 text-sm transition-colors lg:px-3',
                    isActive
                      ? 'font-medium text-foreground'
                      : 'text-muted-foreground hover:bg-accent/60 hover:text-foreground'
                  )}
                >
                  {item.label}
                  {isActive && (
                    <span
                      className="absolute inset-x-2.5 -bottom-4.5 h-0.5 rounded-full bg-highlight"
                      aria-hidden
                    />
                  )}
                </Link>
              </li>
            )
          })}
          </ul>
        </div>

        <div className="flex shrink-0 items-center gap-0.5">
          <LanguageSwitcher compact />
          <div className="hidden h-5 w-px bg-border lg:block" aria-hidden />
          <DownloadPdfButton
            variant="ghost"
            size="icon"
            showLabel={false}
            className="hidden h-8 w-8 text-muted-foreground hover:text-foreground min-[400px]:inline-flex"
          />
          <Button
            variant="ghost"
            size="icon"
            onClick={handlePrint}
            aria-label={dictionary.common.printAria}
            title={dictionary.common.printTitle}
            className="hidden h-8 w-8 text-muted-foreground hover:text-foreground min-[400px]:inline-flex"
          >
            <Printer className="h-4 w-4" />
          </Button>
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={
              mobileOpen
                ? dictionary.common.closeMenu
                : dictionary.common.openMenu
            }
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </nav>

      {mobileOpen && (
        <>
          <button
            type="button"
            className="fixed inset-x-0 top-16 bottom-0 z-60 bg-black/45 lg:hidden dark:bg-black/45"
            onClick={() => setMobileOpen(false)}
            aria-label={dictionary.common.closeMenu}
          />
          <div className="fixed inset-x-0 top-16 z-70 max-h-[calc(100dvh-4rem)] overflow-y-auto border border-t-0 border-border bg-background px-6 py-5 shadow-lg lg:hidden dark:bg-background/90">
            <ul className="flex flex-col gap-0.5">
              {navItems.map((item) => {
                const sectionId = item.href.slice(1)
                const isActive = activeSection === sectionId

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        'flex items-center rounded-lg px-3 py-2.5 text-sm transition-colors',
                        isActive
                          ? 'bg-accent font-medium text-foreground'
                          : 'text-muted-foreground hover:bg-accent/60 hover:text-foreground'
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
            <div className="mt-5 hidden flex-col gap-2 border-t border-border pt-5 max-[399px]:flex">
              <DownloadPdfButton
                variant="outline"
                size="sm"
                className="w-full"
              />
              <Button
                variant="outline"
                size="sm"
                onClick={handlePrint}
                className="w-full"
              >
                <Printer className="h-4 w-4" />
                {dictionary.common.print}
              </Button>
            </div>
          </div>
        </>
      )}
    </header>
  )
}
