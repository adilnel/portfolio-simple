"use client";

import Link from "next/link";
import GeminiLogo from "@/components/GeminiLogo";

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen bg-black text-white px-8 pt-32 pb-16 sm:px-24 sm:pt-40">
      <div className="flex flex-col gap-6">
        <h1 className="text-6xl sm:text-[96px] font-bold leading-none tracking-tight uppercase">
          <span className="font-normal block">Quick</span>
          <span>Portfolio</span>
        </h1>
        <p className="text-xl sm:text-[34px] font-semibold text-zinc-400">
          By Avi Adlin
        </p>
      </div>

      <div className="mt-12 max-w-lg">
        <div className="flex items-start gap-4 p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-sm">
          <div className="p-2 rounded-lg bg-zinc-800 flex-shrink-0">
            <GeminiLogo className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium text-zinc-300">
              AI-Powered Presentation
            </p>
            <p className="text-sm text-zinc-500 leading-relaxed">
              This interactive portfolio was built and refined using <span className="text-zinc-300">Gemini CLI</span> with the <span className="text-zinc-300">Figma MCP server</span>, demonstrating a seamless design-to-code workflow.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-auto pt-24">
        <Link 
          href="/projects/certora" 
          className="inline-flex items-center gap-4 text-xl sm:text-2xl font-semibold uppercase hover:text-zinc-300 transition-colors group"
        >
          Projects
          <span className="text-3xl group-hover:translate-x-2 transition-transform">→</span>
        </Link>
      </div>
    </main>
  );
}
