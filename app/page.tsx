import { Navbar } from "@/components/Navbar";
import Hero from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Certifications } from "@/components/Certifications";
import { Interests } from "@/components/Interests";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <div id="top" />
        <Hero />
        <div className="section-divider" aria-hidden="true" />
        <About />
        <div className="section-divider" aria-hidden="true" />
        <Projects />
        <div className="section-divider" aria-hidden="true" />
        <Skills />
        <div className="section-divider" aria-hidden="true" />
        <Experience />
        <Education />
        <div className="section-divider" aria-hidden="true" />
        <Certifications />
        <div className="section-divider" aria-hidden="true" />
        <Interests />
        <div className="section-divider" aria-hidden="true" />
        <Contact />
      </main>
      <Footer />

      {/* JSON-LD Person schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: profile.name,
            jobTitle: profile.role,
            sameAs: [
              profile.socials.github,
              profile.socials.linkedin,
            ].filter(Boolean),
            address: {
              "@type": "PostalAddress",
              addressLocality: profile.location,
            },
          }),
        }}
      />
    </>
  );
}
