"use client";

import Link from "next/link";
import Image from "next/image";
import ProjectLayout from "@/components/ProjectLayout";
import GeminiLogo from "@/components/GeminiLogo";
import meImg from "@/assets/me.jpeg";

export default function Home() {
  return (
    <ProjectLayout
      title=""
      darkMode={true}
      isHome={true}
      isMobileImageHidden={true}
      nextLink={{ label: "Projects", href: "/projects/certora" }}
      rightContent={
        <div className="relative w-full min-h-screen">
          <Image
            src={meImg}
            alt="Avi Adlin"
            fill
            className="object-cover"
            priority
          />
        </div>
      }
    >
      <div className="flex flex-col gap-6 pt-24 md:pt-0">
        <h1 className="text-5xl sm:text-[80px] font-bold leading-none tracking-tight uppercase">
          <span className="font-normal block">Quick</span>
          <span>Portfolio</span>
        </h1>
        <p className="text-xl sm:text-[34px] font-semibold text-zinc-400">
          By Avi Adlin
        </p>
      </div>

      <div className="mt-12 max-w-lg">
        <div className="flex items-start gap-4 p-4 rounded-2xl bg-zinc-900 border border-zinc-800">
          <div className="p-2 rounded-lg bg-zinc-800 shadow-sm flex-shrink-0">
            <GeminiLogo className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium text-zinc-300">
              AI-Powered Presentation
            </p>
            <p className="text-sm text-zinc-500 leading-relaxed">
              I have developed this presentation and refined using <span className="text-zinc-300 font-medium">Gemini CLI</span> with the <span className="text-zinc-300 font-medium">Figma MCP server</span>, demonstrating a seamless design-to-code workflow.
            </p>
          </div>
        </div>
      </div>
    </ProjectLayout>
  );
}
