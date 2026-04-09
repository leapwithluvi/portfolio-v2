import { profile } from "@/data/profile";
import { socials } from "@/data/socials";
import { footerData } from "@/data/footer";
import { navLinks } from "@/data/navigation";
import { Globe, Cpu, ShieldCheck } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-background border-t border-border mt-0 font-serif">
      <div className="max-container pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-6 mb-6">
          
          {/* Column 1: Brand & Bio */}
          <div className="flex flex-col gap-6 col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-serif font-bold tracking-tighter">
                {profile.logoName}<span className="text-yellow-600">.</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              {footerData.brand.tagline}
            </p>
            <div className="flex items-center gap-4">
              {/* Subtle Social Icons */}
              {socials.slice(0, 4).map((social) => (
                <a 
                  key={social.name} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-yellow-600 transition-colors"
                >
                  <div 
                    className="w-4 h-4 bg-current"
                    style={{
                      WebkitMaskImage: `url(${social.icon})`,
                      maskImage: `url(${social.icon})`,
                      WebkitMaskSize: 'contain',
                      maskSize: 'contain',
                      WebkitMaskRepeat: 'no-repeat',
                      maskRepeat: 'no-repeat',
                    }}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="flex flex-col gap-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/50">Navigation</h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-all flex items-center group">
                    <span className="w-0 group-hover:w-3 h-[1px] bg-yellow-600 transition-all mr-0 group-hover:mr-2" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Specialized */}
          <div className="flex flex-col gap-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/50">{footerData.experience.title}</h4>
            <ul className="flex flex-col gap-3">
              {footerData.experience.items.map((item, idx) => (
                <li key={idx}>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold">{item.title}</span>
                    <span className="text-xs text-muted-foreground">{item.description}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter/Status */}
          <div className="flex flex-col gap-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/50">{footerData.presence.title}</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-sm text-muted-foreground bg-muted/30 p-3 rounded-xl border border-border/50">
                <Globe size={16} className="text-yellow-600" />
                <span>{footerData.presence.availabilityText}</span>
              </div>
              <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-emerald-500 bg-emerald-500/5 p-3 rounded-xl border border-emerald-500/20">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                {footerData.presence.statusBadge}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 mb-3 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 text-xs text-muted-foreground">
            <p>&copy; {currentYear} {profile.name}. All Rights Reserved.</p>
            <span className="hidden md:block h-4 w-px bg-border" />
            <p>{footerData.bottom.creditText}</p>
          </div>
          
          <div className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
            <div className="flex items-center gap-2">
              <Cpu size={14} />
              Next.js 15
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={14} />
              Secure Template
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
