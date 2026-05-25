import Link from "next/link";
import { NAV_ITEMS, SITE } from "@/data/site";

export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto max-w-[1280px] px-6 md:px-8 h-16 md:h-20 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2.5 group"
          aria-label="권티처 홈페이지"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-primary text-black font-bold text-sm">
            K
          </span>
          <span className="font-bold text-base md:text-lg tracking-tight">
            <span className="text-text-primary">{SITE.author.name}</span>
            <span className="text-text-muted mx-1.5">·</span>
            <span className="text-text-secondary">권티처</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.slice(0, -1).map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3 py-2 text-sm text-text-secondary hover:text-text-primary transition-colors rounded-md hover:bg-surface"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 px-4 md:px-5 h-9 md:h-10 rounded-full border border-primary text-primary hover:bg-primary hover:text-black transition-all text-sm font-semibold"
        >
          강의 문의
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
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </header>
  );
}
