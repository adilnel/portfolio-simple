"use client";

import Link from "next/link";
import { ReactNode, useEffect, useRef, useState, useCallback } from "react";

interface NavItem {
  label: string;
  href: string;
  active?: boolean;
}

interface ProjectLayoutProps {
  children: ReactNode;
  rightContent: ReactNode;
  title: string;
  subtitle?: string;
  navItems?: NavItem[];
  backLink: string;
  nextLink?: string | { label: string; href: string };
  hideRightPanel?: boolean;
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
}: ProjectLayoutProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftGradient, setShowLeftGradient] = useState(false);
  const [showRightGradient, setShowRightGradient] = useState(false);

  const checkScroll = useCallback(() => {
    const container = scrollContainerRef.current;
    if (container) {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      setShowLeftGradient(scrollLeft > 5);
      setShowRightGradient(scrollLeft + clientWidth < scrollWidth - 5);
    }
  }, []);

  // Handle horizontal scroll with mouse wheel
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      checkScroll();
      container.addEventListener("scroll", checkScroll);
      window.addEventListener("resize", checkScroll);
      
      const timer = setTimeout(checkScroll, 100);
      
      return () => {
        container.removeEventListener("scroll", checkScroll);
        window.removeEventListener("resize", checkScroll);
        clearTimeout(timer);
      };
    }
  }, [navItems, checkScroll]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      const activeElement = container.querySelector('[data-active="true"]') as HTMLElement;
      if (activeElement) {
        const containerRect = container.getBoundingClientRect();
        const itemRect = activeElement.getBoundingClientRect();

        const isVisible = (
          itemRect.left >= containerRect.left &&
          itemRect.right <= containerRect.right
        );

        if (!isVisible) {
          activeElement.scrollIntoView({
            behavior: "auto",
            inline: "center",
            block: "nearest"
          });
          setTimeout(checkScroll, 50);
        }
      }
    }
  }, [navItems, checkScroll]);

  const handleItemClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const container = scrollContainerRef.current;
    const item = e.currentTarget;
    
    if (container && item) {
      const containerRect = container.getBoundingClientRect();
      const itemRect = item.getBoundingClientRect();

      const isVisible = (
        itemRect.left >= containerRect.left &&
        itemRect.right <= containerRect.right
      );

      if (!isVisible) {
        item.scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest"
        });
      }
    }
  };

  return (
    <main className="min-h-screen bg-white text-black flex flex-col md:flex-row overflow-x-hidden pb-32 md:pb-0">
      {/* Left Content - Fixed on Desktop, full height if no right panel */}
      <div className={`w-full ${hideRightPanel ? "md:w-full min-h-screen" : "md:w-1/2"} md:fixed md:left-0 md:top-0 md:h-screen flex flex-col justify-between pt-4 pb-8 px-8 md:pt-[100px] md:pb-24 md:px-24 lg:pl-[176px] bg-white z-10 ${!hideRightPanel ? "border-r border-zinc-100" : ""}`}>
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-black transition-colors mb-8 group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">
              ←
            </span>
            Back to Start
          </Link>

          <div className="space-y-6">
            <h2 className="text-[32px] font-bold tracking-tight uppercase leading-none">
              {title}
            </h2>
            
            {navItems ? (
              <div className="relative group md:-mr-24 -mx-8 px-8 md:mx-0 md:px-0">
                <div 
                  ref={scrollContainerRef}
                  className="flex overflow-x-auto custom-horizontal-scrollbar gap-x-8 md:gap-x-10 py-2"
                >
                  {navItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      data-active={item.active}
                      onClick={handleItemClick}
                      className={`text-lg md:text-xl font-bold transition-all whitespace-nowrap shrink-0 py-1 ${
                        item.active 
                          ? "text-black" 
                          : "text-black/30 hover:text-black/60"
                      }`}
                    >
                      {item.label}
                    </Link>
                    ))}
                    <div className="w-24 shrink-0" />
                    </div>
                    {/* Gradient Masks to indicate more content */}
                <div className={`pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white via-white/40 to-transparent transition-opacity duration-300 ${showLeftGradient ? "opacity-100" : "opacity-0"}`} />
                <div className={`pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white via-white/40 to-transparent transition-opacity duration-300 ${showRightGradient ? "opacity-100" : "opacity-0"}`} />
              </div>
            ) : subtitle ? (
              <div 
                className="text-2xl font-semibold opacity-50 leading-tight max-w-md" 
                dangerouslySetInnerHTML={{ __html: subtitle }} 
              />
            ) : null}
          </div>
        </div>

        {/* Content Area - on mobile, we want children above the image for certain pages */}
        <div className={`flex-1 flex flex-col ${hideRightPanel ? "items-center justify-center text-center py-12 md:py-24" : "justify-start pt-6 md:py-16"} overflow-y-auto no-scrollbar`}>
          <div className={`w-full ${hideRightPanel ? "max-w-4xl" : ""}`}>
            {children}
          </div>
        </div>

        {/* Mobile Image - Shown after content on mobile if requested */}
        {!hideRightPanel && (
          <div className="md:hidden -mx-8 my-8 bg-zinc-50 border-y border-zinc-100 py-6 px-8 flex justify-center">
            {rightContent}
          </div>
        )}

        {/* Navigation Arrows - Sticky Bottom on mobile, relative in flex flow on desktop */}
        <div className={`fixed md:relative bottom-0 left-0 w-full md:w-auto p-8 md:p-0 md:pt-12 bg-white/90 md:bg-transparent backdrop-blur-md md:backdrop-blur-none border-t md:border-t-0 border-zinc-100 z-50`}>
          <div className="flex items-center justify-between md:justify-start gap-12 w-full max-w-md md:max-w-none mx-auto md:mx-0">
            {backLink && (
              <Link
                href={backLink}
                className="group flex items-center justify-center w-12 h-12 md:w-8 md:h-8 opacity-40 hover:opacity-100 transition-opacity"
                aria-label="Previous page"
              >
                <span className="text-3xl md:text-2xl transition-transform group-hover:-translate-x-1">←</span>
              </Link>
            )}
            
            {nextLink && (
              <Link
                href={typeof nextLink === "string" ? nextLink : nextLink.href}
                className="group flex items-center justify-center min-w-[3rem] h-12 md:h-8 opacity-40 hover:opacity-100 transition-opacity ml-auto md:ml-0"
                aria-label="Next page"
              >
                {typeof nextLink === "object" && (
                  <span className="mr-3 text-lg md:text-xl font-bold tracking-tight uppercase">
                    {nextLink.label}
                  </span>
                )}
                <span className="text-3xl md:text-2xl transition-transform group-hover:translate-x-1">→</span>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Right Column / Spacer for desktop */}
      {!hideRightPanel ? (
        <>
          <div className="hidden md:block w-1/2" />
          <div className="hidden md:flex w-full md:w-1/2 min-h-screen bg-zinc-50 flex-col items-center justify-center p-8 md:py-24 space-y-24">
            {rightContent}
          </div>
        </>
      ) : null}
    </main>
  );
}
