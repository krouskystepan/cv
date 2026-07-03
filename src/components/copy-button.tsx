'use client'

import { useState } from 'react'
import { Check, Copy } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface CopyButtonProps {
  value: string
  label: string
  copyLabel: string
  copiedLabel: string
  className?: string
  compact?: boolean
}

export function CopyButton({
  value,
  label,
  copyLabel,
  copiedLabel,
  className,
  compact = false,
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard API unavailable
    }
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleCopy}
      className={cn(
        'no-print h-8 gap-1.5 text-muted-foreground',
        compact && 'w-8 px-0 sm:w-auto sm:px-3',
        className,
      )}
      aria-label={`${copyLabel} ${label}`}
    >
      {copied ? (
        <>
          <Check className="h-3.5 w-3.5" />
          <span className={cn('text-sm', compact && 'hidden sm:inline')}>
            {copiedLabel}
          </span>
        </>
      ) : (
        <>
          <Copy className="h-3.5 w-3.5" />
          <span className={cn('text-sm', compact && 'hidden sm:inline')}>
            {copyLabel}
          </span>
        </>
      )}
    </Button>
  )
}
