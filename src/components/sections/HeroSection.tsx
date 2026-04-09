"use client"
 
import { motion } from "motion/react";
import { ArrowUpRight, Download, Code2 } from "lucide-react";
import Image from "next/image";
import { profile } from "@/data/profile";
 
const HeroImage = motion(Image);
 
export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative flex justify-center items-center min-h-[90vh] pt-32 pb-16 overflow-hidden"
    >
      {/* Background stays clean to respect Global Vertical Dividers */}
 
      <div className="max-container flex flex-col lg:flex-row items-center justify-between gap-12 w-full">
        
        {/* LEFT COLUMN: Text Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-8 max-w-2xl flex-1">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-2 rounded-full border border-yellow-600/30 bg-yellow-600/5 text-yellow-600 text-xs md:text-sm font-bold backdrop-blur-sm"
          >
            <Code2 size={16} />
            <span>{profile.title}</span>
          </motion.div>
 
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-[1.1] tracking-tight text-foreground"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Building <span className="text-yellow-600">Intelligent</span> Digital Solutions for the Modern Web.
          </motion.h1>
 
          <motion.p
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl text-center lg:text-left md:text-wrap text-justify md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            I&apos;m <span className="text-foreground font-semibold">{profile.name}</span>, a Fullstack Developer specializing in building high-performance, intelligent web applications with a focus on seamless user experiences.
          </motion.p>
 
          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-4 bg-yellow-600 text-white rounded-full font-bold shadow-lg shadow-yellow-600/20 hover:bg-yellow-700 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              View My Work
              <ArrowUpRight size={20} />
            </a>
            <button className="px-8 py-4 bg-background border border-border text-foreground rounded-full font-bold glass hover:bg-muted transition-all duration-300 flex items-center justify-center gap-2">
              <Download size={20} />
              Resume
            </button>
          </motion.div>
        </div>
 
        {/* RIGHT COLUMN: Refined Portrait Image */}
        <motion.div
          className="relative w-full max-w-sm lg:max-w-[400px] flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          <div className="relative group">
            <div className="relative glass rounded-[3rem] p-4 shadow-2xl overflow-hidden aspect-[4/5] w-[280px] md:w-[320px] lg:w-[360px]">
              <HeroImage
                src={profile.image}
                alt={profile.name}
                fill
                className="w-full h-full object-cover rounded-[2rem] filter brightness-95 grayscale-[10%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
            </div>
          </div>
 
          {/* Floating Minimalist Stat - RE-POSITIONED INSIDE BOUNDARIES */}
          <motion.div 
            className="absolute bottom-4 right-4 flex flex-col p-4 glass rounded-2xl shadow-xl z-20 backdrop-blur-md"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
          >
            <span className="text-3xl font-bold text-yellow-600">3+</span>
            <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">Years of Craft</span>
          </motion.div>
        </motion.div>
 
      </div>
    </section>
  );
};
