import { Project } from '@/data/types/content';

export const filterProjectByYear = (projects: Project[], year: number[]) =>
  projects.filter((project) => project.year.some((y) => year.includes(y)));

export const filterProjectByPosition = (
  projects: Project[],
  position: string[]
) => projects.filter((project) => position.includes(project.position));

export const filterProjectByTechStack = (
  projects: Project[],
  techStack: string[]
) => {
  return projects.filter((project) =>
    techStack.some((stack) => project.techStack.includes(stack))
  );
};
