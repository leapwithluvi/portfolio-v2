"use client"

import { profile } from "@/data/profile";
import { socials } from "@/data/socials";
import { navLinks } from "@/data/navigation";
import { Globe, Cpu } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

export const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-background border-t border-border pt-32 pb-16">
      <div className="max-container flex flex-col gap-24">
        {/* Large Brand Mark */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-12">
           <h2 className="text-8xl md:text-[12vw] font-serif font-bold leading-[0.7] tracking-tighter opacity-10">
             {profile.name.split(' ')[0]}
           </h2>
           <div className="flex flex-col gap-4 text-right max-w-xs">
              <div className="text-meta uppercase tracking-widest">{t.footer.status}</div>
              <p className="text-sm text-muted-foreground">{t.footer.tagline}</p>
           </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
          <div className="bg-background p-12 flex flex-col gap-6">
             <div className="text-label opacity-30">{t.footer.navigation}</div>
             <ul className="flex flex-col gap-3">
               {navLinks.map((link) => (
                 <li key={link.name}>
                   <a href={link.href} className="text-label hover:text-amber-500 transition-colors uppercase text-[10px] tracking-widest">
                     {(t.nav as any)[link.name.toLowerCase()]}
                   </a>
                 </li>
               ))}
             </ul>
          </div>
          
          <div className="bg-background p-12 flex flex-col gap-6">
             <div className="text-label opacity-30">{t.footer.presence}</div>
             <ul className="flex flex-col gap-3">
               <li className="flex flex-col gap-1">
                 <span className="text-sm font-bold font-serif">{t.footer.discipline1}</span>
                 <span className="text-[10px] uppercase text-muted-foreground tracking-widest">Next.js, Express.js, TypeScript</span>
               </li>
               <li className="flex flex-col gap-1">
                 <span className="text-sm font-bold font-serif">{t.footer.discipline2}</span>
                 <span className="text-[10px] uppercase text-muted-foreground tracking-widest">Python, TensorFlow, LLMs</span>
               </li>
             </ul>
          </div>
 
          <div className="bg-background p-12 flex flex-col gap-6">
             <div className="text-label opacity-30">{t.footer.environment}</div>
             <div className="flex flex-col gap-4">
               <div className="flex items-center gap-2 text-meta">
                  <Globe size={12} /> {t.footer.availability}
               </div>
               <div className="flex items-center gap-2 text-meta">
                  <Cpu size={12} /> Next.js 16 (App Router)
               </div>
             </div>
          </div>
 
          <div className="bg-background p-12 flex flex-col gap-6">
             <div className="text-label opacity-30">{t.footer.connect}</div>
             <div className="flex flex-wrap gap-4">
                {socials.map((social) => (
                  <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="text-meta hover:text-amber-500 transition-colors uppercase">
                    {social.name}
                  </a>
                ))}
             </div>
          </div>
        </div>
 
        {/* Final Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-border gap-6">
           <div className="text-meta opacity-30 uppercase tracking-[0.3em]">
             &copy; {currentYear} {profile.name} — {t.footer.rights}
           </div>
           <div className="text-meta opacity-30 uppercase tracking-[0.3em]">
             {t.footer.credit}
           </div>
        </div>
      </div>
    </footer>
  );
};

