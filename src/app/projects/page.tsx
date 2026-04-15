import Link from "next/link";

export default function Projects() {
  return (
    <main className="flex flex-col min-h-screen bg-black text-white px-8 pt-24 sm:px-24 sm:pt-40">
      <Link href="/" className="mb-12 inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group">
        <span className="group-hover:-translate-x-1 transition-transform">←</span>
        Back to Home
      </Link>
      <h1 className="text-4xl sm:text-6xl font-bold uppercase mb-12">Projects</h1>
      <p className="text-xl text-zinc-400">Project list coming soon...</p>
    </main>
  );
}
