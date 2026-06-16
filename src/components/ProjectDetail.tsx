import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'motion/react';
import { ArrowLeft, ArrowUpRight, Github } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface TechRow {
  layer: string;
  tools: string;
}

export interface ProjectData {
  id: string;
  title: string;
  category: string;
  image?: string;
  description: string;
  link: string;
  tags: string[];
  year: string;
  featured?: boolean;
  duration?: string;
  techStack?: TechRow[];
  features?: string[];
  month?: string;
  noInvert?: boolean;
  result?: string;
  academicNote?: string;
  grade?: string;
  isGithub?: boolean;
  images?: string[];
}

interface ProjectDetailProps {
  project: ProjectData;
  onBack: () => void;
}

const TEXTURE_BG = {
  backgroundColor: '#f9f9f9',
  backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.07) 1px, transparent 1px)',
  backgroundSize: '22px 22px',
} as const;

/* ─── Single image slide — each calls its own useTransform ─── */
function ImageSlide({
  src,
  index,
  total,
  scrollYProgress,
  alt,
}: {
  src: string;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
  alt: string;
}) {
  // n = total so each slide owns 1/total of progress; last slide ends at (total-1)/total
  // Gallery height is (total+1)*100vh giving a 100vh buffer so the last transition fully completes
  const n = total;
  const isFirst = index === 0;

  const y = useTransform(
    scrollYProgress,
    isFirst ? [0, 1] : [(index - 1) / n, index / n],
    isFirst ? ['0%', '0%'] : ['100%', '0%']
  );

  return (
    <motion.div
      style={{ position: 'absolute', inset: 0, zIndex: index + 1, y }}
    >
      {/* Portrait card — smaller, clearly not square */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '84%',
          height: '55vh',
          borderRadius: '18px',
          overflow: 'hidden',
          boxShadow: '0 8px 48px rgba(0,0,0,0.13)',
        }}
      >
        <img
          src={src}
          alt={alt}
          loading={index === 0 ? 'eager' : 'lazy'}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </div>
    </motion.div>
  );
}

/* ─── Unified detail view — same layout for all project types ─── */
function ProjectDetailView({ project, onBack }: ProjectDetailProps) {
  const { t, isRtl } = useLanguage();
  const images = project.images ?? [];

  const galleryRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: galleryRef,
    container: scrollContainerRef,
    offset: ['start start', 'end end'],
  });

  const initials = project.title
    .split(/[\s—-]+/)
    .slice(0, 2)
    .map((w: string) => w[0])
    .join('')
    .toUpperCase();

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    const right = scrollContainerRef.current;
    if (right && !right.contains(e.target as Node)) {
      right.scrollTop += e.deltaY;
    }
  };

  return (
    <div
      className="text-black flex flex-col overflow-y-auto md:overflow-hidden md:h-dvh"
      style={TEXTURE_BG}
      onWheel={handleWheel}
    >
      {/* ── Top bar ── */}
      <div
        className="shrink-0 z-50 px-6 py-4 flex items-center justify-between border-b border-black/10"
        style={TEXTURE_BG}
      >
        <button
          onClick={onBack}
          className={`flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black/40 hover:text-black transition-colors cursor-pointer ${isRtl ? 'flex-row-reverse' : ''}`}
        >
          <ArrowLeft className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
          {t('common.back')}
        </button>
        <span className="text-[10px] font-mono text-black/30 uppercase tracking-widest hidden sm:block">
          {project.category} — {project.month ? `${project.month} ` : ''}{project.year}{project.duration ? ` — ${project.duration}` : ''}
        </span>
      </div>

      {/* ── Body: stacked on mobile, 50/50 on desktop ── */}
      <div className={`flex-1 flex flex-col md:overflow-hidden ${isRtl ? 'md:flex-row-reverse' : 'md:flex-row'}`}>

        {/* Left — info panel */}
        <div
          className={`w-full md:w-1/2 shrink-0 flex flex-col justify-center gap-5 px-8 py-10 md:px-10 border-b md:border-b-0 md:border-r border-black/10 ${isRtl ? 'items-end text-right' : 'items-start text-left'}`}
          style={TEXTURE_BG}
        >
          {/* Logo + badges */}
          <div className={`flex items-center gap-3 flex-wrap ${isRtl ? 'flex-row-reverse' : ''}`}>
            <div className="w-10 h-10 flex items-center justify-center bg-black rounded-xl p-2 shrink-0">
              {project.image ? (
                <img src={project.image} alt={project.title} className={`w-full h-full object-contain ${project.noInvert ? 'filter brightness-0 invert' : ''}`} />
              ) : (
                <span className="font-display font-black text-sm text-white">{initials}</span>
              )}
            </div>
            <span className="px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-widest bg-black text-white rounded-full">
              {project.category}
            </span>
            <span className="px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-widest border border-black/20 text-black/50 rounded-full">
              {project.month ? `${project.month} ` : ''}{project.year}
            </span>
            {project.grade && (
              <span className="px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-widest bg-black text-white rounded-full">
                {project.grade}
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="font-display font-bold text-2xl sm:text-3xl text-black leading-tight tracking-tight">
            {project.title}
          </h1>

          {/* Description */}
          <p className="text-sm text-black/50 leading-relaxed font-sans line-clamp-4">
            {project.description}
          </p>

          {/* Tags — tech at a glance */}
          <div className={`flex flex-wrap gap-1.5 ${isRtl ? 'flex-row-reverse' : ''}`}>
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-[9px] font-mono uppercase tracking-wider border border-black/15 text-black/40 rounded-full bg-white/60"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 self-start px-5 py-2.5 bg-black text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-stone-800 transition-all duration-200 cursor-pointer ${isRtl ? 'flex-row-reverse' : ''}`}
          >
            {project.isGithub ? <Github className="w-3.5 h-3.5" /> : <ArrowUpRight className="w-3.5 h-3.5" />}
            {project.isGithub ? t('project.viewGithub') : project.category === 'Branding' ? t('project.viewBehance') : t('project.viewLive')}
          </a>

          {images.length > 0 && (
            <p className="text-[9px] font-mono text-black/20 uppercase tracking-widest animate-pulse hidden md:block">
              ↓ {t('project.scrollAnywhere')}
            </p>
          )}
          {images.length > 0 && (
            <p className="text-[9px] font-mono text-black/20 uppercase tracking-widest animate-pulse md:hidden">
              ↓ {t('project.scrollDown')}
            </p>
          )}
        </div>

        {/* Right — image gallery */}
        <div
          ref={scrollContainerRef}
          className="w-full h-dvh md:w-1/2 md:h-full overflow-y-scroll overscroll-y-contain"
        >
          {images.length > 0 ? (
            <div
              ref={galleryRef}
              style={{ height: `${(images.length + 1) * 100}vh`, position: 'relative' }}
            >
              <div style={{ position: 'sticky', top: 0, height: '100vh', ...TEXTURE_BG }}>
                {images.map((src, i) => (
                  <ImageSlide
                    key={i}
                    src={src}
                    index={i}
                    total={images.length}
                    scrollYProgress={scrollYProgress}
                    alt={`${project.title} — ${i + 1}`}
                  />
                ))}
                <div className="absolute bottom-5 right-5 z-50">
                  <span className="text-[10px] font-mono text-black/25 uppercase tracking-widest">
                    {images.length} {t('project.images')}
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center gap-3" style={TEXTURE_BG}>
              <span className="text-[10px] font-mono text-black/20 uppercase tracking-widest">
                {t('project.noPreview')}
              </span>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

/* ─── Entry point ─── */
export default function ProjectDetail({ project, onBack }: ProjectDetailProps) {
  return <ProjectDetailView project={project} onBack={onBack} />;
}
