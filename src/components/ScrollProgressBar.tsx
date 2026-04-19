"use client";

import { useEffect, useState, useCallback } from "react";
import { usePathname } from "next/navigation";

const ROUTES = [
  "/",
  "/projects/certora",
  "/projects/certora/problem",
  "/projects/certora/result",
  "/projects/certora/part",
  "/projects/certora/prover-report",
  "/projects/certora/prover-report/problem",
  "/projects/certora/prover-report/result",
  "/projects/certora/prover-report/part",
  "/projects/certora/prover-dashboard",
  "/projects/certora/prover-dashboard/problem",
  "/projects/certora/prover-dashboard/result",
  "/projects/certora/prover-dashboard/part",
  "/projects/certora/mutation-testing",
  "/projects/certora/mutation-testing/problem",
  "/projects/certora/mutation-testing/result",
  "/projects/certora/mutation-testing/part",
  "/projects",
  "/projects/problem",
  "/projects/proposal",
  "/projects/delek",
  "/projects/delek/problem",
  "/projects/delek/solution",
  "/projects/delek/success",
  "/brands",
  "/thanks",
];

export default function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const pathname = usePathname();

  const calculateProgress = useCallback(() => {
    const routeIndex = ROUTES.indexOf(pathname);
    if (routeIndex === -1) {
      setProgress(0);
      return;
    }

    // 1. Calculate Page-Based Progress (Base)
    const baseProgress = (routeIndex / (ROUTES.length - 1)) * 100;
    const nextBaseProgress = ((routeIndex + 1) / (ROUTES.length - 1)) * 100;
    const progressSpan = nextBaseProgress - baseProgress;

    // 2. Calculate Current Page Scroll Progress
    let pageScrollProgress = 0;
    const container = document.getElementById("main-content-area");
    
    if (container && container.scrollHeight > container.clientHeight + 1) {
      const { scrollTop, scrollHeight, clientHeight } = container;
      pageScrollProgress = scrollTop / (scrollHeight - clientHeight);
    } else {
      const winScroll = window.scrollY || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      if (height > 1) {
        pageScrollProgress = winScroll / height;
      }
    }

    const finalProgress = baseProgress + (pageScrollProgress * progressSpan);
    setProgress(finalProgress);

    // 3. Detect Dark Mode from page content
    const mainElement = document.querySelector('main');
    if (mainElement) {
      setIsDarkMode(mainElement.classList.contains('bg-black'));
    } else {
      setIsDarkMode(pathname === "/");
    }
  }, [pathname]);

  useEffect(() => {
    window.addEventListener("scroll", calculateProgress, { passive: true });
    window.addEventListener("resize", calculateProgress);
    
    const container = document.getElementById("main-content-area");
    if (container) {
      container.addEventListener("scroll", calculateProgress, { passive: true });
    }

    requestAnimationFrame(calculateProgress);
    const timer = setInterval(calculateProgress, 500);

    return () => {
      window.removeEventListener("scroll", calculateProgress);
      window.removeEventListener("resize", calculateProgress);
      if (container) {
        container.removeEventListener("scroll", calculateProgress);
      }
      clearInterval(timer);
    };
  }, [calculateProgress, pathname]);

  if (ROUTES.indexOf(pathname) === -1) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-[5px] z-[999999] pointer-events-none bg-transparent">
      <div 
        className={`h-full transition-all duration-150 ease-out ${
          isDarkMode ? "bg-white shadow-[0_0_10px_rgba(255,255,255,0.3)]" : "bg-black shadow-[0_0_10px_rgba(0,0,0,0.1)]"
        }`}
        style={{ 
          width: `${Math.min(Math.max(progress, 0), 100)}%`,
        }}
      />
    </div>
  );
}
