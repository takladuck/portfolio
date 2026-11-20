import React from "react";
import { profile } from "@/data/profile";

const CURRENT_YEAR = 2026;

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-[1120px] flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row md:px-8">
        <p className="text-[14px] text-text-muted">
          © {CURRENT_YEAR} {profile.name}
        </p>

        <p className="font-mono text-[12px] text-text-muted/60">
          Built with Next.js, Tailwind CSS & TypeScript
        </p>

        <a
          href="#top"
          className="text-[13px] font-medium text-text-muted transition-colors hover:text-accent"
          aria-label="Back to top"
        >
          ↑ Back to top
        </a>
      </div>
    </footer>
  );
}
