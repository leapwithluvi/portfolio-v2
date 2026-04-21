"use client";

import React, { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { usePathname } from "next/navigation";
import { profile } from "@/data/profile";

export default function Preloader() {
  const pathname = usePathname();
  // Initialize isLoading based on pathname to avoid cascading render in useEffect
  const [isLoading, setIsLoading] = useState(pathname === "/");
  const [count, setCount] = useState(0);
  const isHomePage = pathname === "/";

  // Handle scroll lock correctly
  useEffect(() => {
    if (isLoading && isHomePage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading, isHomePage]);

  const startInitialization = useCallback(() => {
    const startTime = Date.now();
    const duration = 800;

    const updateCounter = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      setCount(Math.floor(progress * 100));

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setTimeout(() => {
          setIsLoading(false);
          window.dispatchEvent(new Event("loader-finished"));
        }, 200);
      }
    };

    requestAnimationFrame(updateCounter);
  }, []);

  useEffect(() => {
    if (isHomePage) {
      startInitialization();
    }
  }, [isHomePage, startInitialization]);

  return (
    <AnimatePresence>
      {isHomePage && isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-background"
        >
          <div className="relative flex flex-col items-center gap-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[10px] font-mono tracking-[0.5em] text-accent uppercase"
            >
              {profile.name.replace(/\s+/g, '_')}
            </motion.div>
            
            <div className="text-7xl md:text-9xl font-serif font-bold text-foreground tracking-tighter tabular-nums">
              {count.toString().padStart(3, '0')}
            </div>

            <div className="w-48 h-px bg-border relative overflow-hidden">
              <motion.div 
                className="absolute inset-0 bg-accent origin-left"
                style={{ scaleX: count / 100 }}
              />
            </div>
          </div>

          <div className="absolute bottom-10 flex flex-col items-center gap-2">
            <span className="text-[10px] font-mono opacity-20 uppercase tracking-widest">Initialization_Sequence</span>
            <div className="w-1 h-1 bg-accent rounded-full animate-ping" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
