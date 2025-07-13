import { StaticImageData } from 'next/image';

export interface Experience {
  title: string;
  content: React.ReactNode;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  startDate: string;
  endDate?: string;
  year: number[];
  team: string[];
  platform: string[];
  position: string;
  role: string[];
  color: string;
  image: StaticImageData;
  thumbnail: StaticImageData;
  icon: StaticImageData;
  introduction: React.ReactNode;
  techStack: string[];
  detailTechStack: string[];
  developmentExperience: Experience[];
  growExperience: Experience[];
  award?: string;
  links?: { type: string; url: string }[];
}
