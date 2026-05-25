import SectionTitle from "@/components/ui/SectionTitle";
import { AWARDS, POSITIONS, STRENGTHS } from "@/data/person";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 border-t border-border">
      <div className="mx-auto max-w-[1280px] px-6 md:px-8">
        <SectionTitle
          eyebrow="About"
          title="생성형 AI를 현장에서 바로 쓰게 만드는 강사"
        />

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 mb-16 md:mb-20">
          <div className="space-y-5 text-base md:text-lg text-text-secondary leading-relaxed">
            <p>
              <span className="text-text-primary font-semibold">권혁용 강사</span>
              는 세종대학교에서 전자공학을 전공하고 태양광 분야로 석사를 마친 뒤,
              한화큐셀 선임연구원으로 R&D 현장에 있었습니다. 공학 기반의 사고와
              데이터 감각을 그대로 가져와 지금은 생성형 AI 교육 현장에서
              <span className="text-text-primary">
                {" "}
                &ldquo;내일부터 바로 쓸 수 있는 AI&rdquo;
              </span>
              를 가르치고 있습니다.
            </p>
            <p>
              휴먼AI연구소 대표, 디지털융합교육원 지도교수, 한국AI리터러시강사협회
              사무총장 등 다양한 기관에서 활동하며 기업·공공기관·대학에 누적
              <span className="text-primary font-semibold"> 100회 이상</span>{" "}
              출강했습니다. 강의 후 &ldquo;실제 업무가 달라졌다&rdquo;는 후기를 가장 큰 보상으로
              여깁니다.
            </p>
            <p>
              ChatGPT, Claude, Gemini, Copilot, NotebookLM, Genspark, n8n 등
              실무에서 검증된 도구만 가르치며, 강의는 항상{" "}
              <span className="text-text-primary font-semibold">실습 60% 이상</span>
              으로 설계합니다.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-primary tracking-[0.2em] uppercase mb-5">
              직책 · 소속
            </h3>
            <div className="space-y-1">
              {POSITIONS.map((p) => (
                <div
                  key={`${p.role}-${p.org}`}
                  className="group grid grid-cols-[100px_1fr] gap-4 py-3 border-b border-border last:border-b-0"
                >
                  <div className="text-xs md:text-sm text-text-muted font-medium pt-0.5 whitespace-nowrap">
                    {p.role}
                  </div>
                  <div>
                    <div className="text-sm md:text-base font-semibold text-text-primary group-hover:text-primary transition-colors">
                      {p.org}
                    </div>
                    <div className="text-xs md:text-sm text-text-secondary mt-0.5">
                      {p.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12">
          <div>
            <h3 className="text-sm font-semibold text-primary tracking-[0.2em] uppercase mb-5">
              수상 · 자격
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {AWARDS.map((a, i) => (
                <div
                  key={a.title}
                  className="rounded-xl bg-surface border border-border p-5 hover:border-primary/50 transition-colors"
                >
                  <div className="text-xs text-text-muted font-mono mb-2">
                    0{i + 1}
                  </div>
                  <div className="text-sm font-bold text-text-primary leading-snug">
                    {a.title}
                  </div>
                  <div className="text-xs text-text-secondary mt-1.5">
                    {a.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-primary tracking-[0.2em] uppercase mb-5">
              교육 강점
            </h3>
            <div className="space-y-2.5">
              {STRENGTHS.map((s, i) => (
                <div
                  key={s.title}
                  className="flex gap-4 rounded-xl bg-surface border border-border p-5 hover:border-primary/50 hover:bg-surface-elevated transition-colors"
                >
                  <div className="flex-shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-sm">
                    0{i + 1}
                  </div>
                  <div>
                    <div className="text-base font-bold text-text-primary">
                      {s.title}
                    </div>
                    <div className="text-sm text-text-secondary mt-1">
                      {s.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
