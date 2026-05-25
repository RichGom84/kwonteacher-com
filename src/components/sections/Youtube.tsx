import SectionTitle from "@/components/ui/SectionTitle";
import { YOUTUBE } from "@/data/channels";

export default function Youtube() {
  return (
    <section id="youtube" className="py-20 md:py-32 border-t border-border">
      <div className="mx-auto max-w-[1280px] px-6 md:px-8">
        <SectionTitle
          eyebrow="YouTube"
          title={YOUTUBE.headline}
          subtitle={`${YOUTUBE.channelName} · ${YOUTUBE.handle} — 영상 ${YOUTUBE.videoCount}개, 구독자 ${YOUTUBE.subscribers}`}
        />

        <div className="grid lg:grid-cols-[1fr_2fr] gap-6 md:gap-8 items-start">
          <div className="rounded-2xl border border-border bg-surface p-7 md:p-8 lg:sticky lg:top-28">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#FF0000]/10 text-[#FF0033] mb-5">
              <svg
                width="28"
                height="20"
                viewBox="0 0 24 17"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M23.5 2.6c-.3-1-1-1.8-2-2C19.7 0 12 0 12 0S4.3 0 2.5.6c-1 .2-1.8 1-2 2C0 4.5 0 8.5 0 8.5s0 4 .5 5.9c.3 1 1 1.8 2 2C4.3 17 12 17 12 17s7.7 0 9.5-.6c1-.3 1.8-1 2-2 .5-1.9.5-5.9.5-5.9s0-4-.5-5.9zM9.5 12V5l6.5 3.5L9.5 12z" />
              </svg>
            </div>
            <div className="text-lg md:text-xl font-bold text-text-primary">
              {YOUTUBE.channelName}
            </div>
            <div className="mt-1 text-sm text-text-secondary font-mono">
              {YOUTUBE.handle}
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-lg bg-background border border-border p-4">
                <div className="text-2xl font-extrabold text-primary">
                  {YOUTUBE.videoCount}
                </div>
                <div className="text-xs text-text-muted mt-1">영상</div>
              </div>
              <div className="rounded-lg bg-background border border-border p-4">
                <div className="text-2xl font-extrabold text-primary">
                  {YOUTUBE.subscribers}
                </div>
                <div className="text-xs text-text-muted mt-1">구독자</div>
              </div>
            </div>
            <a
              href={YOUTUBE.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 h-11 rounded-full bg-primary text-black font-semibold text-sm hover:bg-primary-hover transition-colors"
            >
              채널 구독하기
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M7 17L17 7M7 7h10v10" />
              </svg>
            </a>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {YOUTUBE.featured.map((v, i) => (
              <a
                key={v.title}
                href={v.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-border bg-surface overflow-hidden hover:border-primary transition-all"
              >
                <div className="aspect-video bg-gradient-to-br from-black via-surface-elevated to-primary/10 relative flex items-center justify-center">
                  <div className="absolute inset-0 grid-bg opacity-30" />
                  <div className="relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-black/60 backdrop-blur border border-primary/40 group-hover:bg-primary group-hover:border-primary transition-colors">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-primary group-hover:text-black ml-0.5"
                      aria-hidden="true"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <div className="absolute top-3 left-3 text-[10px] font-mono text-text-muted">
                    EP · {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-sm md:text-base font-bold text-text-primary leading-snug group-hover:text-primary transition-colors">
                    {v.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
