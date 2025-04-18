import React from "react";

const TechStack = () => {
  return (
    <section
      id="tech-stack"
      className="flex flex-col justify-center items-center font-clash bg-orange-100"
    >
      <h2 className="text-6xl font-medium mb-6">Tech Stack</h2>
      <div className="stack-container grid grid-rows-3 grid-cols-4 gap-4">
        <div className="stack w-28 h-28 rounded-2xl flex justify-center items-center bg-white">
          <h3>Java</h3>
        </div>
        <div className="stack w-28 h-28 rounded-2xl flex justify-center items-center bg-white">
          <h3>Java</h3>
        </div>
        <div className="stack w-28 h-28 rounded-2xl flex justify-center items-center bg-white">
          <h3>Java</h3>
        </div>
        <div className="stack w-28 h-28 rounded-2xl flex justify-center items-center bg-white">
          <h3>Java</h3>
        </div>
        <div className="stack w-28 h-28 rounded-2xl flex justify-center items-center bg-white">
          <h3>Java</h3>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
