import Image from "next/image";
import goalImg from "@/assets/goal.png";
import ProjectLayout from "@/components/ProjectLayout";

export default function AutoCADGoal() {
  return (
    <ProjectLayout
      title="AutoCAD Mobile"
      subtitle="Mobile extension of the famous AutoCAD software, iOS native & Android native."
      backLink="/projects/certora/mutation-testing/part"
      nextLink="/projects/problem"
      rightContent={
        <div className="relative w-full max-w-[280px] md:max-w-[400px] aspect-[375/812] shadow-2xl rounded-[40px] overflow-hidden">
          <Image
            src={goalImg}
            alt="AutoCAD Mobile Interface"
            fill
            className="object-cover"
          />
        </div>
      }
    >
      <h1 className="text-7xl md:text-[88px] font-bold uppercase leading-none mb-6">
        <span className="font-normal block">The</span>
        goal
      </h1>
      <p className="text-xl opacity-80 max-w-lg leading-relaxed">
        Digitalizing drafting / inspecting CAD files workflow, making the whole
        thing a lot more efficient.
      </p>
    </ProjectLayout>
  );
}
