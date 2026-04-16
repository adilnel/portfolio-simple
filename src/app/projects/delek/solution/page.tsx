import Image from "next/image";
import delekSolutionImg from "@/assets/delek-solution.png";
import ProjectLayout from "@/components/ProjectLayout";

export default function DelekSolution() {
  return (
    <ProjectLayout
      title="DELEK APP"
      subtitle="Convenience Store Upscale<br/>iOS & Android"
      backLink="/projects/delek/problem"
      nextLink="/projects/delek/success"
      rightContent={
        <div className="relative w-full max-w-[280px] md:max-w-[400px] aspect-[375/812] shadow-2xl rounded-[40px] overflow-hidden">
          <Image
            src={delekSolutionImg}
            alt="Delek App Solution Interface"
            fill
            className="object-cover"
          />
        </div>
      }
    >
      <h1 className="text-7xl md:text-[88px] font-bold uppercase leading-none mb-6">
        <span className="font-normal block">My</span>
        Part
      </h1>
      <div className="text-xl opacity-80 max-w-lg leading-relaxed space-y-4">
        <p>
          Defining the Success criteria in the simplicity of the whole UX\UI
          concept.
        </p>
        <p>
          To mend their outdated work system, part of the solution was to create
          an automatic identification of the user&apos;s details while at the
          gas station, in a way that would save unnecessary and tedious
          clicking, leaving only one click away from refueling.
        </p>
        <p>
          That way, in short time we have managed to raise a digital revolution
          that has yielded impressively and even higher than expected results.
        </p>
      </div>
    </ProjectLayout>
  );
}
