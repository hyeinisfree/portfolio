'use client';
import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const CareerExperience = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  // 스크롤 애니메이션을 위한 설정
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 30%', 'end end'],
  });

  // 타임라인 길이를 스크롤 진행도에 따라 변환
  const timelineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const maskHeight = useTransform(scrollYProgress, [0, 1], ['140%', '0%']);
  const scrollOpacity = useTransform(scrollYProgress, [0, 0.2, 1], [0, 0.7, 1]);

  return (
    <section
      ref={sectionRef}
      id="my-career-experience"
      className="flex flex-col justify-center font-clash"
    >
      <h2 className="text-6xl font-medium mb-18">My Career & Experience</h2>
      <div ref={containerRef} className="career-contanier relative">
        <motion.div
          className="career-timeline absolute inset-x-0 mx-auto w-1 bg-gradient-to-b from-white to-purple-300 z-20"
          style={{
            height: timelineHeight,
            position: 'absolute',
            top: 0,
          }}
        ></motion.div>
        <motion.div
          className="career-timeline absolute inset-x-0 mx-auto w-3 h-3 bg-gradient-to-b bg-purple-400 rounded-full z-20"
          style={{
            top: timelineHeight,
            opacity: scrollOpacity,
          }}
        ></motion.div>
        <motion.div
          className="career-mask absolute inset-x-0 mx-auto z-10 "
          style={{
            height: maskHeight,
            width: '100%',
            position: 'absolute',
            bottom: 0,
          }}
        >
          <div
            className="absolute inset-x-0 top-0 h-32 w-full"
            style={{
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              background:
                'linear-gradient(to bottom, rgba(255, 255, 255, 0.7), white)',
              maskImage: 'linear-gradient(to bottom, transparent, white 80%)',
              WebkitMaskImage:
                'linear-gradient(to bottom, transparent, white 80%)',
            }}
          ></div>
          <div className="absolute inset-x-0 top-32 bottom-0 w-full bg-white"></div>
        </motion.div>
        <div className="career-item grid grid-cols-7 grid-rows-2 gap-x-8 gap-y-12 py-6">
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
