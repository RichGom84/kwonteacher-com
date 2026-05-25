import SectionTitle from "@/components/ui/SectionTitle";
import ContactForm from "@/components/ContactForm";
import { SITE } from "@/data/site";

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 border-t border-border">
      <div className="mx-auto max-w-[1280px] px-6 md:px-8">
        <SectionTitle
          eyebrow="Contact"
          title="강의 문의는 언제든 환영합니다"
          subtitle="기업 사내 교육, 공공기관 특강, 대학 강연, 워크숍, 컨설팅까지. 일정·인원·주제만 알려주시면 맞춤 제안서를 드립니다."
        />

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-6 md:gap-8 items-start">
          <div className="space-y-3">
            <ContactCard
              icon={
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM22 6l-10 7L2 6" />
              }
              label="이메일"
              value={SITE.contact.email}
              href={`mailto:${SITE.contact.email}`}
            />
            <ContactCard
              icon={
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
              }
              label="전화"
              value={SITE.contact.phone}
              href={`tel:${SITE.contact.phone.replaceAll("-", "")}`}
            />
            <ContactCard
              icon={
                <>
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                </>
              }
              label="공식 link-in-bio"
              value="litt.ly/levelupai"
              href={SITE.contact.bio}
              external
            />

            <div className="rounded-2xl border border-primary/30 bg-primary/5 p-5 mt-4">
              <div className="text-xs font-semibold text-primary tracking-[0.2em] uppercase mb-2">
                응대 안내
              </div>
              <p className="text-sm text-text-secondary leading-relaxed">
                영업일 기준 <span className="text-primary font-semibold">24시간 이내</span>{" "}
                회신을 원칙으로 합니다. 일정이 급한 강의는 메일 제목에{" "}
                <span className="text-primary font-semibold">[긴급]</span>{" "}
                표기 부탁드립니다.
              </p>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon,
  label,
  value,
  href,
  external,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group flex items-center gap-4 rounded-2xl border border-border bg-surface p-5 hover:border-primary hover:bg-surface-elevated transition-all"
    >
      <div className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          {icon}
        </svg>
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-xs text-text-muted">{label}</div>
        <div className="text-sm md:text-base font-semibold text-text-primary group-hover:text-primary transition-colors truncate">
          {value}
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
        className="text-text-muted group-hover:text-primary group-hover:translate-x-0.5 transition-all"
      >
        <path d="M9 18l6-6-6-6" />
      </svg>
    </a>
  );
}
