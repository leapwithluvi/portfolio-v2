"use client";

import { motion } from "motion/react";
import { UserRound } from "lucide-react";
import { profile } from "@/data/profile";
import { sectionContent } from "@/data/sections";
import { statistics } from "@/data/experience";
import { GridPattern } from "@/components/ui/grid-pattern";
import { useIsMobile } from "@/hooks/use-is-mobile";

export const AboutSection = () => {
  const isMobile = useIsMobile();
  return (
    <section
      id="about"
      className="relative flex flex-col justify-center items-center py-24 overflow-hidden"
    >
      {/* Background Grid Pattern - Contained within 1280px */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div 
          className="max-w-[1280px] mx-auto h-full relative"
          style={{
            maskImage: 'linear-gradient(to bottom, black 0%, black 70%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 70%, transparent 100%)',
          }}
        >
          <GridPattern
            width={40}
            height={40}
            strokeDasharray={"4 4"}
            className="fill-foreground/5 stroke-foreground/25 opacity-40"
          />
        </div>
      </div>

      <div className="max-container relative z-10 flex flex-col items-center gap-16">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: isMobile }}
            className="flex items-center gap-2 mb-4 text-yellow-600 font-bold uppercase tracking-widest text-xs"
          >
            <UserRound size={16} />
            <span>{sectionContent.about.badge}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: isMobile }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6"
          >
            {sectionContent.about.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: isMobile }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            {sectionContent.about.description}
          </motion.p>
        </div>

        {/* Bento Grid Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full px-4">
          {/* Main About Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: isMobile }}
            className="col-span-1 md:col-span-8 glass p-6 md:p-8 rounded-3xl shadow-xl flex flex-col gap-6"
          >
            <h3 className="text-3xl font-serif font-bold text-foreground">
              {sectionContent.about.craftTitle}
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed text-justify">
              {profile.bio.about1}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed text-justify">
              {profile.bio.about2}
            </p>
          </motion.div>

          {/* Stats/Badges Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: isMobile }}
            className="col-span-1 md:col-span-4 glass p-8 rounded-3xl shadow-xl flex flex-col items-center justify-center gap-8 relative overflow-hidden group"
          >
            {statistics.slice(0, 2).map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center text-center relative z-10 w-full">
                <span className={`text-6xl font-serif font-bold ${idx === 0 ? "text-yellow-600" : "text-teal-600"}`}>
                  {stat.value}
                </span>
                <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mt-2">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Skills Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: isMobile }}
            className="col-span-1 md:col-span-4 glass p-6 md:p-8 rounded-3xl shadow-xl flex flex-col gap-4 items-center text-center"
          >
            <h4 className="text-xl font-bold font-serif">{sectionContent.about.card1Title}</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {sectionContent.about.card1Desc}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: isMobile }}
            transition={{ delay: 0.1 }}
            className="col-span-1 md:col-span-4 glass p-6 md:p-8 rounded-3xl shadow-xl flex flex-col gap-4 items-center text-center"
          >
            <h4 className="text-xl font-bold font-serif">{sectionContent.about.card2Title}</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {sectionContent.about.card2Desc}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: isMobile }}
            transition={{ delay: 0.2 }}
            className="col-span-1 md:col-span-4 glass p-6 md:p-8 rounded-3xl shadow-xl flex flex-col gap-4 items-center text-center"
          >
            <h4 className="text-xl font-bold font-serif">{sectionContent.about.card3Title}</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {sectionContent.about.card3Desc}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
