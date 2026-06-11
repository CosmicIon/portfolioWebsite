import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Harsh Nivedan | Full Stack Developer & AI Enthusiast",
  description: "Personal portfolio of Harsh Nivedan showcasing projects, skills, achievements, and experience in Full Stack Development, AI, and Cloud Computing.",
  openGraph: {
    title: "Harsh Nivedan | Full Stack Developer & AI Enthusiast",
    description: "Personal portfolio of Harsh Nivedan showcasing projects, skills, achievements, and experience in Full Stack Development, AI, and Cloud Computing.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harsh Nivedan | Full Stack Developer & AI Enthusiast",
    description: "Personal portfolio of Harsh Nivedan showcasing projects, skills, achievements, and experience in Full Stack Development, AI, and Cloud Computing.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geist.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground overflow-x-hidden pt-20">
        <Navbar />
        {children}
        <footer className="border-t border-border py-8 mt-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-text-secondary">
            <span>&copy; {new Date().getFullYear()} Harsh Nivedan. All rights reserved.</span>
            <span className="flex items-center gap-1.5">
              Built with
              <span className="text-accent font-semibold">Next.js</span>
              &
              <span className="text-accent font-semibold">Framer Motion</span>
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}
