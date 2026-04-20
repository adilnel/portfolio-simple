"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useNavigation } from "@/context/NavigationContext";
import Spinner from "./Spinner";

interface HamburgerMenuProps {
  darkMode?: boolean;
}

export default function HamburgerMenu({ darkMode = false }: HamburgerMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { navigate, isNavigating, navDirection } = useNavigation();

  // Close menu when route changes
  useEffect(() => {
    requestAnimationFrame(() => {
      setIsOpen(false);
      setHoveredItem(null);
    });
  }, [pathname]);

  // Handle scroll for sticky header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const menuItems = [
    { label: "Certora", href: "/projects/certora" },
    { label: "AutoCAD", href: "/projects" },
    { label: "Delek", href: "/projects/delek" },
    { label: "Tools", href: "/brands" },
    { label: "Contact", href: "/thanks" },
  ];

  const isItemActive = (href: string) => {
    if (href === "/projects") {
      return pathname === "/projects" || (pathname.startsWith("/projects/") && !pathname.startsWith("/projects/certora") && !pathname.startsWith("/projects/delek"));
    }
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  // On scroll, we force a light background (white) as requested, so text/lines must be black
  const useWhiteHeader = (isScrolled || isOpen) && !isOpen; // Re-evaluating logic
  
  // Revised colors for inverted menu
  const lineColor = isOpen ? "bg-black" : (darkMode || isScrolled) ? "bg-white" : "bg-black";
  const backToHomeColor = isOpen ? "text-zinc-400 hover:text-black" : (darkMode || isScrolled) ? "text-zinc-500 hover:text-white" : "text-zinc-400 hover:text-black";

  if (pathname === "/") return null;

  // Spinner Component
  const SpinnerComponent = () => (
    <div className="flex items-center justify-center w-5 h-5">
      <svg className="animate-spin h-4 w-4 text-current opacity-100" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-100" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
    </div>
  );

  return (
    <>
      {/* Sticky Header Bar for Mobile */}
      <div className={`md:hidden fixed top-0 left-0 right-0 h-16 flex items-center justify-between z-[150] px-6 transition-all duration-300 pointer-events-none ${
        isOpen ? "bg-white" : isScrolled ? "bg-white/90 backdrop-blur-md border-b border-black/5 shadow-sm" : "bg-transparent"
      }`}>
        {/* Back to Home Button */}
        <button
          onClick={() => navigate("/", "back")}
          disabled={isNavigating}
          className={`inline-flex items-center gap-2 ${backToHomeColor} transition-colors pointer-events-auto p-3 -ml-3 border-none bg-transparent cursor-pointer`}
          aria-label="Back to Start"
        >
          <span className="flex items-center text-sm font-medium uppercase tracking-wider h-5">
            {isNavigating && navDirection === "back" ? (
              <SpinnerComponent />
            ) : (
              <>
                <span className="mr-2">←</span>
                Back to Start
              </>
            )}
          </span>
        </button>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-3 -mr-3 group pointer-events-auto"
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
        >
          <div className="flex flex-col gap-1.5 w-6 items-end">
            <span 
              className={`h-0.5 ${lineColor} transition-all duration-300 ${isOpen ? "w-6 rotate-45 translate-y-2" : "w-6 group-hover:w-4"}`} 
            />
            <span 
              className={`h-0.5 ${lineColor} transition-all duration-300 ${isOpen ? "opacity-0" : "w-6"}`} 
            />
            <span 
              className={`h-0.5 ${lineColor} transition-all duration-300 ${isOpen ? "w-6 -rotate-45 -translate-y-2" : "w-4 group-hover:w-6"}`} 
            />
          </div>
        </button>
      </div>

      {/* Desktop Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="hidden md:block fixed top-8 right-8 z-[150] p-4 group"
        aria-label={isOpen ? "Close Menu" : "Open Menu"}
      >
        <div className="flex flex-col gap-1.5 w-6 items-end">
          <span 
            className={`h-0.5 ${isOpen ? "bg-black" : darkMode ? "bg-white" : "bg-black"} transition-all duration-300 ${isOpen ? "w-6 rotate-45 translate-y-2" : "w-6 group-hover:w-4"}`} 
          />
          <span 
            className={`h-0.5 ${isOpen ? "bg-black" : darkMode ? "bg-white" : "bg-black"} transition-all duration-300 ${isOpen ? "opacity-0" : "w-6"}`} 
          />
          <span 
            className={`h-0.5 ${isOpen ? "bg-black" : darkMode ? "bg-white" : "bg-black"} transition-all duration-300 ${isOpen ? "w-6 -rotate-45 -translate-y-2" : "w-4 group-hover:w-6"}`} 
          />
        </div>
      </button>

      {/* Overlay Menu */}
      <div
        className={`fixed inset-0 z-[140] bg-white transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full justify-center px-8 md:px-24">
          <nav className="flex flex-col gap-8 items-start">
            {menuItems.map((item) => {
              const active = isItemActive(item.href);
              const isFocused = hoveredItem === item.label || (hoveredItem === null && active);
              
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onMouseEnter={() => setHoveredItem(item.label)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={`text-5xl md:text-7xl font-bold uppercase tracking-tight transition-all duration-300 ${
                    isFocused 
                      ? "text-black translate-x-4" 
                      : "text-black/10"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
}
