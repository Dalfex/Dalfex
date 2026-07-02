import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "./Button";
import LangToggle from "./LangToggle";
import { tr, type Lang } from "../i18n/config";
import { ui } from "../i18n/ui";

const serif = { fontFamily: "'PPMondwest', serif" };

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
    { label: tr(ui.nav.services, lang), href: "#services" },
    { label: tr(ui.nav.projects, lang), href: "#projects" },
    { label: tr(ui.nav.about, lang), href: "#about" },
    { label: tr(ui.nav.contact, lang), href: "#contact" },
  ];

  return (
    <section className="bg-white">
      {/* Nav */}
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-8">
        <a
          href={lang === "es" ? "/es" : "/"}
          className="flex items-center gap-2.5"
          aria-label="Dalfex"
        >
          <img
            src="/logo-mark.svg"
            alt=""
            className="h-8 w-8 md:h-9 md:w-9"
          />
          <span
            className="text-[28px] tracking-tight text-[#051A24] md:text-[32px]"
            style={serif}
          >
            Dalfex<sup className="text-[10px]">&reg;</sup>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[#273C46] transition-colors hover:text-[#051A24]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <LangToggle lang={lang} className="hidden md:flex" />
          <Button
            variant="primary"
            href="#contact"
            className="hidden sm:inline-flex"
          >
            {tr(ui.nav.cta, lang)}
          </Button>
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label={tr(ui.nav.openMenu, lang)}
            aria-expanded={menuOpen}
            className="-mr-1 p-1 text-[#051A24] transition-colors hover:text-[#273C46] md:hidden"
          >
            <Menu className="h-6 w-6" strokeWidth={1.5} />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-[#051A24] md:hidden">
          <div className="flex items-center justify-between px-6 py-5">
            <a
              href={lang === "es" ? "/es" : "/"}
              className="flex items-center gap-2.5"
              aria-label="Dalfex"
              onClick={() => setMenuOpen(false)}
            >
              <img src="/logo-mark-light.svg" alt="" className="h-8 w-8" />
              <span
                className="text-[28px] tracking-tight text-white"
                style={serif}
              >
                Dalfex<sup className="text-[10px]">&reg;</sup>
              </span>
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label={tr(ui.nav.closeMenu, lang)}
              className="-mr-1 p-1 text-[#E0EBF0]/70 transition-colors hover:text-white"
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
                className="animate-fade-in-up py-2 text-4xl tracking-tight text-[#E0EBF0]/90 transition-colors hover:text-white"
                style={{ ...serif, animationDelay: `${i * 0.06}s` }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="animate-fade-in-up mt-6 inline-flex w-fit items-center rounded-full bg-white px-7 py-3 text-sm font-medium text-[#051A24]"
              style={{ animationDelay: `${navLinks.length * 0.06}s` }}
            >
              {tr(ui.nav.cta, lang)}
            </a>
          </nav>

          <div className="flex items-center justify-between border-t border-white/10 px-8 py-6">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#E0EBF0]/30">
              Dalfex
            </span>
            <LangToggle lang={lang} dark />
          </div>
        </div>
      )}

      {/* Hero content */}
      <div className="mx-auto max-w-2xl px-6 pt-12 pb-16 text-center md:pt-20">
        {/* Logo mark */}
        <img
          src="/logo-mark.svg"
          alt=""
          className="mx-auto mb-5 h-14 w-14 md:h-16 md:w-16"
        />
        <div
          className="mx-auto mb-8 text-[36px] font-semibold tracking-tight text-[#051A24] md:text-[44px] lg:text-[48px]"
          style={serif}
        >
          Dalfex
        </div>

        {/* Heading */}
        <h1 className="text-[clamp(1.75rem,5vw,2.5rem)] font-medium leading-[1.2] tracking-tight text-[#051A24]">
          {tr(ui.hero.headingPre, lang)}
          <span style={serif}>{tr(ui.hero.headingAccent1, lang)}</span>
          {tr(ui.hero.headingMid, lang)}
          <span style={serif}>{tr(ui.hero.headingAccent2, lang)}</span>
        </h1>

        {/* Description */}
        <div className="mt-8 space-y-4 text-[15px] leading-relaxed text-[#273C46]">
          <p>{tr(ui.hero.p1, lang)}</p>
          <p>{tr(ui.hero.p2, lang)}</p>
          <p>
            {tr(ui.hero.p3Pre, lang)}
            <span style={serif}>{tr(ui.hero.p3Accent, lang)}</span>
            {tr(ui.hero.p3Post, lang)}
          </p>
        </div>

        {/* CTAs */}
        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Button variant="primary" href="#contact">
            {tr(ui.hero.ctaPrimary, lang)}
          </Button>
          <Button variant="secondary" href="#projects">
            {tr(ui.hero.ctaSecondary, lang)}
          </Button>
        </div>
      </div>
    </section>
  );
}
