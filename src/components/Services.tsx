import { useInViewAnimation } from "../hooks/useInViewAnimation";
import { ArrowRight } from "lucide-react";
import { enabledProjects } from "../data/projects";
import { tr, numberWord, type Lang } from "../i18n/config";
import { ui } from "../i18n/ui";

const serif = { fontFamily: "'PPMondwest', serif" };

function HighlightText({ text, accent }: { text: string; accent: string }) {
  const parts = text.split(accent);
  if (parts.length === 1) return <>{text}</>;
  return (
    <>
      {parts[0]}
      <span style={serif}>{accent}</span>
      {parts[1]}
    </>
  );
}

export default function Services({ lang }: { lang: Lang }) {
  const { ref, isInView } = useInViewAnimation();

  return (
    <section id="services" className="bg-white py-24 md:py-32">
      <div ref={ref} className="mx-auto max-w-6xl px-6 md:px-8">
        {/* Header */}
        <div
          className={`mb-20 ${isInView ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-[#273C46]">
            {tr(ui.services.eyebrow, lang)}
          </p>
          <h2 className="max-w-2xl text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.1] tracking-tight text-[#051A24]">
            {numberWord(enabledProjects.length, lang)}{" "}
            {tr(ui.services.headingProjectsWord, lang)}{" "}
            <span style={serif}>{tr(ui.services.headingStudio, lang)}</span>{" "}
            {tr(ui.services.headingTail, lang)}
          </h2>
        </div>

        {/* Service rows */}
        <div className="divide-y divide-[#E0EBF0]">
          {enabledProjects.map((service, i) => (
            <div
              key={service.name}
              className={`group grid grid-cols-1 gap-6 py-10 md:grid-cols-12 md:items-center md:gap-8 md:py-14 ${
                isInView ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.15 + i * 0.1}s` }}
            >
              {/* Icon */}
              <div className="flex items-center gap-4 md:col-span-1">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6FCFF]">
                  <service.icon
                    className="h-5 w-5 text-[#273C46]"
                    strokeWidth={1.5}
                  />
                </div>
              </div>

              {/* Title */}
              <div className="md:col-span-3">
                <h3 className="text-xl font-medium tracking-tight text-[#051A24] md:text-2xl">
                  {tr(service.serviceTitle, lang)}
                </h3>
                <span className="mt-1 inline-block rounded-full bg-[#F6FCFF] px-3 py-0.5 text-[11px] font-medium uppercase tracking-wider text-[#273C46]">
                  {service.name}
                </span>
              </div>

              {/* Description */}
              <div className="md:col-span-6">
                <p className="text-[15px] leading-relaxed text-[#273C46]">
                  <HighlightText
                    text={tr(service.serviceDescription, lang)}
                    accent={tr(service.accent, lang)}
                  />
                </p>
              </div>

              {/* Arrow */}
              <div className="hidden md:col-span-2 md:flex md:justify-end">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E0EBF0] transition-all duration-300 group-hover:border-[#051A24] group-hover:bg-[#051A24]">
                  <ArrowRight className="h-4 w-4 text-[#273C46] transition-colors group-hover:text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
