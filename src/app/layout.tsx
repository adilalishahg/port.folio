import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adil Ali | MERN & Next.js Developer",
  description: "Portfolio of Adil Ali, a full-stack developer specializing in Next.js, React, and scalable backend systems. High-performance SaaS, AI, and real-time app expert.",
  keywords: ["Next.js", "React", "TypeScript", "Full Stack Developer", "MERN Stack", "Adil Ali", "SaaS Developer"],
  authors: [{ name: "Adil Ali" }],
  openGraph: {
    title: "Adil Ali | Full-Stack Architect",
    description: "Building scalable SaaS, AI-powered platforms, and real-time applications.",
    type: "website",
    locale: "en_US",
  },
};

import { SmoothScroll } from "@/components/SmoothScroll";
import { CustomCursor } from "@/components/CustomCursor";
import { ScrollToTop } from "@/components/ScrollToTop";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <CustomCursor />
        <SmoothScroll />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
