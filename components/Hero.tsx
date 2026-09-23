import { experiences, highlights, profile, skills, techStacks } from "@/data/portfolio";
import { ArrowRightIcon } from "@/components/icons";
import { SocialLinks, buttonPrimary, buttonSecondary, container } from "@/components/ui";

const roles = profile.title.split("•").map((role) => role.trim());

export function Hero() {
  const current = experiences[0];

  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="dot-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_40%,transparent_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10%] size-[34rem] rounded-full bg-accent/10 blur-3xl"
      />

      <div className={`${container} relative grid items-center gap-14 pt-32 pb-16 sm:pt-40 lg:grid-cols-[1.1fr_1fr] lg:pb-24`}>
        <div>
          <p className="inline-flex animate-rise items-center gap-2.5 rounded-full border border-line bg-surface/70 px-3.5 py-1.5 text-xs font-medium text-muted backdrop-blur">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            {current.title} @ {current.company}
          </p>

          <h1 className="mt-7 animate-rise text-5xl font-semibold tracking-tight text-balance text-fg [animation-delay:80ms] sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>

          <p className="mt-5 flex animate-rise flex-wrap items-center gap-x-3 gap-y-1 text-lg font-medium text-fg/80 [animation-delay:140ms] sm:text-xl">
            {roles.map((role, i) => (
              <span key={role} className="inline-flex items-center gap-3">
                {i > 0 && <span className="text-accent">/</span>}
                {role}
              </span>
            ))}
          </p>

          <p className="mt-5 max-w-xl animate-rise text-base leading-relaxed text-muted [animation-delay:200ms] sm:text-lg">
            {profile.description}
          </p>

          <div className="mt-9 flex animate-rise flex-wrap items-center gap-3 [animation-delay:260ms]">
            <a href="#projects" className={buttonPrimary}>
              View projects
              <ArrowRightIcon className="size-4" />
            </a>
            <a href="#contact" className={buttonSecondary}>
              Get in touch
            </a>
            <span aria-hidden="true" className="mx-1 hidden h-6 w-px bg-line sm:block" />
            <SocialLinks />
          </div>
        </div>

        <Terminal />
      </div>

      <div className={container}>
        <dl className="grid grid-cols-3 divide-x divide-line border-t border-line">
          {highlights.map((item) => (
            <div key={item.label} className="flex flex-col-reverse justify-end gap-1 py-6 pl-4 first:pl-0 sm:py-8 sm:pl-8">
              <dt className="text-xs text-subtle sm:text-sm">{item.label}</dt>
              <dd className="text-2xl font-semibold tracking-tight text-fg sm:text-3xl">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Prompt({ children }: { children: string }) {
  return (
    <p>
      <span className="text-[#e87a3e]">khang:~#</span> <span className="text-slate-100">{children}</span>
    </p>
  );
}

function Terminal() {
  const folders = skills.map((skill) => `${skill.toLowerCase().replace(/\s+/g, "-")}/`);

  return (
    <div className="relative animate-rise [animation-delay:320ms]">
      <div aria-hidden="true" className="absolute -inset-3 rounded-[1.75rem] bg-accent/10 blur-2xl" />
      <figure
        aria-label="Profile summary in a terminal window"
        className="relative overflow-hidden rounded-2xl border border-slate-800 bg-[#0d1117] font-mono text-[13px] leading-relaxed text-slate-400 shadow-2xl shadow-slate-900/20 dark:border-line dark:bg-surface dark:shadow-black/40"
      >
        <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
          <span className="size-3 rounded-full bg-[#e87a3e]" />
          <span className="size-3 rounded-full bg-slate-700" />
          <span className="size-3 rounded-full bg-slate-700" />
          <span className="ml-3 text-xs text-slate-400">khang@portfolio: ~</span>
        </div>

        <div className="space-y-4 p-5 sm:p-6">
          <div>
            <Prompt>whoami</Prompt>
            <p>{profile.name} — {profile.title.toLowerCase()}</p>
          </div>
          <div>
            <Prompt>cat stack.txt</Prompt>
            <p>{techStacks.Languages.join(" · ")}</p>
          </div>
          <div>
            <Prompt>ls focus/</Prompt>
            <p className="flex flex-wrap gap-x-4 text-slate-200">
              {folders.map((folder) => (
                <span key={folder}>{folder}</span>
              ))}
            </p>
          </div>
          <p>
            <span className="text-[#e87a3e]">khang:~#</span>{" "}
            <span className="inline-block h-4 w-2 translate-y-0.5 animate-blink bg-slate-300" />
          </p>
        </div>
      </figure>
    </div>
  );
}
