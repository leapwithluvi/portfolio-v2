"use client";

import { motion } from "motion/react";
import { MapPin } from "lucide-react";
import { experiences } from "@/data/experience";
import { useTranslation } from "@/hooks/useTranslation";

export const ExperienceSection = () => {
  const { t } = useTranslation();

  return (
    <section
      id="experience"
      className="relative py-20 md:py-32 overflow-hidden bg-background"
    >
      <div className="max-container">
        <div className="flex flex-col gap-12 mb-10 md:mb-20">
          <div className="text-label text-amber-500">{t.experience.badge}</div>
          <h2 className="text-6xl md:text-8xl font-serif font-bold text-foreground leading-[0.8] tracking-tighter">
            {t.experience.title}
          </h2>
        </div>

        <div className="flex flex-col gap-0 border-t border-border">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-8 py-12 md:py-20 border-b border-border items-start hover:bg-muted/30 transition-colors duration-500"
            >
              <div className="lg:col-span-1 text-meta opacity-30 group-hover:opacity-100 transition-opacity">
                0{index + 1}
              </div>

              <div className="lg:col-span-4 flex flex-col gap-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                  {exp.image && (
                    <div className="relative w-20 h-20 transition-all duration-700 bg-muted/20 border border-border overflow-hidden p-3 flex-shrink-0">
                      <img
                        src={exp.image}
                        alt={exp.company}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}
                  <h3 className="text-4xl font-serif font-bold group-hover:text-amber-500 transition-colors">
                    {exp.company}
                  </h3>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="text-meta uppercase tracking-widest">
                    {exp.duration}
                  </div>
                  <div className="flex items-center gap-2 text-meta opacity-50">
                    <MapPin size={10} />
                    {exp.location}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 flex flex-col gap-8">
                <div className="text-2xl font-light text-foreground/90 uppercase tracking-tight">
                  {exp.role}
                </div>
                <p className="text-muted-foreground leading-relaxed text-justify max-w-2xl">
                  {exp.summary}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.details.map((detail) => (
                    <span
                      key={detail.id}
                      className="px-3 py-1 bg-secondary text-[10px] font-bold uppercase tracking-widest rounded-none border border-border"
                    >
                      {detail.description}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
