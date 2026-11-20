"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Award, ShieldCheck } from "lucide-react";

type IssuerLogoProps = {
  issuer: string;
  badgeUrl?: string;
  name?: string;
  className?: string;
};

export function IssuerLogo({ issuer, badgeUrl, name, className = "" }: IssuerLogoProps) {
  const [imageError, setImageError] = useState(false);

  // If a valid custom badge image is provided and hasn't errored
  if (badgeUrl && !imageError) {
    return (
      <div
        className={`relative flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-border bg-bg-subtle p-1 ${className}`}
      >
        <img
          src={badgeUrl}
          alt={`${issuer} badge`}
          className="size-full object-contain"
          onError={() => setImageError(true)}
        />
      </div>
    );
  }

  const normalized = issuer.toLowerCase();

  // AWS
  if (normalized.includes("aws") || normalized.includes("amazon")) {
    return (
      <div
        className={`flex size-10 shrink-0 items-center justify-center rounded-lg border border-[#FF9900]/30 bg-[#FF9900]/10 text-[#FF9900] ${className}`}
        title="AWS Credential"
      >
        <svg viewBox="0 0 24 24" className="size-6" fill="currentColor">
          <path d="M12.92 14.52c-2.3 1.54-5.63 2.37-8.52 2.37-4.06 0-7.72-1.52-10.49-4.08-.22-.2-.02-.5.23-.34 2.97 1.88 6.7 3.01 10.58 3.01 2.58 0 5.43-.64 8.01-1.98.39-.2.68.22.19 1.02zm1.26-1.55c-.29-.39-1.93-.19-2.67-.1-.23.03-.26-.17-.06-.31 1.33-.93 3.51-.66 3.76-.35.25.32-.07 2.55-1.32 3.57-.19.16-.37.07-.28-.13.3-.67.86-2.29.57-2.68zm8.6-2.68c-.62-.8-1.5-1.25-2.58-1.25-1.95 0-3.5 1.56-3.5 3.57 0 1.98 1.51 3.54 3.57 3.54.99 0 1.83-.39 2.45-1.12v.89c0 .19.1.33.29.33h1.34c.19 0 .29-.14.29-.33V9.3c0-.19-.1-.33-.29-.33h-1.34c-.19 0-.29.14-.29.33v3.01zm-2.4 3.3c-1.12 0-1.92-.89-1.92-2.09 0-1.22.8-2.11 1.92-2.11 1.13 0 1.93.89 1.93 2.11 0 1.2-.8 2.09-1.93 2.09z" />
        </svg>
      </div>
    );
  }

  // Databricks
  if (normalized.includes("databricks")) {
    return (
      <div
        className={`flex size-10 shrink-0 items-center justify-center rounded-lg border border-[#FF3621]/30 bg-[#FF3621]/10 text-[#FF3621] ${className}`}
        title="Databricks Credential"
      >
        <svg viewBox="0 0 24 24" className="size-6" fill="currentColor">
          <path d="M1.2 5.5l10.8-4.2 10.8 4.2-10.8 4.2L1.2 5.5zm0 6.5l10.8 4.2 10.8-4.2v2.5L12 18.7 1.2 14.5V12zm0 6.5L12 22.7l10.8-4.2v2.5L12 25.2 1.2 21v-2.5z" />
        </svg>
      </div>
    );
  }

  // Accenture
  if (normalized.includes("accenture")) {
    return (
      <div
        className={`flex size-10 shrink-0 items-center justify-center rounded-lg border border-[#A100FF]/30 bg-[#A100FF]/10 text-[#A100FF] ${className}`}
        title="Accenture Credential"
      >
        <span className="font-heading text-xl font-black leading-none tracking-tighter">
          &gt;
        </span>
      </div>
    );
  }

  // Google
  if (normalized.includes("google")) {
    return (
      <div
        className={`flex size-10 shrink-0 items-center justify-center rounded-lg border border-border bg-bg-subtle text-text ${className}`}
        title="Google Credential"
      >
        <svg viewBox="0 0 24 24" className="size-5">
          <path
            fill="#4285F4"
            d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
          />
          <path
            fill="#34A853"
            d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.27 21.43 7.34 24 12 24z"
          />
          <path
            fill="#FBBC05"
            d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.14-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
          />
          <path
            fill="#EA4335"
            d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.27 2.57 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
          />
        </svg>
      </div>
    );
  }

  // IIM Ahmedabad
  if (normalized.includes("iim") || normalized.includes("ahmedabad")) {
    return (
      <div
        className={`flex size-10 shrink-0 items-center justify-center rounded-lg border border-[#8B0000]/30 bg-[#8B0000]/10 text-[#B22222] dark:text-[#E06666] ${className}`}
        title="IIM Ahmedabad Credential"
      >
        <span className="font-heading text-xs font-bold tracking-tight">IIMA</span>
      </div>
    );
  }

  // Univ. of Colorado Boulder
  if (normalized.includes("colorado") || normalized.includes("boulder") || normalized.includes("ucb")) {
    return (
      <div
        className={`flex size-10 shrink-0 items-center justify-center rounded-lg border border-[#CFB87C]/40 bg-[#CFB87C]/15 text-[#CFB87C] ${className}`}
        title="University of Colorado Boulder Credential"
      >
        <span className="font-heading text-xs font-bold tracking-tight">CU</span>
      </div>
    );
  }

  // SAP
  if (normalized.includes("sap")) {
    return (
      <div
        className={`flex size-10 shrink-0 items-center justify-center rounded-lg border border-[#008FD3]/30 bg-[#008FD3]/10 text-[#008FD3] ${className}`}
        title="SAP Credential"
      >
        <span className="font-heading text-xs font-black tracking-wider">SAP</span>
      </div>
    );
  }

  // Coursera
  if (normalized.includes("coursera")) {
    return (
      <div
        className={`flex size-10 shrink-0 items-center justify-center rounded-lg border border-[#0056D2]/30 bg-[#0056D2]/10 text-[#0056D2] ${className}`}
        title="Coursera Credential"
      >
        <svg viewBox="0 0 24 24" className="size-5" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.5 14.5v-9l7 4.5-7 4.5z" />
        </svg>
      </div>
    );
  }

  // Skillsoft
  if (normalized.includes("skillsoft")) {
    return (
      <div
        className={`flex size-10 shrink-0 items-center justify-center rounded-lg border border-accent/30 bg-accent/10 text-accent ${className}`}
        title="Skillsoft Credential"
      >
        <Award className="size-5" />
      </div>
    );
  }

  // Anthropic / Claude
  if (normalized.includes("anthropic") || normalized.includes("claude")) {
    return (
      <div
        className={`flex size-10 shrink-0 items-center justify-center rounded-lg border border-[#D97757]/35 bg-[#D97757]/10 text-[#D97757] ${className}`}
        title="Anthropic Claude Credential"
      >
        <svg viewBox="0 0 24 24" className="size-5" fill="currentColor">
          <path d="M13.727 3.333h3.546l6.727 17.334h-3.697l-1.503-4.004H11.2l-1.503 4.004H6l6.727-17.334h1zm-1.394 10.334h5.334L15 6.667l-2.667 7z" />
        </svg>
      </div>
    );
  }

  // Frontend Masters
  if (normalized.includes("frontend masters") || normalized.includes("frontendmasters")) {
    return (
      <div
        className={`flex size-10 shrink-0 items-center justify-center rounded-lg border border-[#D0393B]/35 bg-[#D0393B]/10 text-[#D0393B] ${className}`}
        title="Frontend Masters Credential"
      >
        <span className="font-heading text-xs font-black tracking-tight">FM</span>
      </div>
    );
  }

  // Master.dev / The Origins
  if (normalized.includes("master.dev") || normalized.includes("the origins") || normalized.includes("devops")) {
    return (
      <div
        className={`flex size-10 shrink-0 items-center justify-center rounded-lg border border-border bg-bg-subtle text-text ${className}`}
        title="Master.dev Credential"
      >
        <span className="font-mono text-xs font-bold text-accent">&gt;_</span>
      </div>
    );
  }

  // Fallback
  return (
    <div
      className={`flex size-10 shrink-0 items-center justify-center rounded-lg border border-border bg-bg-subtle text-text-muted ${className}`}
    >
      <ShieldCheck className="size-5 text-accent" />
    </div>
  );
}
