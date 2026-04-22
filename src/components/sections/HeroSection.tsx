"use client"
 
import { motion } from "motion/react";
import { profile } from "@/data/profile";
import { ArrowDownRight} from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import Image from "next/image";
 
export const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <>
      {/* Target navigasi tetap di paling atas halaman */}
      <div id="home" className="absolute top-0 left-0 w-px h-px pointer-events-none" />
      
      <section
        className="sticky top-0 h-screen flex flex-col justify-center items-center overflow-hidden bg-background z-0 pt-20 md:pt-32 pb-10 md:pb-20"
      >
      {/* Background Background */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://giffiles.alphacoders.com/211/211056.gif"
          alt="Background"
          fill
          unoptimized
          className="object-cover opacity-80 dark:opacity-80"
          priority
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background via-transparent to-background" />
      </div>

      <div className="relative z-10 w-full max-w-[100vw] flex flex-col items-center text-center gap-6 md:gap-8 px-4 md:px-6">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 px-3 py-1.5 md:px-4 md:py-2 border border-border bg-background/50 backdrop-blur-sm"
        >
          <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
          <span className="text-[9px] md:text-[10px] font-mono tracking-[0.2em] text-accent uppercase">
            {profile.title}
          </span>
        </motion.div>

        {/* Heading */}
        <div className="flex flex-col items-center gap-4 md:gap-6">
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-foreground leading-[1.1] tracking-tighter max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {t.hero.title}
          </motion.h1>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5 }}
            className="h-px bg-accent w-12 md:w-16"
          />
        </div>

        <motion.p
          className="text-sm md:text-lg text-foreground/80 leading-relaxed max-w-xl font-normal drop-shadow-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {t.hero.tagline}
        </motion.p>

        {/* Actions */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 mt-2 md:mt-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <a
            href="#work"
            className="group w-full sm:w-auto flex items-center justify-center gap-4 px-8 py-3.5 md:px-9 md:py-4 bg-primary text-primary-foreground font-bold tracking-widest uppercase text-[9px] md:text-[10px] hover:scale-105 transition-all duration-300"
            aria-label="View my works"
          >
            {t.hero.ctaWork}
            <ArrowDownRight size={14} className="group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" aria-hidden="true" />
          </a>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto flex items-center justify-center gap-4 px-8 py-3.5 md:px-9 md:py-4 border border-foreground/30 bg-background/20 backdrop-blur-md text-foreground font-bold tracking-widest uppercase text-[9px] md:text-[10px] hover:bg-foreground hover:text-background hover:scale-105 transition-all duration-300 shadow-xl shadow-black/5"
            aria-label="View my resume"
          >
            {t.hero.ctaResume}
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 opacity-20 hidden md:flex flex-col items-center gap-4">
        <span className="text-[9px] font-mono uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-border" />
      </div>
    </section>
    </>
  );
};
