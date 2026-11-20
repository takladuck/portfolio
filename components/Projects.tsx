"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight, Workflow, Lock } from "lucide-react";
import { profile, ProjectItem } from "@/data/profile";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Chip } from "@/components/ui/Chip";
import { ProjectCard } from "@/components/ProjectCard";
import { containerVariants, itemVariants, viewport } from "@/lib/motion";
import { ProjectModal } from "@/components/ProjectModal";

const featured = (profile.projects.filter((p) => p.featured) as unknown) as ProjectItem[];
const other = (profile.projects.filter((p) => !p.featured) as unknown) as ProjectItem[];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <>
      <section
        id="projects"
        aria-labelledby="projects-heading"
        className="section-padding relative"
      >
        <div className="mx-auto max-w-[1120px] px-6 md:px-8">
          <SectionHeader
            id="projects"
            label="selected work"
            title="Things I've built"
          />

          <p className="mb-6 -mt-6 text-[14px] text-text-muted flex items-center gap-2 font-mono text-[12px]">
            <span className="text-accent font-bold">{"//"}</span>
            Click on any project to inspect system architecture, pipeline specs, and stack rationale.
          </p>

          {/* Featured projects grid */}
          <motion.div
            className="grid grid-cols-1 gap-8 md:grid-cols-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {featured.map((project) => (
              <motion.div key={project.title} variants={itemVariants}>
                <ProjectCard
                  title={project.title}
                  year={project.year}
                  summary={project.summary}
                  highlights={[...project.highlights]}
                  stack={[...project.stack]}
                  links={{ ...project.links }}
                  closedSource={"closedSource" in project ? Boolean(project.closedSource) : false}
                  image={project.image}
                  onInspect={() => setSelectedProject(project as unknown as ProjectItem)}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Non-featured projects */}
          {other.length > 0 && (
            <motion.div
              className="mt-16"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              <div className="flex items-center justify-between mb-6">
                <motion.h3
                  variants={itemVariants}
                  className="font-heading text-[20px] font-semibold text-text md:text-[24px]"
                >
                  More Projects
                </motion.h3>
                <span className="font-mono text-xs text-text-muted">
                  Click to inspect architecture
                </span>
              </div>

              <div className="divide-y divide-border rounded-2xl border border-border bg-bg-elevated overflow-hidden">
                {other.map((project) => (
                  <motion.div
                    key={project.title}
                    variants={itemVariants}
                    onClick={() => setSelectedProject(project as unknown as ProjectItem)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setSelectedProject(project as unknown as ProjectItem);
                      }
                    }}
                    className="group flex flex-col gap-3 px-5 py-4 md:flex-row md:items-center md:gap-6 md:px-6 cursor-pointer transition-colors hover:bg-bg-subtle/60 focus:bg-bg-subtle/80 focus:outline-none"
                  >
                    {/* Title + summary */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline gap-3">
                        <span className="font-heading text-[15px] font-semibold text-text group-hover:text-accent transition-colors md:text-[16px]">
                          {project.title}
                        </span>
                        <span className="shrink-0 font-mono text-[12px] text-text-muted">
                          {project.year}
                        </span>
                      </div>
                      <p className="mt-0.5 line-clamp-1 text-[13px] text-text-muted md:text-[14px]">
                        {project.summary}
                      </p>
                    </div>

                    {/* Stack chips */}
                    <div className="hidden flex-wrap gap-1.5 md:flex">
                      {project.stack.slice(0, 4).map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          className="px-2 py-0.5 text-[11px]"
                        />
                      ))}
                    </div>

                    {/* Inspect indicator */}
                    <div className="flex items-center gap-3 shrink-0">
                      <span className="hidden sm:inline-flex items-center gap-1 font-mono text-[12px] text-accent opacity-0 transition-opacity group-hover:opacity-100">
                        <Workflow className="size-3" />
                        Inspect ↗
                      </span>

                      {/* Action Links */}
                      {project.links.live && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex shrink-0 items-center gap-1.5 text-[13px] font-medium text-accent transition-colors duration-200 hover:text-accent-hover"
                          aria-label={`View ${project.title} live demo`}
                        >
                          <ExternalLink className="size-3.5" aria-hidden="true" />
                          <span>Live</span>
                        </a>
                      )}

                      {/* GitHub link or Closed source badge */}
                      {project.links.github ? (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex shrink-0 items-center gap-1.5 text-[13px] font-medium text-text-muted transition-colors duration-200 hover:text-accent"
                          aria-label={`View ${project.title} source code on GitHub`}
                        >
                          <ExternalLink className="size-3.5" aria-hidden="true" />
                          <span className="md:hidden">Code</span>
                        </a>
                      ) : project.closedSource || project.links.closedSource ? (
                        <span className="inline-flex shrink-0 items-center gap-1 text-[12px] font-mono font-medium text-text-muted">
                          <Lock className="size-3 text-text-muted" aria-hidden="true" />
                          <span className="hidden sm:inline">Closed source</span>
                        </span>
                      ) : null}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* View all on GitHub */}
          {profile.socials.github && (
            <motion.div
              className="mt-10 flex justify-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-2 font-mono text-[14px] font-medium text-text-muted transition-colors duration-200 hover:text-accent"
              >
                View all on GitHub
                <ArrowRight
                  className="size-4 transition-transform duration-200 group-hover/link:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
            </motion.div>
          )}
        </div>
      </section>

      {/* Project Deep Dive Modal */}
      <ProjectModal
        key={selectedProject?.title ?? "none"}
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
