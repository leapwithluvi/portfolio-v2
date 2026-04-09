"use client"

import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { Project } from "@/data/projects";
import Image from "next/image";
import { CardSpotlight } from "@/components/ui/CardSpotlight";

interface ProjectCardProps {
  data: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ data }) => {
  const {
    nameProject,
    typeProject,
    deskProject,
    status,
    linkRepo,
    srcImg,
    imgAlt,
    stacks,
  } = data;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group flex flex-col h-full"
    >
      <CardSpotlight className="h-full flex flex-col glass rounded-[2rem] overflow-hidden border border-border shadow-sm hover:shadow-2xl transition-all duration-500">
        {/* Image Container */}
        <div className="relative aspect-video overflow-hidden p-3 pb-0">
          <Image
            src={srcImg}
            alt={imgAlt}
            width={600}
            height={337}
            className="w-full h-full object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 rounded-2xl m-3" />
          
          {/* Type & Status Badges */}
          <div className="absolute top-6 left-6 right-6 flex justify-between items-start">
            <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-background/80 backdrop-blur-md text-foreground rounded-full border border-border/50 shadow-sm">
              {typeProject}
            </span>
            <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full border border-border/50 bg-background/80 backdrop-blur-md text-[10px] font-bold uppercase tracking-tighter shadow-sm ${status === 'Complete' ? 'text-teal-600' : 'text-yellow-600'}`}>
              <div className={`w-1.5 h-1.5 rounded-full ${status === 'Complete' ? 'bg-teal-600' : 'bg-yellow-600 animate-pulse'}`} />
              {status}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-8">
          <div className="mb-4">
            <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground group-hover:text-yellow-600 transition-colors line-clamp-2">
              {nameProject}
            </h3>
          </div>
          
          <p className="text-sm text-muted-foreground line-clamp-3 mb-6 leading-relaxed">
            {deskProject}
          </p>

          {/* Tech Stack */}
          <div className="mt-auto">
            <div className="flex flex-wrap gap-2 mb-8">
              {stacks.map((stack) => (
                <span
                  key={stack}
                  className="text-[10px] font-semibold px-2.5 py-1 bg-muted/50 text-muted-foreground rounded-lg border border-border/50"
                >
                  {stack}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex items-center gap-4 pt-6 border-t border-border/50">
              <a
                href={linkRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-foreground text-background rounded-full hover:bg-yellow-600 hover:text-white transition-all duration-300 flex items-center justify-center relative z-10"
                title="Visit Repository"
              >
                <svg 
                  viewBox="0 0 24 24" 
                  width="18" 
                  height="18" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  fill="none" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a
                href={linkRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-6 py-3 border border-border text-foreground rounded-full text-xs font-bold hover:bg-muted transition-all duration-300 flex items-center justify-center gap-2 relative z-10"
              >
                Visit Repository
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </CardSpotlight>
    </motion.div>
  );
};
