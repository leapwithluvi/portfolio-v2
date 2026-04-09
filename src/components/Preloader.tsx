"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { profile } from "@/data/profile";

export default function Preloader() {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(0);

  const words = profile.greetings;

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    // Calculate target percentage based on current word index
    const targetCount = Math.floor(((index + 1) / words.length) * 100);
    
    // Smoothly animate the counter to reach the target percentage
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev < targetCount) return prev + 1;
        clearInterval(interval);
        return prev;
      });
    }, 10); // Increment speed per 1%

    // Logic for switching words
    if (index === words.length - 1) {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000); // Wait at the last word (100%) before exiting
      return;
    }
    
    const wordsTimer = setTimeout(() => {
      setIndex(index + 1);
    }, index === 0 ? 1000 : 150); // First word stays longer, others are fast

    return () => {
      clearTimeout(wordsTimer);
      clearInterval(interval);
    };
  }, [index, words.length]);

  // Path for the elastic "tail" curve below the DIV
  const initialPath = `M0 0 L${dimension.width} 0 Q${dimension.width / 2} 200 0 0 Z`;
  const targetPath = `M0 0 L${dimension.width} 0 Q${dimension.width / 2} 0 0 0 Z`;

  const getLayerVariants = (transitionDelay: number) => ({
    initial: { y: 0 },
    exit: { 
      y: "-100vh",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as any, delay: transitionDelay } 
    },
  });

  const getCurveVariants = (transitionDelay: number) => ({
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] as any },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] as any, delay: transitionDelay },
    },
  });

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <div className="fixed inset-0 z-[9999] pointer-events-none">
          {/* Layer 1: Gray Background Shade */}
          <motion.div
            variants={getLayerVariants(0.4)}
            initial="initial"
            exit="exit"
            className="absolute inset-0 z-10 bg-neutral-900"
          >
            <svg className="absolute top-[99.5%] w-full h-[200px] fill-neutral-900">
              <motion.path
                variants={getCurveVariants(0.4)}
                initial="initial"
                exit="exit"
              />
            </svg>
          </motion.div>
          
          {/* Layer 2: Yellow Accent Shade */}
          <motion.div
            variants={getLayerVariants(0.2)}
            initial="initial"
            exit="exit"
            className="absolute inset-0 z-20 bg-yellow-600"
          >
            <svg className="absolute top-[99.5%] w-full h-[200px] fill-yellow-600">
              <motion.path
                variants={getCurveVariants(0.2)}
                initial="initial"
                exit="exit"
              />
            </svg>
          </motion.div>

          {/* Layer 3: Main Black Layer */}
          <motion.div
            key="loader"
            variants={getLayerVariants(0)}
            initial="initial"
            exit="exit"
            className="absolute inset-0 z-30 flex items-center justify-center bg-black pointer-events-auto shadow-[0_50px_100px_rgba(0,0,0,0.5)]"
          >
            {dimension.width > 0 && (
              <>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-3 text-white text-4xl md:text-6xl font-serif z-10"
                >
                  <span className="block w-2 h-2 rounded-full bg-yellow-600 animate-pulse" />
                  {words[index]}
                </motion.p>

                {/* Counting Percentage - Now synced with words */}
                <div className="absolute bottom-10 right-10 text-white/20 text-[12vw] font-bold font-serif leading-none select-none tracking-tighter">
                  {count}%
                </div>

                <svg className="absolute top-[99.5%] w-full h-[200px] fill-black">
                  <motion.path
                    variants={getCurveVariants(0)}
                    initial="initial"
                    exit="exit"
                  />
                </svg>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
