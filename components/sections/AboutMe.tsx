'use client';
import { useRef, useEffect, useState, useLayoutEffect } from 'react';
import Image from 'next/image';
import profile from '@/public/images/hyein.jpg';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [imageHeight, setImageHeight] = useState<number | null>(null);

  useLayoutEffect(() => {
    const updateImageHeight = () => {
      if (imgRef.current) {
        setImageHeight(imgRef.current.offsetHeight);
      }
    };
    window.addEventListener('resize', updateImageHeight);
    updateImageHeight();

    return () => window.removeEventListener('resize', updateImageHeight);
  }, []);

  const sectionRef = useRef<HTMLElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  // 1) ScrollTrigger 생성 & Pin
  useLayoutEffect(() => {
    if (imageHeight === null) return;

    const section = sectionRef.current;
    const inner = innerRef.current;
    if (!section || !inner) return;

    const headerHeight =
      document.querySelector('header')?.getBoundingClientRect().height || 0;

    // 내부 스크롤 길이 계산
    const scrollableDistance = inner.scrollHeight - inner.clientHeight;

    // Pin → Un‑pin 구간 설정
    const pinTrigger = ScrollTrigger.create({
      trigger: section,
      start: `top top+=${headerHeight}`, // 헤더 바로 아래에 걸리면
      end: () => `+=${inner.scrollHeight}`, // 내부 스크롤 길이만큼 스크롤되면
      pin: true,
      pinSpacing: true,
      invalidateOnRefresh: true,
      scrub: true,
      // markers: true, // true로 디버깅해보세요
      onUpdate: (self) => {
        const scrollAmount = self.progress * inner.scrollHeight;
        inner.scrollTop = scrollAmount;
      },
    });
    ScrollTrigger.refresh();

    return () => pinTrigger.kill();
  }, [imageHeight]);

  return (
    <section
      ref={sectionRef}
      id="about-me"
      className="flex justify-center items-center font-clash"
    >
      <motion.div
        className="flex gap-12 items-stretch"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <motion.div className="image-container w-1/4 shrink-0">
          <Image ref={imgRef} src={profile} alt="profile" width={360}></Image>
        </motion.div>
        <div
          ref={innerRef}
          className="inner-scroll-container flex flex-col gap-6 overflow-hidden w-3/4"
          style={{ height: imageHeight ? `${imageHeight}px` : undefined }}
        >
          <div
            className="inner-item flex flex-col justify-end shrink-0 sticky top-0"
            style={{ height: imageHeight ? `${imageHeight}px` : undefined }}
          >
            <h2 className="text-4xl font-medium mb-3">About Me</h2>
            <p className="font-arita text-xl">
              안녕하세요, 기초부터 탄탄하게 시스템의 본질을 꿰뚫는 개발자
              김혜인입니다.<br></br> Ruby on Rails와 Spring Boot로
              백엔드에서부터 출발해, 네트워크와 Linux, Docker와 AWS를 아우르는
              인프라 영역까지 폭넓게 확장해가고 있습니다. 프론트엔드 역시
              Next.js와 Tailwind CSS로 인터랙티브한 경험을 구축하며, 풀사이클
              개발자로 성장하기 위해 노력하고 있습니다.<br></br> 기술의 깊이를
              중요하게 생각하는 저는, 기초적인 컴퓨터 사이언스 지식을 꾸준히
              탐구하며 탄탄한 기반 위에 전문성을 쌓아가고 있습니다. 단순히
              코드를 작성하는 것이 아니라, 제품과 사람을 연결하는 따뜻한
              시스템과 인프라를 만드는 개발자를 꿈꿉니다. 항상 질문을 통해 더
              좋은 방법을 찾고, 협업 과정에서의 친절함과 책임감을 가장 중요하게
              생각합니다. 제가 작성한 한 줄의 코드가 사람들에게 닿아 더 나은
              일상을 만드는 것, 그것이 제가 개발자로서 추구하는 진정한
              목표입니다.
            </p>
          </div>
          <div
            className="inner-item flex flex-col justify-end shrink-0 bg-white z-10"
            style={{ height: imageHeight ? `${imageHeight}px` : undefined }}
          >
            <h2 className="text-4xl font-medium mb-3">What I Do</h2>
            <p className="font-arita text-xl">
              안녕하세요, 사람과 기술을 연결하는 따뜻한 개발자 김혜인입니다.
              Ruby on Rails와 Spring Boot를 기반으로 한 백엔드 개발에서
              출발하여, 네트워크, Linux, Docker, AWS와 같은 인프라 기술까지
              폭넓게 경험하고 있습니다. 프론트엔드 분야에서도 Next.js와 Tailwind
              CSS를 활용해 사용자와의 상호작용을 고민하며 풀사이클 개발 역량을
              키워가고 있습니다. 저는 기술의 깊이와 함께 기초부터 견고히
              다져나가는 학습을 중요하게 생각하며, 컴퓨터 사이언스의 본질을
              이해하고자 꾸준히 공부하고 있습니다. 단순히 동작하는 시스템을
              만드는 것을 넘어, 사람의 마음을 움직이는 제품과 인프라를 만드는
              개발자를 꿈꾸고 있습니다. 언제나 질문을 통해 더 좋은 방법을
              찾아가며, 협업 과정에서의 책임감과 친절함을 가장 소중히
              생각합니다. 제가 만드는 모든 시스템과 코드가 사람들에게 의미 있게
              다가갈 수 있도록 최선을 다하고 있습니다.
            </p>
          </div>
          {/* <div
            className="flex flex-col justify-end shrink-0"
            style={{ height: imageHeight ? `${imageHeight}px` : undefined }}
          ></div> */}
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
