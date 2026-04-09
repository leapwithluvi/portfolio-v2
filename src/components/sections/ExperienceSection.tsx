"use client"
 
import { motion } from "motion/react";
import { Workflow, Award, Calendar, MapPin, Briefcase } from "lucide-react";
import { experiences, statistics } from "@/data/experience";
import { ExperienceCard } from "@/components/ExperienceCard";
 
export const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="relative flex flex-col justify-center items-center py-24 overflow-hidden"
    >
      <div className="absolute inset-x-0 h-full max-w-[1280px] mx-auto bg-muted/30 dark:bg-muted/10 -z-10" />
      <div className="max-container flex flex-col items-center gap-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 mb-4 text-yellow-600 font-bold uppercase tracking-widest text-xs"
          >
            <Workflow size={16} strokeWidth={1.5} />
            <span>Industrial Experience</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6"
          >
            My Experience
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl px-4 text-justify md:text-center"
          >
            A combined look at my professional journey and educational milestones. From developing early web solutions to exploring modern AI applications.
          </motion.p>
        </div>
 
        {/* Stats Summary Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 w-full max-w-6xl px-4">
          {statistics.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index }}
              className="flex flex-col items-center text-center p-6 md:p-8 glass rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 h-full"
            >
              <span className="text-4xl md:text-5xl font-serif font-bold text-yellow-600">{item.value}</span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground mt-4 leading-relaxed">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
 
        <div className="w-full flex flex-col gap-6 px-4">
          <div className="grid grid-cols-1 gap-6 w-full max-w-6xl mx-auto">
            {experiences.map((exp, index) => (
               <motion.div
                 key={index}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.4 + index * 0.1 }}
               >
                 <ExperienceCard data={exp} />
               </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
