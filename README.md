# Mohit — Portfolio Website

A polished, production-ready personal portfolio built with **Next.js 16**, **Tailwind CSS v4**, **Framer Motion**, and **TypeScript**.

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Production build
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000).

---

## Editing Content

**All personal content lives in one file:** [`data/profile.ts`](data/profile.ts).

Edit that file to update your name, bio, projects, skills, certifications, and everything else. No component code changes needed.

### Things you should fill in

| Field | Where in `profile.ts` | Notes |
|---|---|---|
| Full display name | `name` | Currently "Mohit" |
| Email | `email` | Set to `""` — add your public email to enable the mailto CTA and "Copy email" button |
| Resume PDF | `resumeUrl` | Place your resume at `public/resume.pdf` |
| Profile photo | `avatar` | Place your photo at `public/me.jpg` and set `avatar: "/me.jpg"` |
| Project repo URLs | `projects[].links.github` | Currently all point to your GitHub profile — update with specific repo URLs |
| Live demo URLs | `projects[].links.live` | Add when available (the "Live" button only appears when a URL is set) |
| Project screenshots | `projects[].image` | Place images in `public/projects/` and set e.g. `image: "/projects/task-queue.png"` |

### Changing the accent color

The entire color system uses a single accent hue. To change it, edit the CSS variables in [`app/globals.css`](app/globals.css):

```css
/* Light mode */
--accent: #5B5BF0;        /* ← Change these two */
--accent-hover: #4747D6;
--gradient-accent: linear-gradient(135deg, #5B5BF0, #A855F7);

/* Dark mode (inside .dark) */
--accent: #7C7CFF;
--accent-hover: #9494FF;
--gradient-accent: linear-gradient(135deg, #7C7CFF, #C084FC);
```

---

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout, fonts, metadata, theme
│   ├── page.tsx            # Main page composing all sections
│   ├── globals.css         # Design tokens, base styles, animations
│   └── icon.svg            # Favicon (monogram)
├── components/
│   ├── Navbar.tsx           # Sticky glass navbar + mobile menu
│   ├── ThemeToggle.tsx      # Dark/light mode toggle
│   ├── Hero.tsx             # Hero section
│   ├── About.tsx            # About + quick facts
│   ├── Projects.tsx         # Projects section wrapper
│   ├── ProjectCard.tsx      # Individual project card
│   ├── Skills.tsx           # Skill categories grid
│   ├── Experience.tsx       # Work experience
│   ├── Education.tsx        # Timeline layout
│   ├── Certifications.tsx   # Top picks + expandable list
│   ├── Interests.tsx        # Emoji pill chips
│   ├── Contact.tsx          # CTA with social links
│   ├── Footer.tsx           # Footer
│   └── ui/                  # Reusable primitives
│       ├── Button.tsx       # Primary/secondary/ghost/icon
│       ├── Card.tsx         # Bordered card
│       ├── Chip.tsx         # Skill/tech tags
│       ├── SectionHeader.tsx # Mono label + H2
│       ├── StatusBadge.tsx  # Pulsing green dot
│       ├── Avatar.tsx       # Image or initials monogram
│       ├── Icons.tsx        # GitHub & LinkedIn SVG icons
│       └── Toast.tsx        # Copy-to-clipboard toast
├── data/
│   └── profile.ts          # ← ALL content lives here
├── hooks/
│   └── useScrollSpy.ts     # Active section detection
├── lib/
│   └── motion.ts           # Shared Framer Motion variants
└── public/
    ├── robots.txt
    └── sitemap.xml
```

---

## Tech Stack

- **Next.js 16** (App Router, static export)
- **TypeScript**
- **Tailwind CSS v4** with CSS variable design tokens
- **Framer Motion** for animations (respects `prefers-reduced-motion`)
- **Lucide React** for icons
- **next-themes** for dark/light mode
- **Inter** + **Inter Tight** + **JetBrains Mono** fonts (self-hosted via `next/font`)

---

## Features

- ✅ Dark and light themes (system default + manual toggle, persisted)
- ✅ Responsive layouts: 320px → 1920px+
- ✅ Smooth scroll navigation with active section highlighting
- ✅ Glass-morphism navbar with mobile slide-in menu
- ✅ Scroll-triggered entrance animations
- ✅ Accessible: semantic HTML, skip-to-content, keyboard navigation, focus styles
- ✅ No horizontal overflow at any viewport width
- ✅ No console errors
- ✅ SEO: Open Graph, meta tags, JSON-LD Person schema, robots.txt, sitemap
- ✅ Zero placeholder text or broken links in the UI

---

## Deploying

### Vercel (recommended)

1. Push to GitHub
2. Import the repo at [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Next.js — click Deploy

### Netlify

1. Push to GitHub
2. Add `npm run build` as build command, `.next` as publish directory
3. Or add `output: "export"` to `next.config.ts` for static HTML export

### Custom domain

Update the URLs in `public/sitemap.xml` and `public/robots.txt` to your domain.

---

## License

This is a personal portfolio. Feel free to use the structure and design patterns as inspiration for your own site.
