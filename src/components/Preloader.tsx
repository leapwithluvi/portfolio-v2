"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { profile } from "@/data/profile";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulasi loading selama 2.5 detik
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ y: 0 }}
          exit={{ 
            y: "-100%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 } 
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background"
        >
          {/* Content Container */}
          <div className="flex flex-col items-center gap-6">
            {/* Image Icon with Pulse effect */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: 1,
              }}
              transition={{ 
                duration: 0.8, 
                ease: "easeOut",
              }}
              className="relative w-20 h-20 md:w-24 md:h-24 p-1 rounded-full border border-yellow-600/30"
            >
              <div className="w-full h-full rounded-full overflow-hidden relative">
                <Image
                  src="/images/icon.png"
                  alt="Logo Icon"
                  fill
                  className="object-contain p-2"
                />
              </div>
              {/* Outer Glow */}
              <motion.div 
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.5, 0.2]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 2 
                }}
                className="absolute inset-0 rounded-full bg-yellow-600 blur-xl -z-10"
              />
            </motion.div>

            {/* Moving Text "leapwithluvi" */}
            <div className="flex overflow-hidden">
              {"leapwithluvi".split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{ 
                    delay: 0.5 + index * 0.05, 
                    duration: 0.6, 
                    ease: [0.33, 1, 0.68, 1] 
                  }}
                  className="text-2xl md:text-3xl font-serif font-bold tracking-tight text-foreground"
                >
                  {char}
                </motion.span>
              ))}
            </div>

            {/* Progress Line */}
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
              className="h-[1px] bg-yellow-600 mt-2 w-full max-w-[120px]"
            />
          </div>

          {/* Background Decorative Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.03 }}
            className="absolute bottom-10 text-[15vw] font-serif font-bold text-foreground select-none pointer-events-none whitespace-nowrap"
          >
            CREATIVE DEVELOPER
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
