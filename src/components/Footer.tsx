"use client"

import { profile } from "@/data/profile";
import { navLinks } from "@/data/navigation";
import { socials } from "@/data/socials";
import { Linkedin, Github, Instagram, Mail, ArrowUpRight, Twitter } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import Image from "next/image";

export const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  
  // Icon Mapping for socials.ts data
  const getSocialIcon = (name: string) => {
    switch (name.toLowerCase()) { 
      case "linkedin": return <Linkedin size={16} aria-hidden="true" />;
      case "github": return <Github size={16} aria-hidden="true" />;
      case "instagram": return <Instagram size={16} aria-hidden="true" />;
      case "email": return <Mail size={16} aria-hidden="true" />;
      case "x": return <Twitter size={16} aria-hidden="true" />;
      default: return <ArrowUpRight size={16} aria-hidden="true" />;
    }
  };

  const userEmail = socials.find(s => s.name.toLowerCase() === "email")?.href.replace("mailto:", "") || "itsluvi13@gmail.com";
  
  return (
    <footer className="relative w-full bg-background border-t border-border pt-32 pb-16 overflow-hidden">
      {/* Footer GIF Background */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <Image 
          src="https://camo.githubusercontent.com/e95e9d96454d602addeb4f9a1652cd142a4c8ae8c6c466476effb2b40f7e7cd8/68747470733a2f2f692e70696e696d672e636f6d2f6f726967696e616c732f32332f61622f39342f32336162393437396232663535356264613961663166373133323965663930322e676966"
          alt=""
          fill
          unoptimized
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background via-transparent to-background" />
      </div>

      <div className="max-container relative z-10 flex flex-col gap-24">
        {/* Large Brand Mark */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 px-4 md:px-0">
           <h2 className="text-8xl md:text-[12vw] font-serif font-bold leading-[0.7] tracking-tighter opacity-10 select-none" aria-hidden="true">
             {profile.name.split(' ')[0]}
           </h2>
           <div className="flex flex-col gap-4 text-right max-w-xs">
              <div className="text-meta uppercase tracking-widest text-accent font-bold">{t.footer.status}</div>
              <p className="text-sm text-muted-foreground">{t.footer.tagline}</p>
           </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border/30 border border-border/50 shadow-2xl shadow-accent/5 overflow-hidden">
          <div className="bg-background/40 backdrop-blur-md p-8 md:p-12 flex flex-col gap-8 group">
             <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent">{t.footer.navigation}</div>
             <ul className="flex flex-col gap-4">
               {navLinks.map((link) => (
                 <li key={link.name}>
                   <a href={link.href} className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-muted-foreground hover:text-accent transition-all flex items-center gap-2 group/link">
                     <span className="w-0 group-hover/link:w-3 h-px bg-accent transition-all" aria-hidden="true" />
                     {(t.nav as Record<string, string>)[link.name.toLowerCase()]}
                   </a>
                 </li>
               ))}
             </ul>
          </div>
          
          <div className="bg-background/40 backdrop-blur-md p-8 md:p-12 flex flex-col gap-8">
             <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent">{t.footer.presence}</div>
             <ul className="flex flex-col gap-6">
                <li className="flex flex-col gap-1 md:gap-2">
                  <span className="text-xs md:text-base font-bold font-serif">{t.footer.discipline1}</span>
                  <span className="text-[8px] md:text-[10px] uppercase text-muted-foreground tracking-widest leading-relaxed font-medium">Next.js, Express.js, TypeScript</span>
                </li>
                <li className="flex flex-col gap-1 md:gap-2">
                  <span className="text-xs md:text-base font-bold font-serif">{t.footer.discipline2}</span>
                  <span className="text-[8px] md:text-[10px] uppercase text-muted-foreground tracking-widest leading-relaxed font-medium">PostgreSQL, Prisma, MongoDB</span>
                </li>
             </ul>
          </div>

          <div className="bg-background/40 backdrop-blur-md p-8 md:p-12 flex flex-col gap-10">
            <div className="flex flex-col gap-8">
              <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent">{t.footer.connect}</div>
              <div className="flex flex-wrap gap-4 md:gap-6">
                {socials.filter(s => s.name.toLowerCase() !== "email").map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center border border-border/50 hover:bg-accent hover:border-accent hover:text-accent-foreground transition-all duration-500 rounded-full"
                    aria-label={`Connect on ${social.name}`}
                  >
                    {getSocialIcon(social.name)}
                  </a>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col gap-2 mt-auto">
               <div className="text-[8px] md:text-[9px] font-mono uppercase tracking-widest text-muted-foreground opacity-60">Direct_Channel</div>
               <a href={`mailto:${userEmail}`} className="text-[10px] md:text-sm font-bold hover:text-accent transition-colors break-all">
                 {userEmail}
               </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-border/30">
          <div className="text-[10px] font-mono opacity-40 uppercase tracking-widest">
            © {currentYear} {profile.logoName}. All Rights Reserved.
          </div>
          <div className="flex gap-8">
            <span className="text-[10px] font-mono opacity-40 uppercase tracking-widest">v4.2.0_Stable</span>
            <span className="text-[10px] font-mono opacity-40 uppercase tracking-widest">Designed_by_Luvi</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
