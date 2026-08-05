import { useInViewAnimation } from "../hooks/useInViewAnimation";
import { enabledProjects as projects } from "../data/projects";
import { tr, type Lang } from "../i18n/config";
import { ui } from "../i18n/ui";

const serif = { fontFamily: "'PPMondwest', serif" };

/**
 * Selected work, hung like an exhibition.
 *
 * Each product is a framed monochrome print with its argument beside it, and
 * an edition caption in the frame's margin — name on the left, a numbered
 * mark on the right. The number is the card's index in the run, which is
 * honest: this is a studio showing its editions in order.
 */
export default function Projects({ lang }: { lang: Lang }) {
  const { ref, isInView } = useInViewAnimation();

  return (
    <section id="projects" className="grain relative bg-field py-24 md:py-32">
      <div ref={ref} className="mx-auto max-w-[1200px] px-6 md:px-8">
        {/* Header */}
        <div className={`mb-16 ${isInView ? "animate-fade-in-up" : "opacity-0"}`}>
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-ink/45">
            {tr(ui.projects.eyebrow, lang)}
          </p>
          <h2 className="max-w-xl text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.1] tracking-tight text-ink">
            {tr(ui.projects.headingPre, lang)}
            <span style={serif}>{tr(ui.projects.headingAccent, lang)}</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-10">
          {projects.map((project, i) => (
            <div
              key={project.name}
              className={`group ${isInView ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${0.2 + i * 0.12}s` }}
            >
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10">
                {/* The print, framed. Alternates sides like hung work. */}
                <div className={i % 2 === 1 ? "md:order-2" : ""}>
                  <div className="relative overflow-hidden rounded-2xl border border-ink/15">
                    <div className="relative h-[280px] md:h-[400px]">
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.name}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        />
                      ) : (
                        <div className="flex h-full w-full flex-col items-center justify-center gap-5 bg-panel">
                          <project.icon
                            className="h-12 w-12 text-ink/25"
                            strokeWidth={1.25}
                          />
                          <span
                            className="text-4xl tracking-tight text-ink/80 md:text-5xl"
                            style={serif}
                          >
                            {project.name}
                          </span>
                        </div>
                      )}
                      <span aria-hidden="true" className="grain-riso" />
                    </div>
                  </div>
                  {/* Edition caption in the frame's margin */}
                  <div
                    aria-hidden="true"
                    className="mt-3 flex items-center justify-between px-1 font-mono text-[10px] uppercase tracking-[0.22em] text-ink/35"
                  >
                    <span>{project.name}</span>
                    <span style={serif} className="text-[13px] normal-case tracking-normal">
                      No. {String(i + 1).padStart(3, "0")}
                    </span>
                  </div>
                </div>

                {/* The argument */}
                <div
                  className={`flex flex-col justify-center ${
                    i % 2 === 1 ? "md:order-1" : ""
                  }`}
                >
                  <div className="mb-5 flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    <span className="font-mono text-[11px] uppercase tracking-widest text-ink/45">
                      {tr(project.serviceTitle, lang)} · {tr(project.status, lang)}
                    </span>
                  </div>

                  <h3
                    className="text-3xl font-medium tracking-tight text-ink md:text-4xl"
                    style={serif}
                  >
                    {project.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-ink/40">
                    {tr(project.subtitle, lang)}
                  </p>
                  <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink/65">
                    {tr(project.description, lang)}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-ink/15 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-ink/50"
                      >
                        {tag}
                      </span>
                    ))}
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
