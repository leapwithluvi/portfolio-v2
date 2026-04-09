"use client";

import React, { useState } from "react";
import { Copy, Check, Terminal, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { contactJsonData } from "@/data/contact_json";

export default function JsonContactCard() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(JSON.stringify(contactJsonData, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const ClickableValue = ({ value, href }: { value: string; href?: string }) => {
    if (!href) return <span className="text-emerald-600 dark:text-yellow-500 font-medium">&quot;{value}&quot;</span>;
    return (
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-emerald-600 dark:text-yellow-500 hover:text-emerald-500 dark:hover:text-yellow-400 hover:underline decoration-emerald-200 dark:decoration-yellow-600 underline-offset-4 transition-all inline-flex items-center gap-1 group/link font-medium"
      >
        &quot;{value}&quot;
        <ExternalLink size={10} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
      </a>
    );
  };

  return (
    <div className="w-full max-w-2xl mx-auto mt-12 mb-16 font-mono text-[13px] group text-left">
      {/* Integrated Terminal Container */}
      <div className="bg-white/40 dark:bg-zinc-900/90 backdrop-blur-md rounded-3xl border border-slate-200/60 dark:border-border/50 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
        
        {/* Terminal Header */}
        <div className="px-4 py-3 sm:px-5 sm:py-4 flex items-center justify-between border-b border-slate-200/40 dark:border-border/30 bg-white/20 dark:bg-white/5">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5 md:gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-red-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-slate-200 dark:bg-yellow-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-slate-100 dark:bg-green-500/80" />
            </div>
            <div className="flex items-center gap-2 ml-4 text-slate-400 dark:text-muted-foreground text-[9px] uppercase tracking-[0.3em] font-bold">
              <Terminal size={12} className="text-sky-500 dark:text-yellow-600" />
              <span>contact.json</span>
            </div>
          </div>
          <button
            onClick={copyToClipboard}
            className="p-2 hover:bg-slate-100 dark:hover:bg-zinc-800 rounded-lg transition-all text-slate-400 dark:text-muted-foreground group-hover:text-sky-600 dark:group-hover:text-yellow-600"
            title="Copy JSON"
          >
            {copied ? <Check size={16} className="text-emerald-500 dark:text-green-500" /> : <Copy size={16} />}
          </button>
        </div>

        {/* Code Area */}
        <div className="flex relative transition-all duration-700">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-500/[0.02] to-emerald-500/[0.02] dark:from-yellow-600/[0.02] dark:to-transparent pointer-events-none" />
          
          {/* Line Numbers Column - Hidden on mobile for extra space */}
          <div className="bg-slate-100/20 dark:bg-zinc-900/40 px-4 py-8 text-right text-slate-300 dark:text-zinc-600 select-none border-r border-slate-100/50 dark:border-border/30 hidden sm:block min-w-[3.5rem]">
            {Array.from({ length: 33 }).map((_, i) => (
              <div key={i} className="leading-[1.8]">{i + 1}</div>
            ))}
          </div>

          <div className="p-4 sm:p-8 md:p-10 overflow-x-auto min-w-0 flex-1">
            <pre className="text-slate-600 dark:text-foreground/90 whitespace-pre leading-[1.8] text-left text-[10px] sm:text-[13px]">
            <span className="text-slate-400 dark:text-blue-400">{"{"}</span>
            {"\n  "}<span className="text-sky-600 dark:text-purple-400">&quot;name&quot;</span>: <span className="text-emerald-600 dark:text-yellow-500">&quot;{contactJsonData.name}&quot;</span>,
            {"\n  "}<span className="text-sky-600 dark:text-purple-400">&quot;role&quot;</span>: <span className="text-emerald-600 dark:text-yellow-500">&quot;{contactJsonData.role}&quot;</span>,
            {"\n  "}<span className="text-sky-600 dark:text-purple-400">&quot;status&quot;</span>: <span className="text-emerald-600 dark:text-yellow-500">&quot;{contactJsonData.status}&quot;</span>,
            {"\n  "}<span className="text-sky-600 dark:text-purple-400">&quot;location&quot;</span>: <span className="text-emerald-600 dark:text-yellow-500">&quot;{contactJsonData.location}&quot;</span>,
            {"\n  "}<span className="text-sky-600 dark:text-purple-400">&quot;contact&quot;</span>: <span className="text-slate-400 dark:text-blue-400">{"{"}</span>
            {"\n    "}<span className="text-sky-600 dark:text-purple-400">&quot;email&quot;</span>: <ClickableValue value={contactJsonData.contact.email} href={`mailto:${contactJsonData.contact.email}`} />,
            {"\n    "}<span className="text-sky-600 dark:text-purple-400">&quot;github&quot;</span>: <ClickableValue value={contactJsonData.contact.github} href={`https://github.com/${contactJsonData.contact.github}`} />,
            {"\n    "}<span className="text-sky-600 dark:text-purple-400">&quot;linkedin&quot;</span>: <ClickableValue value={contactJsonData.contact.linkedin} href={`https://linkedin.com/in/${contactJsonData.contact.linkedin}`} />,
            {"\n    "}<span className="text-sky-600 dark:text-purple-400">&quot;instagram&quot;</span>: <ClickableValue value={contactJsonData.contact.instagram} href={`https://instagram.com/${contactJsonData.contact.instagram}`} />,
            {"\n    "}<span className="text-sky-600 dark:text-purple-400">&quot;x&quot;</span>: <ClickableValue value={contactJsonData.contact.x} href={`https://x.com/${contactJsonData.contact.x}`} />
            {"\n  "}<span className="text-slate-400 dark:text-blue-400">{"}"}</span>,
            {"\n  "}<span className="text-sky-600 dark:text-purple-400">&quot;stack&quot;</span>: <span className="text-slate-400 dark:text-blue-400">{"{"}</span>
            {Object.entries(contactJsonData.stack).map(([category, items], idx, arr) => (
              <React.Fragment key={category}>
                {"\n    "}<span className="text-sky-600 dark:text-purple-400">&quot;{category}&quot;</span>: <span className="text-slate-400 dark:text-blue-400">[</span>
                {(items as string[]).reduce((acc: string[][], item, i) => {
                  if (i % 4 === 0) acc.push([]);
                  acc[acc.length - 1].push(item);
                  return acc;
                }, []).map((chunk, chunkIdx, chunks) => (
                  <React.Fragment key={chunkIdx}>
                    {"\n      "}
                    {chunk.map((item, i) => (
                      <React.Fragment key={item}>
                        <span className="text-emerald-600 dark:text-yellow-500">&quot;{item}&quot;</span>
                        {(i < chunk.length - 1 || chunkIdx < chunks.length - 1) && <span className="text-slate-300 dark:text-foreground/50">, </span>}
                      </React.Fragment>
                    ))}
                  </React.Fragment>
                ))}
                {"\n    "}<span className="text-slate-400 dark:text-blue-400">]</span>
                {idx < arr.length - 1 && <span className="text-slate-300 dark:text-foreground/50">,</span>}
              </React.Fragment>
            ))}
            {"\n  "}<span className="text-slate-400 dark:text-blue-400">{"}"}</span>
            {"\n"}<span className="text-slate-400 dark:text-blue-400">{"}"}</span>
          </pre>
        </div>

        {/* Floating Animation */}
        <AnimatePresence>
          {copied && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="absolute bottom-6 right-8 bg-sky-600 dark:bg-green-500 text-white text-[10px] font-bold px-4 py-1.5 rounded-full shadow-xl z-30"
            >
              JSON COPIED!
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
    </div>
  );
}
