import SectionTitle from "@/components/ui/SectionTitle";
import { EXPERTISE, TOPIC_TAGS } from "@/data/expertise";

export default function Expertise() {
  return (
    <section
      id="expertise"
      className="py-20 md:py-32 border-t border-border bg-surface/40"
    >
      <div className="mx-auto max-w-[1280px] px-6 md:px-8">
        <SectionTitle
          eyebrow="Expertise"
          title="6가지 전문 분야로 만나는 실전 AI"
          subtitle="처음 접하는 입문자부터 실무에 즉시 적용해야 하는 실무자까지, 대상에 맞춰 깊이를 조절합니다."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-16 md:mb-20">
          {EXPERTISE.map((e) => (
            <div
              key={e.no}
              className="group relative rounded-2xl bg-surface border border-border p-7 md:p-8 hover:border-primary/60 hover:bg-surface-elevated transition-all overflow-hidden"
            >
              <div
                aria-hidden="true"
                className="absolute -top-3 -right-2 text-[120px] font-extrabold text-primary/[0.06] leading-none select-none group-hover:text-primary/10 transition-colors"
              >
                {e.no}
              </div>
              <div className="relative">
                <div className="text-xs font-mono text-primary mb-3">{e.no}</div>
                <h3 className="text-lg md:text-xl font-bold text-text-primary leading-snug mb-3">
                  {e.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {e.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-sm font-semibold text-primary tracking-[0.2em] uppercase mb-5">
            강의 가능 주제
          </h3>
          <div className="flex flex-wrap gap-2">
            {TOPIC_TAGS.map((t) => (
              <span
                key={t}
                className="inline-flex items-center px-3.5 py-2 rounded-full border border-border bg-surface text-sm text-text-secondary hover:border-primary hover:text-primary transition-colors"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
