import { projects, type Project } from "@/data/portfolio";
import { ArrowUpRightIcon, AwardIcon, CodeIcon, GitHubIcon } from "@/components/icons";
import { Section } from "@/components/ui";

function Tags({ tags }: { tags: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {tags.map((tag) => (
        <li key={tag} className="rounded-md bg-surface-2 px-2 py-1 font-mono text-xs text-muted">
          {tag}
        </li>
      ))}
    </ul>
  );
}

/** The title link stretches over the whole card, so any click opens the project. */
function TitleLink({ project, className }: { project: Project; className: string }) {
  const href = project.github ?? project.link;
  if (!href) return <h3 className={className}>{project.name}</h3>;
  return (
    <h3 className={className}>
      <a href={href} target="_blank" rel="noreferrer" className="after:absolute after:inset-0 after:rounded-2xl">
        {project.name}
      </a>
    </h3>
  );
}

function FeaturedProject({ project }: { project: Project }) {
  return (
    <article className="reveal group relative grid overflow-hidden rounded-2xl border border-line bg-surface transition hover:border-accent/60 hover:shadow-xl hover:shadow-slate-900/5 md:grid-cols-[1.5fr_1fr] dark:hover:shadow-black/30">
      <div className="p-6 sm:p-9">
        {project.award && (
          <p className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent-soft px-3 py-1 text-xs font-medium text-accent-ink">
            <AwardIcon className="size-3.5" />
            {project.award}
          </p>
        )}
        <TitleLink project={project} className="mt-6 text-2xl font-semibold tracking-tight text-fg sm:text-3xl" />
        <p className="mt-3 max-w-xl leading-relaxed text-muted">{project.desc}</p>
        <div className="mt-6">
          <Tags tags={project.tags} />
        </div>
        {project.link && (
          <p className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-accent-ink">
            {project.linkLabel ?? "Article"}
            <ArrowUpRightIcon className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </p>
        )}
      </div>

      <div aria-hidden="true" className="relative hidden items-center justify-center border-l border-line bg-surface-2/50 md:flex">
        <div className="dot-grid absolute inset-0 [mask-image:radial-gradient(circle_at_center,#000_30%,transparent_75%)]" />
        <div className="relative flex size-36 items-center justify-center rounded-full border border-line-strong bg-surface shadow-sm transition-transform duration-500 group-hover:scale-105">
          <div className="flex size-24 items-center justify-center rounded-full border border-accent/40 bg-accent-soft">
            <AwardIcon className="size-10 text-accent-ink" />
          </div>
        </div>
      </div>
    </article>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition hover:-translate-y-0.5 hover:border-accent/60 hover:shadow-xl hover:shadow-slate-900/5 dark:hover:shadow-black/30">
      <div className="flex items-start justify-between">
        <span className="flex size-10 items-center justify-center rounded-xl bg-accent-soft text-accent-ink">
          <CodeIcon className="size-5" />
        </span>
        <span className="flex items-center gap-2 text-subtle transition-colors group-hover:text-accent-ink">
          {project.github && <GitHubIcon className="size-4" />}
          <ArrowUpRightIcon className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
      <TitleLink project={project} className="mt-6 text-lg font-semibold text-fg" />
      <p className="mt-2 text-sm leading-relaxed text-muted">{project.desc}</p>
      <div className="mt-auto pt-6">
        <Tags tags={project.tags} />
      </div>
    </article>
  );
}

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <Section id="projects" index="03" title="Projects & Research">
      <div className="space-y-5">
        {featured.map((project) => (
          <FeaturedProject key={project.name} project={project} />
        ))}
        {/* A leftover odd card on the 2-column layout spans the full row instead of sitting alone */}
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((project) => (
            <li key={project.name} className="reveal sm:last:odd:col-span-2 lg:last:odd:col-span-1">
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
