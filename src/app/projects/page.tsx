import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      id: "autocad-mobile",
      title: "AutoCAD Mobile",
      description: "Mobile extension of AutoCAD software",
      link: "/projects/autocad-mobile"
    }
  ];

  return (
    <main className="flex flex-col min-h-screen bg-black text-white px-8 pt-24 sm:px-24 sm:pt-40">
      <Link href="/" className="mb-12 inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group">
        <span className="group-hover:-translate-x-1 transition-transform">←</span>
        Back to Home
      </Link>
      
      <h1 className="text-4xl sm:text-6xl font-bold uppercase mb-16">Projects</h1>
      
      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Link 
            key={project.id} 
            href={project.link}
            className="group flex flex-col gap-4 p-6 border border-zinc-800 rounded-2xl hover:bg-zinc-900 transition-colors"
          >
            <h2 className="text-2xl font-bold group-hover:text-blue-400 transition-colors">{project.title}</h2>
            <p className="text-zinc-400">{project.description}</p>
            <span className="mt-4 text-sm font-semibold uppercase tracking-wider text-zinc-500 group-hover:text-white transition-colors flex items-center gap-2">
              View Project <span>→</span>
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
