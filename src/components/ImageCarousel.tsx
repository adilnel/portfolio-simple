"use client";

import { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { useLightbox } from "./LightboxContext";

interface ImageCarouselProps {
  images: StaticImageData[];
  interval?: number;
  alt: string;
  fill?: boolean;
}

export default function ImageCarousel({ 
  images, 
  interval = 2000, 
  alt,
  fill = true 
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { openLightbox } = useLightbox();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <button 
      className={`relative cursor-pointer group border-none p-0 m-0 bg-transparent text-left outline-none ${fill ? "w-full h-full" : "block w-fit"}`}
      onClick={() => openLightbox(images, currentIndex)}
    >
      {images.map((img, index) => (
        <div
          key={index}
          className={`transition-opacity duration-0 ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          } ${fill ? "absolute inset-0" : index === 0 ? "relative" : "absolute inset-0"}`}
        >
          <Image
            src={img}
            alt={`${alt} - Frame ${index}`}
            fill={fill}
            className="object-contain"
            priority={true}
            {...(!fill ? { width: img.width, height: img.height } : {})}
          />
        </div>
      ))}
      {/* Lightbox Trigger Hint */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center z-20 pointer-events-none">
        <div className="bg-white/90 px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 text-sm font-medium shadow-sm">
          Click to expand
        </div>
      </div>
    </button>
  );
}
