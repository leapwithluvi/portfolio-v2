"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from "motion/react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  
  const pathLength = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          className="fixed bottom-8 right-8 z-[60] cursor-pointer group"
          onClick={scrollToTop}
        >
          {/* Circular Progress SVG */}
          <svg className="w-14 h-14 -rotate-90">
            <circle
              cx="28"
              cy="28"
              r="24"
              className="stroke-muted/30 fill-none"
              strokeWidth="4"
            />
            <motion.circle
              cx="28"
              cy="28"
              r="24"
              className="stroke-yellow-600 fill-none"
              strokeWidth="4"
              strokeLinecap="round"
              style={{ pathLength }}
            />
          </svg>

          {/* Icon */}
          <div className="absolute inset-0 flex items-center justify-center text-yellow-600 group-hover:-translate-y-1 transition-transform duration-300">
            <ArrowUp size={24} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
