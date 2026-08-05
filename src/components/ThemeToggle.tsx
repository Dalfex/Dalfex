import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

/**
 * Three states in two clicks: the site defaults to the system's scheme (no
 * stored value), and a click stores an explicit choice. The inline script in
 * Layout.astro applies the same logic before paint, so this component only
 * has to mirror and mutate — never to decide first.
 */
export default function ThemeToggle({ className = "" }: { className?: string }) {
  const [isDark, setIsDark] = useState<boolean | null>(null);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));

    // Follow the system while the visitor has not chosen.
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (e: MediaQueryListEvent) => {
      if (localStorage.getItem("theme")) return;
      document.documentElement.classList.toggle("dark", e.matches);
      setIsDark(e.matches);
    };
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  function toggle() {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    setIsDark(next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={
        isDark === null
          ? "Toggle colour theme"
          : isDark
            ? "Switch to light theme"
            : "Switch to dark theme"
      }
      className={`flex h-9 w-9 items-center justify-center rounded-full text-ink/50 transition-colors hover:bg-ink/[0.06] hover:text-ink ${className}`}
    >
      {isDark ? (
        <Sun className="h-4 w-4" strokeWidth={1.5} />
      ) : (
        <Moon className="h-4 w-4" strokeWidth={1.5} />
      )}
    </button>
  );
}
