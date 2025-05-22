"use client";
import { useRef, useLayoutEffect } from "react";
import Image, { StaticImageData } from "next/image";
import matdongsan from "@/public/images/matdongsan.webp";
import hyeinkim from "@/public/images/hyeinkim.webp";
import sswu from "@/public/images/sswu.jpg";
import storeasy from "@/public/images/storeasy.jpg";
import dingdong from "@/public/images/dingdong.jpg";
import gsap from "gsap";
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
  links: { type: string; url: string }[];
  isFirst?: boolean;
  isLast?: boolean;
}

const ProjectItem = ({
  number,
  title,
  roles,
  description,
  techStack,
  image,
  links,
}: ProjectItemProps) => (
  <div
    className={`project-item min-w-full md:min-w-[340px] lg:min-w-[380px] xl:min-w-[420px] flex flex-col justify-between gap-4 pb-6 group`}
  >
    <div className="project-info flex flex-col gap-6 2xl:gap-10">
      <div className="project-title flex justify-between">
        <h3 className="text-xl md:text-2xl 2xl:text-3xl">{number}</h3>
        <div className="flex flex-row md:flex-col items-end">
          <div className="flex flex-col items-end">
            <h4 className="text-lg md:text-xl 2xl:text-2xl">{title}</h4>
            {roles.map((role, index) => (
              <p key={index} className="text-xs md:text-sm 2xl:text-base">
                {role}
              </p>
            ))}
          </div>
          <div className="project-image relative rounded-sm overflow-hidden md:hidden ml-3">
            <Image src={image} alt={title} width={120} height={80} />
          </div>
        </div>
      </div>
      <div className="project-description text-xs md:text-sm 2xl:text-base flex flex-col gap-4 lg:gap-6">
        {description}
        <div className="project-techstack">
          <h4 className="text-xs md:text-sm 2xl:text-[1.1rem]">Tech Stack</h4>
          <p className="text-xs md:text-sm 2xl:text-base">{techStack}</p>
        </div>
      </div>
    </div>
    <div className="project-image relative rounded-sm overflow-hidden hidden md:block">
      <Image src={image} alt={title} />
      <div className="absolute bottom-2 right-4 flex flex-col gap-2">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 translate-y-0 transition-all duration-300 flex items-center gap-1 shadow-md"
          >
            <span>{link.type === "github" ? "GitHub" : "Website"}</span>
            <MdArrowOutward />
          </a>
        ))}
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

  const projects = [
    {
      number: "01",
      title: "맛동산",
      roles: ["Web, iOS", "Backend Developer"],
      description: (
        <div className="space-y-1">
          <p>
            제철 음식을 공유하고 기록할 수 있는 아카이빙/커뮤니티 서비스입니다.
          </p>
          <p>
            Spring Boot 기반의 REST API 서버와, Terraform/Flyway를 통해 인프라와
            마이그레이션을 코드로 관리하는 인프라를 분리하여 설계했습니다.
          </p>
          <p>
            EC2, RDS, S3 등 AWS 환경 위에 직접 인프라를 구성하고, Terraform으로
            코드화했으며, Flyway 기반의 DB 마이그레이션 자동화 환경을
            구축했습니다. GitHub Actions 기반의 CI/CD 파이프라인을
            구성하였습니다.
          </p>
        </div>
      ),
      techStack:
        "Java, Spring Boot, MySQL, Flyway, Docker, GitHub Actions, Terraform, AWS EC2/RDS/S3/ECR",
      image: matdongsan,
      links: [
        {
          type: "github",
          url: "https://github.com/kira-matdongsan/Matdongsan-BE",
        },
      ],
    },
    {
      number: "02",
      title: "Hyein Kim",
      roles: ["Web", "Fullstack Developer"],
      description: (
        <div className="space-y-1">
          <p>
            부드러운 인터랙션을 중심으로 설계한 개인 포트폴리오 사이트입니다.
          </p>
          <p>
            Next.js App Router 기반의 구조로 구성하고, Framer Motion과 GSAP의
            ScrollTrigger 기능을 활용해 섹션별 인터랙션과 애니메이션 효과를
            구현했습니다. Lenis 기반의 스무스 스크롤, 섹션 고정 및 수평 이동
            등의 효과를 통해 사용자에게 자연스러운 흐름과 몰입감 있는 경험을
            제공하는 데 집중했습니다.
          </p>
        </div>
      ),
      techStack:
        "TypeScript, Next.js 15, Tailwind CSS 4, Framer Motion, GSAP, Vercel",
      image: hyeinkim,
      links: [
        { type: "github", url: "https://github.com/hyeinisfree/portfolio" },
        { type: "website", url: "https://hyeinisfree.me" },
      ],
    },
    {
      number: "03",
      title: "수정광산",
      roles: ["Web, iOS, Android", "Backend Team Leader / Developer"],
      description: (
        <div className="space-y-1">
          <p>성신여자대학교 학생들을 위한 커뮤니티 서비스입니다.</p>
          <p>
            정회원 인증 시스템을 기반으로, 게시판/게시글/댓글, 좋아요 및 스크랩
            기능, 포인트 기반의 티어 시스템 등 커뮤니티에 필요한 핵심 기능들을
            설계하고 구현했습니다.
          </p>
          <p>
            AWS 기반의 배포 환경과 CI/CD 자동화(Jenkins + Docker)도 직접
            구축했습니다.
          </p>
        </div>
      ),
      techStack: "Java, Spring Boot, MySQL, Docker, Jenkins, AWS EC2/RDS/S3",
      image: sswu,
      links: [{ type: "website", url: "https://litt.ly/crystalmine" }],
    },
    {
      number: "04",
      title: "스토리지",
      roles: ["iOS", "Backend Developer"],
      description: (
        <div className="space-y-1">
          <p className="pb-2">
            🏆 2021 원티드 &apos;해, 커리어&apos; 해커톤 출품작, 예선 진출 (상위
            50개팀)
          </p>
          <p>대학생을 위한 경험 정리 아카이빙 서비스입니다.</p>
          <p>
            경험을 ‘프로젝트 {">"} 페이지’ 구조로 분류하여 정리할 수 있으며,
            다른 사람의 경험을 탐색하고 좋아요로 반응할 수 있는 소셜 성격의
            아카이빙 서비스입니다
          </p>
          <p>
            NestJS 기반의 API 서버를 구축하고, GitHub Actions와 AWS CodeDeploy를
            연동하여 배포 자동화 환경을 구성했습니다.
          </p>
        </div>
      ),
      techStack:
        "Typescript, NestJS, MySQL, Swagger, Docker, Github Actions, AWS EC2/RDS/S3/CodeDeploy",
      image: storeasy,
      links: [
        { type: "github", url: "https://github.com/Storeasy/Storeasy-server" },
      ],
    },
    {
      number: "05",
      title: "띵-동",
      roles: ["Android", "Team Leader / Backend Developer"],
      description: (
        <div className="space-y-1">
          <p className="pb-2">🏆 2021 공개SW 개발자대회 출품작, 동상 수상</p>
          <p>1인 가구를 위한 지역 기반 식품 및 생필품 나눔 플랫폼입니다.</p>
          <p>
            동네 인증, 실시간 채팅을 통한 거래 약속, 나눔 후 평가 시스템 등 신뢰
            기반의 거래 흐름을 고려한 기능들을 기획하고 직접 구현했습니다.
          </p>
          <p>
            Spring Rest Docs를 활용해 API 문서를 작성하고, AWS EC2를 활용한 서버
            운영을 담당했습니다.
          </p>
        </div>
      ),
      techStack:
        "Java, Spring Boot, Spring Rest Docs, MySQL, Redis, AWS EC2/RDS/S3, ",
      image: dingdong,
      links: [
        {
          type: "github",
          url: "https://github.com/Team-Dingdong/dingdong-server",
        },
      ],
    },
  ];

  return (
    <section
      id="my-project"
      ref={projectSectionRef}
      className="font-clash flex flex-col justify-center"
    >
      <div
        ref={containerRef}
        className="flex flex-col justify-center 2xl:justify-between mt-8 mb-12"
      >
        <h2 className="text-4xl xl:text-5xl 2xl:text-6xl font-medium mb-8 md:mb-12 xl:mb-16 2xl:mb-20">
          My Project
        </h2>
        <div className="project-container flex flex-col md:flex-row gap-y-6 md:gap-y-0 md:gap-x-16 divide-y-1 divide-solid divide-gray-200 md:divide-y-0">
          {projects.map((project) => (
            <ProjectItem
              key={project.number}
              {...project}
              links={project.links}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyProject;
