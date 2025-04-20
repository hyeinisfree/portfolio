"use client";
import { useRef } from "react";
import Image, { StaticImageData } from "next/image";
import sswu from "@/public/images/sswu.jpg";
import storeasy from "@/public/images/storeasy.jpg";
import dingdong from "@/public/images/dingdong.jpg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MdArrowOutward } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

interface ProjectItemProps {
  number: string;
  title: string;
  roles: string[];
  description: React.ReactNode;
  techStack: string;
  image: StaticImageData;
  linkType: "github" | "website";
  linkUrl: string;
}

const ProjectItem = ({
  number,
  title,
  roles,
  description,
  techStack,
  image,
  linkType,
  linkUrl,
}: ProjectItemProps) => (
  <div className="project-item px-8 md:px-12 lg:px-16 py-12 w-[380px] md:max-w-[440px] lg:min-w-[480px] xl:min-w-[500px] 2xl:min-w-[540px] flex flex-col justify-between gap-20">
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
        {description}
        <div className="project-techstack">
          <h4 className="sm:text-sm md:text-md lg:text-[1.1rem]">Tech Stack</h4>
          <p className="sm:text-sm md:text-sm lg:text-[1rem]">{techStack}</p>
        </div>
      </div>
    </div>
    <div className="project-image relative group rounded-sm overflow-hidden">
      <Image src={image} alt={title} />
      <a
        href={linkUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-2 right-4 bg-gray-800 text-white px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 translate-y-0 transition-all duration-300 flex items-center gap-1 shadow-md"
      >
        <span>{linkType === "github" ? "GitHub" : "Website"}</span>
        <MdArrowOutward />
      </a>
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
      title: "수정광산",
      roles: ["Backend Team Leader", "Backend Developer"],
      description: (
        <div className="space-y-1">
          <p>성신여자대학교 학생들을 위한 커뮤니티 서비스입니다.</p>
          <p>
            정회원 인증, 게시판/게시글/댓글, 좋아요/스크랩, 포인트 및 티어 기능
            등 다양한 기능을 제공합니다.
          </p>
        </div>
      ),
      techStack: "Java, Spring Boot, MySQL, AWS EC2/RDS/S3, Jenkins, Docker",
      image: sswu,
      linkType: "website",
      linkUrl: "https://litt.ly/crystalmine",
    },
    {
      number: "02",
      title: "스토리지",
      roles: ["Backend Developer"],
      description: (
        <div className="space-y-1">
          <p className="pb-2">
            🏆 2021 원티드 &apos;해, 커리어&apos; 해커톤 출품작, 예선 진출 (상위
            50개팀)
          </p>
          <p>대학생을 위한 경험 정리 아카이빙 서비스입니다.</p>
          <p>
            프로젝트와 페이지 구조, 태그를 이용한 경험 아카이빙 기능, 다른
            사람들의 경험 둘러보기 기능, 좋아요 기능 등 다양한 기능을
            제공합니다.
          </p>
        </div>
      ),
      techStack:
        "Typescript, NestJS, MySQL, Github Actions, Docker, Swagger, AWS EC2/RDS/S3/CodeDeploy",
      image: storeasy,
      linkType: "github",
      linkUrl: "https://github.com/Storeasy/Storeasy-server",
    },
    {
      number: "03",
      title: "띵-동",
      roles: ["Team Leader", "Backend Developer"],
      description: (
        <div className="space-y-1">
          <p className="pb-2">🏆 2021 공개SW 개발자대회 출품작, 동상 수상</p>
          <p>
            1인 가구의 음식물 쓰레기, 생활 쓰레기를 줄이기 위한 식품 및 생필품
            나누기 플랫폼 서비스입니다.
          </p>
          <p>
            동네 인증을 통한 동네별 나누기 기능, 채팅을 통한 거래 약속 생성
            기능, 거래 진행 후 사용자 간의 평가 기능 등 다양한 기능을
            제공합니다.
          </p>
        </div>
      ),
      techStack:
        "Java, Spring Boot, Spring Rest Docs, MySQL, Redis, AWS EC2/RDS/S3, ",
      image: dingdong,
      linkType: "github",
      linkUrl: "https://github.com/Team-Dingdong/dingdong-server",
    },
  ];

  return (
    <section
      id="my-project"
      ref={projectSectionRef}
      className="font-clash flex flex-col justify-center"
    >
      {/* <div className="w-screen absolute left-1/2 right-1/2 bottom-0 -mx-[50vw] h-px bg-gray-200"></div> */}
      {/* <div className="projects overflow-x-hidden"> */}
      <div ref={containerRef} className="absolute">
        <h2 className="absolute text-6xl font-medium z-50 -top-32">
          My Project
        </h2>
        <div className="project-container flex divide-x-1 divide-gray-200">
          {projects.map((project) => (
            <ProjectItem
              key={project.number}
              {...project}
              linkType={project.linkType as "github" | "website"}
            />
          ))}
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default MyProject;
