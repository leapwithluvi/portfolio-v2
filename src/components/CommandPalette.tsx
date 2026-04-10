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
      <div className="fixed bottom-8 left-8 z-40 hidden lg:flex items-center gap-2 px-3 py-1.5 bg-muted/80 rounded-lg border border-border text-xs font-bold text-foreground/60 uppercase tracking-widest backdrop-blur-md shadow-2xl">
        <Keyboard size={14} className="text-yellow-600" />
        Press <span className="px-1 bg-muted rounded border border-border text-foreground">⌘</span> <span className="px-1 bg-muted rounded border border-border text-foreground">K</span> to search
      </div>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="relative w-full max-w-2xl bg-card border border-border shadow-2xl rounded-2xl overflow-hidden glass"
            >
              {/* Search Bar */}
              <div className="flex items-center px-4 py-4 border-b border-border">
                <Search className="text-muted-foreground mr-3" size={20} />
                <input
                  autoFocus
                  placeholder="Type a command or search..."
                  className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-muted rounded text-muted-foreground transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Actions List */}
              <div className="max-h-[60vh] overflow-y-auto p-2">
                {filteredActions.length > 0 ? (
                  filteredActions.map((action) => {
                    const Icon = IconMap[action.icon] || Search;
                    return (
                      <button
                        key={action.name}
                        onClick={() => handleAction(action.href)}
                        className="w-full flex items-center justify-between px-3 py-3 hover:bg-yellow-600/10 hover:text-yellow-600 rounded-xl transition-all group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-muted group-hover:bg-yellow-600/20 rounded-lg transition-colors">
                            <Icon size={18} />
                          </div>
                          <span className="font-medium">{action.name}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="text-xs font-bold text-foreground/60 px-2 py-0.5 bg-muted rounded border border-border group-hover:text-yellow-600 group-hover:border-yellow-600/20 transition-colors">
                            {action.shortcut}
                          </span>
                        </div>
                      </button>
                    );
                  })
                ) : (
                  <div className="py-12 text-center text-muted-foreground">
                    No results found for &quot;{query}&quot;
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="px-4 py-3 bg-muted/80 border-t border-border flex items-center justify-between text-xs font-bold text-foreground/60 uppercase tracking-widest">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <span className="px-1 bg-muted rounded border border-border text-foreground">Esc</span> to close
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="px-1 bg-muted rounded border border-border text-foreground">↵</span> to select
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Command size={10} />
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
