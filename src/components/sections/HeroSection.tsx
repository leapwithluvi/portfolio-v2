"use client"
 
import { motion } from "motion/react";
import Image from "next/image";
import { profile } from "@/data/profile";
import { ArrowDownRight} from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
 
export const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <section
      id="home"
      className="sticky top-0 h-screen flex flex-col justify-center pt-20 pb-20 overflow-hidden bg-background z-0"
    >
      <div className="max-container relative z-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        {/* RIGHT CONTENT: PORTRAIT (Top on Mobile) */}
        <motion.div
          className="order-1 lg:order-2 flex-1 relative w-full lg:w-auto flex justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Image Container with Sharp Border - PROPORTIONAL SIZE */}
          <div className="relative aspect-[4/5] w-full max-w-[300px] lg:max-w-[380px] group">
            <div className="absolute -inset-3 border border-border opacity-50 group-hover:scale-105 transition-transform duration-700" />
            {/* Image Wrapper for contained zoom */}
            <div className="absolute inset-0 border border-border z-20 overflow-hidden">
              <Image
                src={profile.image}
                alt={profile.name}
                fill
                className="object-cover transition-transform duration-1000 scale-100 group-hover:scale-110"
                priority
              />
            </div>

            {/* Technical Metadata Overlays */}
            <div className="absolute bottom-6 left-6 z-30 flex flex-col gap-1">
              <span className="text-foreground text-[9px] uppercase font-mono tracking-widest bg-background-secondary/80 px-2 py-1">
                Identity: {profile.name}
              </span>
              <span className="text-foreground text-[9px] uppercase font-mono tracking-widest bg-background-secondary/80 px-2 py-1">
                Origin: {profile.location.city}, {profile.location.region}, 
              </span>
            </div>

            {/* Sharp Corner Indicators */}
            <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-accent z-30" />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-accent z-30" />
          </div>
        </motion.div>

        {/* LEFT CONTENT: TYPOGRAPHY (Bottom on Mobile) */}
        <div className="order-2 lg:order-1 flex-1 flex flex-col gap-10 items-center lg:items-start text-center lg:text-left">
          {/* Status Badge - Enterprise Style */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 px-3 py-1.5 border border-border bg-muted/10"
          >
            <span className="text-[9px] font-bold text-accent uppercase tracking-widest">
              {t.hero.badge}
            </span>
            <div className="w-px h-3 bg-border" />
            <span className="text-label text-[9px] tracking-widest text-accent/80">
              {profile.title}
            </span>
          </motion.div>

          {/* Massive Heading */}
          <div className="relative">
            <motion.h1
              className="text-[12vw] lg:text-7xl xl:text-8xl font-serif font-bold text-foreground leading-[0.95] tracking-tighter max-w-4xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {t.hero.title}
            </motion.h1>

            <div
              className="h-[1px] bg-accent mt-8"
              style={{ width: "80px" }}
            />
          </div>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            {t.hero.tagline}
          </motion.p>

          {/* Professional Action Group */}
          <div className="flex flex-col items-center lg:items-start gap-0 mt-4 w-full">
            <motion.div
              className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1 }}
            >
              <a
                href="#work"
                className="group w-full sm:w-auto flex items-center justify-center gap-4 px-10 py-5 bg-primary text-primary-foreground font-bold tracking-[0.2em] uppercase text-[10px] hover:opacity-90 transition-all duration-500"
              >
                {t.hero.ctaWork}
                <ArrowDownRight
                  size={16}
                  className="group-hover:translate-x-1 group-hover:translate-y-1 transition-transform"
                />
              </a>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto flex items-center justify-center gap-4 px-10 py-5 border border-border text-foreground font-bold tracking-[0.2em] uppercase text-[10px] hover:bg-muted/30 transition-all duration-500"
              >
                {t.hero.ctaResume}
                <ArrowDownRight
                  size={16}
                  className="group-hover:translate-x-1 group-hover:translate-y-1 transition-transform"
                />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
