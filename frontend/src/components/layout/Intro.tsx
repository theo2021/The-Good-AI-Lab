"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Intro() {
  const { scrollY } = useScroll();
  const titleOpacity = useTransform(scrollY, [0, 100], [0, 1]);
  const y = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <div className="relative h-[150vh]">
      <motion.div
        className="fixed inset-0 flex flex-col items-center justify-center -z-10"
        style={{ y }}
      >
        <div id="emoji-container" className="text-[5rem] text-center relative">
          <span className="relative z-10">🌱</span>
        </div>

        <motion.h1
          className="text-8xl tracking-tight text-white mt-8 text-center drop-shadow-lg"
          style={{
            opacity: titleOpacity,
            textShadow: "0 0 5px rgba(255, 255, 255, 0.3)",
            fontWeight: 100,
            fontFamily: "var(--font-raleway)",
          }}
        >
          The <span className="text-seedling">good</span> AI Lab
        </motion.h1>
      </motion.div>
    </div>
  );
}
