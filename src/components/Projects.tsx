import { useInViewAnimation } from "../hooks/useInViewAnimation";
import { enabledProjects as projects } from "../data/projects";
import { tr, type Lang } from "../i18n/config";
import { ui } from "../i18n/ui";

const serif = { fontFamily: "'PPMondwest', serif" };

export default function Projects({ lang }: { lang: Lang }) {
  const { ref, isInView } = useInViewAnimation();

  return (
    <section id="projects" className="bg-[#F6FCFF] py-24 md:py-32">
      <div ref={ref} className="mx-auto max-w-[1200px] px-6 md:px-8">
        {/* Header */}
        <div
          className={`mb-16 ${isInView ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-[#273C46]">
            {tr(ui.projects.eyebrow, lang)}
          </p>
          <h2 className="max-w-xl text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.1] tracking-tight text-[#051A24]">
            {tr(ui.projects.headingPre, lang)}
            <span style={serif}>{tr(ui.projects.headingAccent, lang)}</span>
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
                {/* Visual: real screenshot when available, else a branded placeholder */}
                <div className="relative h-[280px] overflow-hidden md:h-[400px]">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div
                      className="flex h-full w-full flex-col items-center justify-center gap-5"
                      style={{
                        background: `linear-gradient(135deg, ${project.color} 0%, #0D212C 100%)`,
                      }}
                    >
                      <project.icon
                        className="h-12 w-12 text-white/30 transition-transform duration-700 group-hover:scale-110"
                        strokeWidth={1.25}
                      />
                      <span
                        className="text-4xl tracking-tight text-white/90 md:text-5xl"
                        style={serif}
                      >
                        {project.name}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between p-8 md:p-10 lg:p-12">
                  <div>
                    <div className="mb-6 flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-[#051A24]" />
                      <span className="font-mono text-[11px] uppercase tracking-widest text-[#273C46]">
                        {tr(project.status, lang)}
                      </span>
                    </div>

                    <h3
                      className="text-3xl font-medium tracking-tight text-[#051A24] md:text-4xl"
                      style={serif}
                    >
                      {project.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-[#273C46]/60">
                      {tr(project.subtitle, lang)}
                    </p>
                    <p className="mt-4 text-[15px] leading-relaxed text-[#273C46]">
                      {tr(project.description, lang)}
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
