import Image from 'next/image';
import { Badge } from '@/components/ui/badge'; // shadcn/ui의 Badge 사용
import { TrophyIcon, Globe, Calendar, ContactRound } from 'lucide-react'; // lucide-react에서 아이콘 사용
import Link from 'next/link';
import { Project } from '@/data/types/content';

export interface ProjectCardProps extends Project {
  href: string;
}

export const ProjectCard = ({ href, ...project }: ProjectCardProps) => {
  return (
    <Link
      href={href}
      className="relative flex cursor-pointer overflow-hidden rounded-2xl border bg-white shadow-sm transition-shadow duration-200 hover:shadow-md md:flex-col"
    >
      {/* Desktop Image */}
      <div className="relative aspect-video hidden md:block">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-2.5 p-4">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1.5 text-base font-medium md:text-lg 2xl:text-xl">
            <Image
              src={project.icon}
              alt={project.title}
              width={16}
              height={16}
              className="size-4 object-cover"
            />
            <span className="font-medium">{project.title}</span>
          </div>
          <p className="text-sm text-gray-600 2xl:text-base">
            {project.description}
          </p>
        </div>

        <div className="flex flex-col gap-1 text-xs 2xl:text-sm mb-1">
          {project.award && (
            <div className="flex items-center gap-1.5 ">
              <TrophyIcon className="size-3.5" strokeWidth={1.5} />
              <p>{project.award}</p>
            </div>
          )}
          <div className="flex items-center gap-1.5 font-clash">
            <Globe className="size-3.5" strokeWidth={1.5} />
            <p>{project.platform.join(', ')}</p>
          </div>
          <div className="flex items-center gap-1.5 font-clash">
            <ContactRound className="size-3.5" strokeWidth={1.5} />
            <p>{project.role.join(', ')}</p>
          </div>
          <div className="flex items-center gap-1.5 font-clash">
            <Calendar className="size-3.5" strokeWidth={1.5} />
            <p>
              {project.startDate}
              {project.endDate ? ' → ' : ''}
              {project.endDate}
            </p>
          </div>
        </div>

        <div className="mt-auto flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="px-2 py-0.5 font-normal"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      {/* Mobile Image */}
      <div className="absolute right-4 top-4 z-10 aspect-video w-[120px] overflow-hidden rounded-md shadow-sm md:hidden">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>
    </Link>
  );
};
