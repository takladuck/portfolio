import React from "react";

type SectionHeaderProps = {
  id: string;
  label: string;
  title: string;
  chapter?: string;
  className?: string;
};

const CHAPTER_MAP: Record<string, string> = {
  about: "01",
  projects: "02",
  skills: "03",
  experience: "04",
  education: "05",
  certifications: "06",
  interests: "07",
  contact: "08",
};

export function SectionHeader({
  id,
  label,
  title,
  chapter,
  className = "",
}: SectionHeaderProps) {
  const headingId = `${id}-heading`;
  const chapterNumber = chapter || CHAPTER_MAP[id] || "";

  return (
    <div className={`mb-12 ${className}`}>
      <div className="flex items-center gap-2.5 mb-3">
        {chapterNumber && (
          <span className="inline-flex items-center justify-center font-mono text-[11px] font-semibold text-accent px-2 py-0.5 rounded border border-accent/25 bg-accent/10">
            {chapterNumber}
          </span>
        )}
        <span
          className="font-mono text-[12px] uppercase tracking-[0.1em] text-text-muted"
          aria-hidden="true"
        >
          {"// "}
          {label}
        </span>
      </div>
      <h2
        id={headingId}
        className={[
          "font-heading font-[650] leading-[1.15] tracking-[-0.025em]",
          "text-[28px] md:text-[40px]",
          "text-text",
        ].join(" ")}
      >
        {title}
      </h2>
    </div>
  );
}
