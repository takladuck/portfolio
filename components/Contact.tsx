"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Copy, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { profile } from "@/data/profile";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Toast, useToast } from "@/components/ui/Toast";

export function Contact() {
  const { toast, showToast } = useToast();

  const handleCopyEmail = async () => {
    if (!profile.email) return;
    try {
      await navigator.clipboard.writeText(profile.email);
      showToast("Copied ✓");
    } catch {
      showToast("Failed to copy");
    }
  };

  return (
    <section id="contact" aria-labelledby="contact-heading" className="section-padding">
      <div className="mx-auto max-w-[1120px] px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* Architectural structural container */}
          <div className="rounded-2xl border border-border-strong bg-bg-elevated overflow-hidden technical-corner shadow-sm">
            <div className="px-6 py-12 text-center md:px-12 md:py-16">
              <SectionHeader
                id="contact"
                label="get in touch"
                title="Let's build something together."
                className="mb-4"
              />

              <p className="mx-auto mb-8 max-w-md text-[15px] text-text-muted md:text-[16px]">
                Always happy to chat about engineering, projects, or just cool stuff.
              </p>

              <div className="flex flex-col items-center gap-4">
                {/* Primary CTA */}
                {profile.email ? (
                  <div className="flex flex-col items-center gap-2">
                    <Button
                      variant="primary"
                      size="lg"
                      href={`mailto:${profile.email}`}
                    >
                      <Mail className="size-4" />
                      Get in touch
                    </Button>
                    <span className="font-mono text-[13px] text-text-muted">
                      {profile.email}
                    </span>
                  </div>
                ) : (
                  <Button
                    variant="primary"
                    size="lg"
                    href={profile.socials.linkedin}
                  >
                    <LinkedinIcon className="size-4" />
                    Reach out on LinkedIn
                    <ArrowUpRight className="size-3.5" />
                  </Button>
                )}

                {/* Secondary buttons row */}
                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  {profile.socials.github && (
                    <Button variant="secondary" size="md" href={profile.socials.github}>
                      <GithubIcon className="size-4" />
                      GitHub
                    </Button>
                  )}

                  {profile.socials.linkedin && profile.email && (
                    <Button variant="secondary" size="md" href={profile.socials.linkedin}>
                      <LinkedinIcon className="size-4" />
                      LinkedIn
                    </Button>
                  )}

                  {profile.email && (
                    <Button
                      variant="ghost"
                      size="md"
                      onClick={handleCopyEmail}
                      aria-label="Copy email address"
                    >
                      <Copy className="size-4" />
                      Copy email
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <Toast message={toast.message} visible={toast.visible} />
    </section>
  );
}
