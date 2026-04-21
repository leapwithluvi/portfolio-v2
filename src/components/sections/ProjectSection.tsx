"use client"

import { motion } from "motion/react";
import { ArrowDownRight } from "lucide-react";
import { projects } from "@/data/projects";
import { useTranslation } from "@/hooks/useTranslation";

export const ProjectSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="work" className="relative py-20 md:py-32 overflow-hidden bg-background">
      <div className="max-container">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-16 md:mb-24">
          <div className="flex flex-col gap-10 max-w-4xl">
            <div className="text-label text-accent">{t.projects.badge}</div>
            <h2 className="text-6xl md:text-8xl font-serif font-bold text-foreground leading-[0.8] tracking-tighter">
              {t.projects.title}
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
              {t.projects.description}
            </p>
          </div>
          <div className="text-meta opacity-30 text-right uppercase tracking-[0.5em] hidden lg:block">
            Curated <br /> Selected_Architectures
          </div>
        </div>

        {/* Featured Selection Label */}
        <div className="mb-8 flex items-center gap-4">
           <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent">{t.projects.featured}</div>
           <div className="h-px w-12 bg-accent/50" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border">
          {projects.slice(0, 2).map((project, index) => (
            <motion.div 
              key={project.nameProject}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="bg-background group relative aspect-square md:aspect-[4/3] overflow-hidden flex flex-col p-8 md:p-12 hover:bg-muted/10 transition-colors"
            >
               <div className="absolute top-8 right-8 text-meta opacity-30 group-hover:opacity-100 transition-opacity">
                 0{index + 1}
               </div>
               
               <div className="flex flex-col gap-6 mt-auto">
                 <div className="flex flex-col gap-2">
                    <div className="text-meta uppercase tracking-widest text-accent/60">{project.classification}</div>
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold group-hover:text-accent transition-colors leading-none tracking-tighter">
                      {project.nameProject}
                    </h3>
                 </div>
                 
                 <p className="text-muted-foreground text-sm line-clamp-2 max-w-sm leading-relaxed">
                   {project.deskProject}
                 </p>
                 
                 <div className="flex gap-6 mt-4">
                   <a 
                     href={project.linkRepo} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-label text-[10px] border-b border-border pb-1 hover:text-accent hover:border-accent transition-all font-bold uppercase tracking-[0.2em]"
                   >
                     {t.projects.inspect}
                   </a>
                 </div>
               </div>
            </motion.div>
          ))}
        </div>

        {/* Technical Architecture Inventory (Table View) */}
        <div className="mt-16 md:mt-32">
          <div className="flex items-center gap-4 mb-8 md:mb-10">
             <div className="text-meta opacity-30 uppercase tracking-[0.3em]">{t.projects.inventory}</div>
             <div className="h-px flex-1 bg-border/50" />
          </div>
          
          <div className="flex flex-col border-t border-border">
            {/* Header - Hidden on Mobile */}
            <div className="hidden lg:grid grid-cols-12 gap-4 py-6 border-b border-border text-[10px] font-bold uppercase tracking-[0.2em] opacity-40 px-4">
              <div className="col-span-1">{t.projects.year}</div>
              <div className="col-span-4">{t.projects.projectTitle}</div>
              <div className="col-span-2">{t.projects.classification}</div>
              <div className="col-span-4">{t.projects.stack}</div>
              <div className="col-span-1 text-right">{t.projects.source}</div>
            </div>

            {projects.map((project) => (
              <motion.div 
                key={project.nameProject}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="group grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 py-4 md:py-6 border-b border-border items-center hover:bg-muted/30 transition-all px-4"
              >
                <div className="lg:col-span-1 font-mono text-[10px] opacity-40 group-hover:opacity-100 transition-opacity">
                  {project.year}
                </div>
                
                <div className="lg:col-span-4 flex flex-col gap-1">
                  <h4 className="text-sm font-bold uppercase tracking-tight group-hover:text-accent transition-colors">
                    {project.nameProject}
                  </h4>
                  <div className="lg:hidden text-[10px] opacity-40 uppercase tracking-widest">{project.classification}</div>
                </div>

                <div className="hidden lg:flex lg:col-span-2 text-[10px] uppercase tracking-widest opacity-60">
                  {project.classification}
                </div>

                <div className="lg:col-span-4 flex flex-wrap gap-x-4 gap-y-1">
                  {project.stacks.slice(0, 4).map((stack) => (
                    <span key={stack} className="text-[10px] font-mono opacity-30 group-hover:opacity-100 transition-opacity">
                      /{stack.replace(/\s+/g, '_')}
                    </span>
                  ))}
                  {project.stacks.length > 4 && (
                    <span className="text-[10px] font-mono opacity-20">+{project.stacks.length - 4}</span>
                  )}
                </div>

                <div className="lg:col-span-1 flex justify-end">
                  <a 
                    href={project.linkRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border border-border/50 hover:bg-foreground hover:text-background transition-colors"
                  >
                    <ArrowDownRight size={12} className="-rotate-45" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-24 md:mt-48 pt-16 md:pt-32 border-t border-border flex flex-col md:flex-row justify-between items-center gap-16">
          <div className="text-4xl md:text-6xl font-serif font-bold max-w-2xl text-center md:text-left leading-none tracking-tighter">
            {t.projects.footerTitle}
          </div>
          <div className="flex flex-col items-center md:items-start gap-8 max-w-sm">
            <p className="text-muted-foreground text-center md:text-left leading-relaxed">
              {t.projects.footerDescription}
            </p>
            <a 
              href="#contact" 
              className="group flex items-center gap-4 px-10 py-5 bg-primary text-primary-foreground font-bold tracking-[0.2em] uppercase text-[10px] hover:opacity-90 transition-all duration-500"
            >
              {t.contact.getInTouch}
              <ArrowDownRight size={16} className="group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
