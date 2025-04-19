"use client";

import styles from "./styles.module.css";
import {
  motion,
  useScroll,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";
import { useState, useEffect, useCallback, useMemo, memo } from "react";
import useMouse from "@/hooks/useMouse";
import eea from "@/public/images/eea.webp";
import sunshine from "@/public/images/eternal_sunshine.webp";
import terminal from "@/public/images/terminal.webp";
import intern from "@/public/images/inetern.webp";
import yoonjiyoung from "@/public/images/yoonjiyoung.webp";
import yuree from "@/public/images/yuree.webp";
import love from "@/public/images/love.webp";
import parkjiyoon from "@/public/images/parkjiyoon.webp";
import sole from "@/public/images/sole.webp";
import sweetnothing from "@/public/images/sweetnothing.webp";
import whatever from "@/public/images/whatever.webp";
import flag from "@/public/images/flag.webp";
import park from "@/public/images/park.webp";
import singstreet from "@/public/images/singstreet.webp";
import frr from "@/public/images/frr.webp";
import GridItem from "./GridItem";
import CustomCursor from "./CustomCursor";
import LoadingIndicator from "./LoadingIndicator";
import type { ContentItem } from "./GridItem";

// 이미지 로딩 관리를 위한 커스텀 훅
const useImageLoader = (totalImages: number) => {
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleImageLoad = useCallback(() => {
    setImagesLoaded((prev) => {
      const newCount = prev + 1;
      return newCount;
    });
  }, []);

  // 모든 이미지 로드 완료 시 처리
  useEffect(() => {
    if (imagesLoaded === totalImages && totalImages > 0) {
      setTimeout(() => {
        setLoading(false);
        setTimeout(() => {
          setShowContent(true);
        }, 100);
      }, 300);
    }
  }, [imagesLoaded, totalImages]);

  return { loading, imagesLoaded, showContent, handleImageLoad };
};

// 메모이제이션된 그리드 아이템
const MemoizedGridItem = memo(GridItem);

// 메모이제이션된 커스텀 커서
const MemoizedCursor = memo(CustomCursor);

// 메모이제이션된 로딩 인디케이터
const MemoizedLoadingIndicator = memo(LoadingIndicator);

const LandingPage = () => {
  const [cursorText, setCursorText] = useState("내가 사랑하는");
  const [centerX, setCenterX] = useState(0);
  const [centerY, setCenterY] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  // Reduced motion preference using framer-motion hook
  const prefersReducedMotion = useReducedMotion();

  // 미리 정의된 컨텐츠 목록 - useMemo로 감싸기
  const contentItems = useMemo<ContentItem[]>(
    () => [
      {
        index: 39,
        title: "Everything Everywhere All At Once",
        director: "Daniel Kwan, Daniel Scheinert",
        date: "2022.10.12",
        category: "영화",
        image: eea,
      },
      {
        index: 13,
        title: "Eternal Sunshine",
        director: "Michel Gondry",
        date: "2004.03.19",
        category: "영화",
        image: sunshine,
      },
      {
        index: 21,
        title: "The Terminal",
        director: "Steven Spielberg",
        date: "2004.06.18",
        category: "영화",
        image: terminal,
      },
      {
        index: 18,
        title: "The Intern",
        director: "Nancy Meyers",
        date: "2015.09.25",
        category: "영화",
        image: intern,
      },
      {
        index: 1,
        title: "언젠가 너와 나",
        artist: "윤지영",
        date: "2025.04.15",
        category: "음악",
        image: yoonjiyoung,
      },
      {
        index: 51,
        title: "사랑",
        artist: "최유리",
        date: "2025.04.15",
        category: "음악",
        image: yuree,
      },
      {
        index: 55,
        title: "love.",
        artist: "wate to earth",
        date: "2025.04.15",
        category: "음악",
        image: love,
      },
      {
        index: 6,
        title: "Afternoon",
        artist: "박지윤",
        date: "2025.04.15",
        category: "음악",
        image: parkjiyoon,
      },
      {
        index: 69,
        title: "널 만나려고",
        artist: "권진아",
        date: "2025.04.15",
        category: "음악",
        image: flag,
      },
      {
        index: 77,
        title: "곁에 있어줘",
        artist: "SOLE",
        date: "2025.04.15",
        category: "음악",
        image: sole,
      },
      {
        index: 30,
        title: "Sweet Nothing",
        artist: "Taylor Swift",
        date: "2025.04.15",
        category: "음악",
        image: sweetnothing,
      },
      {
        index: 25,
        title: "Whatever",
        artist: "Oasis",
        date: "2025.04.15",
        category: "음악",
        image: whatever,
      },
      {
        index: 47,
        title: "오래오래",
        artist: "죠지",
        date: "2025.04.15",
        category: "음악",
        image: frr,
      },
      {
        index: 63,
        title: "우리집 앞",
        season: "여름",
        vive: "나무, 꽃",
        category: "장소",
        date: "2025.04.15",
        image: park,
      },
      {
        index: 70,
        title: "Sing Street",
        director: "John Carney",
        date: "2016.01.24",
        category: "영화",
        image: singstreet,
      },
    ],
    []
  ); // 빈 의존성 배열 - 결코 변경되지 않음

  // Create a map of content items by index for O(1) lookup
  const contentItemMap = useMemo(() => {
    const map = new Map<number, (typeof contentItems)[number]>();
    contentItems.forEach((item) => map.set(item.index, item));
    return map;
  }, [contentItems]);

  const totalItems = 80;

  // 클라이언트 사이드에서만 사용할 수 있도록 수정
  const { x, y } = useMouse();
  const { scrollYProgress } = useScroll();
  const { loading, imagesLoaded, showContent, handleImageLoad } =
    useImageLoader(contentItems.length);

  // 마우스 움직임에 따른 효과 계산
  const offsetX = (x - centerX) / (centerX || 1);
  const offsetY = (y - centerY) / (centerY || 1);

  const movementX = prefersReducedMotion ? 0 : offsetX * 60;
  const movementY = prefersReducedMotion ? 0 : offsetY * 40;

  // 컴포넌트가 마운트되었는지 확인하는 useEffect
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // 화면 크기 조정을 위한 useEffect
  useEffect(() => {
    if (!isMounted) return;

    const handleResize = () => {
      setCenterX(window.innerWidth / 2);
      setCenterY(window.innerHeight / 2);
    };

    // 초기 설정
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMounted]);

  // 카테고리 변경 핸들러
  const handleMouseEnter = useCallback((category: string) => {
    setCursorText(category);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setCursorText("내가 사랑하는");
  }, []);

  // 그리드 아이템 메모이제이션
  const gridItems = useMemo(() => {
    return Array.from({ length: totalItems }, (_, i) => {
      const contentItem = contentItemMap.get(i) || null;
      return (
        <MemoizedGridItem
          key={i}
          index={i}
          contentItem={contentItem}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onImageLoad={handleImageLoad}
        />
      );
    });
  }, [
    totalItems,
    contentItemMap,
    handleMouseEnter,
    handleMouseLeave,
    handleImageLoad,
  ]);

  // 로딩 진행률 계산 (NaN 방지)
  const loadingPercentage =
    contentItems.length > 0
      ? Math.round((imagesLoaded / contentItems.length) * 100)
      : 0;

  return (
    <>
      <AnimatePresence>
        {loading && <MemoizedLoadingIndicator percentage={loadingPercentage} />}
      </AnimatePresence>

      <div
        className={`flex-grow sticky top-0 left-0 h-screen w-full flex justify-center items-center overflow-hidden pointer-events-none ${
          loading ? "invisible" : "visible"
        }`}
        aria-live="polite"
        aria-busy={loading}
      >
        {isMounted && (
          <div
            className="custom-cursor absolute h-full w-full z-20"
            aria-hidden="true"
          >
            <MemoizedCursor x={x} y={y} text={cursorText} />
          </div>
        )}

        <motion.div
          className="absolute w-full h-screen z-20 bg-black pointer-events-none"
          style={{ opacity: scrollYProgress }}
          aria-hidden="true"
        ></motion.div>

        {/* 로딩 후 애니메이션을 위한 motion.div */}
        <motion.div
          className="absolute w-full h-screen z-30 bg-white pointer-events-none"
          initial={{ opacity: 1 }}
          animate={{ opacity: showContent ? 0 : 1 }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
          aria-hidden="true"
        ></motion.div>

        {/* 로딩 후 애니메이션을 위한 메인 제목 motion.div */}
        <motion.div
          className="absolute z-10"
          initial={{ opacity: 0, translateY: "40px" }}
          animate={{
            opacity: showContent ? 1 : 0,
            translateY: showContent ? 0 : "40px",
          }}
          transition={{ duration: prefersReducedMotion ? 0.1 : 0.8 }}
        >
          <div className="flex flex-col items-center gap-5">
            <h1 className="font-clash text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[9rem] font-medium">
              Hyein Kim
            </h1>
            <h3 className="font-clash text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
              Backend Developer
            </h3>
          </div>
        </motion.div>

        <motion.div
          className="-z-10"
          animate={{
            x: movementX,
            y: movementY,
            opacity: showContent ? 1 : 0,
          }}
          initial={{ opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: prefersReducedMotion ? 2000 : 400,
            damping: prefersReducedMotion ? 500 : 300,
            mass: prefersReducedMotion ? 5 : 2,
          }}
        >
          <div
            className={`${styles.grid_container} grid`}
            role="grid"
            aria-label="내가 사랑하는 컨텐츠 모음"
          >
            {gridItems}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default LandingPage;
