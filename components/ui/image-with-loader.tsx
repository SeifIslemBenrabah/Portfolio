'use client';

import React, { useState } from 'react';

export function ImageWithLoader({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-paper-surface ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-paper-surface">
          <div className="w-full h-full animate-pulse bg-black/5" />
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/60 to-transparent animate-shimmer" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transition-all duration-1000 ease-[0.22,1,0.36,1] ${
          isLoaded ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-105 blur-md'
        }`}
      />
    </div>
  );
}
