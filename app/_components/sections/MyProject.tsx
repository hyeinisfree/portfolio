"use client";
import { useRef } from "react";
import Image, { StaticImageData } from "next/image";
import sswu from "@/public/images/sswu.jpg";
import storeasy from "@/public/images/storeasy.jpg";
import dingdong from "@/public/images/dingdong.jpg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ProjectItemProps {
  number: string;
  title: string;
  roles: string[];
  description: string;
  techStack: string;
  image: StaticImageData;
}

const ProjectItem = ({
  number,
  title,
  roles,
  description,
  techStack,
  image,
}: ProjectItemProps) => (
  <div className="project-item px-8 md:px-12 lg:px-16 py-20 w-[380px] md:max-w-[440px] lg:min-w-[480px] xl:min-w-[500px] 2xl:min-w-[540px] flex flex-col justify-between gap-20">
    <div className="project-info flex flex-col gap-8 lg:gap-10">
      <div className="project-title flex justify-between">
        <h3 className="text-3xl md:text-4xl lg:text-5xl">{number}</h3>
        <div className="flex flex-col items-end">
          <h4 className="text-xl md:text-xl lg:text-[1.6rem]">{title}</h4>
          <div className="text-sm md:text-md lg:text-[1rem] flex flex-col items-end">
            {roles.map((role, index) => (
              <p key={index}>{role}</p>
            ))}
          </div>
        </div>
      </div>
      <div className="project-description text-sm md:text-sm lg:text-[1rem] flex flex-col gap-4 lg:gap-6">
        <p>{description}</p>
        <div className="project-techstack">
          <h4 className="sm:text-sm md:text-md lg:text-[1.1rem]">Tech Stack</h4>
          <p className="sm:text-sm md:text-sm lg:text-[1rem]">{techStack}</p>
        </div>
      </div>
    </div>
    <div className="project-image">
      <Image src={image} alt={title} />
    </div>
  </div>
);

const MyProject = () => {
  const projectSectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
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
        trigger: projectSectionRef.current,
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

  const projects = [
    {
      number: "01",
      title: "맛동산",
      roles: ["Backend Developer"],
      description: "성신여자대학교 학생들을 위한 커뮤니티 서비스입니다.",
      techStack: "Java, SpringBoot, MySQL",
      image: sswu,
    },
    {
      number: "02",
      title: "수정광산",
      roles: ["Backend Team Leader", "Backend Developer"],
      description: "성신여자대학교 학생들을 위한 커뮤니티 서비스입니다.",
      techStack: "Java, SpringBoot, MySQL",
      image: sswu,
    },
    {
      number: "03",
      title: "스토리지",
      roles: ["Backend Developer"],
      description:
        "2021 원티드 '해, 커리어' 해커톤 출품작, 예선 진출 (상위 50개팀) 대학생을 위한 경험 정리 아카이빙 서비스입니다.",
      techStack: "Java, SpringBoot, MySQL",
      image: storeasy,
    },
    {
      number: "04",
      title: "띵-동",
      roles: ["Team Leader", "Backend Developer"],
      description:
        "2021 공개SW 개발자대회 출품작, 동상 수상 1인 가구의 음식물 쓰레기, 생활 쓰레기를 줄이기 위한 식품 및 생필품 나누기 플랫폼 서비스입니다.",
      techStack: "Java, SpringBoot, MySQL",
      image: dingdong,
    },
  ];

  return (
    <section
      id="my-project"
      ref={projectSectionRef}
      className="font-clash flex flex-col justify-center"
    >
      {/* Top full-width divider line */}
      {/* <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] h-px bg-[#e9e9e9]"></div> */}

      <h2 className="text-6xl font-medium mb-16 z-50">My Project</h2>
      <div className="projects overflow-x-hidden">
        <div
          ref={containerRef}
          className="project-container flex divide-x-1 divide-gray-200"
        >
          {projects.map((project) => (
            <ProjectItem key={project.number} {...project} />
          ))}
        </div>
      </div>
      {/* <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] h-px bg-[#e9e9e9]"></div> */}
    </section>
  );
};

export default MyProject;
