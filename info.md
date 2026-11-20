# INFO.md: Personal Information (Source of Truth for Portfolio)

> Companion to `design.md`. The AI agent should fill `profile.ts` from this file.
> Items under **⚠️ Needs Verification** must be resolved by the owner before they go live. Until then, use the "Safe default" given.

---

## 1. Identity and Links

| Field | Value |
|---|---|
| Name | ⚠️ Not provided (LinkedIn handle is `mohittdg`; ask the owner for the full display name) |
| Role (display) | Software Engineer (AI, Backend and Cloud) |
| Current employer | Accenture, Custom Software Engineer (Pune, Maharashtra, India, Hybrid) |
| Location | Pune, Maharashtra, India |
| GitHub | https://github.com/takladuck |
| LinkedIn | https://www.linkedin.com/in/mohittdg |
| Email | ⚠️ Not provided |
| Resume | ⚠️ Not provided (site expects `/resume.pdf`) |
| Status badge | Open to opportunities / Early-career engineer (confirm wording with owner) |

---

## 2. Positioning (how the site should frame me)

**One-line pitch:** An early-career engineer who builds AI-powered backend systems and ships real products, from distributed task queues to production Android apps.

**Core story:** I'm a hands-on builder. I like understanding how things work, from circuits and engines to cloud systems, and then making them work better. My projects are end-to-end: design, build, deploy.

**Primary technical focus:** Python backend, AI/LLM applications, cloud (AWS), databases, DevOps.
**Secondary strengths:** Android (Kotlin), computer vision (OpenCV), SAP EWM exposure, data and business analytics.

**Tone for copy:** First person, direct, a bit curious and playful. Avoid corporate filler ("results-driven", "passionate").

**Draft taglines (pick one):**
- "I build AI-powered systems, and fix things that are broken."
- "Backend engineer who ships: queues, APIs, cloud, and apps."
- "Part software engineer, part tinkerer."

**Draft About paragraph:**
> I'm a software engineer at Accenture in Pune, working across AI, Python and cloud. I like building things end to end: a distributed task queue for AI workloads, a fake-news detector on serverless AWS, an Android app that's live and monetized. Outside of code I'm usually taking something apart to see how it works, whether that's electronics, an engine, or how a city's systems fit together.

---

## 3. Current Status (be honest, never invent work)

- Joined **Accenture** as a fresher (Custom Software Engineer), **no client project assigned yet**.
- The site must NOT claim client work, team size, or production impact at Accenture.
- Frame the Accenture entry around: onboarding, certifications completed (Agentic AI, AWS, Python, MongoDB), and readiness for project allocation.
- Personal projects carry the technical credibility. Make them the hero of the site.

---

## 4. Experience

### Accenture: Custom Software Engineer
- **Type:** Full-time, Hybrid
- **Location:** Pune City, Maharashtra, India
- **Start:** July 2026, present
- **Status:** No project assigned yet (fresher/onboarding phase)
- **Site copy (safe):** "Started my career at Accenture as a Custom Software Engineer, building skills in agentic AI, cloud and databases through Accenture's technical learning tracks while awaiting project allocation."

⚠️ **Needs Verification:** LinkedIn shows "9 months" company tenure but "4 months" in the role, while the start date is July 2026. That implies an earlier stint (internship/trainee?) or a display error. **Safe default:** show only "July 2026 – Present" and omit any tenure count.

---

## 5. Education

### Kalinga Institute of Industrial Technology (KIIT), Bhubaneswar
- **Degree:** Bachelor of Technology (B.Tech.)
- **Field:** Computer Science (LinkedIn also lists "Computer Engineering")
- **Minor:** Financial Economics (using Data Analytics)
- **Duration:** August 2022 – August 2026
- **Grade:** 8.83 (CGPA, presumably out of 10; confirm scale)

⚠️ **Needs Verification:** The source has two KIIT entries (Computer Science vs. Computer Engineering + minor). These are almost certainly one degree entered twice. **Safe default:** show one entry, "B.Tech. in Computer Science, Minor in Financial Economics (Data Analytics)", and confirm the exact degree title with the owner.

### The Asian School (High School)
- **Duration listed:** April 2011 – May 2021
- **Grade:** 87.5%
- **Associated skill:** Python

⚠️ **Needs Verification:** 2011-2021 spans 10 years, which is probably the whole schooling period or an error. **Safe default:** show "The Asian School, High School, 87.5%, completed 2021" and drop the start year. Confirm whether 87.5 is Class 12 or Class 10.

---

## 6. Projects (ordered by how strongly they sell for a software/AI job)

> Use these as `projects[]` in `profile.ts`. `featured: true` for the first four.
> ⚠️ No live URLs or repo links were provided. Link each project to `https://github.com/takladuck` (or its specific repo once the owner confirms names). Hide the "Live" button when there is no URL.

### 6.1 Distributed AI Task Queue (2026) ★ featured
- **Stack:** Python, Distributed Systems, Docker, AWS
- **Summary:** A production-grade distributed task queue built from scratch to process AI workloads. Solo ownership from system design to deployment.
- **Highlights:**
  - Concurrent worker pools with configurable concurrency and job prioritisation
  - Retry logic with exponential backoff and a dead-letter queue for failed tasks
  - Horizontally scalable: stateless workers register dynamically with a shared broker, allowing zero-downtime capacity scaling
- **Card one-liner:** "A from-scratch distributed task queue with priorities, retries, dead-letter handling and horizontally scalable workers."

### 6.2 AI-Powered Fake News Detector (2025) ★ featured
- **Stack:** FastAPI, React, Gemini API, AWS (Lambda, S3, API Gateway), NLP
- **Summary:** Full-stack app that analyses news content with an NLP pipeline.
- **Highlights:**
  - React frontend, FastAPI backend, serverless AWS infrastructure with a proxy and response caching
  - Multi-label classification: sentiment analysis, factual-claim extraction, named entity recognition, source credibility scoring (via Gemini)
  - Async background workers so slow LLM calls don't block the API
- **Card one-liner:** "Paste a news story, get sentiment, claims, entities and a credibility score, served from serverless AWS."

### 6.3 simpletracker: Android Macro Tracker ★ featured (live product)
- **Stack:** Kotlin, Jetpack Compose (Material 3), Clean Architecture, MVVM, Room, WorkManager, Cloudflare Workers
- **Summary:** A production-ready, local-first Android app for tracking daily protein and calories, designed as a fast counter rather than a complex meal logger.
- **Highlights:**
  - Real-time Glance home-screen widgets
  - Automated Google Drive cloud backups through WorkManager
  - Multimodal AI voice and text logging powered by Cloudflare Workers
  - Custom in-app expression calculator, analytics with Vico Charts
  - Monetization via Google Play Billing and AdMob rewarded ads
- **Card one-liner:** "A fast, local-first Android tracker with home-screen widgets, AI voice logging and cloud backup."
- ⚠️ Confirm whether it is published on Google Play. If yes, add the Play Store link, since a live app is a strong signal for recruiters.

### 6.4 Laser Cutting Optimization System (2024)
- **Stack:** Python, OpenCV, Spatial Analysis, SVG
- **Summary:** A computer vision pipeline that detects geometric distortions in laser-cutting paths (from material warping and machine calibration drift) and corrects them.
- **Highlights:**
  - Computes corrective geometric transformations
  - Generates adjusted SVG files with compensated coordinates, removing manual re-measurement on precision re-cuts
- **Card one-liner:** "Computer vision that fixes warped laser-cut paths automatically by outputting compensated SVGs."
- **Note:** This project ties software to hardware, so it supports the "maker" part of the story.

### 6.5 OCR Reader with Gemini Integration (2024)
- **Stack:** Python, OCR, Gemini API, Computer Vision
- **Summary:** A screenshot-based OCR pipeline with about 90% text extraction accuracy, extended with Gemini for real-time Q&A on captured content.
- **Highlights:**
  - Iterative calibration and post-processing to fix systematic errors
  - Turned a passive extraction tool into an interactive AI assistant
- **Card one-liner:** "Screenshot OCR at about 90% accuracy, with Gemini layered on top so you can ask questions about what's on screen."

**Suggested order on site:** Task Queue, Fake News Detector, simpletracker, Laser Cutting Optimizer, OCR Reader.

---

## 7. Skills

### 7.1 Technical skills (primary list, use this on the site)

| Category | Skills |
|---|---|
| **Languages** | Python (primary), JavaScript / TypeScript, Java, Kotlin, SQL, Bash, HTML / CSS, C |
| **Backend** | FastAPI, Flask, REST API design, JWT / OAuth2, WebSockets, Microservices, Redis, Message Queues |
| **Cloud & DevOps** | AWS (EC2, S3, Lambda, RDS, IAM, CloudWatch, API Gateway), Docker, Terraform, GitHub Actions, Nginx, Linux, Git, GitOps |
| **Databases** | PostgreSQL, MySQL, MongoDB, Redis, SQLAlchemy ORM, query optimization, ER modeling |
| **AI / ML** | Gemini API, OpenAI API, NLP pipelines, Prompt Engineering, RAG, Agentic AI frameworks, OpenCV / Computer Vision, Machine Learning, Deep Learning |
| **Frontend** | React, Context API, Tailwind CSS, responsive design, REST API integration |
| **Mobile** | Android (Kotlin, Jetpack Compose, Room, MVVM, Clean Architecture, WorkManager) |
| **Enterprise** | SAP S/4HANA, SAP EWM (Extended Warehouse Management), SAP implementation / functional consulting |
| **CS fundamentals** | Data Structures, Algorithms, Computer Architecture, Computer Networking |
| **Analytics & Business** | Data Analytics, Business Analytics, Quantitative Analysis (Finance), Mathematical Optimization, Risk Management |

### 7.2 Soft skills (show as a small, understated row)
Problem Solving, Teamwork, Strategic Thinking, Decision-Making, Negotiation.

### 7.3 Skills to leave OFF the site
These appear on LinkedIn but don't help a software-engineering job search. ⚠️ Confirm with the owner before removing them from LinkedIn itself:
- **LASIK**, **Responsys Interact**, **OrCAD Capture CIS**, **Open Project**, Word Processing, Dialogue Editing
- **Video Editing / Video Production** are real but off-target. Optionally mention under Interests or as a small "also" item (they have 2 and 1 endorsements).

### 7.4 Endorsements (do not display counts; they are too low to impress)
Python 2, Java 2, Video Editing 2, Cloud Computing 1, AWS 1, C 1, HTML 1, CSS 1, Video Production 1.

---

## 8. Certifications

> Show a curated set prominently (**Top picks**) and put the rest behind a "View all certifications" expander. Do not display 23 equal-weight badges.

### 8.1 Top picks (display prominently)

| Certification | Issuer | Issued | Notes |
|---|---|---|---|
| Databricks Certified Generative AI Engineer Associate | Databricks | May 2026 | Expires May 2028. ID 182454223. Skills: RAG, MLflow, Prompt Engineering |
| Reinvention with Agentic AI | Accenture | Sep 2026 | Skills: Agentic AI, AI Strategy, Automation, Prompt Engineering |
| AWS Academy Graduate, Cloud Architecting | AWS | Dec 2024 | |
| AWS Academy Graduate, Cloud Foundations | AWS | Dec 2024 | |
| Strategy and Game Theory for Management | IIM Ahmedabad | Jan 2025 | ID 0HJVSZS01OHT |
| Business Analytics for Decision Making | Univ. of Colorado Boulder | Jan 2025 | ID 2Q37L9RDNMNT |

### 8.2 Full list (grouped)

**AI and Generative AI**
| Certification | Issuer | Issued | ID |
|---|---|---|---|
| Reinvention with Agentic AI | Accenture | Sep 2026 | n/a |
| Databricks Certified Generative AI Engineer Associate | Databricks | May 2026 | 182454223 |
| Inside Agentic AI: Popular Frameworks | Skillsoft | Apr 2026 | 179419043 |
| Inside Agentic AI: Core Architecture of Agentic Systems | Skillsoft | Apr 2026 | 179418817 |
| Inside Agentic AI: Foundations and Frontiers | Skillsoft | Apr 2026 | 179418552 |
| ChatGPT Prompt Engineering Examples & Use Cases | Skillsoft | Apr 2026 | 179414313 |
| Artificial Intelligence and Machine Learning | Skillsoft | Apr 2026 | 179045956 |
| Generative AI APIs for Practical Applications: An Introduction | Skillsoft | Apr 2026 | 179042276 |
| Introduction to Generative AI | Google | Mar 2024 | 8203215 |

**Cloud**
| Certification | Issuer | Issued | ID |
|---|---|---|---|
| AWS Academy Graduate, Cloud Architecting | AWS | Dec 2024 | n/a |
| AWS Academy Graduate, Cloud Foundations | AWS | Dec 2024 | n/a |
| Cloud, AWS, (T) Role | Accenture | Mar 2026 | n/a |

**Programming and Databases**
| Certification | Issuer | Issued | ID |
|---|---|---|---|
| Programming, Python, (T) Role | Accenture | Mar 2026 | n/a |
| Database, MongoDB, (T) Role | Accenture | Mar 2026 | n/a |

**Enterprise (SAP)**
| Certification | Issuer | Issued | ID |
|---|---|---|---|
| Discovering Extended Warehouse Management with SAP S/4HANA (Record of Achievement) | SAP | Apr 2026 | n/a |

**DevOps**
| Certification | Issuer | Issued | ID |
|---|---|---|---|
| Enterprise DevOps | Master.dev | Sep 2025 | ef0bcdd703-WgcaROBMTb |
| Introduction to DevOps | Coursera | May 2023 | 9HCVJMDC29NM |

**Business and Analytics**
| Certification | Issuer | Issued | ID |
|---|---|---|---|
| Strategy and Game Theory for Management | IIM Ahmedabad | Jan 2025 | 0HJVSZS01OHT |
| Business Analytics for Decision Making | Univ. of Colorado Boulder | Jan 2025 | 2Q37L9RDNMNT |

**Web and Competitions / Programs**
| Certification | Issuer | Issued | ID |
|---|---|---|---|
| The Origins II: CSS | Codédex | Aug 2024 | 114087844 |
| Social Summer of Code | Social (formerly Script Foundation) | May 2024 | 8dcec51c-e9ab-4785-b04f-c8c6c04b68ff |
| Participation, Coding Round, HackOn With Amazon, Season 4 | Unstop | Jun 2024 | 6473f001-2f45-4183-b563-14378e982270 |
| Participation, Level 1: E-Commerce | Unstop | Aug 2024 | 060b54ae-9e34-4b99-afee-af2d58dfd13b |

**Count check:** 23 entries in total, matching the source.

**Display guidance:** Don't show participation certificates (HackOn, Unstop Level 1) as achievements; list them under a small "Programs and Competitions" line, labeled as participation. Accenture "(T) Role" certificates are internal training badges; show them as "Accenture technical learning: Python, AWS, MongoDB".

---

## 9. Interests (analyzed, not just listed)

**Raw input:** electronics, robotics, making stuff, DIY, fixing things, technology, science, vehicles and ICE, city planning, engineering, economics.

**Analysis:** These cluster into three themes, and together they describe a *systems-minded builder*.

### Theme 1: Hands-on making and fixing
*Electronics, robotics, DIY, making stuff, fixing things.*
Comfort with the physical layer: circuits, mechanisms, troubleshooting. The instinct to open something up and understand it. This is the same debugging mindset that makes a good backend engineer, and it shows up in the Laser Cutting Optimization project, which is software correcting a physical process.

### Theme 2: How machines work
*Vehicles, ICE (internal combustion engines, presumably; see note), engineering, science, technology.*
Fascination with mechanical and thermodynamic systems and first-principles understanding. Interest in why things are built the way they are.

### Theme 3: Systems at scale
*City planning, economics, engineering.*
Thinking about how large systems (cities, markets, infrastructure) allocate resources and fail. This links to the Financial Economics minor, the optimization and risk coursework, and the interest in scalable, distributed software architecture.

**Unifying thread:** *"I like understanding how systems work, from a circuit to an engine to a city, and then making them work better."* This lines up with the distributed task queue, the cloud work and the optimization project.

**Site-ready interest chips (curated, grouped):**
- 🔧 Electronics and Robotics
- 🛠️ DIY, Making and Repair
- 🏍️ Vehicles and Engines
- 🔬 Science and Engineering
- 🏙️ City Planning
- 📈 Economics

**Short interests blurb for the site:**
> When I'm not coding I'm usually taking something apart: electronics, engines, anything that's broken. I'm also fascinated by systems at city and economy scale: how they're planned, how they fail, how to make them run better. Honestly it's the same itch as writing software.

⚠️ **Needs Verification:** The source said "vehicles and ice." This is assumed to mean **ICE (internal combustion engines)**. If it actually meant "vehicles and ice" literally (e.g. ice skating or ice as a hobby), change Theme 2 and the chip accordingly.

---

## 10. Content Rules for the Agent

1. **Don't invent** metrics, users, revenue, team sizes, awards, or links. Use only what is in this file.
2. If a project has no link, show the GitHub profile link or hide the button, and never render a dead link.
3. Show **one** KIIT education entry (see section 5).
4. Hide off-target skills (section 7.3).
5. Don't claim Accenture project work (section 3).
6. Credential IDs are for the "View all certifications" expander only, never in the main UI.
7. Lead with projects, then skills, then certifications. Education and experience stay short and factual.
8. Keep copy specific and human; avoid generic buzzwords.

---

## 11. Open Questions for the Owner

Before launch, the owner should provide or confirm:

- [ ] Full display name
- [ ] Public contact email
- [ ] Resume PDF (and whether to host it)
- [ ] A profile photo (or use an initials monogram)
- [ ] Exact degree title at KIIT (CS vs. Computer Engineering) and the CGPA scale
- [ ] Accenture tenure clarification (9 months vs. July 2026 start)
- [ ] High school dates and which board grade 87.5 refers to
- [ ] GitHub repo URLs for each project; live demo/Play Store URLs, if any
- [ ] Whether "vehicles and ice" means ICE engines
- [ ] Whether to remove irrelevant skills from LinkedIn (LASIK, Responsys, OrCAD, etc.)
- [ ] Preferred job targets (backend, AI engineer, full-stack?), which tunes the tagline and project order

---

## 12. `profile.ts` Mapping Cheat-Sheet

| `profile.ts` field | Source section |
|---|---|
| `name`, `email`, `location`, `status` | §1 |
| `role`, `tagline`, `about` | §2 |
| `socials.github`, `socials.linkedin` | §1 |
| `education[]` | §5 (deduplicated) |
| `projects[]` | §6 |
| `skills` | §7.1 |
| `interests[]` | §9 chips |
| Certifications (extra section or expander) | §8 |
| Experience (small card under About or Education) | §4 |
