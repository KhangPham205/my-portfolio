import { ThemeToggle } from "@/components/ThemeToggle";
import { container } from "@/components/ui";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
];

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/70 bg-bg/75 backdrop-blur-xl">
      <nav className={`${container} flex h-16 items-center justify-between gap-6`}>
        <a href="#top" className="font-mono text-sm font-semibold tracking-tight text-fg">
          khang<span className="text-accent-ink">:~#</span>
        </a>

        <ul className="hidden items-center gap-8 text-sm text-muted md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-fg">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="#contact"
            className="inline-flex h-10 items-center rounded-full bg-fg px-4 text-sm font-medium text-bg transition-colors hover:bg-accent-ink"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
