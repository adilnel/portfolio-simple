"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import ProjectLayout from "@/components/ProjectLayout";
import GeminiLogo from "@/components/GeminiLogo";
import meImg from "@/assets/me.jpeg";

function GeminiBox({ className = "", onDismiss }: { className?: string; onDismiss: () => void }) {
  return (
    <div className={`flex items-start gap-4 p-4 rounded-2xl bg-zinc-900/90 backdrop-blur-sm border border-zinc-800 relative group ${className}`}>
      <button 
        onClick={onDismiss}
        className="absolute top-3 right-3 text-zinc-500 hover:text-white transition-colors p-1 z-10"
        aria-label="Dismiss"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L13 13M1 13L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>
      
      <div className="p-2 rounded-lg bg-zinc-800 shadow-sm flex-shrink-0">
        <GeminiLogo className="w-6 h-6" />
      </div>
      <div className="space-y-1 pr-6">
        <p className="text-sm font-medium text-zinc-300">
          AI-Powered Presentation
        </p>
        <p className="text-sm text-zinc-500 leading-relaxed">
          I have developed this presentation and refined using <span className="text-zinc-300 font-medium">Gemini CLI</span> with the <span className="text-zinc-300 font-medium">Figma MCP server</span>, demonstrating a seamless design-to-code workflow.
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  const [{ isVisible, isLoaded }, setState] = useState({ isVisible: false, isLoaded: false });

  useEffect(() => {
    const dismissed = localStorage.getItem("gemini-box-dismissed") === "true";
    setState({ isVisible: !dismissed, isLoaded: true });
  }, []);

  const handleDismiss = () => {
    setState(prev => ({ ...prev, isVisible: false }));
    localStorage.setItem("gemini-box-dismissed", "true");
  };

  return (
    <ProjectLayout
      title=""
      darkMode={true}
      isHome={true}
      isMobileImageHidden={true}
      nextLink={{ label: "Projects", href: "/projects/certora" }}
      extraFooterContent={
        isLoaded && isVisible ? (
          <div className="pb-2">
            <GeminiBox onDismiss={handleDismiss} />
          </div>
        ) : null
      }
      rightContent={
        <div className="relative w-full min-h-screen">
          <Image
            src={meImg}
            alt="Avi Adlin"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      }
    >
      <div className="flex flex-col gap-6 pt-24 md:pt-0 overflow-break">
        <h1 className="text-[clamp(2.5rem,5.7vw,5rem)] font-bold leading-none tracking-tight uppercase">
          <span className="font-normal block">Quick</span>
          <span>Portfolio</span>
        </h1>
        <p className="text-xl sm:text-[34px] font-semibold text-zinc-400">
          By Avi Adlin
        </p>
      </div>

      {isLoaded && isVisible && (
        <div className="mt-12 max-w-lg hidden md:block">
          <GeminiBox onDismiss={handleDismiss} />
        </div>
      )}
    </ProjectLayout>
  );
}
