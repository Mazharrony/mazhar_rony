import { Code2, Smartphone, LayoutDashboard, Palette } from "lucide-react";

export const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Marketing sites, landing pages, and full-stack web apps built with Next.js, React, and modern tooling.",
    bullets: [
      "Next.js / React / TypeScript",
      "Responsive & accessible",
      "SEO + performance tuned",
      "Vercel / Netlify deploy",
    ],
  },
  {
    icon: Smartphone,
    title: "App Development",
    description:
      "Cross-platform mobile experiences and PWAs that feel native, with smooth animations and offline support.",
    bullets: [
      "React Native / Expo",
      "PWA-ready web apps",
      "Push notifications & auth",
      "App store guidance",
    ],
  },
  {
    icon: LayoutDashboard,
    title: "Dashboards & SaaS",
    description:
      "Admin panels, internal tools, and SaaS products with secure auth, role-based access, and real data flows.",
    bullets: [
      "Auth & role-based access",
      "Postgres / MongoDB / Supabase",
      "Charts, tables, exports",
      "Email & payment integrations",
    ],
  },
  {
    icon: Palette,
    title: "UI / UX Design",
    description:
      "Creative, modern interfaces with a focus on clarity, hierarchy, and motion — built to convert.",
    bullets: [
      "Design system foundations",
      "Figma → code handoff",
      "Motion & micro-interactions",
      "Brand-aligned visuals",
    ],
  },
] as const;
