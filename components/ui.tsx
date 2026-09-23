import { profile } from "@/data/portfolio";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/icons";

export const container = "mx-auto w-full max-w-6xl px-5 sm:px-8";

const buttonBase =
  "inline-flex h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-medium transition-colors";

export const buttonPrimary = `${buttonBase} bg-fg text-bg hover:bg-accent-ink`;
export const buttonSecondary = `${buttonBase} border border-line-strong bg-surface text-fg hover:border-accent hover:text-accent-ink`;
export const iconButton =
  "inline-flex size-10 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-accent hover:text-accent-ink";

export function Section({
  id,
  index,
  title,
  children,
}: {
  id: string;
  index: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-12 sm:py-16">
      <header className="mb-10 flex items-center gap-4 sm:mb-14">
        <span className="font-mono text-sm text-accent-ink">{index}</span>
        <h2 className="text-2xl font-semibold tracking-tight text-fg sm:text-3xl">{title}</h2>
        <span aria-hidden="true" className="h-px flex-1 bg-line" />
      </header>
      {children}
    </section>
  );
}

const socials = [
  { label: "GitHub", href: profile.github, Icon: GitHubIcon },
  { label: "LinkedIn", href: profile.linkedin, Icon: LinkedInIcon },
  { label: "Email", href: `mailto:${profile.email}`, Icon: MailIcon },
];

/** Round icon buttons, or labelled pills with `labelled`. */
export function SocialLinks({ labelled = false }: { labelled?: boolean }) {
  return (
    <ul className="flex flex-wrap items-center gap-2">
      {socials.map(({ label, href, Icon }) => {
        const external = href.startsWith("http");
        return (
          <li key={label}>
            <a
              href={href}
              {...(external && { target: "_blank", rel: "noreferrer" })}
              aria-label={labelled ? undefined : label}
              className={
                labelled
                  ? "inline-flex h-10 items-center gap-2 rounded-full border border-line bg-surface px-4 text-sm font-medium text-fg transition-colors hover:border-accent hover:text-accent-ink"
                  : iconButton
              }
            >
              <Icon className="size-4" />
              {labelled && label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
