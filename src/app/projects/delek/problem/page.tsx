"use client";

import delekProblemImg from "@/assets/delek-problem.png";
import ProjectLayout from "@/components/ProjectLayout";
import ProjectImage from "@/components/ProjectImage";

export default function DelekProblem() {
  return (
    <ProjectLayout
      title="DELEK APP"
      subtitle="Convenience Store Upscale<br/>iOS & Android"
      backLink="/projects/delek"
      nextLink="/projects/delek/solution"
      rightContent={
        <div className="relative h-full max-h-full aspect-[375/812] shadow-2xl rounded-[min(40px,5vh)] overflow-hidden">
          <ProjectImage
            src={delekProblemImg}
            alt="Delek App Problem Interface"
            objectFit="object-cover"
          />
        </div>
      }
    >
      <h1 className="text-5xl md:text-7xl font-bold uppercase leading-none mb-6">
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
