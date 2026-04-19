"use client";

import React, { createContext, useContext, useState, useCallback, useEffect } from "react";
import { StaticImageData } from "next/image";

interface LightboxContextType {
  openLightbox: (images: (StaticImageData | string)[], index?: number) => void;
  closeLightbox: () => void;
}

const LightboxContext = createContext<LightboxContextType | undefined>(undefined);

export function LightboxProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [images, setImages] = useState<(StaticImageData | string)[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = useCallback((newImages: (StaticImageData | string)[], index = 0) => {
    setImages(newImages);
    setCurrentIndex(index);
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = "unset";
  }, []);

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Close on ESC key and navigate with arrows
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (images.length > 1) {
        if (e.key === "ArrowRight") {
          e.preventDefault();
          e.stopPropagation();
          nextImage();
        }
        if (e.key === "ArrowLeft") {
          e.preventDefault();
          e.stopPropagation();
          prevImage();
        }
      }
    };
    
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown, true); // Use capture to intercept before other listeners
    }
    return () => window.removeEventListener("keydown", handleKeyDown, true);
  }, [isOpen, closeLightbox, images.length, nextImage, prevImage]);

  return (
    <LightboxContext.Provider value={{ openLightbox, closeLightbox }}>
      {children}
      {isOpen && (
        <div 
          className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4 md:p-12 animate-in fade-in duration-200 cursor-pointer"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button 
            className="absolute top-8 right-8 text-white/60 hover:text-white transition-colors z-[110] p-4"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          {/* Navigation Buttons - Only if multiple images */}
          {images.length > 1 && (
            <>
              <button 
                className="absolute left-4 md:left-8 text-black bg-white/20 hover:bg-white/40 transition-all z-[110] p-3 rounded-full backdrop-blur-sm"
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                aria-label="Previous image"
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <button 
                className="absolute right-4 md:right-8 text-black bg-white/20 hover:bg-white/40 transition-all z-[110] p-3 rounded-full backdrop-blur-sm"
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                aria-label="Next image"
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </>
          )}

          {/* Image Container */}
          <div className="relative w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={typeof images[currentIndex] === "string" ? images[currentIndex] : (images[currentIndex] as StaticImageData).src} 
              alt="Lightbox"
              className="max-w-full max-h-full object-contain shadow-2xl"
            />
            
            {/* Image Counter */}
            {images.length > 1 && (
              <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 text-white/60 font-medium">
                {currentIndex + 1} / {images.length}
              </div>
            )}
          </div>
        </div>
      )}
    </LightboxContext.Provider>
  );
}

export function useLightbox() {
  const context = useContext(LightboxContext);
  if (!context) {
    throw new Error("useLightbox must be used within a LightboxProvider");
  }
  return context;
}
