"use client";
import { useProjectFilter } from "@/hooks/useStaticData";
import { projectFilterConfig } from "@/data/constants/projectFilter";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/ui/ProjectCard";
import useDimension from "@/hooks/useDimension";

export default function Projects() {
  const { filteredProjects, selectedFilters, handleFilterChange } =
    useProjectFilter();
  const { width } = useDimension();

  return (
    <div className="flex flex-col justify-center font-clash">
      <h1 className="my-6 text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl">
        Projects
      </h1>

      <div className="my-2 hidden flex-col space-y-2.5 md:flex">
        {projectFilterConfig.map(({ name, key, options }) => (
          <div key={key} className="flex items-start space-x-2">
            <p className="w-24 text-sm 2xl:text-base font-medium shrink-0 mt-0.5">
              {name}
            </p>
            <div className="flex flex-wrap gap-2">
              {options.map((option) => (
                <Button
                  key={option}
                  size={width >= 1536 ? "sm" : "xs"} // md breakpoint
                  variant={
                    selectedFilters[key]?.includes(option)
                      ? "clicked"
                      : "outline"
                  }
                  onClick={() => handleFilterChange(key, option)}
                  className="cursor-pointer"
                >
                  {option}
                </Button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="items grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mt-4 mb-8">
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
