"use client"
 
import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { profile } from "@/data/profile";
 
const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#work" },
  { name: "Degrees", href: "#certificates" },
];
 
export const Navbar: React.FC = () => {
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
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-[999] w-full max-w-[1280px] px-4 md:px-12 pointer-events-auto">
        <motion.div
          className={`flex items-center justify-between gap-6 px-6 py-3 rounded-full border border-border shadow-lg glass transition-all duration-300 ${
            isScrolled ? "scale-95 px-4" : "scale-100"
          }`}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          {/* Logo */}
          <a href="#home" className="text-xl font-serif font-bold tracking-tighter text-foreground hover:scale-105 transition-all outline-none">
            {profile.logoName}<span className="text-yellow-600">.</span>
          </a>
  
          <div className="h-6 w-px bg-border hidden md:block" />
  
          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>
  
          <div className="h-6 w-px bg-border hidden lg:block" />
  
          {/* Socials & Theme Toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-foreground hover:bg-muted transition-all"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 lg:hidden text-foreground flex items-center justify-center"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </motion.div>
      </nav>
 
      {/* Mobile Menu Overlay & Modal */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* DARK BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-background/80 backdrop-blur-md z-[997] lg:hidden"
            />
 
            {/* MENU MODAL */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed top-28 left-4 right-4 mx-auto max-w-sm bg-background border border-border rounded-3xl shadow-2xl p-8 lg:hidden z-[998]"
            >
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-bold text-yellow-600 uppercase tracking-widest mb-4">Navigation</span>
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="group py-4 border-b border-border/50 flex justify-between items-center text-xl font-bold text-foreground hover:text-yellow-600 transition-colors"
                  >
                    <span>{link.name}</span>
                    <ChevronRight size={18} className="text-muted-foreground group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
