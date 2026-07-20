'use client';

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
    // Splash
    'splash.hello': 'Hello',
    'splash.subtitle': "I'm Seif Islem — Creative Designer & Developer",

    // Lock screen
    'lock.experienceBanner': '3+ years of experience in design & development',
    'lock.projectsBanner': '10+ projects shipped across design & dev',
    'lock.swipeUp': 'Swipe up to unlock',

    // Home screen / app names
    'home.app.notes': 'About Me',
    'home.app.behance': 'Design Portfolio',
    'home.app.github': 'Dev Projects',
    'home.app.messages': 'Testimonials',
    'home.app.gmail': 'Contact Me',
    'home.app.spotify': 'Recitation',
    'home.app.translate': 'Language',
    'home.app.folders': 'My CV',

    // Folders app
    'folders.title': 'Folders',
    'folders.cvFileName': 'Seif_Islem_Benrabah_CV.pdf',
    'folders.open': 'Open',
    'folders.download': 'Download PDF',
    'folders.back': 'Folders',
    'cv.about': 'Profile',
    'cv.education': 'Education',
    'cv.experience': 'Experience',
    'cv.projects': 'Selected Projects',
    'cv.skills': 'Skills',
    'cv.skills.dev': 'Development',
    'cv.skills.design': 'Design',
    'cv.languages': 'Languages',

    // Notes app
    'notes.list.about': 'About Me',
    'notes.list.skills': 'Skills & Tools',
    'notes.list.experience': 'Experience & Education',
    'notes.list.services': 'Services',
    'about.p1': "Hello, I'm Seif Islem, a premium creative designer and digital developer based in Algeria. Running at the intersection of aesthetic majesty and technical precision, I sculpt experiences that captivate attention and stimulate real brand growth.",
    'about.p2': 'With multiple years of active practice across modern branding pipelines, structural UI/UX flow analysis, and robust interactive web mechanics, I specialize in crafting bespoke portfolios and applications for high-visibility innovators.',
    'about.p3': 'I believe that design is not merely decoration—it is an elegant, functional force that addresses user challenges, sparks inspiration, and transforms raw ideas into tactile, responsive realities.',
    'about.stats.experience': 'Years Experience',
    'about.stats.projects': 'Completed Projects',
    'about.stats.clients': 'Happy Clients',
    'about.stats.retention': 'Retention Rate',

    // Experience
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
    'exp.entry3.desc': 'Assisted in diagnosing and resolving system and network issues while supporting internal users and monitoring connectivity across departments.',
    'exp.entry4.type': 'Formation',
    'exp.entry4.role': 'Entrepreneurship Training Program',
    'exp.entry4.period': 'May 2026',
    'exp.entry4.desc': 'Business model development, startup creation and project management, market analysis and business planning.',

    // Services
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
    'services.webdev.spec1': 'React + Next.js + Tailwind Solutions',
    'services.webdev.spec2': 'Fluid & Optimized Motion Transitions',
    'services.webdev.spec3': 'Responsive Mobile-First Logic',
    'services.webdev.spec4': 'Accessible Semantic Frontends',
    'services.motion.title': 'Motion Design',
    'services.motion.desc': 'Infusing motion into static objects to foster deep user focus. Generating dynamic ribbons, spinning decorative dials, and cinematic page flow animations.',
    'services.motion.spec1': 'Dynamic Scroll Physics Routing',
    'services.motion.spec2': 'Ambient SVG Visual Synthesizers',
    'services.motion.spec3': 'Bespoke Micro-Animation Sets',
    'services.motion.spec4': 'Cinematic Web Intro Choreography',

    // Behance app
    'behance.filter.all': 'All',
    'behance.filter.branding': 'Branding',
    'behance.filter.uiux': 'UI/UX',
    'project.viewBehance': 'View on Behance',

    // GitHub app
    'project.viewGithub': 'View on GitHub',
    'project.viewLive': 'View Live',

    // Messages app
    'messages.subtitle': 'Client testimonials',

    // Gmail app
    'gmail.to': 'To',
    'gmail.subject': 'Subject',
    'gmail.message': 'Message',
    'gmail.send': 'Send',
    'gmail.newMessage': 'New Message',
    'gmail.location': 'Operating out of Algeria, North Africa',

    // Spotify app
    'spotify.nowPlaying': 'Now Playing',
    'spotify.reciter': 'Mishary Rashid Alafasy',

    // Translate app
    'translate.title': 'Translate',
    'translate.select': 'Select your language',

    // Common
    'common.back': 'Back',
    'common.projects': 'projects',
  },
  fr: {
    // Splash
    'splash.hello': 'Bonjour',
    'splash.subtitle': 'Je suis Seif Islem — Designer Créatif & Développeur',

    // Lock screen
    'lock.experienceBanner': "3+ ans d'expérience en design & développement",
    'lock.projectsBanner': '10+ projets livrés en design & développement',
    'lock.swipeUp': 'Glissez vers le haut pour déverrouiller',

    // Home screen / app names
    'home.app.notes': 'À Propos',
    'home.app.behance': 'Portfolio Design',
    'home.app.github': 'Projets Dev',
    'home.app.messages': 'Témoignages',
    'home.app.gmail': 'Contactez-moi',
    'home.app.spotify': 'Récitation',
    'home.app.translate': 'Langue',
    'home.app.folders': 'Mon CV',

    // Folders app
    'folders.title': 'Dossiers',
    'folders.cvFileName': 'Seif_Islem_Benrabah_CV.pdf',
    'folders.open': 'Ouvrir',
    'folders.download': 'Télécharger le PDF',
    'folders.back': 'Dossiers',
    'cv.about': 'Profil',
    'cv.education': 'Formation',
    'cv.experience': 'Expérience',
    'cv.projects': 'Projets Sélectionnés',
    'cv.skills': 'Compétences',
    'cv.skills.dev': 'Développement',
    'cv.skills.design': 'Design',
    'cv.languages': 'Langues',

    // Notes app
    'notes.list.about': 'À Propos',
    'notes.list.skills': 'Compétences & Outils',
    'notes.list.experience': 'Expérience & Formation',
    'notes.list.services': 'Services',
    'about.p1': "Bonjour, je m'appelle Seif Islem, designer créatif et développeur web premium basé en Algérie. Je façonne des expériences mémorables qui captivent l'attention et génèrent une réelle croissance de marque.",
    'about.p2': "Fort de plusieurs années d'expérience dans l'image de marque moderne, l'ergonomie UI/UX et le développement web interactif, je crée des produits sur mesure pour les innovateurs les plus exigeants.",
    'about.p3': "Je crois que le design n'est pas une simple décoration — c'est une force élégante et fonctionnelle qui répond aux défis des utilisateurs et transforme les idées brutes en réalités tactiles.",
    'about.stats.experience': "Années d'Expérience",
    'about.stats.projects': 'Projets Réalisés',
    'about.stats.clients': 'Clients Satisfaits',
    'about.stats.retention': 'Taux de Fidélité',

    // Experience
    'exp.current': 'En cours',
    'exp.entry1.type': 'Formation',
    'exp.entry1.role': 'Licence en Informatique',
    'exp.entry1.period': '2026',
    'exp.entry1.desc': "Diplômé cette année de l'École Supérieure d'Informatique de Sidi Bel Abbès.",
    'exp.entry2.type': 'Freelance',
    'exp.entry2.role': 'Designer & Développeur Full-Stack',
    'exp.entry2.period': 'Jan 2024 – Présent',
    'exp.entry2.desc': 'Réalisation de projets complets de branding, design UI/UX et développement web pour des clients de divers secteurs.',
    'exp.entry3.type': 'Stage',
    'exp.entry3.role': 'Stage Informatique',
    'exp.entry3.period': 'Sep – Oct 2024',
    'exp.entry3.desc': 'Diagnostic et résolution de problèmes systèmes et réseau, support aux utilisateurs internes et suivi de la connectivité entre les services.',
    'exp.entry4.type': 'Formation',
    'exp.entry4.role': "Programme de Formation en Entrepreneuriat",
    'exp.entry4.period': 'Mai 2026',
    'exp.entry4.desc': "Développement de modèles d'affaires, création de start-up et gestion de projet, analyse de marché et planification.",

    // Services
    'services.specialties': 'Spécialités Clés :',
    'services.uiux.title': 'Design UI/UX',
    'services.uiux.desc': "Création d'interfaces minimalistes, luxueuses et interactives. Mon approche perfectionniste associe ergonomie soignée, transitions fluides et designs soignés.",
    'services.uiux.spec1': 'Prototypage Interactif Haute Fidélité',
    'services.uiux.spec2': "Architecture d'Interface Artistique",
    'services.uiux.spec3': 'Micro-interactions Sophistiquées',
    'services.uiux.spec4': 'Audit Ergonomique & Heuristique',
    'services.branding.title': 'Branding & Identité',
    'services.branding.desc': "Définition d'identités sensorielles complètes et prestigieuses. Je crée des logos vectoriels évolutifs, des chartes graphiques et des guides typographiques précieux.",
    'services.branding.spec1': 'Design de Logos & Icônes Uniques',
    'services.branding.spec2': 'Chartes Vectorielles Complètes',
    'services.branding.spec3': 'Typographie Spatiale Soignée',
    'services.branding.spec4': 'Brand Books Numériques Complets',
    'services.webdev.title': 'Développement Web',
    'services.webdev.desc': 'Transformation de vos concepts visuels en code performant. Je bâtis des applications robustes et rapides avec des animations de pointe.',
    'services.webdev.spec1': 'Solutions Modernes React + Next.js + Tailwind',
    'services.webdev.spec2': 'Transitions Animations Fluides & Optimisées',
    'services.webdev.spec3': 'Développement Responsif Mobile-First',
    'services.webdev.spec4': 'Code Sémantique Accessible',
    'services.motion.title': 'Design de Mouvement',
    'services.motion.desc': "Insuffler de la vie dans les éléments statiques pour captiver l'attention. Création de rubans défilants, cadrans rotatifs et chorégraphies visuelles narratives.",
    'services.motion.spec1': 'Physique de Défilement Avancée',
    'services.motion.spec2': 'Synthétiseurs Visuels SVG Ambiants',
    'services.motion.spec3': 'Sets de Micro-Animations sur Mesure',
    'services.motion.spec4': "Chorégraphie d'Intros Web Cinématiques",

    // Behance app
    'behance.filter.all': 'Tous',
    'behance.filter.branding': 'Identité visuelle',
    'behance.filter.uiux': 'UI/UX',
    'project.viewBehance': 'Voir sur Behance',

    // GitHub app
    'project.viewGithub': 'Voir sur GitHub',
    'project.viewLive': 'Voir le site',

    // Messages app
    'messages.subtitle': 'Témoignages clients',

    // Gmail app
    'gmail.to': 'À',
    'gmail.subject': 'Objet',
    'gmail.message': 'Message',
    'gmail.send': 'Envoyer',
    'gmail.newMessage': 'Nouveau Message',
    'gmail.location': "Basé en Algérie, Afrique du Nord",

    // Spotify app
    'spotify.nowPlaying': 'En cours de lecture',
    'spotify.reciter': 'Mishary Rashid Alafasy',

    // Translate app
    'translate.title': 'Traduire',
    'translate.select': 'Choisissez votre langue',

    // Common
    'common.back': 'Retour',
    'common.projects': 'projets',
  },
  ar: {
    // Splash
    'splash.hello': 'مرحباً',
    'splash.subtitle': 'أنا سيف إسلام — مصمم مبدع ومطور',

    // Lock screen
    'lock.experienceBanner': '+3 سنوات خبرة في التصميم والتطوير',
    'lock.projectsBanner': '+10 مشاريع تم إنجازها في التصميم والتطوير',
    'lock.swipeUp': 'اسحب للأعلى لفتح القفل',

    // Home screen / app names
    'home.app.notes': 'من أنا',
    'home.app.behance': 'معرض التصميم',
    'home.app.github': 'مشاريع برمجية',
    'home.app.messages': 'آراء العملاء',
    'home.app.gmail': 'تواصل معي',
    'home.app.spotify': 'تلاوة',
    'home.app.translate': 'اللغة',
    'home.app.folders': 'سيرتي الذاتية',

    // Folders app
    'folders.title': 'الملفات',
    'folders.cvFileName': 'Seif_Islem_Benrabah_CV.pdf',
    'folders.open': 'فتح',
    'folders.download': 'تحميل PDF',
    'folders.back': 'الملفات',
    'cv.about': 'نبذة',
    'cv.education': 'التعليم',
    'cv.experience': 'الخبرة',
    'cv.projects': 'مشاريع مختارة',
    'cv.skills': 'المهارات',
    'cv.skills.dev': 'التطوير',
    'cv.skills.design': 'التصميم',
    'cv.languages': 'اللغات',

    // Notes app
    'notes.list.about': 'من أنا',
    'notes.list.skills': 'المهارات والأدوات',
    'notes.list.experience': 'الخبرة والتعليم',
    'notes.list.services': 'الخدمات',
    'about.p1': 'مرحباً، أنا سيف إسلام، مصمم إبداعي ومطور ويب متميز في الجزائر. أعمل في نقطة الالتقاء بين السحر البصري الفخم والدقة التقنية المتطورة لأصنع تجارب متميزة تأسر الانتباه وتنمي العلامات التجارية.',
    'about.p2': 'مع سنوات من الممارسة النشطة في مجالات الهوية البصرية الحديثة، وتصميم تجربة المستخدم، والبرمجيات التفاعلية، أتخصص في صياغة حقائب أعمال حصرية للمبتكرين.',
    'about.p3': 'أؤمن بأن التصميم ليس مجرد زينة بصرية عابرة - بل هو قوة تفاعلية راقية تحل مشكلات المستخدم وتحول الأفكار المجردة إلى واقع ملموس.',
    'about.stats.experience': 'سنوات الخبرة',
    'about.stats.projects': 'المشاريع المكتملة',
    'about.stats.clients': 'العملاء السعداء',
    'about.stats.retention': 'معدل الحفاظ على العملاء',

    // Experience
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
    'exp.entry3.desc': 'المساعدة في تشخيص وحل مشاكل الأنظمة والشبكات ودعم المستخدمين الداخليين ومراقبة الاتصال بين الأقسام.',
    'exp.entry4.type': 'تكوين',
    'exp.entry4.role': 'برنامج تكوين في ريادة الأعمال',
    'exp.entry4.period': 'مايو 2026',
    'exp.entry4.desc': 'تطوير نموذج الأعمال، إنشاء المشاريع الناشئة وإدارة المشاريع، تحليل السوق والتخطيط.',

    // Services
    'services.specialties': 'التخصصات الرئيسية:',
    'services.uiux.title': 'تصميم واجهة وتجربة المستخدم',
    'services.uiux.desc': 'بناء واجهات بسيطة وفاخرة عالية الجودة. يجمع أسلوبي بين التميز المريح ومحاكاة الحركة التفاعلية لتجربة تصفح غامرة.',
    'services.uiux.spec1': 'نمذجة تفاعلية متقدمة عالية الجودة',
    'services.uiux.spec2': 'هندسة فنية متكاملة للواجهات',
    'services.uiux.spec3': 'تفاعلات حركية بالغة النعومة',
    'services.uiux.spec4': 'تدقيق وتحليل راحة الاستخدام',
    'services.branding.title': 'العلامة التجارية والهوية',
    'services.branding.desc': 'ابتكار لوحات حسية فاخرة للعملاء المتميزين. أصنع شعارات، وخطوطاً، وأدلة بصرية مذهلة قابلة للتوسع.',
    'services.branding.spec1': 'شعارات وأيقونات مخصصة وحصرية',
    'services.branding.spec2': 'أدلة إرشادية متكاملة لبيانات المتجهات',
    'services.branding.spec3': 'تصميم خطوط وأبعاد الفراغات الراقية',
    'services.branding.spec4': 'كتب وهوية العلامة التجارية الرقمية المتكاملة',
    'services.webdev.title': 'تطوير الويب الفاخر',
    'services.webdev.desc': 'تحويل التصاميم الراقية إلى أكواد برمجية فاعلة وسريعة الاستجابة ومحسنة لجعل خدماتك سريعة جداً.',
    'services.webdev.spec1': 'حلول برمجية متطورة باستخدام React + Next.js',
    'services.webdev.spec2': 'حركات وتأثيرات انتقالية تفاعلية',
    'services.webdev.spec3': 'مرونة تامة واستجابة مطلقة للهواتف',
    'services.webdev.spec4': 'برمجة دلالية يسهل الوصول إليها',
    'services.motion.title': 'تصميم الحركات التفاعلية',
    'services.motion.desc': 'بث الروح في العناصر الثابتة لزيادة تركيز المستخدم وإنشاء أشرطة دائرية متميزة ونسب تشغيل سينمائية مذهلة.',
    'services.motion.spec1': 'فيزياء توجيه تدفقات التمرير التفاعلية',
    'services.motion.spec2': 'مولدات تناسق تفاعلية باستخدام SVG',
    'services.motion.spec3': 'مجموعات حركات مجهرية صامتة مخصصة',
    'services.motion.spec4': 'تصميم استعراضات سينمائية ومقدمات تصفح',

    // Behance app
    'behance.filter.all': 'الكل',
    'behance.filter.branding': 'الهوية البصرية',
    'behance.filter.uiux': 'واجهة وتجربة المستخدم',
    'project.viewBehance': 'عرض على Behance',

    // GitHub app
    'project.viewGithub': 'عرض على GitHub',
    'project.viewLive': 'عرض الموقع المباشر',

    // Messages app
    'messages.subtitle': 'آراء العملاء',

    // Gmail app
    'gmail.to': 'إلى',
    'gmail.subject': 'الموضوع',
    'gmail.message': 'الرسالة',
    'gmail.send': 'إرسال',
    'gmail.newMessage': 'رسالة جديدة',
    'gmail.location': 'يعمل من الجزائر، شمال أفريقيا',

    // Spotify app
    'spotify.nowPlaying': 'قيد التشغيل الآن',
    'spotify.reciter': 'مشاري راشد العفاسي',

    // Translate app
    'translate.title': 'ترجمة',
    'translate.select': 'اختر لغتك',

    // Common
    'common.back': 'رجوع',
    'common.projects': 'مشاريع',
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const saved = typeof window !== 'undefined' ? (localStorage.getItem('seif_portfolio_lang') as Language | null) : null;
    if (saved) setLanguageState(saved);
    setHydrated(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('seif_portfolio_lang', lang);
    }
  };

  const t = (key: string): string => {
    return translations[language][key] || translations['en'][key] || key;
  };

  const isRtl = language === 'ar';

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
  }, [language, isRtl]);

  if (!hydrated) return null;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRtl }}>
      {children}
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
