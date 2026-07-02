"use client";

import type { ElementType, ReactNode } from "react";
import Link from "next/link";
import { Code2, Globe, Link as LinkIcon, Mail, MapPin } from "lucide-react";
import { CopyButton } from "@/components/copy-button";
import { QrCode } from "@/components/qr-code";
import { Section } from "@/components/section";
import { useLocale } from "@/components/locale-provider";
import { getSocialLink } from "@/lib/resume";

function ContactRow({
  icon: Icon,
  label,
  children,
  copyValue,
  copyLabel,
}: {
  icon: ElementType;
  label: string;
  children: ReactNode;
  copyValue?: string;
  copyLabel?: string;
}) {
  return (
    <div className="flex items-center gap-3 px-4 py-3">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-border bg-accent">
        <Icon className="h-3.5 w-3.5 text-highlight" aria-hidden />
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground sm:text-sm">
          {label}
        </p>
        <div className="text-sm font-medium break-all text-foreground sm:text-base">{children}</div>
      </div>
      {copyValue && copyLabel && (
        <CopyButton
          compact
          value={copyValue}
          label={copyLabel}
          className="shrink-0"
        />
      )}
    </div>
  );
}

export function Contact() {
  const { dictionary, resume } = useLocale();
  const github = getSocialLink("GitHub", resume);
  const linkedin = getSocialLink("LinkedIn", resume);

  return (
    <Section id="contact" title={dictionary.sections.contact}>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
        <div className="min-w-0 flex-1 divide-y divide-border rounded-lg border border-border bg-card">
          <ContactRow
            label={dictionary.common.email}
            icon={Mail}
            copyValue={resume.contact.email}
            copyLabel={dictionary.common.email}
          >
            <a
              href={`mailto:${resume.contact.email}`}
              className="hover:text-highlight hover:underline"
            >
              {resume.contact.email}
            </a>
          </ContactRow>

          <ContactRow label={dictionary.common.location} icon={MapPin}>
            {resume.contact.location}
          </ContactRow>

          <ContactRow
            label={dictionary.common.website}
            icon={Globe}
            copyValue={resume.contact.website}
            copyLabel={dictionary.common.website}
          >
            <Link
              href={resume.contact.website}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-highlight hover:underline"
            >
              {resume.contact.website.replace(/^https?:\/\//, "")}
            </Link>
          </ContactRow>

          {github && (
            <ContactRow label="GitHub" icon={Code2} copyValue={github} copyLabel="GitHub">
              <Link
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-highlight hover:underline"
              >
                {github.replace(/^https?:\/\/(www\.)?/, "")}
              </Link>
            </ContactRow>
          )}

          {linkedin && (
            <ContactRow
              label="LinkedIn"
              icon={LinkIcon}
              copyValue={linkedin}
              copyLabel="LinkedIn"
            >
              <Link
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-highlight hover:underline"
              >
                {linkedin.replace(/^https?:\/\/(www\.)?/, "")}
              </Link>
            </ContactRow>
          )}
        </div>

        <div className="hidden shrink-0 sm:block">
          <QrCode />
        </div>
      </div>
    </Section>
  );
}
