import Button from "./Button";
import LangToggle from "./LangToggle";
import { tr, type Lang } from "../i18n/config";
import { ui } from "../i18n/ui";

const serif = { fontFamily: "'PPMondwest', serif" };

export default function Hero({ lang }: { lang: Lang }) {
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
          <LangToggle lang={lang} />
          <Button
            variant="primary"
            href="#contact"
            className="hidden sm:inline-flex"
          >
            {tr(ui.nav.cta, lang)}
          </Button>
        </div>
      </nav>

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
