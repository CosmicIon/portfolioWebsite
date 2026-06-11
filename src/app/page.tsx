"use client";

import { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Loading Screen */}
      <div className={`loading-screen ${!loading ? "loaded" : ""}`}>
        <div className="loading-pawn">♟</div>
      </div>

      <div className="app-layout">
        <Sidebar />

        <main className="main-content">
          <HeroSection />
          <div className="section-divider" />
          <AboutSection />
          <div className="section-divider" />
          <ProjectsSection />
          <div className="section-divider" />
          <SkillsSection />
          <div className="section-divider" />
          <ExperienceSection />
          <div className="section-divider" />
          <ContactSection />
        </main>
      </div>
    </>
  );
}
