import Link from "next/link";
import Image from "next/image";
import delekSuccessImg from "@/assets/delek-success.png";
import delekAwardImg from "@/assets/delek-award.png";

export default function DelekSuccess() {
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
            <span className="font-normal block text-[72px]">the</span>
            Success
          </h1>
          <div className="text-xl opacity-80 max-w-lg leading-relaxed space-y-4">
            <p>
              Prosperous growth hacking move that led to high conversion of 30k signings within 10 days, 
              and Winning the &ldquo;Israeli digital transformation award 2020&rdquo;.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-8 mt-auto">
          <div className="flex items-center gap-6 text-3xl">
            <Link href="/projects/delek/solution" className="hover:-translate-x-1 transition-transform text-black">←</Link>
            <div className="flex items-center gap-4 text-black group cursor-pointer">
              <span className="text-2xl font-bold font-inter tracking-tight uppercase">Priority</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Content - Image */}
      <div className="w-full md:w-1/2 h-[600px] md:h-screen flex items-center justify-center p-8">
        <div className="relative w-full max-w-[400px] aspect-[375/812] shadow-2xl rounded-[40px] overflow-hidden">
          <Image 
            src={delekSuccessImg} 
            alt="Delek App Success Interface" 
            fill
            className="object-cover"
          />
          {/* Award Badge Overlay */}
          <div className="absolute top-[37%] left-1/2 -translate-x-1/2 -rotate-6 w-[200px] h-[200px]">
            <Image 
              src={delekAwardImg} 
              alt="Israeli Digital Transformation Award 2020" 
              fill
              className="object-contain drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
