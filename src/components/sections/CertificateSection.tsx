"use client"
 
import { motion } from "motion/react";
import { Award, ExternalLink, Calendar } from "lucide-react";
import { certificates } from "@/data/certificates";
 
export const CertificateSection = () => {
  return (
    <section
      id="certificates"
      className="relative flex flex-col justify-center items-center py-24 overflow-hidden"
    >
      <div className="absolute inset-x-0 h-full max-w-[1280px] mx-auto bg-muted/30 dark:bg-muted/10 -z-10" />
      <div className="max-container flex flex-col items-center gap-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 mb-4 text-yellow-600 font-bold uppercase tracking-widest text-xs"
          >
            <Award size={16} />
            <span>Verifiable Skills</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6"
          >
            Certifications
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl px-4"
          >
            A collection of my validated expertise from global industry leaders, spanning across Cloud Computing, AI, and Fullstack Engineering.
          </motion.p>
        </div>
 
        {/* Certification Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-4">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="group glass p-8 rounded-[2rem] border border-border/50 shadow-lg hover:shadow-2xl hover:scale-[1.03] transition-all duration-500 overflow-hidden relative"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-600/5 blur-3xl -z-10 group-hover:bg-yellow-600/10 transition-colors" />
              
              <div className="flex flex-col gap-6 h-full">
                {/* Issuer Logo */}
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-white dark:bg-zinc-800 rounded-xl border border-border/50 shadow-md">
                    <img src={cert.issuerLogo} alt={cert.issuer} className="w-8 h-8 object-contain" />
                  </div>
                  <div className="px-3 py-1 bg-yellow-600/10 text-yellow-600 text-[10px] font-bold uppercase tracking-widest rounded-full border border-yellow-600/20">
                    {cert.category}
                  </div>
                </div>
 
                {/* Content */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-serif font-bold text-foreground leading-tight group-hover:text-yellow-600 transition-colors">
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                    <span>{cert.issuer}</span>
                  </div>
                </div>
 
                {/* Details Footer */}
                <div className="mt-auto pt-6 flex flex-col gap-6 border-t border-border/50">
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map(skill => (
                      <span key={skill} className="px-2 py-0.5 bg-muted/50 text-[10px] font-bold rounded-md text-muted-foreground uppercase tracking-tighter">
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="text-[10px] uppercase font-bold text-muted-foreground/60 flex items-center gap-1.5">
                      <Calendar size={12} className="text-yellow-600" />
                      {cert.date}
                    </div>
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold text-foreground hover:text-yellow-600 transition-colors"
                    >
                      Verify
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
