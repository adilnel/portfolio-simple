"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface HamburgerMenuProps {
  darkMode?: boolean;
}

export default function HamburgerMenu({ darkMode = false }: HamburgerMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const pathname = usePathname();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setHoveredItem(null);
  }, [pathname]);

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
      // AutoCAD is at /projects, but we shouldn't highlight it if we're in Certora or Delek
      return pathname === "/projects" || (pathname.startsWith("/projects/") && !pathname.startsWith("/projects/certora") && !pathname.startsWith("/projects/delek"));
    }
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const lineColor = isOpen ? "bg-white" : darkMode ? "bg-white" : "bg-black";

  if (pathname === "/") return null;

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-6 md:top-8 md:right-8 z-[150] p-2 md:p-4 group"
        aria-label="Toggle Menu"
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

      {/* Overlay Menu */}
      <div
        className={`fixed inset-0 z-[140] bg-black transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full justify-center px-8 md:px-24">
          <nav className="flex flex-col gap-8 items-start">
            {menuItems.map((item) => {
              const active = isItemActive(item.href);
              // Focus state: either explicitly hovered, or active if nothing is being hovered
              const isFocused = hoveredItem === item.label || (hoveredItem === null && active);
              
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onMouseEnter={() => setHoveredItem(item.label)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={`text-5xl md:text-7xl font-bold uppercase tracking-tight transition-all duration-300 ${
                    isFocused 
                      ? "text-white translate-x-4" 
                      : "text-white/10"
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
