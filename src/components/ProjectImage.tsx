"use client";

import Image, { StaticImageData } from "next/image";
import { useLightbox } from "./LightboxContext";

interface ProjectImageProps {
  src: StaticImageData;
  alt: string;
  className?: string;
  priority?: boolean;
  fill?: boolean;
}

export default function ProjectImage({ 
  src, 
  alt, 
  className = "", 
  priority = false,
  fill = true 
}: ProjectImageProps) {
  const { openLightbox } = useLightbox();

  return (
    <button 
      className={`relative cursor-pointer group border-none p-0 m-0 bg-transparent text-left outline-none ${fill ? "w-full h-full" : "block w-fit"} ${className}`}
      onClick={() => openLightbox([src])}
    >
      <Image
        src={src}
        alt={alt}
        fill={fill}
        className="object-contain"
        priority={priority}
        {...(!fill ? { width: src.width, height: src.height } : {})}
      />
      {/* Lightbox Trigger Hint */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center pointer-events-none">
        <div className="bg-white/90 px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 text-sm font-medium shadow-sm">
          Click to expand
        </div>
      </div>
    </button>
  );
}
