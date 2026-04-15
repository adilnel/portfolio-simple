import Link from "next/link";

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

      <div className="mt-auto pt-24">
        <Link 
          href="/projects" 
          className="inline-flex items-center gap-4 text-xl sm:text-2xl font-semibold uppercase hover:text-zinc-300 transition-colors group"
        >
          Projects
          <span className="text-3xl group-hover:translate-x-2 transition-transform">→</span>
        </Link>
      </div>
    </main>
  );
}
