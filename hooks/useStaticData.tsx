import { useState, useMemo } from 'react';
import { ProjectData } from '@/data/content';
import { Project } from '@/data/types/content';
import {
  filterProjectByYear,
  filterProjectByPosition,
  filterProjectByTechStack,
} from '@/lib/dataUtils';

type FilterState = {
  [key: string]: (string | number)[];
};

export const useProjectFilter = () => {
  const [selectedFilters, setSelectedFilters] = useState<FilterState>({});

  const handleFilterChange = (key: string, value: string | number) => {
    setSelectedFilters((prev) => {
      const currentFilter = prev[key] || [];
      const newFilter = currentFilter.includes(value)
        ? currentFilter.filter((item) => item !== value)
        : [...currentFilter, value];
      if (newFilter.length === 0) {
        const { [key]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [key]: newFilter };
    });
  };

  const filteredProjects = useMemo(() => {
    let tempProjects: Project[] = [...ProjectData];

    Object.entries(selectedFilters).forEach(([key, values]) => {
      if (values.length == 0) return;

      switch (key) {
        case 'year':
          tempProjects = filterProjectByYear(tempProjects, values as number[]);
          break;
        case 'position':
          tempProjects = filterProjectByPosition(
            tempProjects,
            values as string[]
          );
          break;
        case 'techStack':
          tempProjects = filterProjectByTechStack(
            tempProjects,
            values as string[]
          );
          break;
        default:
          break;
      }
    });

    return tempProjects;
  }, [selectedFilters]);
  return {
    filteredProjects,
    selectedFilters,
    handleFilterChange,
  };
};
