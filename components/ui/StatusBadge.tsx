import React from "react";

type StatusBadgeProps = {
  status: string;
  className?: string;
};

export function StatusBadge({ status, className = "" }: StatusBadgeProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-md border border-border bg-bg-elevated px-2.5 py-1 ${className}`}
      role="status"
      aria-label={status}
    >
      {/* Pulsing status dot */}
      <span className="relative flex size-2" aria-hidden="true">
        <span className="absolute inline-flex size-full animate-pulse-dot rounded-full bg-success opacity-50" />
        <span className="relative inline-flex size-2 rounded-full bg-success" />
      </span>

      <span className="font-mono text-[11px] font-medium uppercase tracking-wider text-text-muted">
        {status}
      </span>
    </div>
  );
}
