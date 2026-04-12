"use client"
 
import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X, ChevronRight, Search } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { profile } from "@/data/profile";
import { navLinks } from "@/data/navigation";
import { socials } from "@/data/socials";
import { LanguageToggle } from "./LanguageToggle";
import { useTranslation } from "@/hooks/useTranslation";
 
export const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isDark, setIsDark] = useState<boolean>(false);
 
  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
 
  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };
 
  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 border-b ${
          isScrolled ? "bg-background/80 backdrop-blur-md border-border py-4" : "bg-transparent border-transparent py-8"
        }`}
      >
        <div className="max-container flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <span className="text-sm font-bold uppercase tracking-[0.1em] text-foreground">
              {profile.logoName}
            </span>
            <div className="w-1.5 h-1.5 bg-amber-500 rounded-full group-hover:animate-ping" />
          </a>
 
          {/* Nav Links */}
          <div className="hidden lg:flex items-center gap-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-label text-[9px] hover:text-amber-500 transition-colors relative group"
              >
                {(t.nav as any)[link.name.toLowerCase()]}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-amber-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            
            <div className="h-4 w-px bg-border" />
            
            <LanguageToggle />
            
            <button
              onClick={toggleTheme}
              className="p-2 border border-border hover:bg-foreground hover:text-background transition-colors"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun size={14} /> : <Moon size={14} />}
            </button>
            
            <a
              href={`mailto:${socials.find(s => s.name === "Email")?.href.replace('mailto:', '') || "@"}`}
              className="px-6 py-2 bg-foreground text-background text-[9px] font-bold uppercase tracking-widest hover:bg-amber-500 transition-all"
            >
              {t.nav.connect}
            </a>
          </div>
 
          {/* Mobile Actions */}
          <div className="flex lg:hidden items-center gap-4">
            <LanguageToggle />
            <button
              onClick={toggleTheme}
              className="p-2 border border-border text-foreground transition-colors"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-foreground"
              aria-label="Toggle Menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>
 
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-background z-[150] flex flex-col p-6 sm:p-10 lg:hidden overflow-y-auto"
          >
            {/* Mobile Menu Header - PERSISTENT */}
            <div className="flex justify-between items-center mb-8 shrink-0">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold uppercase tracking-[0.1em] text-foreground">
                  {profile.logoName}
                </span>
                <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-3 border border-border text-foreground hover:bg-foreground hover:text-background transition-colors"
              >
                <X size={20} />
              </button>
            </div>
 
            {/* Animated Content Sections */}
            <motion.div 
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col flex-grow"
            >
              <div className="flex flex-col gap-3 sm:gap-6 mb-12 flex-grow">
                <motion.span 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 0.5, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-[10px] items-start flex text-left font-bold uppercase tracking-widest text-amber-500 mb-2"
                >
                  {t.nav.about} {/* Using About as a proxy for navigation or add a specific key */}
                </motion.span>
                <div className="flex flex-col gap-2 sm:gap-4">
                  {navLinks.map((link, idx) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        delay: 0.1 + (idx * 0.1), 
                        duration: 0.5, 
                        ease: [0.16, 1, 0.3, 1] 
                      }}
                    >
                      <a
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground border-b border-border pb-3 hover:text-amber-500 transition-colors text-left block"
                      >
                        {(t.nav as any)[link.name.toLowerCase()]}
                      </a>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-auto grid grid-cols-2 gap-4 pt-8 border-t border-border shrink-0 pb-6"
              >
                <button
                   onClick={() => {
                     toggleTheme();
                   }}
                   className="py-4 border border-border text-[10px] uppercase font-bold tracking-widest text-center flex items-center justify-center gap-2 hover:bg-muted/10 transition-colors"
                >
                   {isDark ? <Sun size={12} /> : <Moon size={12} />}
                   {isDark ? 'Light' : 'Dark'}
                </button>
                <a
                  href={`mailto:${socials.find(s => s.name === "Email")?.href.replace('mailto:', '') || "@"}`}
                  className="py-4 bg-foreground text-background text-[10px] font-bold uppercase tracking-widest text-center hover:bg-amber-500 transition-colors flex items-center justify-center"
                >
                  {t.nav.connect}
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
