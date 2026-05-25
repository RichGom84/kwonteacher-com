import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SITE } from "@/data/site";
import { buildGraphSchema, jsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: `%s | ${SITE.author.name} 강사`,
  },
  description: SITE.description,
  keywords: [
    "권혁용",
    "권티처",
    "KwonTeacher",
    "생성형 AI 강사",
    "AI 리터러시 강사",
    "GEO 마케팅 강사",
    "기업 AI 교육",
    "공공기관 AI 교육",
    "업무 자동화 강사",
    "프롬프트 엔지니어링",
    "휴먼AI연구소",
  ],
  authors: [{ name: SITE.author.name, url: SITE.url }],
  creator: SITE.author.name,
  publisher: SITE.author.name,
  alternates: {
    canonical: SITE.url,
  },
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.name,
    title: SITE.title,
    description: SITE.description,
    images: [
      {
        url: SITE.ogImage,
        width: 1200,
        height: 630,
        alt: `${SITE.author.name}(${SITE.author.alternateName[0]}) - ${SITE.author.role}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
    images: [SITE.ogImage],
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
  verification: {
    google: "LGoFsx7UciJTmZZNIuGVrR2gi1YxhCtOkQHS_pDxxsA",
    other: {
      "naver-site-verification":
        "bd04031074126590d4a3df4b1354b84abec2c326",
    },
  },
  category: "education",
};

export const viewport: Viewport = {
  themeColor: SITE.themeColor,
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" className="h-full">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(buildGraphSchema()) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-text-primary">
        {children}
      </body>
    </html>
  );
}
