import en from './en';
import fr from './fr';

export type Lang = 'en' | 'fr';
export type { Dict } from './en';

const dicts = { en, fr } as const;

export function getDict(lang: Lang) {
  return dicts[lang] ?? dicts.en;
}
