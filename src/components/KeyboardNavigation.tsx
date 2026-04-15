"use client";

import { useEffect } from "react";
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

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const currentIndex = ROUTES.indexOf(pathname);
      if (currentIndex === -1) return;

      if (event.key === "ArrowRight") {
        const nextIndex = currentIndex + 1;
        if (nextIndex < ROUTES.length) {
          router.push(ROUTES[nextIndex]);
        }
      } else if (event.key === "ArrowLeft") {
        const prevIndex = currentIndex - 1;
        if (prevIndex >= 0) {
          router.push(ROUTES[prevIndex]);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [pathname, router]);

  return null;
}
