"use client"

import Image from "next/image";
import { motion } from "motion/react";
import { Laptop, ArrowUpRight, Download, UserRound } from "lucide-react";
import { Sidebar } from "@/components/Sidebar";
import { profile } from "@/data/profile";

const MotionImage = motion(Image);

export default function Home() {
  return (
    <main>
    {/* HERO SECTION */}
 <section id="home" className="flex justify-center items-center w-full px-6 md:px-12 lg:px-24 py-16 md:py-24 overflow-hidden">
      <div className="max-container flex items-center gap-8 md:gap-16">
        <Sidebar num="01" title="Hero" />

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* TEXT */}
        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="flex items-center gap-2 text-lg font-medium text-yellow-600">
            <Laptop size={28} className="text-yellow-600" />
            {profile.title}
          </p>

          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight text-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {profile.name}
          </motion.h1>

          <motion.p
            className="text-base md:text-lg text-muted-foreground max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {profile.description}
          </motion.p>

          <motion.div
            className="mt-4 flex flex-col sm:flex-row gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <a
              onClick={(e) => {
                e.preventDefault();
                const aboutSection = document.querySelector("#about");
                aboutSection?.scrollIntoView({ behavior: "smooth" });
              }}
              href="#about"
              className="flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium border border-gray-800 rounded-lg bg-gray-800 text-white hover:bg-white hover:text-black transition duration-300"
            >
              <ArrowUpRight size={20} />
              Explore
            </a>

            <button className="flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium border border-gray-800 rounded-lg bg-gray-800 text-white hover:bg-white hover:text-black transition duration-300">
              <Download size={20} />
              Download CV
            </button>
          </motion.div>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          className="flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          >
          <MotionImage
            src={profile.image}
            alt={profile.name}
            width={500}
            height={500}
            className="w-full h-[450px] max-w-xs md:max-w-sm lg:max-w-md rounded-2xl shadow-xl object-cover"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 180, damping: 18 }}
            />
        </motion.div>
      </div>
      </div>
    </section>

    {/* ABOUT SECTION */}
    <section
      className="flex justify-center items-center h-auto px-6 md:px-12 py-12 overflow-hidden"
      id="about"
    >
      <div className="max-container flex items-center h-full">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Sidebar Kiri */}
        <Sidebar num="02" title="About" />
      </motion.div>

      {/* Konten */}
      <motion.div
        className="flex flex-col gap-4 text-justify max-w-[1550px]"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Judul */}
        <motion.div
          className="flex items-center gap-3 mb-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Ikon User */}
          <UserRound className="text-yellow-600" size={35} />
          <h2 className="md:text-5xl text-4xl font-serif">About Me</h2>
        </motion.div>

        {/* Subjudul */}
        <motion.h2
          className="md:text-3xl text-xl font-serif font-bold"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Hello, I'm {profile.name}!
        </motion.h2>

        {/* Deskripsi */}
        {[
          profile.about1,
          profile.about2,
        ].map((text, index) => (
          <motion.p
            key={index}
            className="md:text-xl text-xl font-serif text-muted-foreground max-w-3xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            {text}
          </motion.p>
        ))}
      </motion.div>
      </div>
    </section>

    </main>
  );
}
