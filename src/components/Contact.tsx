import { useInViewAnimation } from "../hooks/useInViewAnimation";
import Button from "./Button";

export default function Contact() {
  const { ref, isInView } = useInViewAnimation();

  return (
    <section id="contact" className="bg-[#051A24] py-24 md:py-32">
      <div ref={ref} className="mx-auto max-w-4xl px-6 text-center md:px-8">
        <div
          className={`${isInView ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-[#E0EBF0]/40">
            Start a project
          </p>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.1] tracking-tight text-white">
            Have an idea?{" "}
            <span
              className="text-[#E0EBF0]/60"
              style={{ fontFamily: "'PPMondwest', serif" }}
            >
              Let's make it real.
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-[15px] leading-relaxed text-[#E0EBF0]/50">
            Whether it's a SaaS platform, a mobile app, or an AI-powered
            workflow — we'd love to hear what you're building.
          </p>
        </div>

        <div
          className={`mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center ${
            isInView ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={{ animationDelay: "0.2s" }}
        >
          <Button
            variant="secondary"
            href="mailto:hello@dalfex.com"
          >
            hello@dalfex.com
          </Button>
          <Button
            variant="tertiary"
            href="https://wa.me/"
          >
            WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}
