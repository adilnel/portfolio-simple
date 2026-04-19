"use client";

import Link from "next/link";
import { ReactNode, useState, useEffect, useRef, useCallback } from "react";
import ProjectHeader, { NavItem } from "./ProjectHeader";
import HamburgerMenu from "./HamburgerMenu";

interface ProjectLayoutProps {
  children: ReactNode;
  rightContent: ReactNode;
  title: string;
  subtitle?: string;
  navItems?: NavItem[];
  backLink?: string;
  nextLink?: string | { label: string; href: string };
  hideRightPanel?: boolean;
  darkMode?: boolean;
  isMobileImageHidden?: boolean;
  isMobileContentCentered?: boolean;
  isHome?: boolean;
  extraFooterContent?: ReactNode;
}

export default function ProjectLayout({
  children,
  rightContent,
  title,
  subtitle,
  navItems,
  backLink,
  nextLink,
  hideRightPanel = false,
  darkMode = false,
  isMobileImageHidden = false,
  isMobileContentCentered = false,
  isHome = false,
  extraFooterContent,
}: ProjectLayoutProps) {
  const bgColor = darkMode ? "bg-black" : "bg-white";
  const textColor = darkMode ? "text-white" : "text-black";
  const borderColor = darkMode ? "border-zinc-800" : "border-zinc-100";
  const gradientColor = darkMode ? "from-black/0 to-black" : "from-white/0 to-white";

  const contentRef = useRef<HTMLDivElement>(null);
  const [showBottomGradient, setShowBottomGradient] = useState(false);

  const checkScroll = useCallback(() => {
    const container = contentRef.current;
    if (container) {
      const { scrollTop, scrollHeight, clientHeight } = container;
      // Show gradient if we haven't reached the bottom
      setShowBottomGradient(scrollTop + clientHeight < scrollHeight - 10);
    }
  }, []);

  useEffect(() => {
    const container = contentRef.current;
    if (container) {
      checkScroll();
      container.addEventListener("scroll", checkScroll);
      window.addEventListener("resize", checkScroll);
      return () => {
        container.removeEventListener("scroll", checkScroll);
        window.removeEventListener("resize", checkScroll);
      };
    }
  }, [checkScroll, children]);

  return (
    <main className={`min-h-screen ${bgColor} ${textColor} flex flex-col md:flex-row overflow-x-hidden pb-32 md:pb-0 relative`}>
      {/* Mobile background image for home page */}
      {isHome && (
        <div className="md:hidden absolute inset-0 z-0 opacity-20 pointer-events-none">
          {rightContent}
        </div>
      )}
      
      <HamburgerMenu darkMode={darkMode} />
      {/* Left Content - Fixed on Desktop, full height if no right panel */}
      <div className={`w-full ${hideRightPanel ? "md:w-full min-h-screen" : "md:w-1/2"} md:fixed md:left-0 md:top-0 md:h-screen flex flex-col justify-between pt-4 pb-8 px-8 md:pt-[100px] md:pb-24 md:px-24 ${isHome ? "bg-transparent md:bg-black" : bgColor} z-10 ${!hideRightPanel ? `border-r ${borderColor}` : ""}`}>
        <ProjectHeader 
          title={title}
          subtitle={subtitle}
          navItems={navItems}
          isHome={isHome}
          darkMode={darkMode}
        />

        {/* Content Area */}
        <div className="flex-1 relative overflow-hidden flex flex-col">
          <div 
            ref={contentRef}
            id="main-content-area"
            className={`flex-1 flex flex-col ${hideRightPanel || isMobileContentCentered ? "items-center justify-center text-center py-12 md:py-24" : "justify-start pt-6 md:py-16"} overflow-y-auto no-scrollbar`}
          >
            <div className={`w-full ${hideRightPanel ? "max-w-6xl" : ""}`}>
              {children}
            </div>
          </div>
          
          {/* Bottom Gradient Fade */}
          <div className={`pointer-events-none absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b ${gradientColor} transition-opacity duration-300 z-20 ${showBottomGradient ? "opacity-100" : "opacity-0"}`} />
        </div>

        {/* Mobile Image - Shown after content on mobile if requested */}
        {!hideRightPanel && !isMobileImageHidden && (
          <div className={`md:hidden -mx-8 my-8 ${darkMode ? "bg-zinc-900 border-zinc-800" : "bg-zinc-50 border-zinc-100"} border-y py-6 px-8 flex justify-center`}>
            {rightContent}
          </div>
        )}

        {/* Navigation Arrows - Sticky Bottom on mobile, relative in flex flow on desktop */}
        {extraFooterContent && (
          <div className="md:hidden fixed bottom-[88px] left-0 w-full px-8 z-[60] pointer-events-none">
            <div className="pointer-events-auto">
              {extraFooterContent}
            </div>
          </div>
        )}
        <div className={`fixed md:relative bottom-0 left-0 w-full md:w-auto px-4 py-2 md:p-0 md:pt-4 ${darkMode ? "bg-black/90 md:bg-transparent" : "bg-white/90 md:bg-transparent"} backdrop-blur-md md:backdrop-blur-none border-t md:border-t-0 ${borderColor} z-50`}>
          <div className="flex items-center md:items-end justify-between md:justify-start gap-x-12 gap-y-4 w-full md:max-w-none mx-auto md:mx-0 flex-wrap px-4 md:px-0">
            <div className="flex items-center justify-between md:justify-start gap-12 w-full md:w-auto">
              {backLink && (
                <Link
                  href={backLink}
                  className={`group flex items-center justify-center w-12 h-12 md:w-8 md:h-8 ${darkMode ? "opacity-60 hover:opacity-100" : "opacity-40 hover:opacity-100"} transition-opacity`}
                  aria-label="Previous page"
                >
                  <span className="flex items-center">
                    <span className="text-3xl md:text-2xl">←</span>
                  </span>
                </Link>
              )}
              
              {nextLink && (
                <Link
                  href={typeof nextLink === "string" ? nextLink : nextLink.href}
                  className={`group flex items-center justify-center min-w-[3rem] h-12 md:h-8 ${darkMode ? "opacity-60 hover:opacity-100" : "opacity-40 hover:opacity-100"} transition-opacity ml-auto md:ml-0`}
                  aria-label="Next page"
                >
                  <span className="flex items-center relative">
                    {typeof nextLink === "object" && (
                      <span className="absolute right-full mr-3 text-lg md:text-xl font-bold tracking-tight uppercase whitespace-nowrap md:relative md:right-auto md:mr-3">
                        {nextLink.label}
                      </span>
                    )}
                    <span className="text-3xl md:text-2xl">→</span>
                  </span>
                </Link>
              )}            </div>

            {isHome && (
              <span className={`hidden md:block text-[10px] uppercase tracking-[0.2em] font-bold ${darkMode ? "text-white/30" : "text-black/30"} whitespace-nowrap md:mb-1.5`}>
                💡 Use keyboard arrows to navigate back and forth
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Right Column / Spacer for desktop */}
      {!hideRightPanel ? (
        <>
          <div className="hidden md:block w-1/2" />
          <div className={`hidden md:flex w-full md:w-1/2 min-h-screen ${darkMode ? "bg-zinc-900 p-0" : "bg-zinc-50 p-8 md:py-24"} flex-col items-center justify-center space-y-24`}>
            {rightContent}
          </div>
        </>
      ) : null}
    </main>
  );
}
