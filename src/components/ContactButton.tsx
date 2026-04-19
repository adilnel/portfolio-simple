"use client";

import Image, { StaticImageData } from "next/image";

interface ContactButtonProps {
  href: string;
  icon: StaticImageData;
  label: string;
  target?: string;
  rel?: string;
}

export default function ContactButton({ href, icon, label, target, rel }: ContactButtonProps) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className="group flex items-center border-2 border-black bg-transparent pr-6 transition-all hover:bg-black hover:text-white active:opacity-50 overflow-hidden w-full md:w-fit md:justify-center"
    >
      <div className="flex-shrink-0 bg-black p-3 transition-colors mr-4">
        <Image 
          src={icon} 
          alt={label} 
          width={20} 
          height={20} 
          className="brightness-0 invert opacity-100 transition-opacity" 
        />
      </div>
      <span className="text-lg font-bold whitespace-nowrap md:text-xl text-left md:text-center transition-colors">
        {label}
      </span>
    </a>
  );
}
