"use client";

import React, { useEffect } from "react";
import { motion, useSpring, useMotionValue, useMotionTemplate } from "motion/react";

export default function Spotlight() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200, mass: 0.2 };
  const shadowX = useSpring(mouseX, springConfig);
  const shadowY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const background = useMotionTemplate`radial-gradient(650px circle at ${shadowX}px ${shadowY}px, var(--spotlight-color), transparent 80%)`;

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30 lg:block hidden"
      style={{ background }}
    />
  );
}
