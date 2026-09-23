import Image from "next/image";
import { certifications, education } from "@/data/portfolio";
import { LanguagesIcon } from "@/components/icons";
import { Timeline } from "@/components/Timeline";
import { Section } from "@/components/ui";

export function Education() {
  const entries = education.map((edu) => ({ ...edu, title: edu.degree, org: edu.school }));

  return (
    <Section id="education" index="04" title="Education">
      <Timeline entries={entries} />

      {/* Same columns as the timeline: label under the dates, cards under the entry content */}
      <div className="reveal mt-12 grid gap-x-10 gap-y-4 border-t border-line pt-10 sm:grid-cols-[9.5rem_1fr]">
        <h3 className="font-mono text-xs tracking-wider text-subtle uppercase sm:pt-2">Certifications</h3>
        <ul className="grid gap-3 sm:pl-9 md:grid-cols-2">
          {certifications.map((cert) => (
            <li
              key={cert.name}
              className="flex items-center gap-4 rounded-2xl border border-line bg-surface p-5"
            >
              {cert.logo ? (
                <span className="relative h-11 w-24 shrink-0 overflow-hidden rounded-xl border border-line bg-white">
                  <Image src={cert.logo} alt="" fill sizes="96px" className="object-contain p-2" />
                </span>
              ) : (
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent-ink">
                  <LanguagesIcon className="size-5" />
                </span>
              )}
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-fg">{cert.name}</p>
                <p className="mt-0.5 text-sm text-muted">
                  {cert.issuer} · {cert.date}
                </p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-semibold tracking-tight text-fg">{cert.score}</p>
                {cert.scoreLabel && <p className="text-xs text-subtle">{cert.scoreLabel}</p>}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
