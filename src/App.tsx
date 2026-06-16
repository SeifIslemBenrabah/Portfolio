import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Services from './components/Services';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LogosRibbon from './components/LogosRibbon';
import ProjectDetail from './components/ProjectDetail';
import AllProjects from './components/AllProjects';
import IntroScreen from './components/IntroScreen';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [showAllProjects, setShowAllProjects] = useState(false);
  // track where the user came from when they opened a project detail
  const [projectSource, setProjectSource] = useState<'main' | 'all'>('main');

  // Smooth scroll click handler
  const handleNavClick = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  // Automated scroll tracking to highlight active navigation pills
  useEffect(() => {
    const sections = ['home', 'about', 'services', 'portfolio', 'testimonials', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160; // offset suited for sticky header height

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (selectedProject) {
    return (
      <>
        {showIntro && <IntroScreen onFinish={() => setShowIntro(false)} />}
        <ProjectDetail
          project={selectedProject}
          onBack={() => {
            setSelectedProject(null);
            if (projectSource === 'all') {
              setShowAllProjects(true);
              window.scrollTo({ top: 0 });
            } else {
              setTimeout(() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' }), 50);
            }
          }}
        />
      </>
    );
  }

  if (showAllProjects) {
    return (
      <>
        {showIntro && <IntroScreen onFinish={() => setShowIntro(false)} />}
        <AllProjects
          onBack={() => {
            setShowAllProjects(false);
            setTimeout(() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' }), 50);
          }}
          onProjectClick={(p) => {
            setProjectSource('all');
            setSelectedProject(p);
            window.scrollTo({ top: 0 });
          }}
        />
      </>
    );
  }

  return (
    <>
      {showIntro && <IntroScreen onFinish={() => setShowIntro(false)} />}
      <div className="relative min-h-screen bg-white text-black selection:bg-black selection:text-white font-sans">
      {/* Dynamic Ambient Background Sparkles Accent */}
      <div className="fixed inset-0 pointer-events-none z-[1] select-none overflow-hidden">
        {/* Absolute Subtle Aesthetic Lighting Points */}
        <div className="absolute top-[15%] left-[5%] w-[400px] h-[400px] rounded-full bg-black/[0.01] blur-[150px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] rounded-full bg-black/[0.01] blur-[170px]" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Sticky Floating Glass Navbar */}
        <Navbar onNavClick={handleNavClick} activeSection={activeSection} />

        {/* Portfolio Core Layout Zones */}
        <main className="flex-grow">
          <Hero onContactClick={() => handleNavClick('contact')} />
          <LogosRibbon />
          <About />
          <Experience />
          <Services />
          <Skills />
          <Portfolio
            onProjectClick={(p) => { setProjectSource('main'); setSelectedProject(p); window.scrollTo({ top: 0 }); }}
            onSeeAll={() => { setShowAllProjects(true); window.scrollTo({ top: 0 }); }}
          />
          <Testimonials />
          <Contact />
        </main>

        {/* Global End Screen Credits */}
        <Footer />
      </div>
      </div>
    </>
  );
}
