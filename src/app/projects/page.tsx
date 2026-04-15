import Link from "next/link";

const projects = [
  {
    id: "autocad-mobile",
    title: "AutoCAD Mobile",
    description: "Mobile extension of AutoCAD software for drafting and inspecting CAD files.",
    href: "/projects/autocad-mobile",
    year: "2021"
  }
];

export default function Projects() {
  return (
    <main className="flex flex-col min-h-screen bg-black text-white px-8 pt-24 sm:px-24 sm:pt-40">
      <nav className="mb-12">
        <Link href="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group">
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          Back to Home
        </Link>
      </nav>
      
      <header className="mb-20">
        <h1 className="text-4xl sm:text-6xl font-bold uppercase mb-4">Projects</h1>
        <p className="text-xl text-zinc-400 max-w-2xl">
          A selection of mobile and web projects focused on productivity and design.
        </p>
      </header>

      <section className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Link 
            key={project.id}
            href={project.href}
            className="group flex flex-col gap-4 p-6 rounded-2xl border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all"
          >
            <div className="flex justify-between items-start">
              <h2 className="text-2xl font-bold uppercase">{project.title}</h2>
              <span className="text-zinc-500 font-mono text-sm">{project.year}</span>
            </div>
            <p className="text-zinc-400 leading-relaxed">
              {project.description}
            </p>
            <div className="mt-auto pt-4 flex items-center gap-2 text-sm font-semibold uppercase group-hover:text-white transition-colors">
              View Project
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
