"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ExternalLink, ShieldCheck, Sparkles } from "lucide-react";
import { profile, CertificationItem } from "@/data/profile";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { containerVariants, itemVariants, viewport } from "@/lib/motion";
import { IssuerLogo } from "@/components/ui/IssuerLogo";
import { CertificateModal } from "@/components/CertificateModal";

export function Certifications() {
  const [expanded, setExpanded] = useState(false);
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  const topCerts = profile.certifications.top as unknown as CertificationItem[];
  const allGroups = profile.certifications.all as unknown as { category: string; items: CertificationItem[] }[];
  const totalCount = allGroups.reduce((acc, g) => acc + g.items.length, 0);

  if (topCerts.length === 0) return null;

  const handleCertClick = (cert: CertificationItem, e: React.MouseEvent) => {
    // If a direct credential URL is provided, open it directly in a new tab
    if (cert.credentialUrl) {
      window.open(cert.credentialUrl, "_blank", "noopener,noreferrer");
      return;
    }
    // Otherwise open the detail modal
    setSelectedCert(cert);
  };

  return (
    <>
      <section
        id="certifications"
        aria-labelledby="certifications-heading"
        className="section-padding relative"
      >
        <div className="mx-auto max-w-[1120px] px-6 md:px-8">
          <SectionHeader
            id="certifications"
            label="certifications & credentials"
            title="Badges & Certifications"
          />

          <p className="mb-6 -mt-6 text-[13px] text-text-muted flex items-center gap-2 font-mono">
            <ShieldCheck className="size-3.5 text-accent shrink-0" />
            Verified professional credentials. Click any badge to view verification in a new tab.
          </p>

          {/* ─── Top Badges (2-column compact grid) ─── */}
          <motion.div
            className="grid grid-cols-1 gap-3 md:grid-cols-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {topCerts.map((cert) => {
              const hasUrl = Boolean(cert.credentialUrl);
              return (
                <motion.div
                  key={cert.name}
                  variants={itemVariants}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.15 }}
                >
                  <Card
                    onClick={(e) => handleCertClick(cert, e)}
                    className="group relative flex items-center justify-between gap-3 p-3 sm:p-3.5 cursor-pointer border border-border bg-bg-elevated transition-all duration-200 hover:border-accent/60 hover:shadow-sm"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      {/* Issuer / Badge Logo */}
                      <IssuerLogo
                        issuer={cert.issuer}
                        badgeUrl={cert.badgeUrl || cert.image}
                        name={cert.name}
                      />

                      {/* Credential Details */}
                      <div className="min-w-0">
                        <h3 className="truncate font-heading text-[14px] font-semibold text-text transition-colors group-hover:text-accent">
                          {cert.name}
                        </h3>
                        <div className="mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-0.5 font-mono text-[11px] text-text-muted">
                          <span className="font-medium text-text-muted/90">{cert.issuer}</span>
                          <span>•</span>
                          <span>{cert.date}</span>
                          {cert.credentialId && (
                            <>
                              <span className="hidden sm:inline">•</span>
                              <span className="hidden sm:inline text-text-muted/60">ID: {cert.credentialId}</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* External Link or View Indicator */}
                    <div className="shrink-0 flex items-center pr-1">
                      {hasUrl ? (
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="rounded-md p-1.5 text-text-muted transition-colors group-hover:text-accent group-hover:bg-bg-subtle"
                          title="Open credential in new tab"
                        >
                          <ExternalLink className="size-4" />
                        </a>
                      ) : (
                        <span className="text-xs font-mono text-text-muted/50 group-hover:text-accent transition-colors">
                          ↗
                        </span>
                      )}
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          {/* ─── Expandable Full Credentials List (2-column compact) ─── */}
          {totalCount > 0 && (
            <div className="mt-8">
              <button
                onClick={() => setExpanded((v) => !v)}
                className="group inline-flex cursor-pointer items-center gap-2 rounded-lg border border-border bg-bg-elevated px-4 py-2 font-mono text-[12px] font-semibold uppercase tracking-wider text-text-muted transition-all duration-150 hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-accent"
                aria-expanded={expanded}
              >
                {expanded ? "Collapse" : "Browse All"} ({totalCount} total)
                <ChevronDown
                  className={`size-3.5 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
                  aria-hidden="true"
                />
              </button>

              <AnimatePresence>
                {expanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="mt-6 space-y-8">
                      {allGroups.map((group) => (
                        <div key={group.category}>
                          <div className="mb-3 flex items-center justify-between border-b border-border/60 pb-1.5">
                            <h4 className="font-mono text-[11px] font-bold uppercase tracking-wider text-text-muted">
                              {group.category}
                            </h4>
                            <span className="font-mono text-[11px] text-text-muted/60">
                              {group.items.length} {group.items.length === 1 ? "credential" : "credentials"}
                            </span>
                          </div>

                          <div className="grid grid-cols-1 gap-2.5 md:grid-cols-2">
                            {[...group.items].map((cert) => {
                              const hasUrl = Boolean(cert.credentialUrl);
                              return (
                                <div
                                  key={cert.name}
                                  onClick={(e) => handleCertClick(cert, e)}
                                  className="group flex items-center justify-between gap-3 rounded-lg border border-border bg-bg-elevated p-2.5 sm:p-3 cursor-pointer transition-all duration-150 hover:border-accent/60 hover:bg-bg-subtle/30"
                                >
                                  <div className="flex items-center gap-2.5 min-w-0">
                                    <IssuerLogo
                                      issuer={cert.issuer}
                                      badgeUrl={cert.badgeUrl || cert.image}
                                      name={cert.name}
                                      className="size-8 text-xs"
                                    />
                                    <div className="min-w-0">
                                      <p className="truncate text-[13px] font-medium text-text transition-colors group-hover:text-accent">
                                        {cert.name}
                                      </p>
                                      <p className="font-mono text-[11px] text-text-muted">
                                        {cert.issuer} • {cert.date}
                                      </p>
                                    </div>
                                  </div>

                                  <div className="shrink-0 pl-1">
                                    {hasUrl ? (
                                      <a
                                        href={cert.credentialUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                        className="text-text-muted transition-colors group-hover:text-accent"
                                        title="Open credential in new tab"
                                      >
                                        <ExternalLink className="size-3.5" />
                                      </a>
                                    ) : (
                                      <span className="text-[11px] font-mono text-text-muted/40 group-hover:text-accent">
                                        ↗
                                      </span>
                                    )}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>
      </section>

      {/* Interactive Certificate Modal (for inspecting details if no direct URL, or as fallback) */}
      <CertificateModal
        key={selectedCert?.name ?? "none"}
        cert={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </>
  );
}
