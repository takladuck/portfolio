// ============================================================
// profile.ts — Single source of truth for all portfolio content
// Edit this file to update the site. No component changes needed.
// ============================================================

export type ProjectItem = {
  title: string;
  year: string;
  summary: string;
  description: string;
  highlights: readonly string[] | string[];
  stack: readonly string[] | string[];
  links: { github?: string; live?: string; closedSource?: boolean };
  closedSource?: boolean;
  image: string;
  gallery?: readonly string[] | string[];
  featured: boolean;
  architecture?: string;
  architectureSteps?: readonly { step: string; title: string; detail: string }[] | { step: string; title: string; detail: string }[];
  techStackDetails?: readonly { tech: string; role: string }[] | { tech: string; role: string }[];
};

export type CertificationItem = {
  name: string;
  issuer: string;
  date: string;
  image?: string;
  badgeUrl?: string;
  credentialUrl?: string;
  credentialId?: string;
  description?: string;
  skills?: readonly string[] | string[];
};

export type CertificationGroup = {
  category: string;
  items: CertificationItem[];
};

export const profile = {
  name: "Mohit",
  role: "Software Engineer — AI, Backend & Cloud",
  tagline: "I build AI-powered systems — and fix things that are broken.",
  location: "Pune, India",
  status: "Open to opportunities",
  email: "mohitsingh.tdg@gmail.com",
  resumeUrl: "/resume.pdf", // Link to uploaded resume PDF in public/resume.pdf
  avatar: "/me.jpg", // Photo in public/me.jpg copied from public/projects/profile pic.jpg

  socials: {
    github: "https://github.com/takladuck",
    linkedin: "https://www.linkedin.com/in/mohittdg",
  },

  about:
    "I'm a software engineer at Accenture in Pune, working across AI, Python and cloud. I like building things end to end — a distributed task queue for AI workloads, a fake-news detector on serverless AWS, an Android app that's live and monetized. Outside of code I'm usually taking something apart to see how it works, whether that's electronics, an engine, or how a city's systems fit together.",

  currentlyBuilding: "distributed AI systems",

  experience: [
    {
      company: "Accenture",
      role: "Custom Software Engineer",
      type: "Full-time · Hybrid",
      location: "Pune, Maharashtra, India",
      period: "Jul 2026 – Present",
      description:
        "Started my career at Accenture as a Custom Software Engineer, building skills in agentic AI, cloud and databases through Accenture's technical learning tracks while awaiting project allocation.",
      highlights: [
        "Completed certifications in Agentic AI, AWS, Python, and MongoDB",
        "Trained on SAP S/4HANA and Extended Warehouse Management",
      ],
    },
  ],

  education: [
    {
      school: "Kalinga Institute of Industrial Technology (KIIT)",
      degree: "B.Tech. in Computer Science",
      minor: "Minor in Financial Economics (Data Analytics)",
      location: "Bhubaneswar, India",
      period: "Aug 2022 – Aug 2026",
      grade: "CGPA: 8.83 / 10",
      highlights: [
        "Coursework in Data Structures, Algorithms, Computer Architecture, Networking",
        "Quantitative Analysis, Mathematical Optimization, Risk Management",
      ],
    },
    {
      school: "The Asian School",
      degree: "High School",
      location: "",
      period: "Completed 2021",
      grade: "87.5%",
      highlights: [],
    },
  ],

  projects: [
    {
      title: "Distributed AI Task Queue",
      year: "2026",
      summary:
        "A from-scratch distributed task queue with priorities, retries, dead-letter handling and horizontally scalable workers.",
      description:
        "A production-grade distributed task queue built from scratch to process AI workloads. Solo ownership from system design to deployment.",
      highlights: [
        "Concurrent worker pools with configurable concurrency and job prioritisation",
        "Retry logic with exponential backoff and a dead-letter queue",
        "Stateless workers register dynamically for zero-downtime scaling",
      ],
      stack: ["Python", "Distributed Systems", "Docker", "AWS", "Redis"],
      links: {
        github: "https://github.com/takladuck/DistributedAITaskQueue",
      },
      image: "/projects/AI_task.png",
      gallery: ["/projects/AI_task.png"],
      featured: true,
      architecture:
        "A fault-tolerant producer-broker-worker distributed architecture. Producers submit asynchronous AI workloads; a Redis-backed priority queue partitions jobs into high, medium, and low priority lanes; auto-scaling worker nodes pull jobs concurrently with heartbeat monitoring, exponential backoff retries, and dead-letter isolation.",
      architectureSteps: [
        {
          step: "01",
          title: "Job Ingestion & Validation",
          detail: "FastAPI/Python producers receive multimodal batch inference payloads and assign unique task UUIDs with priority weighting.",
        },
        {
          step: "02",
          title: "Priority Broker Queue",
          detail: "Redis-backed segmented priority queues ensure urgent inference queries jump ahead of batch background jobs.",
        },
        {
          step: "03",
          title: "Dynamic Worker Execution",
          detail: "Stateless worker pools consume tasks with heartbeat monitoring and configurable concurrency limits to prevent memory overflow.",
        },
        {
          step: "04",
          title: "Failure Recovery & DLQ",
          detail: "Failed tasks trigger exponential backoff retries; unrecoverable exceptions route to a Dead-Letter Queue (DLQ) with error telemetry.",
        },
      ],
      techStackDetails: [
        {
          tech: "Python",
          role: "Core runtime for asynchronous concurrency, typing, and ecosystem compatibility with AI pipelines.",
        },
        {
          tech: "Distributed Systems & Redis",
          role: "Message-driven coordination with lease timers and dynamic worker node discovery.",
        },
        {
          tech: "Docker",
          role: "Containerized reproducible worker nodes allowing rapid zero-downtime horizontal scaling.",
        },
        {
          tech: "AWS",
          role: "Cloud infrastructure host with Elastic Container Service and S3 for large task payload persistence.",
        },
      ],
    },
    {
      title: "AI Fake News Detector",
      year: "2025",
      summary:
        "Paste a news story, get sentiment, claims, entities and a credibility score — served from serverless AWS.",
      description:
        "Full-stack app that analyses news content with an NLP pipeline. React frontend, FastAPI backend, serverless AWS infrastructure.",
      highlights: [
        "Multi-label classification: sentiment, claims, entities, credibility scoring via Gemini",
        "Serverless AWS infrastructure with proxy and response caching",
        "Async background workers so slow LLM calls don't block the API",
      ],
      stack: ["FastAPI", "React", "Gemini API", "AWS Lambda", "NLP"],
      links: {
        github: "https://github.com/takladuck/fake-news-detector",
      },
      image: "/projects/fake_news.png",
      gallery: ["/projects/fake_news.png"],
      featured: true,
      architecture:
        "A serverless NLP pipeline designed for sub-second claim decomposition and source triangulation. Incoming articles are parsed, chunked, and analyzed through Gemini API for sentiment, entity extraction, and credibility assessment, cached via Cloudflare and API Gateway.",
      architectureSteps: [
        {
          step: "01",
          title: "Article Parsing & Cleaning",
          detail: "Extracts primary journalistic text, removes boilerplate DOM nodes, and generates semantic hashes for deduplication.",
        },
        {
          step: "02",
          title: "Entity & Claim Extraction",
          detail: "LLM-driven pipeline decomposes content into verifiable factual claims and prominent named entities.",
        },
        {
          step: "03",
          title: "Credibility Scoring Engine",
          detail: "Multi-label classification evaluates sensationalism, citation presence, source authenticity, and factual alignment.",
        },
        {
          step: "04",
          title: "Serverless Caching & Response",
          detail: "AWS Lambda executes compute on-demand while API responses are cached to minimize LLM token overhead.",
        },
      ],
      techStackDetails: [
        {
          tech: "FastAPI",
          role: "High-performance async Python backend for low-latency request handling and background worker execution.",
        },
        {
          tech: "Gemini API",
          role: "State-of-the-art multimodal LLM used for structured claim extraction and semantic credibility scoring.",
        },
        {
          tech: "React",
          role: "Modern responsive web dashboard presenting instant visual breakdowns and score gauges.",
        },
        {
          tech: "AWS Lambda",
          role: "Zero-maintenance serverless execution with near-instant spin-up and auto-scaling.",
        },
      ],
    },
    {
      title: "simpletracker",
      year: "2025",
      summary:
        "A fast, local-first Android tracker with home-screen widgets, AI voice logging and cloud backup.",
      description:
        "A production-ready, local-first Android app for tracking daily protein and calories — designed as a fast counter, not a complex meal logger.",
      highlights: [
        "Real-time Glance home-screen widgets",
        "Multimodal AI voice and text logging via Cloudflare Workers",
        "Google Drive cloud backups and Google Play monetization",
      ],
      stack: ["Kotlin", "Jetpack Compose", "Room", "MVVM", "Cloudflare Workers"],
      links: { closedSource: true },
      closedSource: true,
      image: "/projects/simpletracker.png",
      gallery: ["/projects/simpletracker.png"],
      featured: true,
      architecture:
        "A local-first, low-latency mobile application optimized for single-tap macro and calorie logging. Implements Android Jetpack Architecture with offline-first Room database, reactive StateFlow updates, glanceable interactive home-screen widgets, and background sync to Cloudflare Workers.",
      architectureSteps: [
        {
          step: "01",
          title: "Quick Capture UI & Widget",
          detail: "Glance-powered home screen widgets permit instant logging without launching the main application.",
        },
        {
          step: "02",
          title: "Multimodal Voice & Text Parsing",
          detail: "Natural language inputs (e.g. 'had 2 boiled eggs and black coffee') are parsed by lightweight worker endpoints.",
        },
        {
          step: "03",
          title: "Local-First Room Storage",
          detail: "SQLite/Room database guarantees instantaneous offline operation with zero network lag.",
        },
        {
          step: "04",
          title: "Cloud Sync & Backup",
          detail: "Automated incremental backups to Google Drive and Cloudflare Workers with Play Store billing.",
        },
      ],
      techStackDetails: [
        {
          tech: "Kotlin & Jetpack Compose",
          role: "Modern declarative UI framework for high-frame-rate Android rendering and expressive components.",
        },
        {
          tech: "Room Database",
          role: "Robust local-first persistence layer with type-safe SQLite abstraction and reactive queries.",
        },
        {
          tech: "Android Glance Widgets",
          role: "Native AppWidget provider providing interactive glanceable home-screen controls.",
        },
        {
          tech: "Cloudflare Workers",
          role: "Serverless edge worker handling lightweight API verification and AI parsing.",
        },
      ],
    },
    {
      title: "Laser Cutting Optimizer",
      year: "2024",
      summary:
        "Computer vision that fixes warped laser-cut paths automatically by outputting compensated SVGs.",
      description:
        "A computer vision pipeline that detects geometric distortions in laser-cutting paths and corrects them — bridging software with physical manufacturing.",
      highlights: [
        "Detects distortions from material warping and machine calibration drift",
        "Generates adjusted SVG files with compensated coordinates",
      ],
      stack: ["Python", "OpenCV", "Spatial Analysis", "SVG"],
      links: { github: "https://github.com/takladuck" },
      image: "/projects/laser-optimizer.png",
      gallery: ["/projects/laser-optimizer.png"],
      featured: false,
      architecture:
        "A computer vision processing system that captures physical laser-cut test plates, measures optical and thermal drift against target geometries, and outputs mathematically compensated vector SVG paths.",
      architectureSteps: [
        {
          step: "01",
          title: "Optical Distortion Capture",
          detail: "High-contrast CV camera captures edge profiles of test cuts on warped sheet materials.",
        },
        {
          step: "02",
          title: "Contour & Warp Analysis",
          detail: "OpenCV contour analysis measures kerf variations, thermal expansion drift, and path skewing.",
        },
        {
          step: "03",
          title: "Coordinate Compensation",
          detail: "Geometric matrix transforms recalculate offset control points to counteract physical material warping.",
        },
        {
          step: "04",
          title: "Vector SVG Export",
          detail: "Generates compensated ready-to-run SVGs fed directly into CNC/laser cutting controllers.",
        },
      ],
      techStackDetails: [
        {
          tech: "Python & OpenCV",
          role: "Image processing, edge detection, contour mapping, and perspective transformation.",
        },
        {
          tech: "Spatial Analysis",
          role: "Sub-millimeter geometry calculation and polygonal deviation compensation.",
        },
        {
          tech: "SVG Vector Math",
          role: "Path transformation ensuring machine-readable toolpaths without raster artifacting.",
        },
      ],
    },
    {
      title: "OCR-GPT (OCR Reader + Gemini Q&A)",
      year: "2024",
      summary:
        "Screenshot OCR at ~90% accuracy, with Gemini layered on top for real-time Q&A on captured content.",
      description:
        "A screenshot-based OCR pipeline extended with Gemini for interactive Q&A on extracted text.",
      highlights: [
        "Iterative calibration and post-processing to fix systematic errors",
        "Turned a passive extraction tool into an interactive AI assistant",
      ],
      stack: ["Python", "OCR", "Gemini API", "Computer Vision"],
      links: { github: "https://github.com/takladuck/OCR-GPT" },
      image: "/projects/ocr-reader.png",
      gallery: ["/projects/ocr-reader.png"],
      featured: false,
      architecture:
        "A desktop visual assistant that captures arbitrary screen regions, executes high-speed text extraction with post-processing error heuristics, and injects context into Gemini for real-time document reasoning.",
      architectureSteps: [
        {
          step: "01",
          title: "Screen Capture Hook",
          detail: "Captures high-DPI selected display regions with automated contrast thresholding.",
        },
        {
          step: "02",
          title: "OCR Extraction & Heuristics",
          detail: "Tesseract OCR engine extracts text with automated character cleaning and layout detection.",
        },
        {
          step: "03",
          title: "Gemini Contextual Prompting",
          detail: "Extracted content is wrapped in prompt templates for summarization, code explanation, or Q&A.",
        },
        {
          step: "04",
          title: "Interactive HUD",
          detail: "Immediate contextual answer display overlaying the user's active workspace.",
        },
      ],
      techStackDetails: [
        {
          tech: "Python",
          role: "System hooks, multi-threading, and rapid integration with vision libraries.",
        },
        {
          tech: "OCR / Tesseract",
          role: "Character recognition and heuristic text reconstruction.",
        },
        {
          tech: "Gemini API",
          role: "Multimodal contextual intelligence for instantaneous question answering and extraction.",
        },
      ],
    },
  ],

  skills: {
    Languages: ["Python", "JavaScript", "TypeScript", "Java", "Kotlin", "SQL", "Bash", "C"],
    Backend: [
      "FastAPI",
      "Flask",
      "REST APIs",
      "JWT / OAuth2",
      "WebSockets",
      "Microservices",
      "Redis",
      "Message Queues",
    ],
    "Cloud & DevOps": [
      "AWS",
      "Docker",
      "Terraform",
      "GitHub Actions",
      "Nginx",
      "Linux",
      "Git",
    ],
    Databases: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "SQLAlchemy"],
    "AI / ML": [
      "Gemini API",
      "OpenAI API",
      "NLP Pipelines",
      "Prompt Engineering",
      "RAG",
      "Agentic AI",
      "OpenCV",
      "Machine Learning",
    ],
    Frontend: ["React", "Tailwind CSS", "Responsive Design"],
    Mobile: ["Android", "Kotlin", "Jetpack Compose", "Room", "MVVM"],
  },

  softSkills: ["Problem Solving", "Strategic Thinking", "Teamwork", "Decision-Making"],

  certifications: {
    top: [
      {
        name: "Databricks Certified Generative AI Engineer Associate",
        issuer: "Databricks",
        date: "May 2026",
        credentialId: "58f3b4a4-f5f4-4c74-aba9-201e3c5968f3",
        credentialUrl: "https://credentials.databricks.com/58f3b4a4-f5f4-4c74-aba9-201e3c5968f3#acc.C3FMGOAm",
        description:
          "Validates expertise in designing and deploying production-grade Generative AI applications on Databricks. Covers prompt engineering, Retrieval-Augmented Generation (RAG) system design, vector databases, LLM evaluation, and agentic workflows.",
        skills: ["RAG Architectures", "Vector Databases", "LLM Evaluation", "LangChain", "MLflow / LLMOps"],
      },
      {
        name: "Claude Certified Developer - Foundations",
        issuer: "Anthropic",
        date: "2026",
        credentialId: "8126f083-2d40-44b6-b064-8681842d1bac",
        credentialUrl: "https://www.credly.com/badges/8126f083-2d40-44b6-b064-8681842d1bac/linked_in_profile",
        description:
          "Official Anthropic developer certification validating proficiency in Claude API models, complex prompt architectures, tool use and function calling, autonomous workflows, and safe enterprise integrations.",
        skills: ["Claude API", "Prompt Engineering", "Tool Use & Function Calling", "Agentic Systems", "AI Safety"],
      },
      {
        name: "AWS Academy Graduate — Cloud Architecting",
        issuer: "AWS",
        date: "Dec 2024",
        credentialId: "31432ef5-ba8d-4696-87f1-69ff54974258",
        credentialUrl: "https://www.credly.com/badges/31432ef5-ba8d-4696-87f1-69ff54974258/linked_in_profile",
        description:
          "Covers advanced AWS cloud infrastructure design: high availability, multi-region fault tolerance, VPC network isolation, IAM zero-trust security, distributed microservices with ECS/Lambda, and automated scaling.",
        skills: ["AWS Cloud Architecture", "VPC & Networking", "IAM Security", "Microservices", "Cost Optimization"],
      },
      {
        name: "AWS Academy Graduate — Cloud Foundations",
        issuer: "AWS",
        date: "Dec 2024",
        credentialId: "dde11fa1-0253-4f3c-b663-4fd568ee2c7b",
        credentialUrl: "https://www.credly.com/badges/dde11fa1-0253-4f3c-b663-4fd568ee2c7b/linked_in_profile",
        description:
          "Foundational AWS cloud concepts, core compute, storage, database services, cloud security models, compliance, and architectural best practices.",
        skills: ["Cloud Computing", "AWS Core Services", "S3 & EC2", "Cloud Security", "Billing & Architecture"],
      },
      {
        name: "Reinvention with Agentic AI",
        issuer: "Accenture",
        date: "Sep 2026",
        credentialId: "4372d618-6258-4e9c-a733-a226915c8985",
        credentialUrl: "https://www.credly.com/badges/4372d618-6258-4e9c-a733-a226915c8985/linked_in_profile",
        description:
          "Rigorous Accenture certification on architecting autonomous agentic AI systems. Focuses on multi-agent collaboration, tool invocation protocols, dynamic plan generation, reasoning loops (ReAct/Plan-and-Solve), and enterprise guardrails.",
        skills: ["Agentic Frameworks", "Multi-Agent Systems", "Tool Use & Function Calling", "Autonomous Workflows"],
      },
      {
        name: "Add Agents to Gemini",
        issuer: "Google",
        date: "2026",
        credentialId: "7a87dafa-85b3-47dc-bd81-8ab6b5d22d5f",
        credentialUrl: "https://www.credly.com/badges/7a87dafa-85b3-47dc-bd81-8ab6b5d22d5f/linked_in_profile",
        description:
          "Google credential verifying autonomous agent creation using Gemini, external tool calling integrations, function schema definition, and multi-step execution loops.",
        skills: ["Gemini API", "AI Agents", "Tool Calling", "Orchestration", "Google Cloud"],
      },
      {
        name: "Deploy Gemini with Workspace Data Sources and Model Armor",
        issuer: "Google",
        date: "2026",
        credentialId: "2f503eec-10aa-49c3-9225-e8ae4f7b27c4",
        credentialUrl: "https://www.credly.com/badges/2f503eec-10aa-49c3-9225-e8ae4f7b27c4/linked_in_profile",
        description:
          "Production deployment of Gemini grounded with enterprise workspace data sources and secured via Model Armor guardrails, defense against prompt injection, and data leakage protection.",
        skills: ["Model Armor", "Data Grounding", "Enterprise Security", "Workspace Integration", "Safety Filters"],
      },
      {
        name: "Govern Agent Access with Gemini platform",
        issuer: "Google",
        date: "2026",
        credentialId: "f270a87b-560b-4385-938e-416ae53bfc70",
        credentialUrl: "https://www.credly.com/badges/f270a87b-560b-4385-938e-416ae53bfc70/linked_in_profile",
        description:
          "Governance and IAM access controls for AI agents on Gemini platform, verifying security boundaries, tokenized auth, credential delegation, and auditable runtime enforcement.",
        skills: ["Agent Governance", "Access Control", "IAM Security", "Platform Compliance", "Auditability"],
      },
    ],
    all: [
      {
        category: "Frontier & Agentic AI",
        items: [
          {
            name: "Databricks Certified Generative AI Engineer Associate",
            issuer: "Databricks",
            date: "May 2026",
            credentialId: "58f3b4a4-f5f4-4c74-aba9-201e3c5968f3",
            credentialUrl: "https://credentials.databricks.com/58f3b4a4-f5f4-4c74-aba9-201e3c5968f3#acc.C3FMGOAm",
            description: "Production RAG, evaluation harnesses, vector search pipelines, and MLflow LLM tracking.",
            skills: ["Generative AI", "RAG", "Vector Databases", "MLflow"],
          },
          {
            name: "Claude Certified Developer - Foundations",
            issuer: "Anthropic",
            date: "2026",
            credentialId: "8126f083-2d40-44b6-b064-8681842d1bac",
            credentialUrl: "https://www.credly.com/badges/8126f083-2d40-44b6-b064-8681842d1bac/linked_in_profile",
            description: "Claude API models, prompt engineering, tool use and function calling, autonomous agentic systems.",
            skills: ["Claude API", "Tool Calling", "Prompt Engineering", "Agentic Systems"],
          },
          {
            name: "Reinvention with Agentic AI",
            issuer: "Accenture",
            date: "Sep 2026",
            credentialId: "4372d618-6258-4e9c-a733-a226915c8985",
            credentialUrl: "https://www.credly.com/badges/4372d618-6258-4e9c-a733-a226915c8985/linked_in_profile",
            description: "Enterprise engineering in autonomous agentic workflows, multi-agent coordination, and system guardrails.",
            skills: ["Agentic AI", "Autonomous Agents", "Multi-Agent Systems"],
          },
          {
            name: "Add Agents to Gemini",
            issuer: "Google",
            date: "2026",
            credentialId: "7a87dafa-85b3-47dc-bd81-8ab6b5d22d5f",
            credentialUrl: "https://www.credly.com/badges/7a87dafa-85b3-47dc-bd81-8ab6b5d22d5f/linked_in_profile",
            description: "Autonomous agent construction, external tool augmentation, function calling protocols on Gemini.",
            skills: ["Gemini API", "AI Agents", "Tool Calling"],
          },
          {
            name: "Deploy Gemini with Workspace Data Sources and Model Armor",
            issuer: "Google",
            date: "2026",
            credentialId: "2f503eec-10aa-49c3-9225-e8ae4f7b27c4",
            credentialUrl: "https://www.credly.com/badges/2f503eec-10aa-49c3-9225-e8ae4f7b27c4/linked_in_profile",
            description: "Enterprise data grounding and Model Armor security guardrails for Gemini deployments.",
            skills: ["Model Armor", "Data Grounding", "Enterprise Security"],
          },
          {
            name: "Govern Agent Access with Gemini platform",
            issuer: "Google",
            date: "2026",
            credentialId: "f270a87b-560b-4385-938e-416ae53bfc70",
            credentialUrl: "https://www.credly.com/badges/f270a87b-560b-4385-938e-416ae53bfc70/linked_in_profile",
            description: "Agent access governance, identity verification, RBAC, and policy enforcement on Gemini.",
            skills: ["Agent Governance", "Access Control", "IAM Security"],
          },
          {
            name: "Inside Agentic AI: Core Architecture of Agentic Systems",
            issuer: "Skillsoft",
            date: "2026",
            credentialId: "ed911a59-1eff-4f00-be1b-23d890813ded",
            credentialUrl: "https://skillsoft.digitalbadges.skillsoft.com/ed911a59-1eff-4f00-be1b-23d890813ded#acc.y9CSJQ3Y",
            description: "Reasoning algorithms, memory persistence, reflection loops, and stateful agent graphs.",
            skills: ["Agent Architecture", "Stateful Graphs", "Memory Loops"],
          },
          {
            name: "Inside Agentic AI: Popular Frameworks",
            issuer: "Skillsoft",
            date: "2026",
            credentialId: "e95e5f5d-0029-4925-8439-f95cf4bbf7bf",
            credentialUrl: "https://skillsoft.digitalbadges.skillsoft.com/e95e5f5d-0029-4925-8439-f95cf4bbf7bf#acc.Uzk17tF2",
            description: "Deep dive into LangChain, AutoGen, CrewAI, and native agent orchestration architectures.",
            skills: ["LangChain", "CrewAI", "Agent Orchestration"],
          },
          {
            name: "Inside Agentic AI: Foundations and Frontiers",
            issuer: "Skillsoft",
            date: "2026",
            credentialId: "b9eb12d1-80ac-4763-8b88-8e132793f9bc",
            credentialUrl: "https://skillsoft.digitalbadges.skillsoft.com/b9eb12d1-80ac-4763-8b88-8e132793f9bc#acc.DVTRJx3t",
            description: "Autonomous task planning, safety evaluations, human-in-the-loop validation, and frontier research.",
            skills: ["Autonomous Planning", "AI Safety", "Tool Calling"],
          },
          {
            name: "Generative AI APIs for Practical Applications: An Introduction",
            issuer: "Skillsoft",
            date: "2025",
            credentialId: "03478881-64ca-42e4-9e85-eafa83bbe9b5",
            credentialUrl: "https://skillsoft.digitalbadges.skillsoft.com/03478881-64ca-42e4-9e85-eafa83bbe9b5#acc.QYCDLzMu",
            description: "API integration, rate-limit mitigation, embeddings, streaming generation, and caching strategies.",
            skills: ["AI APIs", "Streaming", "Embeddings"],
          },
          {
            name: "Introduction to Generative AI",
            issuer: "Google",
            date: "2024",
            credentialId: "8203215",
            credentialUrl: "https://www.skills.google/public_profiles/840c70ce-6f1b-44d5-a20f-19a4f6f22963/badges/8203215?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
            description: "Google Cloud introduction to large language models and responsible AI development principles.",
            skills: ["LLM Fundamentals", "Responsible AI"],
          },
        ],
      },
      {
        category: "Cloud & DevOps Infrastructure",
        items: [
          {
            name: "AWS Academy Graduate — Cloud Architecting",
            issuer: "AWS",
            date: "Dec 2024",
            credentialId: "31432ef5-ba8d-4696-87f1-69ff54974258",
            credentialUrl: "https://www.credly.com/badges/31432ef5-ba8d-4696-87f1-69ff54974258/linked_in_profile",
            description: "Architecture of resilient, fault-tolerant, scalable, and secure cloud environments on AWS.",
            skills: ["AWS Cloud Architecture", "VPC", "ECS", "IAM"],
          },
          {
            name: "AWS Academy Graduate — Cloud Foundations",
            issuer: "AWS",
            date: "Dec 2024",
            credentialId: "dde11fa1-0253-4f3c-b663-4fd568ee2c7b",
            credentialUrl: "https://www.credly.com/badges/dde11fa1-0253-4f3c-b663-4fd568ee2c7b/linked_in_profile",
            description: "Core AWS compute, storage, networking, database primitives, security, and pricing models.",
            skills: ["AWS Primitives", "Cloud Security", "Cost Optimization"],
          },
          {
            name: "Enterprise DevOps & Cloud Infrastructure",
            issuer: "Frontend Masters",
            date: "2025",
            credentialId: "ef0bcdd703-WgcaROBMTb",
            credentialUrl: "https://static.frontendmasters.com/ud/c/ef0bcdd703/WgcaROBMTb/enterprise-devops.pdf",
            description: "GitOps workflows, container orchestration, CI/CD pipeline automation, and production cloud infrastructure.",
            skills: ["DevOps", "CI/CD", "Docker", "Cloud Infra"],
          },
          {
            name: "Introduction to DevOps",
            issuer: "Coursera",
            date: "2024",
            credentialId: "9HCVJMDC29NM",
            credentialUrl: "https://www.coursera.org/account/accomplishments/certificate/9HCVJMDC29NM",
            description: "Continuous integration, automated testing, version control trunk-based flows, and monitoring.",
            skills: ["DevOps Fundamentals", "Agile Engineering"],
          },
        ],
      },
      {
        category: "Machine Learning & Software Engineering",
        items: [
          {
            name: "Artificial Intelligence and Machine Learning",
            issuer: "Skillsoft",
            date: "2025",
            credentialId: "2dce364f-506f-45e7-a71e-9d40c96084ab",
            credentialUrl: "https://skillsoft.digitalbadges.skillsoft.com/2dce364f-506f-45e7-a71e-9d40c96084ab#acc.N7pclTxC",
            description: "Supervised and unsupervised learning, model loss optimization, cross-validation, and performance metrics.",
            skills: ["Machine Learning", "Model Evaluation", "Neural Networks"],
          },
          {
            name: "The Origins II: CSS",
            issuer: "Master.dev",
            date: "2024",
            credentialId: "ca862cb6-cb38-4e69-8236-552c34b06c6d",
            credentialUrl: "https://www.credential.net/ca862cb6-cb38-4e69-8236-552c34b06c6d#acc.96CzZRjb",
            description: "Deep dive into CSS architecture, box-sizing models, layout rendering algorithms, and responsive design systems.",
            skills: ["CSS Architecture", "Design Systems", "Web Performance"],
          },
        ],
      },
      {
        category: "Enterprise Systems & ERP",
        items: [
          {
            name: "Discovering Extended Warehouse Management with SAP S/4HANA - Record of Achievement",
            issuer: "SAP",
            date: "2025",
            credentialId: "ad8c2169-52f1-449f-a587-c3e030cd9678",
            credentialUrl: "https://www.credly.com/badges/ad8c2169-52f1-449f-a587-c3e030cd9678/linked_in_profile",
            description: "Enterprise warehouse logistics, process automation, inbound/outbound routing, and inventory optimization in S/4HANA.",
            skills: ["SAP S/4HANA", "EWM", "Supply Chain Architecture"],
          },
        ],
      },
      {
        category: "Executive Strategy & Quantitative Analytics",
        items: [
          {
            name: "Strategy and Game Theory for Management",
            issuer: "IIM Ahmedabad",
            date: "Jan 2025",
            credentialId: "0HJVSZS01OHT",
            credentialUrl: "https://www.coursera.org/account/accomplishments/verify/0HJVSZS01OHT",
            description: "Nash equilibria, strategic moves, backward induction, asymmetric information, and pricing mechanics.",
            skills: ["Game Theory", "Strategic Modeling", "Executive Decision Making"],
          },
          {
            name: "Business Analytics for Decision Making",
            issuer: "Univ. of Colorado Boulder",
            date: "Jan 2025",
            credentialId: "2Q37L9RDNMNT",
            credentialUrl: "https://www.coursera.org/account/accomplishments/verify/2Q37L9RDNMNT",
            description: "Linear optimization, decision trees, Monte Carlo simulations, and data interpretation for product strategy.",
            skills: ["Decision Modeling", "Predictive Analytics", "Simulation"],
          },
        ],
      },
    ],
  },

  interests: [
    { label: "Electronics & Robotics", emoji: "🔧" },
    { label: "DIY, Making & Repair", emoji: "🛠️" },
    { label: "Vehicles & Engines", emoji: "🏍️" },
    { label: "Science & Engineering", emoji: "🔬" },
    { label: "City Planning", emoji: "🏙️" },
    { label: "Economics", emoji: "📈" },
  ],

  interestsBlurb:
    "When I'm not coding I'm usually taking something apart — electronics, engines, anything that's broken. I'm also fascinated by systems at city and economy scale: how they're planned, how they fail, how to make them run better. Honestly it's the same itch as writing software.",
} as const;

export type Profile = typeof profile;
