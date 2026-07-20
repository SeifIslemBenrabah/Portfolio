export const skillsData = {
  design: ['Adobe Illustrator', 'Adobe Photoshop', 'Adobe After Effects', 'Adobe Premiere Pro', 'Figma', 'Art Direction', 'UI/UX Design'],
  dev: ['React', 'Next.js', 'Express', 'MongoDB', 'FastAPI', 'Python', 'Spring Boot', 'HTML5 / CSS3', 'JavaScript', 'Tailwind CSS', 'TypeScript', 'Git & GitHub'],
};

export interface ExperienceEntry {
  key: string;
  org: string;
  current: boolean;
}

export const experienceEntries: ExperienceEntry[] = [
  { key: 'entry1', org: 'ESI-SBA', current: true },
  { key: 'entry2', org: 'Independent', current: true },
  { key: 'entry3', org: 'Algérie Telecom', current: false },
  { key: 'entry4', org: "Centre de Développement de l'Entrepreneuriat-CDE", current: false },
];

export interface ServiceEntry {
  id: string;
  key: string;
}

export const servicesData: ServiceEntry[] = [
  { id: 'branding', key: 'branding' },
  { id: 'web-dev', key: 'webdev' },
  { id: 'ui-ux', key: 'uiux' },
  { id: 'motion', key: 'motion' },
];
