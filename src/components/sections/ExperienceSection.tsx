"use client";

import { motion } from "motion/react";
import { MapPin } from "lucide-react";
import { experiences } from "@/data/experience";
import { useTranslation } from "@/hooks/useTranslation";
import Image from "next/image";

export const ExperienceSection = () => {
  const { t } = useTranslation();

  return (
    <section
      id="experience"
      className="relative py-16 md:py-32 overflow-hidden bg-background"
    >
      <div className="max-container">
        <div className="flex flex-col gap-12 mb-10 md:mb-20">
          <div className="text-label text-accent font-bold uppercase tracking-widest">{t.experience.badge}</div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground leading-[1.1] tracking-tighter">
            {t.experience.title}
          </h2>
        </div>

        <div className="flex flex-col gap-0 border-t border-border">
          {experiences.map((exp, index) => {
            // Get translations for this specific company
            const companyKey = exp.company.split(' ')[0].toLowerCase();
            const companyData = (t.experience as unknown as Record<string, Record<string, string>>)[companyKey];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: typeof window !== 'undefined' && window.innerWidth < 768 ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group grid grid-cols-1 lg:grid-cols-12 gap-8 py-12 md:py-20 border-b border-border items-start hover:bg-muted/30 transition-colors duration-500"
              >
                <div className="lg:col-span-1 text-meta opacity-60 group-hover:opacity-100 transition-opacity font-mono" aria-hidden="true">
                  0{index + 1}
                </div>

                <div className="lg:col-span-4 flex flex-col gap-6">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                    {exp.image && (
                      <div className="relative w-20 h-20 transition-all duration-700 bg-muted/20 border border-border overflow-hidden p-3 shrink-0">
                        <Image
                          src={exp.image}
                          alt={`${exp.company} logo`}
                          fill
                          sizes="80px"
                          className="object-contain p-3"
                        />
                      </div>
                    )}
                    <h3 className="text-4xl font-serif font-bold group-hover:text-accent transition-colors">
                      {exp.company}
                    </h3>
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="text-meta uppercase tracking-widest font-bold">
                      {exp.duration}
                    </div>
                    <div className="flex items-center gap-2 text-meta opacity-80 font-medium">
                      <MapPin size={10} aria-hidden="true" />
                      {exp.location}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7 flex flex-col gap-8">
                  <div className="text-2xl font-light text-foreground/90 uppercase tracking-tight">
                    {exp.role}
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-justify max-w-2xl">
                    {companyData?.summary || exp.summary}
                  </p>

                  <div className="flex flex-col gap-4">
                    {exp.details.map((detail) => (
                      <div key={detail.id} className="flex items-start gap-4">
                         <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" aria-hidden="true" />
                         <p className="text-sm text-foreground/80 leading-relaxed">
                            {companyData ? companyData[`detail${detail.id}`] : detail.description}
                         </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
