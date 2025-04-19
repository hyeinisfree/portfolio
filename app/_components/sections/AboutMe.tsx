"use client";
import { useRef, useState, useLayoutEffect } from "react";
import Image from "next/image";
import profile from "@/public/images/hyein.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

interface InnerItemProps {
  title: string;
  content: string;
  height?: number;
  isActive: boolean;
}

const InnerItem = ({ title, content, height, isActive }: InnerItemProps) => (
  <motion.div
    className="inner-item flex flex-col justify-end shrink-0 sticky top-0 bg-white"
    style={{ height: title === "About Me" ? `${height}px` : undefined }}
    initial={{ opacity: 0, y: 20 }}
    animate={{
      opacity: isActive ? 1 : 0,
      y: isActive ? 0 : 20,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        opacity: {
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        },
        y: {
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        },
      },
    }}
  >
    <motion.h2
      className="text-4xl font-medium mb-3"
      initial={{ opacity: 0, y: 10 }}
      animate={{
        opacity: isActive ? 1 : 0,
        y: isActive ? 0 : 10,
        transition: {
          delay: isActive ? 0.2 : 0,
          duration: 0.4,
          ease: [0.22, 1, 0.36, 1],
        },
      }}
    >
      {title}
    </motion.h2>
    <motion.p
      className="font-arita text-xl"
      initial={{ opacity: 0, y: 10 }}
      animate={{
        opacity: isActive ? 1 : 0,
        y: isActive ? 0 : 10,
        transition: {
          delay: isActive ? 0.3 : 0,
          duration: 0.4,
          ease: [0.22, 1, 0.36, 1],
        },
      }}
    >
      {content}
    </motion.p>
  </motion.div>
);

const AboutMe = () => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [imageHeight, setImageHeight] = useState<number | undefined>(undefined);
  const aboutSectionRef = useRef<HTMLElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [activeItem, setActiveItem] = useState(0);

  useLayoutEffect(() => {
    if (!imgRef.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setImageHeight(entry.contentRect.height);
      }
    });

    resizeObserver.observe(imgRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  useLayoutEffect(() => {
    if (imageHeight === undefined) return;

    const section = aboutSectionRef.current;
    const inner = innerRef.current;
    if (!section || !inner) return;

    const scrollableDistance = inner.scrollHeight - inner.clientHeight;
    inner.style.height = `${imageHeight}px`;
    section.style.marginBottom = `${scrollableDistance}px`;

    const pinTrigger = ScrollTrigger.create({
      trigger: section,
      start: "top top+=72px",
      end: () => `+=${scrollableDistance}`,
      pin: true,
      invalidateOnRefresh: true,
      scrub: 0.5,
      onUpdate: (self) => {
        const scrollAmount = self.progress * scrollableDistance;
        inner.scrollTop = scrollAmount;

        if (self.progress > 0.5) {
          setActiveItem(1);
        } else {
          setActiveItem(0);
        }
      },
    });

    return () => {
      pinTrigger.kill();
      section.style.marginBottom = "";
    };
  }, [imageHeight]);

  return (
    <section
      ref={aboutSectionRef}
      id="about-me"
      className="flex justify-center items-center font-clash"
    >
      <motion.div
        className="about-me-container flex gap-12 items-stretch"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
          staggerChildren: 0.1,
        }}
      >
        <motion.div
          className="image-container w-1/4 h-max shrink-0"
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Image
            ref={imgRef}
            src={profile}
            alt="profile"
            width={360}
            height={480}
            className="rounded-2xl w-full h-auto"
            priority
          />
        </motion.div>
        <motion.div
          ref={innerRef}
          className="inner-scroll-container flex flex-col gap-6 overflow-hidden w-3/4"
          style={{ height: imageHeight ? `${imageHeight}px` : undefined }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <InnerItem
            title="About Me"
            content="안녕하세요, 기초부터 탄탄하게 시스템의 본질을 꿰뚫는 개발자 김혜인입니다. Ruby on Rails와 Spring Boot로 백엔드에서부터 출발해, 네트워크와 Linux, Docker와 AWS를 아우르는 인프라 영역까지 폭넓게 확장해가고 있습니다. 프론트엔드 역시 Next.js와 Tailwind CSS로 인터랙티브한 경험을 구축하며, 풀사이클 개발자로 성장하기 위해 노력하고 있습니다. 기술의 깊이를 중요하게 생각하는 저는, 기초적인 컴퓨터 사이언스 지식을 꾸준히 탐구하며 탄탄한 기반 위에 전문성을 쌓아가고 있습니다. 단순히 코드를 작성하는 것이 아니라, 제품과 사람을 연결하는 따뜻한 시스템과 인프라를 만드는 개발자를 꿈꿉니다. 항상 질문을 통해 더 좋은 방법을 찾고, 협업 과정에서의 친절함과 책임감을 가장 중요하게 생각합니다. 제가 작성한 한 줄의 코드가 사람들에게 닿아 더 나은 일상을 만드는 것, 그것이 제가 개발자로서 추구하는 진정한 목표입니다."
            height={imageHeight}
            isActive={activeItem === 0}
          />
          <InnerItem
            title="What I Do"
            content="안녕하세요, 사람과 기술을 연결하는 따뜻한 개발자 김혜인입니다. Ruby on Rails와 Spring Boot를 기반으로 한 백엔드 개발에서 출발하여, 네트워크, Linux, Docker, AWS와 같은 인프라 기술까지 폭넓게 경험하고 있습니다. 프론트엔드 분야에서도 Next.js와 Tailwind CSS를 활용해 사용자와의 상호작용을 고민하며 풀사이클 개발 역량을 키워가고 있습니다. 저는 기술의 깊이와 함께 기초부터 견고히 다져나가는 학습을 중요하게 생각하며, 컴퓨터 사이언스의 본질을 이해하고자 꾸준히 공부하고 있습니다. 단순히 동작하는 시스템을 만드는 것을 넘어, 사람의 마음을 움직이는 제품과 인프라를 만드는 개발자를 꿈꾸고 있습니다. 언제나 질문을 통해 더 좋은 방법을 찾아가며, 협업 과정에서의 책임감과 친절함을 가장 소중히 생각합니다. 제가 만드는 모든 시스템과 코드가 사람들에게 의미 있게 다가갈 수 있도록 최선을 다하고 있습니다."
            height={imageHeight}
            isActive={activeItem === 1}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
