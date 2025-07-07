import { StaticImageData } from "next/image";

export interface Project {
  id: number;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  thumbnail: StaticImageData;
  position: string;
  techStack: string[];
  award?: string;
  icon: StaticImageData;
  year: number[];
  platform: string[];
  role: string[];
}
