"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { navLinks } from "@/data/navigation";

export default function SectionNav() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.href.substring(1));
      let current = "home";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200) { // Offset threshold
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-6">
      {navLinks.map((link) => {
        const isActive = activeSection === link.href.substring(1);
        return (
          <button
            key={link.name}
            onClick={() => scrollToSection(link.href)}
            className="group relative flex items-center justify-end"
          >
            {/* Label on Hover */}
            <AnimatePresence>
              <motion.span
                initial={{ opacity: 0, x: 10 }}
                whileHover={{ opacity: 1, x: 0 }}
                className="absolute right-8 px-2 py-1 rounded bg-zinc-900 text-white text-[10px] font-bold uppercase tracking-widest pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
              >
                {link.name}
              </motion.span>
            </AnimatePresence>

            {/* Indicator Dot */}
            <div className={`transition-all duration-300 rounded-full ${
              isActive 
                ? "w-3 h-3 bg-yellow-600 shadow-[0_0_10px_rgba(202,138,4,0.5)]" 
                : "w-1.5 h-1.5 bg-zinc-400 group-hover:bg-yellow-600/50"
            }`} />
          </button>
        );
      })}
    </div>
  );
}
