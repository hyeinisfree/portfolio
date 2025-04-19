"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./MyCareer.module.css";

gsap.registerPlugin(ScrollTrigger);

const CareerExperience: React.FC = () => {
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
      <h2 className="text-6xl font-medium mb-18">My Career & Experience</h2>
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
        <div className="career-item grid grid-cols-1 md:grid-cols-7 grid-rows-2 gap-x-8 gap-y-12 py-6">
          <div className="career-role col-span-2 flex flex-col gap-1.5 shrink-0">
            <h4 className="text-3xl font-medium">컴퓨터공학과</h4>
            <h5 className="text-xl">성신여자대학교</h5>
          </div>
          <div className="career-year">
            <h3 className="text-3xl font-[450]">2018 - 2022</h3>
          </div>
          <div className="career-description font-pretendard col-span-3 col-start-5 shrink-0">
            <p>
              법률은 특별한 규정이 없는 한 공포한 날로부터 20일을 경과함으로써
              효력을 발생한다. 선거운동은 각급 선거관리위원회의 관리하에 법률이
              정하는 범위안에서 하되, 균등한 기회가 보장되어야 한다. 대법원장은
              국회의 동의를 얻어 대통령이 임명한다. 계엄을 선포한 때에는
              대통령은 지체없이 국회에 통고하여야 한다.
            </p>
          </div>
          <div className="career-role col-span-2 flex flex-col gap-1.5 shrink-0">
            <h4 className="text-3xl font-medium">Backend Engineer</h4>
            <h5 className="text-xl">잡플래닛</h5>
          </div>
          <div className="career-year">
            <h3 className="text-3xl font-[450]">2022</h3>
          </div>
          <div className="career-description font-pretendard col-span-3 col-start-5 shrink-0">
            <p>
              법률은 특별한 규정이 없는 한 공포한 날로부터 20일을 경과함으로써
              효력을 발생한다. 선거운동은 각급 선거관리위원회의 관리하에 법률이
              정하는 범위안에서 하되, 균등한 기회가 보장되어야 한다. 대법원장은
              국회의 동의를 얻어 대통령이 임명한다. 계엄을 선포한 때에는
              대통령은 지체없이 국회에 통고하여야 한다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerExperience;
