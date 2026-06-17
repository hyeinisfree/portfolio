"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const MyJourney: React.FC = () => {
  const careerSectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const timelineDotRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      !careerSectionRef.current ||
      !timelineRef.current ||
      !timelineDotRef.current ||
      !maskRef.current
    )
      return;

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: careerSectionRef.current,
        start: "top 55%",
        end: "bottom 90%",
        scrub: true,
      },
    });

    // 타임라인 높이 애니메이션
    timeline.to(timelineRef.current, {
      height: "100%",
      ease: "none",
    });

    // 타임라인 점 애니메이션
    timeline.to(
      timelineDotRef.current,
      {
        opacity: 1,
        ease: "power4.out",
      },
      0,
    );

    timeline.to(
      timelineDotRef.current,
      {
        top: "100%",
        ease: "none",
        transformOrigin: "center",
      },
      0,
    );

    // 마스크 높이 애니메이션
    timeline.to(
      maskRef.current,
      {
        height: "0%",
        ease: "none",
      },
      0,
    );

    return () => {
      timeline.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={careerSectionRef}
      id="my-career-experience"
      className="flex flex-col justify-center font-clash min-h-[calc(100vh-var(--header-height))]"
    >
      <h2 className="text-4xl xl:text-5xl 2xl:text-6xl font-medium mb-8 md:mb-12 xl:mb-18 2xl:mb-24">
        My Journey
      </h2>
      <div ref={containerRef} className="career-contanier relative">
        <div className="timeline hidden md:block">
          <div
            ref={timelineRef}
            className="career-timeline absolute inset-x-0 mx-auto w-1 bg-gradient-to-b from-white to-[#A0F4B0] z-20"
            style={{
              height: "0%",
              position: "absolute",
              top: 0,
            }}
          ></div>
          <div
            ref={timelineDotRef}
            className="career-timeline absolute inset-x-0 mx-auto w-3 h-3 bg-gradient-to-b bg-[#A7F3AE] rounded-full z-20"
            style={{
              opacity: 0,
            }}
          ></div>
          <div
            ref={maskRef}
            className="career-mask absolute inset-x-0 mx-auto z-10"
            style={{
              height: "130%",
              width: "100%",
              position: "absolute",
              bottom: 0,
            }}
          ></div>
        </div>

        <div className="career-item grid grid-cols-[2fr_1fr] md:grid-cols-[2fr_1fr_0.8fr_3fr] grid-rows-[auto_auto] gap-y-1.5 md:gap-y-12 items-center">
          <div className="career-role">
            <div className="flex flex-col md:gap-1.5">
              <h4 className="text-xl xl:text-3xl font-medium">컴퓨터공학과</h4>
              <h5 className="text-md xl:text-xl">성신여자대학교</h5>
            </div>
          </div>
          <div className="career-year flex justify-end">
            <h3 className="text-lg xl:text-3xl font-[450] text-right">
              2018 - 2022
            </h3>
          </div>
          <div className="career-blank hidden md:block"></div>
          <div className="career-description pb-4 md:pb-0 col-span-2 md:col-start-4 md:col-span-1 text-sm xl:text-base font-pretendard">
            <p>
              성신여자대학교에서 컴퓨터공학을 전공하며 자료구조, 알고리즘,
              운영체제, 데이터베이스 등 다양한 기초 지식을 쌓았습니다. Java와
              Spring Boot를 활용한 웹 서비스 개발, Jenkins와 Docker를 이용한
              CI/CD 구축 등 다양한 프로젝트 경험을 통해 개발 역량과 협업 능력을
              키웠습니다.
            </p>
          </div>
          <div className="career-role">
            <div className="flex flex-col md:gap-1.5">
              <h4 className="text-xl xl:text-3xl font-medium">
                Backend Engineer
              </h4>
              <h5 className="text-md xl:text-xl">잡플래닛</h5>
            </div>
          </div>
          <div className="career-year flex justify-end">
            <h3 className="text-lg xl:text-3xl font-[450] text-right">
              2022 - 2024
            </h3>
          </div>
          <div className="career-blank hidden md:block"></div>
          <div className="career-description pb-4 md:pb-0 col-span-2 md:col-start-4 md:col-span-1 text-sm xl:text-base font-pretendard">
            <p>
              잡플래닛의 채용 서비스 개발팀에서 Ruby on Rails 기반의 백엔드
              엔지니어로 근무하며, CRM 메일 발송 성능 개선, 채용 공고 시스템
              리팩토링, 외부 ATS 연동, API 설계 및 성능 개선 등 다양한 업무를
              담당했습니다.
            </p>
          </div>
          <div className="career-role">
            <div className="flex flex-col md:gap-1.5">
              <h4 className="text-xl xl:text-3xl font-medium">
                Backend Engineer
              </h4>
              <h5 className="text-md xl:text-xl">뉴오프</h5>
            </div>
          </div>
          <div className="career-year flex justify-end">
            <h3 className="text-lg xl:text-3xl font-[450] text-right">
              2025 - NOW
            </h3>
          </div>
          <div className="career-blank hidden md:block"></div>
          <div className="career-description col-span-2 md:col-start-4 md:col-span-1 text-sm xl:text-base font-pretendard">
            <p>
              중고 의류 매입·판매 플랫폼 뉴오프에서 Kotlin·Spring 기반 백엔드를
              개발·운영하고 있습니다. 검색 엔진 도입, 신규 microservice 구축,
              검수 워크플로 개선 등 백엔드를 중심으로 인프라 영역까지 다루며,
              현장과 시스템을 잇는 문제 해결을 이어가고 있습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyJourney;
