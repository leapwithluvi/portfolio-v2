"use client"
 
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectSection } from "@/components/sections/ProjectSection";
import { CertificateSection } from "@/components/sections/CertificateSection";
import { ContactSection } from "@/components/sections/ContactSection";
 
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      
      <main className="flex-1 flex flex-col pt-0">
        <HeroSection />
        
        {/* Sections with breathable white space instead of rigid dividers */}
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectSection />
        <CertificateSection />
        <ContactSection />
      </main>
 
    </div>
  );
}
