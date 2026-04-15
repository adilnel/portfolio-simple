import Link from "next/link";
import Image from "next/image";
import proposalImg from "@/assets/proposal.png";

export default function AutoCADProposal() {
  return (
    <main className="min-h-screen bg-white text-black flex flex-col md:flex-row items-center overflow-hidden">
      {/* Left Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-between p-8 md:p-24 lg:pl-44 min-h-screen">
        <div className="space-y-4">
          <Link href="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-black transition-colors mb-8 group">
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            Back to Home
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
            <span className="font-normal block">My</span>
            Proposal
          </h1>
          <div className="text-xl opacity-80 max-w-lg leading-relaxed space-y-4">
            <p>
              Taking photos of annotations and markup using a mobile device right on the construction site. 
              Than using ML for smart recognition to identify markup and updating the CAD file 
              automatically with minimum friction needed from the user.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-8 mt-auto">
          <div className="flex items-center gap-6 text-3xl">
            <Link href="/projects/problem" className="hover:-translate-x-1 transition-transform text-black">←</Link>
            <Link href="/projects/delek" className="flex items-center gap-4 text-black group cursor-pointer">
              <span className="text-2xl font-bold font-inter tracking-tight">DELEK</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Right Content - Image */}
      <div className="w-full md:w-1/2 h-[600px] md:h-screen flex items-center justify-center p-8">
        <div className="relative w-full max-w-[400px] aspect-[375/812] shadow-2xl rounded-[40px] overflow-hidden">
          <Image 
            src={proposalImg} 
            alt="AutoCAD Mobile Proposal Interface" 
            fill
            className="object-cover"
          />
        </div>
      </div>
    </main>
  );
}
