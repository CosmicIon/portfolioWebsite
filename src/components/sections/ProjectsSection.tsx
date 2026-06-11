"use client";

import { useState } from "react";
import styles from "./ProjectsSection.module.css";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type ProjectCategory = "all" | "web" | "ml" | "tools" | "systems";

interface Project {
  title: string;
  description: string;
  tags: string[];
  category: ProjectCategory[];
  emoji: string;
  status: "live" | "development" | "completed";
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "A chess.com-inspired portfolio website built with Next.js featuring dark theme, smooth animations, and responsive design.",
    tags: ["Next.js", "TypeScript", "CSS"],
    category: ["web"],
    emoji: "♚",
    status: "live",
    githubUrl: "https://github.com/CosmicIon/portfolioWebsite",
  },
  {
    title: "Resume Screening System",
    description:
      "An AI-powered system that automatically screens and ranks resumes based on job descriptions using NLP techniques.",
    tags: ["Python", "ML", "NLP", "Flask"],
    category: ["ml", "web"],
    emoji: "📄",
    status: "completed",
    githubUrl: "https://github.com/CosmicIon/resume-screening-system",
  },
  {
    title: "RedareDB",
    description:
      "A custom-built database engine from scratch featuring efficient data storage, indexing, and query processing.",
    tags: ["C++", "Systems", "Database"],
    category: ["systems"],
    emoji: "🗄️",
    status: "development",
    githubUrl: "https://github.com/CosmicIon/RedareDB",
  },
  {
    title: "Weather Predictions Using CNN",
    description:
      "Deep learning model using Convolutional Neural Networks to predict weather patterns from satellite imagery data.",
    tags: ["Python", "TensorFlow", "CNN", "Data Science"],
    category: ["ml"],
    emoji: "🌦️",
    status: "completed",
    githubUrl:
      "https://github.com/CosmicIon/WeatherPredictionsUsingCNN",
  },
  {
    title: "File Compression System",
    description:
      "Efficient file compression and decompression tool using Huffman Coding algorithm with a clean CLI interface.",
    tags: ["C++", "Algorithms", "Data Structures"],
    category: ["systems", "tools"],
    emoji: "🗜️",
    status: "completed",
    githubUrl:
      "https://github.com/CosmicIon/File-compression-and-decompression-using-Huffman-Coding",
  },
  {
    title: "Voice Safety System",
    description:
      "Real-time voice analysis system for detecting unsafe or distressing audio patterns using ML classification.",
    tags: ["Python", "ML", "Audio Processing"],
    category: ["ml"],
    emoji: "🎙️",
    status: "completed",
    githubUrl: "https://github.com/CosmicIon/voice_safety_system",
  },
  {
    title: "GitMate",
    description:
      "A developer productivity tool that simplifies Git workflows with an intuitive interface and smart command suggestions.",
    tags: ["JavaScript", "Node.js", "Git", "CLI"],
    category: ["tools"],
    emoji: "🔧",
    status: "completed",
    githubUrl: "https://github.com/CosmicIon/gitmate",
  },
  {
    title: "Chess Game",
    description:
      "A fully functional chess game with move validation, check/checkmate detection, and an elegant UI.",
    tags: ["JavaScript", "HTML/CSS", "Game Dev"],
    category: ["web"],
    emoji: "♟",
    status: "completed",
    githubUrl: "https://github.com/CosmicIon/Chess",
  },
];

const filters: { label: string; value: ProjectCategory }[] = [
  { label: "All Projects", value: "all" },
  { label: "Web Apps", value: "web" },
  { label: "ML / AI", value: "ml" },
  { label: "Developer Tools", value: "tools" },
  { label: "Systems", value: "systems" },
];

const statusVariant = {
  live: "green" as const,
  development: "gold" as const,
  completed: "blue" as const,
};

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all");
  const { ref, isVisible } = useScrollAnimation();

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category.includes(activeFilter));

  return (
    <section id="projects" className={styles.projects}>
      <div className="content-wrapper">
        <SectionHeader
          title="Projects"
          subtitle="Things I've built and shipped"
          icon="♜"
        />

        <div className={styles.filterTabs}>
          {filters.map((filter) => (
            <button
              key={filter.value}
              className={`${styles.filterTab} ${
                activeFilter === filter.value ? styles.filterTabActive : ""
              }`}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div ref={ref} className={styles.projectGrid}>
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className={styles.projectCard}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible
                  ? "translateY(0)"
                  : "translateY(30px)",
                transition: `opacity 0.5s ease ${
                  index * 0.1
                }s, transform 0.5s ease ${index * 0.1}s`,
              }}
            >
              <div className={styles.projectImage}>
                <div className={styles.projectImagePattern} />
                <span className={styles.projectEmoji}>
                  {project.emoji}
                </span>
                <div className={styles.projectStatus}>
                  <Badge variant={statusVariant[project.status]}>
                    {project.status}
                  </Badge>
                </div>
              </div>
              <div className={styles.projectBody}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>
                  {project.description}
                </p>
                <div className={styles.projectTags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.projectTag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className={styles.projectLinks}>
                  {project.githubUrl && (
                    <Button
                      variant="secondary"
                      size="sm"
                      href={project.githubUrl}
                      icon="⟨/⟩"
                    >
                      Source Code
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button
                      variant="primary"
                      size="sm"
                      href={project.liveUrl}
                      icon="🔗"
                    >
                      Live Demo
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
