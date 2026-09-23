import { profile } from "@/data/portfolio";
import { container } from "@/components/ui";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className={`${container} flex flex-col gap-3 py-8 text-sm text-subtle sm:flex-row sm:items-center sm:justify-between`}>
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="font-mono text-xs">Built with Next.js &amp; Tailwind CSS</p>
        <a href="#top" className="transition-colors hover:text-accent-ink">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
