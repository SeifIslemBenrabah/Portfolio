export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  link: string;
  tags: string[];
  year: string;
  featured?: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  details: string[];
  iconName: string; // lucide icon name
}

export interface Skill {
  name: string;
  category: 'Design' | 'Development' | 'Tools';
  percentage: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  text: string;
  rating: number;
}

export interface Experience {
  id: string;
  period: string;
  role: string;
  company: string;
  description: string;
  achievements: string[];
}
