"use client";

import dynamic from "next/dynamic";

// Non-critical UI components - Lazy loaded for performance
const CustomCursor = dynamic(() => import("./CustomCursor"), { ssr: false });
const CommandPalette = dynamic(() => import("./CommandPalette"), { ssr: false });
const ScrollProgress = dynamic(() => import("./ScrollProgress"), { ssr: false });
const SectionNav = dynamic(() => import("./SectionNav"), { ssr: false });
const BackToTop = dynamic(() => import("./BackToTop"), { ssr: false });

export function GlobalUI() {
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <CommandPalette />
      <BackToTop />
      <SectionNav />
    </>
  );
}
