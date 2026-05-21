import type { Metadata, Viewport } from "next";
import {
  DM_Sans,
  JetBrains_Mono,
  Bricolage_Grotesque,
  Instrument_Serif,
} from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { faqs } from "@/data/faqs";
import { pricing } from "@/data/pricing";

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  axes: ["opsz"],
});
const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  axes: ["opsz"],
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});
const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0A0A0B",
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
};

const title = `${site.name} — ${site.role} in Dubai`;
const description = `${site.name} is a ${site.role.toLowerCase()} based in ${site.location}, building Next.js, React, and React Native products for founders and small teams worldwide. ${site.tagline}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: `%s · ${site.name}`,
  },
  description,
  applicationName: site.name,
  generator: "Next.js",
  category: "technology",
  keywords: [
    "Mazhar Rony",
    "Freelance Web Developer Dubai",
    "Freelance App Developer UAE",
    "Next.js developer Dubai",
    "React developer Dubai",
    "React Native developer UAE",
    "Full-stack developer Dubai",
    "SaaS developer Dubai",
    "E-commerce developer UAE",
    "Web design Dubai",
    "UI UX developer Dubai",
    "Hire freelance developer Dubai",
    "Dubai freelancer",
    "UAE software engineer",
    "MERN stack developer Dubai",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: "/" },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title,
    description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${site.name} — ${site.role}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/icon.svg" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sameAs = Object.values(site.socials).filter(Boolean);

  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${site.url}/#person`,
    name: site.name,
    jobTitle: site.role,
    email: `mailto:${site.email}`,
    url: site.url,
    image: `${site.url}/icon.svg`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dubai",
      addressRegion: "Dubai",
      addressCountry: "AE",
    },
    description: site.bio,
    sameAs,
    knowsAbout: [
      "Next.js",
      "React",
      "React Native",
      "TypeScript",
      "Node.js",
      "Tailwind CSS",
      "UI/UX Design",
      "SaaS",
      "E-commerce",
    ],
    worksFor: {
      "@type": "Organization",
      name: `${site.name} — Freelance Studio`,
    },
  };

  const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.name,
    description: site.tagline,
    publisher: { "@id": `${site.url}/#person` },
    inLanguage: "en",
  };

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${site.url}/#service`,
    name: `${site.name} — ${site.role}`,
    description: site.tagline,
    url: site.url,
    image: `${site.url}/icon.svg`,
    telephone: `+${site.whatsappRaw}`,
    email: site.email,
    priceRange: site.priceRange,
    areaServed: [
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "City", name: "Dubai" },
      { "@type": "Place", name: "GCC" },
      { "@type": "Place", name: "Worldwide (remote)" },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dubai",
      addressCountry: "AE",
    },
    provider: { "@id": `${site.url}/#person` },
    serviceType: services.map((s) => s.title),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Freelance packages",
      itemListElement: pricing.map((p) => ({
        "@type": "Offer",
        name: p.name,
        description: p.tagline,
        price: p.priceFrom.replace(/[^\d]/g, ""),
        priceCurrency: "AED",
        availability: "https://schema.org/InStock",
        url: `${site.url}/#pricing`,
      })),
    },
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const portfolioLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${site.name} — Selected work`,
    itemListElement: projects.slice(0, 12).map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: p.liveUrl,
      name: p.title,
      description: p.description,
    })),
  };

  const jsonLd = [personLd, websiteLd, serviceLd, faqLd, portfolioLd];

  return (
    <html
      lang="en"
      className={`${sans.variable} ${display.variable} ${mono.variable} ${serif.variable}`}
    >
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-md focus:bg-white focus:text-ink-900"
        >
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
