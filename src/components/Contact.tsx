import { useInViewAnimation } from "../hooks/useInViewAnimation";
import Button from "./Button";
import { tr, type Lang } from "../i18n/config";
import { ui } from "../i18n/ui";

const serif = { fontFamily: "'PPMondwest', serif" };

export default function Contact({ lang }: { lang: Lang }) {
  const { ref, isInView } = useInViewAnimation();

  return (
    <section id="contact" className="bg-[#051A24] py-24 md:py-32">
      <div ref={ref} className="mx-auto max-w-4xl px-6 text-center md:px-8">
        <div className={`${isInView ? "animate-fade-in-up" : "opacity-0"}`}>
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-[#E0EBF0]/40">
            {tr(ui.contact.eyebrow, lang)}
          </p>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.1] tracking-tight text-white">
            {tr(ui.contact.headingPre, lang)}
            <span className="text-[#E0EBF0]/60" style={serif}>
              {tr(ui.contact.headingAccent, lang)}
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-[15px] leading-relaxed text-[#E0EBF0]/50">
            {tr(ui.contact.description, lang)}
          </p>
        </div>

        <div
          className={`mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center ${
            isInView ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={{ animationDelay: "0.2s" }}
        >
          <Button variant="secondary" href="mailto:hello@dalfex.com">
            hello@dalfex.com
          </Button>
        </div>
      </div>
    </section>
  );
}
