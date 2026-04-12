"use client";
 
import { profile } from "@/data/profile";
import { statistics } from "@/data/experience";
import { useTranslation } from "@/hooks/useTranslation";
 
export const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="relative py-20 md:py-32 overflow-hidden border-y border-border bg-background"
    >
      <div className="max-container flex flex-col gap-32">
        {/* Row 1: The Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          <div className="lg:col-span-4 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
               <div className="text-label text-amber-500">{t.about.badge}</div>
               <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-foreground leading-[0.8] tracking-tighter">
                 {t.about.title}
               </h2>
            </div>
            <div className="h-px w-24 bg-border" />
          </div>
          
          <div className="lg:col-span-8 flex flex-col gap-16">
            <p className="text-2xl md:text-4xl text-foreground font-light leading-[1.1] tracking-tight">
              {t.about.description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border">
              <div className="bg-background p-10 flex flex-col gap-6">
                <span className="text-meta uppercase opacity-30">{t.about.phase1}</span>
                <div className="text-label opacity-60">{t.about.phase1Title}</div>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {t.about.phase1Desc}
                </p>
              </div>
              <div className="bg-background p-10 flex flex-col gap-6">
                <span className="text-meta uppercase opacity-30">{t.about.phase2}</span>
                <div className="text-label opacity-60">{t.about.phase2Title}</div>
                <p className="text-muted-foreground leading-relaxed text-sm">
                   {t.about.phase2Desc}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: The Core Numbers */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
          {statistics.map((stat, idx) => (
            <div key={idx} className="bg-background p-8 md:p-12 flex flex-col gap-4 md:gap-6 group hover:bg-muted/10 transition-colors">
              <div className="flex justify-between items-start">
                <span className="text-[10px] uppercase font-mono tracking-widest opacity-30">Stat_{idx + 1}</span>
                <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-4xl md:text-6xl lg:text-8xl font-serif font-bold text-foreground leading-none">
                   {stat.value}
                </span>
                <span className="text-[10px] md:text-label opacity-50 uppercase tracking-widest">
                  {(t.about as any)[stat.labelKey]}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
