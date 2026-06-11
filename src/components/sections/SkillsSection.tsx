"use client";

import styles from "./SkillsSection.module.css";
import SectionHeader from "@/components/ui/SectionHeader";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface Skill {
  name: string;
  level: number; // 0-100
}

interface SkillCategory {
  title: string;
  icon: string;
  colorClass: string;
  barClass: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: "⟨/⟩",
    colorClass: "iconGreen",
    barClass: "skillBarGreen",
    skills: [
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Python", level: 88 },
      { name: "C++", level: 82 },
      { name: "Java", level: 78 },
      { name: "SQL", level: 80 },
    ],
  },
  {
    title: "Frameworks",
    icon: "⚛",
    colorClass: "iconBlue",
    barClass: "skillBarBlue",
    skills: [
      { name: "React", level: 88 },
      { name: "Next.js", level: 85 },
      { name: "Node.js", level: 83 },
      { name: "Express", level: 80 },
      { name: "Flask", level: 75 },
      { name: "TensorFlow", level: 70 },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: "🛠",
    colorClass: "iconGold",
    barClass: "skillBarGold",
    skills: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 72 },
      { name: "Linux", level: 80 },
      { name: "VS Code", level: 92 },
      { name: "Figma", level: 65 },
      { name: "Vercel", level: 78 },
    ],
  },
  {
    title: "Databases",
    icon: "🗄",
    colorClass: "iconPurple",
    barClass: "skillBarPurple",
    skills: [
      { name: "MongoDB", level: 82 },
      { name: "PostgreSQL", level: 78 },
      { name: "MySQL", level: 80 },
      { name: "Redis", level: 68 },
      { name: "Firebase", level: 75 },
    ],
  },
];

export default function SkillsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className={styles.skills}>
      <div className="content-wrapper">
        <SectionHeader
          title="Skills"
          subtitle="Technologies and tools I work with"
          icon="♞"
        />

        <div ref={ref} className={styles.skillsGrid}>
          {skillCategories.map((category, catIndex) => (
            <div
              key={category.title}
              className={styles.skillCategory}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
                transition: `opacity 0.5s ease ${
                  catIndex * 0.15
                }s, transform 0.5s ease ${catIndex * 0.15}s`,
              }}
            >
              <div className={styles.skillCategoryHeader}>
                <div
                  className={`${styles.skillCategoryIcon} ${
                    styles[category.colorClass]
                  }`}
                >
                  {category.icon}
                </div>
                <span className={styles.skillCategoryTitle}>
                  {category.title}
                </span>
                <span className={styles.skillCategoryCount}>
                  {category.skills.length} skills
                </span>
              </div>

              <div className={styles.skillsList}>
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className={styles.skillRow}>
                    <span className={styles.skillName}>{skill.name}</span>
                    <div className={styles.skillBarWrapper}>
                      <div
                        className={`${styles.skillBar} ${
                          styles[category.barClass]
                        }`}
                        style={{
                          width: isVisible ? `${skill.level}%` : "0%",
                          transitionDelay: `${
                            catIndex * 0.15 + skillIndex * 0.08
                          }s`,
                        }}
                      />
                    </div>
                    <span className={styles.skillRating}>{skill.level}%</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
