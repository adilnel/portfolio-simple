import Link from "next/link";
import Image from "next/image";
import delekSolutionImg from "@/assets/delek-solution.png";

export default function DelekSolution() {
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
            <h2 className="text-3xl font-bold tracking-tight">DELEK APP</h2>
            <p className="text-xl font-semibold opacity-50 leading-tight max-w-md">
              Convenience Store Upscale<br/>
              iOS & Android
            </p>
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center py-20">
          <h1 className="text-7xl md:text-[88px] font-bold uppercase leading-none mb-6">
            <span className="font-normal block">My part of</span>
            the solution
          </h1>
          <div className="text-xl opacity-80 max-w-lg leading-relaxed space-y-4">
            <p>
              Defining the Success criteria in the simplicity of the whole UX\UI concept.
            </p>
            <p>
              To mend their outdated work system, part of the solution was to create an automatic 
              identification of the user&apos;s details while at the gas station, in a way that would 
              save unnecessary and tedious clicking, leaving only one click away from refueling.
            </p>
            <p>
              That way, in short time we have managed to raise a digital revolution that has 
              yielded impressively and even higher than expected results.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-8 mt-auto">
          <div className="flex items-center gap-6 text-3xl">
            <Link href="/projects/delek/problem" className="hover:-translate-x-1 transition-transform text-black">←</Link>
            <span className="opacity-30 cursor-not-allowed">→</span>
          </div>
        </div>
      </div>

      {/* Right Content - Image */}
      <div className="w-full md:w-1/2 h-[600px] md:h-screen flex items-center justify-center p-8">
        <div className="relative w-full max-w-[400px] aspect-[375/812] shadow-2xl rounded-[40px] overflow-hidden">
          <Image 
            src={delekSolutionImg} 
            alt="Delek App Solution Interface" 
            fill
            className="object-cover"
          />
        </div>
      </div>
    </main>
  );
}
