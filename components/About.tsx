"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Briefcase, Mail, Wrench, Cpu } from "lucide-react";
import { profile } from "@/data/profile";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { containerVariants, itemVariants, viewport } from "@/lib/motion";

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="section-padding">
      <div className="mx-auto max-w-[1120px] px-6 md:px-8">
        <SectionHeader id="about" label="about me" title="Engineering philosophy" />

        <motion.div
          className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {/* Main narrative */}
          <motion.div className="lg:col-span-7 space-y-6" variants={itemVariants}>
            <p className="text-[17px] leading-[1.75] text-text">
              {profile.about}
            </p>

            {/* Engineering principles grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
              <div className="rounded-lg border border-border bg-bg-elevated p-4">
                <div className="flex items-center gap-2 mb-2 font-mono text-[12px] text-accent uppercase tracking-wider font-semibold">
                  <Cpu className="size-3.5" />
                  Systems Perspective
                </div>
                <p className="text-[13px] leading-relaxed text-text-muted">
                  End-to-end ownership from distributed concurrency and failover architecture down to database query latency and container deployment.
                </p>
              </div>

              <div className="rounded-lg border border-border bg-bg-elevated p-4">
                <div className="flex items-center gap-2 mb-2 font-mono text-[12px] text-accent uppercase tracking-wider font-semibold">
                  <Wrench className="size-3.5" />
                  Mechanical Curiosity
                </div>
                <p className="text-[13px] leading-relaxed text-text-muted">
                  Curiosity for how things function under the hood — whether troubleshooting an asyncio deadlock or inspecting tolerance in a physical laser cutter.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Quick facts spec sheet */}
          <motion.div className="lg:col-span-5" variants={itemVariants}>
            <Card className="p-6 technical-corner">
              <h3 className="mb-4 font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-text-muted border-b border-border/80 pb-2">
                Operator Specifications
              </h3>
              <ul className="flex flex-col gap-3.5">
                {profile.location && (
                  <li className="flex items-center gap-3 text-[14px] text-text">
                    <MapPin className="size-4 shrink-0 text-accent" aria-hidden="true" />
                    <span>{profile.location}</span>
                  </li>
                )}
                {profile.role && (
                  <li className="flex items-center gap-3 text-[14px] text-text">
                    <Briefcase className="size-4 shrink-0 text-accent" aria-hidden="true" />
                    <span>{profile.role}</span>
                  </li>
                )}
                {profile.status && (
                  <li className="flex items-center gap-3 text-[14px]">
                    <StatusBadge
                      status={profile.status}
                      className="border border-border bg-bg-subtle"
                    />
                  </li>
                )}
                {profile.email && (
                  <li className="flex items-center gap-3 text-[14px] text-text">
                    <Mail className="size-4 shrink-0 text-accent" aria-hidden="true" />
                    <a
                      href={`mailto:${profile.email}`}
                      className="font-mono text-xs text-text hover:text-accent transition-colors underline underline-offset-4"
                    >
                      {profile.email}
                    </a>
                  </li>
                )}
              </ul>

              <div className="mt-6 pt-4 border-t border-border/60 font-mono text-[11px] text-text-muted/80">
                <span className="block text-accent font-semibold mb-1">{"// "}EDUCATION & DEGREE</span>
                B.Tech Computer Science (KIIT, CGPA 8.83) • Minor in Financial Economics
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
