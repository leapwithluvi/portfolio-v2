"use client"
 
import { motion } from "motion/react";
import { Workflow, Award, Calendar, MapPin, Briefcase } from "lucide-react";
import { experiences, statistics } from "@/data/experience";
import { ExperienceCard } from "@/components/ExperienceCard";
 
export const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="relative py-24 overflow-hidden border-t border-border/50"
    >
      <div className="absolute inset-0 bg-muted/5 -z-10" />
      
      <div className="max-container px-4">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* LEFT SIDE: Sticky Header & Stats */}
          <div className="lg:sticky lg:top-32 lg:w-1/3 flex flex-col gap-10">
            <div className="flex flex-col gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2 text-yellow-600 font-bold uppercase tracking-widest text-xs"
              >
                <Workflow size={16} strokeWidth={1.5} />
                <span>Career Journey</span>
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-foreground leading-[1.1]"
              >
                Work & <br />
                <span className="text-muted-foreground/30">Experience</span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-muted-foreground leading-relaxed text-justify lg:text-left"
              >
                A documented trail of my professional evolution, focusing on building high-performance systems and exploring the boundaries of AI integration in modern web architectures.
              </motion.p>
            </div>

            {/* Stats Summary in Sticky Column */}
            <div className="grid grid-cols-2 gap-4">
              {statistics.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="p-6 glass rounded-2xl flex flex-col gap-1 border border-border/40"
                >
                  <span className="text-3xl font-serif font-bold text-yellow-600">{item.value}</span>
                  <span className="text-[9px] uppercase font-bold tracking-widest text-muted-foreground leading-tight">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: Scrollable Content */}
          <div className="lg:w-2/3 flex flex-col gap-12 w-full">
            <div className="flex flex-col gap-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.1 * index,
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <ExperienceCard data={exp} />
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
