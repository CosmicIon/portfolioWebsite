import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Harsh Nivedan | BTech CSE Student & Developer",
  description:
    "Portfolio of Harsh Nivedan — a BTech Computer Science student passionate about building modern web apps, solving DSA problems, and exploring ML/AI.",
  keywords: [
    "Harsh Nivedan",
    "portfolio",
    "developer",
    "BTech CSE",
    "web development",
    "full stack",
    "computer science",
  ],
  authors: [{ name: "Harsh Nivedan" }],
  openGraph: {
    title: "Harsh Nivedan | BTech CSE Student & Developer",
    description:
      "Portfolio of Harsh Nivedan — a BTech Computer Science student passionate about building modern web apps, solving DSA problems, and exploring ML/AI.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harsh Nivedan | BTech CSE Student & Developer",
    description:
      "Portfolio of Harsh Nivedan — BTech CSE student & full-stack developer.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
