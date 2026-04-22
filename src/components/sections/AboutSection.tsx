"use client";

import { profile } from "@/data/profile";
import { useTranslation } from "@/hooks/useTranslation";
import Image from "next/image";

const phases = [
  { titleKey: "phase1Title", descKey: "phase1Desc", label: "PHASE / 01" },
  { titleKey: "phase2Title", descKey: "phase2Desc", label: "PHASE / 02" },
  { titleKey: "phase3Title", descKey: "phase3Desc", label: "PHASE / 03" },
];

export const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="relative z-20 py-16 md:py-32 overflow-hidden bg-background border-y border-border">
      <div className="max-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-center">
          {/* Image Column */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative aspect-4/5 md:aspect-square lg:aspect-4/5 overflow-hidden group">
               <div className="absolute inset-0 bg-accent/10 group-hover:bg-transparent transition-colors duration-700 z-10" />
                <Image 
                  src={profile.image} 
                  alt={profile.name} 
                  fill 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 452px"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  priority
                />
                
                {/* Decorative border */}
                <div className="absolute inset-4 border border-white/20 z-20 pointer-events-none" />
            </div>
            
            <div className="mt-8 flex flex-col gap-2">
               <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-[0.3em]">Identity_Verified</div>
               <div className="h-px w-full bg-border" />
               <div className="flex justify-between text-[9px] font-mono opacity-40 uppercase tracking-widest">
                  <span>{profile.location.city}, {profile.location.countryCode}</span>
                  <span>EST_2004</span>
               </div>
            </div>
          </div>

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
                  KNOW ME BETTER
               </h3>
               <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
                  Behind the Code
               </p>
               <p className="text-base text-foreground/80 leading-relaxed max-w-2xl">
                  {profile.name} — Specialized in building robust, performant web architectures with a focus on clean logic and minimalist aesthetics.
               </p>
            </div>

            {/* Phases Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border mt-8">
              {phases.map((phase, index) => (
                <div key={index} className="bg-background group">
                  <div className="flex flex-col gap-6 p-8 md:p-12">
                    <div className="flex items-center gap-4">
                      <div className="text-[10px] font-mono text-accent font-bold uppercase tracking-widest">
                        {phase.label}
                      </div>
                      <div className="h-px w-8 bg-accent/30" />
                    </div>
                    <h4 className="text-xl md:text-2xl font-serif font-bold text-foreground group-hover:text-accent transition-colors">
                      {(t.about as Record<string, string>)[phase.titleKey]}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
