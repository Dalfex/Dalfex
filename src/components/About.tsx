import { useInViewAnimation } from "../hooks/useInViewAnimation";

export default function About() {
  const { ref, isInView } = useInViewAnimation();

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
            About Dalfex
          </p>
          <blockquote className="text-[clamp(1.5rem,4vw,2.8rem)] font-medium leading-[1.25] tracking-tight text-[#051A24]">
            "We started{" "}
            <span style={{ fontFamily: "'PPMondwest', serif" }}>Dalfex</span>{" "}
            because we believe the best digital products come from studios that
            build their own — not agencies that only build for others."
          </blockquote>
          <p className="mt-8 text-sm italic text-[#273C46]">
            — Daniel Alferez, Founder
          </p>
        </div>

        {/* Stats row */}
        <div
          className={`mt-24 grid grid-cols-2 gap-8 md:grid-cols-4 ${
            isInView ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={{ animationDelay: "0.3s" }}
        >
          {[
            { value: "4+", label: "Products in development" },
            { value: "3", label: "Industries served" },
            { value: "24/7", label: "AI automation uptime" },
            { value: "2026", label: "Founded in Colombia" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <span
                className="block text-5xl tracking-tight text-[#051A24] md:text-6xl"
                style={{ fontFamily: "'PPMondwest', serif" }}
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
            {[
              "React", "Next.js", "NestJS", "React Native", "Expo",
              "Supabase", "PostgreSQL", "TypeScript", "TailwindCSS",
              "Drizzle", "Zustand", "Framer Motion",
              "React", "Next.js", "NestJS", "React Native", "Expo",
              "Supabase", "PostgreSQL", "TypeScript", "TailwindCSS",
              "Drizzle", "Zustand", "Framer Motion",
            ].map((tech, i) => (
              <span
                key={`${tech}-${i}`}
                className="whitespace-nowrap text-xl tracking-tight text-[#273C46]/20 md:text-3xl"
                style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic" }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
