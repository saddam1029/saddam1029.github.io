export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  overview: string;
  role: string;
  platform: string;
  technologies: string[];
  features: string[];
  images: string[];
  githubUrl: string;
  liveUrl: string;
};

export type SkillGroup = {
  name: string;
  icon: 'android' | 'architecture' | 'async' | 'database' | 'firebase' | 'maps' | 'tools';
  skills: string[];
};

export type Certification = {
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  url: string;
  image: string;
};
