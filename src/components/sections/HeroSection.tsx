"use client"
 
import { motion } from "motion/react";
import { ArrowUpRight, Download, Code2 } from "lucide-react";
import Image from "next/image";
import { profile } from "@/data/profile";
import { GridPattern } from "@/components/ui/grid-pattern";
import Magnetic from "@/components/ui/Magnetic";
 
const HeroImage = motion(Image);
 
export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative flex justify-center items-center min-h-[90vh] pt-32 pb-16 overflow-hidden"
    >
      {/* Background Grid Pattern - Contained within 1280px */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          className="max-w-[1280px] mx-auto h-full relative"
          style={{
            maskImage:
              "radial-gradient(circle at center, black 0%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(circle at center, black 0%, transparent 80%)",
          }}
        >
          <GridPattern
            width={40}
            height={40}
            strokeDasharray={"4 4"}
            className="fill-foreground/2 stroke-foreground/15 opacity-50"
          />
        </div>
      </div>

      <div className="max-container relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 w-full">
        {/* LEFT COLUMN: Text Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-8 max-w-2xl flex-1">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-2 rounded-full border border-yellow-600/30 bg-yellow-600/5 text-yellow-600 text-xs md:text-sm font-bold backdrop-blur-sm"
          >
            <Code2 size={16} />
            <span>{profile.title}</span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-[1.1] tracking-tight text-foreground"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {profile.heroHeadingBefore}{" "}
            <span className="text-yellow-600">{profile.heroHeadingAccent}</span>{" "}
            {profile.heroHeadingAfter}
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl text-center lg:text-left md:text-wrap text-justify md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            I&apos;m{" "}
            <span className="text-foreground font-semibold">
              {profile.name}
            </span>
            , {profile.heroTagline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <Magnetic>
              <a
                href="#work"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#work")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-8 py-4 bg-yellow-600 text-white rounded-full font-bold shadow-lg shadow-yellow-600/20 hover:bg-yellow-700 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                {profile.ctaWork}
                <ArrowUpRight
                  size={20}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </a>
            </Magnetic>
            <Magnetic>
              <button className="px-8 py-4 bg-background border border-border text-foreground rounded-full font-bold glass hover:bg-muted transition-all duration-300 flex items-center justify-center gap-2">
                <Download size={20} />
                {profile.ctaResume}
              </button>
            </Magnetic>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Refined Portrait Image */}
        <motion.div
          className="relative w-full max-w-sm lg:max-w-[400px] flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          <div className="relative group">
            <div className="relative glass rounded-[3rem] p-4 shadow-2xl overflow-hidden aspect-[4/5] w-[280px] md:w-[320px] lg:w-[360px]">
              <HeroImage
                src={profile.image}
                alt={profile.name}
                fill
                className="w-full h-full object-cover rounded-[2rem] filter brightness-95 grayscale-[10%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
