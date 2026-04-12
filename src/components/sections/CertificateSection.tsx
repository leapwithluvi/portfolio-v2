"use client"

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink} from "lucide-react";
import { certificates } from "@/data/certificates";
import { useTranslation } from "@/hooks/useTranslation";
 
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
          <div className="text-label text-amber-500">{t.certificates.badge}</div>
          <h2 className="text-6xl md:text-8xl font-serif font-bold text-foreground leading-[0.8] tracking-tighter">
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
                        ? "text-amber-500" 
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                    {category}
                    {activeCategory === category && (
                        <motion.div 
                            layoutId="activeTab"
                            className="absolute -bottom-[33px] left-0 right-0 h-0.5 bg-amber-500 z-10"
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
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="group grid grid-cols-1 lg:grid-cols-12 gap-8 py-10 md:py-16 border-b border-border items-center hover:bg-muted/30 transition-colors duration-500"
              >
                <div className="lg:col-span-1 text-meta opacity-30 group-hover:opacity-100 uppercase">
                  {index < 9 ? `0${index + 1}` : index + 1}
                </div>
                
                <div className="lg:col-span-1 flex justify-center">
                   <img src={cert.issuerLogo} alt={cert.issuer} className="w-10 h-10 object-contain grayscale group-hover:grayscale-0 transition-all opacity-50 group-hover:opacity-100" />
                </div>

                <div className="lg:col-span-4 flex flex-col gap-2">
                  <h3 className="text-2xl md:text-3xl font-serif font-bold group-hover:text-amber-500 transition-colors tracking-tight">
                    {cert.title}
                  </h3>
                  <div className="text-meta opacity-50 uppercase tracking-widest text-[9px]">{cert.issuer}</div>
                </div>

                <div className="lg:col-span-4 flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <span key={skill} className="text-[9px] font-mono border border-border px-2 py-0.5 opacity-40 group-hover:opacity-100 transition-opacity">
                      #{skill.replace(/\s+/g, '')}
                    </span>
                  ))}
                </div>

                <div className="lg:col-span-2 flex justify-end items-center gap-6">
                   <div className="text-meta opacity-30 font-mono text-[10px]">{cert.date}</div>
                   <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 border border-border hover:bg-foreground hover:text-background transition-colors"
                    >
                      <ExternalLink size={14} />
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

