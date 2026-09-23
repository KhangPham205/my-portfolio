import Image from "next/image";

export interface TimelineEntry {
  title: string;
  org: string;
  location?: string;
  period: string;
  logo?: string;
  description: string;
}

function Logo({ src, org }: { src?: string; org: string }) {
  if (src) {
    return (
      <span className="relative size-11 shrink-0 overflow-hidden rounded-xl border border-line bg-white">
        <Image src={src} alt="" width={44} height={44} className="size-full object-contain" />
      </span>
    );
  }

  const initials = org
    .split(/[\s\-–]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join("");

  return (
    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-line bg-accent-soft font-mono text-sm font-semibold text-accent-ink">
      {initials}
    </span>
  );
}

export function Timeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <ol>
      {entries.map((entry, i) => {
        const isLast = i === entries.length - 1;
        return (
          <li key={`${entry.org}-${entry.title}`} className="reveal grid gap-x-10 sm:grid-cols-[9.5rem_1fr]">
            <p className="hidden pt-2.5 font-mono text-sm text-subtle sm:block">{entry.period}</p>

            <div className={`relative border-l border-line pl-7 sm:pl-9 ${isLast ? "pb-1" : "pb-12"}`}>
              <span
                aria-hidden="true"
                className={`absolute top-4 -left-[5px] size-[9px] rounded-full ring-4 ring-bg ${i === 0 ? "bg-accent" : "bg-line-strong"}`}
              />
              <p className="mb-3 font-mono text-xs text-subtle sm:hidden">{entry.period}</p>

              <div className="flex items-start gap-4">
                <Logo src={entry.logo} org={entry.org} />
                <div className="min-w-0">
                  <h3 className="font-semibold text-fg">{entry.title}</h3>
                  <p className="mt-0.5 text-sm text-muted">
                    {entry.org}
                    {entry.location && <span className="text-subtle"> · {entry.location}</span>}
                  </p>
                </div>
              </div>

              <p className="mt-4 max-w-2xl leading-relaxed text-muted">{entry.description}</p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
