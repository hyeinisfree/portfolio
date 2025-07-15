import { StaticImageData } from "next/image";
import { IconType } from "react-icons";

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
  team?: string[];
  platform: string[];
  position: string;
  roles: string[];
  color: string;
  image: StaticImageData;
  thumbnail: StaticImageData;
  icon: StaticImageData;
  simpleIntroduction: React.ReactNode;
  introduction: React.ReactNode;
  techStack: string[];
  detailTechStack: string[];
  developmentExperience: Experience[];
  growExperience: Experience[];
  award?: string;
  links?: { type: string; url: string }[];
}

export interface Skill {
  name: string;
  icon: IconType;
  color: string;
  details: string[];
}
