"use client"

import { motion } from "motion/react";
import { techStack, skills } from "@/data/techstack";
import { useTranslation } from "@/hooks/useTranslation";
import { Terminal, Shield, Zap, Cpu } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

export const SkillsSection = () => {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);

  const icons = [Terminal, Cpu, Shield, Zap];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section id="skills" className="relative py-16 md:py-32 overflow-hidden bg-background border-t border-border scroll-mt-24">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(var(--foreground) 1px, transparent 0)', backgroundSize: '40px 40px' }} 
      />

      <div className="max-container relative z-10">
        {/* Header: Enterprise Dashboard Style */}
        <div className="flex flex-col gap-12 mb-20 md:mb-32">
          <div className="flex flex-col gap-6 max-w-4xl">
            <div className="flex items-center gap-4">
              <div className="text-label text-accent font-mono tracking-[0.3em] uppercase">{t.skills.badge}</div>
              <div className="h-px flex-1 bg-border/50" />
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground leading-[1.1] tracking-tighter">
              {t.skills.title}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed max-w-3xl">
                {t.skills.description}
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col items-end gap-2 text-right">
              <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-accent">Tech_Capabilities_v4.1</span>
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground opacity-50">
                {t.common.engineering} // {t.common.specialized}
              </span>
            </div>
          </div>
        </div>

        {/* The Matrix */}
        <div className="flex flex-col gap-px bg-border border border-border">
          {skills.map((category, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div 
                key={category.titleKey}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group grid grid-cols-1 lg:grid-cols-12 bg-background hover:bg-muted/5 transition-all duration-500"
              >
                {/* Index & Icon column */}
                <div className="lg:col-span-1 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-border flex lg:flex-col items-center justify-between lg:justify-start gap-8">
                   <span className="text-meta font-mono opacity-20 group-hover:opacity-100 group-hover:text-accent transition-all">0{index + 1}</span>
                   <Icon className="w-5 h-5 text-accent opacity-30 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500" />
                </div>

                {/* Category Title column */}
                <div className="lg:col-span-4 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-border flex flex-col justify-center">
                   <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground group-hover:translate-x-2 transition-transform duration-500">
                     {(t.skills as Record<string, string>)[category.titleKey]}
                   </h3>
                </div>

                {/* Skills Tags column */}
                <div className="lg:col-span-7 p-8 md:p-12 flex items-center">
                  <div className="flex flex-wrap gap-x-12 gap-y-6">
                    {category.skills.map((skill) => (
                      <div key={skill} className="flex flex-col gap-2">
                        <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-foreground font-bold hover:text-accent transition-colors cursor-default">
                          {skill}
                        </span>
                        <div className="h-0.5 w-4 bg-accent/20 group-hover:w-full transition-all duration-700" />
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Technical Stack Log */}
        <div className="mt-40 flex flex-col gap-20">
           <div className="flex items-center gap-8">
             <div className="h-px flex-1 bg-border" />
             <div className="text-[10px] font-mono opacity-30 uppercase tracking-[1em]">{t.common.dependencies}</div>
             <div className="h-px flex-1 bg-border" />
           </div>

           <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-12 items-center justify-items-center grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-1000">
             {techStack.map((tech) => (
               <a key={tech.name} href={tech.url} target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform relative w-8 h-8">
                 <Image src={tech.logo} alt={tech.name} fill className="object-contain" title={tech.name} />
               </a>
             ))}
           </div>
        </div>
      </div>
    </section>
  );
};
