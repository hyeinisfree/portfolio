"use client";
import { useRef, useState, useLayoutEffect, ReactNode } from "react";
import Image from "next/image";
import profile from "@/public/images/hyein.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

interface InnerItemProps {
  title: string;
  content: ReactNode;
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
      className="text-4xl font-medium mb-4"
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
    <motion.div
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
    </motion.div>
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

    // const scrollableDistance = inner.scrollHeight - inner.clientHeight;
    inner.style.height = `${imageHeight}px`;
    section.style.marginBottom = `${inner.scrollHeight}px`;

    const pinTrigger = ScrollTrigger.create({
      trigger: section,
      start: "top top+=72px",
      end: () => `+=${inner.scrollHeight}`,
      pin: true,
      invalidateOnRefresh: true,
      scrub: 0.5,
      onUpdate: (self) => {
        const scrollAmount = self.progress * inner.scrollHeight;
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
            content={
              <div className="space-y-4">
                <p>
                  안녕하세요, 기본을 탄탄하게 다지며 성장하는 백엔드 개발자
                  김혜인입니다.
                </p>
                <p>
                  지난 2년간 Ruby on Rails 기반의 서비스 회사에서 백엔드 개발을
                  담당하며, 안정적이고 확장 가능한 서비스 구축을 위해
                  노력해왔습니다. 단순히 기능을 구현하는 것을 넘어 제품에 대한
                  이해를 바탕으로 더 나은 방향을 제시하는 개발자가 되고자
                  합니다.
                </p>
                <p>
                  백엔드 개발자로서 더 좋은 서비스를 만들기 위해 네트워크,
                  리눅스와 같은 시스템 및 인프라 기술을 꾸준히 학습하고 있으며,
                  프론트엔드 영역에도 관심을 가져 React와 Next.js 기반의
                  프로젝트를 진행하고 있습니다. 이러한 기술적 확장을 통해 서비스
                  전체 구조를 이해하고 팀과 더 원활하게 소통하는 개발자가 되고자
                  합니다.
                </p>
                <p>
                  항상 질문을 통해 더 좋은 방법을 찾고, 협업 과정에서의 친절함과
                  책임감을 가장 중요하게 생각합니다. 단순히 코드를 작성하는 것이
                  아니라, 제품과 사람을 연결하는 따뜻한 서비스를 만드는 개발자를
                  꿈꿉니다.
                </p>
              </div>
            }
            height={imageHeight}
            isActive={activeItem === 0}
          />
          <InnerItem
            title="What I Do"
            content={
              <div className="space-y-4">
                <p>
                  저는 Java / Spring Boot와 Ruby on Rails 기반의 웹
                  애플리케이션을 개발하고 있습니다. 실무에서 RESTful API 설계 및
                  구현, MySQL을 통한 데이터베이스 관리, Redis를 활용한 성능
                  최적화, ElasticSearch를 활용한 검색 기능 구축 등의 다양한
                  경험을 쌓았습니다. 또한 SendGrid와 Braze를 활용한 CRM 개선을
                  진행하여 사용자와의 효과적인 커뮤니케이션을 지원한 경험이
                  있습니다.
                </p>
                <p>
                  비즈니스의 요구사항을 신속하고 정확하게 반영하기 위해 CI/CD
                  환경을 구축하고 자동화하는 경험도 다수 보유하고 있습니다.
                  Jenkins와 Docker를 이용한 빌드 및 배포 환경 구축, Github
                  Actions와 AWS 인프라를 연계한 효율적인 배포 파이프라인을
                  구축했습니다.
                </p>
                <p>
                  적극적인 소통을 중요하게 생각하며, 개발팀뿐 아니라 기획,
                  디자인 등 다양한 직군과 협업하는 데 익숙합니다. 특히, 서비스의
                  본질과 비즈니스 요구를 정확히 이해하고 기술적으로 최선의
                  해결책을 제시하는 능력을 키우고자 늘 노력하고 있습니다.
                </p>
              </div>
            }
            height={imageHeight}
            isActive={activeItem === 1}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
