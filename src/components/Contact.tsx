import { useInViewAnimation } from "../hooks/useInViewAnimation";
import Button from "./Button";
import { tr, type Lang } from "../i18n/config";
import { ui } from "../i18n/ui";

const serif = { fontFamily: "'PPMondwest', serif" };

export default function Contact({ lang }: { lang: Lang }) {
  const { ref, isInView } = useInViewAnimation();

  return (
    <section id="contact" className="grain relative bg-field px-6 py-24 md:px-8 md:py-32">
      <div
        ref={ref}
        className="dark relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-ink/15 px-6 py-20 text-center md:px-12 md:py-24"
      >
        {/* The quietest print of the run: a dim horizon the copy can own. */}
        <div aria-hidden="true" className="absolute inset-0">
          <img src="/prints/contact.png" alt="" loading="lazy" className="h-full w-full object-cover" />
          <span className="grain-riso" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 75% 60% at 50% 45%, rgba(11,11,13,0.6) 0%, rgba(11,11,13,0.72) 65%, rgba(11,11,13,0.82) 100%)",
            }}
          />
        </div>
        <div className="relative">
        <div className={`${isInView ? "animate-fade-in-up" : "opacity-0"}`}>
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-ink/45">
            {tr(ui.contact.eyebrow, lang)}
          </p>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.1] tracking-tight text-ink">
            {tr(ui.contact.headingPre, lang)}
            <span style={serif}>
              {tr(ui.contact.headingAccent, lang)}
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-[15px] leading-relaxed text-ink/60">
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
      </div>
    </section>
  );
}
