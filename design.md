# DESIGN.md: Personal Portfolio Website

> Instructions for the AI agent building this site. Read the whole file before writing code. Follow it closely, and where it is silent, use good judgment in the spirit of the "Vibe" section.

---

## 1. Project Overview

**What:** A single-page personal portfolio website for a job seeker (student / early-career developer).

**Goal:** Make a recruiter, hiring manager, or startup founder understand who I am, what I've built, and how to contact me within 30 seconds, and want to reach out.

**Audience:** Startup recruiters, engineering managers, founders, and technical interviewers. Many will view it on mobile after clicking a LinkedIn link.

**Primary call to action:** Contact me / view my resume.
**Secondary calls to action:** Open my GitHub, open my LinkedIn, view project demos.

---

## 2. Vibe and Design Principles

**One-line brief:** *Startup-professional, not corporate-professional.* Think Linear, Vercel, Raycast, Stripe's newer pages, and a confident young founder's personal site.

| Do | Don't |
|---|---|
| Generous whitespace, big confident type | Stock photos, handshake imagery, clip art |
| Subtle gradients, soft glows, glassy cards | Heavy drop shadows, skeuomorphism |
| Short, direct, human copy | Corporate buzzwords ("synergy", "results-driven professional") |
| Smooth, restrained motion | Flashy, distracting animation, auto-playing anything |
| One accent color used with discipline | Rainbow palettes |
| Real projects with real links | Lorem ipsum or fake placeholder content left in |

**Principles**
1. **Clarity first.** Every section answers one question for the recruiter.
2. **Show, don't tell.** Projects and links beat adjectives.
3. **Fast and light.** It should feel instant.
4. **Personality in the details.** Micro-interactions, a witty line or two, a "currently" status. Never at the cost of readability.
5. **Both themes are first-class.** Dark and light must each look intentionally designed, not inverted.

---

## 3. Tech Stack (recommended)

- **Framework:** Next.js (App Router) + TypeScript, or Astro. Pick one and keep it simple.
- **Styling:** Tailwind CSS with CSS variables for theme tokens.
- **Animation:** Framer Motion (or CSS transitions where enough). Respect `prefers-reduced-motion`.
- **Icons:** `lucide-react` plus brand icons for GitHub and LinkedIn (`simple-icons` or inline SVG).
- **Fonts:** `next/font` or self-hosted (no render-blocking external requests).
- **Theme switching:** `next-themes` (or a small custom script), class-based (`.dark` on `<html>`).
- **Deployment:** Vercel or Netlify, with a static export if possible.
- **No backend needed.** The contact section uses a `mailto:` link and social links (optionally a form via Formspree or Resend later).

If the user prefers plain HTML/CSS/JS, that is acceptable. Keep the same design tokens and structure.

---

## 4. Content Data (single source of truth)

Put ALL personal content in one file, e.g. `/data/profile.ts` (or `profile.json`), so I can edit content without touching components. Fill in the placeholders marked `[[...]]`. If a value is missing, render the section gracefully without it, and never show a raw placeholder in the UI.

```ts
export const profile = {
  name: "[[Full Name]]",
  role: "[[e.g. Full-Stack Developer | CS Student]]",
  tagline: "[[One punchy sentence about what I build or care about]]",
  location: "[[City, Country]]",
  status: "[[e.g. Open to internships & full-time roles]]", // shows as a pulsing green dot badge
  email: "[[email@example.com]]",
  resumeUrl: "/resume.pdf",
  avatar: "/me.jpg", // optional; fall back to an initials monogram
  socials: {
    github: "https://github.com/[[username]]",
    linkedin: "https://www.linkedin.com/in/[[username]]",
    // optional: twitter/x, leetcode, medium, etc.
  },
  about: "[[2-4 sentences, first person, conversational, specific]]",
  education: [
    {
      school: "[[University / College]]",
      degree: "[[B.Tech in Computer Science]]",
      period: "[[2023 – 2027]]",
      grade: "[[CGPA 8.5/10 (optional)]]",
      highlights: ["[[Relevant coursework / achievements]]"],
    },
  ],
  projects: [
    {
      title: "[[Project name]]",
      summary: "[[1-2 lines: what it does and why it matters]]",
      impact: "[[Optional metric, e.g. 500+ users, 40% faster]]",
      stack: ["React", "Node.js", "PostgreSQL"],
      links: { live: "[[url]]", github: "[[url]]" },
      image: "/projects/[[name]].png", // optional
      featured: true,
    },
  ],
  skills: {
    Languages: ["[[Python]]", "[[JavaScript]]", "[[TypeScript]]"],
    Frontend: ["[[React]]", "[[Next.js]]", "[[Tailwind]]"],
    Backend: ["[[Node.js]]", "[[Express]]", "[[FastAPI]]"],
    "Data & Tools": ["[[PostgreSQL]]", "[[Git]]", "[[Docker]]"],
  },
  interests: ["[[Open source]]", "[[AI / ML]]", "[[Photography]]", "[[Chess]]"],
};
```

---

## 5. Design Tokens

Define as CSS variables on `:root` (light) and `.dark` (dark). Map them into the Tailwind config.

### 5.1 Color

Single accent hue: **electric indigo → violet**, with an optional secondary cyan used only in gradients.

| Token | Light | Dark |
|---|---|---|
| `--bg` | `#FAFAFB` | `#0A0A0F` |
| `--bg-elevated` (cards) | `#FFFFFF` | `#12121A` |
| `--bg-subtle` (sections, chips) | `#F1F1F5` | `#1A1A24` |
| `--border` | `#E4E4EC` | `#262633` |
| `--text` | `#0F0F14` | `#F4F4F8` |
| `--text-muted` | `#5B5B6B` | `#9A9AAE` |
| `--accent` | `#5B5BF0` | `#7C7CFF` |
| `--accent-hover` | `#4747D6` | `#9494FF` |
| `--accent-soft` (tinted bg) | `rgba(91,91,240,0.10)` | `rgba(124,124,255,0.14)` |
| `--success` (status dot) | `#16A34A` | `#34D399` |
| `--gradient-accent` | `linear-gradient(135deg, #5B5BF0, #A855F7)` | `linear-gradient(135deg, #7C7CFF, #C084FC)` |

Rules:
- Body text must meet **WCAG AA contrast (4.5:1)** in both themes. Verify it.
- Gradient is used sparingly: hero name highlight, primary button, thin dividers, and a soft background glow.
- Dark mode glow: a blurred radial gradient blob (accent at ~15-20% opacity) behind the hero. Light mode: a much subtler version (~8%).
- Add a very faint noise or dot-grid texture on the background (opacity ≤ 4%), optional.

### 5.2 Typography

- **Headings and display:** `Inter Tight`, `Geist`, or `Plus Jakarta Sans`, weights 600-700, tight letter-spacing (`-0.02em` to `-0.03em`).
- **Body:** `Inter` or `Geist Sans`, weight 400-500.
- **Mono accents** (tags, labels, dates, "currently" text): `JetBrains Mono` or `Geist Mono`.

| Role | Size (desktop / mobile) | Weight | Line height |
|---|---|---|---|
| Hero name | 72px / 40px | 700 | 1.05 |
| H2 section title | 40px / 28px | 650 | 1.15 |
| H3 card title | 22px / 20px | 600 | 1.3 |
| Body | 17px / 16px | 400 | 1.65 |
| Small / meta | 14px | 500 | 1.5 |
| Mono label | 12-13px, uppercase, `letter-spacing: 0.08em` | 500 | 1.4 |

Use `clamp()` for fluid sizing. Max line length for paragraphs is about 65ch.

### 5.3 Spacing, Radius, Elevation

- **Spacing scale:** 4px base (4, 8, 12, 16, 24, 32, 48, 64, 96, 128).
- **Section vertical padding:** 128px desktop, 80px mobile.
- **Container:** max-width 1120px, horizontal padding 24px (mobile) / 32px (desktop).
- **Radius:** cards `16px`, buttons and chips `999px` (pill) or `12px`, images `14px`.
- **Borders:** 1px solid `--border` on cards (borders over shadows).
- **Shadows:** light mode only, soft and diffuse, e.g. `0 8px 30px rgba(20,20,40,0.06)`. Dark mode relies on borders and subtle glow, not shadows.
- **Glass effect** (navbar, optional cards): `backdrop-filter: blur(12px)`, semi-transparent bg, 1px border.

---

## 6. Layout and Sections

Single page with smooth-scroll anchor navigation. Section order (top to bottom):

### 6.1 Navbar (sticky)
- Left: monogram or name (links to top).
- Center/right: `About · Projects · Skills · Education · Contact`.
- Far right: **theme toggle** (sun/moon icon button) and a small **Resume** pill button.
- Glass background that gains a border and blur after scrolling past 8px.
- Active-section highlighting via IntersectionObserver.
- Mobile: hamburger opens a full-width sheet with large tap targets. Theme toggle stays visible.

### 6.2 Hero
- Status badge on top: pulsing green dot + `profile.status`.
- Big headline: `Hi, I'm [Name].` with the name (or a key phrase) in the gradient. Beneath it, `role` and then `tagline` in `--text-muted`.
- Buttons: **Primary** "View my work" (gradient, scrolls to Projects), **Secondary** "Download resume" (outline). Icon buttons for GitHub and LinkedIn with tooltips.
- Right side (desktop) or above (mobile): circular or rounded-square avatar with a gradient ring and subtle float animation. If there is no image, use an initials monogram.
- Optional delight: a small mono line like `> currently building: [[thing]]` with a blinking cursor.
- Soft gradient glow in the background. Scroll indicator at the bottom (subtle).

### 6.3 About
- Two columns on desktop: left is the `about` paragraph, right is a compact "quick facts" card (location, role, status, email) in a bordered card.
- Keep copy short and human.

### 6.4 Projects (the most important section)
- Section label (mono) `// selected work`, then the H2 title.
- **Featured projects** (`featured: true`): large cards in a 2-column grid (1 column on mobile).
- Card contents: preview image (16:10, with gradient placeholder if missing), title, 1-2 line summary, optional impact line in accent color, stack as small mono chips, and links as "Live ↗" and "Code" buttons.
- Hover: card lifts 4px, border brightens toward the accent, image scales 1.03 inside its frame, soft glow. Whole card is clickable (primary link), with inner links still working.
- Non-featured projects appear in a compact list below, with a "View all on GitHub" link.
- Must support 3-8 projects without breaking layout.

### 6.5 Skills
- Grouped by category (Languages, Frontend, Backend, Data & Tools).
- Each group is a bordered card with a category label and skill chips (icon plus name where an icon exists).
- Chips: `--bg-subtle` background, 1px border, hover tints toward `--accent-soft`.
- Don't use percentage bars or star ratings.

### 6.6 Education
- Vertical timeline (thin line with accent dots), one entry per row: school, degree, period (mono), grade, highlights.
- Entries fade and slide in on scroll.

### 6.7 Interests
- Short section with pill chips, each with a small emoji or lucide icon. Friendly and human, one short intro line.
- Can be merged visually into the About or Skills section if it feels sparse. Keep it a distinct block.

### 6.8 Contact / CTA
- Large closing section on a subtle gradient-bordered card.
- Headline: `Let's build something together.` (or similar, in my voice).
- Big mailto button with the email visible, plus GitHub and LinkedIn buttons.
- "Copy email" button with a toast confirmation ("Copied ✓").

### 6.9 Footer
- Minimal: `© [year] [Name]`, small "Built with [stack]" in muted mono, and a back-to-top link.

---

## 7. Dark / Light Mode Requirements

- Toggle in the navbar, using sun/moon icons with a smooth rotate-and-fade icon swap.
- **Default:** follow `prefers-color-scheme`; persist the choice in `localStorage`.
- **No flash of wrong theme (FOUC):** apply the theme class via an inline script in `<head>` before first paint.
- Smooth color transition (150-200ms) on `background-color`, `color`, `border-color`, but disable transitions during the initial load.
- Both themes are polished: check every component, every state, and every image/shadow in both.
- Images or logos that don't suit one theme must have variants or use `mix-blend-mode`/filters appropriately.
- Set `<meta name="theme-color">` per scheme and `color-scheme` on `:root`.

---

## 8. Components Checklist

Build these as reusable components: `Navbar`, `ThemeToggle`, `Button` (primary / secondary / ghost / icon), `Chip`, `Card`, `SectionHeader` (mono label plus title), `ProjectCard`, `SkillGroup`, `TimelineItem`, `StatusBadge`, `Avatar`, `Toast`, `Footer`.

**Button states:** default, hover, active (scale 0.98), focus-visible (2px accent ring with offset), disabled.
**Primary button:** gradient background, white text, soft glow on hover. **Secondary:** transparent, 1px border, text color, hover bg `--bg-subtle`.

---

## 9. Motion

- Entrance: sections fade up (`y: 16px → 0`, `opacity: 0 → 1`, 500ms, ease-out), staggered 60-80ms for children. Trigger once when in view.
- Hover and press transitions: 150-200ms.
- Ambient: slow glow drift in the hero (20s+ loop), avatar gentle float. Keep it subtle.
- **Honor `prefers-reduced-motion`:** disable parallax, float, and entrance translations, using opacity-only fades or nothing.
- No scroll-jacking, no heavy parallax, no loading screens.

---

## 10. Responsive Behavior

- Mobile-first. Breakpoints: `sm 640`, `md 768`, `lg 1024`, `xl 1280`.
- Touch targets at least 44×44px.
- No horizontal scroll at any width from 320px up.
- Hero stacks vertically on mobile (avatar first or second, text below); nav collapses to a sheet.
- Project grid: 1 column mobile, 2 columns from `md`.
- Test mentally at 360px, 768px, 1280px, and 1920px wide.

---

## 11. Accessibility

- Semantic HTML: `header`, `nav`, `main`, `section` (with `aria-labelledby`), `footer`; one `h1`.
- Skip-to-content link.
- Visible focus styles on all interactive elements. Keyboard navigable end to end, including the mobile menu (Esc closes, focus trapped while open).
- Theme toggle has `aria-label` ("Switch to dark mode") and reflects state.
- Meaningful `alt` text on images; decorative elements get `aria-hidden`.
- External links use `rel="noopener noreferrer"` and indicate they open in a new tab.
- Color is never the only carrier of meaning.

---

## 12. SEO and Sharing

- `<title>`: `[Name], [Role]`. Meta description from the tagline.
- Open Graph and Twitter card tags with a generated or static 1200×630 OG image (name, role, gradient background).
- Favicon (monogram, with dark/light variants via `prefers-color-scheme` media in SVG).
- `sitemap.xml`, `robots.txt`.
- JSON-LD `Person` schema (name, jobTitle, url, sameAs: GitHub and LinkedIn).

---

## 13. Performance Targets

- Lighthouse 95+ on Performance, Accessibility, Best Practices, SEO.
- LCP < 2s on mobile. No layout shift (set image dimensions).
- Use `next/image` (or equivalent) with lazy loading, modern formats (AVIF/WebP).
- Total JS kept small. No heavy libraries for what CSS can do.
- Fonts: subset, `display: swap`, preload the primary weight.

---

## 14. Content and Copy Guidelines

- Write in the first person, with a warm, direct, slightly witty tone.
- Prefer specific over generic: "Built a realtime chat app used by 300 classmates" beats "Passionate about technology".
- Avoid: "results-driven", "team player", "passionate", "synergy", "hard-working".
- Project blurbs: what it is, the problem it solves, what I used, the result. Keep each under 30 words.
- If I haven't supplied content for a field, omit that element cleanly. Never ship `[[...]]` text or lorem ipsum.

---

## 15. File Structure (suggested)

```
/app (or /src/pages)
  layout.tsx
  page.tsx
  globals.css          # tokens, base styles
/components
  Navbar.tsx  ThemeToggle.tsx  Hero.tsx  About.tsx
  Projects.tsx  ProjectCard.tsx  Skills.tsx
  Education.tsx  Interests.tsx  Contact.tsx  Footer.tsx
  ui/ (Button, Chip, Card, SectionHeader, Toast)
/data
  profile.ts
/public
  me.jpg  resume.pdf  og.png  projects/*
tailwind.config.ts
README.md              # how to edit content, run, and deploy
```

---

## 16. Definition of Done

- [ ] All sections render from `profile.ts`; editing that file updates the whole site.
- [ ] Dark and light modes both look intentional; no FOUC; toggle persists.
- [ ] Looks great and works at 320px to 1920px; no horizontal scroll.
- [ ] LinkedIn, GitHub, email, and resume links all work.
- [ ] Keyboard and screen-reader pass; AA contrast verified in both themes.
- [ ] Reduced-motion respected.
- [ ] Lighthouse targets met.
- [ ] No placeholder text, broken images, or console errors.
- [ ] `README.md` explains: how to change content, how to swap the accent color (one token), and how to deploy to Vercel/Netlify.

---

## 17. Reference Inspiration (for taste, not copying)

linear.app, vercel.com, raycast.com, resend.com, and the personal sites of developers like Brittany Chiang and Lee Robinson. Borrow the *feel* (crisp type, restraint, confident whitespace, subtle glow). Don't copy layouts or assets.
