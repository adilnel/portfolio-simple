import Link from "next/link";
import Image from "next/image";

export default function AutoCADMobile() {
  const imgSearchDeals = "https://www.figma.com/api/mcp/asset/080b5f04-f41d-40f1-9627-67197ec7604f";

  return (
    <main className="min-h-screen bg-white text-black font-sans flex flex-col md:flex-row items-center overflow-hidden">
      {/* Left Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-between p-8 md:p-24 lg:pl-44 min-h-screen">
        <div className="space-y-4">
          <Link href="/projects" className="inline-flex items-center gap-2 text-zinc-400 hover:text-black transition-colors mb-8 group">
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            Back to Projects
          </Link>
          
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">AutoCAD Mobile</h2>
            <p className="text-xl font-semibold opacity-50 leading-tight max-w-md">
              Mobile extension of the famous AutoCAD software, iOS native & Android native.
            </p>
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center py-20">
          <h1 className="text-7xl md:text-[88px] font-bold uppercase leading-none mb-6">
            <span className="font-normal block">The</span>
            goal
          </h1>
          <p className="text-xl opacity-80 max-w-lg leading-relaxed">
            Digitalizing drafting / inspecting CAD files workflow, making the whole thing a lot more efficient.
          </p>
        </div>

        <div className="flex items-center gap-8 mt-auto">
          <div className="flex items-center gap-6 text-3xl opacity-30">
            <span className="cursor-not-allowed">←</span>
            <span className="cursor-pointer opacity-100 hover:translate-x-1 transition-transform text-black">→</span>
          </div>
        </div>
      </div>

      {/* Right Content - Image */}
      <div className="w-full md:w-1/2 h-[600px] md:h-screen bg-zinc-50 flex items-center justify-center p-8">
        <div className="relative w-full max-w-[400px] aspect-[375/812] shadow-2xl rounded-[40px] overflow-hidden">
          <Image 
            src={imgSearchDeals} 
            alt="AutoCAD Mobile Interface" 
            fill
            className="object-cover"
          />
        </div>
      </div>
    </main>
  );
}
