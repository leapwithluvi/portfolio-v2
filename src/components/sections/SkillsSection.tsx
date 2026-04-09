"use client";
 
import { motion } from "motion/react";
import {
  Clock3,
  LayoutPanelLeft,
  Cpu,
  Network,
  ShieldCheck,
} from "lucide-react";
import { techStack, skills } from "@/data/techstack";
import { GridPattern } from "@/components/ui/grid-pattern";
 
const IconMap = {
  LayoutPanelLeft: LayoutPanelLeft,
  Cpu: Cpu,
  Network: Network,
  ShieldCheck: ShieldCheck,
};
 
export const SkillsSection = () => {
  // Split tech stack into two for Dual Marquee (Enterprise Style)
  const firstHalf = techStack.slice(0, Math.ceil(techStack.length / 2));
  const secondHalf = techStack.slice(Math.ceil(techStack.length / 2));
 
  // Triple the items for seamless loop
  const marquee1 = [...firstHalf, ...firstHalf, ...firstHalf];
  const marquee2 = [...secondHalf, ...secondHalf, ...secondHalf];
 
  return (
    <section
      id="skills"
      className="relative flex flex-col justify-center items-center py-24 overflow-hidden"
    >
      <div className="absolute inset-x-0 h-full max-w-[1088px] mx-auto overflow-hidden -z-10">
        <GridPattern
          width={45}
          height={45}
          x={1}
          y={1}
          className="[mask-image:radial-gradient(ellipse_at_center,white_30%,transparent_90%)] stroke-gray-900/10 dark:stroke-white/10"
        />
      </div>
 
      <div className="max-container flex flex-col items-center gap-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 mb-4 text-yellow-600 font-bold uppercase tracking-widest text-xs"
          >
            <Clock3 size={16} />
            <span>Modern Tech Stack</span>
          </motion.div>
 
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6"
          >
            My Tech Arsenal
          </motion.h2>
 
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl"
          >
            A high-performance architecture built with the best tools in the industry.
          </motion.p>
        </div>
 
        {/* Skills Bento Cloud */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full px-4">
          {skills.map((category, index) => {
            const IconComponent = IconMap[category.icon as keyof typeof IconMap];
            
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="glass p-6 md:p-8 rounded-3xl shadow-xl flex flex-col gap-6 group hover:translate-y-[-4px] transition-all duration-300 border border-border/50"
              >
                <div className={`p-4 rounded-2xl w-fit flex items-center justify-center transition-all duration-500 group-hover:scale-110 ${
                  index % 2 === 0 ? "bg-yellow-600/5 text-yellow-600 border border-yellow-600/10" : "bg-teal-600/5 text-teal-600 border border-teal-600/10"
                }`}>
                  {IconComponent && <IconComponent size={32} strokeWidth={1.5} />}
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold mb-4">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-background/50 border border-border/40 rounded-full text-xs font-semibold text-muted-foreground group-hover:text-foreground transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
 
        {/* DUAL MOVING MARQUEE */}
        <div className="relative w-full mt-16 flex flex-col gap-6">
          {/* Masked Edges for Fade Effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
 
          {/* Row 1: Moves Left */}
          <div className="flex overflow-hidden">
            <motion.div
              className="flex items-center gap-6 whitespace-nowrap"
              animate={{ x: ["0%", "-33.33%"] }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 35,
              }}
              whileHover={{ animationPlayState: "paused" }}
            >
              {marquee1.map((stack, idx) => (
                <div
                  key={`m1-${idx}`}
                  className="flex items-center gap-3 px-6 py-4 glass rounded-2xl border border-border/50 opacity-40 grayscale hover:opacity-100 hover:grayscale-0 hover:scale-105 transition-all duration-500 cursor-default"
                >
                  <img src={stack.logo} alt={stack.name} className="w-8 h-8 object-contain" />
                  <span className="text-xs font-bold uppercase tracking-widest text-foreground">{stack.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
 
          {/* Row 2: Moves Right */}
          <div className="flex overflow-hidden">
            <motion.div
              className="flex items-center gap-6 whitespace-nowrap"
              animate={{ x: ["-33.33%", "0%"] }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 40,
              }}
              whileHover={{ animationPlayState: "paused" }}
            >
              {marquee2.map((stack, idx) => (
                <div
                  key={`m2-${idx}`}
                  className="flex items-center gap-3 px-6 py-4 glass rounded-2xl border border-border/50 opacity-40 grayscale hover:opacity-100 hover:grayscale-0 hover:scale-105 transition-all duration-500 cursor-default"
                >
                  <img src={stack.logo} alt={stack.name} className="w-8 h-8 object-contain" />
                  <span className="text-xs font-bold uppercase tracking-widest text-foreground">{stack.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
 
        {/* Full Stacks Static Grid (Fixed individual hover) */}
        <div className="w-full mt-12 grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4 px-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {techStack.map((stack, index) => (
            <div
              key={index}
              title={stack.name}
              className="flex justify-center flex-col items-center group cursor-default"
            >
              <img
                src={stack.logo}
                alt={stack.name}
                className="w-8 h-8 opacity-40 transition-all duration-300 grayscale group-hover:opacity-100 group-hover:grayscale-0 scale-90 group-hover:scale-110"
              />
              <span className="text-[10px] mt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 uppercase tracking-widest font-bold">
                {stack.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
