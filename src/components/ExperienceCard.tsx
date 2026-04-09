"use client"
 
import React from "react";
import Image from "next/image";
import { Experience } from "@/data/experience";
import { motion } from "motion/react";
import { Calendar, MapPin, Briefcase } from "lucide-react";
 
interface ExperienceCardProps {
  data: Experience;
}
 
export const ExperienceCard: React.FC<ExperienceCardProps> = ({ data }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className="group glass p-8 rounded-[2.5rem] shadow-xl border border-border/50 flex flex-col gap-6 relative overflow-hidden transition-all duration-300"
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-600/5 blur-3xl -z-10 group-hover:bg-yellow-600/10 transition-colors" />
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
          <div className="p-3 bg-foreground/5 rounded-2xl border border-border group-hover:scale-110 transition-transform shadow-lg">
            <Image 
              src={data.image} 
              alt={data.company} 
              width={48} 
              height={48} 
              className="w-12 h-12 h-auto object-contain rounded-xl" 
            />
          </div>
          
          <div className="flex flex-col text-center sm:text-left gap-1">
            <h3 className="text-2xl font-serif font-bold text-foreground">
              {data.role}
            </h3>
            <div className="flex items-center justify-center sm:justify-start gap-2 text-sm text-yellow-600 font-bold tracking-tight">
              <Briefcase size={14} />
              {data.company}
            </div>
          </div>
        </div>
 
        <div className="flex flex-col items-center sm:items-end gap-1.5 pt-1">
          <div className="px-3 py-1 bg-background/50 border border-border/50 rounded-full text-[10px] font-bold tracking-widest uppercase flex items-center gap-1.5 text-muted-foreground whitespace-nowrap">
            <Calendar size={12} className="text-yellow-600" />
            {data.duration}
          </div>
          <div className="flex items-center gap-1.5 text-[10px] font-bold text-muted-foreground tracking-widest uppercase items-center opacity-60">
             <MapPin size={12} />
             {data.location}
          </div>
        </div>
      </div>
 
      {/* Details List */}
      <div className="flex flex-col gap-4">
        <p className="text-sm text-muted-foreground italic leading-relaxed pl-4 border-l-2 border-yellow-600/20">
          {data.summary}
        </p>
        
        <ul className="flex flex-col gap-3">
          {data.details.map((detail) => (
            <li
              key={detail.id}
              className="group/item flex items-start gap-3"
            >
              <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-yellow-600/30 group-hover/item:bg-yellow-600 transition-all border border-yellow-600 animate-pulse" />
              <p className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors leading-relaxed">
                 {detail.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};
