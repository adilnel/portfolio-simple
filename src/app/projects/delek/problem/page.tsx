import Image from "next/image";
import delekProblemImg from "@/assets/delek-problem.png";
import ProjectLayout from "@/components/ProjectLayout";

export default function DelekProblem() {
  return (
    <ProjectLayout
      title="DELEK APP"
      subtitle="Convenience Store Upscale<br/>iOS & Android"
      backLink="/projects/delek"
      nextLink="/projects/delek/solution"
      rightContent={
        <div className="relative w-full max-w-[400px] aspect-[375/812] shadow-2xl rounded-[40px] overflow-hidden sticky top-24">
          <Image
            src={delekProblemImg}
            alt="Delek App Problem Interface"
            fill
            className="object-cover"
          />
        </div>
      }
    >
      <h1 className="text-7xl md:text-[88px] font-bold uppercase leading-none mb-6">
        <span className="font-normal block">The</span>
        Problem
      </h1>
      <div className="text-xl opacity-80 max-w-lg leading-relaxed space-y-4">
        <p>
          Lack of mobility and existence in the digital scene and inadequate
          conversion, especially during Covid-19 year, alongside the
          adaptation to different types of users.
        </p>
      </div>
    </ProjectLayout>
  );
}
