import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ id, title, children, className }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={cn("scroll-mt-20", className)}
    >
      <div className="mb-5 flex items-center gap-3 sm:mb-6">
        <span
          className="h-5 w-0.5 shrink-0 rounded-full bg-highlight"
          aria-hidden
        />
        <h2
          id={`${id}-heading`}
          className="text-sm font-semibold uppercase tracking-wider text-foreground sm:text-base"
        >
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}
