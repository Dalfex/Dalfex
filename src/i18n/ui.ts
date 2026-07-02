import type { Localized } from "./config";

/**
 * All site-chrome copy (everything except per-project text, which lives in
 * `src/data/projects.ts`). Each entry is a Localized string: { en, es }.
 *
 * Headings that mix the display serif font are split into parts so the
 * accent fragment can be wrapped in the serif span by the component.
 */
export const ui = {
  nav: {
    services: { en: "Services", es: "Servicios" } satisfies Localized,
    projects: { en: "Projects", es: "Proyectos" } satisfies Localized,
    about: { en: "About", es: "Nosotros" } satisfies Localized,
    contact: { en: "Contact", es: "Contacto" } satisfies Localized,
    cta: { en: "Start a project", es: "Inicia un proyecto" } satisfies Localized,
    openMenu: { en: "Open menu", es: "Abrir menú" } satisfies Localized,
    closeMenu: { en: "Close menu", es: "Cerrar menú" } satisfies Localized,
  },
  hero: {
    headingPre: { en: "Build the ", es: "Construye la " } satisfies Localized,
    headingAccent1: { en: "next wave,", es: "próxima ola," } satisfies Localized,
    headingMid: { en: " the ", es: " " } satisfies Localized,
    headingAccent2: { en: "bold way.", es: "con audacia." } satisfies Localized,
    p1: {
      en: "Dalfex is a Colombia-based tech studio building AI-powered SaaS, mobile apps, and intelligent automation from the ground up.",
      es: "Dalfex es un estudio tecnológico colombiano que construye SaaS con IA, apps móviles y automatización inteligente desde cero.",
    } satisfies Localized,
    p2: {
      en: "We don't consult — we ship. Every product we build is designed to solve real problems across healthcare, commerce, social, and content creation.",
      es: "No asesoramos — lanzamos. Cada producto que construimos resuelve problemas reales en salud, comercio, social y creación de contenido.",
    } satisfies Localized,
    p3Pre: { en: "From ", es: "De " } satisfies Localized,
    p3Accent: { en: "idea to launch", es: "la idea al lanzamiento" } satisfies Localized,
    p3Post: {
      en: ", we handle the full stack: design, engineering, AI, and deployment.",
      es: ", nos encargamos de todo: diseño, ingeniería, IA y despliegue.",
    } satisfies Localized,
    ctaPrimary: { en: "Start a project", es: "Inicia un proyecto" } satisfies Localized,
    ctaSecondary: { en: "View projects", es: "Ver proyectos" } satisfies Localized,
  },
  services: {
    eyebrow: { en: "What we build", es: "Qué construimos" } satisfies Localized,
    // Heading: "{N} projects. <serif>One studio.</serif> We design, build, and ship."
    headingProjectsWord: { en: "projects.", es: "proyectos." } satisfies Localized,
    headingStudio: { en: "One studio.", es: "Un estudio." } satisfies Localized,
    headingTail: {
      en: "We design, build, and ship.",
      es: "Diseñamos, construimos y lanzamos.",
    } satisfies Localized,
  },
  projects: {
    eyebrow: { en: "Selected work", es: "Trabajo seleccionado" } satisfies Localized,
    headingPre: { en: "Projects we're ", es: "Proyectos que estamos " } satisfies Localized,
    headingAccent: { en: "building", es: "construyendo" } satisfies Localized,
  },
  about: {
    eyebrow: { en: "About Dalfex", es: "Sobre Dalfex" } satisfies Localized,
    quotePre: { en: '"We started ', es: '"Empezamos ' } satisfies Localized,
    quotePost: {
      en: " because we believe the best digital products come from studios that build their own — not agencies that only build for others.\"",
      es: " porque creemos que los mejores productos digitales nacen de estudios que construyen los suyos — no de agencias que solo construyen para otros.\"",
    } satisfies Localized,
    attribution: {
      en: "— Daniel Alférez, Founder",
      es: "— Daniel Alférez, Fundador",
    } satisfies Localized,
    statProductsLabel: {
      en: "Products in development",
      es: "Productos en desarrollo",
    } satisfies Localized,
    statIndustriesLabel: { en: "Industries served", es: "Industrias atendidas" } satisfies Localized,
    statUptimeLabel: {
      en: "AI automation uptime",
      es: "Disponibilidad de automatización IA",
    } satisfies Localized,
    statFoundedLabel: { en: "Founded in Colombia", es: "Fundado en Colombia" } satisfies Localized,
  },
  contact: {
    eyebrow: { en: "Start a project", es: "Inicia un proyecto" } satisfies Localized,
    headingPre: { en: "Have an idea? ", es: "¿Tienes una idea? " } satisfies Localized,
    headingAccent: { en: "Let's make it real.", es: "Hagámosla realidad." } satisfies Localized,
    description: {
      en: "Whether it's a SaaS platform, a mobile app, or an AI-powered workflow — we'd love to hear what you're building.",
      es: "Ya sea una plataforma SaaS, una app móvil o un flujo con IA — nos encantaría saber qué estás construyendo.",
    } satisfies Localized,
  },
  footer: {
    tagline1: { en: "Tech studio. Colombia.", es: "Estudio tecnológico. Colombia." } satisfies Localized,
    tagline2: {
      en: "AI, SaaS, Mobile, Automation.",
      es: "IA, SaaS, Móvil, Automatización.",
    } satisfies Localized,
    navigate: { en: "Navigate", es: "Navegar" } satisfies Localized,
    connect: { en: "Connect", es: "Conectar" } satisfies Localized,
    home: { en: "Home", es: "Inicio" } satisfies Localized,
    rights: { en: "All rights reserved.", es: "Todos los derechos reservados." } satisfies Localized,
    closing: {
      en: "Colombia · Building for the world",
      es: "Colombia · Construyendo para el mundo",
    } satisfies Localized,
  },
} as const;
