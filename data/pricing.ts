export const pricing = [
  {
    name: "Starter",
    priceFrom: "AED 1,200",
    tagline: "Perfect for landing pages & small marketing sites.",
    features: [
      "Up to 5 sections",
      "Fully responsive design",
      "Contact form integration",
      "1 round of revisions",
      "Deploy on Vercel",
      "Delivery in ~1 week",
    ],
    highlighted: false,
    ctaMessage:
      "Hi Mazhar, I'd like a Starter package. Here's what I have in mind:",
  },
  {
    name: "Standard",
    priceFrom: "AED 2,800",
    tagline: "Multi-page sites, small web apps, and business platforms.",
    features: [
      "Up to 8 pages or app screens",
      "CMS or database integration",
      "Auth & basic admin panel",
      "Analytics + SEO setup",
      "2 rounds of revisions",
      "Delivery in 2–3 weeks",
    ],
    highlighted: true,
    ctaMessage:
      "Hi Mazhar, I'm interested in the Standard package. Here's my project:",
  },
  {
    name: "Premium",
    priceFrom: "AED 5,500+",
    tagline: "Full SaaS, e-commerce, or custom dashboards end-to-end.",
    features: [
      "Custom architecture & backend",
      "Payments, subscriptions, roles",
      "Admin dashboard + reporting",
      "Email & WhatsApp notifications",
      "Priority support post-launch",
      "Tailored timeline",
    ],
    highlighted: false,
    ctaMessage:
      "Hi Mazhar, I'd like to discuss a Premium project. Here are the details:",
  },
] as const;
