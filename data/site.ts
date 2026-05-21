export const site = {
  name: "Mazhar Rony",
  shortName: "MR",
  role: "Freelance Web & App Developer",
  location: "Dubai, UAE",
  tagline:
    "Modern, meaningful web & app experiences — built for businesses that want more than a template.",
  bio: "I'm a freelance developer based in Dubai, building creative and modern web & mobile experiences for businesses worldwide. I focus on meaningful design, clean code, and products that actually move the needle — not just look pretty.",
  email: "mazharronydxb@gmail.com",
  // Display version (with + and spaces); the wa.me link strips non-digits.
  whatsappDisplay: "+971 50 712 17156",
  whatsappRaw: "971507121756",
  whatsappMessage: "Hi Mazhar, I came across your portfolio and would like to discuss a project.",
  url: "https://meetmazhar.site",
  available: true,
  stats: [
    { label: "Years coding", value: "4+" },
    { label: "Projects delivered", value: "20+" },
    { label: "Happy clients", value: "15+" },
    { label: "Tech stacks", value: "10+" },
  ],
  priceRange: "AED 1,200 – AED 10,000+",
  socials: {
    github: "https://github.com/Mazharrony",
    linkedin: "https://www.linkedin.com/in/mazharrony/",
  },
} as const;

export const waLink = (msg?: string) =>
  `https://wa.me/${site.whatsappRaw}?text=${encodeURIComponent(
    msg ?? site.whatsappMessage,
  )}`;
