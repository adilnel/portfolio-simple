"use client";

import Link from "next/link";
import { useEffect, useRef, useState, useCallback } from "react";

export interface NavItem {
  label: string;
  href: string;
  active?: boolean;
}

interface ProjectHeaderProps {
  title: string;
  subtitle?: string;
  navItems?: NavItem[];
  isHome?: boolean;
  darkMode?: boolean;
}

export default function ProjectHeader({
  title,
  subtitle,
  navItems,
  isHome = false,
  darkMode = false,
}: ProjectHeaderProps) {
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

  const textColor = darkMode ? "text-white" : "text-black";
  const subTextColor = darkMode ? "text-zinc-400" : "text-black/30";
  const gradientFrom = darkMode ? "from-black" : "from-white";

  return (
    <div className="space-y-4">
      {!isHome && (
        <Link
          href="/"
          className={`inline-flex items-center gap-2 ${darkMode ? "text-zinc-500 hover:text-white" : "text-zinc-400 hover:text-black"} transition-colors mb-4 mt-2 md:mt-0 group`}
        >
          <span className="flex items-center">
            <span className="mr-2">←</span>
            Back to Home
          </span>
        </Link>
      )}

      <div className="space-y-2 md:space-y-6">
        {title && (
          <h2 className="text-[32px] font-bold tracking-tight uppercase leading-none">
            {title}
          </h2>
        )}
        
        {subtitle && (
          <div 
            className={`text-lg md:text-xl font-semibold opacity-50 leading-tight max-w-md`} 
            dangerouslySetInnerHTML={{ __html: subtitle }} 
          />
        )}

        {navItems && (
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
                      ? textColor 
                      : `${subTextColor} ${darkMode ? "hover:text-zinc-200" : "hover:text-black/60"}`
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="w-24 shrink-0" />
            </div>
            {/* Gradient Masks to indicate more content */}
            <div className={`pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r ${gradientFrom} via-${darkMode ? "black/40" : "white/40"} to-transparent transition-opacity duration-300 ${showLeftGradient ? "opacity-100" : "opacity-0"}`} />
            <div className={`pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l ${gradientFrom} via-${darkMode ? "black/40" : "white/40"} to-transparent transition-opacity duration-300 ${showRightGradient ? "opacity-100" : "opacity-0"}`} />
          </div>
        )}
      </div>
    </div>
  );
}
