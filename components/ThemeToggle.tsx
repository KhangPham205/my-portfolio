"use client";

import { MoonIcon, SunIcon } from "@/components/icons";
import { iconButton } from "@/components/ui";

export function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Storage can be unavailable (private mode); the switch still applies to this visit.
    }
  }

  // Both icons are rendered and CSS picks one, so the server HTML never mismatches.
  return (
    <button type="button" onClick={toggle} aria-label="Toggle dark mode" className={iconButton}>
      <MoonIcon className="size-4 dark:hidden" />
      <SunIcon className="hidden size-4 dark:block" />
    </button>
  );
}
