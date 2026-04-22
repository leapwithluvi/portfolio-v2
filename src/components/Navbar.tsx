"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Sun, Moon, Globe } from "lucide-react";
import { profile } from "@/data/profile";
import { navLinks } from "@/data/navigation";
import { useTranslation } from "@/hooks/useTranslation";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const { t, lang, setLang, toggleLang } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    
    // Theme initialization
    const theme = localStorage.getItem("theme");
    const isLightTheme = theme === "light";
    
    requestAnimationFrame(() => {
      if (isLightTheme) {
        setIsDark(false);
        document.documentElement.classList.remove("dark");
      } else {
        setIsDark(true);
        document.documentElement.classList.add("dark");
      }
    });
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const css = document.createElement("style");
    css.appendChild(
      document.createTextNode(
        `* {
           -webkit-transition: none !important;
           -moz-transition: none !important;
           -o-transition: none !important;
           -ms-transition: none !important;
           transition: none !important;
        }`
      )
    );
    document.head.appendChild(css);

    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }

    void window.getComputedStyle(css).opacity;
    document.head.removeChild(css);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-100 transition-all duration-500 border-b will-change-transform ${
          isScrolled ? "bg-background/80 backdrop-blur-sm border-border py-4" : "bg-transparent border-transparent py-8"
        }`}
      >
        <div className="max-container flex justify-between items-center px-4 md:px-0">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <span className="text-sm md:text-base font-bold uppercase tracking-widest text-foreground">
              {profile.logoName}
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground hover:text-accent transition-colors relative group py-2"
              >
                {link.name}
                <span className="absolute bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}

            <div className="flex items-center gap-4 border-l border-border pl-10">
              {/* Language Toggle */}
              <button
                onClick={toggleLang}
                className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Toggle language"
              >
                <Globe size={14} />
                {lang.toUpperCase()}
              </button>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2.5 border border-border text-foreground hover:bg-foreground hover:text-background transition-colors"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun size={16} /> : <Moon size={16} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden items-center gap-3">
              {/* Mobile Language Toggle */}
              <button
                onClick={toggleLang}
                className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground p-2"
                aria-label="Toggle language"
              >
                {lang.toUpperCase()}
              </button>
              
              <button
                onClick={toggleTheme}
                className="p-2 border border-border text-foreground"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun size={16} /> : <Moon size={16} />}
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 border border-border text-foreground"
                aria-label="Open menu"
              >
                <Menu size={20} />
              </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-200 bg-background flex flex-col p-8 md:p-12 lg:hidden"
          >
            <div className="flex justify-between items-center mb-12">
              <div className="text-sm font-bold uppercase tracking-widest text-foreground">
                {profile.logoName}
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-3 border border-border text-foreground hover:bg-foreground hover:text-background transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col gap-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-4xl font-serif font-bold text-foreground hover:text-accent transition-colors flex justify-between items-end group"
                >
                  {link.name}
                  <span className="text-[10px] font-mono opacity-30 group-hover:opacity-100">0{index + 1}</span>
                </motion.a>
              ))}
            </div>

            <div className="mt-auto pt-12 flex flex-col gap-12 border-t border-border">
               <div className="flex justify-between items-center">
                  <div className="flex flex-col gap-3">
                    <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent">Language</div>
                    <div className="flex gap-6">
                      {(['en', 'id'] as const).map((l) => (
                        <button
                          key={l}
                          onClick={() => setLang(l)}
                          className={`text-sm font-bold uppercase tracking-widest ${lang === l ? 'text-foreground' : 'text-muted-foreground'}`}
                        >
                          {l === 'en' ? 'English' : 'Bahasa'}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <button 
                    className="px-8 py-4 text-[10px] font-bold tracking-[0.2em] uppercase bg-primary text-primary-foreground hover:opacity-90 transition-all"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {t.nav.contact}
                  </button>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
