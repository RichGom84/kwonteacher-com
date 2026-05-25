"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const LECTURE_TYPES = [
  "기업 사내 교육",
  "공공기관 특강",
  "대학 강연",
  "워크숍",
  "컨설팅",
  "기타",
];

const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";
const FALLBACK_EMAIL = "hukyoung84@naver.com";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const configured = ACCESS_KEY.length > 0;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!configured) {
      setStatus("error");
      setErrorMessage(
        "폼이 아직 설정되지 않았습니다. 아래 메일 주소로 직접 보내주세요.",
      );
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const contact = String(data.get("contact") ?? "");
    const lectureType = String(data.get("lectureType") ?? "유형 미선택");

    data.set("access_key", ACCESS_KEY);
    data.set("subject", `[강의 문의] ${name} - ${lectureType}`);
    data.set("from_name", `kwonteacher.com · ${name}`);
    if (contact.includes("@")) data.set("replyto", contact);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json().catch(() => ({}));

      if (res.ok && json?.success) {
        setStatus("success");
        form.reset();
        return;
      }

      throw new Error(
        typeof json?.message === "string" ? json.message : "전송에 실패했습니다.",
      );
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "알 수 없는 오류가 발생했습니다.",
      );
    }
  }

  const submitting = status === "submitting";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-surface p-6 md:p-8 space-y-5"
    >
      {!configured && (
        <div
          role="status"
          className="rounded-lg border border-primary/40 bg-primary/5 px-4 py-3 text-xs md:text-sm text-text-secondary"
        >
          ⚙️ 폼 발송 설정 대기 중 ·{" "}
          <code className="text-primary font-mono">.env.local</code> 에{" "}
          <code className="text-primary font-mono">
            NEXT_PUBLIC_WEB3FORMS_KEY
          </code>{" "}
          를 입력해 주세요.
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="cf-name"
            className="block text-xs font-semibold text-text-secondary mb-2"
          >
            성함 / 기관명 <span className="text-primary">*</span>
          </label>
          <input
            id="cf-name"
            name="name"
            type="text"
            required
            maxLength={80}
            autoComplete="name"
            placeholder="홍길동 / OO기관 교육담당"
            disabled={submitting}
            className="w-full h-11 px-4 rounded-lg bg-background border border-border text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary disabled:opacity-50"
          />
        </div>
        <div>
          <label
            htmlFor="cf-contact"
            className="block text-xs font-semibold text-text-secondary mb-2"
          >
            연락처 (이메일 또는 전화) <span className="text-primary">*</span>
          </label>
          <input
            id="cf-contact"
            name="contact"
            type="text"
            required
            maxLength={120}
            placeholder="email@example.com / 010-0000-0000"
            disabled={submitting}
            className="w-full h-11 px-4 rounded-lg bg-background border border-border text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary disabled:opacity-50"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="cf-type"
          className="block text-xs font-semibold text-text-secondary mb-2"
        >
          강의 유형
        </label>
        <select
          id="cf-type"
          name="lectureType"
          disabled={submitting}
          defaultValue=""
          className="w-full h-11 px-4 rounded-lg bg-background border border-border text-sm text-text-primary focus:outline-none focus:border-primary disabled:opacity-50"
        >
          <option value="">선택해 주세요</option>
          {LECTURE_TYPES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="cf-msg"
          className="block text-xs font-semibold text-text-secondary mb-2"
        >
          문의 내용
        </label>
        <textarea
          id="cf-msg"
          name="message"
          rows={5}
          maxLength={2000}
          placeholder={`예) 사내 임직원 대상 ChatGPT 실무 활용 4시간 특강 가능한지 문의드립니다.
- 일정: 2026년 7월 둘째 주
- 인원: 약 50명
- 장소: 서울 본사`}
          disabled={submitting}
          className="w-full px-4 py-3 rounded-lg bg-background border border-border text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary disabled:opacity-50 resize-y"
        />
      </div>

      {/* Web3Forms honeypot — 봇이 이 필드를 채우면 자동으로 차단됨 */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
        <p className="text-xs text-text-muted leading-relaxed">
          제출하신 정보는 강의 문의 응대 목적으로만 사용되며,
          <br className="hidden sm:block" />
          회신 후 6개월 내 파기합니다.
        </p>
        <button
          type="submit"
          disabled={submitting || !configured}
          className="inline-flex items-center justify-center gap-2 h-11 px-7 rounded-full bg-primary text-black font-semibold text-sm hover:bg-primary-hover transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitting ? "전송 중..." : "강의 문의 보내기"}
          {!submitting && (
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
          )}
        </button>
      </div>

      {status === "success" && (
        <div
          role="status"
          className="rounded-lg border border-primary/40 bg-primary/5 px-4 py-3 text-sm text-primary"
        >
          ✅ 문의가 정상 접수됐습니다. 영업일 기준 24시간 내에 회신드리겠습니다.
        </div>
      )}
      {status === "error" && (
        <div
          role="alert"
          className="rounded-lg border border-error/40 bg-error/5 px-4 py-3 text-sm text-error"
        >
          전송 중 문제가 발생했습니다. {errorMessage}
          <br />
          직접{" "}
          <a
            href={`mailto:${FALLBACK_EMAIL}`}
            className="underline hover:opacity-80"
          >
            {FALLBACK_EMAIL}
          </a>{" "}
          으로 메일 부탁드립니다.
        </div>
      )}
    </form>
  );
}
