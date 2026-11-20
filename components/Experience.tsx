"use client";

import React from "react";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { containerVariants, itemVariants, viewport } from "@/lib/motion";

export function Experience() {
  const expList = [...profile.experience];

  return (
    <section id="experience" aria-labelledby="experience-heading" className="section-padding">
      <div className="mx-auto max-w-[1120px] px-6 md:px-8">
        <SectionHeader id="experience" label="experience" title="Where I've worked" />

        <motion.div
          className="flex flex-col gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {expList.map((exp) => (
            <motion.div key={`${exp.company}-${exp.role}`} variants={itemVariants}>
              <Card className="p-5 md:p-6">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-heading text-[18px] font-semibold text-text md:text-[20px]">
                    {exp.company}
                  </h3>
                  <span className="shrink-0 font-mono text-[13px] text-text-muted">
                    {exp.period}
                  </span>
                </div>

                <p className="mt-1 text-[14px] font-medium text-text-muted">
                  {exp.role}
                  {exp.type && (
                    <span className="ml-2 font-normal text-text-muted/70">· {exp.type}</span>
                  )}
                </p>

                {exp.location && (
                  <p className="mt-0.5 text-[13px] text-text-muted/70">{exp.location}</p>
                )}

                {exp.description && (
                  <p className="mt-3 text-[14px] leading-relaxed text-text-muted md:text-[15px]">
                    {exp.description}
                  </p>
                )}

                {exp.highlights.length > 0 && (
                  <ul className="mt-3 flex flex-col gap-1.5">
                    {[...exp.highlights].map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2 text-[13px] leading-snug text-text-muted"
                      >
                        <span
                          className="mt-[6px] inline-block h-1 w-1 shrink-0 rounded-full bg-accent"
                          aria-hidden="true"
                        />
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
