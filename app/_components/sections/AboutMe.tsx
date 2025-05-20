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

    const inner = innerRef.current;
    if (!inner) return;

    inner.style.height = `${imageHeight}px`;

    return () => {};
  }, [imageHeight]);

  return (
    <section
      id="about-me"
      className="flex justify-center items-center font-clash"
    >
      <motion.div
        className="about-me-container flex gap-12 items-stretch"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{
          duration: 0.6,
        }}
      >
        <div className="image-container w-1/4 h-max shrink-0">
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
          className="text-container flex flex-col justify-end gap-6 overflow-hidden w-3/4"
          style={{ height: imageHeight ? `${imageHeight}px` : undefined }}
        >
          <div className="inner-item flex flex-col justify-end shrink-0 sticky top-0 bg-white">
            <h2 className="text-3xl xl:text-4xl font-medium mb-4">About Me</h2>
            <div className="font-arita text-sm xl:text-lg">
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
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
