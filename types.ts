
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  year?: string;
  demoLink?: string;
  repoLink?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  certificateLink?: string;
  githubLink?: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  year: string;
  grade?: string;
}

export interface SkillItem {
  name: string;
  icon: string;
  type: 'icon' | 'image'; // 'icon' for FontAwesome class, 'image' for URL
}

export interface Skill {
  category: string;
  items: SkillItem[];
}

export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  date: string;
  link?: string;
  description?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}