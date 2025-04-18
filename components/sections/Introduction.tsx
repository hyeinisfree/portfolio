"use client";

import React from "react";
import Image from "next/image";
import figurine from "@/public/images/hyein.png";
import { motion } from "framer-motion";

const Introduction = () => {
  return (
    <section
      id="introduction"
      className="min-h-screen flex items-center justify-center bg-white"
    >
      <div className="container mx-auto px-4 font-clash flex items-center justify-between">
        <div className="introduction-name">
          <h2 className="text-4xl font-normal text-[#3C5B6F]">Hello! I'm</h2>
          <h1 className="text-7xl font-medium">HYEIN KIM</h1>
        </div>
        {/* <div className="introduction-img">
          <Image src={figurine} alt="figurine" width={400}></Image>
        </div> */}
        {/* <div className="intro-image-container">
          <motion.div
            initial={{ scale: 1, position: "static" }}
            animate={{ scale: 0.3, position: "fixed" }}
            exit={{ scale: 1, position: "static" }}
          >
            <Image src={figurine} alt="figurine" width={400}></Image>
          </motion.div>
        </div> */}
        <div className="introduction-role relative">
          <h2 className="text-4xl font-normal text-[#3C5B6F]">A Creative</h2>
          <h1 className="text-7xl font-semibold text-[#153448]">BACKEND</h1>
          <h1 className="text-7xl font-semibold relative -top-10 left-6">
            DEVELOPER
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
