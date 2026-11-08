export interface Profile {
  name: string;
  short: string;
  photo?: string;
  role: string;
  email: string;
  whatsapp: string;
  linkedin: string;
  github: string;
}

export interface Project {
  title: string;
  tag: string;
  text: string;
  big?: boolean;
  link?: string;
  cta?: string;
}

export type Stat = [value: string, label: string];
export type JourneyStep = [title: string, text: string];
export type Service = [title: string, text: string];

export interface ExperienceProject {
  title: string;
  kind?: string;
  intro: string;
  bullets: string[];
  tech: string[];
}

export interface Experience {
  company: string;
  type: string;
  place: string;
  roles: { title: string; period: string }[];
  summary?: string;
  projects?: ExperienceProject[];
  recognition?: string;
  skills?: string[];
}

export interface Certificate {
  name: string;
  issuer: string;
  issued: string;
  id?: string;
  skills?: string[];
  linked?: string;
}

export interface Chapter {
  when: string;
  title: string;
  text: string;
}

export type Strength = [title: string, text: string];
