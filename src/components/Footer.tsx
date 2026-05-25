import { SITE } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-[1280px] px-6 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-primary text-black font-bold text-sm">
                K
              </span>
              <span className="font-bold text-lg">
                {SITE.author.name}{" "}
                <span className="text-text-muted">· 권티처</span>
              </span>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed">
              생성형 AI 교육 전문가. 기업·공공기관·대학 출강 누적 100회 이상.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4 text-text-primary">
              빠른 이동
            </h3>
            <ul className="grid grid-cols-2 gap-y-2 text-sm">
              <li>
                <a
                  href="#about"
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  강사 소개
                </a>
              </li>
              <li>
                <a
                  href="#expertise"
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  전문 분야
                </a>
              </li>
              <li>
                <a
                  href="#books"
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  저서
                </a>
              </li>
              <li>
                <a
                  href="#references"
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  출강 이력
                </a>
              </li>
              <li>
                <a
                  href="#youtube"
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  유튜브
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  강의 문의
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4 text-text-primary">
              연락처
            </h3>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>
                <a
                  href={`mailto:${SITE.contact.email}`}
                  className="hover:text-primary transition-colors"
                >
                  {SITE.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE.contact.phone.replaceAll("-", "")}`}
                  className="hover:text-primary transition-colors"
                >
                  {SITE.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={SITE.contact.bio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  litt.ly/levelupai
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-text-muted">
          <p>© {year} 권혁용(권티처). All rights reserved.</p>
          <p>
            본 사이트는 생성형 AI 교육 강사 권혁용의 공식 홈페이지입니다.
          </p>
        </div>
      </div>
    </footer>
  );
}
