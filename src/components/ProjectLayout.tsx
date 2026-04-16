"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useRef } from "react";

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
}

export default function ProjectLayout({
  children,
  rightContent,
  title,
  subtitle,
  navItems,
  backLink,
  nextLink,
}: ProjectLayoutProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Scroll active item into view on mount or when navItems change
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      const activeElement = container.querySelector('[data-active="true"]') as HTMLElement;
      if (activeElement) {
        const containerRect = container.getBoundingClientRect();
        const itemRect = activeElement.getBoundingClientRect();

        // Check if the item is already mostly visible within the container
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
        }
      }
    }
  }, [navItems]);

  const handleItemClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const container = scrollContainerRef.current;
    const item = e.currentTarget;
    
    if (container && item) {
      const containerRect = container.getBoundingClientRect();
      const itemRect = item.getBoundingClientRect();

      // Check if the item is already mostly visible within the container
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
      {/* Left Content - Fixed on Desktop */}
      <div className="w-full md:w-1/2 md:fixed md:left-0 md:top-0 md:h-screen flex flex-col justify-between p-8 md:pt-[132px] md:pb-24 md:px-24 lg:pl-[176px] bg-white z-10 border-r border-zinc-100">
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-black transition-colors mb-8 group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">
              ←
            </span>
            Back to Home
          </Link>

          <div className="space-y-6">
            <h2 className="text-[32px] font-bold tracking-tight uppercase leading-none">
              {title}
            </h2>
            
            {/* Sub-project Navigation or Subtitle */}
            {navItems ? (
              <div className="relative group md:-mr-24 -mx-8 px-8 md:mx-0 md:px-0">
                {/* Horizontal Scroll Container */}
                <div 
                  ref={scrollContainerRef}
                  className="flex overflow-x-auto custom-scrollbar gap-x-8 md:gap-x-10 py-2"
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
                  {/* End Spacer for right padding on scroll */}
                  <div className="w-12 shrink-0 md:hidden" />
                </div>
                
                {/* Mobile Gradient Masks - Only visible on small screens */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white via-white/80 to-transparent md:hidden" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white via-white/80 to-transparent md:hidden" />
              </div>
            ) : subtitle ? (
              <div 
                className="text-2xl font-semibold opacity-50 leading-tight max-w-md" 
                dangerouslySetInnerHTML={{ __html: subtitle }} 
              />
            ) : null}
          </div>
        </div>

        {/* Mobile Image - Shown after header but before content */}
        <div className="md:hidden -mx-8 my-8 bg-zinc-50 border-y border-zinc-100 py-12 px-8 flex justify-center">
          {rightContent}
        </div>

        {/* Content Aligned to Top */}
        <div className="flex-1 flex flex-col justify-start py-12 md:py-16 overflow-y-auto custom-scrollbar">
          {children}
        </div>

        {/* Navigation Arrows - Sticky Bottom */}
        <div className="fixed bottom-0 left-0 w-full md:w-1/2 p-8 md:pt-12 md:pb-20 md:px-24 lg:pl-[176px] bg-white/90 backdrop-blur-md border-t md:border-t-0 border-zinc-100 z-50">
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

      {/* Spacer for Desktop since the left panel is fixed */}
      <div className="hidden md:block w-1/2" />

      {/* Right Content - Vertically Centered on Desktop, Top Aligned on Mobile */}
      <div className="hidden md:flex w-full md:w-1/2 min-h-screen bg-zinc-50 flex-col items-center justify-start md:justify-center pt-8 pb-24 md:py-24 px-8 space-y-24">
        {rightContent}
      </div>
    </main>
  );
}
