"use client"
 
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectSection } from "@/components/sections/ProjectSection";
import { GithubSection } from "@/components/sections/GithubSection";
import { CertificateSection } from "@/components/sections/CertificateSection";
import { ContactSection } from "@/components/sections/ContactSection";
import Reveal from "@/components/ui/Reveal";
 
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
