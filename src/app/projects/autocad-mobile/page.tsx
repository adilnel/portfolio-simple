import Link from "next/link";
import Image from "next/image";

const slides = [
  {
    title: "The Goal",
    subtitle: "Digitalizing drafting / inspecting CAD files workflow, making the whole thing a lot more efficiant.",
    image: "https://www.figma.com/api/mcp/asset/ce7e1a71-0f36-4bb0-b4c7-4167ab2a8b19",
    projectName: "AutoCAD Mobile",
    description: "Mobile extantion of the famous AutoCAD software, iOS native & Androis native."
  },
  {
    title: "The Problem",
    subtitle: "Traditional drafting / inspection workflow includes at first drafting on a desktop machine, than printing a plot on paper and sending it for inspection on the physical construction site for review and markup. When it’s done the drafter needs to update the markup in the CAD file manually from a desktop machine. 

The whole proccess can take days and in some cases even weeks.",
    image: "https://www.figma.com/api/mcp/asset/77799be3-23eb-4c67-abc5-fc9f72b5d5e9",
    projectName: "AutoCAD Mobile",
    description: "Mobile extantion of the famous AutoCAD software, iOS native & Androis native."
  },
  {
    title: "My Proposal",
    subtitle: "Taking photos of annotations and markup using a mobile device right on the construction site. Than using ML for smart recognition to identify markup and updating the CAD file automatically with minimum friction needed from the user.",
    image: "https://www.figma.com/api/mcp/asset/935e39b4-1af1-4009-874c-75005b7d5220",
    projectName: "AutoCAD Mobile",
    description: "Mobile extantion of the famous AutoCAD software, iOS native & Androis native.",
    isGif: true
  }
];

export default function AutoCADMobile() {
  return (
    <main className="bg-white min-h-screen font-['Nunito_Sans',sans-serif] text-black overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-8 left-8 sm:left-24 z-50">
        <Link href="/projects" className="flex items-center gap-2 text-zinc-400 hover:text-black transition-colors group">
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          Projects
        </Link>
      </nav>

      {/* Slides Container */}
      <div className="flex flex-col">
        {slides.map((slide, index) => (
          <section 
            key={index} 
            className="h-screen w-full flex flex-col lg:flex-row items-center justify-between px-8 sm:px-24 py-16 lg:py-0 snap-start shrink-0"
          >
            {/* Text Content */}
            <div className="flex flex-col justify-center max-w-2xl h-full lg:w-1/2">
              <div className="mb-12 sm:mb-20">
                <h2 className="text-2xl sm:text-[32px] font-bold mb-2 leading-none uppercase tracking-tight">
                  {slide.projectName}
                </h2>
                <p className="text-lg sm:text-2xl font-semibold opacity-50 leading-tight max-w-md">
                  {slide.description}
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="text-6xl sm:text-[88px] font-bold uppercase leading-none tracking-tighter">
                  <span className="font-normal block opacity-100">The</span>
                  {slide.title.split(' ')[1] || slide.title}
                </h3>
                <p className="text-lg sm:text-[20px] leading-relaxed max-w-lg opacity-80 whitespace-pre-wrap">
                  {slide.subtitle}
                </p>
              </div>

              {/* Slide Navigation Placeholder */}
              <div className="mt-12 sm:mt-20 flex items-center gap-8">
                <div className="flex gap-4 opacity-30 text-3xl">
                  <span>←</span>
                  <span>→</span>
                </div>
              </div>
            </div>

            {/* Image Content */}
            <div className="lg:w-1/2 flex justify-center items-center h-full pt-12 lg:pt-0">
              <div className="relative w-[300px] h-[650px] sm:w-[375px] sm:h-[812px] rounded-[40px] overflow-hidden shadow-2xl">
                <img 
                  src={slide.image} 
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Footer Navigation */}
      <footer className="px-8 sm:px-24 py-16 bg-white border-t border-zinc-100 flex justify-between items-center">
        <div className="flex items-center gap-4 text-xl sm:text-2xl font-semibold uppercase group">
           <span className="opacity-50">NEXT PROJECT</span>
           <Link href="#" className="flex items-center gap-2 hover:text-zinc-600 transition-colors">
             DELEK
             <span className="group-hover:translate-x-1 transition-transform">→</span>
           </Link>
        </div>
      </footer>
    </main>
  );
}
