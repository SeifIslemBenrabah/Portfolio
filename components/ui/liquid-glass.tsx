'use client';

import React from 'react';
import { motion, type HTMLMotionProps } from 'motion/react';

/**
 * Liquid Glass primitives modeled on iOS 26 Control Center: a dark, smoky
 * frosted tint (not a light/white glass), a soft highlight along the top
 * edge, generous squircle corners, and real backdrop refraction — the blur
 * + SVG turbulence distortion is applied to a dedicated backdrop layer via
 * `backdrop-filter` so it warps what's *behind* the glass without ever
 * touching the crisp text/icons sitting on top of it.
 */

export function GlassFilter() {
  return (
    <svg className="absolute w-0 h-0" aria-hidden="true">
      <defs>
        <filter id="liquid-glass-distortion" x="-20%" y="-20%" width="140%" height="140%" filterUnits="objectBoundingBox">
          <feTurbulence type="fractalNoise" baseFrequency="0.008 0.012" numOctaves="2" seed="7" result="turbulence" />
          <feComponentTransfer in="turbulence" result="mapped">
            <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" />
            <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
            <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
          </feComponentTransfer>
          <feGaussianBlur in="turbulence" stdDeviation="3" result="softMap" />
          <feSpecularLighting in="softMap" surfaceScale="5" specularConstant="1" specularExponent="90" lightingColor="white" result="specLight">
            <fePointLight x="-150" y="-150" z="250" />
          </feSpecularLighting>
          <feComposite in="specLight" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" result="litImage" />
          <feDisplacementMap in="SourceGraphic" in2="softMap" scale="18" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>
    </svg>
  );
}

function GlassLayers({ radius = '28px' }: { radius?: string }) {
  return (
    <>
      {/* Refractive frosted backdrop — blur+saturate sample the backdrop, then the
          SVG filter (turbulence + specular lighting + displacement) bends and
          re-lights that sampled layer, distorting only what's behind the glass. */}
      <div
        className="absolute inset-0"
        style={{
          borderRadius: radius,
          backdropFilter: 'blur(20px) saturate(1.7)',
          WebkitBackdropFilter: 'blur(20px) saturate(1.7)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          borderRadius: radius,
          backdropFilter: 'blur(20px) saturate(1.7)',
          WebkitBackdropFilter: 'blur(20px) saturate(1.7)',
          filter: 'url(#liquid-glass-distortion)',
        }}
      />
      {/* Smoky dark tint */}
      <div className="absolute inset-0 bg-black/45" style={{ borderRadius: radius }} />
      {/* Top-edge glass highlight */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          borderRadius: radius,
          background: 'linear-gradient(180deg, rgba(255,255,255,0.20) 0%, rgba(255,255,255,0.04) 22%, rgba(255,255,255,0) 55%)',
        }}
      />
      {/* Inner rim light */}
      <div className="pointer-events-none absolute inset-0 border border-white/15" style={{ borderRadius: radius }} />
    </>
  );
}

interface GlassEffectProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  className?: string;
  radius?: string;
}

export function GlassEffect({ children, className = '', radius = '28px', ...rest }: GlassEffectProps) {
  return (
    <motion.div
      className={`relative overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.35)] ${className}`}
      style={{ borderRadius: radius }}
      {...rest}
    >
      <GlassLayers radius={radius} />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

export function GlassButton({
  children,
  className = '',
  onClick,
  ariaLabel,
  radius = '9999px',
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  ariaLabel?: string;
  radius?: string;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className={`relative overflow-hidden text-white transition-transform duration-200 active:scale-95 cursor-pointer ${className}`}
      style={{ borderRadius: radius }}
    >
      <GlassLayers radius={radius} />
      <span className="relative z-10 flex items-center justify-center w-full h-full">{children}</span>
    </button>
  );
}

export function GlassDock({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const radius = '32px';
  return (
    <div className={`relative flex items-end gap-3 px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.4)] ${className}`} style={{ borderRadius: radius }}>
      <GlassLayers radius={radius} />
      <div className="relative z-10 flex items-end gap-3">{children}</div>
    </div>
  );
}
