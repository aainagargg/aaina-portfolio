// content/profile.ts
//
// This file is the single source of truth for the site's content.
// Everything here is pulled directly from Aaina's resume + her own notes —
// nothing has been cut or condensed. When redesigning the site (in Claude
// Code or elsewhere), pull copy from THIS file rather than writing new
// summaries from scratch, and if something feels missing, it should be
// added here first, then rendered.
//
// TODO markers below mark places that need a real value from Aaina
// (a link, a press URL, a photo) before publishing.

export type Link = { label: string; url: string };

export const person = {
  name: "Aaina Garg",
  location: "Toronto, ON",
  email: "aaina.garg@mail.utoronto.ca",
  links: {
    linkedin: "https://www.linkedin.com/in/aaina-garg/",
    github: "https://github.com/aainagargg",
    substack: "https://substack.com/@buildingoutloud",
  },
  tagline:
    "I build ML systems that ship at scale, and study whether the systems we're building are the ones we should be building.",
};

export const education = {
  school: "University of Toronto",
  expected: "Spring 2027",
  program:
    "Honours Bachelor of Science, Specialist in Computer Science (Focus in AI), Major in Economics",
  extra: "Rotman Commerce Certificate in Business Fundamentals",
};

export const distinctions: string[] = [
  "1 of 30 selected for the Technology Leadership Initiative from 1,000+ applicants at the University of Toronto",
  "1 of 75 selected nationally for the AI4Good Machine Learning Fellowship, Google DeepMind",
  "1 of 35 selected nationally for the Let's Solve It Fellowship, RBC Borealis",
  "1 of 190 selected globally for Sentient Futures, Fall 2026",
];

export const clubLeadership: { role: string; org: string }[] = [
  { role: "Director of Technology", org: "UofT Open Source Intelligence" },
  { role: "Founder & President", org: "UofT Pilates & Yoga Club" },
  { role: "Consultant", org: "UofT 180 Degrees Consulting" },
  { role: "ML Associate", org: "UTMIST" },
  { role: "Conference Associate (x3)", org: "UofT AI" },
];

export const skills = {
  languagesAndTools: [
    "Python", "TypeScript", "SQL", "PyTorch", "Hugging Face", "RoBERTa",
    "YOLOv5", "LPRNet", "MCP", "Random Forest", "Next.js", "React",
    "REST APIs", "PostgreSQL", "Docker", "Microsoft Copilot Studio",
    "Power Automate", "NumPy", "Pandas", "Matplotlib", "LiDAR",
    "Cyclomedia", "CROW",
  ],
};

// "Build" — shipped, production ML / engineering work.
export type CaseStudy = {
  slug: string;
  org: string;
  orgUrl?: string; // TODO: confirm these are the links Aaina wants to send traffic to
  role: string;
  dates: string;
  title: string;
  description: string;
  metrics: string[];
  stack: string[];
};

export const buildWork: CaseStudy[] = [
  {
    slug: "arcadis-ai-intake",
    org: "Arcadis",
    orgUrl: "https://www.arcadis.com",
    role: "Machine Learning Engineer — 1st Canadian member, AI/Data team",
    dates: "May 2024 – present (Term 3: Jan 2026 – Apr 2027)",
    title: "An AI intake tool used by 60,000 employees",
    description:
      "Productionized an AI intake tool using A2A-compatible multi-agent orchestration in Microsoft Copilot Studio, with Power Automate workflows, a Next.js/React front end, API integrations, and caching. Standardized how AI projects get evaluated across the firm.",
    metrics: ["+60% intake consistency", "−70% early-stage evaluation time"],
    stack: ["Copilot Studio", "Power Automate", "Next.js", "React", "REST APIs"],
  },
  {
    slug: "arcadis-plate-detection",
    org: "Arcadis",
    orgUrl: "https://www.arcadis.com",
    role: "Machine Learning Engineer",
    dates: "2024 – 2025",
    title: "Vehicle & license-plate detection, end to end",
    description:
      "Engineered and deployed an end-to-end YOLOv5 + LPRNet pipeline for automated vehicle and license-plate detection and recognition — image ingestion, inference, confidence-based validation, and results logging — handling thousands of concurrent requests as a client-facing solution offering.",
    metrics: ["96%+ detection accuracy", "−60% manual validation", "$50K saved"],
    stack: ["YOLOv5", "LPRNet", "PyTorch", "Docker"],
  },
  {
    slug: "arcadis-road-quality",
    org: "Arcadis",
    orgUrl: "https://www.arcadis.com",
    role: "Machine Learning Engineer",
    dates: "2024 – 2025",
    title: "Scoring road-marking quality from LiDAR",
    description:
      "Architected a road-marking quality pipeline combining Geomaat LiDAR, marking-location data, and Cyclomedia street-level detections. Engineered data-quality checks and trained a random forest model to generate CROW condition scores for maintenance prioritization.",
    metrics: [],
    stack: ["LiDAR", "Random Forest", "Cyclomedia", "CROW scoring"],
  },
  {
    slug: "deepmind-bias-detection",
    org: "Google DeepMind, Vector Institute, MILA, CIFAR",
    orgUrl: "https://deepmind.google",
    role: "Applied ML Research Fellow — via AI4Good ML Fellowship",
    dates: "Jun 2025 – Sep 2025",
    title: "Detecting bias, then closing the gap",
    description:
      "Developed a bias-detection system using a RoBERTa classifier and applied adversarial debiasing (a discriminator penalizing protected-attribute leakage) to reduce the gender true-positive-rate gap, with minimal accuracy cost. Built an interactive React interface for real-time bias analytics and audit trails, on a scalable PostgreSQL + Docker backend with proper error handling and logging.",
    metrics: ["−68% gender TPR gap", "<2% accuracy loss", "+47% interpretability for non-technical users"],
    stack: ["RoBERTa", "adversarial debiasing", "React", "PostgreSQL", "Docker"],
  },
  {
    slug: "cashapp-bias-dashboard",
    org: "Cash App (Square)",
    orgUrl: "https://cash.app",
    role: "Software Engineer Apprentice — via UofT Technology Leadership Initiative",
    dates: "Sep 2024 – Dec 2024",
    title: "Making fairness metrics legible to everyone",
    description:
      "Built an interactive bias-analytics dashboard with ML engineers to visualize performance disparities, dynamic filters, and drill-down analyses for potential fairness vulnerabilities in model outputs. Implemented client-side aggregation and caching, translating technical fairness signals into visualizations for both technical and non-technical stakeholders.",
    metrics: ["−60% server load", "audit-ready bias metrics"],
    stack: ["Python", "NumPy", "Pandas", "Matplotlib", "TypeScript", "CSS"],
  },
];

// "Think" — research, governance work, and writing.
export type ThinkItem = {
  slug: string;
  org: string;
  orgUrl?: string;
  dates: string;
  title: string;
  description: string;
};

export const thinkWork: ThinkItem[] = [
  {
    slug: "sentient-futures",
    org: "Sentient Futures Project Incubator",
    orgUrl: "https://www.sentientfutures.ai",
    dates: "Aug 2026 – present",
    title: "AI Governance Research Fellow — Sentience-Aware LLM Evaluation Toolkit",
    description:
      "Proposed and building a toolkit testing how frontier LLMs reason about artificial sentience and moral status under adversarial pressure, shipping both an evaluation harness (code + a simple interface) and a public writeup for digital-minds and AI governance researchers to run directly. Building scenario sets targeting three failure modes: inconsistent judgments across structurally similar cases, denial of moral status under strong evidence, and welfare-blind reasoning in agentic decision tasks. Selected as 1 of 190 mentees globally.",
  },
  {
    slug: "cohumain",
    org: "Cohumain Labs",
    orgUrl: "https://www.cohumain.ai",
    dates: "Apr 2026 – present",
    title: "AI Research Intern — Return-on-Value-of-AI framework",
    description:
      "Co-developing a framework quantifying EU AI Act compliance economics — financial exposure and reputational value erosion via event-study methodology — and agentic-AI accountability gaps, for a white paper and an academic paper.",
  },
  {
    slug: "substack",
    org: "Building Out Loud",
    orgUrl: "https://substack.com/@buildingoutloud",
    dates: "Ongoing",
    title: "Writing — notes on shipping ML and where AI governance actually bites",
    // TODO: replace with a real 2-3 sentence description once there are
    // a few posts live — right now this is a placeholder based on the
    // handle name alone.
    description:
      "A running notebook on building ML systems in production and the governance questions that come up once they're live — written for people building the same things, not for an audience that's already decided how it feels about AI.",
  },
];

// Press / features — needs real URLs from Aaina before publishing.
export const press: Link[] = [
  // TODO: add the AI4Good feature link
  // { label: "AI4Good Machine Learning Fellowship feature", url: "" },
  // TODO: add the Indian financial press feature link
  // { label: "Feature in [publication name]", url: "" },
];

// "Beyond the build" — everything else: leadership, business/consulting side.
export type BeyondItem = {
  org: string;
  role: string;
  dates: string;
  description: string;
};

export const beyondWork: BeyondItem[] = [
  {
    org: "RBC Borealis",
    role: "Software and Machine Learning Engineering Fellow — via Let's Solve It Fellowship",
    dates: "Apr 2026 – Jul 2026",
    description:
      "Designed and deployed an accessible, AI-enabled course-planning and student-progress web dashboard (built with Claude Code and Google Antigravity) for the Canadian National Institute of Blind Foundation's educators with low vision — centralizing individualized learning plans, progress insights, and administrative workflows. Estimated to save 50+ educator hours per week.",
  },
  {
    org: "Embark",
    role: "Product Strategy Consultant — via UofT Technology Leadership Initiative",
    dates: "Sep 2026 – Dec 2026",
    description:
      "Designed an LLM-powered student-planning hub aggregating university, course, residence, club, and research information across 23 Ontario universities for guidance counsellors, students, and parents. Built an 8-week pilot and revenue model targeting 10 counsellors and 4,000 students, linking late-high-school engagement to Embark's RESP conversion funnel and projecting $4.4M AUM and $28.1K net earnings.",
  },
];
