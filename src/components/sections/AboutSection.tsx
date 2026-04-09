"use client";

import { motion } from "motion/react";
import { UserRound, Layout, Database, Terminal } from "lucide-react";
import { profile } from "@/data/profile";
import { GridPattern } from "@/components/ui/grid-pattern";

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative flex flex-col justify-center items-center py-24 overflow-hidden"
    >
      <div className="absolute inset-x-0 h-full max-w-[1280px] mx-auto overflow-hidden -z-10">
        <GridPattern
          width={30}
          height={30}
          x={-1}
          y={-1}
          strokeDasharray={"4 2"}
          className="[mask-image:radial-gradient(ellipse_at_center,white,transparent)] opacity-40"
        />
      </div>

      <div className="max-container flex flex-col items-center gap-16">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 mb-4 text-yellow-600 font-bold uppercase tracking-widest text-xs"
          >
            <UserRound size={16} />
            <span>Know Me Better</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6"
          >
            Behind the Code
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            I&apos;m a versatile developer who bridges the gap between complex
            engineering and elegant design. Currently focusing on building
            accessible, high-performance web applications.
          </motion.p>
        </div>

        {/* Bento Grid Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full px-4">
          {/* Main About Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="col-span-1 md:col-span-8 glass p-6 md:p-8 rounded-3xl shadow-xl flex flex-col gap-6"
          >
            <h3 className="text-3xl font-serif font-bold text-foreground">
              My Craft
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed text-justify">
              {profile.about1}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed text-justify">
              {profile.about2}
            </p>
          </motion.div>

          {/* Stats/Badges Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="col-span-1 md:col-span-4 glass p-8 rounded-3xl shadow-xl flex flex-col items-center justify-center gap-8 relative overflow-hidden group"
          >
            <div className="flex flex-col items-center text-center relative z-10">
              <span className="text-6xl font-serif font-bold text-yellow-600">
                10+
              </span>
              <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mt-2">
                Projects Completed
              </span>
            </div>
            <div className="flex flex-col items-center text-center relative z-10">
              <span className="text-6xl font-serif font-bold text-teal-600">
                95%
              </span>
              <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mt-2">
                Code Quality Score
              </span>
            </div>
          </motion.div>

          {/* Skills Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="col-span-1 md:col-span-4 glass p-6 md:p-8 rounded-3xl shadow-xl flex flex-col gap-4 items-center text-center"
          >
            <div className="p-4 bg-yellow-600/10 rounded-2xl text-yellow-600">
              <Layout size={32} />
            </div>
            <h4 className="text-xl font-bold font-serif">UI/UX Fanatic</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {" "}
              obsessed with pixel-perfect designs and smooth user flows.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="col-span-1 md:col-span-4 glass p-6 md:p-8 rounded-3xl shadow-xl flex flex-col gap-4 items-center text-center"
          >
            <div className="p-4 bg-teal-600/10 rounded-2xl text-teal-600">
              <Database size={32} />
            </div>
            <h4 className="text-xl font-bold font-serif">Fullstack Ready</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Building scalable backends and secure APIs with modern Node
              architectures.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="col-span-1 md:col-span-4 glass p-6 md:p-8 rounded-3xl shadow-xl flex flex-col gap-4 items-center text-center"
          >
            <div className="p-4 bg-indigo-600/10 rounded-2xl text-indigo-600">
              <Terminal size={32} />
            </div>
            <h4 className="text-xl font-bold font-serif">Clean Code</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Writing maintainable, well-documented, and efficient TypeScript
              code.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
