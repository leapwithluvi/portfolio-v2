"use client"

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink} from "lucide-react";
import { certificates } from "@/data/certificates";
import { useTranslation } from "@/hooks/useTranslation";
import Image from "next/image";
 
const categories = ["All", ...Array.from(new Set(certificates.map((c) => c.category)))];

export const CertificateSection = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCertificates = activeCategory === "All" 
    ? certificates 
    : certificates.filter(cert => cert.category === activeCategory);

  return (
    <section id="certificates" className="relative py-20 md:py-32 overflow-hidden bg-background border-t border-border">
      <div className="max-container">
        <div className="flex flex-col gap-12 mb-12 md:mb-24">
          <div className="text-label text-accent font-bold uppercase tracking-widest">{t.certificates.badge}</div>
          <h2 className="text-4xl md:text-8xl font-serif font-bold text-foreground leading-[0.8] tracking-tighter">
            {t.certificates.title}
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl font-light leading-relaxed">
            {t.certificates.description}
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4 mb-16 border-b border-border pb-8">
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-all relative py-2 ${
                        activeCategory === category 
                        ? "text-accent" 
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    aria-label={`Filter by ${category}`}
                >
                    {category}
                    {activeCategory === category && (
                        <motion.div 
                            layoutId="activeTab"
                            className="absolute -bottom-8.25 left-0 right-0 h-0.5 bg-accent z-10"
                            aria-hidden="true"
                        />
                    )}
                </button>
            ))}
        </div>

        <div className="flex flex-col border-t border-border">
          <AnimatePresence mode="popLayout">
            {filteredCertificates.map((cert, index) => (
              <motion.div
                key={cert.title}
                layout
                initial={{ opacity: 0, y: typeof window !== 'undefined' && window.innerWidth < 768 ? 0 : 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="group grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 py-8 md:py-16 border-b border-border items-center hover:bg-muted/30 transition-colors duration-500"
              >
                <div className="lg:col-span-1 text-meta opacity-60 group-hover:opacity-100 uppercase font-mono" aria-hidden="true">
                   {index < 9 ? `0${index + 1}` : index + 1}
                </div>
                
                <div className="lg:col-span-1 flex justify-center">
                   <div className="relative w-12 h-12 grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-100 scale-90 group-hover:scale-110">
                     <Image src={cert.issuerLogo} alt={`${cert.issuer} logo`} fill sizes="80px" className="object-contain" />
                   </div>
                </div>

                <div className="lg:col-span-4 flex flex-col gap-2">
                  <h3 className="text-2xl md:text-3xl font-serif font-bold group-hover:text-accent transition-colors tracking-tight">
                    {cert.title}
                  </h3>
                  <div className="text-meta opacity-80 uppercase tracking-widest text-[9px] font-bold">{cert.issuer}</div>
                </div>

                <div className="lg:col-span-4 flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <span key={skill} className="text-[9px] font-mono border border-border px-2 py-0.5 opacity-60 group-hover:opacity-100 transition-opacity">
                      #{skill.replace(/\s+/g, '')}
                    </span>
                  ))}
                </div>

                <div className="lg:col-span-2 flex justify-end items-center gap-6">
                   <div className="text-meta opacity-60 font-mono text-[10px]">{cert.date}</div>
                   <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 border border-border hover:bg-foreground hover:text-background transition-colors"
                      aria-label={`Verify ${cert.title} certificate from ${cert.issuer}`}
                    >
                      <ExternalLink size={14} aria-hidden="true" />
                    </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
