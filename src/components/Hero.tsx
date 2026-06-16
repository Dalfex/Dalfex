import { ArrowUpRight } from "lucide-react";
import Button from "./Button";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Hero() {
  return (
    <section className="bg-white">
      {/* Nav */}
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-8">
        <a
          href="/"
          className="text-[28px] tracking-tight text-[#051A24] md:text-[32px]"
          style={{ fontFamily: "'PPMondwest', serif" }}
        >
          Dalfex<sup className="text-[10px]">&reg;</sup>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-[#273C46] transition-colors hover:text-[#051A24]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <Button variant="primary" href="#contact" className="hidden sm:inline-flex">
          Start a project
        </Button>
      </nav>

      {/* Hero content */}
      <div className="mx-auto max-w-2xl px-6 pt-12 pb-16 text-center md:pt-20">
        {/* Logo mark */}
        <div
          className="mx-auto mb-6 text-[36px] font-semibold tracking-tight text-[#051A24] md:text-[44px] lg:text-[48px]"
          style={{ fontFamily: "'PPMondwest', serif" }}
        >
          Dalfex
        </div>

        {/* Tagline */}
        <p className="mb-8 font-mono text-xs uppercase tracking-widest text-[#273C46]">
          The tech studio of Daniel Alferez
        </p>

        {/* Heading */}
        <h1 className="text-[clamp(1.75rem,5vw,2.5rem)] font-medium leading-[1.2] tracking-tight text-[#051A24]">
          Build the{" "}
          <span style={{ fontFamily: "'PPMondwest', serif" }}>next wave,</span>{" "}
          the{" "}
          <span style={{ fontFamily: "'PPMondwest', serif" }}>bold way.</span>
        </h1>

        {/* Description */}
        <div className="mt-8 space-y-4 text-[15px] leading-relaxed text-[#273C46]">
          <p>
            Dalfex is a Colombia-based tech studio building AI-powered SaaS,
            mobile apps, and intelligent automation from the ground up.
          </p>
          <p>
            We don't consult — we ship. Every product we build is designed to
            solve real problems across healthcare, commerce, social, and content
            creation.
          </p>
          <p>
            From{" "}
            <span style={{ fontFamily: "'PPMondwest', serif" }}>
              idea to launch
            </span>
            , we handle the full stack: design, engineering, AI, and deployment.
          </p>
        </div>

        {/* CTAs */}
        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Button variant="primary" href="#contact">
            Start a project
          </Button>
          <Button variant="secondary" href="#projects">
            View projects
          </Button>
        </div>
      </div>
    </section>
  );
}
