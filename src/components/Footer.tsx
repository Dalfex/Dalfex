import LangToggle from "./LangToggle";
import { tr, type Lang } from "../i18n/config";
import { ui } from "../i18n/ui";

const serif = { fontFamily: "'PPMondwest', serif" };

export default function Footer({ lang }: { lang: Lang }) {
  const home = lang === "es" ? "/es" : "/";

  const navItems = [
    { label: tr(ui.footer.home, lang), href: home },
    { label: tr(ui.nav.services, lang), href: "#services" },
    { label: tr(ui.nav.projects, lang), href: "#projects" },
    { label: tr(ui.nav.about, lang), href: "#about" },
  ];

  const connectItems = [
    { label: "Email", href: "mailto:hello@dalfex.com" },
    { label: "WhatsApp", href: "https://wa.me/" },
    { label: "GitHub", href: "https://github.com/Dalfex" },
    { label: "LinkedIn", href: "#" },
  ];

  return (
    <footer className="bg-white">
      {/* Giant watermark */}
      <div className="overflow-hidden border-t border-[#E0EBF0] pt-16 md:pt-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <span
            className="block select-none text-[18vw] leading-[0.85] tracking-tighter text-[#051A24]/[0.04] md:text-[14vw]"
            style={serif}
          >
            Dalfex
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-6xl px-6 pb-8 pt-12 md:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          {/* Brand */}
          <div>
            <a href={home} className="flex items-center gap-2.5" aria-label="Dalfex">
              <img src="/logo-mark.svg" alt="" className="h-7 w-7" />
              <span
                className="text-2xl tracking-tight text-[#051A24]"
                style={serif}
              >
                Dalfex<sup className="text-[10px]">&reg;</sup>
              </span>
            </a>
            <p className="mt-2 max-w-xs text-sm text-[#273C46]/50">
              {tr(ui.footer.tagline1, lang)}
              <br />
              {tr(ui.footer.tagline2, lang)}
            </p>
            <LangToggle lang={lang} className="mt-4" />
          </div>

          {/* Links */}
          <div className="flex gap-16">
            <div>
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-[#273C46]/30">
                {tr(ui.footer.navigate, lang)}
              </p>
              <div className="flex flex-col gap-2.5">
                {navItems.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm text-[#273C46]/50 transition-colors hover:text-[#051A24]"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-[#273C46]/30">
                {tr(ui.footer.connect, lang)}
              </p>
              <div className="flex flex-col gap-2.5">
                {connectItems.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm text-[#273C46]/50 transition-colors hover:text-[#051A24]"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center gap-3 border-t border-[#E0EBF0] pt-6 md:flex-row md:justify-between">
          <p className="text-[11px] text-[#273C46]/30">
            &copy; {new Date().getFullYear()} Dalfex. {tr(ui.footer.rights, lang)}
          </p>
          <p className="text-[11px] text-[#273C46]/30">
            {tr(ui.footer.closing, lang)}
          </p>
        </div>
      </div>
    </footer>
  );
}
