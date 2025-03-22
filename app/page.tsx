"use client";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LandingPage from "@/app/_components/layout/LandingPage";
import AboutMe from "@/app/_components/sections/AboutMe";
import MyJourney from "@/app/_components/sections/MyJourney";
import MyProject from "@/app/_components/sections/MyProject";
import TechStack from "@/app/_components/sections/TechStack";
import { useEffect } from "react";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.2,
      easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    // 1) ScrollTrigger에게 Lenis의 scrollTop을 쓰라고 알려준다
    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        return arguments.length
          ? lenis.scrollTo(value as number, { immediate: true })
          : lenis.scroll;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: document.body.style.transform ? "transform" : "fixed",
    });

    // 2) Lenis가 스크롤될 때마다 ScrollTrigger에게 업데이트하라
    lenis.on("scroll", ScrollTrigger.update);
    ScrollTrigger.addEventListener("refresh", () => lenis.resize());
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.removeEventListener("refresh", () => lenis.resize());
    };
  }, []);

  return (
    <div className="flex flex-col">
      <div className="cursor-none h-screen">
        <LandingPage />
      </div>
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col">
          <AboutMe />
          <MyJourney />
          <MyProject />
          <TechStack />
        </div>
      </main>
      <Footer />
    </div>
  );
}
