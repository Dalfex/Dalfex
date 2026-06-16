import { useInViewAnimation } from "../hooks/useInViewAnimation";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "DaLynk",
    subtitle: "Business Management Platform",
    description:
      "Modular multi-tenant SaaS for Colombian businesses. E-commerce, clinic booking, WhatsApp integration, payments — one dashboard.",
    tags: ["Next.js", "NestJS", "PostgreSQL"],
    status: "In Development",
    color: "#051A24",
    image:
      "https://motionsites.ai/assets/hero-datacore-booking-preview-B3t9SRK6.gif",
  },
  {
    name: "DaClipLab",
    subtitle: "AI-Powered Shorts Factory",
    description:
      "Turn any idea into polished short-form videos. Automated pipeline from script to render with AI generation, channel management, and autopilot mode.",
    tags: ["FastAPI", "Next.js", "AI/ML", "Video Processing"],
    status: "In Development",
    color: "#0D212C",
    image:
      "https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif",
  },
  {
    name: "Dancet",
    subtitle: "Social Discovery for Dancers",
    description:
      "Find your perfect dance partner at bars and clubs. Real-time matching by skill, style, and venue location.",
    tags: ["React Native", "Supabase", "PostGIS"],
    status: "In Development",
    color: "#273C46",
    image:
      "https://motionsites.ai/assets/hero-clubx-preview-CpKCe8yV.gif",
  },
  {
    name: "DazzHabit",
    subtitle: "Habits & Personal Finance",
    description:
      "Track daily habits with streaks and build financial awareness. Offline-first mobile app designed for self-improvement.",
    tags: ["React Native", "Expo", "SQLite"],
    status: "MVP Ready",
    color: "#051A24",
    image:
      "https://motionsites.ai/assets/hero-taskora-preview-BlRBv8IU.gif",
  },
  {
    name: "DaDaBatt",
    subtitle: "Card Battle Game",
    description:
      "Collect cards and battle across multiple game modes. Daily rewards, leveling system, and haptic-driven gameplay in a mobile-first experience.",
    tags: ["React Native", "Expo", "Zustand"],
    status: "In Development",
    color: "#0D212C",
    image:
      "https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif",
  },
];

export default function Projects() {
  const { ref, isInView } = useInViewAnimation();

  return (
    <section id="projects" className="bg-[#F6FCFF] py-24 md:py-32">
      <div ref={ref} className="mx-auto max-w-[1200px] px-6 md:px-8">
        {/* Header */}
        <div
          className={`mb-16 ${isInView ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-[#273C46]">
            Selected work
          </p>
          <h2 className="max-w-xl text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.1] tracking-tight text-[#051A24]">
            Projects we're{" "}
            <span style={{ fontFamily: "'PPMondwest', serif" }}>building</span>
          </h2>
        </div>

        {/* Project cards */}
        <div className="flex flex-col gap-8">
          {projects.map((project, i) => (
            <div
              key={project.name}
              className={`group overflow-hidden rounded-3xl bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_32px_rgba(0,0,0,0.06)] transition-shadow duration-500 hover:shadow-[0_2px_8px_rgba(0,0,0,0.06),0_16px_48px_rgba(0,0,0,0.1)] ${
                isInView ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.2 + i * 0.12}s` }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Image */}
                <div className="relative h-[280px] overflow-hidden md:h-[400px]">
                  <img
                    src={project.image}
                    alt={project.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      background: `linear-gradient(135deg, ${project.color} 0%, transparent 60%)`,
                    }}
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between p-8 md:p-10 lg:p-12">
                  <div>
                    <div className="mb-6 flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-[#051A24]" />
                      <span className="font-mono text-[11px] uppercase tracking-widest text-[#273C46]">
                        {project.status}
                      </span>
                    </div>

                    <h3
                      className="text-3xl font-medium tracking-tight text-[#051A24] md:text-4xl"
                      style={{ fontFamily: "'PPMondwest', serif" }}
                    >
                      {project.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-[#273C46]/60">
                      {project.subtitle}
                    </p>
                    <p className="mt-4 text-[15px] leading-relaxed text-[#273C46]">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-8">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-[#F6FCFF] px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-[#273C46]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 flex items-center gap-2 text-sm font-medium text-[#051A24] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      View project
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
