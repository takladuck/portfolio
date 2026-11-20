"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ExternalLink,
  Layers,
  Cpu,
  ArrowRight,
  Workflow,
  Sparkles,
  CheckCircle,
  Lock,
} from "lucide-react";
import { ProjectItem } from "@/data/profile";
import { Chip } from "@/components/ui/Chip";
import { Button } from "@/components/ui/Button";
import { GithubIcon } from "@/components/ui/Icons";

type ProjectModalProps = {
  project: ProjectItem | null;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeTab, setActiveTab] = useState<"architecture" | "stack" | "highlights">("architecture");
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setImageError(false);
    if (!project) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/75 backdrop-blur-md"
          aria-hidden="true"
        />

        {/* Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative z-10 flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-border bg-bg-elevated shadow-2xl"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b border-border/80 px-6 py-4 bg-bg-subtle/30">
            <div className="flex items-center gap-2.5">
              <span className="flex size-8 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Cpu className="size-4" />
              </span>
              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-text-muted">
                  System Architecture & Deep Dive
                </span>
                <p className="text-[13px] font-medium text-text">{project.title}</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="flex size-8 items-center justify-center rounded-lg text-text-muted transition-colors hover:bg-bg-subtle hover:text-text focus-visible:outline-2 focus-visible:outline-accent"
              aria-label="Close modal"
            >
              <X className="size-4" />
            </button>
          </div>

          {/* Modal Scrollable Body */}
          <div className="overflow-y-auto p-6 md:p-8 space-y-8">
            {/* Project Hero Row */}
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h3 id="project-modal-title" className="font-heading text-2xl md:text-3xl font-bold text-text">
                  {project.title}
                </h3>
                <span className="font-mono text-sm text-text-muted">{project.year}</span>
              </div>
              <p className="mt-2 text-base text-text-muted leading-relaxed max-w-3xl">
                {project.summary}
              </p>

              {/* Action Links & Tech Stack Badges */}
              <div className="mt-4 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-border/60">
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <Chip key={tech} label={tech} className="px-2.5 py-1 text-xs" />
                  ))}
                </div>

                <div className="flex items-center gap-2.5">
                  {project.links.github && (
                    <Button
                      variant="secondary"
                      size="sm"
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GithubIcon className="size-4" />
                      Source Code
                    </Button>
                  )}
                  {(project.closedSource || project.links.closedSource) && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border bg-bg-subtle text-text-muted font-mono text-xs font-medium">
                      <Lock className="size-3.5 text-text-muted" aria-hidden="true" />
                      Closed source
                    </span>
                  )}
                  {project.links.live && (
                    <Button
                      variant="primary"
                      size="sm"
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="size-4" />
                      Live Demo
                    </Button>
                  )}
                </div>
              </div>
            </div>

            {/* Visual Preview / Screenshot */}
            <div className="relative overflow-hidden rounded-xl border border-border/80 bg-bg-subtle shadow-inner">
              {project.image && !imageError ? (
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.title}
                    onError={() => setImageError(true)}
                    className="h-full w-full object-cover"
                  />
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-12 px-4 text-center bg-bg-subtle/50 drafting-grid">
                  <div className="relative mb-3 flex size-12 items-center justify-center rounded-xl bg-accent text-white shadow-md">
                    <Workflow className="size-6" />
                  </div>
                  <h4 className="font-heading font-semibold text-lg text-text">
                    {project.title} Visual Architecture
                  </h4>
                  <p className="mt-1 font-mono text-[12px] text-text-muted max-w-md">
                    Interactive engineering blueprint & working components
                  </p>
                  {project.image && imageError && (
                    <p className="mt-4 font-mono text-[11px] text-text-muted/70">
                      💡 Tip: Place your screenshot at <code className="text-accent">public{project.image}</code> to preview it here.
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Section Tabs */}
            <div>
              <div className="flex border-b border-border/80 gap-6">
                <button
                  onClick={() => setActiveTab("architecture")}
                  className={`relative pb-3 font-mono text-[13px] font-medium transition-colors ${
                    activeTab === "architecture"
                      ? "text-accent"
                      : "text-text-muted hover:text-text"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Workflow className="size-4" />
                    How It Works (Architecture)
                  </span>
                  {activeTab === "architecture" && (
                    <motion.div
                      layoutId="activeTabUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent"
                    />
                  )}
                </button>

                <button
                  onClick={() => setActiveTab("stack")}
                  className={`relative pb-3 font-mono text-[13px] font-medium transition-colors ${
                    activeTab === "stack"
                      ? "text-accent"
                      : "text-text-muted hover:text-text"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Layers className="size-4" />
                    Inside the Tech Stack
                  </span>
                  {activeTab === "stack" && (
                    <motion.div
                      layoutId="activeTabUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent"
                    />
                  )}
                </button>

                <button
                  onClick={() => setActiveTab("highlights")}
                  className={`relative pb-3 font-mono text-[13px] font-medium transition-colors ${
                    activeTab === "highlights"
                      ? "text-accent"
                      : "text-text-muted hover:text-text"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Sparkles className="size-4" />
                    Core Engineering Highlights
                  </span>
                  {activeTab === "highlights" && (
                    <motion.div
                      layoutId="activeTabUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent"
                    />
                  )}
                </button>
              </div>

              {/* Tab Contents */}
              <div className="pt-6">
                {/* 1. Working Architecture */}
                {activeTab === "architecture" && (
                  <div className="space-y-6">
                    {project.architecture && (
                      <div className="rounded-xl border border-accent/20 bg-accent/5 p-4 text-[14px] leading-relaxed text-text md:text-[15px]">
                        <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold block mb-1">
                          Architecture Summary
                        </span>
                        {project.architecture}
                      </div>
                    )}

                    {project.architectureSteps && project.architectureSteps.length > 0 ? (
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {project.architectureSteps.map((stepItem, idx) => (
                          <div
                            key={stepItem.title}
                            className="relative flex flex-col justify-between rounded-xl border border-border bg-bg p-4 transition-all hover:border-accent/40"
                          >
                            <div>
                              <div className="flex items-center justify-between mb-2">
                                <span className="flex size-6 items-center justify-center rounded bg-bg-subtle font-mono text-xs font-semibold text-accent">
                                  {stepItem.step || `0${idx + 1}`}
                                </span>
                                <ArrowRight className="size-3.5 text-text-muted/40" />
                              </div>
                              <h5 className="font-heading font-semibold text-[15px] text-text">
                                {stepItem.title}
                              </h5>
                              <p className="mt-1 text-[13px] leading-relaxed text-text-muted">
                                {stepItem.detail}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm text-text-muted">
                        Detailed architecture walkthrough coming soon.
                      </p>
                    )}
                  </div>
                )}

                {/* 2. Inside the Tech Stack */}
                {activeTab === "stack" && (
                  <div className="space-y-4">
                    {project.techStackDetails && project.techStackDetails.length > 0 ? (
                      <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                        {project.techStackDetails.map((item) => (
                          <div
                            key={item.tech}
                            className="rounded-xl border border-border bg-bg p-4 transition-all hover:border-accent/40"
                          >
                            <div className="flex items-center gap-2 mb-1.5">
                              <span className="size-2 rounded-full bg-accent" />
                              <h5 className="font-heading font-semibold text-[14px] text-text">
                                {item.tech}
                              </h5>
                            </div>
                            <p className="text-[13px] leading-relaxed text-text-muted">
                              {item.role}
                            </p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                          <Chip key={tech} label={tech} className="px-3 py-1.5 text-xs" />
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* 3. Core Highlights */}
                {activeTab === "highlights" && (
                  <div className="space-y-3">
                    {project.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="flex items-start gap-3 rounded-xl border border-border bg-bg p-3.5"
                      >
                        <CheckCircle className="size-4 text-accent mt-0.5 shrink-0" />
                        <span className="text-[14px] leading-relaxed text-text">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="flex items-center justify-between border-t border-border px-6 py-4 bg-bg-subtle/20">
            <span className="font-mono text-[11px] text-text-muted/60">
              Esc to close • Click background to dismiss
            </span>

            <Button variant="secondary" size="sm" onClick={onClose}>
              Close Inspector
            </Button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
