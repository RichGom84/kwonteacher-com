"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_ITEMS, SITE } from "@/data/site";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto max-w-[1280px] px-6 md:px-8 h-16 md:h-20 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2.5 group"
          aria-label="권티처 홈페이지"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/logo.png"
            alt="권티처 로고"
            width={32}
            height={32}
            priority
            className="h-8 w-8 rounded-md"
          />
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

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 md:px-5 h-9 md:h-10 rounded-full border border-primary text-primary hover:bg-primary hover:text-black transition-all text-sm font-semibold"
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

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-md text-text-primary hover:bg-surface transition-colors"
            aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="lg:hidden border-t border-border/60 bg-background/95 backdrop-blur-lg"
        >
          <div className="mx-auto max-w-[1280px] px-6 py-4 flex flex-col gap-1">
            {NAV_ITEMS.slice(0, -1).map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="px-3 py-3 text-base text-text-secondary hover:text-text-primary hover:bg-surface rounded-md transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-1.5 h-12 rounded-full bg-primary text-black font-semibold text-base hover:bg-primary-hover transition-colors"
            >
              강의 문의
              <svg
                width="16"
                height="16"
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
        </nav>
      )}
    </header>
  );
}
