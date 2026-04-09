"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Force scroll to top on refresh
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    // Only stop lenis if we are on the home page where the preloader is active
    if (window.location.pathname === "/") {
      lenis.stop();
      // Force scroll to top on refresh and clean URL hash for better UX with Preloader
      if (window.location.hash) {
        window.scrollTo(0, 0);
        window.history.replaceState(null, "", window.location.pathname);
      }
    }

    // Start lenis when preloader is finished
    const handleLoaderFinished = () => {
      lenis.start();
    };

    window.addEventListener("loader-finished", handleLoaderFinished);

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      window.removeEventListener("loader-finished", handleLoaderFinished);
    };
  }, []);

  return <>{children}</>;
}
