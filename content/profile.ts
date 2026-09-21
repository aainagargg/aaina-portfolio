// content/profile.ts
//
// This file is the single source of truth for the site's content.
// Everything here is pulled directly from Aaina's resume and her full
// LinkedIn export (Sept 2026). Where the two disagreed, Aaina confirmed
// which was correct (see git history / conversation for the resolution
// log) — LinkedIn's dates/titles won for Arcadis structure, DeepMind
// selectivity, Embark dates, and RBC Borealis dates.
//
// TODO markers below mark places that still need a real value from Aaina
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
  highSchool: "GD Goenka Public School, Delhi",
};

export const distinctions: string[] = [
  "1 of 30 selected for the Technology Leadership Initiative, University of Toronto Department of Computer Science, from 1,000+ applicants",
  "1 of 74 selected nationally for the AI4Good Machine Learning Fellowship, Google DeepMind",
  "1 of 35 selected nationally for the Let's Solve It Fellowship, RBC Borealis",
  "1 of 190 selected globally for Sentient Futures, Fall 2026",
];

export const honors: string[] = [
  "Scholar's Excellence Award and Roll of Honour",
  "Rank 38, National Crest Math Olympiad",
  "QISKIT Quantum Computing Hackathon",
];

export const clubLeadership: { role: string; org: string }[] = [
  { role: "Secretary", org: "Computer Science Student Union, University of Toronto" },
  { role: "Recognized Study Group Leader", org: "University of Toronto" },
  { role: "Arrive Ready Group Leader", org: "University of Toronto" },
];

export const skills = {
  languagesAndTools: [
    "Python", "TypeScript", "SQL", "PyTorch", "Hugging Face", "RoBERTa",
    "YOLOv5", "LPRNet", "MCP", "Random Forest", "Next.js", "React",
    "REST APIs", "PostgreSQL", "Docker", "Microsoft Copilot Studio",
    "Power Automate", "NumPy", "Pandas", "Matplotlib", "LiDAR",
    "Cyclomedia", "CROW", "Keras", "Transformers", "Looker", "Power BI",
  ],
};

// The work-term arc: one role per year, pre-university through 3rd year,
// each with the project that defined it. Shown as its own progression on
// the Technical page, above the full case studies below.
export type WorkTerm = {
  term: string;
  org: string;
  role: string;
  dates: string;
  project: string;
};

export const workTerms: WorkTerm[] = [
  { term: "Pre-University", org: "IBI Group", role: "Data Analyst", dates: "May 2022 – Aug 2023", project: "Predictive analytics for traffic management, 500 signals optimized across Hyderabad." },
  { term: "Term 1 · 1st Year", org: "Arcadis", role: "Business Analyst", dates: "May 2024 – Oct 2024", project: "Enhanced TravelIQ/511 and automated client reporting." },
  { term: "Term 2 · 2nd Year", org: "HotSpot, Arcadis", role: "Product Management Analyst", dates: "May 2025 – Oct 2025", project: "Led the end-to-end LPR system redevelopment." },
  { term: "Term 3 · 3rd Year", org: "Arcadis", role: "Data Science Intern", dates: "Jan 2026 – present", project: "Shipped the AI intake tool used by 60,000 employees." },
];

// "Technical" — hands-on ML / software engineering work.
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
    slug: "arcadis-data-science-intern",
    org: "Arcadis",
    orgUrl: "https://www.arcadis.com",
    role: "Data Science Intern, AI/Data team (1st Canadian member)",
    dates: "Jan 2026 – present",
    title: "An AI intake tool used by 60,000 employees",
    description:
      "First official member of Arcadis's Data and AI team from Canada. Productionized an AI intake tool using A2A-compatible multi-agent orchestration in Microsoft Copilot Studio, with Power Automate workflows, a Next.js/React front end, API integrations, and caching. Standardized how AI projects get evaluated across the firm.",
    metrics: ["+60% intake consistency", "−70% early-stage evaluation time"],
    stack: ["Copilot Studio", "Power Automate", "Next.js", "React", "REST APIs"],
  },
  {
    slug: "hotspot-lpr",
    org: "HotSpot, an Arcadis solution",
    orgUrl: "https://www.arcadis.com",
    role: "Product Management Analyst",
    dates: "May 2025 – Oct 2025",
    title: "Leading the LPR system redevelopment",
    description:
      "Joined Canada's industry leader in digital parking innovation as a key contributor to the redesign of the license-plate recognition (LPR) system. Selected to lead the core end-to-end redevelopment of LPR infrastructure with YOLOv5 + LPRNet, including image ingestion, inference, confidence-based validation, and results logging. Acted as the bridge between technical, design, and business stakeholders, and co-authored the vision for flagship feature launches that doubled engagement metrics and set a new company standard for stability and user trust. Also architected a road-marking quality pipeline combining Geomaat LiDAR, marking-location data, and Cyclomedia street-level detections, training a random forest model to generate CROW condition scores for maintenance prioritization.",
    metrics: ["96%+ detection accuracy", "−60% manual validation", "$50K saved"],
    stack: ["YOLOv5", "LPRNet", "PyTorch", "Docker", "LiDAR", "Random Forest", "CROW scoring"],
  },
  {
    slug: "our-buddy-ai",
    org: "Our Buddy AI",
    role: "Founding Team + Chief Product Officer",
    dates: "Mar 2025 – Oct 2025",
    title: "Building AI agents into everyday workflows",
    description:
      "Co-founded Our Buddy AI, part of the Vector Institute DARMOD program, to embed intelligent, autonomous \"buddies\" (AI agents) directly into any workflow, giving individuals and teams AI-powered assistance, automation, and context-aware support. Secured up to $30,000 USD in Google Cloud Platform credits to power scalable development and experimentation, and collaborated with researchers and innovators through the Vector Institute DARMOD accelerator.",
    metrics: ["$30K USD in GCP credits secured"],
    stack: ["Agentic AI", "Vector Institute DARMOD"],
  },
  {
    slug: "deepmind-fairai",
    org: "Google DeepMind, Vector Institute, MILA, CIFAR",
    orgUrl: "https://deepmind.google",
    role: "AI Research Fellow (via AI4Good Fellowship)",
    dates: "Jun 2025 – Sep 2025",
    title: "FairAI: detecting bias, then closing the gap",
    description:
      "Selected 1 of 74 nationally for the AI4Good Fellowship, leading the design and implementation of \"FairAI,\" an initiative advancing fairness and equity in machine-learning-driven recruitment. Spearheaded debiasing strategies for resume-screening models, engineering and validating bias-mitigation techniques so models prioritize qualifications over demographic proxies. Built the underlying system with a RoBERTa classifier and adversarial debiasing (a discriminator penalizing protected-attribute leakage), an interactive React interface for real-time bias analytics and audit trails, and a scalable PostgreSQL + Docker backend. Delivered actionable insights and open-source tools for both employers and applicants.",
    metrics: ["−68% gender TPR gap", "<2% accuracy loss", "+47% interpretability for non-technical users"],
    stack: ["RoBERTa", "adversarial debiasing", "React", "PostgreSQL", "Docker"],
  },
  {
    slug: "cashapp-bias-dashboard",
    org: "Cash App (Square)",
    orgUrl: "https://cash.app",
    role: "Student Machine Learning Engineer (via UofT Technology Leadership Initiative)",
    dates: "Sep 2024 – Dec 2024",
    title: "Making fairness metrics legible to everyone",
    description:
      "Built a full-stack, interactive bias-analytics dashboard debiasing machine learning models at Cash App: a Python backend for performance disparities and drill-down analyses, and a TypeScript front end partnering with ML engineers to visualize dynamic filters and fairness vulnerabilities in model outputs. Implemented client-side aggregation and caching, translating technical fairness signals into visualizations for both technical and non-technical stakeholders.",
    metrics: ["−60% server load", "audit-ready bias metrics"],
    stack: ["Python", "NumPy", "Pandas", "Matplotlib", "TypeScript", "CSS"],
  },
  {
    slug: "arcadis-business-analyst",
    org: "Arcadis",
    orgUrl: "https://www.arcadis.com",
    role: "Business Analyst",
    dates: "May 2024 – Oct 2024",
    title: "Feedback filtering and reporting automation for TravelIQ/511",
    description:
      "Enhanced TravelIQ/511, one of Arcadis's top five SaaS-based products, to better meet market demands. Trained, evaluated, and visualized a machine-learning feedback-filtering model (Python, Keras, Transformers, Matplotlib, Hugging Face API) that performs keyword search and categorizes client feedback. Spearheaded automation of monthly web and mobile metrics reports for all clients using Looker, Power BI, and Google Analytics, built for leadership review.",
    metrics: ["+70% feedback-processing efficiency", "−60% manual reporting workload"],
    stack: ["Python", "Keras", "Transformers", "Hugging Face", "Looker", "Power BI", "Google Analytics"],
  },
  {
    slug: "embark-platform",
    org: "Embark",
    role: "Student GTM Consultant (via UofT Technology Leadership Initiative)",
    dates: "Sep 2025 – Dec 2025",
    title: "A full-stack, LLM-powered student-planning platform",
    description:
      "Built a full-stack student-planning platform end to end: an LLM-powered recommendation engine and a web-scraping pipeline on the backend, and a front end personalizing discovery of courses, clubs, residences, and research opportunities across 23 Ontario universities. See Fellowships for the business model and pilot results.",
    metrics: ["23 Ontario universities aggregated"],
    stack: ["Full-stack", "LLM integration", "Web scraping"],
  },
  {
    slug: "utmist-lovelytics",
    org: "UTMIST",
    orgUrl: "https://www.utmist.ca/",
    role: "ML Project Developer",
    dates: "Oct 2024 – Mar 2025",
    title: "External ML project with Lovelytics",
    description:
      "Built machine learning solutions as part of UTMIST's external project partnership with Lovelytics.",
    metrics: [],
    stack: ["Python", "Machine Learning"],
  },
  {
    slug: "ibi-group",
    org: "IBI Group",
    role: "Data Analyst",
    dates: "May 2022 – Aug 2023",
    title: "Predictive analytics for city traffic management",
    description:
      "Implemented predictive analytics using Python and Power BI to address real-time traffic-management challenges, and applied intelligent sustainability strategies to optimize traffic signals throughout Hyderabad. Developed a project-management dashboard used by senior leadership to monitor ongoing projects.",
    metrics: ["500 traffic signals optimized", "2 ongoing projects tracked for leadership"],
    stack: ["Python", "Power BI"],
  },
];

// "Research" — AI governance, policy, and academic research work.
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
    title: "AI Governance Research Fellow: Sentience-Aware LLM Evaluation Toolkit",
    description:
      "Proposed and building a toolkit testing how frontier LLMs reason about artificial sentience and moral status under adversarial pressure. Shipping an evaluation harness (code plus a simple interface) and a public writeup for digital-minds and AI governance researchers to run directly. Building scenario sets targeting three failure modes: inconsistent judgments across structurally similar cases, denial of moral status under strong evidence, and welfare-blind reasoning in agentic decision tasks. Selected as 1 of 190 mentees globally.",
  },
  {
    slug: "cohumain",
    org: "Cohumain Labs",
    orgUrl: "https://www.cohumain.ai",
    dates: "Apr 2026 – present",
    title: "Applied Economics of AI Researcher: Return-on-Value-of-AI framework",
    description:
      "Co-developing a framework quantifying EU AI Act compliance economics (financial exposure and reputational value erosion via event-study methodology) and agentic-AI accountability gaps, for a white paper and an academic paper.",
  },
  {
    slug: "iit-delhi",
    org: "Indian Institute of Technology, Delhi",
    dates: "Jan 2025 – Sep 2025",
    title: "AI Strategy & Research Intern: SLMs and NLP",
    description:
      "Collaborated with a diverse research team to translate theoretical advances into high-impact, production-grade solutions, bolstering the reliability and fairness of next-generation AI products. Focus on small language models and NLP.",
  },
  {
    slug: "rebellion-research",
    org: "Rebellion Research",
    dates: "Dec 2023 – Apr 2024",
    title: "Research Intern: stock-prediction LLM and quantum finance",
    description:
      "Built a stock-prediction LLM in New York, alongside investigating challenges in quantum finance for optimization purposes.",
  },
  {
    slug: "substack",
    org: "Building Out Loud",
    orgUrl: "https://substack.com/@buildingoutloud",
    dates: "Ongoing",
    title: "Writing: notes on shipping ML and where AI governance actually bites",
    description:
      "An experiment in remembering: notes on machine learning, memory, and models, written between shipping production systems and studying the governance questions those systems raise.",
  },
];

// Real Substack posts, pulled directly from buildingoutloud.substack.com.
export type SubstackPost = {
  title: string;
  url: string;
  date: string;
  excerpt: string;
};

export const substackPosts: SubstackPost[] = [
  {
    title: "Why YouTube Music's Algo Secretly Beat Spotify (Delhi Car Test)",
    url: "https://buildingoutloud.substack.com/p/why-youtube-musics-algo-secretly",
    date: "Jan 2026",
    excerpt: "The other day I was driving through Delhi with a friend, windows technically down (we wish, thanks to the AQI). I complimented his playlist, a perfect mix of Punjabi bangers and chill indie.",
  },
  {
    title: "Learning to Forget",
    url: "https://buildingoutloud.substack.com/p/learning-to-forget",
    date: "Oct 2025",
    excerpt: "What machine unlearning taught me about intelligence.",
  },
  {
    title: "Episode 3: On Memory, Models, and Stories That Aren't Ours",
    url: "https://buildingoutloud.substack.com/p/episode-3-on-memory-models-and-stories",
    date: "Jun 2025",
    excerpt: "Hi, I'm Aaina and this blog is an experiment in remembering.",
  },
];

// Press / features.
export type PressFeature = {
  publication: string;
  title: string;
  date: string;
  quote: string;
  url: string;
  image: string;
};

export const press: PressFeature[] = [
  {
    publication: "Financial Express",
    title: "Sarvam AI models excel in Indic, lag frontier systems",
    date: "Mar 2026",
    quote:
      "This is a serious systems choice for long-context reasoning and inference efficiency. Sarvam isn't scaling parameters for the sake of it but making architectural choices around efficiency.",
    url: "https://epaper.financialexpress.com/m5/4130306/Delhi/MARCH-19-2026#page/4/1",
    image: "/press/financial-express.png",
  },
  {
    publication: "Mila (Quebec AI Institute)",
    title: "Designing the Future: Three AI4Good Lab Alumni on Belonging, Courage, and Building AI for Everyone",
    date: "2026",
    quote:
      "Don't wait until you feel ready. Just start.",
    url: "https://mila.quebec/en/news/three-ai4goodlab-alumni-on-belonging-courage-building-ai-for-everyone",
    image: "/press/mila.png",
  },
];

// Moments — photos from talks, mentors, and speakers she's crossed
// paths with, shared publicly on her own Instagram/LinkedIn.
export type Moment = {
  name: string;
  role: string;
  image: string;
  profileUrl: string;
};

export const moments: Moment[] = [
  {
    name: "Geoffrey Hinton",
    role: "Nobel laureate in Physics, \"Godfather of AI\"",
    image: "/photos/moments/hinton.jpg",
    profileUrl: "https://www.cs.toronto.edu/~hinton/",
  },
  {
    name: "Leena Nair",
    role: "Global CEO, Chanel",
    image: "/photos/moments/leena-nair.jpg",
    profileUrl: "https://en.wikipedia.org/wiki/Leena_Nair",
  },
  {
    name: "Paul",
    role: "Mentor, UofT Technology Leadership Initiative",
    image: "/photos/moments/paul.jpg",
    profileUrl: "https://www.technologyleadershipinitiative.com",
  },
  {
    name: "Mike",
    role: "Mentor, UofT Technology Leadership Initiative",
    image: "/photos/moments/mike.jpg",
    profileUrl: "https://www.technologyleadershipinitiative.com",
  },
];

// "Fellowships" — the selective programs, and the concrete deliverable
// each one produced.
export type BeyondItem = {
  org: string;
  role: string;
  dates: string;
  description: string;
  metrics: string[];
  stack: string[];
};

export const beyondWork: BeyondItem[] = [
  {
    org: "RBC Borealis",
    role: "Machine Learning Researcher (via Let's Solve It Fellowship)",
    dates: "Mar 2026 – May 2026",
    description:
      "Worked on assistive ML technology. Designed and deployed an accessible, AI-enabled course-planning and student-progress web dashboard for the Canadian National Institute of Blind Foundation's educators with low vision. Centralizes individualized learning plans, progress insights, and administrative workflows.",
    metrics: ["50+ educator hours saved per week"],
    stack: ["Claude Code", "Google Antigravity"],
  },
  {
    org: "Embark",
    role: "Student GTM Consultant (via UofT Technology Leadership Initiative)",
    dates: "Sep 2025 – Dec 2025",
    description:
      "Built a full-stack, centralized student-planning platform using LLM-powered recommendations and web scraping to personalize discovery of courses, clubs, residences, and research opportunities across 23 Ontario universities. Built an 8-week pilot and revenue model targeting 10 guidance counsellors and 4,000 students, linking late-high-school engagement to Embark's RESP conversion funnel. See Technical for the build.",
    metrics: ["$4.4M AUM projected", "$28.1K net earnings projected", "23 Ontario universities", "4,000 students targeted"],
    stack: ["Full-stack", "LLM-powered recommendations", "web scraping"],
  },
];

// Credentials — curated from a longer LinkedIn certifications list.
// `featured` marks the ones most relevant to the AI engineering / AI
// governance brief; the rest are real but rendered lighter-weight so the
// site doesn't turn into a spec sheet.
export type Credential = {
  title: string;
  issuer: string;
  issued: string;
  featured?: boolean;
};

export const credentials: Credential[] = [
  { title: "Future of AI", issuer: "BlueDot Impact", issued: "Jul 2026", featured: true },
  { title: "Claude Code: Software Engineering with Generative AI Agents", issuer: "Vanderbilt University", issued: "May 2026", featured: true },
  { title: "AI Agents and Agentic AI with Python & Generative AI", issuer: "Vanderbilt University", issued: "May 2026", featured: true },
  { title: "Generative AI Software Engineering Specialization", issuer: "Vanderbilt University", issued: "Jun 2026", featured: true },
  { title: "Introduction to LangChain", issuer: "LangChain", issued: "Jun 2026", featured: true },
  { title: "AI Strategy and Governance", issuer: "University of Pennsylvania", issued: "Aug 2025", featured: true },
  { title: "AI Applications in Marketing and Finance", issuer: "University of Pennsylvania", issued: "Aug 2025" },
  { title: "AI Applications in People Management", issuer: "University of Pennsylvania", issued: "Aug 2025" },
  { title: "The AI Awakening: Implications for the Economy and Society", issuer: "Stanford University", issued: "Dec 2024" },
  { title: "AI Product Management Specialization", issuer: "Duke University", issued: "Aug 2024" },
  { title: "Human Factors in AI", issuer: "Duke University", issued: "Aug 2024" },
  { title: "Managing Machine Learning Projects", issuer: "Duke University", issued: "Aug 2024" },
  { title: "Machine Learning Foundations for Product Managers", issuer: "Duke University", issued: "Aug 2024" },
  { title: "Financial Markets", issuer: "Yale University", issued: "Jul 2024" },
  { title: "Trading Basics", issuer: "Indian School of Business", issued: "Jul 2024" },
  { title: "Introduction to Healthcare", issuer: "Stanford University", issued: "Jan 2024" },
  { title: "Bloomberg Finance Fundamentals Certificate", issuer: "Bloomberg", issued: "Dec 2023" },
  { title: "eAI + Quantization Workshop", issuer: "IEEE University of Toronto Student Branch", issued: "2023" },
  { title: "Introduction to Management Consulting", issuer: "Emory University, Goizueta Business School", issued: "Dec 2023" },
  { title: "Python Programming for Everybody", issuer: "University of Michigan", issued: "Sep 2023" },
  { title: "Data Science Summer School", issuer: "Hertie School Data Science Lab", issued: "Aug 2023" },
  { title: "Prompt Engineering for ChatGPT", issuer: "Vanderbilt University", issued: "Aug 2023" },
];

// Community — the clubs behind the roles in clubLeadership, with a real
// screenshot of each club's own site (captured directly, not fabricated)
// so each one gets a genuine visual, not just a text link.
export type CommunityClub = {
  name: string;
  role: string;
  url: string;
  description: string;
  image?: string; // omitted where the linked page can't render a clean preview (e.g. Instagram's logged-out wall)
};

export const communityClubs: CommunityClub[] = [
  {
    name: "UofT Open Source Intelligence",
    role: "Director of Technology",
    url: "https://uoftosint.com/",
    description: "The platform for open source intelligence research and academic collaboration at the University of Toronto. Helping build Canada's leading OSINT and AI talent pipeline.",
    image: "/community/osint.png",
  },
  {
    name: "UofT Pilates & Yoga Club",
    role: "Founder & President",
    url: "https://www.instagram.com/pilatesandyogaclub/",
    description: "Scaled the community from 0 to 700+ members and 90K+ engagement on Instagram. Founded from scratch, spearheading inclusive events and streamlining communication channels for member engagement.",
  },
  {
    name: "UofT AI",
    role: "Conference Director",
    url: "https://www.uoft.ai/",
    description: "The University of Toronto's leading student AI group. Promoted to Conference Director after three years as Conference Associate, organizing the annual AI conference with 450+ attendees and speakers from Radical Ventures, Google, and OpenAI.",
    image: "/community/uoftai.png",
  },
  {
    name: "UTMIST",
    role: "ML Project Developer",
    url: "https://www.utmist.ca/",
    description: "North America's largest student led organization for artificial intelligence and machine learning. Built ML solutions through an external project partnership with Lovelytics.",
    image: "/community/utmist.png",
  },
  {
    name: "180 Degrees Consulting, UofT",
    role: "Consultant",
    url: "https://180dc.org/",
    description: "The world's largest university based consultancy for nonprofits and socially conscious organisations. Consulted on a café and catering service's digital presence, a project that won 'Most Impactful' and 'Most Innovative' from the client and 180DC leadership.",
    image: "/community/180dc.png",
  },
];

// Founded platforms and other builder credentials that don't have a
// club website to preview, but are substantial enough to deserve a full
// card of their own rather than a bare leadership line.
export type CommunityBuild = {
  name: string;
  role: string;
  dates: string;
  description: string;
};

export const communityBuilds: CommunityBuild[] = [
  {
    name: "Unicorn UofT",
    role: "Founder & President",
    dates: "Apr 2025 – Oct 2025",
    description:
      "Co-founded and launched a student-led platform and podcast on a mission to democratize access to careers and entrepreneurship at the University of Toronto, spotlighting diverse journeys and breaking down barriers to innovation across campus.",
  },
];

// A comprehensive reverse-chronological record of everything, including
// roles that predate or sit outside the ML/governance/economics throughline
// covered elsewhere on the site. Nothing is cut here.
export type JourneyYear = "Year 4" | "Year 3" | "Year 2" | "Year 1" | "Before UofT";

export type JourneyItem = {
  org: string;
  role: string;
  dates: string;
  location?: string;
  description: string;
  accent: "signal" | "pulse" | "econ";
  year: JourneyYear;
};

// A one-line highlight per academic year, shown above that year's group on
// the Journey page. Most recent year first.
export const yearHighlights: Record<JourneyYear, string> = {
  "Year 4": "Opened the year with a global fellowship at Sentient Futures, researching how AI systems reason about moral status, and got promoted to Conference Director at UofT AI.",
  "Year 3": "Joined Arcadis's AI/Data team, started at Cohumain Labs, and consulted for RBC Borealis, on top of a fellowship at Google DeepMind.",
  "Year 2": "The year it compounded: led the LPR system redevelopment at HotSpot, co-founded Our Buddy AI, and founded Unicorn UofT, all while still full-time in class.",
  "Year 1": "Landed my first internship at Arcadis before the year was even over, while helping run CSSU and a peer study group on the side.",
  "Before UofT": "Traffic analytics in Hyderabad, community volunteering in Delhi, and a first taste of digital marketing, before any of this was the plan.",
};

export const journey: JourneyItem[] = [
  { org: "Sentient Futures Project Incubator", role: "AI Governance Research Fellow", dates: "Aug 2026 – present", location: "Remote", description: "Building a Sentience-Aware LLM Evaluation Toolkit. Selected 1 of 190 mentees globally.", accent: "pulse", year: "Year 4" },
  { org: "UofT AI", role: "Conference Director", dates: "Sep 2026 – present", location: "Toronto, ON", description: "Promoted after three years as Conference Associate. Now directing the annual AI conference with 450+ attendees.", accent: "econ", year: "Year 4" },
  { org: "Arcadis", role: "Data Science Intern, AI/Data team", dates: "Jan 2026 – present", location: "Toronto, ON", description: "First official member of Arcadis's Data and AI team from Canada. Shipped the AI intake tool used by 60,000 employees.", accent: "signal", year: "Year 3" },
  { org: "Cohumain Labs", role: "Applied Economics of AI Researcher", dates: "Apr 2026 – present", location: "Toronto, ON", description: "Co-developing a Return-on-Value-of-AI framework for EU AI Act compliance economics.", accent: "pulse", year: "Year 3" },
  { org: "RBC Borealis", role: "Machine Learning Researcher", dates: "Mar 2026 – May 2026", location: "Toronto, ON", description: "Assistive ML technology, via the Let's Solve It Fellowship. 1 of 35 selected nationally.", accent: "econ", year: "Year 3" },
  { org: "Embark", role: "Student GTM Consultant", dates: "Sep 2025 – Dec 2025", location: "Toronto, ON", description: "LLM-powered student-planning hub across 23 Ontario universities, via UofT Technology Leadership Initiative.", accent: "econ", year: "Year 3" },
  { org: "UofT Open Source Intelligence", role: "Director of Technology", dates: "Oct 2025 – Aug 2026", description: "Helping build Canada's leading OSINT and AI talent pipeline.", accent: "signal", year: "Year 3" },
  { org: "HotSpot, an Arcadis solution", role: "Product Management Analyst", dates: "May 2025 – Oct 2025", location: "Toronto, ON", description: "Led the end-to-end redevelopment of Arcadis's license-plate recognition infrastructure, second year.", accent: "signal", year: "Year 2" },
  { org: "Unicorn UofT", role: "Founder & President", dates: "Apr 2025 – Oct 2025", description: "Founded a student-led platform and podcast on careers and entrepreneurship at UofT.", accent: "econ", year: "Year 2" },
  { org: "Our Buddy AI", role: "Founding Team + Chief Product Officer", dates: "Mar 2025 – Oct 2025", description: "AI agent productivity startup, part of the Vector Institute DARMOD accelerator.", accent: "signal", year: "Year 2" },
  { org: "Google DeepMind, Vector Institute, MILA, CIFAR", role: "AI Research Fellow, AI4Good", dates: "Jun 2025 – Sep 2025", location: "Toronto, ON", description: "Led \"FairAI,\" a fairness initiative for ML-driven recruitment. 1 of 74 selected nationally.", accent: "signal", year: "Year 2" },
  { org: "180 Degrees Consulting, University of Toronto", role: "Consultant", dates: "Oct 2024 – Oct 2025", location: "Toronto, ON", description: "Redeveloped a café and catering service's digital presence. Won 'Most Impactful' and 'Most Innovative.'", accent: "econ", year: "Year 2" },
  { org: "Indian Institute of Technology, Delhi", role: "AI Strategy & Research Intern", dates: "Jan 2025 – Sep 2025", description: "Focus on small language models and NLP research.", accent: "pulse", year: "Year 2" },
  { org: "UTMIST", role: "ML Project Developer", dates: "Oct 2024 – Mar 2025", location: "Toronto, ON", description: "External ML project in partnership with Lovelytics.", accent: "signal", year: "Year 2" },
  { org: "UofT Pilates & Yoga Club", role: "Founder & President", dates: "Feb 2024 – present", location: "Toronto, ON", description: "Scaled the club from 0 to 700+ members and 90K+ Instagram engagement.", accent: "econ", year: "Year 2" },
  { org: "UofT AI", role: "Conference Associate", dates: "Nov 2023 – Aug 2026", location: "Toronto, ON", description: "Organized the annual AI conference with 450+ attendees across three years, before being promoted to Conference Director.", accent: "econ", year: "Year 1" },
  { org: "Cash App (Square)", role: "Student Machine Learning Engineer", dates: "Sep 2024 – Dec 2024", description: "Debiasing machine learning models, via UofT Technology Leadership Initiative.", accent: "signal", year: "Year 1" },
  { org: "Arcadis", role: "Business Analyst", dates: "May 2024 – Oct 2024", location: "Toronto, ON", description: "Enhanced TravelIQ/511 and automated client reporting. First internship, landed before first year was over.", accent: "signal", year: "Year 1" },
  { org: "Elite Wealth Ltd", role: "Equity Research Analyst", dates: "May 2024 – Jun 2024", location: "Delhi, India", description: "Prepared IPO notes and analyzed large portfolios (>$1M USD).", accent: "econ", year: "Year 1" },
  { org: "Rebellion Research", role: "Research Intern", dates: "Dec 2023 – Apr 2024", location: "New York, NY", description: "Built a stock-prediction LLM and investigated quantum finance optimization.", accent: "pulse", year: "Year 1" },
  { org: "Computer Science Student Union, University of Toronto", role: "Secretary", dates: "Oct 2023 – Apr 2024", location: "Toronto, ON", description: "CSSU General Council, Communications Committee.", accent: "econ", year: "Year 1" },
  { org: "University of Toronto", role: "Recognized Study Group Leader", dates: "Sep 2023 – Dec 2023", location: "Toronto, ON", description: "Led a peer study group for fellow students.", accent: "econ", year: "Year 1" },
  { org: "University of Toronto", role: "Arrive Ready Group Leader", dates: "Jul 2023 – Aug 2023", description: "Led incoming-student orientation programming.", accent: "econ", year: "Year 1" },
  { org: "Hertie School Data Science Lab", role: "Summer School Participant", dates: "Aug 2023", location: "Berlin, Germany", description: "R, Python, calculus and linear algebra for data science, generative AI, fine-tuning transformers, and deep learning for multi-modal systems.", accent: "pulse", year: "Year 1" },
  { org: "IBI Group", role: "Data Analyst", dates: "May 2022 – Aug 2023", description: "Predictive analytics for traffic management, optimizing 500 signals across Hyderabad.", accent: "signal", year: "Before UofT" },
  { org: "Mediworld", role: "Community Volunteer", dates: "Nov 2018 – Aug 2023", location: "Delhi, India", description: "Coached underprivileged children in math and English. COVID-relief work for 150+ people.", accent: "econ", year: "Before UofT" },
];
