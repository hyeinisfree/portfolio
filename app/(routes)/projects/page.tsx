'use client';
import { useProjectFilter } from '@/hooks/useStaticData';
import { projectFilterConfig } from '@/data/constants/projectFilter';
import { Button } from '@/components/ui/button';
import { ProjectCard } from '@/components/ui/ProjectCard';

export default function Projects() {
  const { filteredProjects, selectedFilters, handleFilterChange } =
    useProjectFilter();

  return (
    <div className="flex flex-col justify-center font-clash">
      <h1 className="text-6xl my-4">Projects</h1>
      <div className="filter space-y-2 my-4">
        {projectFilterConfig.map(({ name, key, options }) => (
          <div key={key} className="flex items-center space-x-2">
            <span className="w-[100px] font-medium">{name}</span>
            {options.map((option) => (
              <Button
                key={option}
                variant={
                  selectedFilters[key]?.includes(option) ? 'default' : 'outline'
                }
                onClick={() => handleFilterChange(key, option)}
              >
                {option}
              </Button>
            ))}
          </div>
        ))}
      </div>
      <div className="items grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            href={`/projects/${project.id}`}
            {...project}
          />
        ))}
      </div>
    </div>
  );
}
