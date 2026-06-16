import {
  Film,
  Building2,
  Smartphone,
  Gamepad2,
  Users,
  type LucideIcon,
} from "lucide-react";

/**
 * Single source of truth for the projects shown on the landing page.
 *
 * To hide a project from the site, flip its `enabled` flag to `false`.
 * Disabled projects disappear from every section (the "What we build"
 * list, the "Selected work" cards, and the project count in the heading)
 * and never ship in the build. Re-enable by setting `enabled: true`.
 */
export interface Project {
  /** Master visibility switch. `false` hides the project everywhere. */
  enabled: boolean;
  /** Product name (e.g. "DaLynk"). Also used as the tag chip. */
  name: string;
  /** One-line product descriptor used on the "Selected work" cards. */
  subtitle: string;
  /** lucide icon for the "What we build" service row. */
  icon: LucideIcon;
  /** Short service-style title for the "What we build" section. */
  serviceTitle: string;
  /** Word inside `serviceDescription` rendered in the display serif font. */
  accent: string;
  /** Service-oriented blurb for the "What we build" rows. */
  serviceDescription: string;
  /** Product-oriented description for the "Selected work" cards. */
  description: string;
  /** Tech stack chips. */
  tags: string[];
  /** Lifecycle label (e.g. "In Development", "MVP Ready"). */
  status: string;
  /** Accent color used for the card image overlay. */
  color: string;
  /** Preview image for the "Selected work" cards. */
  image: string;
}

export const projects: Project[] = [
  {
    enabled: true,
    name: "DaLynk",
    subtitle: "Business Management Platform",
    icon: Building2,
    serviceTitle: "Business SaaS",
    accent: "builders",
    serviceDescription:
      "E-commerce, clinic scheduling, inventory, payments — modular tools for builders scaling fast in Colombia and beyond.",
    description:
      "Modular multi-tenant SaaS for Colombian businesses. E-commerce, clinic booking, WhatsApp integration, payments — one dashboard.",
    tags: ["Next.js", "NestJS", "PostgreSQL"],
    status: "In Development",
    color: "#051A24",
    image:
      "https://motionsites.ai/assets/hero-datacore-booking-preview-B3t9SRK6.gif",
  },
  {
    enabled: true,
    name: "DaClipLab",
    subtitle: "AI-Powered Shorts Factory",
    icon: Film,
    serviceTitle: "AI Video Creation",
    accent: "next wave",
    serviceDescription:
      "From concept to publish-ready video in minutes. Our AI platform is the next wave in content production — no editing suite, no render farm, no friction.",
    description:
      "Turn any idea into polished short-form videos. Automated pipeline from script to render with AI generation, channel management, and autopilot mode.",
    tags: ["FastAPI", "Next.js", "AI/ML", "Video Processing"],
    status: "In Development",
    color: "#0D212C",
    image:
      "https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif",
  },
  {
    enabled: true,
    name: "DazzHabit",
    subtitle: "Habits & Personal Finance",
    icon: Smartphone,
    serviceTitle: "Habit Tracking & Finance",
    accent: "self-improvement",
    serviceDescription:
      "Offline-first mobile app for self-improvement. Daily habit streaks, gym, meditation, and personal finance — all in your pocket.",
    description:
      "Track daily habits with streaks and build financial awareness. Offline-first mobile app designed for self-improvement.",
    tags: ["React Native", "Expo", "SQLite"],
    status: "MVP Ready",
    color: "#051A24",
    image:
      "https://motionsites.ai/assets/hero-taskora-preview-BlRBv8IU.gif",
  },
  {
    // Paused — not sure we'll continue this one yet. Hidden from the landing.
    enabled: false,
    name: "Dancet",
    subtitle: "Social Discovery for Dancers",
    icon: Users,
    serviceTitle: "Social Discovery",
    accent: "perfect partner",
    serviceDescription:
      "Find your perfect partner for dancing at bars and clubs. Real-time matching by skill level, dance style, and venue location.",
    description:
      "Find your perfect dance partner at bars and clubs. Real-time matching by skill, style, and venue location.",
    tags: ["React Native", "Supabase", "PostGIS"],
    status: "In Development",
    color: "#273C46",
    image:
      "https://motionsites.ai/assets/hero-clubx-preview-CpKCe8yV.gif",
  },
  {
    // Paused — not sure we'll continue this one yet. Hidden from the landing.
    enabled: false,
    name: "DaDaBatt",
    subtitle: "Card Battle Game",
    icon: Gamepad2,
    serviceTitle: "Mobile Gaming",
    accent: "collect and battle",
    serviceDescription:
      "Collect and battle with cards across multiple game modes. Daily rewards, leveling, and haptic-driven gameplay built for mobile.",
    description:
      "Collect cards and battle across multiple game modes. Daily rewards, leveling system, and haptic-driven gameplay in a mobile-first experience.",
    tags: ["React Native", "Expo", "Zustand"],
    status: "In Development",
    color: "#0D212C",
    image:
      "https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif",
  },
];

/** Projects currently visible on the site (respects the `enabled` flag). */
export const enabledProjects = projects.filter((p) => p.enabled);

const NUMBER_WORDS = [
  "Zero",
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
  "Ten",
];

/** Capitalized English word for a small count, e.g. 3 -> "Three". */
export function numberWord(n: number): string {
  return NUMBER_WORDS[n] ?? String(n);
}
