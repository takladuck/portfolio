"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { Menu, X, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { profile } from "@/data/profile";

/* ------------------------------------------------------------------ */
/*  Constants                                                          */
/* ------------------------------------------------------------------ */

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
] as const;

const SECTION_IDS = NAV_LINKS.map((l) => l.href.slice(1));

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useScrollSpy(SECTION_IDS);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  /* ---- Scroll detection ---- */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll(); // initial check
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ---- Lock body scroll when mobile menu is open ---- */
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  /* ---- Focus trap (basic): focus close button when menu opens, Escape closes ---- */
  useEffect(() => {
    if (mobileOpen) {
      closeButtonRef.current?.focus();

      const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setMobileOpen(false);
        }
      };
      window.addEventListener("keydown", onKeyDown);
      return () => window.removeEventListener("keydown", onKeyDown);
    }
  }, [mobileOpen]);

  const closeMobileMenu = useCallback(() => setMobileOpen(false), []);

  return (
    <>
      <header
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-border bg-bg/80 backdrop-blur-[12px]"
            : "bg-transparent"
        }`}
      >
        <nav
          className="mx-auto flex h-16 max-w-[1120px] items-center justify-between px-6 md:px-8"
          aria-label="Main navigation"
        >
          {/* ---- Logo / Name ---- */}
          <a
            href="#"
            className="font-heading text-lg font-bold tracking-tight text-text transition-colors
                       hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2
                       focus-visible:outline-accent"
          >
            Mohit
          </a>

          {/* ---- Desktop links ---- */}
          <ul className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map(({ label, href }) => {
              const sectionId = href.slice(1);
              const isActive = activeSection === sectionId;

              return (
                <li key={href}>
                  <a
                    href={href}
                    className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200
                      focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent
                      ${
                        isActive
                          ? "text-accent"
                          : "text-text-muted hover:text-text"
                      }`}
                  >
                    {label}
                    {/* Active indicator bar */}
                    {isActive && (
                      <motion.span
                        layoutId="navbar-active"
                        className="absolute right-3 bottom-0 left-3 h-0.5 rounded-full bg-accent"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* ---- Desktop right actions ---- */}
          <div className="hidden items-center gap-2 md:flex">
            <ThemeToggle />
            <a
              href={profile.resumeUrl || "/resume.pdf"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-3.5 py-1.5
                         text-xs font-mono font-semibold text-white transition-colors duration-150
                         hover:bg-accent-hover
                         focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <FileText size={13} />
              RESUME
            </a>
          </div>

          {/* ---- Mobile hamburger ---- */}
          <button
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation menu"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-text-muted
                       transition-colors hover:bg-bg-subtle hover:text-text md:hidden
                       focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <Menu size={22} />
          </button>
        </nav>
      </header>

      {/* ---- Mobile overlay menu ---- */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm md:hidden"
              onClick={closeMobileMenu}
              aria-hidden
            />

            {/* Panel */}
            <motion.div
              ref={mobileMenuRef}
              key="mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 350, damping: 35 }}
              className="fixed top-0 right-0 bottom-0 z-50 flex w-[min(320px,85vw)] flex-col
                         border-l border-border bg-bg-elevated shadow-2xl md:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
            >
              {/* Top bar */}
              <div className="flex h-16 items-center justify-between px-6">
                <span className="font-heading text-lg font-bold text-text">
                  Menu
                </span>
                <button
                  ref={closeButtonRef}
                  onClick={closeMobileMenu}
                  aria-label="Close navigation menu"
                  className="flex h-10 w-10 items-center justify-center rounded-lg text-text-muted
                             transition-colors hover:bg-bg-subtle hover:text-text
                             focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Links */}
              <nav className="flex-1 overflow-y-auto px-4 pt-2 pb-6">
                <ul className="flex flex-col gap-1">
                  {NAV_LINKS.map(({ label, href }) => {
                    const sectionId = href.slice(1);
                    const isActive = activeSection === sectionId;

                    return (
                      <li key={href}>
                        <a
                          href={href}
                          onClick={closeMobileMenu}
                          className={`flex min-h-[44px] items-center rounded-lg px-4 text-base font-medium
                            transition-colors duration-200
                            focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent
                            ${
                              isActive
                                ? "bg-accent-soft text-accent"
                                : "text-text-muted hover:bg-bg-subtle hover:text-text"
                            }`}
                        >
                          {label}
                        </a>
                      </li>
                    );
                  })}
                </ul>

                {/* Divider */}
                <div className="my-4 h-px bg-border" />

                {/* Resume */}
                <a
                  href={profile.resumeUrl || "/resume.pdf"}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobileMenu}
                  className="flex min-h-[44px] items-center justify-center gap-2 rounded-lg
                             bg-accent px-5 text-sm font-mono font-semibold text-white transition-colors
                             duration-150 hover:bg-accent-hover
                             focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  <FileText size={16} />
                  VIEW RÉSUMÉ
                </a>
              </nav>

              {/* Bottom: theme toggle */}
              <div className="border-t border-border px-6 py-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-text-muted">Theme</span>
                  <ThemeToggle />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
