import Image from "next/image";
import certoraPartImg from "@/assets/certora-part.png";
import ProjectLayout from "@/components/ProjectLayout";

export default function CertoraPart() {
  const navItems = [
    { label: "VSCode Plugin", href: "/projects/certora", active: true },
    { label: "Prover report", href: "/projects/certora/prover-report" },
    { label: "Prover dashboard", href: "/projects/certora/prover-dashboard" },
    { label: "Mutation testing", href: "/projects/certora/mutation-testing" },
  ];

  return (
    <ProjectLayout
      title="CERTORA"
      navItems={navItems}
      backLink="/projects/certora/result"
      nextLink={{ label: "Prover report", href: "/projects/certora/prover-report" }}
      rightContent={
        <div className="relative w-full max-w-[800px] aspect-[944/530]">
          <Image
            src={certoraPartImg}
            alt="Certora VSCode Plugin Part Interface"
            fill
            className="object-contain"
          />
        </div>
      }
    >
      <h1 className="text-7xl md:text-[88px] font-bold uppercase leading-none mb-6">
        <span className="font-normal block">My</span>
        Part
      </h1>
      <p className="text-xl opacity-80 max-w-lg leading-relaxed">
        Configuring & running certoraRun using VSCode UI, sometimes running 
        apps from command line interface can be just to many line to type.
      </p>
    </ProjectLayout>
  );
}
