import { useInViewAnimation } from "../hooks/useInViewAnimation";
import { enabledProjects, projects } from "../data/projects";
import { tr, type Lang } from "../i18n/config";
import { ui } from "../i18n/ui";

const serif = { fontFamily: "'PPMondwest', serif" };

// Count shown products; the "+" hints at projects not (yet) on the site.
const productCount = `${enabledProjects.length}${
  projects.length > enabledProjects.length ? "+" : ""
}`;

export default function About({ lang }: { lang: Lang }) {
  const { ref, isInView } = useInViewAnimation();

  const stats = [
    { value: productCount, label: tr(ui.about.statProductsLabel, lang) },
    { value: "3", label: tr(ui.about.statIndustriesLabel, lang) },
    { value: "24/7", label: tr(ui.about.statUptimeLabel, lang) },
    { value: "2026", label: tr(ui.about.statFoundedLabel, lang) },
  ];

  const tech = [
    "React", "Next.js", "NestJS", "React Native", "Expo",
    "Supabase", "PostgreSQL", "TypeScript", "TailwindCSS",
    "Drizzle", "Zustand", "Framer Motion",
  ];

  return (
    <section id="about" className="bg-white py-24 md:py-32">
      <div ref={ref} className="mx-auto max-w-6xl px-6 md:px-8">
        {/* Big quote / manifesto */}
        <div
          className={`mx-auto max-w-4xl text-center ${
            isInView ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <p className="mb-8 font-mono text-xs uppercase tracking-widest text-[#273C46]">
            {tr(ui.about.eyebrow, lang)}
          </p>
          <blockquote className="text-[clamp(1.5rem,4vw,2.8rem)] font-medium leading-[1.25] tracking-tight text-[#051A24]">
            {tr(ui.about.quotePre, lang)}
            <span style={serif}>Dalfex</span>
            {tr(ui.about.quotePost, lang)}
          </blockquote>
          <p className="mt-8 text-sm italic text-[#273C46]">
            {tr(ui.about.attribution, lang)}
          </p>
        </div>

        {/* Stats row */}
        <div
          className={`mt-24 grid grid-cols-2 gap-8 md:grid-cols-4 ${
            isInView ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={{ animationDelay: "0.3s" }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <span
                className="block text-5xl tracking-tight text-[#051A24] md:text-6xl"
                style={serif}
              >
                {stat.value}
              </span>
              <span className="mt-2 block text-xs font-medium uppercase tracking-widest text-[#273C46]/50">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Tech marquee */}
        <div
          className={`mt-24 overflow-hidden border-y border-[#E0EBF0] py-5 ${
            isInView ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={{ animationDelay: "0.5s" }}
        >
          <div className="marquee-track flex w-max gap-10">
            {[...tech, ...tech].map((t, i) => (
              <span
                key={`${t}-${i}`}
                className="whitespace-nowrap text-xl tracking-tight text-[#273C46]/20 md:text-3xl"
                style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic" }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
