// app/animations/animation-2/page.tsx
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Animation2Page() {
  const boxRef = useRef(null);

  useEffect(() => {
    if (boxRef.current) {
      gsap.to(boxRef.current, {
        x: 400,
        duration: 1,
        scrollTrigger: {
          trigger: boxRef.current,
          start: "top center",
          toggleActions: "play none none reverse",
        },
      });
    }
  }, []);

  return (
    <main className="h-[200vh] p-8 bg-white">
      <h1 className="text-3xl font-bold mb-10">Scroll to animate the box</h1>
      <div
        ref={boxRef}
        className="w-32 h-32 bg-blue-400 rounded-xl shadow-xl"
      />
    </main>
  );
}
