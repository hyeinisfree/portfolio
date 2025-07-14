"use client";
import { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import { ProjectData } from "@/data/content";
import { Project } from "@/data/types/content";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MdArrowOutward } from "react-icons/md";
import { Badge } from "@/components/ui/badge";
import { TrophyIcon } from "lucide-react"; // lucide-react에서 아이콘 사용
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

const ProjectItem = ({
  id,
  title,
  platform,
  roles,
  simpleIntroduction,
  techStack,
  thumbnail,
  award,
}: Project) => (
  <div
    className={`project-item min-w-full md:min-w-[340px] lg:min-w-[380px] xl:min-w-[420px] flex flex-col justify-between gap-4 pb-6 group`}
  >
    <div className="project-info flex-grow flex flex-col gap-6 2xl:gap-10">
      <div className="project-title flex justify-between">
        <h3 className="text-xl md:text-2xl 2xl:text-3xl">
          {id < 10 ? "0" + id : id}
        </h3>
        <div className="flex md:flex-col items-end">
          <div className="flex flex-col items-end">
            <h4 className="text-lg md:text-xl 2xl:text-2xl">{title}</h4>
            <p className="text-xs md:text-sm 2xl:text-base">
              {platform.join(", ")}
            </p>
            <p className="text-xs md:text-sm 2xl:text-base">
              {roles.join(", ")}
            </p>
          </div>
          <div className="project-image relative rounded-sm overflow-hidden md:hidden ml-3">
            <Image src={thumbnail} alt={title} width={120} height={80} />
          </div>
        </div>
      </div>
      <div className="project-description flex-grow text-xs md:text-sm 2xl:text-base flex flex-col justify-between gap-3 lg:gap-4">
        <div>
          {award && (
            <div className="flex items-center gap-1.5 pb-2">
              <TrophyIcon className="size-3.5" strokeWidth={1.5} />
              <p>{award}</p>
            </div>
          )}
          {simpleIntroduction}
        </div>
        <div className="project-techstack flex flex-wrap gap-1">
          {techStack.map((tech) => (
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
    </div>
    <div className="project-image relative rounded-sm overflow-hidden hidden md:block">
      <Image
        src={thumbnail}
        alt={title}
        className="aspect-video object-cover"
      />
      <div className="absolute bottom-2 right-4 flex flex-col gap-2 group">
        <Link
          href={`/projects/${id}`}
          className={buttonVariants({
            variant: "outline",
            className: "opacity-0 group-hover:opacity-100",
          })}
        >
          <p>More</p>
          <MdArrowOutward />
        </Link>
      </div>
    </div>
  </div>
);

const MyProject = () => {
  const projectSectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const section = projectSectionRef.current;
      const container = containerRef.current;
      if (!section || !container) return;

      const reserveSpace = section.clientHeight;
      section.style.marginBottom = `${reserveSpace}px`;
      const overflowWidth = container.scrollWidth - section.clientWidth;

      const items = container.querySelectorAll(".project-item");
      const st = gsap.to(items, {
        x: -overflowWidth,
        scrollTrigger: {
          trigger: section,
          start: "top top+=72px",
          end: "bottom top+=72px",
          pin: true,
          scrub: true,
        },
      });

      return () => {
        st.kill();
        section.style.marginBottom = "";
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      id="my-project"
      ref={projectSectionRef}
      className="font-clash flex flex-col justify-center min-h-[calc(100vh-var(--header-height))]"
    >
      <div
        ref={containerRef}
        className="flex flex-col justify-center 2xl:justify-between mt-8 mb-12"
      >
        <h2 className="text-4xl xl:text-5xl 2xl:text-6xl font-medium mb-8 md:mb-12 xl:mb-16 2xl:mb-20">
          My Project
        </h2>
        <div className="project-container flex flex-col md:flex-row gap-y-6 md:gap-y-0 md:gap-x-16 divide-y-1 divide-solid divide-gray-200 md:divide-y-0">
          {ProjectData.map((project) => (
            <ProjectItem key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyProject;
