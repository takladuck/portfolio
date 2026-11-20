"use client";

import React from "react";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { containerVariants, itemVariants, viewport } from "@/lib/motion";

export function Interests() {
  const interests = [...profile.interests];
  if (interests.length === 0) return null;

  return (
    <section id="interests" aria-labelledby="interests-heading" className="section-padding">
      <div className="mx-auto max-w-[1120px] px-6 md:px-8">
        <SectionHeader id="interests" label="beyond code" title="Things I'm into" />

        {profile.interestsBlurb && (
          <motion.p
            className="mb-8 max-w-prose text-[15px] leading-relaxed text-text-muted md:text-[16px]"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {profile.interestsBlurb}
          </motion.p>
        )}

        <motion.div
          className="flex flex-wrap gap-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {interests.map(({ label, emoji }) => (
            <motion.span
              key={label}
              variants={itemVariants}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-bg-subtle px-4 py-2 text-[14px] font-medium text-text transition-colors hover:border-accent/30 hover:bg-accent-soft"
            >
              <span aria-hidden="true">{emoji}</span>
              {label}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
