"use client";

import Image from "next/image";
import delekSuccessImg from "@/assets/delek-success.png";
import delekAwardImg from "@/assets/delek-award.png";
import ProjectLayout from "@/components/ProjectLayout";
import ProjectImage from "@/components/ProjectImage";
import { useLightbox } from "@/components/LightboxContext";

export default function DelekSuccess() {
  const { openLightbox } = useLightbox();

  return (
    <ProjectLayout
      title="DELEK APP"
      subtitle="Convenience Store Upscale<br/>iOS & Android"
      backLink="/projects/delek/solution"
      nextLink={{ label: "BRANDS", href: "/brands" }}
      rightContent={
        <div className="relative w-full max-w-[280px] md:max-w-[400px] aspect-[375/812] shadow-2xl rounded-[40px] overflow-hidden">
          <ProjectImage
            src={delekSuccessImg}
            alt="Delek App Success Interface"
          />
          {/* Award Badge Overlay */}
          <button 
            type="button"
            className="absolute top-[37%] left-1/2 -translate-x-1/2 -rotate-6 w-[140px] h-[140px] md:w-[200px] md:h-[200px] cursor-pointer hover:scale-105 transition-transform z-10 border-none bg-transparent p-0 m-0 outline-none"
            onClick={(e) => {
              e.stopPropagation();
              openLightbox([delekAwardImg]);
            }}
          >
            <Image
              src={delekAwardImg}
              alt="Israeli Digital Transformation Award 2020"
              fill
              className="object-contain drop-shadow-xl"
            />
          </button>
        </div>
      }
    >
      <h1 className="text-5xl md:text-7xl font-bold uppercase leading-none mb-6">
        <span className="font-normal block text-[72px]">the</span>
        Success
      </h1>
      <div className="text-xl opacity-80 max-w-lg leading-relaxed space-y-4">
        <p>
          Prosperous growth hacking move that led to high conversion of 30k
          signings within 10 days, and Winning the &ldquo;Israeli digital
          transformation award 2020&rdquo;.
        </p>
      </div>
    </ProjectLayout>
  );
}
