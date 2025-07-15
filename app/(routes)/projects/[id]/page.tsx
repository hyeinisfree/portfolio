import { ProjectData } from "@/data/content";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  ContactRound,
  UsersRound,
  Megaphone,
  Layers,
  Terminal,
  Leaf,
  SquareArrowOutUpRight,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FiGithub } from "react-icons/fi";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function ProjectDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const project = ProjectData.find((p) => p.id === parseInt(params.id));

  if (!project) {
    return (
      <div className="flex flex-col justify-center font-clash">
        <h1 className="my-4 text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl">
          Project Not Found
        </h1>
        <p>The project with ID {params.id} could not be found.</p>
      </div>
    );
  }

  const InfoBlock = ({
    Icon,
    title,
    children,
  }: {
    Icon: React.ElementType;
    title: string;
    children?: React.ReactNode;
  }) => (
    <div className="flex flex-col gap-2.5">
      <div className="flex items-center gap-1.5">
        <div
          style={{ backgroundColor: project.color, opacity: 0.7 }}
          className="p-1 rounded-sm"
        >
          <Icon className="size-3 xl:size-3.5" color="white" />
        </div>
        <h3 className="md:text-lg xl:text-xl leading-none font-medium">
          {title}
        </h3>
      </div>
      <div className="px-1 text-sm xl:text-base">{children}</div>
    </div>
  );

  return (
    <div className="flex flex-col justify-center font-arita">
      <section id="project-detail-header" className="flex">
        <Image
          src={project.image}
          alt={project.title}
          className="aspect-4/1 object-cover flex-grow"
        ></Image>
      </section>
      <section
        id="project-detail-title"
        className="flex justify-between items-center my-5"
      >
        <div className="flex items-center space-x-2.5">
          <Link
            href="/projects"
            className={buttonVariants({
              variant: "outline",
              size: "icon",
              className: "size-7 lg:size-8 border-[1.5px]",
            })}
          >
            <ArrowLeft strokeWidth={2} size={20} color="gray" />
          </Link>
          <h1 className="text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-medium">
            {project.title}
          </h1>
          <Image
            src={project.icon}
            alt={project.title}
            width={32}
            height={32}
          />
        </div>
        <div className="flex items-center gap-2">
          {project.links?.map(({ type, url }, index) => (
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`cursor-pointer hover:shadow-sm ${buttonVariants({
                    variant: "outline",
                    size: "icon",
                    className: "size-7 lg:size-8",
                  })}`}
                >
                  {type === "github" ? (
                    <FiGithub />
                  ) : (
                    <SquareArrowOutUpRight size={18} />
                  )}
                </a>
              </TooltipTrigger>
              <TooltipContent>
                {type === "github" ? "GitHub" : "Website"}
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </section>
      <section
        id="project-detail-content"
        className="flex flex-col gap-8 mt-2 mb-6 mx-1"
      >
        <InfoBlock Icon={Calendar} title="프로젝트 기간">
          <p className="px-1 font-clash">
            {project.startDate} {project.endDate ? " → " : ""} {project.endDate}
          </p>
        </InfoBlock>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-0">
          <InfoBlock Icon={ContactRound} title="담당 역할">
            <ul className="list-disc px-4 space-y-1 font-clash">
              {project.roles.map((role, index) => (
                <li key={index}>{role}</li>
              ))}
            </ul>
          </InfoBlock>
          {project.team && (
            <InfoBlock Icon={UsersRound} title="팀 구성">
              <ul className="list-disc px-4 space-y-1">
                {project.team.map((team, index) => (
                  <li key={index}>{team}</li>
                ))}
              </ul>
            </InfoBlock>
          )}
        </div>
        <InfoBlock Icon={Megaphone} title={`${project.title} 소개`}>
          {project.introduction}
        </InfoBlock>
        <InfoBlock Icon={Layers} title="기술 스택">
          <ul className="list-disc px-4 space-y-1 font-clash">
            {project.detailTechStack.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </InfoBlock>
        <InfoBlock Icon={Terminal} title="개발 내용">
          <Accordion type="multiple">
            {project.developmentExperience.map((exp, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="text-base xl:text-lg">
                  {exp.title}
                </AccordionTrigger>
                <AccordionContent className="xl:text-base">
                  {exp.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </InfoBlock>
        <InfoBlock Icon={Leaf} title="성장 경험">
          <Accordion type="multiple">
            {project.growExperience.map((exp, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="text-base xl:text-lg">
                  {exp.title}
                </AccordionTrigger>
                <AccordionContent className="xl:text-base">
                  {exp.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </InfoBlock>
      </section>
    </div>
  );
}
