"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./MyCareer.module.css";

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
        start: "top 30%",
        end: "bottom bottom",
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
        ease: "power2.out",
      },
      0
    );

    timeline.to(
      timelineDotRef.current,
      {
        top: "100%",
        ease: "none",
        transformOrigin: "center",
      },
      0
    );

    // 마스크 높이 애니메이션
    timeline.to(
      maskRef.current,
      {
        height: "0%",
        ease: "none",
      },
      0
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
      className="flex flex-col justify-center font-clash"
    >
      <h2 className="text-6xl font-medium mb-18">My Journey</h2>
      {/* <h2 className="text-6xl font-medium mb-18 font-yoonwoo">나의 여정</h2> */}
      <div ref={containerRef} className="career-contanier relative">
        <div
          ref={timelineRef}
          className="career-timeline absolute inset-x-0 mx-auto w-1 bg-gradient-to-b from-white to-violet-300 z-20"
          style={{
            height: "0%",
            position: "absolute",
            top: 0,
          }}
        ></div>
        <div
          ref={timelineDotRef}
          className="career-timeline absolute inset-x-0 mx-auto w-3 h-3 bg-gradient-to-b bg-violet-400 rounded-full z-20"
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
        >
          <div className={styles.careerMaskGradient}></div>
          <div className={styles.careerMaskBackground}></div>
        </div>
        <div className="career-item grid grid-cols-1 md:grid-cols-7 grid-rows-2 gap-x-8 gap-y-12 py-6 ">
          <div className="career-role col-span-2 flex flex-col gap-1.5 shrink-0">
            <h4 className="text-3xl font-medium">컴퓨터공학과</h4>
            <h5 className="text-xl">성신여자대학교</h5>
          </div>
          <div className="career-year">
            <h3 className="text-3xl font-[450]">2018 - 2022</h3>
          </div>
          <div className="career-description font-pretendard col-span-3 col-start-5 shrink-0">
            <p>
              성신여자대학교에서 컴퓨터공학을 전공하며 자료구조, 알고리즘,
              운영체제, 데이터베이스 등 다양한 기초 지식을 쌓았습니다. Java와
              Spring Boot를 활용한 웹 서비스 개발, Jenkins와 Docker를 이용한
              CI/CD 구축 등 다양한 프로젝트 경험을 통해 개발 역량과 협업 능력을
              키웠습니다.
            </p>
          </div>
          <div className="career-role col-span-2 flex flex-col gap-1.5 shrink-0">
            <h4 className="text-3xl font-medium">Backend Engineer</h4>
            <h5 className="text-xl">잡플래닛</h5>
          </div>
          <div className="career-year">
            <h3 className="text-3xl font-[450]">2022-2024</h3>
          </div>
          <div className="career-description font-pretendard col-span-3 col-start-5 shrink-0">
            <p>
              잡플래닛의 채용 서비스 개발팀에서 Ruby on Rails 기반의 백엔드
              엔지니어로 2년간 근무하며, SendGrid와 Braze를 활용한 CRM 기능
              개선, Vue.js를 활용한 내부 어드민 페이지 개발, API 설계 및 성능
              개선 등 다양한 업무를 담당했습니다. 비즈니스의 요구사항을 충족하는
              효율적이고 안정적인 기능 개발에 기여하였습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyJourney;
