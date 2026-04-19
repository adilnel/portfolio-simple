"use client";

import ProjectLayout from "@/components/ProjectLayout";
import ImageCarousel from "@/components/ImageCarousel";

// Import carousel images
import baseResult from "@/assets/certora-prover-dashboard-result.png";
import frame1 from "@/assets/prover-dashboard-carousel-1.png";
import frame2 from "@/assets/prover-dashboard-carousel-2.png";

export default function CertoraProverDashboardResult() {
  const navItems = [
    { label: "VSCode Plugin", href: "/projects/certora" },
    { label: "Prover report", href: "/projects/certora/prover-report" },
    { label: "Prover dashboard", href: "/projects/certora/prover-dashboard", active: true },
    { label: "Mutation testing", href: "/projects/certora/mutation-testing" },
  ];

  // The animation starts with the original state (baseResult)
  // then shows the "Delete Job" screen (frame1)
  // and finally the "Profile Settings" screen (frame2)
  const frames = [baseResult, frame1, frame2];

  return (
    <ProjectLayout
      title="CERTORA"
      subtitle="Smart Contract Auditing using FV"
      navItems={navItems}
      backLink="/projects/certora/prover-dashboard/problem"
      nextLink="/projects/certora/prover-dashboard/part"
      rightContent={
        <div className="relative w-fit max-w-[800px] rounded-2xl overflow-hidden">
          <ImageCarousel 
            images={frames} 
            alt="Prover dashboard result screens" 
            interval={2000}
            fill={false}
          />
        </div>
      }
    >
      <h1 className="text-5xl md:text-7xl font-bold uppercase leading-none mb-6">
        <span className="font-normal block">The</span>
        RESULT
      </h1>
      <p className="text-xl opacity-80 max-w-lg leading-relaxed">
        A comprehensive Prover Dashboard that centralizes job tracking. The dynamic UI replaces static tables, allowing users to monitor multiple runs simultaneously and access detailed results through a stable, user-friendly interface.
      </p>
    </ProjectLayout>
  );
}