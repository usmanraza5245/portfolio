// src/types/index.ts

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  location?: string;
  email: string;
  phone?: string;
  github?: string;
  linkedin?: string;
  bio: string;
}

export interface Skill {
  category: string;
  items: string[];
  order?: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  url?: string;
  github?: string;
  featured: boolean;
  year: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  order?: number;
}

export interface Certification {
  title: string;
  issuer: string;
  url?: string;
  order?: number;
}
