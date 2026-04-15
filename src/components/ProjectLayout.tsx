import Link from "next/link";
import { ReactNode } from "react";

interface ProjectLayoutProps {
  children: ReactNode;
  rightContent: ReactNode;
  title: string;
  subtitle: string;
  backLink: string;
  nextLink?: string | { label: string; href: string };
}

export default function ProjectLayout({
  children,
  rightContent,
  title,
  subtitle,
  backLink,
  nextLink,
}: ProjectLayoutProps) {
  return (
    <main className="min-h-screen bg-white text-black flex flex-col md:flex-row overflow-x-hidden">
      {/* Left Content - Fixed on Desktop */}
      <div className="w-full md:w-1/2 md:fixed md:left-0 md:top-0 md:h-screen flex flex-col justify-between p-8 md:p-24 lg:pl-44 bg-white z-10 border-r border-zinc-100">
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

          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight uppercase">
              {title}
            </h2>
            <div 
              className="text-xl font-semibold opacity-50 leading-tight max-w-md" 
              dangerouslySetInnerHTML={{ __html: subtitle }} 
            />
          </div>
        </div>

        {/* Content Aligned to Top */}
        <div className="flex-1 flex flex-col justify-start py-12 md:py-16 overflow-y-auto">
          {children}
        </div>

        <div className="flex items-center gap-8 mt-auto pt-8 md:pt-0 bg-white">
          <div className="flex items-center gap-6 text-3xl">
            <Link
              href={backLink}
              className="hover:-translate-x-1 transition-transform text-black"
            >
              ←
            </Link>
            {nextLink ? (
              typeof nextLink === "string" ? (
                <Link
                  href={nextLink}
                  className="hover:translate-x-1 transition-transform text-black"
                >
                  →
                </Link>
              ) : (
                <Link
                  href={nextLink.href}
                  className="flex items-center gap-4 text-black group cursor-pointer"
                >
                  <span className="text-2xl font-bold font-inter tracking-tight uppercase">
                    {nextLink.label}
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </Link>
              )
            ) : (
              <span className="opacity-30 cursor-not-allowed">→</span>
            )}
          </div>
        </div>
      </div>

      {/* Spacer for Desktop since the left panel is fixed */}
      <div className="hidden md:block w-1/2" />

      {/* Right Content - Scrollable Mockup Space with Zinc Background */}
      <div className="w-full md:w-1/2 min-h-screen bg-zinc-50 flex flex-col items-center py-24 px-8 space-y-24">
        {rightContent}
      </div>
    </main>
  );
}
