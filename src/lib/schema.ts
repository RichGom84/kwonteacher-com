import { SITE } from "@/data/site";
import { BOOKS } from "@/data/books";
import { POSITIONS } from "@/data/person";

const SAME_AS = [
  "https://litt.ly/levelupai",
  "https://www.youtube.com/@KwonT_AI",
  "https://blog.naver.com/levelupai",
  "https://richgom486.tistory.com/",
  "https://www.threads.com/@codeyong84",
  "https://www.instagram.com/codeyong84/",
  "https://win-ai.kr/",
  "https://kol.ai.kr/executives",
  ...BOOKS.map((b) => b.url),
];

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE.url}#organization`,
    name: SITE.organization.name,
    url: SITE.url,
    description: SITE.organization.description,
    founder: { "@id": `${SITE.url}#person` },
    employee: { "@id": `${SITE.url}#person` },
  };
}

export function buildWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}#website`,
    url: SITE.url,
    name: SITE.name,
    description: SITE.description,
    inLanguage: "ko-KR",
    publisher: { "@id": `${SITE.url}#organization` },
  };
}

export function buildPersonSchema() {
  const affiliations = POSITIONS.filter((p) => p.role !== "학력").map((p) => ({
    "@type": "Organization",
    name: p.org,
  }));

  const books = BOOKS.map((b) => ({
    "@type": "Book",
    name: b.title,
    author: { "@id": `${SITE.url}#person` },
    url: b.url,
    inLanguage: "ko",
    bookFormat: "https://schema.org/Paperback",
  }));

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE.url}#person`,
    name: SITE.author.name,
    alternateName: SITE.author.alternateName,
    jobTitle: SITE.author.role,
    description:
      "휴먼AI연구소 대표. 생성형 AI · AI 리터러시 · GEO 마케팅 · 업무 자동화 분야 강사. 기업·공공기관·대학에 누적 100회 이상 출강.",
    url: SITE.url,
    image: `${SITE.url}/profile.png`,
    email: `mailto:${SITE.contact.email}`,
    telephone: SITE.contact.phoneE164,
    sameAs: SAME_AS,
    knowsAbout: [
      "생성형 AI",
      "AI 리터러시",
      "GEO 마케팅",
      "업무 자동화",
      "AI 콘텐츠 제작",
      "프롬프트 엔지니어링",
      "ChatGPT",
      "Claude",
      "Gemini",
      "Copilot",
      "NotebookLM",
      "n8n",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "세종대학교",
    },
    worksFor: { "@id": `${SITE.url}#organization` },
    affiliation: affiliations,
    award: [
      "대한민국 AI 영상제 최우수상",
      "생성형 AI 교육지도 강사 경진대회 최우수상",
      "생성형 AI 교육지도사 자격증",
      "서울대학교 AI 교육과정 1기 수료",
    ],
    author: books,
  };
}

export function buildContactPointSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPoint",
    contactType: "강의 문의",
    email: SITE.contact.email,
    telephone: SITE.contact.phoneE164,
    areaServed: "KR",
    availableLanguage: ["Korean"],
  };
}

export function buildBreadcrumbSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "홈",
        item: SITE.url,
      },
    ],
  };
}

export function buildGraphSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      buildOrganizationSchema(),
      buildWebsiteSchema(),
      buildPersonSchema(),
      buildBreadcrumbSchema(),
    ],
  };
}

export function jsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
