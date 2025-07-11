import Image, { StaticImageData } from 'next/image';
import { Badge } from '@/components/ui/badge'; // shadcn/ui의 Badge 사용
import { TrophyIcon, Calendar, ContactRound } from 'lucide-react'; // lucide-react에서 아이콘 사용
import Link from 'next/link';

import { Project } from '@/data/content/projects';

export interface ProjectCardProps extends Project {
  href: string;
}

export const ProjectCard = ({ href, ...project }: ProjectCardProps) => {
  return (
    <Link
      href={href}
      className="flex flex-col w-full rounded-2xl border shadow-sm bg-white overflow-hidden cursor-pointer"
    >
      <div className="aspect-video relative w-full">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-1.5 p-4 h-full">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 text-base md:text-lg xl:text-xl font-medium">
            <Image
              src={project.icon}
              alt={project.title}
              className="w-[16px] h-[16px] obrject-cove"
            />
            <span>{project.title}</span>
          </div>
          <p className="text-sm xl:text-base text-gray-600">
            {project.description}
          </p>
        </div>
        <div className="flex flex-col gap-0.5 text-xs xl:text-sm">
          {project.award && (
            <div className="flex items-start gap-1 text-yellow-700">
              <TrophyIcon className="size-3 mt-1" />
              <p>{project.award}</p>
            </div>
          )}
          <div className="flex items-start gap-1">
            <ContactRound className="size-3 mt-1" />
            <p>{project.position}</p>
          </div>
          <div className="flex items-start gap-1">
            <Calendar className="size-3 mt-1" />
            <p>
              {project.startDate} → {project.endDate}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.techStack.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="text-[0.7rem] lg:text-[0.72rem] xl:text-xs px-2 py-1"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </Link>
  );
};
