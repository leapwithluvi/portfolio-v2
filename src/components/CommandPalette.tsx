"use client";

import React, { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Search, 
  Home, 
  User, 
  Briefcase, 
  Award, 
  Mail, 
  Command, 
  X,
  Keyboard,
  Code,
  History
} from "lucide-react";
import { navLinks } from "@/data/navigation";

const IconMap: Record<string, any> = {
  Home,
  User,
  Briefcase,
  Award,
  Mail,
  Code,
  History
};

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  const togglePalette = useCallback(() => setIsOpen(prev => !prev), []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        togglePalette();
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [togglePalette]);

  useEffect(() => {
    const handleOpenPalette = () => setIsOpen(true);
    window.addEventListener("open-command-palette", handleOpenPalette);
    return () => window.removeEventListener("open-command-palette", handleOpenPalette);
  }, []);

  const handleAction = (href: string) => {
    setIsOpen(false);
    // Strip leading slash if present (e.g., /#about -> #about)
    const targetId = href.startsWith("/") ? href.slice(1) : href;
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const filteredActions = navLinks.filter(action =>
    action.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      {/* Keyboard Shortcut Indicator (Hidden on Mobile) */}
      <div className="fixed bottom-8 left-8 z-[60] hidden lg:flex items-center gap-3 px-4 py-2 bg-background border border-border text-[9px] font-bold text-foreground uppercase tracking-[0.2em] shadow-2xl">
        <Keyboard size={12} className="text-amber-500" />
        Press <span className="px-1.5 py-0.5 border border-border text-foreground">CTRL</span> <span className="px-1.5 py-0.5 border border-border text-foreground">K</span> to interact
      </div>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[200] flex items-start justify-center pt-[15vh] px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-background/90 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -10 }}
              className="relative w-full max-w-2xl bg-background border border-border shadow-2xl rounded-none overflow-hidden"
            >
              {/* Search Bar */}
              <div className="flex items-center px-6 py-5 border-b border-border">
                <Search className="text-amber-500 mr-4" size={18} />
                <input
                  autoFocus
                  placeholder="COMMAND_QUERY..."
                  className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground font-mono text-sm tracking-widest uppercase"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:text-amber-500 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Actions List */}
              <div className="max-h-[60vh] overflow-y-auto p-2 bg-muted/5">
                {filteredActions.length > 0 ? (
                  filteredActions.map((action, idx) => {
                    const Icon = IconMap[action.icon] || Search;
                    return (
                      <button
                        key={action.name}
                        onClick={() => handleAction(action.href)}
                        className="w-full flex items-center justify-between px-6 py-4 border-b border-transparent hover:border-amber-500/20 hover:bg-muted/30 transition-all group text-left"
                      >
                        <div className="flex items-center gap-4">
                          <div className="text-meta opacity-20 group-hover:opacity-100 transition-opacity">0{idx + 1}</div>
                          <div className="flex flex-col">
                             <span className="text-label text-[11px] group-hover:text-amber-500 transition-colors">{action.name}</span>
                             <span className="text-[9px] uppercase tracking-widest opacity-30 font-mono">system.nav.{action.name.toLowerCase()}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[9px] font-bold text-foreground/40 px-2 py-1 border border-border group-hover:text-amber-500 group-hover:border-amber-500 transition-colors">
                            {action.shortcut}
                          </span>
                        </div>
                      </button>
                    );
                  })
                 ) : (
                  <div className="py-20 text-center flex flex-col items-center gap-4">
                    <div className="text-meta opacity-30 uppercase tracking-[0.5em]">No_Matches_Found</div>
                    <div className="h-px w-12 bg-border" />
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="px-6 py-4 bg-muted/20 border-t border-border flex items-center justify-between text-[8px] font-bold text-foreground/40 uppercase tracking-[0.3em]">
                <div className="flex items-center gap-6">
                  <span className="flex items-center gap-2">
                    <span className="px-1.5 py-0.5 border border-border text-foreground">ESC</span> EXIT
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="px-1.5 py-0.5 border border-border text-foreground">ENTER</span> SELECT
                  </span>
                </div>
                <div className="flex items-center gap-2">
                   <Code size={10} /> SYSTEM_TERMINAL
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
