export type Project = {
  slug: string;
  title: string;
  description: string;
  liveUrl: string;
  repoUrl?: string;
  tags: string[];
  featured?: boolean;
  /** Optional gradient pair for the placeholder card */
  gradient?: [string, string];
};

export const projects: Project[] = [
  {
    slug: "avion-realty",
    title: "Avion Realty",
    description:
      "Luxury Dubai real estate platform with Apple-glass UI, dynamic property listings, and immersive imagery.",
    liveUrl: "https://avionrealty.ae",
    repoUrl: "https://github.com/Mazharrony/avion-web",
    tags: ["Next.js", "Tailwind", "Real Estate"],
    featured: true,
    gradient: ["#7C7BFF", "#E879F9"],
  },
  {
    slug: "regalia-vows",
    title: "Regalia Vows",
    description:
      "Elegant wedding & event gallery with lightbox, skeleton placeholders, and progressive image loading.",
    liveUrl: "https://regalia-vows.vercel.app",
    repoUrl: "https://github.com/Mazharrony/RegaliaVows",
    tags: ["Next.js", "Gallery", "Events"],
    featured: true,
    gradient: ["#E879F9", "#67E8F9"],
  },
  {
    slug: "corechamps",
    title: "CoreChamps",
    description:
      "QR-based membership & authentication platform with live camera scanning and admin dashboard.",
    liveUrl: "https://corechamps.us",
    repoUrl: "https://github.com/Mazharrony/corechamps-auth",
    tags: ["Auth", "QR", "SaaS"],
    featured: true,
    gradient: ["#67E8F9", "#7C7BFF"],
  },
  {
    slug: "shobkichu",
    title: "Shobkichu",
    description:
      "Full e-commerce store with short order IDs, email order-notification templates, and admin tooling.",
    liveUrl: "https://www.shobkichu.com.bd",
    repoUrl: "https://github.com/Mazharrony/shobkichu.com.bd",
    tags: ["E-commerce", "Next.js", "Email"],
    featured: true,
    gradient: ["#86EFAC", "#67E8F9"],
  },
  {
    slug: "yn-prestige",
    title: "YN Prestige",
    description:
      "Mobile-first marketing site with refined tap targets, iOS zoom prevention, and safe-area insets.",
    liveUrl: "https://yn-prestige.vercel.app",
    repoUrl: "https://github.com/Mazharrony/yn-prestige",
    tags: ["Marketing", "Mobile", "UI"],
    featured: true,
    gradient: ["#E879F9", "#86EFAC"],
  },
  {
    slug: "deliverly",
    title: "Deliverly",
    description:
      "Delivery platform with separate frontend & backend deployments and Shopify endpoint integrations.",
    liveUrl: "https://deliverly-drab.vercel.app",
    repoUrl: "https://github.com/Mazharrony/deliverly",
    tags: ["Logistics", "Shopify", "Full-stack"],
    featured: true,
    gradient: ["#7C7BFF", "#67E8F9"],
  },
  {
    slug: "jnk-log",
    title: "JNK Log",
    description:
      "Logistics and invoicing app supporting zero-price items with warnings, multi-status workflows.",
    liveUrl: "https://jnk-log.vercel.app",
    repoUrl: "https://github.com/Mazharrony/jnk-log",
    tags: ["Logistics", "Invoicing", "Dashboard"],
    featured: true,
    gradient: ["#67E8F9", "#86EFAC"],
  },
  {
    slug: "avion-invoice",
    title: "Avion Invoice",
    description:
      "Invoicing SaaS with secure login (autocomplete), PDF generation, and clean admin experience.",
    liveUrl: "https://avion-invoice.vercel.app",
    repoUrl: "https://github.com/Mazharrony/avion-invoice",
    tags: ["SaaS", "Invoicing", "Auth"],
    featured: true,
    gradient: ["#E879F9", "#7C7BFF"],
  },
  {
    slug: "omnex",
    title: "Omnex",
    description:
      "Bilingual (English / Arabic) corporate site with seamless language switcher and RTL support.",
    liveUrl: "https://omnex-five.vercel.app",
    repoUrl: "https://github.com/Mazharrony/omnex",
    tags: ["i18n", "Arabic", "Corporate"],
    featured: true,
    gradient: ["#86EFAC", "#7C7BFF"],
  },
  // — additional projects (revealed via "Show all") —
  {
    slug: "led-stand",
    title: "LED Stand",
    description: "Product showcase site with client-boundary safe components and custom font handling.",
    liveUrl: "https://led-stand.vercel.app",
    repoUrl: "https://github.com/Mazharrony/led-stand",
    tags: ["Product", "Marketing"],
  },
  {
    slug: "proscience-nutra",
    title: "ProScience Nutra",
    description: "Complete admin dashboard with full management pages for a nutrition brand.",
    liveUrl: "https://prosciencenutra.vercel.app",
    repoUrl: "https://github.com/Mazharrony/prosciencenutra",
    tags: ["Dashboard", "Admin"],
  },
  {
    slug: "xotools",
    title: "Xotools",
    description: "Barcode & label tools with editable text in PDF/SVG exports and tuned text resolution.",
    liveUrl: "https://xotools.vercel.app",
    repoUrl: "https://github.com/Mazharrony/xotools",
    tags: ["Tools", "PDF", "SVG"],
  },
  {
    slug: "inventory-app",
    title: "Inventory App",
    description: "Inventory management built with Vite + React, tuned build chunks for fast loads.",
    liveUrl: "https://inventory-app-brown-two.vercel.app",
    repoUrl: "https://github.com/Mazharrony/inventory-App",
    tags: ["Inventory", "Vite", "React"],
  },
  {
    slug: "eksathe-admin",
    title: "Eksathe Admin",
    description: "Admin dashboard with updated pages and layout for a community platform.",
    liveUrl: "https://eksathe-admin.vercel.app",
    repoUrl: "https://github.com/Mazharrony/eksathe-admin",
    tags: ["Admin", "Dashboard"],
  },
  {
    slug: "bridge",
    title: "Bridge",
    description: "Animated marketing site with a motion wrapper layer and refreshed component system.",
    liveUrl: "https://bridge-seven-delta.vercel.app",
    repoUrl: "https://github.com/Mazharrony/bridge",
    tags: ["Motion", "Marketing"],
  },
  {
    slug: "big-daddy-nutrition",
    title: "Big Daddy Nutrition",
    description: "Branded maintenance page with custom blue theme while the main site is in development.",
    liveUrl: "https://bigdaddynutrition.com",
    repoUrl: "https://github.com/Mazharrony/under-maintaincence",
    tags: ["Landing", "Branding"],
  },
  {
    slug: "ccindia",
    title: "CC India",
    description: "Inventory dashboard with Vercel SPA rewrites to fix route-level 404s.",
    liveUrl: "https://ccindia-pi.vercel.app",
    repoUrl: "https://github.com/Mazharrony/Inventorymanagementdashboard",
    tags: ["Dashboard", "Inventory"],
  },
  {
    slug: "cc-qr-auth",
    title: "CC QR Auth",
    description: "QR scanner authentication frontend with live camera capture flow.",
    liveUrl: "https://cc-qr-auth.vercel.app",
    repoUrl: "https://github.com/Mazharrony/corechamps-auth",
    tags: ["QR", "Auth"],
  },
  {
    slug: "shobkichu-oramko",
    title: "Shobkichu Oramko",
    description: "Lifestyle-focused storefront variant integrating curated lifestyle imagery and branding.",
    liveUrl: "https://shobkichu-oramko.vercel.app",
    repoUrl: "https://github.com/Mazharrony/shobkichu-oramko",
    tags: ["E-commerce", "Branding"],
  },
  {
    slug: "shobkichu-runbaisn",
    title: "Shobkichu Runbaisn",
    description: "Storefront variant with persistent WhatsApp order-confirmation modal.",
    liveUrl: "https://shobkichu-runbaisn.vercel.app",
    repoUrl: "https://github.com/Mazharrony/shobkichu-runbaisn",
    tags: ["E-commerce", "WhatsApp"],
  },
  {
    slug: "meet-mazhar",
    title: "Meet Mazhar (legacy)",
    description: "Earlier portfolio with admin & media management — superseded by this new build.",
    liveUrl: "https://www.meetmazhar.site",
    repoUrl: "https://github.com/Mazharrony/mazhar_rony",
    tags: ["Portfolio", "Admin"],
  },
];
