"use client";

import { useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";

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

export default function KeyboardNavigation() {
  const router = useRouter();
  const pathname = usePathname();
  const isThrottled = useRef(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const currentIndex = ROUTES.indexOf(pathname);
      if (currentIndex === -1) return;

      if (event.key === "ArrowRight" || event.key === "ArrowDown") {
        const nextIndex = currentIndex + 1;
        if (nextIndex < ROUTES.length) {
          router.push(ROUTES[nextIndex]);
        }
      } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
        const prevIndex = currentIndex - 1;
        if (prevIndex >= 0) {
          router.push(ROUTES[prevIndex]);
        }
      }
    };

    const handleWheel = (event: WheelEvent) => {
      // Only for large screens (md: 768px)
      if (window.innerWidth < 768) return;
      if (isThrottled.current) return;

      // Threshold for deltaY to avoid accidental triggers
      if (Math.abs(event.deltaY) < 30) return;

      // Check the hover context
      let target = event.target as HTMLElement | null;
      let inFixedContainer = false;
      let inInnerScrollable = false;

      while (target && target !== document.documentElement) {
        const style = window.getComputedStyle(target);
        
        // Check if we are inside a fixed container (like the left panel)
        if (style.position === "fixed") {
          inFixedContainer = true;
        }

        // Check for explicit inner scrollbars
        const overflowY = style.overflowY;
        if ((overflowY === "auto" || overflowY === "scroll") && target.scrollHeight > target.clientHeight + 5) {
          inInnerScrollable = true;
          break;
        }
        
        target = target.parentElement;
      }

      if (inInnerScrollable) return;

      // If we are NOT in a fixed container, and the page itself is scrollable, 
      // we treat this as being in a scrollable area (like the right panel).
      const isPageScrollable = document.documentElement.scrollHeight > window.innerHeight + 5;
      if (!inFixedContainer && isPageScrollable) return;

      const currentIndex = ROUTES.indexOf(pathname);
      if (currentIndex === -1) return;

      const cooldown = 1000; // 1 second cooldown

      if (event.deltaY > 0) {
        // Scroll Down -> Next Page
        const nextIndex = currentIndex + 1;
        if (nextIndex < ROUTES.length) {
          isThrottled.current = true;
          router.push(ROUTES[nextIndex]);
          setTimeout(() => {
            isThrottled.current = false;
          }, cooldown);
        }
      } else {
        // Scroll Up -> Previous Page
        const prevIndex = currentIndex - 1;
        if (prevIndex >= 0) {
          isThrottled.current = true;
          router.push(ROUTES[prevIndex]);
          setTimeout(() => {
            isThrottled.current = false;
          }, cooldown);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("wheel", handleWheel);
    };
  }, [pathname, router]);

  return null;
}
