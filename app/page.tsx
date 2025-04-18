'use client';
import AboutMe from '@/components/sections/AboutMe';
import MyCareer from '@/components/sections/MyCareer';
import MyProject from '@/components/sections/MyProject';
import TechStack from '@/components/sections/TechStack';
import { useEffect } from 'react';
import Lenis from 'lenis';

export default function Home() {
  useEffect(() => {
    // const lenis = new Lenis({
    //   smoothWheel: true,
    //   lerp: 0.05,
    //   easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    // });
    // function raf(time: any) {
    //   lenis.raf(time);
    //   requestAnimationFrame(raf);
    // }
    // requestAnimationFrame(raf);
    const lenis = new Lenis({
      autoRaf: true,
    });
  }, []);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col">
      <AboutMe />
      <MyCareer />
      <MyProject />
      <TechStack />
    </div>
  );
}
