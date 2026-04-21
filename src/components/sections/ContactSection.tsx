"use client"

import { motion } from "motion/react";
import { socials } from "@/data/socials";
import { useTranslation } from "@/hooks/useTranslation";

export const ContactSection = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="relative py-32 md:py-64 overflow-hidden bg-background">
      <div className="max-container flex flex-col items-center text-center gap-12 md:gap-24">
        <div className="flex flex-col gap-10">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-label text-accent"
          >
            {t.contact.badge}
          </motion.div>
          
          <div className="overflow-hidden pb-4">
            <motion.h2 
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[12vw] md:text-[10vw] font-serif font-bold text-foreground leading-[0.9] tracking-tighter"
            >
              {t.contact.title}
            </motion.h2>
          </div>
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl md:text-3xl text-muted-foreground max-w-3xl font-light leading-relaxed"
        >
          {t.contact.description}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col md:flex-row gap-0 mt-12 w-full max-w-5xl border border-border"
        >
           <div className="flex-1 flex flex-col gap-6 border-b md:border-b-0 md:border-r border-border p-8 md:p-16 hover:bg-muted/10 transition-all group">
              <span className="text-label opacity-30 text-left">Primary_Channel</span>
              <a 
                href={socials.find(s => s.name === "Email")?.href || "#"} 
                className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold hover:text-accent transition-colors truncate text-left tracking-tighter"
              >
                {socials.find(s => s.name === "Email")?.href.replace('mailto:', '') || "leapwithluvi@gmail.com"}
              </a>
           </div>
           
           <div className="flex-1 flex flex-col gap-6 p-8 md:p-16 hover:bg-muted/10 transition-all group">
              <span className="text-label opacity-30 text-left">Digital_Nodes</span>
              <div className="flex flex-wrap gap-x-12 gap-y-6 justify-start">
                 {socials.filter(s => s.name !== "Email").map((social) => (
                    <a 
                      key={social.name} 
                      href={social.href} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-xl md:text-2xl lg:text-3xl font-serif font-bold hover:text-accent transition-colors tracking-tighter"
                    >
                      {social.name}
                    </a>
                 ))}
              </div>
           </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           transition={{ delay: 0.8 }}
        >
           <a
              href={socials.find(s => s.name === "Email")?.href || "#"}
              className="group flex items-center gap-6 px-12 py-6 md:px-24 md:py-10 bg-primary text-primary-foreground font-bold tracking-[0.4em] uppercase text-xs hover:opacity-90 transition-all duration-700"
           >
              {t.contact.establish}
              <div className="w-2 h-2 bg-background rounded-full group-hover:bg-background animate-pulse" />
           </a>
        </motion.div>
      </div>
    </section>
  );
};
