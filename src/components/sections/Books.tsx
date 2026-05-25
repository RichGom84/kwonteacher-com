import path from "node:path";
import fs from "node:fs";
import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";
import { BOOKS, type Book } from "@/data/books";

const STORE_LABEL: Record<string, string> = {
  yes24: "YES24에서 보기",
  kyobobook: "교보문고에서 보기",
};

const PUBLIC_DIR = path.join(process.cwd(), "public");

function coverExists(book: Book): boolean {
  if (!book.cover) return false;
  const abs = path.join(PUBLIC_DIR, book.cover.replace(/^\//, ""));
  try {
    return fs.statSync(abs).isFile();
  } catch {
    return false;
  }
}

export default function Books() {
  return (
    <section
      id="books"
      className="py-20 md:py-32 border-t border-border bg-surface/40"
    >
      <div className="mx-auto max-w-[1280px] px-6 md:px-8">
        <SectionTitle
          eyebrow="Publications"
          title="저서 6권 — AI 리터러시부터 GEO 마케팅까지"
          subtitle="현장에서 검증된 콘텐츠를 책으로 정리해 누적 6권을 출간했습니다."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {BOOKS.map((b) => {
            const hasCover = coverExists(b);
            return (
              <a
                key={b.no}
                href={b.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-border bg-surface p-6 hover:border-primary hover:bg-surface-elevated transition-all flex flex-col"
              >
                <div className="aspect-[3/4] rounded-lg border border-border mb-5 relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-black via-surface-elevated to-primary/10">
                  {hasCover && b.cover ? (
                    <Image
                      src={b.cover}
                      alt={`${b.title} 표지`}
                      fill
                      sizes="(min-width: 1024px) 320px, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  ) : (
                    <>
                      <div className="absolute inset-0 grid-bg opacity-40" />
                      <div className="relative text-center px-4">
                        <div className="text-[80px] font-black text-primary/30 leading-none">
                          {b.no}
                        </div>
                        <div className="mt-2 text-[10px] font-mono text-text-muted uppercase tracking-wider">
                          {b.store}
                        </div>
                      </div>
                    </>
                  )}
                </div>
                <div className="flex-1 flex flex-col">
                  <div className="text-xs font-mono text-primary mb-2">
                    BOOK · 0{b.no}
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-text-primary leading-snug mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {b.title}
                    {b.pending && (
                      <span className="inline-block ml-1 align-middle text-[10px] text-text-muted font-normal">
                        (제목 확정 중)
                      </span>
                    )}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed flex-1">
                    {b.tagline}
                  </p>
                  <div className="mt-4 pt-4 border-t border-border flex items-center justify-between text-sm">
                    <span className="text-text-muted">
                      {STORE_LABEL[b.store]}
                    </span>
                    <span className="text-primary group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1 font-semibold">
                      바로가기
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
                    </span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
