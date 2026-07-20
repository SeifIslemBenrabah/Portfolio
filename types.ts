export interface TechRow {
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

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
}
