"use client";

import Image from "next/image";
import { profile } from "@/data/profile";
import { statistics } from "@/data/experience";
import { useTranslation } from "@/hooks/useTranslation";
import { motion } from "motion/react";

export const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="relative z-20 py-16 md:py-32 overflow-hidden bg-background border-y border-border"
    >
      <div className="max-container flex flex-col gap-20 md:gap-32">
        
        {/* Top Section: Narrative & Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Portrait Column */}
          <motion.div 
            className="lg:col-span-5 order-2 lg:order-1"
            initial={{ opacity: 0, x: typeof window !== 'undefined' && window.innerWidth < 768 ? 0 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative aspect-4/5 w-full max-w-120 mx-auto border border-border p-3 bg-muted/5 group shadow-2xl shadow-accent/5 transition-all duration-700 hover:shadow-accent/10">
              <div className="relative w-full h-full overflow-hidden bg-muted">
                <Image 
                  src={profile.image} 
                  alt={profile.name} 
                  fill 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 452px"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  priority
                />
              </div>
              {/* Technical Accents */}
              <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-accent/40" />
              <div className="absolute bottom-0 left-0 w-12 h-12 border-b border-l border-accent/40" />
            </div>
          </motion.div>

          {/* Text Content Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col gap-10">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-px bg-accent" />
                <div className="text-[10px] font-mono text-accent font-bold uppercase tracking-widest">
                  {t.about.badge} / 01
                </div>
              </div>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground leading-tight tracking-tight">
                {t.about.title}
              </h2>
            </div>

            <div className="flex flex-col gap-8">
               <h3 className="text-2xl font-serif font-bold text-foreground/80 uppercase tracking-widest">
                 {profile.name}
               </h3>
               <p className="text-lg md:text-2xl text-muted-foreground leading-relaxed font-light">
                 {t.about.description}
               </p>
            </div>

            {/* Phases / Briefs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-border/50">
               <div className="flex flex-col gap-4">
                  <div className="text-[10px] font-mono text-accent uppercase tracking-widest font-bold">{t.about.phase1}</div>
                  <h4 className="text-base font-bold tracking-tight uppercase">{t.about.phase1Title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t.about.phase1Desc}
                  </p>
               </div>
               <div className="flex flex-col gap-4">
                  <div className="text-[10px] font-mono text-accent uppercase tracking-widest font-bold">{t.about.phase2}</div>
                  <h4 className="text-base font-bold tracking-tight uppercase">{t.about.phase2Title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t.about.phase2Desc}
                  </p>
               </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: The 4 Favorite Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
          {statistics.map((stat, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: typeof window !== 'undefined' && window.innerWidth < 768 ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-background p-10 md:p-12 flex flex-col gap-6 group hover:bg-muted/10 transition-all duration-500 relative overflow-hidden"
            >
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 group-hover:text-accent transition-all">
                <span className="text-[10px] font-mono">0{idx + 1}</span>
              </div>
              
              <div className="flex flex-col gap-2">
                <span className="text-6xl md:text-7xl font-serif font-bold text-foreground group-hover:text-accent transition-colors duration-500">
                  {stat.value}
                </span>
                <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.3em] text-muted-foreground group-hover:text-foreground transition-colors">
                  {(t.about as Record<string, string>)[stat.labelKey]}
                </span>
              </div>

              {/* Progress Line Detail */}
              <div className="mt-4 h-0.5 w-8 bg-accent/20 group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
