import Image from "next/image";
import { HERO_STATS, HERO_TAGS } from "@/data/person";
import { findPublicAsset } from "@/lib/assets";

export default function Hero() {
  const profileSrc = findPublicAsset("profile");
  return (
    <section id="hero" className="relative pt-28 md:pt-32 pb-20 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />
      <div className="absolute inset-0 radial-mint pointer-events-none" />

      <div className="relative mx-auto max-w-[1280px] px-6 md:px-8">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs md:text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              2026 강의 일정 문의 받는 중
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] tracking-tight">
              <span className="block text-text-primary">권혁용</span>
              <span className="block mt-2 text-text-secondary text-2xl md:text-4xl lg:text-5xl font-bold">
                권티처 <span className="text-text-muted">· KWON Teacher</span>
              </span>
            </h1>

            <p className="mt-8 text-xl md:text-2xl lg:text-3xl font-semibold text-text-primary leading-snug">
              누구나 따라 할 수 있는
              <br />
              <span className="text-gradient-mint">실습 중심의 생성형 AI 교육</span>
            </p>

            <p className="mt-5 text-sm md:text-base text-text-secondary leading-relaxed max-w-2xl">
              생성형 AI · AI 리터러시 · GEO 마케팅 · 업무 자동화 · AI 콘텐츠 제작
              <br className="hidden md:block" />
              기업 · 공공기관 · 대학을 위한 실전형 AI 교육 전문가
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {HERO_TAGS.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center px-3 py-1.5 rounded-full bg-surface border border-border text-xs md:text-sm text-text-secondary"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full bg-primary text-black font-semibold text-base hover:bg-primary-hover transition-colors glow-primary"
              >
                강의 문의하기
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
              </a>
              <a
                href="#references"
                className="inline-flex items-center justify-center h-12 px-7 rounded-full border border-border-strong text-text-primary font-semibold text-base hover:border-primary hover:text-primary transition-colors"
              >
                출강 이력 보기
              </a>
              <a
                href="https://www.youtube.com/@KwonT_AI"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full text-text-secondary hover:text-primary transition-colors text-base font-medium"
              >
                <svg width="20" height="14" viewBox="0 0 24 17" fill="currentColor" aria-hidden="true"><path d="M23.5 2.6c-.3-1-1-1.8-2-2C19.7 0 12 0 12 0S4.3 0 2.5.6c-1 .2-1.8 1-2 2C0 4.5 0 8.5 0 8.5s0 4 .5 5.9c.3 1 1 1.8 2 2C4.3 17 12 17 12 17s7.7 0 9.5-.6c1-.3 1.8-1 2-2 .5-1.9.5-5.9.5-5.9s0-4-.5-5.9zM9.5 12V5l6.5 3.5L9.5 12z" /></svg>
                유튜브 채널
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl border border-border bg-surface relative overflow-hidden">
              {profileSrc ? (
                <Image
                  src={profileSrc}
                  alt="권혁용(권티처) 강사 프로필"
                  fill
                  priority
                  sizes="(min-width: 1024px) 480px, 100vw"
                  className="object-cover"
                />
              ) : (
                <>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center px-8">
                      <div className="text-[140px] md:text-[200px] leading-none font-black text-primary/15 select-none">
                        AI
                      </div>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <div className="text-text-secondary text-xs md:text-sm font-mono mb-2">
                          profile.png
                        </div>
                        <div className="text-text-muted text-[10px] md:text-xs">
                          강사 프로필 사진 위치
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
              <div className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur text-[10px] md:text-xs text-primary border border-primary/30 z-10">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                생성형AI전문강사
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {HERO_STATS.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-border bg-surface p-5 md:p-7 hover:border-primary/50 hover:bg-surface-elevated transition-colors"
            >
              <div className="text-3xl md:text-5xl font-extrabold text-text-primary">
                {s.value}
                <span className="text-primary ml-0.5">{s.suffix}</span>
              </div>
              <div className="mt-1 text-xs md:text-sm text-text-secondary">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
