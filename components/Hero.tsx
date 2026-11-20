"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, FileText, Terminal } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/Button";
import { Avatar } from "@/components/ui/Avatar";

const STAGGER = 0.08;
const EASE = [0.22, 1, 0.36, 1] as const;

function fadeUp(i: number) {
  return {
    initial: { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.45, ease: EASE, delay: i * STAGGER },
  };
}

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Hero() {
  return (
    <section
      aria-label="Introduction"
      className="relative flex min-h-[92vh] items-center overflow-hidden border-b border-border/60 py-16 lg:py-24"
    >
      {/* ─── Architectural Drafting Grid Background ─── */}
      <div
        className="pointer-events-none absolute inset-0 drafting-grid"
        aria-hidden="true"
      />

      {/* ─── Content ─── */}
      <div className="relative z-10 mx-auto w-full max-w-[1120px] px-6 md:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          {/* ── Left Column: Editorial & Statement ── */}
          <div className="flex flex-col items-start lg:col-span-7">
            {/* Technical Metadata Header */}
            <motion.div
              className="flex flex-wrap items-center gap-3 font-mono text-[12px] text-text-muted"
              {...fadeUp(0)}
            >
              <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-bg-elevated px-2.5 py-1">
                <span className="size-2 rounded-full bg-accent animate-pulse-dot" />
                <span>PUNE, IN [18.52° N, 73.85° E]</span>
              </span>
              <span className="hidden sm:inline text-border-strong">/</span>
              <span className="uppercase tracking-wider text-text-muted">
                Systems Engineer
              </span>
            </motion.div>

            {/* Headline: Human, Confident, Direct */}
            <motion.h1
              className="mt-6 font-heading text-[38px] font-bold leading-[1.08] tracking-[-0.03em] sm:text-[50px] lg:text-[62px] text-text"
              {...fadeUp(1)}
            >
              I build resilient AI systems — and fix things that break.
            </motion.h1>

            {/* Subhead / Bio summary */}
            <motion.p
              className="mt-5 text-[16px] leading-[1.7] text-text-muted sm:text-[18px]"
              {...fadeUp(2)}
            >
              Hi, I&rsquo;m <strong className="font-semibold text-text">{profile.name}</strong>. 
              Software engineer at Accenture working across AI workloads, Python backends, and cloud infrastructure. 
              When I step away from code, I&rsquo;m usually taking apart engines and electronics to understand how physical systems operate.
            </motion.p>

            {/* Action buttons */}
            <motion.div
              className="mt-8 flex flex-wrap items-center gap-3"
              {...fadeUp(3)}
            >
              <Button
                variant="primary"
                size="md"
                onClick={() => scrollTo("projects")}
              >
                <ArrowDown className="size-4" />
                Selected Work
              </Button>

              {profile.resumeUrl && (
                <Button
                  variant="secondary"
                  size="md"
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileText className="size-4" />
                  View Résumé
                </Button>
              )}

              {profile.socials.github && (
                <Button
                  variant="icon"
                  size="md"
                  href={profile.socials.github}
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="size-[17px]" />
                </Button>
              )}

              {profile.socials.linkedin && (
                <Button
                  variant="icon"
                  size="md"
                  href={profile.socials.linkedin}
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="size-[17px]" />
                </Button>
              )}
            </motion.div>
          </div>

          {/* ── Right Column: Workbench Spec / Telemetry Card ── */}
          <motion.div
            className="lg:col-span-5"
            {...fadeUp(2)}
          >
            <div className="relative rounded-xl border border-border bg-bg-elevated shadow-sm overflow-hidden technical-corner">
              {/* Card Terminal Header */}
              <div className="flex items-center justify-between border-b border-border bg-bg-subtle/50 px-4 py-2.5">
                <div className="flex items-center gap-2">
                  <Terminal className="size-3.5 text-accent" />
                  <span className="font-mono text-[11px] font-medium uppercase tracking-wider text-text-muted">
                    Workbench Telemetry
                  </span>
                </div>
                <span className="font-mono text-[10px] text-text-muted/60">
                  REF: MOHIT-ENG-2026
                </span>
              </div>

              {/* Card Body */}
              <div className="p-5 space-y-4">
                {/* Avatar & Identity summary */}
                <div className="flex items-center gap-4 pb-4 border-b border-border/60">
                  <Avatar
                    src={profile.avatar || undefined}
                    name={profile.name}
                    size="md"
                  />
                  <div>
                    <h3 className="font-heading font-semibold text-base text-text">
                      {profile.name}
                    </h3>
                    <p className="font-mono text-[12px] text-text-muted">
                      Accenture • Pune, India
                    </p>
                    <span className="mt-1 inline-flex items-center gap-1.5 font-mono text-[11px] text-accent">
                      <span className="size-1.5 rounded-full bg-accent" />
                      {profile.status}
                    </span>
                  </div>
                </div>

                {/* Technical Specs */}
                <div className="space-y-3 font-mono text-[12px]">
                  <div>
                    <span className="text-text-muted block text-[11px] uppercase tracking-wider">
                      $ current_focus
                    </span>
                    <span className="text-text font-medium">
                      distributed AI task queues & serverless inference
                    </span>
                  </div>

                  <div>
                    <span className="text-text-muted block text-[11px] uppercase tracking-wider">
                      $ core_stack
                    </span>
                    <span className="text-text">
                      Python • FastAPI • Docker • AWS • Redis • Compose
                    </span>
                  </div>

                  <div>
                    <span className="text-text-muted block text-[11px] uppercase tracking-wider">
                      $ beyond_code
                    </span>
                    <span className="text-text-muted">
                      motorcycle engines, circuit repair & urban systems
                    </span>
                  </div>
                </div>

                {/* Footer spec bar */}
                <div className="pt-2 border-t border-border/50 flex items-center justify-between text-[11px] font-mono text-text-muted/70">
                  <span>DISCIPLINE: BACKEND & CLOUD</span>
                  <span className="text-accent">● LIVE</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
