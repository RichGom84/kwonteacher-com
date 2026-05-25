import SectionTitle from "@/components/ui/SectionTitle";
import { REFERENCES } from "@/data/references";

type CategoryName = (typeof REFERENCES)[number]["category"];

const CATEGORY_META: Record<
  CategoryName,
  { iconPath: string; direction: "left" | "right"; accentClass: string }
> = {
  기업: {
    iconPath: "M3 21h18M5 21V7l8-4 8 4v14M9 9h.01M13 9h.01M9 13h.01M13 13h.01M9 17h.01M13 17h.01",
    direction: "left",
    accentClass: "text-primary",
  },
  공공기관: {
    iconPath: "M3 21h18M5 21V10l7-5 7 5v11M9 21v-6h6v6",
    direction: "right",
    accentClass: "text-primary",
  },
  "대학·교육기관": {
    iconPath:
      "M22 10v6M2 10l10-5 10 5-10 5z M6 12v5c3 3 9 3 12 0v-5",
    direction: "left",
    accentClass: "text-primary",
  },
};

export default function References() {
  const total = REFERENCES.reduce((sum, c) => sum + c.items.length, 0);
  return (
    <section id="references" className="py-20 md:py-32 border-t border-border overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-6 md:px-8">
        <SectionTitle
          eyebrow="References"
          title="검증된 출강 이력"
          subtitle={`삼성·LG·현대 등 대기업부터 한국전력공사·보건복지부까지, 누적 ${total}곳 이상의 기관·기업·대학에서 강의했습니다.`}
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-12 md:mb-16">
          <div className="lg:col-span-1 col-span-2 rounded-2xl bg-primary text-black p-6 md:p-7 relative overflow-hidden">
            <div
              aria-hidden="true"
              className="absolute -bottom-6 -right-3 text-[160px] font-black opacity-10 leading-none select-none"
            >
              {total}
            </div>
            <div className="relative">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase mb-3">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-black" />
                </span>
                LIVE 누적
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl md:text-6xl font-extrabold leading-none">
                  {total}
                </span>
                <span className="text-2xl md:text-3xl font-bold">곳+</span>
              </div>
              <div className="mt-2 text-sm font-semibold">출강 기관</div>
            </div>
          </div>

          {REFERENCES.map((cat) => (
            <div
              key={cat.category}
              className="rounded-2xl border border-border bg-surface p-5 md:p-6 hover:border-primary/60 hover:bg-surface-elevated transition-colors"
            >
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary mb-3">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d={CATEGORY_META[cat.category].iconPath} />
                </svg>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl md:text-4xl font-extrabold text-text-primary">
                  {cat.items.length}
                </span>
                <span className="text-base font-semibold text-text-secondary">
                  곳
                </span>
              </div>
              <div className="mt-1 text-xs md:text-sm text-text-secondary">
                {cat.category}
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-4 md:space-y-5">
          {REFERENCES.map((cat, rowIdx) => (
            <MarqueeRow
              key={cat.category}
              category={cat.category}
              items={cat.items}
              direction={CATEGORY_META[cat.category].direction}
              durationSec={cat.items.length * 5 + 18}
              rowIdx={rowIdx}
            />
          ))}
        </div>

        <p className="mt-10 text-xs text-text-muted text-center">
          마우스를 올리면 흐름이 멈춥니다 · 출강 기관의 정식 로고는 사용 협의 후 추후 게재 예정입니다.
        </p>
      </div>
    </section>
  );
}

function MarqueeRow({
  category,
  items,
  direction,
  durationSec,
  rowIdx,
}: {
  category: CategoryName;
  items: readonly string[];
  direction: "left" | "right";
  durationSec: number;
  rowIdx: number;
}) {
  // 매끄러운 무한 루프를 위해 2회 반복
  const items2x = [...items, ...items];
  const trackClass =
    direction === "left" ? "marquee-track-left" : "marquee-track-right";

  return (
    <div className="group relative -mx-6 md:-mx-8">
      <div className="px-6 md:px-8 mb-3 flex items-center gap-3">
        <div className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-primary/10 text-primary">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d={CATEGORY_META[category].iconPath} />
          </svg>
        </div>
        <div className="text-sm md:text-base font-bold text-text-primary">
          {category}
        </div>
        <div className="text-xs font-mono text-text-muted">
          {items.length} ORGS
        </div>
        <div className="flex-1 h-px bg-border" />
        <div className="text-[10px] font-mono text-text-muted opacity-0 group-hover:opacity-100 transition-opacity">
          PAUSED
        </div>
      </div>

      <div className="marquee-mask overflow-hidden">
        <ul
          className={`flex w-max gap-3 md:gap-4 px-3 ${trackClass}`}
          style={{ ["--marquee-duration" as string]: `${durationSec}s` }}
        >
          {items2x.map((name, i) => (
            <li
              key={`${rowIdx}-${name}-${i}`}
              aria-hidden={i >= items.length ? "true" : undefined}
            >
              <Chip name={name} category={category} idx={i} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Chip({
  name,
  category,
  idx,
}: {
  name: string;
  category: CategoryName;
  idx: number;
}) {
  return (
    <div
      className="group/chip relative inline-flex items-center gap-3 h-14 md:h-16 px-5 md:px-6 rounded-full bg-surface border border-border text-text-primary text-sm md:text-base font-semibold whitespace-nowrap hover:border-primary hover:bg-surface-elevated hover:text-primary hover:shadow-[0_0_0_3px_rgba(168,255,96,0.12)] transition-all cursor-default"
    >
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-black/40 text-primary text-[10px] font-mono group-hover/chip:bg-primary group-hover/chip:text-black transition-colors">
        {String((idx % 99) + 1).padStart(2, "0")}
      </span>
      <span>{name}</span>
      <span
        aria-hidden="true"
        className="text-[10px] font-mono text-text-muted group-hover/chip:text-primary/70 transition-colors"
      >
        {category}
      </span>
    </div>
  );
}
