"use client";

import dynamic from "next/dynamic";

// Non-critical UI components - Lazy loaded for performance
const CommandPalette = dynamic(() => import("./CommandPalette"), { ssr: false });
const BackToTop = dynamic(() => import("./BackToTop"), { ssr: false });

export function GlobalUI() {
  return (
    <>
      <CommandPalette />
      <BackToTop />
    </>
  );
}
