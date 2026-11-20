"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Award, CheckCircle2, ShieldCheck, Calendar } from "lucide-react";
import { CertificationItem } from "@/data/profile";
import { Chip } from "@/components/ui/Chip";
import { Button } from "@/components/ui/Button";

type CertificateModalProps = {
  cert: CertificationItem | null;
  onClose: () => void;
};

export function CertificateModal({ cert, onClose }: CertificateModalProps) {
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    if (!cert) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [cert, onClose]);

  if (!cert) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
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

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative z-10 flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-border bg-bg-elevated shadow-2xl"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cert-modal-title"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between border-b border-border/80 px-6 py-4 bg-bg-subtle/30">
            <div className="flex items-center gap-2.5">
              <span className="flex size-8 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Award className="size-4" />
              </span>
              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-text-muted">
                  Credential Verification
                </span>
                <p className="text-[13px] font-medium text-text">{cert.issuer}</p>
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
          <div className="overflow-y-auto p-6 md:p-8 space-y-6">
            {/* Certificate Visual / Preview */}
            <div className="relative overflow-hidden rounded-xl border border-border bg-bg-subtle/60 drafting-grid p-6 text-center shadow-inner">
              {cert.image && !imageError ? (
                <div className="relative mx-auto max-h-[320px] overflow-hidden rounded-lg">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={cert.image}
                    alt={`${cert.name} Certificate`}
                    onError={() => setImageError(true)}
                    className="mx-auto max-h-[300px] w-auto object-contain rounded-lg shadow-md"
                  />
                </div>
              ) : (
                /* Industrial Precision Credential Badge */
                <div className="flex flex-col items-center justify-center py-8 px-4">
                  <div className="relative mb-4 flex size-14 items-center justify-center rounded-xl bg-accent text-white shadow-md">
                    <ShieldCheck className="size-8" />
                  </div>
                  <span className="font-mono text-[11px] font-semibold tracking-wider text-accent uppercase">
                    Verified Technical Credential
                  </span>
                  <h4 className="mt-1 text-lg font-heading font-semibold text-text max-w-lg">
                    {cert.name}
                  </h4>
                  <div className="mt-3 flex flex-wrap items-center justify-center gap-3 font-mono text-[12px] text-text-muted">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="size-3.5 text-success" />
                      Issued by {cert.issuer}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="size-3.5" />
                      {cert.date}
                    </span>
                  </div>

                  {cert.credentialId && (
                    <div className="mt-4 rounded-md border border-border/80 bg-bg px-3 py-1 font-mono text-[11px] text-text-muted">
                      ID: {cert.credentialId}
                    </div>
                  )}

                  {cert.image && imageError && (
                    <p className="mt-4 font-mono text-[11px] text-text-muted/70">
                      💡 Tip: Place your certificate file at <code className="text-accent">public{cert.image}</code> to display it here.
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Title & Metadata */}
            <div>
              <h3 id="cert-modal-title" className="text-xl md:text-2xl font-heading font-bold text-text">
                {cert.name}
              </h3>
              <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px] text-text-muted">
                <span>Issued by <strong className="font-medium text-text">{cert.issuer}</strong></span>
                <span>•</span>
                <span>Date: <span className="font-mono">{cert.date}</span></span>
                {cert.credentialId && (
                  <>
                    <span>•</span>
                    <span className="font-mono">ID: {cert.credentialId}</span>
                  </>
                )}
              </div>
            </div>

            {/* Description / What this covers */}
            {cert.description && (
              <div className="space-y-2">
                <h4 className="font-mono text-[12px] font-medium uppercase tracking-wider text-text-muted">
                  About this credential
                </h4>
                <p className="text-[14px] leading-relaxed text-text-muted md:text-[15px]">
                  {cert.description}
                </p>
              </div>
            )}

            {/* Verified Skills */}
            {cert.skills && cert.skills.length > 0 && (
              <div className="space-y-2.5">
                <h4 className="font-mono text-[12px] font-medium uppercase tracking-wider text-text-muted">
                  Skills & Topics Verified
                </h4>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <Chip key={skill} label={skill} className="px-3 py-1 text-[12px]" />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Modal Footer */}
          <div className="flex items-center justify-between border-t border-border px-6 py-4 bg-bg-subtle/20">
            <span className="font-mono text-[11px] text-text-muted/60">
              Esc to close
            </span>

            <div className="flex items-center gap-3">
              {cert.credentialUrl && (
                <Button
                  variant="primary"
                  size="sm"
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="size-3.5" />
                  Verify Credential
                </Button>
              )}
              <Button variant="secondary" size="sm" onClick={onClose}>
                Done
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
