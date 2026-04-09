"use client"

import { motion } from "motion/react";
import { ExternalLink, Award, Calendar, Building2 } from "lucide-react";
import { Certificate } from "@/data/certificates";
import Magnetic from "@/components/ui/Magnetic";

interface CardCertificateProps {
  data: Certificate;
}

export const CardCertificate = ({ data }: CardCertificateProps) => {
  const { title, issuer, issuerLogo, date, category, credentialUrl, skills } = data;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative h-full bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
    >
      {/* Category Badge & Logo */}
      <div className="flex justify-between items-start mb-6">
        <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-muted/50 border-2 overflow-hidden flex items-center justify-center p-1.5 transition-all duration-300`}>
          {issuerLogo ? (
            <img 
              src={issuerLogo} 
              alt={issuer} 
              className="w-full h-full object-contain rounded"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
                const parent = (e.target as HTMLElement).parentElement;
                if (parent) {
                  parent.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-award text-yellow-600"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="7"></circle></svg>';
                }
              }}
            />
          ) : (
            <Award size={22} className="text-yellow-600" />
          )}
        </div>
        <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border transition-all duration-300`}>
          {category}
        </span>
      </div>

      {/* Info */}
      <div className="space-y-1 mb-4">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Building2 size={14} />
          <span className="text-xs font-medium uppercase tracking-wider">{issuer}</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground/60">
          <Calendar size={14} />
          <span className="text-[11px]">{date}</span>
        </div>
      </div>

      {/* Title */}
      <h3 className="text-lg font-serif font-bold text-foreground mb-4 transition-colors duration-300 line-clamp-2">
        {title}
      </h3>

      {/* Skills Tags */}
      <div className="flex flex-wrap gap-1.5 mt-auto mb-6">
        {skills.map((skill) => (
          <span
            key={skill}
            className="text-[10px] px-2 py-0.5 bg-muted/50 text-muted-foreground rounded-md border border-border font-medium"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Footer link */}
      <div className="pt-4 border-t border-border">
        <Magnetic>
          <a
            href={credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-yellow-600 transition-colors group/link px-2 py-1"
          >
            <span>View Credential</span>
            <ExternalLink size={14} className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </a>
        </Magnetic>
      </div>
    </motion.div>
  );
};
