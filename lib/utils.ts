import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Forces every project logo to render pure black regardless of its source
// fill colors, so the marquee/cards stay monochrome on the light background.
export function lightLogoClass() {
  return 'grayscale brightness-0';
}
