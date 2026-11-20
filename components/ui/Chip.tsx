"use client";

import React from "react";

type ChipProps = {
  label: string;
  icon?: React.ReactNode;
  uppercase?: boolean;
  className?: string;
};

export function Chip({ label, icon, uppercase = false, className = "" }: ChipProps) {
  return (
    <span
      className={[
        "inline-flex items-center gap-1.5",
        "rounded-md border border-border bg-bg-subtle/80",
        "px-2.5 py-0.5",
        "font-mono text-[11px] leading-[1.4] font-medium text-text-muted",
        "transition-colors duration-150",
        "hover:bg-accent-soft hover:border-accent/40 hover:text-text",
        uppercase ? "uppercase tracking-[0.08em]" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {icon && (
        <span className="flex-shrink-0 text-[13px]" aria-hidden="true">
          {icon}
        </span>
      )}
      {label}
    </span>
  );
}
