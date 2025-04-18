"use client";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import sswu from "@/public/images/sswu.jpg";
import storeasy from "@/public/images/storeasy.jpg";
import dingdong from "@/public/images/dingdong.jpg";

const MyProject = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [leftOffset, setLeftOffset] = useState(0);

  useEffect(() => {
    // 섹션의 왼쪽 여백을 계산
    const calculateOffset = () => {
      if (sectionRef.current) {
        const sectionRect = sectionRef.current.getBoundingClientRect();
        setLeftOffset(sectionRect.left);
      }
    };

    calculateOffset();
    window.addEventListener("resize", calculateOffset);

    return () => {
      window.removeEventListener("resize", calculateOffset);
    };
  }, []);

  return (
    <section
      id="my-project"
      ref={sectionRef}
      className="font-clash bg-sky-100 flex items-center"
    >
      {/* Top full-width divider line */}
      {/* <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] h-px bg-[#e9e9e9]"></div> */}

      <div className="absolute left-0 w-screen bg-amber-200 overflow-hidden">
        <h2
          className="relative text-6xl font-medium mb-16 z-50"
          style={{ left: `${leftOffset}px` }}
        >
          My Project
        </h2>
        <div className="projects overflow-x-auto">
          <div
            className="project-container flex divide-x-1 divide-[#e9e9e9]"
            style={{ transform: `translateX(${leftOffset}px)` }}
          >
            <div className="project-item px-8 md:px-12 lg:px-16 py-20 w-[380px] md:max-w-[440px] lg:min-w-[480px] xl:min-w-[500px] 2xl:min-w-[540px] flex flex-col justify-between gap-20">
              <div className="project-info flex flex-col gap-8 lg:gap-10">
                <div className="project-title flex justify-between">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl">01</h3>
                  <div className="flex flex-col items-end">
                    <h4 className="text-xl md:text-xl lg:text-[1.6rem]">
                      맛동산
                    </h4>
                    <div className="text-sm md:text-md lg:text-[1rem] flex flex-col items-end">
                      <p>Backend Developer</p>
                    </div>
                  </div>
                </div>
                <div className="project-description text-sm md:text-sm lg:text-[1rem] flex flex-col gap-4 lg:gap-6">
                  <p>
                    성신여자대학교 학생들을 위한 커뮤니티 서비스입니다. 위
                    서비스에서 제공하는 주요 기능은 아래와 같습니다.
                  </p>
                  <div className="project-techstack">
                    <h4 className="sm:text-sm md:text-md lg:text-[1.1rem]">
                      Tech Stack
                    </h4>
                    <p className="sm:text-sm md:text-sm lg:text-[1rem]">
                      Java, SpringBoot, MySQL
                    </p>
                  </div>
                </div>
              </div>
              <div className="project-image ">
                <Image src={sswu} alt="sswu" />
              </div>
            </div>
            <div className="project-item px-8 md:px-12 lg:px-16 py-20 w-[380px] md:max-w-[440px] lg:min-w-[480px] xl:min-w-[500px] 2xl:min-w-[540px] flex flex-col justify-between gap-20">
              <div className="project-info flex flex-col gap-8 lg:gap-10">
                <div className="project-title flex justify-between">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl">02</h3>
                  <div className="flex flex-col items-end">
                    <h4 className="text-xl md:text-xl lg:text-[1.6rem]">
                      수정광산
                    </h4>
                    <div className="text-sm md:text-md lg:text-[1rem] flex flex-col items-end">
                      <p>Backend Team Leader</p>
                      <p>Backend Developer</p>
                    </div>
                  </div>
                </div>
                <div className="project-description text-sm md:text-sm lg:text-[1rem] flex flex-col gap-4 lg:gap-6">
                  <p>
                    성신여자대학교 학생들을 위한 커뮤니티 서비스입니다. 위
                    서비스에서 제공하는 주요 기능은 아래와 같습니다.
                  </p>
                  <div className="project-techstack">
                    <h4 className="sm:text-sm md:text-md lg:text-[1.1rem]">
                      Tech Stack
                    </h4>
                    <p className="sm:text-sm md:text-sm lg:text-[1rem]">
                      Java, SpringBoot, MySQL
                    </p>
                  </div>
                </div>
              </div>
              <div className="project-image ">
                <Image src={sswu} alt="sswu" />
              </div>
            </div>
            <div className="project-item px-8 md:px-12 lg:px-16 py-20 w-[380px] md:max-w-[440px] lg:min-w-[480px] xl:min-w-[540px] flex flex-col justify-between gap-20">
              <div className="project-info flex flex-col gap-8 lg:gap-10">
                <div className="project-title flex justify-between">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl">03</h3>
                  <div className="flex flex-col items-end">
                    <h4 className="text-xl md:text-xl lg:text-[1.6rem]">
                      스토리지
                    </h4>
                    <div className="text-sm md:text-md lg:text-[1rem] flex flex-col items-end">
                      <p>Backend Developer</p>
                    </div>
                  </div>
                </div>
                <div className="project-description text-sm md:text-sm lg:text-[1rem] flex flex-col gap-4 lg:gap-6">
                  <p>
                    2021 원티드 ‘해, 커리어' 해커톤 출품작, 예선 진출 (상위
                    50개팀) <br></br>대학생을 위한 경험 정리 아카이빙
                    서비스입니다.
                  </p>
                  <div className="project-techstack">
                    <h4 className="sm:text-sm md:text-md lg:text-[1.1rem]">
                      Tech Stack
                    </h4>
                    <p className="sm:text-sm md:text-sm lg:text-[1rem]">
                      Java, SpringBoot, MySQL
                    </p>
                  </div>
                </div>
              </div>
              <div className="project-image ">
                <Image src={storeasy} alt="storeasy" />
              </div>
            </div>
            <div className="project-item px-8 md:px-12 lg:px-16 py-20 w-[380px] md:max-w-[440px] lg:min-w-[480px] xl:min-w-[540px] flex flex-col justify-between gap-20">
              <div className="project-info flex flex-col gap-8 lg:gap-10">
                <div className="project-title flex justify-between">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl">04</h3>
                  <div className="flex flex-col items-end">
                    <h4 className="text-xl md:text-xl lg:text-[1.6rem]">
                      띵-동
                    </h4>
                    <div className="text-sm md:text-md lg:text-[1rem] flex flex-col items-end">
                      <p>Team Leader</p>
                      <p>Backend Developer</p>
                    </div>
                  </div>
                </div>
                <div className="project-description text-sm md:text-sm lg:text-[1rem] flex flex-col gap-4 lg:gap-6">
                  <p>
                    2021 공개SW 개발자대회 출품작, 동상 수상<br></br>
                    1인 가구의 음식물 쓰레기, 생활 쓰레기를 줄이기 위한 식품 및
                    생필품 나누기 플랫폼 서비스입니다.
                  </p>
                  <div className="project-techstack">
                    <h4 className="sm:text-sm md:text-md lg:text-[1.1rem]">
                      Tech Stack
                    </h4>
                    <p className="sm:text-sm md:text-sm lg:text-[1rem]">
                      Java, SpringBoot, MySQL
                    </p>
                  </div>
                </div>
              </div>
              <div className="project-image ">
                <Image src={dingdong} alt="dingdong" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] h-px bg-[#e9e9e9]"></div> */}
    </section>
  );
};

export default MyProject;
