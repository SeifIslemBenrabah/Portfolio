export interface CvExperience {
  role: string;
  org: string;
  period: string;
  bullets: string[];
}

export interface CvProject {
  name: string;
  tag: string;
  bullets: string[];
}

export interface CvEducation {
  school: string;
  location: string;
  degree: string;
  period: string;
  note?: string;
}

export const cvHeader = {
  name: 'Benrabah Seif Islem',
  title: 'Creative Designer & Full-Stack / AI Developer',
  location: 'Algeria',
  email: 'seifislem.benrabah@gmail.com',
  linkedin: 'linkedin.com/in/seifislembenrabah',
  github: 'github.com/SeifIslemBenrabah',
  behance: 'behance.net/seifislembenrabah',
};

export const cvAbout =
  'Hybrid creative developer working across full-stack engineering, applied AI/ML, and design. On the engineering side, I build microservices platforms, RAG and digital-twin systems, and production web apps with React, Node.js, Spring Boot, and FastAPI. On the design side, I lead branding and UI/UX projects end-to-end — identity systems, product interfaces, and motion — for clients across fashion, hospitality, and healthcare. I like problems that need both disciplines at once.';

export const cvEducation: CvEducation[] = [
  {
    school: "École Supérieure d'Informatique 08 Mai 1945 — Sidi Bel Abbès (ESI-SBA)",
    location: 'Sidi Bel Abbès, Algeria',
    degree: 'Engineer Diploma / Master in Software Engineering',
    period: '2023 – Present',
  },
  {
    school: 'Mohamed Boudiaf University',
    location: "M'sila, Algeria",
    degree: 'License 2, Computer Science',
    period: '2021 – 2023',
    note: 'Graduated among the top students of the class of 2021',
  },
];

export const cvExperience: CvExperience[] = [
  {
    role: 'Freelance Designer & Full-Stack Developer',
    org: 'Independent',
    period: 'Jan 2024 – Present',
    bullets: [
      'End-to-end branding, UI/UX design, and web development for clients across fashion, hospitality, healthcare, and events (Boutique Hafouda, Phinlex, TBSShop, BlueBite, Coach Amine, Tourify, and others).',
      'Own the full pipeline: identity design, high-fidelity prototyping, and production React/Next.js builds shipped and deployed independently.',
    ],
  },
  {
    role: 'IT Internship',
    org: 'Algérie Telecom — M\'sila',
    period: 'Sept – Oct 2024',
    bullets: [
      'Diagnosed and resolved system and network issues, supported internal users, and monitored connectivity across departments.',
      'Documented troubleshooting procedures and contributed to workflow-efficiency improvements.',
    ],
  },
];

export const cvProjects: CvProject[] = [
  {
    name: 'Resynex — AI-Powered Clinical Research Platform',
    tag: 'Full-Stack & AI/ML',
    bullets: [
      'Architected a 14-service microservices platform (Spring Cloud Gateway, Eureka, React/TypeScript, Node.js/Express, Python/FastAPI) orchestrated with Docker Compose on a Linux VPS.',
      "Built a Patient Digital Twin Generator using real PPMI (Parkinson's) cohort data with Monte Carlo uncertainty quantification — 12-month progression forecasts at 84.7% accuracy.",
      'Implemented RAG knowledge notebooks (NotesLab) on ChromaDB + Gemini API for document-grounded clinical research assistance, plus LitScope, a unified literature search across PubMed, Semantic Scholar, arXiv, and OpenAlex.',
    ],
  },
  {
    name: 'ESILearn — E-Learning Platform',
    tag: 'Full-Stack',
    bullets: [
      'Built a 3-portal (Admin/Teacher/Student) academic platform with JWT role-based auth, real-time Socket.io chat, a quiz engine, and file uploads via Cloudinary — graded 16.75/20.',
    ],
  },
  {
    name: 'Qwiky — Delivery Platform',
    tag: 'Full-Stack / Microservices',
    bullets: [
      'Node.js/MongoDB catalog service + Spring Boot/MySQL auth service with Google OAuth2, JWT, and role-based access for boutiques, clients, couriers, and admins.',
    ],
  },
  {
    name: 'ESI-SBA Committee System',
    tag: 'Full-Stack',
    bullets: [
      'Three role-based portals for managing employee financial requests, committee meetings, and payment tracking, with Excel export and file uploads.',
    ],
  },
  {
    name: 'Brand & UI/UX Design',
    tag: 'Design — see full gallery on Behance',
    bullets: [
      'Complete identity systems and UI/UX for Boutique Hafouda (fashion), Phinlex, TBSShop, BlueBite (restaurant), and a trading-books mobile app — logo, typography, color systems, and high-fidelity prototypes.',
    ],
  },
];

export const cvSkills = {
  development: [
    'React / Next.js / TypeScript',
    'Node.js, Express, Spring Boot, FastAPI',
    'Machine Learning & Deep Learning',
    'LLMs, RAG & Vector Databases',
    'Microservices & System Design',
    'MySQL, MongoDB, Oracle SQL',
    'Docker & Kubernetes',
    'JWT / OAuth Authentication',
  ],
  design: [
    'Adobe Illustrator & Photoshop',
    'Adobe After Effects & Premiere Pro',
    'Figma — UI/UX & Prototyping',
    'Brand Identity & Art Direction',
  ],
};

export const cvLanguages = [
  { name: 'Arabic', level: 'Native' },
  { name: 'French', level: 'B2' },
  { name: 'English', level: 'B2' },
];

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '/Portfolio';
export const cvPdfUrl = `${basePath}/cv/Seif_Islem_Benrabah_CV.pdf`;
