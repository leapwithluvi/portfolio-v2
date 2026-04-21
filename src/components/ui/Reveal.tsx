"use client";

import React from "react";
import { motion } from "motion/react";

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
}

export default function Reveal({ children, width = "100%" }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
      style={{ width }}
      className="relative z-20 bg-background"
    >
      {children}
    </motion.div>
  );
}
