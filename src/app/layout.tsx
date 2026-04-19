import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import KeyboardNavigation from "@/components/KeyboardNavigation";
import { LightboxProvider } from "@/components/LightboxContext";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Avi Adlin | Portfolio",
  description: "Quick Portfolio by Avi Adlin",
  icons: {
    icon: [
      { url: "/favicon.ico?v=2" },
      { url: "/icon.svg?v=2", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png?v=2",
  },
};

import { NavigationProvider } from "@/context/NavigationContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NavigationProvider>
          <ScrollProgressBar />
          <LightboxProvider>
            <KeyboardNavigation />
            {children}
          </LightboxProvider>
        </NavigationProvider>
      </body>
      {process.env.NEXT_PUBLIC_GA_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      )}
    </html>
  );
}
