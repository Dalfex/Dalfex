import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "./Button";
import LangToggle from "./LangToggle";
import ThemeToggle from "./ThemeToggle";
import { tr, type Lang } from "../i18n/config";
import { ui } from "../i18n/ui";

const serif = { fontFamily: "'PPMondwest', serif" };

/**
 * The first fold, printed dark.
 *
 * The riso valley hangs behind everything as the room's atmosphere — its
 * bottom third is printed near-black on purpose, so the copy sits on ink
 * rather than on artwork, and the scrim only finishes what the print
 * starts. A caption strip under the fold treats the whole thing as an
 * edition: DALFEX STUDIO · No. 001 — the registered mark of a studio that
 * prints what it builds.
 */
export default function Hero({ lang }: { lang: Lang }) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock page scroll while the mobile menu overlay is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navLinks = [
    { label: tr(ui.nav.projects, lang), href: "#projects" },
    { label: tr(ui.nav.about, lang), href: "#about" },
    { label: tr(ui.nav.contact, lang), href: "#contact" },
  ];

  return (
    <section className="relative overflow-hidden bg-field">
      {/* The valley print, pinned low so its cream sky crops away above the
          fold and the near-black foreground carries the copy. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-full overflow-hidden"
      >
        <div className="absolute inset-x-0 bottom-0 h-[150%]">
          <img
            src="/prints/hero.png"
            alt=""
            className="h-full w-full object-cover object-bottom opacity-[0.32] dark:opacity-100"
          />
        </div>
        <span className="grain-riso" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 42% at 50% 38%, color-mix(in srgb, var(--tk-field) 78%, transparent) 0%, color-mix(in srgb, var(--tk-field) 55%, transparent) 58%, color-mix(in srgb, var(--tk-field) 25%, transparent) 100%), linear-gradient(to bottom, color-mix(in srgb, var(--tk-field) 60%, transparent) 0%, color-mix(in srgb, var(--tk-field) 20%, transparent) 30%, color-mix(in srgb, var(--tk-field) 65%, transparent) 72%, var(--tk-field) 97%)",
          }}
        />
      </div>

      {/* Nav */}
      <nav className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-8">
        <a
          href={lang === "es" ? "/es" : "/"}
          className="flex items-center gap-2.5"
          aria-label="Dalfex"
        >
          <img src="/logo-mark.svg" alt="" className="h-8 w-8 dark:hidden md:h-9 md:w-9" />
          <img src="/logo-mark-light.svg" alt="" className="hidden h-8 w-8 dark:block md:h-9 md:w-9" />
          <span
            className="text-[28px] tracking-tight text-ink md:text-[32px]"
            style={serif}
          >
            Dalfex<sup className="text-[10px] text-accent">&reg;</sup>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink/60 transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle className="hidden md:flex" />
          <LangToggle lang={lang} dark className="hidden md:flex" />
          <Button variant="primary" href="#contact" className="hidden sm:inline-flex">
            {tr(ui.nav.cta, lang)}
          </Button>
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label={tr(ui.nav.openMenu, lang)}
            aria-expanded={menuOpen}
            className="-mr-1 p-1 text-ink transition-colors hover:text-ink md:hidden"
          >
            <Menu className="h-6 w-6" strokeWidth={1.5} />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-field md:hidden">
          <div className="flex items-center justify-between px-6 py-5">
            <a
              href={lang === "es" ? "/es" : "/"}
              className="flex items-center gap-2.5"
              aria-label="Dalfex"
              onClick={() => setMenuOpen(false)}
            >
              <img src="/logo-mark.svg" alt="" className="h-8 w-8 dark:hidden" />
              <img src="/logo-mark-light.svg" alt="" className="hidden h-8 w-8 dark:block" />
              <span className="text-[28px] tracking-tight text-ink" style={serif}>
                Dalfex<sup className="text-[10px] text-accent">&reg;</sup>
              </span>
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label={tr(ui.nav.closeMenu, lang)}
              className="-mr-1 p-1 text-ink/70 transition-colors hover:text-ink"
            >
              <X className="h-6 w-6" strokeWidth={1.5} />
            </button>
          </div>

          <nav className="flex flex-1 flex-col justify-center gap-2 px-8">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="animate-fade-in-up py-2 text-4xl tracking-tight text-ink/90 transition-colors hover:text-ink"
                style={{ ...serif, animationDelay: `${i * 0.06}s` }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="animate-fade-in-up mt-6 inline-flex w-fit items-center rounded-full bg-ink px-7 py-3 text-sm font-medium text-field"
              style={{ animationDelay: `${navLinks.length * 0.06}s` }}
            >
              {tr(ui.nav.cta, lang)}
            </a>
          </nav>

          <div className="flex items-center justify-between border-t border-ink/10 px-8 py-6">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink/30">
              Dalfex
            </span>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <LangToggle lang={lang} dark />
            </div>
          </div>
        </div>
      )}

      {/* Hero content */}
      <div className="relative z-10 mx-auto max-w-2xl px-6 pt-16 pb-10 text-center md:pt-24">
        <h1
          className="animate-fade-in-up text-[clamp(2rem,5.5vw,3rem)] font-medium leading-[1.15] tracking-tight text-ink"
          style={{ animationDelay: "0.08s" }}
        >
          {tr(ui.hero.headingPre, lang)}
          <span style={serif}>{tr(ui.hero.headingAccent1, lang)}</span>
          {tr(ui.hero.headingMid, lang)}
          <span style={serif}>{tr(ui.hero.headingAccent2, lang)}</span>
        </h1>

        <div
          className="animate-fade-in-up mt-8 space-y-4 text-[15px] leading-relaxed text-ink/65"
          style={{ animationDelay: "0.16s" }}
        >
          <p>{tr(ui.hero.p1, lang)}</p>
          <p>{tr(ui.hero.p2, lang)}</p>
          <p>
            {tr(ui.hero.p3Pre, lang)}
            <span style={serif}>{tr(ui.hero.p3Accent, lang)}</span>
            {tr(ui.hero.p3Post, lang)}
          </p>
        </div>

        <div
          className="animate-fade-in-up mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
          style={{ animationDelay: "0.24s" }}
        >
          <Button variant="primary" href="#contact">
            {tr(ui.hero.ctaPrimary, lang)}
          </Button>
          <Button variant="secondary" href="#projects">
            {tr(ui.hero.ctaSecondary, lang)}
          </Button>
        </div>
      </div>

      {/* Edition strip: the fold, signed like a print. */}
      <div
        aria-hidden="true"
        className="animate-fade-in-up relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 pb-8 pt-16 font-mono text-[10px] uppercase tracking-[0.24em] text-ink/35 md:px-8"
        style={{ animationDelay: "0.32s" }}
      >
        <span>Dalfex studio</span>
        <span className="hidden sm:inline">Bogotá · est. 2026</span>
        <span style={serif} className="text-[13px] normal-case tracking-normal">
          No.<span className="text-accent"> 001</span>
        </span>
      </div>
    </section>
  );
}
