import { education, experiences, profile, skills } from "@/data/portfolio";
import { BriefcaseIcon, GraduationIcon, MapPinIcon } from "@/components/icons";
import { Section, SocialLinks } from "@/components/ui";

export function About() {
  const current = experiences[0];
  const degree = education[0];

  const facts = [
    { label: "Based in", value: profile.location, Icon: MapPinIcon },
    { label: "Currently", value: `${current.title} @ ${current.company}`, Icon: BriefcaseIcon },
    { label: "Studying", value: `${degree.degree}, ${degree.school}`, Icon: GraduationIcon },
  ];

  return (
    <Section id="about" index="01" title="About">
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <div className="reveal space-y-5 text-base leading-relaxed text-muted sm:text-lg">
          {profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="pt-3">
            <SocialLinks labelled />
          </div>
        </div>

        <aside className="reveal space-y-8">
          <dl className="divide-y divide-line rounded-2xl border border-line bg-surface">
            {facts.map(({ label, value, Icon }) => (
              <div key={label} className="flex items-start gap-4 p-5">
                <Icon className="mt-0.5 size-4 shrink-0 text-accent-ink" />
                <div className="min-w-0">
                  <dt className="font-mono text-xs tracking-wider text-subtle uppercase">{label}</dt>
                  <dd className="mt-1 text-sm font-medium text-fg">{value}</dd>
                </div>
              </div>
            ))}
          </dl>

          <div>
            <h3 className="font-mono text-xs tracking-wider text-subtle uppercase">Focus</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-line bg-surface px-3 py-1 font-mono text-xs text-accent-ink"
                >
                  #{skill}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </Section>
  );
}
