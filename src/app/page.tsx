"use client"
 
import dynamic from "next/dynamic";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import Reveal from "@/components/ui/Reveal";

// Lazy load sections below the fold for performance
const ExperienceSection = dynamic(() => import("@/components/sections/ExperienceSection").then(mod => mod.ExperienceSection), { ssr: false });
const SkillsSection = dynamic(() => import("@/components/sections/SkillsSection").then(mod => mod.SkillsSection), { ssr: false });
const ProjectSection = dynamic(() => import("@/components/sections/ProjectSection").then(mod => mod.ProjectSection), { ssr: false });
const GithubSection = dynamic(() => import("@/components/sections/GithubSection").then(mod => mod.GithubSection), { ssr: false });
const CertificateSection = dynamic(() => import("@/components/sections/CertificateSection").then(mod => mod.CertificateSection), { ssr: false });
const ContactSection = dynamic(() => import("@/components/sections/ContactSection").then(mod => mod.ContactSection), { ssr: false });
 
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      
      <main className="flex-1 pt-0">
        <div className="relative">
          <HeroSection />
          <AboutSection />
        </div>
        <Reveal><SkillsSection /></Reveal>
        <Reveal><ExperienceSection /></Reveal>
        <Reveal><ProjectSection /></Reveal>
        <Reveal><GithubSection /></Reveal>
        <Reveal><CertificateSection /></Reveal>
        <Reveal><ContactSection /></Reveal>
      </main>
 
    </div>
  );
}
