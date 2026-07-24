export interface Dict {
  nav: {
    home: string;
    design: string;
    dev: string;
    about: string;
    testimonials: string;
    contact: string;
  };
  hero: {
    intro: string;
    line1: string;
    line2: string;
    location: string;
    ctaDesigner: string;
    ctaDeveloper: string;
    logoStrip: string;
  };
  about: {
    eyebrow: string;
    title: string;
    bio: string;
    statYears: string;
    statProjects: string;
    statClients: string;
    statRetention: string;
    devSkills: string;
    designSkills: string;
    timeline: string;
  };
  testimonials: {
    eyebrow: string;
    title: string;
  };
  work: {
    design: { eyebrow: string; title: string; description: string };
    dev: { eyebrow: string; title: string; description: string };
    featured: string;
  };
  footer: {
    eyebrow: string;
    headline: string;
    ctaDesign: string;
    ctaDev: string;
    ctaNeedDesigner: string;
    ctaNeedDev: string;
  };
}

const en: Dict = {
  nav: {
    home: 'Home',
    design: 'Design',
    dev: 'Dev',
    about: 'About',
    testimonials: 'Testimonials',
    contact: 'Contact me',
  },
  hero: {
    intro: "Hey, I'm {name}. I'm a",
    line1: 'Developer',
    line2: '& Designer',
    location: 'Freelance, based in {location}.',
    ctaDesigner: 'Need a designer?',
    ctaDeveloper: 'Need a developer?',
    logoStrip: 'Selected projects & collaborations',
  },
  about: {
    eyebrow: 'About',
    title: 'Design and code, from the same hands.',
    bio: 'Hybrid creative developer working across full-stack engineering, applied AI/ML, and design. On the engineering side, I build microservices platforms, RAG and digital-twin systems, and production web apps with React, Node.js, Spring Boot, and FastAPI. On the design side, I lead branding and UI/UX projects end-to-end — identity systems, product interfaces, and motion — for clients across fashion, hospitality, and healthcare. I like problems that need both disciplines at once.',
    statYears: 'Years experience',
    statProjects: 'Projects completed',
    statClients: 'Happy clients',
    statRetention: 'Retention rate',
    devSkills: 'Development',
    designSkills: 'Design',
    timeline: 'Experience & education',
  },
  testimonials: {
    eyebrow: 'Testimonials',
    title: 'What clients say',
  },
  work: {
    design: {
      eyebrow: 'Design',
      title: 'Brand identity & UI/UX',
      description:
        'Logo systems, visual identities, and product interfaces for fashion, hospitality, healthcare, and events — see the full case studies on Behance.',
    },
    dev: {
      eyebrow: 'Development',
      title: 'Full-stack builds',
      description:
        'Production web apps and microservices platforms — React, Node.js, Spring Boot, and FastAPI, shipped end-to-end.',
    },
    featured: 'Featured',
  },
  footer: {
    eyebrow: 'Get in touch',
    headline: "Let's build something worth shipping.",
    ctaDesign: 'View my design work',
    ctaDev: 'View my dev projects',
    ctaNeedDesigner: "Need a designer? Let's talk",
    ctaNeedDev: "Need a developer? Let's build",
  },
};

export default en;
