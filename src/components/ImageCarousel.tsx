"use client";

import { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { useLightbox } from "./LightboxContext";

interface ImageCarouselProps {
  images: StaticImageData[];
  interval?: number;
  alt: string;
}

export default function ImageCarousel({ images, interval = 2000, alt }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { openLightbox } = useLightbox();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div 
      className="relative w-full h-full cursor-pointer group"
      onClick={() => openLightbox(images, currentIndex)}
    >
      <Image
        src={images[currentIndex]}
        alt={`${alt} - Frame ${currentIndex}`}
        fill
        className="object-contain"
        priority
      />
      {/* Lightbox Trigger Hint */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center">
        <div className="bg-white/90 px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 text-sm font-medium shadow-sm">
          Click to expand
        </div>
      </div>
    </div>
  );
}
