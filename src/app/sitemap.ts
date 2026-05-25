import type { MetadataRoute } from "next";
import { SITE } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const sections = [
    "",
    "#about",
    "#expertise",
    "#references",
    "#books",
    "#youtube",
    "#channels",
    "#contact",
  ];
  return sections.map((s, i) => ({
    url: `${SITE.url}/${s}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: i === 0 ? 1 : 0.8,
  }));
}
