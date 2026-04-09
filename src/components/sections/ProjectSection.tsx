"use client"
 
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Folders } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
 
const categories = ["All", "Website", "Backend / Boilerplate"];
 
export const ProjectSection = () => {
  const [activeTab, setActiveTab] = useState<string>("All");
 
  const filteredProjects = activeTab === "All" 
    ? projects 
    : projects.filter(p => p.typeProject.includes(activeTab));
 
  return (
    <section
      id="work"
      className="relative flex flex-col justify-center items-center py-24 overflow-hidden"
    >
      <div className="max-container flex flex-col items-center gap-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 mb-4 text-yellow-600 font-bold uppercase tracking-widest text-xs"
          >
            <Folders size={16} />
            <span>Showcase of Craft</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6"
          >
            Recent Works
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl px-4"
          >
            Explore a selection of my favorite projects, ranging from AI experimentation to full-scale web solutions.
          </motion.p>
        </div>
 
        {/* Tab Navigation Pill-style */}
        <motion.div 
          className="flex flex-wrap items-center justify-center p-2 gap-2 bg-muted/30 dark:bg-muted/10 rounded-full border border-border/50 glass animate-in fade-in duration-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {categories.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                activeTab === tab 
                  ? "bg-yellow-600 text-white shadow-lg shadow-yellow-600/20" 
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {tab}
            </button>
          ))}
        </motion.div>
 
        {/* Project Grid */}
        <div className="w-full px-4 mt-8">
          <motion.div 
             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mx-auto"
             layout
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.nameProject}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group"
                >
                  <ProjectCard data={project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
        
        {/* Footer Call to Action (SaaS style) */}
        <motion.div
          className="mt-24 p-12 w-full max-w-6xl rounded-[3rem] glass flex flex-col items-center gap-6 relative overflow-hidden group shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="absolute inset-0 bg-yellow-600/[0.03] backdrop-blur-3xl -z-10" />
          
          <h3 className="text-3xl md:text-5xl font-serif font-bold text-center">Interested in Collaboration?</h3>
          <p className="text-lg text-muted-foreground text-center max-w-lg mb-4">Let&apos;s build something impactful together. I&apos;m currently open to freelance opportunities and full-time positions.</p>
          
          <a
            href="mailto:luviaprilyansyahg@gmail.com"
            className="px-10 py-5 bg-yellow-600 text-white rounded-full font-bold shadow-xl shadow-yellow-600/20 hover:bg-yellow-700 hover:scale-105 transition-all duration-300"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};
