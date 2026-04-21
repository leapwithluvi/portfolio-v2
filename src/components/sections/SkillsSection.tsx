"use client"

import { motion } from "motion/react";
import { techStack, skills } from "@/data/techstack";
import { useTranslation } from "@/hooks/useTranslation";

export const SkillsSection = () => {
  const { t } = useTranslation();

  return (
    <section id="skills" className="relative py-20 md:py-32 overflow-hidden bg-background border-t border-border">
      <div className="max-container">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-12 md:mb-24">
          <div className="flex flex-col gap-10 max-w-3xl">
            <div className="text-label text-accent">{t.skills.badge}</div>
            <h2 className="text-6xl md:text-8xl font-serif font-bold text-foreground leading-[0.8] tracking-tighter">
              {t.skills.title}
            </h2>
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              {t.skills.description}
            </p>
          </div>
          <div className="text-meta opacity-30 text-right uppercase tracking-[0.5em] hidden lg:block">
            {t.common.engineering} <br /> {t.common.specialized}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
          {skills.map((category, index) => {
            return (
              <motion.div 
                key={category.titleKey}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="bg-background p-12 flex flex-col gap-8 hover:bg-muted/10 transition-colors group"
              >
                <div className="flex justify-between items-start">
                   <h3 className="text-3xl font-serif font-bold group-hover:text-accent transition-colors">
                     {(t.skills as any)[category.titleKey]}
                   </h3>
                   <span className="text-meta opacity-20">0{index + 1}</span>
                </div>
                
                <div className="flex flex-wrap gap-2 text-justify">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-meta uppercase tracking-widest border border-border px-3 py-1 bg-secondary/50 group-hover:border-accent/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Technical Stack Log */}
        <div className="mt-32 pt-24 border-t border-border flex flex-col gap-12">
           <div className="text-label opacity-30 text-center tracking-[0.8em]">{t.common.dependencies}</div>
           <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-12 items-center justify-items-center opacity-40 hover:opacity-100 transition-opacity duration-1000">
             {techStack.map((tech) => (
               <a key={tech.name} href={tech.url} target="_blank" rel="noopener noreferrer" className="grayscale hover:grayscale-0 transition-all hover:scale-110">
                 <img src={tech.logo} alt={tech.name} className="w-8 h-8 object-contain" title={tech.name} />
               </a>
             ))}
           </div>
        </div>
      </div>
    </section>
  );
};
