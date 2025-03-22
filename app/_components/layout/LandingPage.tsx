'use client';

import styles from './styles.module.css';
import { motion, useScroll, useReducedMotion } from 'framer-motion';
import { useState, useEffect, useCallback, useMemo, memo } from 'react';
import useMouse from '@/hooks/useMouse';
import eea from '@/public/images/eea.webp';
import sunshine from '@/public/images/eternal_sunshine.webp';
import terminal from '@/public/images/terminal.webp';
import intern from '@/public/images/inetern.webp';
import yoonjiyoung from '@/public/images/yoonjiyoung.webp';
import love from '@/public/images/love.webp';
import sweetnothing from '@/public/images/sweetnothing.webp';
import whatever from '@/public/images/whatever.webp';
import park from '@/public/images/park.webp';
import frr from '@/public/images/frr.webp';
import twilightzone from '@/public/images/twilight_zone.webp';
import happyness from '@/public/images/happyness.webp';
import loveholic from '@/public/images/loveholic.webp';
import minsu from '@/public/images/minsu.webp';
import foryou from '@/public/images/foryou.webp';
import GridItem from './GridItem';
import CustomCursor from './CustomCursor';
import type { ContentItem } from './GridItem';

// 메모이제이션된 그리드 아이템
const MemoizedGridItem = memo(GridItem);

// 메모이제이션된 커스텀 커서
const MemoizedCursor = memo(CustomCursor);

const LandingPage = () => {
  const [cursorText, setCursorText] = useState('사랑하는');
  const [centerX, setCenterX] = useState(0);
  const [centerY, setCenterY] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  // Reduced motion preference using framer-motion hook
  const prefersReducedMotion = useReducedMotion();

  // 미리 정의된 컨텐츠 목록 - useMemo로 감싸기
  const contentItems = useMemo<ContentItem[]>(
    () => [
      {
        index: 16,
        title: '언젠가 너와 나',
        artist: '윤지영',
        date: '2019.09.25',
        category: '음악',
        image: yoonjiyoung,
      },
      {
        index: 21,
        title: 'twilight zone',
        artist: 'Ariana Grande',
        date: '2025.03.28',
        category: '음악',
        image: twilightzone,
      },

      {
        index: 31,
        title: 'Eternal Sunshine',
        director: 'Michel Gondry',
        date: '2004.03.19',
        category: '영화',
        image: sunshine,
      },
      {
        index: 35,
        title: '우리집 앞',
        season: 'Summer',
        category: '장소',
        date: '2024.09.03',
        image: park,
      },
      {
        index: 42,
        title: 'The Terminal',
        director: 'Steven Spielberg',
        date: '2004.06.18',
        category: '영화',
        image: terminal,
      },
      {
        index: 46,
        title: 'Whatever',
        artist: 'Oasis',
        date: '1994.12.18',
        category: '음악',
        image: whatever,
      },
      {
        index: 53,
        title: 'Sweet Nothing',
        artist: 'Taylor Swift',
        date: '2022.10.21',
        category: '음악',
        image: sweetnothing,
      },
      {
        index: 63,
        title: 'Everything Everywhere All At Once',
        director: 'Daniel Kwan, Daniel Scheinert',
        date: '2022.10.12',
        category: '영화',
        image: eea,
      },
      {
        index: 74,
        title: '오래오래',
        artist: '죠지',
        date: '2025.04.15',
        category: '음악',
        image: frr,
      },
      {
        index: 81,
        title: 'The Pursuit of Happyness',
        director: 'Gabriele Muccino',
        date: '2006.12.15',
        category: '영화',
        image: happyness,
      },
      {
        index: 85,
        title: 'The Intern',
        director: 'Nancy Meyers',
        date: '2015.09.25',
        category: '영화',
        image: intern,
      },
      {
        index: 96,
        title: 'love.',
        artist: 'wate to earth',
        date: '2023.04.20',
        category: '음악',
        image: love,
      },
      {
        index: 100,
        title: 'For you (Feat. Crush)',
        artist: '이하이',
        date: '2020.12.16',
        category: '음악',
        image: foryou,
      },
      {
        index: 106,
        title: '그대만 있다면',
        artist: 'Loveholic',
        date: '2006.04.13',
        category: '음악',
        image: loveholic,
      },

      {
        index: 114,
        title: "No worries, I'm good",
        artist: '민수',
        date: '2022.12.02',
        category: '음악',
        image: minsu,
      },
    ],
    []
  );

  // Create a map of content items by index for O(1) lookup
  const contentItemMap = useMemo(() => {
    const map = new Map<number, (typeof contentItems)[number]>();
    contentItems.forEach((item) => map.set(item.index, item));
    return map;
  }, [contentItems]);

  const totalItems = 130;

  // 클라이언트 사이드에서만 사용할 수 있도록 수정
  const { x, y } = useMouse();
  const { scrollYProgress } = useScroll();

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

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMounted]);

  // 카테고리 변경 핸들러
  const handleMouseEnter = useCallback((category: string) => {
    setCursorText(category);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setCursorText('사랑하는');
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
        />
      );
    });
  }, [totalItems, contentItemMap, handleMouseEnter, handleMouseLeave]);

  return (
    <div
      className="flex-grow fixed top-0 left-0 h-screen w-full flex justify-center items-center overflow-hidden pointer-events-none"
      aria-live="polite"
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

      <motion.div
        className="absolute z-10"
        initial={{ opacity: 0, translateY: '40px' }}
        animate={{
          opacity: 1,
          translateY: 0,
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
          opacity: 1,
        }}
        initial={{ opacity: 0 }}
        transition={{
          type: 'spring',
          stiffness: prefersReducedMotion ? 2000 : 400,
          damping: prefersReducedMotion ? 500 : 300,
          mass: prefersReducedMotion ? 5 : 2,
        }}
      >
        <div
          className={`${styles.grid_container} grid`}
          role="grid"
          aria-label="사랑하는 컨텐츠 모음"
        >
          {gridItems}
        </div>
      </motion.div>
    </div>
  );
};

export default LandingPage;
