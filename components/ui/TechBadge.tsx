"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import simpleIconsData from "./simpleIconsData.json";

type TechBadgeProps = {
  name: string;
  className?: string;
};

type SimpleIconItem = {
  path: string;
  hex: string;
};

const simpleIcons = simpleIconsData as Record<string, SimpleIconItem>;

export function TechBadge({ name, className = "" }: TechBadgeProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  const normalized = name.trim().toLowerCase();

  // Render SVG Icon content
  const renderIcon = () => {
    // 1. Check in simpleIcons map
    const matchKey = Object.keys(simpleIcons).find(
      (k) => k.toLowerCase() === normalized
    );

    if (matchKey && simpleIcons[matchKey]) {
      const { path, hex } = simpleIcons[matchKey];
      return (
        <svg
          viewBox="0 0 24 24"
          className="size-6 transition-transform duration-200 group-hover:scale-110"
          style={{ color: hex }}
          fill="currentColor"
          aria-hidden="true"
        >
          <path d={path} />
        </svg>
      );
    }

    // 2. Custom icons for non-simple-icon skills

    // Java
    if (normalized === "java") {
      return (
        <svg
          viewBox="0 0 24 24"
          className="size-6 text-[#EA2D2E] transition-transform duration-200 group-hover:scale-110"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M8.85 16.34c-.23.08-.47.16-.7.25-1.2.46-1.92.95-1.92 1.5 0 1.05 2.5 1.91 5.58 1.91s5.58-.86 5.58-1.91c0-.52-.66-1-1.78-1.44-.22-.09-.46-.17-.7-.25.59.34.93.73.93 1.15 0 .86-1.8 1.56-4.03 1.56s-4.03-.7-4.03-1.56c0-.44.38-.85 1.07-1.21zM9.54 13.88c-1.87.5-2.88 1.25-2.88 2.11 0 1.34 2.45 2.42 5.48 2.42s5.48-1.08 5.48-2.42c0-.82-.93-1.54-2.67-2.04.47.3.73.66.73 1.06 0 .88-1.59 1.59-3.54 1.59s-3.54-.71-3.54-1.59c0-.42.31-.81.94-1.13zm2.5-13.88c.95 1.48-.48 2.87-.48 4.19 0 1.2.73 1.83 1.51 2.81 1.01 1.27 1.56 2.65.64 4.13-.23.37-.56.66-.94.88.85-.35 1.53-.94 1.83-1.74.58-1.56-.25-2.92-1.2-4.04-.84-.99-1.28-1.58-1.28-2.46 0-1.12.87-2.32-.08-3.77zM9.91 3.51c.69 1.14-.35 2.21-.35 3.22 0 .92.56 1.41 1.16 2.16.78.98 1.2 2.04.49 3.18-.18.28-.43.51-.72.68.65-.27 1.18-.72 1.41-1.34.45-1.2-.19-2.25-.92-3.11-.65-.76-.98-1.22-.98-1.89 0-.86.67-1.79-.09-2.9z" />
        </svg>
      );
    }

    // AWS
    if (normalized === "aws") {
      return (
        <svg
          viewBox="0 0 24 24"
          className="size-6 text-[#FF9900] transition-transform duration-200 group-hover:scale-110"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12.92 14.52c-2.3 1.54-5.63 2.37-8.52 2.37-4.06 0-7.72-1.52-10.49-4.08-.22-.2-.02-.5.23-.34 2.97 1.88 6.7 3.01 10.58 3.01 2.58 0 5.43-.64 8.01-1.98.39-.2.68.22.19 1.02zm1.26-1.55c-.29-.39-1.93-.19-2.67-.1-.23.03-.26-.17-.06-.31 1.33-.93 3.51-.66 3.76-.35.25.32-.07 2.55-1.32 3.57-.19.16-.37.07-.28-.13.3-.67.86-2.29.57-2.68zm8.6-2.68c-.62-.8-1.5-1.25-2.58-1.25-1.95 0-3.5 1.56-3.5 3.57 0 1.98 1.51 3.54 3.57 3.54.99 0 1.83-.39 2.45-1.12v.89c0 .19.1.33.29.33h1.34c.19 0 .29-.14.29-.33V9.3c0-.19-.1-.33-.29-.33h-1.34c-.19 0-.29.14-.29.33v3.01zm-2.4 3.3c-1.12 0-1.92-.89-1.92-2.09 0-1.22.8-2.11 1.92-2.11 1.13 0 1.93.89 1.93 2.11 0 1.2-.8 2.09-1.93 2.09z" />
        </svg>
      );
    }

    // OpenAI API
    if (normalized.includes("openai")) {
      return (
        <svg
          viewBox="0 0 24 24"
          className="size-6 text-[#10A37F] dark:text-[#2DD4BF] transition-transform duration-200 group-hover:scale-110"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zM8.307 10.514l2.876-1.66 2.876 1.66v3.32l-2.876 1.66-2.876-1.66z" />
        </svg>
      );
    }

    // SQL
    if (normalized === "sql") {
      return (
        <svg
          viewBox="0 0 24 24"
          className="size-6 text-[#00758F] dark:text-[#38BDF8] transition-transform duration-200 group-hover:scale-110"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 2C6.48 2 2 3.34 2 5v14c0 1.66 4.48 3 10 3s10-1.34 10-3V5c0-1.66-4.48-3-10-3zm0 2c4.42 0 8 .9 8 2s-3.58 2-8 2-8-.9-8-2 3.58-2 8-2zm8 5.1c-.85.43-2.22.82-3.82 1.05-.62-.72-1.48-1.25-2.47-1.5 1.94-.14 3.73-.61 5.09-1.28v1.73zm-8 .9c2.32 0 4.42-.32 5.92-.85.34.6.53 1.28.53 2.01 0 1.25-.56 2.37-1.45 3.12-.48.4-1.05.72-1.69.94-1.04.36-2.2.57-3.44.57s-2.4-.21-3.44-.57c-.64-.22-1.21-.54-1.69-.94A4.14 4.14 0 0 1 5.27 12c0-.73.19-1.41.53-2.01C7.3 10.52 9.4 10.84 11.72 10.84h.28zm-8-.9v-1.73c1.36.67 3.15 1.14 5.09 1.28-.99.25-1.85.78-2.47 1.5-1.6-.23-2.97-.62-3.82-1.05zm0 5.1v-1.73c.96.48 2.29.89 3.82 1.12-.13.38-.2.78-.2 1.2 0 .42.07.82.2 1.2-1.53.23-2.86.64-3.82 1.12v-2.91zm16 4.73c-1.36.67-3.15 1.14-5.09 1.28.99-.25 1.85-.78 2.47-1.5 1.6.23 2.97.62 3.82 1.05v-2.56c-.96.48-2.29.89-3.82 1.12.13.38.2.78.2 1.2 0 .42-.07.82-.2 1.2 1.53.23 2.86.64 3.82 1.12v-1.91z" />
        </svg>
      );
    }

    // REST APIs
    if (normalized.includes("rest")) {
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-6 text-[#009688] dark:text-[#2DD4BF] transition-transform duration-200 group-hover:scale-110"
          aria-hidden="true"
        >
          <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
          <path d="m8 16-3 3 3 3" />
          <path d="m16 16 3 3-3 3" />
        </svg>
      );
    }

    // JWT / OAuth2
    if (normalized.includes("jwt") || normalized.includes("oauth")) {
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-6 text-[#EB5424] transition-transform duration-200 group-hover:scale-110"
          aria-hidden="true"
        >
          <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          <circle cx="12" cy="16" r="1.5" />
        </svg>
      );
    }

    // WebSockets
    if (normalized.includes("socket")) {
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-6 text-[#F59E0B] transition-transform duration-200 group-hover:scale-110"
          aria-hidden="true"
        >
          <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      );
    }

    // Microservices
    if (normalized.includes("microservice")) {
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-6 text-[#6366F1] transition-transform duration-200 group-hover:scale-110"
          aria-hidden="true"
        >
          <rect x="2" y="2" width="6" height="6" rx="1.5" />
          <rect x="16" y="2" width="6" height="6" rx="1.5" />
          <rect x="9" y="16" width="6" height="6" rx="1.5" />
          <path d="M5 8v4a2 2 0 0 0 2 2h2" />
          <path d="M19 8v4a2 2 0 0 1-2 2h-2" />
          <path d="M12 14v2" />
        </svg>
      );
    }

    // Message Queues
    if (normalized.includes("queue")) {
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-6 text-[#EC4899] transition-transform duration-200 group-hover:scale-110"
          aria-hidden="true"
        >
          <rect x="3" y="4" width="18" height="4" rx="1" />
          <rect x="3" y="10" width="18" height="4" rx="1" />
          <rect x="3" y="16" width="18" height="4" rx="1" />
          <path d="M8 8v2" />
          <path d="M16 14v2" />
        </svg>
      );
    }

    // NLP Pipelines
    if (normalized.includes("nlp")) {
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-6 text-[#8B5CF6] transition-transform duration-200 group-hover:scale-110"
          aria-hidden="true"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          <path d="M8 9h8" />
          <path d="M8 13h5" />
        </svg>
      );
    }

    // Prompt Engineering
    if (normalized.includes("prompt")) {
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-6 text-[#F59E0B] transition-transform duration-200 group-hover:scale-110"
          aria-hidden="true"
        >
          <polyline points="4 17 10 11 4 5" />
          <line x1="12" x2="20" y1="19" y2="19" />
          <path d="m18 7 1.5-3 1.5 3 3 1.5-3 1.5-1.5 3-1.5-3-3-1.5Z" />
        </svg>
      );
    }

    // RAG
    if (normalized === "rag") {
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-6 text-[#3B82F6] transition-transform duration-200 group-hover:scale-110"
          aria-hidden="true"
        >
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
          <path d="m9 10 2 2 4-4" />
          <path d="M12 17h4" />
        </svg>
      );
    }

    // Agentic AI
    if (normalized.includes("agent")) {
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-6 text-[#A855F7] transition-transform duration-200 group-hover:scale-110"
          aria-hidden="true"
        >
          <rect x="3" y="11" width="18" height="10" rx="3" />
          <circle cx="12" cy="5" r="2" />
          <path d="M12 7v4" />
          <line x1="8" y1="16" x2="8" y2="16.01" />
          <line x1="16" y1="16" x2="16" y2="16.01" />
          <path d="M9 19h6" />
        </svg>
      );
    }

    // Machine Learning
    if (normalized.includes("machine learning")) {
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-6 text-[#EC4899] transition-transform duration-200 group-hover:scale-110"
          aria-hidden="true"
        >
          <circle cx="6" cy="6" r="2.5" />
          <circle cx="6" cy="18" r="2.5" />
          <circle cx="18" cy="12" r="2.5" />
          <line x1="8.5" y1="7.2" x2="15.5" y2="10.8" />
          <line x1="8.5" y1="16.8" x2="15.5" y2="13.2" />
        </svg>
      );
    }

    // Responsive Design
    if (normalized.includes("responsive")) {
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-6 text-[#06B6D4] transition-transform duration-200 group-hover:scale-110"
          aria-hidden="true"
        >
          <rect width="18" height="14" x="3" y="3" rx="2" />
          <rect width="6" height="10" x="15" y="11" rx="1" />
          <line x1="3" y1="14" x2="15" y2="14" />
        </svg>
      );
    }

    // Room
    if (normalized === "room") {
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-6 text-[#3DDC84] transition-transform duration-200 group-hover:scale-110"
          aria-hidden="true"
        >
          <ellipse cx="12" cy="5" rx="8" ry="3" />
          <path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
          <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
        </svg>
      );
    }

    // MVVM
    if (normalized === "mvvm") {
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-6 text-[#4285F4] transition-transform duration-200 group-hover:scale-110"
          aria-hidden="true"
        >
          <rect x="2" y="3" width="6" height="6" rx="1" />
          <rect x="16" y="3" width="6" height="6" rx="1" />
          <rect x="9" y="15" width="6" height="6" rx="1" />
          <path d="M8 6h8" />
          <path d="m14 15 4-6" />
          <path d="m10 15-4-6" />
        </svg>
      );
    }

    // Fallback: Elegant Monogram / Code Bracket icon
    return (
      <span className="font-mono text-xs font-bold text-accent">
        {name.slice(0, 3)}
      </span>
    );
  };

  return (
    <div
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      onFocus={() => setShowTooltip(true)}
      onBlur={() => setShowTooltip(false)}
    >
      <button
        type="button"
        onClick={() => setShowTooltip((prev) => !prev)}
        className="group relative flex size-12 items-center justify-center rounded-xl border border-border/80 bg-bg-elevated transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:shadow-md focus-visible:outline-2 focus-visible:outline-accent active:translate-y-0"
        aria-label={name}
        title={name}
      >
        {renderIcon()}
      </button>

      {/* Floating Animated Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 4, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 2, scale: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="pointer-events-none absolute bottom-full left-1/2 z-30 mb-2 -translate-x-1/2 whitespace-nowrap"
            role="tooltip"
          >
            <div className="relative rounded-md border border-border bg-bg-elevated px-2.5 py-1 shadow-lg backdrop-blur-sm">
              <span className="font-mono text-[11px] font-semibold text-text">
                {name}
              </span>
              {/* Tooltip arrow */}
              <div
                className="absolute -bottom-1 left-1/2 size-2 -translate-x-1/2 rotate-45 border-b border-r border-border bg-bg-elevated"
                aria-hidden="true"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
