"use client";

import Image from "next/image";
import ProjectLayout from "@/components/ProjectLayout";

// Client Logos
import geminiCli from "@/assets/tool-gemeni-cli.svg";
import libraLogo from "@/assets/brand-libra.svg";
import viaLogo from "@/assets/brand-via.svg";
import refaelLogo from "@/assets/brand-refael.svg";
import vesttoo1 from "@/assets/brand-vesttoo-1.svg";
import bezeq1 from "@/assets/brand-bezeq-1.svg";
import tytoLogo from "@/assets/brand-tyto.svg";
import hyprLogo from "@/assets/brand-hypr.png";

// Tool Logos
import figmaLogo from "@/assets/tool-figma.svg";
import sketchLogo from "@/assets/tool-sketch.svg";
import zeplinLogo from "@/assets/tool-zeplin.svg";
import invisionLogo from "@/assets/tool-invision.svg";
import principleLogo from "@/assets/tool-principle.svg";
import axureLogo from "@/assets/tool-axure.svg";
import aeLogo from "@/assets/tool-ae.svg";
import psdLogo from "@/assets/tool-psd.svg";
import cinema4dLogo from "@/assets/tool-cinema4d.svg";

export default function BrandsAndTools() {
  const clients = [
    { src: libraLogo, alt: "Libra" },
    { src: viaLogo, alt: "Via" },
    { src: refaelLogo, alt: "Rafael" },
    { src: vesttoo1, alt: "Vesttoo" },
    { src: tytoLogo, alt: "TytoCare" },
    { src: bezeq1, alt: "Bezeq" },
    { src: hyprLogo, alt: "Hypr" },
  ];

  const tools = [
    {
      category: "UX/UI",
      items: [
        { src: figmaLogo, alt: "Figma" },
        { src: sketchLogo, alt: "Sketch" },
        { src: geminiCli, alt: "Gemini CLI" },
      ],
    },
    {
      category: "Animation, 3D & photomontage",
      items: [
        { src: aeLogo, alt: "After Effects" },
        { src: psdLogo, alt: "Photoshop" },
        { src: cinema4dLogo, alt: "Cinema 4D" },
      ],
    },
    {
      category: "Prototyping & Handoff",
      items: [
        { src: principleLogo, alt: "Principle" },
        { src: invisionLogo, alt: "InVision" },
        { src: zeplinLogo, alt: "Zeplin" },
        { src: axureLogo, alt: "Axure" },
      ],
    },
  ];

  return (
    <ProjectLayout
      title=""
      backLink="/projects/delek/success"
      nextLink={{ label: "THANKS", href: "/thanks" }}
      rightContent={
        <div className="flex flex-col gap-12 py-12">
          {/* Clients Section */}
          <section>
            <h3 className="text-2xl font-bold mb-8">Some other clients</h3>
            <div className="grid grid-cols-4 gap-x-8 gap-y-12 opacity-50">
              {clients.map((client, i) => (
                <div key={i} className="relative h-12 w-24">
                  <Image
                    src={client.src}
                    alt={client.alt}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Tools Section */}
          <section>
            <h3 className="text-2xl font-bold mb-8">Tool I Use</h3>
            <div className="space-y-12">
              {tools.map((group, i) => (
                <div key={i} className="flex items-center gap-8">
                  <p className="text-lg font-bold opacity-50 w-48 leading-tight shrink-0">
                    {group.category}
                  </p>
                  <div className="flex flex-wrap gap-8 items-center">
                    {group.items.map((tool, j) => (
                      <div 
                        key={j} 
                        className={`relative shrink-0 ${
                          tool.alt === "Cinema 4D" || tool.alt === "Axure" 
                            ? "h-10 w-25" 
                            : "h-10 w-10"
                        }`}
                      >
                        <Image
                          src={tool.src}
                          alt={tool.alt}
                          fill
                          className="object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      }
    >
      <h1 className="text-5xl md:text-7xl font-bold uppercase leading-none">
        <span className="font-normal block">BRANDS</span>
        & TOOLS
      </h1>
    </ProjectLayout>
  );
}
