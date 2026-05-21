import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const sections = [
    "",
    "#about",
    "#services",
    "#tech",
    "#work",
    "#process",
    "#pricing",
    "#testimonials",
    "#faq",
    "#contact",
  ];
  return sections.map((hash, i) => ({
    url: `${site.url}/${hash}`,
    lastModified,
    changeFrequency: "monthly",
    priority: i === 0 ? 1 : 0.6,
  }));
}
