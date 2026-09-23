import { techStacks } from "@/data/portfolio";
import { Section } from "@/components/ui";

export function Skills() {
  return (
    <Section id="skills" index="05" title="Skills">
      <dl className="divide-y divide-line border-y border-line">
        {Object.entries(techStacks).map(([category, items]) => (
          <div key={category} className="reveal grid gap-3 py-5 sm:grid-cols-[12rem_1fr] sm:items-center sm:py-6">
            <dt className="font-mono text-xs tracking-wider text-subtle uppercase">{category}</dt>
            <dd>
              <ul className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-line bg-surface px-3.5 py-1.5 text-sm text-fg transition-colors hover:border-accent hover:text-accent-ink"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
