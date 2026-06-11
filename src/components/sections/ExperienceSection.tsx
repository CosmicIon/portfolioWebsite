"use client";

import styles from "./ExperienceSection.module.css";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Freelance / Personal Projects",
    date: "2023 – Present",
    icon: "♜",
    description:
      "Building and shipping full-stack web applications using modern technologies. Developed portfolio sites, management systems, and AI-powered tools for various clients and personal use.",
    tags: ["Next.js", "React", "Node.js", "MongoDB", "TypeScript"],
    badge: { text: "Current", variant: "green" as const },
  },
  {
    role: "Open Source Contributor",
    company: "Various Projects",
    date: "2022 – Present",
    icon: "♞",
    description:
      "Contributing to open-source projects in the developer tools and web development ecosystem. Submitted bug fixes, feature implementations, and documentation improvements.",
    tags: ["Git", "JavaScript", "Python", "Documentation"],
    badge: { text: "Active", variant: "green" as const },
  },
  {
    role: "Competitive Programmer",
    company: "LeetCode / Codeforces / CodeChef",
    date: "2021 – Present",
    icon: "♝",
    description:
      "Actively solving DSA problems and participating in competitive programming contests. Achieved significant ratings and solved 500+ problems across platforms.",
    tags: ["C++", "Algorithms", "Data Structures", "Problem Solving"],
    badge: { text: "500+ solved", variant: "gold" as const },
  },
];

const education = [
  {
    degree: "BTech in Computer Science & Engineering",
    school: "University (Update with your university name)",
    year: "2021 – 2025 (Expected)",
    icon: "🎓",
  },
  {
    degree: "Higher Secondary Education",
    school: "School (Update with your school name)",
    year: "2019 – 2021",
    icon: "📚",
  },
];

export default function ExperienceSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="experience" className={styles.experience}>
      <div className="content-wrapper">
        <SectionHeader
          title="Experience & Education"
          subtitle="My journey and credentials"
          icon="♝"
        />

        {/* Timeline */}
        <div ref={ref} className={styles.timeline}>
          {experiences.map((exp, index) => (
            <div
              key={exp.role}
              className={styles.timelineItem}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible
                  ? "translateX(0)"
                  : "translateX(-30px)",
                transition: `opacity 0.5s ease ${
                  index * 0.2
                }s, transform 0.5s ease ${index * 0.2}s`,
              }}
            >
              <div className={styles.timelineDot}>{exp.icon}</div>
              <div className={styles.timelineCard}>
                <div className={styles.timelineHeader}>
                  <div>
                    <h3 className={styles.timelineRole}>{exp.role}</h3>
                    <span className={styles.timelineCompany}>
                      {exp.company}
                    </span>
                  </div>
                  <div className={styles.timelineMeta}>
                    <Badge variant={exp.badge.variant}>
                      {exp.badge.text}
                    </Badge>
                    <span className={styles.timelineDate}>{exp.date}</span>
                  </div>
                </div>
                <p className={styles.timelineDescription}>
                  {exp.description}
                </p>
                <div className={styles.timelineTags}>
                  {exp.tags.map((tag) => (
                    <span key={tag} className={styles.timelineTag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education Cards */}
        <div className={styles.educationGrid}>
          {education.map((edu, index) => (
            <div
              key={edu.degree}
              className={styles.educationCard}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible
                  ? "translateY(0)"
                  : "translateY(30px)",
                transition: `opacity 0.5s ease ${
                  0.6 + index * 0.15
                }s, transform 0.5s ease ${0.6 + index * 0.15}s`,
              }}
            >
              <div className={styles.educationIcon}>{edu.icon}</div>
              <h3 className={styles.educationDegree}>{edu.degree}</h3>
              <p className={styles.educationSchool}>{edu.school}</p>
              <p className={styles.educationYear}>{edu.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
