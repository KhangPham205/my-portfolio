import { profile } from "@/data/portfolio";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/icons";

const ghostLink =
  "inline-flex h-12 items-center gap-2 rounded-full border border-white/15 px-5 text-sm font-medium text-white transition-colors hover:border-[#e87a3e] hover:text-[#f0894f]";

// Always a dark panel, in both themes, so it closes the page with contrast.
export function Contact() {
  return (
    <section id="contact" className="py-12 sm:py-16">
      <div className="reveal relative overflow-hidden rounded-3xl bg-[#0f172a] px-6 py-16 text-center sm:px-12 sm:py-24 dark:border dark:border-line dark:bg-surface">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#1e293b_1px,transparent_0)] bg-[size:22px_22px] [mask-image:radial-gradient(ellipse_at_center,#000_20%,transparent_70%)]"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-40 left-1/2 size-[30rem] -translate-x-1/2 rounded-full bg-[#e87a3e]/20 blur-3xl"
        />

        <div className="relative">
          <p className="font-mono text-sm text-[#f0894f]">06 — contact</p>
          <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
            {"Let's build something reliable."}
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-slate-400">
            {"Feel free to reach out — I'm always happy to talk about backend systems, distributed architecture or AI privacy."}
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex h-12 items-center gap-2 rounded-full bg-[#e87a3e] px-6 text-sm font-semibold text-slate-950 transition-colors hover:bg-[#f0894f]"
            >
              <MailIcon className="size-4" />
              {profile.email}
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className={ghostLink}>
              <GitHubIcon className="size-4" />
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className={ghostLink}>
              <LinkedInIcon className="size-4" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
