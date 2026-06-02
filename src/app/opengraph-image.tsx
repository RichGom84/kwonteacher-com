import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { SITE } from "@/data/site";

export const alt = `${SITE.author.name}(${SITE.author.alternateName[0]}) - ${SITE.author.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// 렌더링에 사용하는 모든 글자 — Google Fonts 서브셋 요청에 그대로 전달
const EYEBROW = "휴먼AI연구소 대표 · 디지털융합교육원 지도교수";
const NAME = "권혁용";
const ALIAS = "권티처 · KWON Teacher";
const ROLE = SITE.author.role;
const TOPICS = "생성형 AI · AI 리터러시 · GEO 마케팅 · 업무 자동화";
const DOMAIN = SITE.url.replace(/^https?:\/\//, "");
const FONT_TEXT =
  EYEBROW + NAME + ALIAS + ROLE + TOPICS + DOMAIN + "()|/-·";

async function loadGoogleFont(family: string, weight: number, text: string) {
  const url = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(
    family,
  )}:wght@${weight}&text=${encodeURIComponent(text)}`;
  const css = await (await fetch(url)).text();
  const resource = css.match(
    /src: url\((.+?)\) format\('(opentype|truetype)'\)/,
  );
  if (!resource) throw new Error(`Failed to parse font CSS for ${family}`);
  const res = await fetch(resource[1]);
  if (!res.ok) throw new Error(`Failed to download font ${family}`);
  return res.arrayBuffer();
}

export default async function Image() {
  const [bold, extra, regular, logo] = await Promise.all([
    loadGoogleFont("Noto Sans KR", 700, FONT_TEXT),
    loadGoogleFont("Noto Sans KR", 900, FONT_TEXT),
    loadGoogleFont("Noto Sans KR", 500, FONT_TEXT),
    readFile(join(process.cwd(), "public", "logo.png")),
  ]);

  const logoSrc = `data:image/png;base64,${Buffer.from(logo).toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#000000",
          backgroundImage:
            "radial-gradient(ellipse 90% 70% at 50% -10%, rgba(168,255,96,0.18), transparent 60%)",
          fontFamily: "Noto Sans KR",
          color: "#ffffff",
        }}
      >
        {/* 상단: 로고 + 도메인 */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <img
              src={logoSrc}
              width={72}
              height={72}
              style={{ borderRadius: 16 }}
            />
            <div
              style={{
                display: "flex",
                fontSize: 30,
                fontWeight: 700,
                color: "#a0a0a0",
              }}
            >
              {DOMAIN}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 24,
              fontWeight: 500,
              color: "#a8ff60",
              border: "2px solid rgba(168,255,96,0.4)",
              borderRadius: 999,
              padding: "10px 24px",
            }}
          >
            기업 · 공공기관 출강
          </div>
        </div>

        {/* 중앙: 핵심 메시지 */}
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              fontWeight: 500,
              color: "#a0a0a0",
            }}
          >
            {EYEBROW}
          </div>
          <div style={{ display: "flex", alignItems: "baseline", gap: 28 }}>
            <div style={{ display: "flex", fontSize: 116, fontWeight: 900 }}>
              {NAME}
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 44,
                fontWeight: 700,
                color: "#a8ff60",
              }}
            >
              {ALIAS}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 52,
              fontWeight: 700,
              color: "#ffffff",
            }}
          >
            {ROLE}
          </div>
        </div>

        {/* 하단: 전문 분야 */}
        <div
          style={{
            display: "flex",
            fontSize: 30,
            fontWeight: 500,
            color: "#a8ff60",
          }}
        >
          {TOPICS}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Noto Sans KR", data: regular, style: "normal", weight: 500 },
        { name: "Noto Sans KR", data: bold, style: "normal", weight: 700 },
        { name: "Noto Sans KR", data: extra, style: "normal", weight: 900 },
      ],
    },
  );
}
