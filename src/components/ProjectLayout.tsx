import Link from "next/link";
import { ReactNode } from "react";

interface NavItem {
  label: string;
  href: string;
  active?: boolean;
}

interface ProjectLayoutProps {
  children: ReactNode;
  rightContent: ReactNode;
  title: string;
  subtitle?: string;
  navItems?: NavItem[];
  backLink: string;
  nextLink?: string | { label: string; href: string };
}

export default function ProjectLayout({
  children,
  rightContent,
  title,
  subtitle,
  navItems,
  backLink,
  nextLink,
}: ProjectLayoutProps) {
  return (
    <main className="min-h-screen bg-white text-black flex flex-col md:flex-row overflow-x-hidden pb-32 md:pb-0">
      {/* Left Content - Fixed on Desktop */}
      <div className="w-full md:w-1/2 md:fixed md:left-0 md:top-0 md:h-screen flex flex-col justify-between p-8 md:pt-[132px] md:pb-24 md:px-24 lg:pl-[176px] bg-white z-10 border-r border-zinc-100">
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

          <div className="space-y-6">
            <h2 className="text-[32px] font-bold tracking-tight uppercase leading-none">
              {title}
            </h2>
            
            {/* Sub-project Navigation or Subtitle */}
            {navItems ? (
              <div className="flex flex-wrap gap-x-10 gap-y-4 pt-2">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`text-2xl font-bold transition-all ${
                      item.active 
                        ? "text-black underline underline-offset-[12px] decoration-2" 
                        : "text-black/30 hover:text-black/60"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            ) : subtitle ? (
              <div 
                className="text-2xl font-semibold opacity-50 leading-tight max-w-md" 
                dangerouslySetInnerHTML={{ __html: subtitle }} 
              />
            ) : null}
          </div>
        </div>

        {/* Content Aligned to Top */}
        <div className="flex-1 flex flex-col justify-start py-12 md:py-16 overflow-y-auto">
          {children}
        </div>

        {/* Sticky Mobile Nav / Desktop Bottom Nav */}
        <div className="fixed bottom-0 left-0 w-full p-8 bg-white/90 backdrop-blur-md border-t border-zinc-100 z-50 md:relative md:bottom-auto md:left-auto md:w-auto md:p-0 md:bg-transparent md:backdrop-blur-none md:border-t-0 md:mt-auto md:pt-0">
          <div className="flex items-center gap-6 text-3xl max-w-md md:max-w-none mx-auto md:mx-0">
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

      {/* Right Content - Vertically Centered */}
      <div className="w-full md:w-1/2 min-h-screen bg-zinc-50 flex flex-col items-center justify-center py-24 px-8 space-y-24">
        {rightContent}
      </div>
    </main>
  );
}
