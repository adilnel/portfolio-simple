import React, { useId } from "react";

export default function GeminiLogo(props: React.SVGProps<SVGSVGElement>) {
  const gradientId = useId();
  return (
    <svg 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path 
        d="M12 22C12 22 12 17 12 12C12 7 12 2 12 2C12 2 17 12 22 12C17 12 12 12 12 12C7 12 2 12 2 12C7 12 12 17 12 22Z" 
        fill={`url(#${gradientId})`}
      />
      <defs>
        <linearGradient id={gradientId} x1="2" y1="12" x2="22" y2="12" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4E82EE"/>
          <stop offset="0.5" stopColor="#A162E8"/>
          <stop offset="1" stopColor="#F06292"/>
        </linearGradient>
      </defs>
    </svg>
  );
}
