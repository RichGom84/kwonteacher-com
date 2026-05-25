import type { MetadataRoute } from "next";
import { SITE } from "@/data/site";

/**
 * Google sitemap 가이드라인:
 * - fragment(#) URL은 sitemap에 포함하면 안 됨 (Google이 무시하거나 sitemap을 거절)
 * - One-Page 사이트는 루트 URL 1개만 sitemap에 넣음
 * - Phase 2에서 /books/[slug] 같은 별도 라우트가 생기면 그때 여기에 추가
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE.url}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
