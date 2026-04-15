import Image from "next/image";
import certoraGoalImg from "@/assets/certora-goal.png";
import ProjectLayout from "@/components/ProjectLayout";

export default function CertoraGoal() {
  const navItems = [
    { label: "VSCode Plugin", href: "/projects/certora", active: true },
    { label: "Prover report", href: "#" },
    { label: "Prover dashboard", href: "#" },
    { label: "Mutation testing", href: "#" },
  ];

  return (
    <ProjectLayout
      title="CERTORA"
      navItems={navItems}
      backLink="/"
      nextLink="/projects"
      rightContent={
        <div className="relative w-full max-w-[600px] aspect-[944/530]">
          <Image
            src={certoraGoalImg}
            alt="Certora + VSCode"
            fill
            className="object-contain"
          />
        </div>
      }
    >
      <h1 className="text-7xl md:text-[88px] font-bold uppercase leading-none mb-6">
        <span className="font-normal block">THE</span>
        GOAL
      </h1>
      <p className="text-xl opacity-80 max-w-lg leading-relaxed">
        To develop a user-friendly VSCode plugin, started by Evil Martinas studio, 
        that activates Certora Prover run and tracks its progress. I was aimed 
        to create an intuitive interface to empower non-technical users to effectively 
        utilize the Prover.
      </p>
    </ProjectLayout>
  );
}
