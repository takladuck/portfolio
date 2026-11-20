"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Workflow, ArrowUpRight, Cpu, Lock } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { Button } from "@/components/ui/Button";
import { GithubIcon } from "@/components/ui/Icons";

type ProjectCardProps = {
  title: string;
  year: string;
  summary: string;
  highlights: string[];
  stack: string[];
  links: { github?: string; live?: string; closedSource?: boolean };
  closedSource?: boolean;
  image: string;
  onInspect?: () => void;
};

export function ProjectCard({
  title,
  year,
  summary,
  highlights,
  stack,
  links,
  closedSource,
  image,
  onInspect,
}: ProjectCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="h-full"
    >
      <div
        onClick={onInspect}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onInspect?.();
          }
        }}
        role="button"
        tabIndex={0}
        aria-label={`Inspect ${title} system architecture`}
        className="h-full text-left cursor-pointer focus:outline-none"
      >
        <Card className="group h-full flex flex-col overflow-hidden transition-[border-color,box-shadow] duration-200 hover:border-accent hover:shadow-md technical-corner">
          {/* Visual Header / Blueprint Schematic Preview */}
          <div className="relative aspect-[16/10] overflow-hidden bg-bg-subtle border-b border-border">
            {image && !imageError ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={image}
                alt={`Schematic of ${title}`}
                onError={() => setImageError(true)}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              />
            ) : (
              /* Architectural Blueprint Wireframe */
              <div
                className="relative flex h-full w-full flex-col justify-between p-6 bg-bg-elevated drafting-grid transition-colors group-hover:bg-bg-subtle/40"
                aria-hidden="true"
              >
                <div className="flex items-center justify-between font-mono text-[11px] text-text-muted">
                  <span className="flex items-center gap-1.5 font-medium text-accent">
                    <Cpu className="size-3.5" />
                    SCHEMATIC // SPEC-0{year.slice(-1)}
                  </span>
                  <span>{year}</span>
                </div>

                {/* Minimalist System Schematic Diagram */}
                <div className="my-auto py-2">
                  <h4 className="font-heading text-lg font-bold text-text group-hover:text-accent transition-colors">
                    {title}
                  </h4>
                  <div className="mt-2 flex items-center gap-1.5 font-mono text-[10px] text-text-muted">
                    <span className="rounded border border-border bg-bg px-2 py-0.5">INPUT</span>
                    <span>──&gt;</span>
                    <span className="rounded border border-accent/40 bg-accent/10 px-2 py-0.5 text-accent font-semibold">ENGINE</span>
                    <span>──&gt;</span>
                    <span className="rounded border border-border bg-bg px-2 py-0.5">OUTPUT</span>
                  </div>
                </div>

                <div className="flex items-center justify-between font-mono text-[10px] text-text-muted/70 pt-2 border-t border-border/50">
                  <span>CLICK TO INSPECT ARCHITECTURE</span>
                  <span className="text-accent">DETAILED VIEW ↗</span>
                </div>
              </div>
            )}

            {/* Quick Inspect Hover Badge */}
            <div className="absolute top-3 right-3 rounded-md bg-bg-elevated/90 border border-border backdrop-blur-sm px-2.5 py-1 font-mono text-[11px] text-text opacity-0 transition-opacity duration-150 group-hover:opacity-100 flex items-center gap-1.5 shadow-sm">
              <Workflow className="size-3 text-accent" />
              <span>Inspect Architecture</span>
              <ArrowUpRight className="size-3" />
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-1 flex-col gap-4 p-5 md:p-6">
            {/* Title + year */}
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="font-heading text-[19px] font-bold leading-tight text-text group-hover:text-accent transition-colors md:text-[21px]">
                {title}
              </h3>
              <span className="shrink-0 font-mono text-[12px] text-text-muted">
                {year}
              </span>
            </div>

            {/* Summary */}
            <p className="line-clamp-2 text-[14px] leading-relaxed text-text-muted">
              {summary}
            </p>

            {/* Highlights */}
            {highlights.length > 0 && (
              <ul className="flex flex-col gap-1.5" aria-label="Project highlights">
                {highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-2 text-[13px] leading-snug text-text-muted"
                  >
                    <span
                      className="mt-[6px] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                      aria-hidden="true"
                    />
                    {h}
                  </li>
                ))}
              </ul>
            )}

            {/* Stack chips */}
            {stack.length > 0 && (
              <div className="flex flex-wrap gap-1.5 pt-1">
                {stack.map((tech) => (
                  <Chip
                    key={tech}
                    label={tech}
                    className="px-2 py-0.5 text-[11px]"
                  />
                ))}
              </div>
            )}

            {/* Spacer */}
            <div className="flex-1" />

            {/* Links and Actions */}
            <div className="flex items-center justify-between gap-3 pt-3 border-t border-border/60">
              <div className="flex items-center gap-2">
                {links.github && (
                  <Button
                    variant="secondary"
                    size="sm"
                    href={links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <GithubIcon className="size-3.5" aria-hidden="true" />
                    Code
                  </Button>
                )}
                {(closedSource || links.closedSource) && (
                  <span
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border bg-bg-subtle text-text-muted font-mono text-[12px] font-medium"
                    title="Proprietary / Closed source application"
                  >
                    <Lock className="size-3 text-text-muted" aria-hidden="true" />
                    Closed source
                  </span>
                )}
                {links.live && (
                  <Button
                    variant="primary"
                    size="sm"
                    href={links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="size-3.5" aria-hidden="true" />
                    Live
                  </Button>
                )}
              </div>

              <span className="font-mono text-[12px] text-accent font-medium flex items-center gap-1 group-hover:underline">
                Architecture & specs →
              </span>
            </div>
          </div>
        </Card>
      </div>
    </motion.div>
  );
}
