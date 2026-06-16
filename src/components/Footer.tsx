export default function Footer() {
  return (
    <footer className="bg-white">
      {/* Giant watermark */}
      <div className="overflow-hidden border-t border-[#E0EBF0] pt-16 md:pt-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <span
            className="block select-none text-[18vw] leading-[0.85] tracking-tighter text-[#051A24]/[0.04] md:text-[14vw]"
            style={{ fontFamily: "'PPMondwest', serif" }}
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
            <a
              href="/"
              className="text-2xl tracking-tight text-[#051A24]"
              style={{ fontFamily: "'PPMondwest', serif" }}
            >
              Dalfex<sup className="text-[10px]">&reg;</sup>
            </a>
            <p className="mt-2 max-w-xs text-sm text-[#273C46]/50">
              Tech studio. Colombia.
              <br />
              AI, SaaS, Mobile, Automation.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-16">
            <div>
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-[#273C46]/30">
                Navigate
              </p>
              <div className="flex flex-col gap-2.5">
                {[
                  { label: "Home", href: "#" },
                  { label: "Services", href: "#services" },
                  { label: "Projects", href: "#projects" },
                  { label: "About", href: "#about" },
                ].map((link) => (
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
                Connect
              </p>
              <div className="flex flex-col gap-2.5">
                {[
                  { label: "Email", href: "mailto:hello@dalfex.com" },
                  { label: "WhatsApp", href: "https://wa.me/" },
                  { label: "GitHub", href: "#" },
                  { label: "LinkedIn", href: "#" },
                ].map((link) => (
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
            &copy; {new Date().getFullYear()} Dalfex. All rights reserved.
          </p>
          <p className="text-[11px] text-[#273C46]/30">
            Colombia &middot; Building for the world
          </p>
        </div>
      </div>
    </footer>
  );
}
