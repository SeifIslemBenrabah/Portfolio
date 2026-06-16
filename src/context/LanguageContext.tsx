import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'fr' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRtl: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Me',
    'nav.services': 'Services',
    'nav.work': 'My Work',
    'nav.testimonials': 'Testimonials',
    'nav.contact': 'Contact Me',

    // Hero Section - Part 1
    'hero.badge': "Hi! I'm Seif | Based in Algeria",
    'hero.greeting': "Hello!",
    'hero.im': "I'm",
    'hero.name': "Seif Islem",
    'hero.cta.work': "My Work",
    'hero.cta.hire': "Hire Me",
    'hero.title.creative': 'Creative',
    'hero.title.and': ' Designer &',
    'hero.title.dev': 'Developer',
    'hero.subtitle': 'I build digital experiences that solve problems, inspire action, and create impact.',
    'hero.scrollDown': 'Scroll down to discover',

    // Hero Section - Part 2 (The Rest / "raset")
    'hero.badge.circular': '• SEIF ISLEM PORTFOLIO • IMAGINE • DEVELOP •',
    'hero.card.role': 'ROLE',
    'hero.card.title': 'Designer & Dev',
    'hero.curved.heading': 'I build designs that solve problems, inspire action, and drive success.',
    'hero.curved.solve': 'solve',
    'hero.curved.problems': 'problems',
    'hero.curved.inspire': 'inspire action',
    'hero.curved.success': 'success',
    'hero.curved.desc': 'As a hybrid digital architect, I balance the structural precision of technical systems with high-end luxury art direction. Together, we translate complex functional products into memorable visual masterpieces.',
    'hero.curved.btn': 'Contact Me',

    // About Section
    'about.caption': '01 // BIOGRAPHY',
    'about.heading': 'Elevating visual gravity through premium code.',
    'about.p1': "Hello, I'm Seif Islem, a premium creative designer and digital developer based in Algeria. Running at the intersection of aesthetic majesty and technical precision, I sculpt experiences that captivate attention and stimulate real brand growth.",
    'about.p2': 'With multiple years of active practice across modern branding pipelines, structural UI/UX flow analysis, and robust interactive web mechanics, I specialize in crafting bespoke portfolios and applications for high-visibility innovators.',
    'about.p3': 'I believe that design is not merely decoration—it is an elegant, functional force that addresses user challenges, sparks inspiration, and transforms raw ideas into tactile, responsive realities.',
    'about.stats.experience': 'Years Experience',
    'about.stats.projects': 'Completed Projects',
    'about.stats.clients': 'Happy Clients',
    'about.stats.retention': 'Retention Rate',
    'about.pillars': 'My Creative Pillars',
    'about.pillar1.title': 'Aesthetic Majesty',
    'about.pillar1.desc': 'Bold layout layouts, sophisticated pairings, and eye-appealing details.',
    'about.pillar2.title': 'Pixel Perfection',
    'about.pillar2.desc': 'Sharp ergonomics, flawless grid structure, and meticulous spacing metrics.',
    'about.pillar3.title': 'Dynamic Motion',
    'about.pillar3.desc': 'Purposeful micro-interactions and scroll performance optimizations.',

    // Services Section
    'services.caption': '02 // SERVICES',
    'services.heading': 'High-fidelity creative solutions aligned to premium goals.',
    'services.specialties': 'Key Specialties:',
    'services.uiux.title': 'UI/UX Design',
    'services.uiux.desc': 'Forging luxury, minimalist, high-fidelity interfaces. My pixel-perfect approach combines ergonomic layouts with custom tactile physics and immersive visual state structures.',
    'services.uiux.spec1': 'Interactive High-Fi Prototyping',
    'services.uiux.spec2': 'Artistic Interface Architecture',
    'services.uiux.spec3': 'Sophisticated Micro-interactions',
    'services.uiux.spec4': 'Heuristic Ergonomic Auditing',

    'services.branding.title': 'Branding & Identity',
    'services.branding.desc': 'Defining pristine sensory landscapes for premium clients. I devise high-contrast, scalable design assets, curated type guidelines, and luxury visual guidelines.',
    'services.branding.spec1': 'Bespoke Logo Design & Icons',
    'services.branding.spec2': 'Holistic Vector Guidelines',
    'services.branding.spec3': 'Sophisticated Spatial Typography',
    'services.branding.spec4': 'Complete Digital Brand Books',

    'services.webdev.title': 'Web Development',
    'services.webdev.desc': 'Transforming premium concepts into living code. Building ultra-stable, light-speed applications with pristine responsive configurations and elegant transitions.',
    'services.webdev.spec1': 'React + Vite + Tailwind Solutions',
    'services.webdev.spec2': 'Fluid & Optimized Motion Transitions',
    'services.webdev.spec3': 'Responsive Mobile-First Logic',
    'services.webdev.spec4': 'Accessible Semantic Frontends',

    'services.motion.title': 'Motion Design',
    'services.motion.desc': 'Infusing motion into static objects to foster deep user focus. Generating dynamic ribbons, spinning decorative dials, and cinematic page flow animations.',
    'services.motion.spec1': 'Dynamic Scroll Physics Routing',
    'services.motion.spec2': 'Ambient SVG Visual Synthesizers',
    'services.motion.spec3': 'Bespoke Micro-Animation Sets',
    'services.motion.spec4': 'Cinematic Web Intro Choreography',

    // Skills Section
    'skills.caption': '03 // SKILLS & CAPABILITIES',
    'skills.heading': 'Synthesizing technical excellence with luxury art direction.',

    // Portfolio Section
    'portfolio.caption': '04 // SELECTED COMMISSIONS',
    'portfolio.heading': 'A gallery of premium digital concepts and code.',
    'portfolio.filter.all': 'All Project',
    'portfolio.filter.ui': 'UI/UX Design',
    'portfolio.filter.branding': 'Branding',
    'portfolio.filter.dev': 'Web Dev',
    'portfolio.project1.title': 'Aura Lifestyle UI/UX',
    'portfolio.project1.desc': 'An elegant high-fidelity mobile experience for an ultra-luxury watch and accessory boutique. Features soft glassmorphic layers, gold accents, and fluid interactions.',
    'portfolio.project2.title': 'Zenith Branding Identity',
    'portfolio.project2.desc': 'A comprehensive branding, holistic packaging solution, and digital design book for a premium botanical cosmetic line. Clean layouts combined with elegant serif text.',
    'portfolio.project3.title': 'Aether Immersive Tech',
    'portfolio.project3.desc': 'A futuristic interactive architectural agency platform. Incorporates real-time custom grid structures, soft cursor-reactive glowing vectors, and spatial layouts.',

    // Testimonials Section
    'testimonials.caption': '05 // KIND WORDS',
    'testimonials.heading': 'Client collaboration stories of success.',
    'testimonials.alessandra': "Seif brings an unparalleled level of visual gravity and code discipline to the creative process. He recreated our brand's luxury digital landscape with absolute perfection, matching each micro-interaction exactly as proposed.",
    'testimonials.yanis': "The combination of raw aesthetic sensibility and pure engineering is extremely rare. Seif operates at this rare intersection. Our interactive portfolio is a masterwork of elegant layouts, fluid transitions, and glowing lighting.",
    'testimonials.sonia': "Working with Seif was spectacular. His attention to precise detail, clean visual hierarchy, and polished curved layouts helped establish a new benchmark for our online agency presence.",

    // Contact Section
    'contact.caption': '06 // CONNECT WITH ME',
    'contact.heading': "Let's forge pioneering digital systems together.",
    'contact.desc': 'Have an ambitious vision, modern product opportunity, or custom identity asset you want to manifest? Send a brief description of your goal, and let\'s craft a breathtaking solution.',
    'contact.location': 'Algeria, North Africa',
    'contact.social.label': 'Around the digital space:',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email Address',
    'contact.form.subject': 'Subject Proposal',
    'contact.form.msg': 'Your Goal Detail',
    'contact.form.msg.placeholder': 'Provide an overview of what you are building, timeline bounds, and desired aesthetic targets...',
    'contact.form.btn': 'Transmit Telegram',
    'contact.form.btn.transmitting': 'TRANSMITTING SYSTEM...',
    'contact.form.success': 'Message Received!',
    'contact.form.success.sub': 'Thank you for reaching out. Seif will contact you shortly.',

    // Common
    'common.back': 'Back',
    'common.projects': 'projects',

    // Navbar aria-labels
    'nav.toggleLanguage': 'Toggle Language',
    'nav.toggleMenu': 'Toggle Menu',
    'nav.selectLanguage': 'Select Language:',

    // Hero testimonial float
    'hero.testimonial.quote': "Let's bring your idea to life.",
    'hero.testimonial.label': 'Ready when you are',

    // Experience Section
    'exp.caption': 'Background',
    'exp.heading.line1': 'Experience &',
    'exp.heading.line2': 'Education',
    'exp.current': 'Current',
    'exp.entry1.type': 'Education',
    'exp.entry1.role': "Bachelor's in Computer Science",
    'exp.entry1.period': '2026',
    'exp.entry1.desc': "Graduating this year from École Supérieure d'Informatique de Sidi Bel Abbès.",
    'exp.entry2.type': 'Freelance',
    'exp.entry2.role': 'Designer & Full-Stack Developer',
    'exp.entry2.period': 'Jan 2024 – Present',
    'exp.entry2.desc': 'Delivering end-to-end branding, UI/UX design, and web development projects for clients across various industries.',
    'exp.entry3.type': 'Internship',
    'exp.entry3.role': 'IT Internship',
    'exp.entry3.period': 'Sep – Oct 2024',
    'exp.entry3.desc': 'Assisted in diagnosing and resolving system and network issues while supporting internal users and monitoring connectivity across departments. Documented troubleshooting procedures and contributed to improving workflow efficiency.',
    'exp.entry4.type': 'Formation',
    'exp.entry4.role': 'Entrepreneurship Training Program',
    'exp.entry4.period': 'May 2026',
    'exp.entry4.desc': 'Business model development, startup creation and project management, market analysis and business planning, and entrepreneurial skills and innovation.',

    // Portfolio / Projects extras
    'portfolio.seeAll': 'See All Projects',
    'allProjects.title': 'All Projects',
    'project.viewGithub': 'View on GitHub',
    'project.viewBehance': 'View on Behance',
    'project.viewLive': 'View Live',
    'project.scrollAnywhere': 'Scroll anywhere',
    'project.scrollDown': 'Scroll down for images',
    'project.images': 'images',
    'project.noPreview': 'No preview available',

    // Footer
    'footer.copyright': 'Seif Islem. Developed and Designed by me.',
    'footer.desc': 'Algeria',
    'footer.top': 'Top Ascent',
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À Propos',
    'nav.services': 'Services',
    'nav.work': 'Mon Travail',
    'nav.testimonials': 'Témoignages',
    'nav.contact': 'Contact',

    // Hero Section - Part 1
    'hero.badge': "Salut! Je suis Seif | Basé en Algérie",
    'hero.greeting': "Bonjour!",
    'hero.im': "Je suis",
    'hero.name': "Seif Islem",
    'hero.cta.work': "Portfolio",
    'hero.cta.hire': "Engagez-moi",
    'hero.title.creative': 'Designer',
    'hero.title.and': ' Créatif &',
    'hero.title.dev': 'Développeur',
    'hero.subtitle': 'Je conçois des expériences numériques qui résolvent des problèmes, inspirent l\'action et créent de l\'impact.',
    'hero.scrollDown': 'Faites défiler pour découvrir',

    // Hero Section - Part 2
    'hero.badge.circular': '• PORTFOLIO SEIF ISLEM • IMAGINER • DÉVELOPPER •',
    'hero.card.role': 'RÔLE',
    'hero.card.title': 'Designer & Dev',
    'hero.curved.heading': 'Je conçois des designs qui résolvent les problèmes et génèrent du succès.',
    'hero.curved.solve': 'résolvent',
    'hero.curved.problems': 'les problèmes',
    'hero.curved.inspire': 'inspirent l\'action',
    'hero.curved.success': 'le succès',
    'hero.curved.desc': 'En tant qu\'architecte numérique hybride, je concilie la rigueur technique des systèmes avec une direction artistique luxueuse de haut niveau pour sublimer vos produits fonctionnels.',
    'hero.curved.btn': 'Me Contacter',

    // About Section
    'about.caption': '01 // BIOGRAPHIE',
    'about.heading': 'Élever la gravité visuelle grâce à un code de qualité supérieure.',
    'about.p1': "Bonjour, je m'appelle Seif Islem, designer créatif et développeur web premium basé en Algérie. Je façonne des expériences mémorables qui captivent l'attention et génèrent une réelle croissance de marque.",
    'about.p2': 'Fort de plusieurs années d\'expérience dans l\'image de marque moderne, l\'ergonomie UI/UX et le développement web interactif, je crée des produits sur mesure pour les innovateurs les plus exigeants.',
    'about.p3': "Je crois que le design n'est pas une simple décoration — c'est une force élégante et fonctionnelle qui répond aux défis des utilisateurs, suscite l'inspiration et transforme les idées brutes en réalités tactiles et réactives.",
    'about.stats.experience': "Années d'Expérience",
    'about.stats.projects': 'Projets Réalisés',
    'about.stats.clients': 'Clients Satisfaits',
    'about.stats.retention': 'Taux de Fidélité',
    'about.pillars': 'Mes Piliers Créatifs',
    'about.pillar1.title': 'Majesté Esthétique',
    'about.pillar1.desc': 'Mises en page audacieuses, typographies raffinées et détails visuels soignés.',
    'about.pillar2.title': 'Perfection Pixel',
    'about.pillar2.desc': 'Ergonomie millimétrée, structures de grille rigoureuses et espacements méticuleux.',
    'about.pillar3.title': 'Mouvement Dynamique',
    'about.pillar3.desc': 'Micro-interactions fluides et optimisation optimale des animations au défilement.',

    // Services Section
    'services.caption': '02 // SERVICES',
    'services.heading': 'Des solutions créatives haut de gamme alignées sur vos ambitions.',
    'services.specialties': 'Spécialités Clés :',
    'services.uiux.title': 'Design UI/UX',
    'services.uiux.desc': 'Création d\'interfaces minimalistes, luxueuses et interactives. Mon approche perfectionniste associe ergonomie soignée, transitions fluides et designs soignés.',
    'services.uiux.spec1': 'Prototypage Interactif Haute Fidélité',
    'services.uiux.spec2': 'Architecture d\'Interface Artistique',
    'services.uiux.spec3': 'Micro-interactions Sophistiquées',
    'services.uiux.spec4': 'Audit Ergonomique & Heuristique',

    'services.branding.title': 'Branding & Identité',
    'services.branding.desc': 'Définition d\'identités sensorielles complètes et prestigieuses. Je crée des logos vectoriels évolutifs, des chartes graphiques et des guides typographiques précieux.',
    'services.branding.spec1': 'Design de Logos & Icônes Uniques',
    'services.branding.spec2': 'Chartes Vectorielles Complètes',
    'services.branding.spec3': 'Typographie Spatiale Soignée',
    'services.branding.spec4': 'Brand Books Numériques Complets',

    'services.webdev.title': 'Développement Web',
    'services.webdev.desc': 'Transformation de vos concepts visuels en code performant. Je bâtis des applications robustes et rapides avec des animations de pointe.',
    'services.webdev.spec1': 'Solutions Modernes React + Vite + Tailwind',
    'services.webdev.spec2': 'Transitions Animations Fluides & Optimisées',
    'services.webdev.spec3': 'Développement Responsif Mobile-First',
    'services.webdev.spec4': 'Code Sémantique Accessible',

    'services.motion.title': 'Design de Mouvement',
    'services.motion.desc': 'Insuffler de la vie dans les éléments statiques pour captiver l\'attention. Création de rubans défilants, cadrans rotatifs et chorégraphies visuelles narratives.',
    'services.motion.spec1': 'Physique de Défilement Avancée',
    'services.motion.spec2': 'Synthétiseurs Visuels SVG Ambiants',
    'services.motion.spec3': 'Sets de Micro-Animations sur Mesure',
    'services.motion.spec4': 'Chorégraphie d\'Intros Web Cinématiques',

    // Skills Section
    'skills.caption': '03 // COMPÉTENCES',
    'skills.heading': 'Fusionner l\'excellence technique et l\'art de la direction visuelle.',

    // Portfolio Section
    'portfolio.caption': '04 // PROJETS SÉLECTIONNÉS',
    'portfolio.heading': 'Une galerie de concepts et de codes numériques d\'exception.',
    'portfolio.filter.all': 'Tous',
    'portfolio.filter.ui': 'UI/UX Design',
    'portfolio.filter.branding': 'Identité visuelle',
    'portfolio.filter.dev': 'Dév Web',
    'portfolio.project1.title': 'Aura Lifestyle UI/UX',
    'portfolio.project1.desc': 'Une expérience mobile prestigieuse pour une boutique de montres de luxe. Comprend des calques floutés de style verre, des accents dorés et des interactions fluides.',
    'portfolio.project2.title': 'Zenith Branding Identity',
    'portfolio.project2.desc': 'Une identité visuelle complète et guide de packaging pour une gamme botanique haut de gamme. Design minimaliste marié à des typographies élancées.',
    'portfolio.project3.title': 'Aether Immersive Tech',
    'portfolio.project3.desc': 'Une plateforme web interactive pour une agence d\'architecture futuriste. Intègre des structures de grille dynamiques et des animations réactives au pointeur.',

    // Testimonials Section
    'testimonials.caption': '05 // MOTS DOUX',
    'testimonials.heading': 'Histoires de collaborations et de réussites.',
    'testimonials.alessandra': "Seif apporte un niveau de rigueur visuelle et de discipline de code unique au processus créatif. Il a métamorphosé le paysage numérique de notre marque avec une perfection absolue.",
    'testimonials.yanis': "L'alliance entre sensibilité esthétique pure et ingénierie de pointe est extrêmement rare. Seif excelle dans cette synergie. Notre site portfolio est un bijou d'animations fluides.",
    'testimonials.sonia': "Travailler avec Seif a été un pur plaisir. Son attention constante aux détails, sa hiérarchie visuelle impeccable et ses designs arrondis ont posé de nouveaux standards pour notre agence.",

    // Contact Section
    'contact.caption': '06 // CONTACTEZ-MOI',
    'contact.heading': 'Façonnons ensemble des écosystèmes numériques novateurs.',
    'contact.desc': 'Vous portez une vision ambitieuse, une opportunité produit moderne ou un actif de marque à concrétiser ? Décrivez votre projet, et créons une solution exceptionnelle.',
    'contact.location': 'Algérie, Afrique du Nord',
    'contact.social.label': 'Dans l\'espace numérique :',
    'contact.form.name': 'Nom Complet',
    'contact.form.email': 'Adresse E-mail',
    'contact.form.subject': 'Sujet optionnel',
    'contact.form.msg': 'Détails de votre Projet',
    'contact.form.msg.placeholder': 'Décrivez brièvement vos objectifs esthétiques, vos délais et les fonctionnalités clés à concevoir...',
    'contact.form.btn': 'Transmettre la Demande',
    'contact.form.btn.transmitting': 'TRANSMISSION EN COURS...',
    'contact.form.success': 'Message Reçu !',
    'contact.form.success.sub': 'Merci pour votre message. Seif vous contactera dans les plus brefs délais.',

    // Common
    'common.back': 'Retour',
    'common.projects': 'projets',

    // Navbar aria-labels
    'nav.toggleLanguage': 'Changer de langue',
    'nav.toggleMenu': 'Basculer le menu',
    'nav.selectLanguage': 'Choisir la langue :',

    // Hero testimonial float
    'hero.testimonial.quote': "Donnons vie à votre idée.",
    'hero.testimonial.label': 'Prêt quand vous l\'êtes',

    // Experience Section
    'exp.caption': 'Parcours',
    'exp.heading.line1': 'Expérience &',
    'exp.heading.line2': 'Formation',
    'exp.current': 'En cours',
    'exp.entry1.type': 'Formation',
    'exp.entry1.role': 'Licence en Informatique',
    'exp.entry1.period': '2026',
    'exp.entry1.desc': "Diplômé cette année de l'École Supérieure d'Informatique de Sidi Bel Abbès.",
    'exp.entry2.type': 'Freelance',
    'exp.entry2.role': 'Designer & Développeur Full-Stack',
    'exp.entry2.period': 'Jan 2024 – Présent',
    'exp.entry2.desc': "Réalisation de projets complets de branding, design UI/UX et développement web pour des clients de divers secteurs.",
    'exp.entry3.type': 'Stage',
    'exp.entry3.role': 'Stage Informatique',
    'exp.entry3.period': 'Sep – Oct 2024',
    'exp.entry3.desc': "Diagnostic et résolution de problèmes systèmes et réseau, support aux utilisateurs internes et suivi de la connectivité entre les services. Documentation des procédures et amélioration des flux de travail.",
    'exp.entry4.type': 'Formation',
    'exp.entry4.role': "Programme de Formation en Entrepreneuriat",
    'exp.entry4.period': 'Mai 2026',
    'exp.entry4.desc': "Développement de modèles d'affaires, création de start-up et gestion de projet, analyse de marché et planification, compétences entrepreneuriales et innovation.",

    // Portfolio / Projects extras
    'portfolio.seeAll': 'Voir tous les projets',
    'allProjects.title': 'Tous les projets',
    'project.viewGithub': 'Voir sur GitHub',
    'project.viewBehance': 'Voir sur Behance',
    'project.viewLive': 'Voir le site',
    'project.scrollAnywhere': "Faites défiler n'importe où",
    'project.scrollDown': 'Faites défiler pour voir les images',
    'project.images': 'images',
    'project.noPreview': 'Aucun aperçu disponible',

    // Footer
    'footer.copyright': 'Seif Islem. Développé et stylisé avec une précision luxueuse.',
    'footer.desc': 'Algérie • Inspiré par l\'Esthétique Technologique',
    'footer.top': 'Ascension Haut',
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.about': 'من أنا',
    'nav.services': 'خدماتي',
    'nav.work': 'أعمالي',
    'nav.testimonials': 'التوصيات',
    'nav.contact': 'تواصل معي',

    // Hero Section - Part 1
    'hero.badge': "مرحباً! أنا سيف | مستقر في الجزائر",
    'hero.greeting': "مرحباً!",
    'hero.im': "أنا",
    'hero.name': "سيف إسلام",
    'hero.cta.work': "أعمالي",
    'hero.cta.hire': "تواصل معي",
    'hero.title.creative': 'المصمم',
    'hero.title.and': ' المبدع و',
    'hero.title.dev': 'المطـــــور',
    'hero.subtitle': 'أصنع تجارب رقمية ممتازة تحل المشكلات، تلهم الحركة، وتصنع فارقاً حقيقياً.',
    'hero.scrollDown': 'مرر لأسفل لاستكشاف المعرض',

    // Hero Section - Part 2
    'hero.badge.circular': '• أعمال سيف إسلام • تخيّل • ابتكر • طوّر •',
    'hero.card.role': 'الدور الرياضي',
    'hero.card.title': 'مصمم ومطور ويب',
    'hero.curved.heading': 'أصنع تصميمات مذهلة تحل المشكلات وتجلب النجاح الواعد.',
    'hero.curved.solve': 'تحل',
    'hero.curved.problems': 'المشكلات',
    'hero.curved.inspire': 'تلهم الحركة',
    'hero.curved.success': 'النجاح',
    'hero.curved.desc': 'بصفتي مهندساً رقمياً هجيناً، أجمع بدقة متناهية بين الانضباط البرمجي والتوجه الفني الفاخر لنرتقي بالمنتجات المعقدة إلى تحف بصرية أيقونية.',
    'hero.curved.btn': 'تواصل معي الآن',

    // About Section
    'about.caption': '01 // السيرة الذاتية',
    'about.heading': 'الارتقاء بالجاذبية البصرية من خلال أكواد برمجية متميزة وفائقة اللمعان.',
    'about.p1': "مرحباً، أنا سيف إسلام، مصمم إبداعي ومطور ويب متميز في الجزائر. أعمل في نقطة الالتقاء الجذابة بين السحر البصري الفخم والدقة التقنية المتطورة لأصنع تجارب متميزة تأسر الانتباه وتنمي العلامات التجارية.",
    'about.p2': 'مع سنوات من الممارسة النشطة في مجالات الهوية البصرية الحديثة، وتصميم تجربة المستخدم UI/UX، والبرمجيات التفاعلية سريعة الاستجابة، أتخصص في صياغة حقائب أعمال حصرية للمبتكرين والملهمين.',
    'about.p3': 'أؤمن بأن التصميم ليس مجرد زينة بصرية عابرة - بل هو قوة تفاعلية راقية تحل مشكلات المستخدم وتلهم الحواس وتحول الأفكار المجردة إلى واقع ملموس.',
    'about.stats.experience': 'سنوات الخبرة',
    'about.stats.projects': 'المشاريع المكتملة',
    'about.stats.clients': 'العملاء السعداء',
    'about.stats.retention': 'معدل الحفاظ على العملاء',
    'about.pillars': 'الركائز الإبداعية الفاخرة',
    'about.pillar1.title': 'الجاذبية الجمالية',
    'about.pillar1.desc': 'تنسيقات جريئة، خطوط متناسقة وعناية استثنائية بالتفاصيل الدقيقة.',
    'about.pillar2.title': 'دقة البكسل المتكاملة',
    'about.pillar2.desc': 'واجهات مريحة، وهندسة شبكية مثالية، وقياسات تباعد فائقة الدقة.',
    'about.pillar3.title': 'الحركة الحيوية الهادفة',
    'about.pillar3.desc': 'تفاعلات دقيقة منتقاة واهتمام فائق بأداء وتأثيرات التمرير الجانبي.',

    // Services Section
    'services.caption': '02 // خدماتنا',
    'services.heading': 'حلول إبداعية فاخرة مصممة بعناية لتتطابق مع أهدافك الطموحة.',
    'services.specialties': 'التخصصات الرئيسية:',
    'services.uiux.title': 'تصميم واجهة وتجربة المستخدم',
    'services.uiux.desc': 'بناء واجهات بسيطة وفاخرة عالية الجودة. يجمع أسلوبي بين التميز المريح ومحاكاة الحركة التفاعلية لتجربة تصفح غامرة وممتازة.',
    'services.uiux.spec1': 'نمذجة تفاعلية متقدمة عالية الجودة',
    'services.uiux.spec2': 'هندسة فنية متكاملة للواجهات',
    'services.uiux.spec3': 'تفاعلات حركية بالغة التعقيد والنعومة',
    'services.uiux.spec4': 'تدقيق وتحليل راحة الاستخدام وتلبية المعايير',

    'services.branding.title': 'العلامة التجارية والهوية',
    'services.branding.desc': 'ابتكار لوحات حسية فاخرة للعملاء المتميزين. أصنع شعارات، وخطوطاً، وأدلة بصرية مذهلة قابلة للتوسع.',
    'services.branding.spec1': 'شعارات وأيقونات مخصصة وحصرية',
    'services.branding.spec2': 'أدلة إرشادية متكاملة لبيانات المتجهات',
    'services.branding.spec3': 'تصميم خطوط وأبعاد الفراغات الراقية',
    'services.branding.spec4': 'كتب وهوية العلامة التجارية الرقمية المتكاملة',

    'services.webdev.title': 'تطوير الويب الفاخر',
    'services.webdev.desc': 'تحويل التصاميم الراقية إلى أكواد برمجية فاعلة وسريعة الاستجابة ومحسنة لتصدر مراتب البحث وجعل خدماتك سريعة جداً.',
    'services.webdev.spec1': 'حلول برمجية متطورة باستخدام React + Tailwind',
    'services.webdev.spec2': 'حركات وتأثيرات انتقالية تفاعلية وصامتة',
    'services.webdev.spec3': 'مرونة تامة واستجابة مطلقة مخصصة للهواتف أولاً',
    'services.webdev.spec4': 'برمجة دلالية يسهل الوصول إليها ومتوافقة مع المعايير الدولية',

    'services.motion.title': 'تصميم الحركات التفاعلية',
    'services.motion.desc': 'بث الروح في العناصر الثابتة لزيادة وتعميق تركيز المستخدم وإنشاء أشرطة دائرية متميزة ونسب تشغيل سينمائية مذهلة وممتعة.',
    'services.motion.spec1': 'فيزياء توجيه تدفقات التمرير التفاعلية المعقدة',
    'services.motion.spec2': 'مولدات تناسق تفاعلية باستخدام تقنية SVG المضيئة',
    'services.motion.spec3': 'مجموعات حركات مجهرية صامتة مخصصة بالطلب',
    'services.motion.spec4': 'تصميم استعراضات سينمائية ومقدمات تصفح رائعة',

    // Skills Section
    'skills.caption': '03 // المهارات والقدرات',
    'skills.heading': 'الدمج المتوازن بين التميز الهندسي الدقيق والتوجه الفني الفريد.',

    // Portfolio Section
    'portfolio.caption': '04 // مشاريع متميزة مختارة',
    'portfolio.heading': 'معرض من الأفكار الرقمية والنصوص البرمجية فائقة الفخامة.',
    'portfolio.filter.all': 'الكل',
    'portfolio.filter.ui': 'واجهة وتجربة المستخدم',
    'portfolio.filter.branding': 'الهوية البصرية',
    'portfolio.filter.dev': 'تطوير الويب',
    'portfolio.project1.title': 'واجهة فخمة لأورا لايف ستايل',
    'portfolio.project1.desc': 'تجربة مستخدم فاخرة بالغة النعومة لمتجر الساعات والمجوهرات النادرة، تمتاز بطبقات زجاجية شفافة، تفاصيل ذهبية ولمسات تفاعلية مذهلة.',
    'portfolio.project2.title': 'الهوية البصرية لزنيث',
    'portfolio.project2.desc': 'تصميم هوية بصرية مذهلة ومستحضرات تعبئة فريدة ودليل رقمي راقٍ لخط مستحضرات التجميل النباتية الفاخرة باستخدام لغة حروف رقيقة وسيريف هادئ.',
    'portfolio.project3.title': 'إيثر للتكنولوجيا التفاعلية',
    'portfolio.project3.desc': 'موقع إلكتروني تفاعلي متقدم لوكالة معمارية مستقبلية، يدمج بين شبكات الإحداثيات المتغيرة وتأثيرات الفأرة المضيئة.',

    // Testimonials Section
    'testimonials.caption': '05 // ثقة شركائنا',
    'testimonials.heading': 'قصص واقعية من شراكات النجاح المثمرة.',
    'testimonials.alessandra': "يقدم سيف مستوى غير مسبوق من الاحترافية واللمسات الإبداعية الساحرة إلى جانب التزامه البرمجي الدقيق. لقد أعاد محاكاة هوية علامتنا التجارية الرقمية لتبدو مذهلة وعالية الجمال وخالية من الهفوات البرمجية.",
    'testimonials.yanis': "نادراً ما تجد أشخاصاً يجمعون بين الذوق الفني الفاره والتمكن الهندسي الصارم في وقت واحد. سيف ينتمي لهذه الفئة الاستثنائية بكل تأكيد، فالموقع الذي صممه لنا تحفة بكل معاني الكلمة.",
    'testimonials.sonia': "العمل مع سيف كان تجربة ممتعة ومبهرة في آن واحد. اهتمامه الشديد بأدق التفاصيل والواجهات الهندسية المنحنية جعل أعمالنا تتربع على قمة المعايير التنافسية بمثالية.",

    // Contact Section
    'contact.caption': '06 // بادر بالتواصل معنا',
    'contact.heading': 'دعنا نشيد معاً واجهتك الرقمية المستقبلية الفخمة.',
    'contact.desc': 'هل تمتلك رؤية طموحة، أو مشروعاً ناشئاً واعداً، أو تود الحصول على علامة تجارية فريدة تعبر عن رونق خدماتك؟ تواصل معي وسأحول خيالاتك لواقع نابض بالحياة والنجاح.',
    'contact.location': 'الجزائر، شمال أفريقيا',
    'contact.social.label': 'بوابات تواصل إضافية:',
    'contact.form.name': 'الاسم الكامل',
    'contact.form.email': 'البريد الإلكتروني المعتمد',
    'contact.form.subject': 'عنوان مشروعك المقترح',
    'contact.form.msg': 'تفاصيل وأهداف مشروعك',
    'contact.form.msg.placeholder': 'يرجى تقديم تفاصيل عامة عما ترغب في بنائه، الإطار الزمني المقدر، والأهداف الجمالية التي ترجوها...',
    'contact.form.btn': 'إرسال البريد المؤمن',
    'contact.form.btn.transmitting': 'جاري الإرسال والربط التكنولوجي...',
    'contact.form.success': 'تم استقبال الرسالة بنجاح!',
    'contact.form.success.sub': 'شكراً جزيلاً لثقتك وتوا صلك. سأقوم بالرد عليك وإرسال المقترحات الفنية بأسرع وقت.',

    // Common
    'common.back': 'رجوع',
    'common.projects': 'مشاريع',

    // Navbar aria-labels
    'nav.toggleLanguage': 'تغيير اللغة',
    'nav.toggleMenu': 'تبديل القائمة',
    'nav.selectLanguage': 'اختر اللغة:',

    // Hero testimonial float
    'hero.testimonial.quote': 'لنحوّل فكرتك إلى واقع.',
    'hero.testimonial.label': 'جاهز عندما تكون جاهزاً',

    // Experience Section
    'exp.caption': 'المسار المهني',
    'exp.heading.line1': 'الخبرة و',
    'exp.heading.line2': 'التعليم',
    'exp.current': 'حالياً',
    'exp.entry1.type': 'تعليم',
    'exp.entry1.role': 'ليسانس في علوم الحاسوب',
    'exp.entry1.period': '2026',
    'exp.entry1.desc': 'تخرج هذا العام من المدرسة العليا للإعلام الآلي بسيدي بلعباس.',
    'exp.entry2.type': 'عمل حر',
    'exp.entry2.role': 'مصمم ومطور ويب شامل',
    'exp.entry2.period': 'يناير 2024 – الآن',
    'exp.entry2.desc': 'تقديم مشاريع هوية بصرية وتصميم واجهات وتطوير ويب كاملة لعملاء من قطاعات متعددة.',
    'exp.entry3.type': 'تدريب',
    'exp.entry3.role': 'تدريب في تكنولوجيا المعلومات',
    'exp.entry3.period': 'سبتمبر – أكتوبر 2024',
    'exp.entry3.desc': 'المساعدة في تشخيص وحل مشاكل الأنظمة والشبكات ودعم المستخدمين الداخليين ومراقبة الاتصال بين الأقسام. توثيق إجراءات استكشاف الأعطال والمساهمة في تحسين كفاءة العمل.',
    'exp.entry4.type': 'تكوين',
    'exp.entry4.role': 'برنامج تكوين في ريادة الأعمال',
    'exp.entry4.period': 'مايو 2026',
    'exp.entry4.desc': 'تطوير نموذج الأعمال، إنشاء المشاريع الناشئة وإدارة المشاريع، تحليل السوق والتخطيط، ومهارات الابتكار وريادة الأعمال.',

    // Portfolio / Projects extras
    'portfolio.seeAll': 'عرض كل المشاريع',
    'allProjects.title': 'جميع المشاريع',
    'project.viewGithub': 'عرض على GitHub',
    'project.viewBehance': 'عرض على Behance',
    'project.viewLive': 'عرض الموقع المباشر',
    'project.scrollAnywhere': 'مرر في أي مكان',
    'project.scrollDown': 'مرر لأسفل لعرض الصور',
    'project.images': 'صور',
    'project.noPreview': 'لا توجد معاينة متاحة',

    // Footer
    'footer.copyright': 'سيف إسلام. تم التصميم والبرمجة بأعلى معايير الجمال والدقة الفائقة.',
    'footer.desc': 'الجزائر • مستوحى من جماليات المستقبل والتقنيات الفخمة',
    'footer.top': 'الصعود للأعلى',
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('seif_portfolio_lang');
    return (saved as Language) || 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('seif_portfolio_lang', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || translations['en'][key] || key;
  };

  const isRtl = language === 'ar';

  useEffect(() => {
    // Dynamically update document direction and language attribute
    document.documentElement.lang = language;
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
  }, [language, isRtl]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRtl }}>
      <div style={{ direction: isRtl ? 'rtl' : 'ltr' }}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
