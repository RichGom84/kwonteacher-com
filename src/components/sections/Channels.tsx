import SectionTitle from "@/components/ui/SectionTitle";
import { AFFILIATE_CHANNELS, CHANNELS } from "@/data/channels";

export default function Channels() {
  return (
    <section
      id="channels"
      className="py-20 md:py-32 border-t border-border bg-surface/40"
    >
      <div className="mx-auto max-w-[1280px] px-6 md:px-8">
        <SectionTitle
          eyebrow="Channels"
          title="흩어진 채널을 한곳에"
          subtitle="공식 채널을 통해 강의 일정, 신간 도서, 무료 콘텐츠를 받아보세요."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {CHANNELS.map((c) => (
            <a
              key={c.label}
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 rounded-2xl border border-border bg-surface p-5 md:p-6 hover:border-primary hover:bg-surface-elevated transition-all"
            >
              <div className="flex-1 min-w-0">
                <div className="text-sm font-bold text-text-primary group-hover:text-primary transition-colors">
                  {c.label}
                </div>
                <div className="text-xs text-text-muted font-mono mt-0.5 truncate">
                  {c.handle}
                </div>
                <div className="text-xs md:text-sm text-text-secondary mt-3 leading-relaxed">
                  {c.desc}
                </div>
              </div>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="flex-shrink-0 text-text-muted group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all mt-1"
              >
                <path d="M7 17L17 7M7 7h10v10" />
              </svg>
            </a>
          ))}
        </div>

        <div className="mt-12">
          <h3 className="text-sm font-semibold text-primary tracking-[0.2em] uppercase mb-5">
            소속 기관 채널
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {AFFILIATE_CHANNELS.map((c) => (
              <a
                key={c.label}
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-border bg-surface p-5 hover:border-primary transition-all"
              >
                <div>
                  <div className="text-base font-bold text-text-primary group-hover:text-primary transition-colors">
                    {c.label}
                  </div>
                  <div className="text-xs text-text-secondary mt-1">
                    {c.role}
                  </div>
                </div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="text-text-muted group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                >
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
