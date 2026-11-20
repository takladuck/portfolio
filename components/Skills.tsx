"use client";

import React from "react";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { TechBadge } from "@/components/ui/TechBadge";
import { containerVariants, itemVariants, viewport } from "@/lib/motion";

export function Skills() {
  const categories = Object.entries(profile.skills);
  if (categories.length === 0) return null;

  return (
    <section id="skills" aria-labelledby="skills-heading" className="section-padding">
      <div className="mx-auto max-w-[1120px] px-6 md:px-8">
        <SectionHeader id="skills" label="skills & tools" title="What I work with" />

        <p className="mb-6 -mt-6 text-[13px] text-text-muted flex items-center gap-2 font-mono">
          <span className="text-accent font-bold">{"//"}</span>
          Hover over any logo to reveal the technology name.
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map(([category, skills]) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
            >
              <Card className="h-full p-5">
                <div className="mb-3.5 flex items-center justify-between border-b border-border/50 pb-2">
                  <h3 className="font-mono text-[12px] font-medium uppercase tracking-[0.08em] text-text-muted">
                    {category}
                  </h3>
                  <span className="font-mono text-[11px] text-text-muted/60">
                    {skills.length} tools
                  </span>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {[...skills].map((skill) => (
                    <TechBadge key={skill} name={skill} />
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Soft skills */}
        {profile.softSkills.length > 0 && (
          <motion.div
            className="mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <p className="mb-3 font-mono text-[12px] font-medium uppercase tracking-[0.08em] text-text-muted">
              Also:
            </p>
            <div className="flex flex-wrap gap-2">
              {[...profile.softSkills].map((skill) => (
                <Chip
                  key={skill}
                  label={skill}
                  className="border-transparent bg-bg-subtle/60 text-text-muted"
                />
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
