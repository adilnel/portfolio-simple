"use client";

import React, { createContext, useContext, useState, useTransition, useCallback, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

interface NavigationContextType {
  isNavigating: boolean;
  navDirection: "back" | "next" | null;
  navigate: (href: string, direction: "back" | "next") => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export function NavigationProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [navDirection, setNavDirection] = useState<"back" | "next" | null>(null);

  const navigate = useCallback((href: string, direction: "back" | "next") => {
    setNavDirection(direction);
    startTransition(() => {
      router.push(href);
    });
  }, [router]);

  // Reset direction when pathname changes
  useEffect(() => {
    requestAnimationFrame(() => {
      setNavDirection(null);
    });
  }, [pathname]);

  return (
    <NavigationContext.Provider value={{ 
      isNavigating: isPending, 
      navDirection, 
      navigate 
    }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return context;
}
