import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Harsh Nivedan | Full Stack Developer & AI Enthusiast",
  description: "Personal portfolio of Harsh Nivedan showcasing projects, skills, achievements, and experience in Full Stack Development, AI, and Cloud Computing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geist.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground overflow-x-hidden pt-20">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
