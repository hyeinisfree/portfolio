'use client';
import { useRef, useState, useLayoutEffect } from 'react';
import Image from 'next/image';
import profile from '@/public/images/hyein.jpg';
import { motion } from 'framer-motion';

const AboutMe = () => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [imageHeight, setImageHeight] = useState<number | undefined>(undefined);
  const innerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!window.matchMedia('(min-width: 768px)').matches) return;
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
    if (!window.matchMedia('(min-width: 768px)').matches) return;
    if (imageHeight === undefined) return;

    const inner = innerRef.current;
    if (!inner) return;

    inner.style.height = `${imageHeight}px`;

    return () => {};
  }, [imageHeight]);

  return (
    <section
      id="about-me"
      className="flex justify-center items-center font-clash min-h-[calc(100vh-var(--header-height))]"
    >
      <motion.div
        className="about-me-container flex gap-4 md:gap-8 xl:gap-12 items-stretch"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{
          duration: 0.6,
        }}
      >
        <div className="image-container w-1/4 h-max shrink-0 hidden md:block">
          <Image
            ref={imgRef}
            src={profile}
            alt="profile"
            width={360}
            height={480}
            className="rounded-2xl w-full h-auto"
            priority
          />
        </div>
        <div
          ref={innerRef}
          className="text-container flex flex-col justify-end gap-3 xl:gap-6 overflow-hidden md:w-3/4"
          style={{ height: imageHeight ? `${imageHeight}px` : undefined }}
        >
          <h2 className="text-2xl md:text-3xl xl:text-5xl font-medium">
            About Me
          </h2>
          <div className="font-arita text-sm lg:text-base xl:text-lg">
            <div className="space-y-2 xl:space-y-4">
              <p>
                안녕하세요, 사람을 위한 기술을 고민하는 백엔드 엔지니어
                김혜인입니다.
                <br />
                좋아 보이는 기술보다{' '}
                <span className="font-semibold">필요한 기술</span>, 내가 하고
                싶은 개발보다{' '}
                <span className="font-semibold">사람에게 닿는 개발</span>을 더
                중요하게 생각합니다.
              </p>
              <p>
                백엔드 개발자로서 Ruby on Rails와 Spring Boot 기반의 웹 서비스를
                구축해왔으며,
                <br />
                다양한 협업 환경에서 기획자, 디자이너, QA와 함께{' '}
                <span className="font-semibold">
                  문제 해결 중심의 개발
                </span>{' '}
                문화를 경험해왔습니다.
              </p>
              <p>
                최근에는 DevOps와 클라우드 인프라 영역에 깊이 있는 관심을 가지고
                학습 중이며,
                <br />
                Linux, Network, AWS, Terraform을 중심으로{' '}
                <span className="font-semibold">서비스 운영 전반</span>에 대한
                이해를 넓혀가고 있습니다.
              </p>
              <p>
                <span className="font-semibold">함께 일하고 싶은 개발자</span>가
                되는 것을 목표로 합니다.
                <br />
                변화에 유연하고, 배움에 열려 있으며, 협업과 커뮤니케이션을
                소중히 여깁니다.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
