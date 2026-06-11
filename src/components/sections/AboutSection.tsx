"use client";

import styles from "./AboutSection.module.css";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const aboutCards = [
  {
    icon: "💻",
    title: "Full Stack Development",
    description:
      "Building end-to-end web applications with modern frameworks like Next.js, React, and Node.js.",
  },
  {
    icon: "🧠",
    title: "Problem Solving",
    description:
      "500+ DSA problems solved on platforms like LeetCode, Codeforces, and CodeChef.",
  },
  {
    icon: "🤖",
    title: "ML & AI Enthusiast",
    description:
      "Exploring machine learning, neural networks, and building intelligent systems.",
  },
  {
    icon: "🚀",
    title: "Open Source Contributor",
    description:
      "Active contributor to open source projects and building tools for the developer community.",
  },
];

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className={styles.about}>
      <div className="content-wrapper">
        <SectionHeader
          title="About Me"
          subtitle="Who I am and what I do"
          icon="♟"
        />

        <div
          ref={ref}
          className={`${styles.aboutGrid} ${
            isVisible ? "animate-visible" : ""
          }`}
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <div className={styles.aboutText}>
            <h3>
              A dedicated{" "}
              <span className={styles.aboutHighlight}>
                Computer Science student
              </span>{" "}
              turning ideas into reality
            </h3>
            <p className={styles.aboutParagraph}>
              I&apos;m currently pursuing my BTech in Computer Science &amp;
              Engineering, where I&apos;ve developed a strong foundation in
              software development, data structures &amp; algorithms, and system
              design.
            </p>
            <p className={styles.aboutParagraph}>
              My journey in tech started with curiosity about how things work on
              the web, and it has evolved into a passion for building{" "}
              <span className={styles.aboutHighlight}>
                elegant, performant applications
              </span>{" "}
              that solve real problems. I believe in writing clean, maintainable
              code and continuously learning new technologies.
            </p>
            <p className={styles.aboutParagraph}>
              When I&apos;m not coding, you&apos;ll find me playing chess ♟,
              reading tech blogs, or contributing to open-source projects.
            </p>

            {/* Decorative mini chessboard */}
            <div className={styles.chessboard}>
              {Array.from({ length: 64 }).map((_, i) => {
                const row = Math.floor(i / 8);
                const col = i % 8;
                const isLight = (row + col) % 2 === 0;
                return (
                  <div
                    key={i}
                    className={
                      isLight
                        ? styles.chessSquareLight
                        : styles.chessSquareDark
                    }
                  />
                );
              })}
            </div>
          </div>

          <div className={styles.aboutCards}>
            {aboutCards.map((card, index) => (
              <Card key={card.title} glow>
                <div
                  className={styles.aboutCard}
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible
                      ? "translateX(0)"
                      : "translateX(30px)",
                    transition: `opacity 0.5s ease ${
                      index * 0.15
                    }s, transform 0.5s ease ${index * 0.15}s`,
                  }}
                >
                  <div className={styles.aboutCardIcon}>{card.icon}</div>
                  <div className={styles.aboutCardContent}>
                    <h4>{card.title}</h4>
                    <p>{card.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
