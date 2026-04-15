import Image from "next/image";
import delekSuccessImg from "@/assets/delek-success.png";
import delekAwardImg from "@/assets/delek-award.png";
import ProjectLayout from "@/components/ProjectLayout";

export default function DelekSuccess() {
  return (
    <ProjectLayout
      title="DELEK APP"
      subtitle="Convenience Store Upscale<br/>iOS & Android"
      backLink="/projects/delek/solution"
      rightContent={
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
      }
    >
      <h1 className="text-7xl md:text-[88px] font-bold uppercase leading-none mb-6">
        <span className="font-normal block text-[72px]">the</span>
        Success
      </h1>
      <div className="text-xl opacity-80 max-w-lg leading-relaxed space-y-4">
        <p>
          Prosperous growth hacking move that led to high conversion of 30k
          signings within 10 days, and Winning the &ldquo;Israeli digital
          transformation award 2020&rdquo;.
        </p>
      </div>
    </ProjectLayout>
  );
}
