import { Project, Service, Skill, Testimonial, Experience } from './types';

// Importing generated premium assets
import profileImg from './assets/images/portfolio2_nobg.png';
import logoBoutique from './assets/logos/logo_boutique.svg';
import logoPhinlex from './assets/logos/logo_phinlex.svg';
import logoCoach from './assets/logos/logo_coach.svg';
import logoQwiki from './assets/logos/logo_qwiki.svg';
import logoBluebite from './assets/logos/logo_bluebite.svg';
import logoResynex from './assets/logos/logo_resynex.svg';
export const personalInfo = {
  name: 'Seif Islem',
  title: 'Creative Designer & Developer',
  location: 'Algeria',
  bio: 'A high-end creative designer and developer passionate about typography, branding, UI/UX, and immersive digital experiences. Balancing precision code with aesthetic luxury.',
  avatar: profileImg,
};

export const services: Service[] = [
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    description: 'Forging luxury, minimalist, high-fidelity interfaces. My pixel-perfect approach combines ergonomic layouts with custom tactile physics and immersive visual state structures.',
    details: ['Interactive High-Fi Prototyping', 'Artistic Interface Architecture', 'Sophisticated Micro-interactions', 'Heuristic Ergonomic Auditing'],
    iconName: 'Sparkles',
  },
  {
    id: 'branding',
    title: 'Branding & Identity',
    description: 'Defining pristine sensory landscapes for premium clients. I devise high-contrast, scalable design assets, curated type guidelines, and luxury visual guidelines.',
    details: ['Bespoke Logo Design & Icons', 'Holistic Vector Guidelines', 'Sophisticated Spatial Typography', 'Complete Digital Brand Books'],
    iconName: 'Crown',
  },
  {
    id: 'web-dev',
    title: 'Web Development',
    description: 'Transforming premium concepts into living code. Building ultra-stable, light-speed applications with pristine responsive configurations and elegant transitions.',
    details: ['React + Vite + Tailwind Solutions', 'Fluid & Optimized Motion Transitions', 'Responsive Mobile-First Logic', 'Accessible Semantic Frontends'],
    iconName: 'CodeXml',
  },
  {
    id: 'motion',
    title: 'Motion Design',
    description: 'Infusing motion into static objects to foster deep user focus. Generating dynamic ribbons, spinning decorative dials, and cinematic page flow animations.',
    details: ['Dynamic Scroll Physics Routing', 'Ambient SVG Visual Synthesizers', 'Bespoke Micro-Animation Sets', 'Cinematic Web Intro Choreography'],
    iconName: 'RotateCw',
  },
];

export const projects: Project[] = [
  {
    id: 'coach-amine-website',
    title: 'Coach Amine — Official Website',
    category: 'Web Development',
    image: logoCoach,
    description: 'A completely custom, high-performance professional website for Coach Amine. Built with React and modern web technologies to deliver an impactful digital presence, smooth animations, and an optimal user experience.',
    link: 'https://coachamine.netlify.app/',
    tags: ['Web Development', 'React', 'Frontend', 'UI/UX'],
    year: '2025',
    featured: true,
  },
  {
    id: 'boutique-hafouda',
    title: 'Boutique Hafouda — Fashion Brand Identity',
    category: 'Branding',
    image: logoBoutique,
    description: 'A complete fashion brand identity design for Boutique Hafouda. Crafting a luxurious and cohesive visual system encompassing logo, typography, color palette, and brand collateral.',
    link: 'https://www.behance.net/gallery/234641597/Boutique-Hafouda-Fashion-Brand-Identity-Design',
    tags: ['Branding', 'Fashion', 'Logo Design', 'Identity'],
    year: '2025',
    featured: true,
  },
  {
    id: 'phinlex-brand',
    title: 'Phinlex — Brand Design',
    category: 'Branding',
    image: logoPhinlex,
    description: 'A modern, bold brand design for Phinlex. Developing a distinctive visual identity that communicates innovation and professionalism across all touchpoints.',
    link: 'https://www.behance.net/gallery/245616171/Brand-Design-Phinlex',
    tags: ['Branding', 'Logo Design', 'Visual Identity', 'Modern'],
    year: '2025',
    featured: true,
  },
  {
    id: 'public-speaking-event',
    title: 'Public Speaking Event Branding',
    category: 'Branding',
    image: logoCoach,
    description: 'Event branding for a public speaking conference. Designing dynamic visuals, promotional materials, and a cohesive identity that captures the energy and impact of live presentations.',
    link: 'https://www.behance.net/gallery/226407337/Public-Speaking-Event-Branding',
    tags: ['Event Branding', 'Graphic Design', 'Print', 'Visual Identity'],
    year: '2024',
    featured: true,
  },
  {
    id: 'tbsshop-rebrand',
    title: 'TBSShop — Brand Rebranding',
    category: 'Branding',
    image: logoQwiki,
    description: 'A comprehensive rebranding project for TBSShop. Revitalizing the existing brand with a fresh visual direction, updated logo system, and modernized brand guidelines.',
    link: 'https://www.behance.net/gallery/221647533/TBSShop-Brand-design-Rebranding',
    tags: ['Rebranding', 'Logo Design', 'Brand Strategy', 'Guidelines'],
    year: '2024',
  },
  {
    id: 'bluebite-restaurant',
    title: 'BlueBite — Restaurant Brand Identity',
    category: 'Branding',
    image: logoBluebite,
    description: 'Full brand identity for BlueBite restaurant. Creating an appetizing and memorable visual system including logo, menu design, packaging, and environmental graphics.',
    link: 'https://www.behance.net/gallery/207965991/Resturent-BlueBite-Brand-Identity',
    tags: ['Restaurant', 'Brand Identity', 'Logo Design', 'Packaging'],
    year: '2024',
  },
  {
    id: 'trading-books-app',
    title: 'Trading Books App — UI/UX Design',
    category: 'UI/UX Design',
    image: logoResynex,
    description: 'A sleek mobile app UI/UX design for a trading books platform. Focusing on intuitive navigation, clean data presentation, and a premium reading experience for financial literature.',
    link: 'https://www.behance.net/gallery/209056979/Trading-Books-App-UIUX-Design',
    tags: ['UI/UX', 'Mobile App', 'Figma', 'Interaction Design'],
    year: '2024',
    featured: true,
  },
];

export const skills: Skill[] = [
  // Creative / Design Suite
  { name: 'Adobe Illustrator', category: 'Design', percentage: 95 },
  { name: 'Photoshop', category: 'Design', percentage: 92 },
  { name: 'After Effects', category: 'Design', percentage: 88 },
  { name: 'Figma', category: 'Design', percentage: 98 },

  // Technical / Code Suite
  { name: 'React', category: 'Development', percentage: 94 },
  { name: 'HTML / CSS', category: 'Development', percentage: 98 },
  { name: 'JavaScript', category: 'Development', percentage: 92 },
  { name: 'Tailwind CSS', category: 'Development', percentage: 97 },
];

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    period: '2024 - PRESENT',
    role: 'Lead Creative Developer & Designer',
    company: 'Zenith Digital Agency',
    description: 'Directing visual architecture and high-fidelity front-end engineering for elite domestic and international clients. Spearheaded transitions into elegant dark/beige premium design guides and automated animations.',
    achievements: [
      'Engineered interactive core modules for 12+ luxury-sector client pages.',
      'Reduced initial page loading sequences by 45% using customized assets & optimized motion configurations.',
      'Cultivated consistent premium UI code standards using Tailwind and high-fidelity React state dynamics.',
    ],
  },
  {
    id: 'exp-2',
    period: '2022 - 2024',
    role: 'Senior Front-End Engineer & UX Specialist',
    company: 'Bloom Studio',
    description: 'Pioneered custom interfaces and tactile interactive modules. Bridged the exact gap between traditional pixel-based design layouts and lightweight web architectures.',
    achievements: [
      'Developed 3 custom interactive typography tools used in global high-fashion landing experiences.',
      'Implemented advanced canvas and scroll-linked micro-interaction systems using Framer Motion.',
      'Designed a scalable design token engine for cross-platform aesthetic consistency.',
    ],
  },
  {
    id: 'exp-3',
    period: '2020 - 2022',
    role: 'UI/UX Designer & Developer',
    company: 'TechSahara',
    description: 'Crafted digital experiences solving key conversion challenges while delivering sophisticated, clean visual layouts for local technology innovators.',
    achievements: [
      'Designed full responsive workflows for 18 complex web dashboards.',
      'Constructed highly clean, reusable HTML/CSS component libraries, accelerating delivery speeds.',
      'Collaborated with production researchers to outline precise tactile interaction parameters.',
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 't-1',
    name: 'Alessandra Moretti',
    role: 'Art Director',
    company: 'Vervain Luxury',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80',
    text: "Seif brings an unparalleled level of visual gravity and code discipline to the creative process. He recreated our brand's luxury digital landscape with absolute perfection, matching each micro-interaction exactly as proposed.",
    rating: 5,
  },
  {
    id: 't-2',
    name: 'Yanis Belkacem',
    role: 'Founder',
    company: 'Atelier Bloom',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80',
    text: "The combination of raw aesthetic sensibility and pure engineering is extremely rare. Seif operates at this rare intersection. Our interactive portfolio is a masterwork of elegant layouts, fluid transitions, and glowing lighting.",
    rating: 5,
  },
  {
    id: 't-3',
    name: 'Sonia Meriem',
    role: 'VP of Product',
    company: 'Krypton Labs',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80',
    text: "Working with Seif was spectacular. His attention to precise detail, clean visual hierarchy, and polished curved layouts helped establish a new benchmark for our online agency presence.",
    rating: 5,
  },
];
