"use client";

import React from "react";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { containerVariants, itemVariants, viewport } from "@/lib/motion";

export function Education() {
  const educationList = [...profile.education];
  if (educationList.length === 0) return null;

  return (
    <section id="education" aria-labelledby="education-heading" className="section-padding">
      <div className="mx-auto max-w-[1120px] px-6 md:px-8">
        <SectionHeader id="education" label="education" title="Where I studied" />

        <motion.div
          className="relative ml-4 border-l-2 border-border pl-8 md:ml-8 md:pl-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {educationList.map((edu, i) => (
            <motion.div
              key={edu.school}
              variants={itemVariants}
              className={`relative ${i !== profile.education.length - 1 ? "pb-10" : ""}`}
            >
              {/* Timeline dot */}
              <span
                className="absolute -left-[calc(2rem+5px)] top-1 size-2.5 rounded-full border-2 border-accent bg-bg md:-left-[calc(3rem+5px)]"
                aria-hidden="true"
              />

              <div>
                <h3 className="font-heading text-[17px] font-semibold text-text md:text-[19px]">
                  {edu.school}
                </h3>

                <p className="mt-1 text-[14px] font-medium text-text md:text-[15px]">
                  {edu.degree}
                  {"minor" in edu && edu.minor && (
                    <span className="font-normal text-text-muted"> · {edu.minor}</span>
                  )}
                </p>

                <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1">
                  <span className="font-mono text-[13px] text-text-muted">{edu.period}</span>
                  {edu.grade && (
                    <span className="font-mono text-[13px] font-medium text-accent">
                      {edu.grade}
                    </span>
                  )}
                </div>

                {edu.highlights.length > 0 && (
                  <ul className="mt-2.5 flex flex-col gap-1">
                    {[...edu.highlights].map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2 text-[13px] leading-snug text-text-muted"
                      >
                        <span
                          className="mt-[6px] inline-block h-1 w-1 shrink-0 rounded-full bg-accent/50"
                          aria-hidden="true"
                        />
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
