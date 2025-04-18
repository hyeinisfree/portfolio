"use client";

import styles from "./styles.module.css";
import useMousePosition from "@/app/utils/useMousePosition";
import { motion, useScroll } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

const LandingPage = () => {
  const { scrollYProgress } = useScroll();

  const { x, y } = useMousePosition();
  const [centerX, setCenterX] = useState(0);
  const [centerY, setCenterY] = useState(0);

  useEffect(() => {
    if (x !== 0 || y !== 0) {
      setCenterX(window.innerWidth / 2);
      setCenterY(window.innerHeight / 2);
    }
  }, [x, y]);

  const offsetX = (x - centerX) / centerX || 0;
  const offsetY = (y - centerY) / centerY || 0;

  const movementX = offsetX * 60;
  const movementY = offsetY * 40;

  const divs = [];
  for (let i = 0; i < 80; i++) {
    if (i === 15) {
      divs.push(
        <div
          key={i}
          className={`${styles.grid_item} flex flex-col h-full px-2 py-1.5`}
        >
          <motion.div
            whileHover={{ scale: 1.2 }}
            className={`flex flex-col h-full justify-between pointer-events-auto`}
          >
            <div className="flex justify-center items-center">
              <Image
                src={`https://picsum.photos/300/200`}
                alt="grid-item"
                width={300}
                height={200}
              ></Image>
            </div>
            <div className="font-pretendard text-[10px] font-[200]">
              <p>Title: 널 만나려고</p>
              <p>Artist: 권진아</p>
              <p>Date: 2025.04.15</p>
            </div>
          </motion.div>
        </div>
      );
    } else {
      divs.push(<div key={i} className={`${styles.grid_item}`}></div>);
    }
  }

  const transition = {
    duration: 1.2,
    ease: "easeInOut",
  };

  return (
    <div className="flex-grow sticky top-0 left-0 h-screen w-screen flex justify-center items-center overflow-hidden pointer-events-none">
      <motion.div
        className="absolute w-screen h-screen z-20 bg-black pointer-events-none"
        style={{ opacity: scrollYProgress }}
      ></motion.div>
      <motion.div
        className="absolute w-screen h-screen z-30 bg-white pointer-events-none"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={transition}
      ></motion.div>
      <motion.div
        className="absolute z-10"
        initial={{ opacity: 0, translateY: "40px" }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col items-center gap-5">
          <h1 className="font-clash text-7xl md:text-8xl xl:text-9xl 2xl:text-[9rem] font-medium">
            Hyein Kim
          </h1>
          <h3 className="font-clash text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl">
            Backend Developer
          </h3>
        </div>
      </motion.div>
      <motion.div
        className="-z-10"
        animate={{ x: movementX, y: movementY }}
        transition={{ type: "spring", stiffness: 540, damping: 80, mass: 5 }}
      >
        <div className={`${styles.grid_container} grid`}>{divs}</div>
      </motion.div>
    </div>
  );
};

export default LandingPage;
