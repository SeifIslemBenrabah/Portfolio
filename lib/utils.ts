import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { ProjectData } from '@/types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// These project logo SVGs are white-fill (built for the old dark theme) and need
// to be inverted to black to stay visible on the light background.
const WHITE_FILL_LOGO_IDS = new Set([
  'boutique-hafouda',
  'phinlex-brand',
  'public-speaking-event',
  'tbsshop-rebrand',
  'bluebite-restaurant',
  'trading-books-app',
  'coach-amine-website',
  'levresion',
]);

export function lightLogoClass(project: Pick<ProjectData, 'id'>) {
  return WHITE_FILL_LOGO_IDS.has(project.id) ? 'invert' : '';
}
