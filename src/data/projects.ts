import {
  Film,
  Building2,
  Smartphone,
  Gamepad2,
  Users,
  type LucideIcon,
} from "lucide-react";
import type { Lang, Localized } from "../i18n/config";

/**
 * Single source of truth for the projects shown on the landing page.
 *
 * To hide a project from the site, flip its `enabled` flag to `false`.
 * Disabled projects disappear from every section (the "What we build" list,
 * the "Selected work" cards, and the project count in the heading) and never
 * ship in the build. Re-enable by setting `enabled: true`.
 *
 * Text fields are Localized ({ en, es }). When real product screenshots
 * exist, set `image` to the URL — otherwise the cards render a branded
 * gradient placeholder built from `color` + `icon` + `name`.
 */
export interface Project {
  /** Master visibility switch. `false` hides the project everywhere. */
  enabled: boolean;
  /** Product name (e.g. "DaLynk"). Also used as the tag chip. Not translated. */
  name: string;
  /** One-line product descriptor used on the "Selected work" cards. */
  subtitle: Localized;
  /** lucide icon for the "What we build" service row and card placeholder. */
  icon: LucideIcon;
  /** Short service-style title for the "What we build" section. */
  serviceTitle: Localized;
  /** Phrase inside `serviceDescription` rendered in the display serif font. */
  accent: Localized;
  /** Service-oriented blurb for the "What we build" rows. */
  serviceDescription: Localized;
  /** Product-oriented description for the "Selected work" cards. */
  description: Localized;
  /** Tech stack chips. Not translated. */
  tags: string[];
  /** Lifecycle label. */
  status: Localized;
  /** Accent color used for the card placeholder / image overlay. */
  color: string;
  /** Optional real screenshot URL. When omitted, a branded placeholder shows. */
  image?: string;
}

export const projects: Project[] = [
  {
    enabled: true,
    name: "DaLynk",
    subtitle: {
      en: "Business Management Platform",
      es: "Plataforma de gestión de negocios",
    },
    icon: Building2,
    serviceTitle: { en: "Business SaaS", es: "SaaS para negocios" },
    accent: { en: "builders", es: "que escalan" },
    serviceDescription: {
      en: "E-commerce, clinic scheduling, inventory, payments — modular tools for builders scaling fast in Colombia and beyond.",
      es: "E-commerce, agenda de citas, inventario, pagos — herramientas modulares para negocios que escalan rápido en Colombia y más allá.",
    },
    description: {
      en: "Modular multi-tenant SaaS for Colombian businesses. E-commerce, clinic booking, WhatsApp integration, payments — one dashboard.",
      es: "SaaS multi-tenant modular para negocios colombianos. E-commerce, reservas de citas, WhatsApp, pagos — un solo panel.",
    },
    tags: ["Next.js", "NestJS", "PostgreSQL"],
    status: { en: "In Development", es: "En desarrollo" },
    color: "#051A24",
  },
  {
    enabled: true,
    name: "DaClipLab",
    subtitle: { en: "AI-Powered Shorts Factory", es: "Fábrica de shorts con IA" },
    icon: Film,
    serviceTitle: { en: "AI Video Creation", es: "Creación de video con IA" },
    accent: { en: "next wave", es: "nueva ola" },
    serviceDescription: {
      en: "From concept to publish-ready video in minutes. Our AI platform is the next wave in content production — no editing suite, no render farm, no friction.",
      es: "Del concepto al video listo para publicar en minutos. Nuestra plataforma de IA es la nueva ola en producción de contenido — sin editor, sin render farm, sin fricción.",
    },
    description: {
      en: "Turn any idea into polished short-form videos. Automated pipeline from script to render with AI generation, channel management, and autopilot mode.",
      es: "Convierte cualquier idea en videos cortos pulidos. Pipeline automatizado del guion al render con generación por IA, gestión de canales y modo autopiloto.",
    },
    tags: ["FastAPI", "Next.js", "AI/ML", "Video Processing"],
    status: { en: "In Development", es: "En desarrollo" },
    color: "#16324A",
  },
  {
    enabled: true,
    name: "DazzHabit",
    subtitle: { en: "Habits & Personal Finance", es: "Hábitos y finanzas personales" },
    icon: Smartphone,
    serviceTitle: { en: "Habit Tracking & Finance", es: "Hábitos y finanzas" },
    accent: { en: "self-improvement", es: "crecimiento personal" },
    serviceDescription: {
      en: "Offline-first mobile app for self-improvement. Daily habit streaks, gym, meditation, and personal finance — all in your pocket.",
      es: "App móvil offline-first para tu crecimiento personal. Rachas de hábitos, gym, meditación y finanzas personales — todo en tu bolsillo.",
    },
    description: {
      en: "Track daily habits with streaks and build financial awareness. Offline-first mobile app designed for self-improvement.",
      es: "Registra hábitos diarios con rachas y mejora tu conciencia financiera. App móvil offline-first diseñada para el crecimiento personal.",
    },
    tags: ["React Native", "Expo", "SQLite"],
    status: { en: "MVP Ready", es: "MVP listo" },
    color: "#33261A",
  },
  {
    // Paused — not sure we'll continue this one yet. Hidden from the landing.
    enabled: false,
    name: "Dancet",
    subtitle: { en: "Social Discovery for Dancers", es: "Descubrimiento social para bailarines" },
    icon: Users,
    serviceTitle: { en: "Social Discovery", es: "Descubrimiento social" },
    accent: { en: "perfect partner", es: "pareja perfecta" },
    serviceDescription: {
      en: "Find your perfect partner for dancing at bars and clubs. Real-time matching by skill level, dance style, and venue location.",
      es: "Encuentra tu pareja perfecta para bailar en bares y clubes. Match en tiempo real por nivel, estilo de baile y ubicación.",
    },
    description: {
      en: "Find your perfect dance partner at bars and clubs. Real-time matching by skill, style, and venue location.",
      es: "Encuentra tu pareja de baile perfecta en bares y clubes. Match en tiempo real por habilidad, estilo y lugar.",
    },
    tags: ["React Native", "Supabase", "PostGIS"],
    status: { en: "In Development", es: "En desarrollo" },
    color: "#273C46",
  },
  {
    // Paused — not sure we'll continue this one yet. Hidden from the landing.
    enabled: false,
    name: "DaDaBatt",
    subtitle: { en: "Card Battle Game", es: "Juego de batalla de cartas" },
    icon: Gamepad2,
    serviceTitle: { en: "Mobile Gaming", es: "Juegos móviles" },
    accent: { en: "collect and battle", es: "colecciona y batalla" },
    serviceDescription: {
      en: "Collect and battle with cards across multiple game modes. Daily rewards, leveling, and haptic-driven gameplay built for mobile.",
      es: "Colecciona y batalla con cartas en múltiples modos de juego. Recompensas diarias, niveles y jugabilidad con vibración hecha para móvil.",
    },
    description: {
      en: "Collect cards and battle across multiple game modes. Daily rewards, leveling system, and haptic-driven gameplay in a mobile-first experience.",
      es: "Colecciona cartas y batalla en múltiples modos. Recompensas diarias, sistema de niveles y jugabilidad con vibración en una experiencia mobile-first.",
    },
    tags: ["React Native", "Expo", "Zustand"],
    status: { en: "In Development", es: "En desarrollo" },
    color: "#0D212C",
  },
];

/** Projects currently visible on the site (respects the `enabled` flag). */
export const enabledProjects = projects.filter((p) => p.enabled);

// Re-exported for convenience so components can import from one place.
export type { Lang };
