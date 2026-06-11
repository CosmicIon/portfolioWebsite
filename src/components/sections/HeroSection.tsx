"use client";

import styles from "./HeroSection.module.css";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export default function HeroSection() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.heroBg} />

      {/* Floating chess pieces */}
      <span className={`${styles.floatingPiece} ${styles.piece1}`}>♚</span>
      <span className={`${styles.floatingPiece} ${styles.piece2}`}>♞</span>
      <span className={`${styles.floatingPiece} ${styles.piece3}`}>♜</span>
      <span className={`${styles.floatingPiece} ${styles.piece4}`}>♝</span>

      <div className={styles.heroContent}>
        <div className={styles.heroLeft}>
          <div className={styles.greeting}>
            <span className={styles.greetingLine} />
            Hello, I&apos;m
          </div>

          <h1 className={styles.heroName}>
            Harsh{" "}
            <span className={styles.heroNameAccent}>Nivedan</span>
          </h1>

          <div className={styles.heroBadgeRow}>
            <Badge variant="gold">BTech CSE</Badge>
            <Badge variant="green" dot>
              Available for Work
            </Badge>
            <Badge variant="purple">Full Stack</Badge>
          </div>

          <p className={styles.heroDescription}>
            A passionate Computer Science student who loves building modern web
            applications, solving complex algorithmic problems, and exploring
            the frontiers of Machine Learning &amp; AI. I write clean code and
            ship fast.
          </p>

          <div className={styles.heroStats}>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>10+</div>
              <div className={styles.statLabel}>Projects</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>15+</div>
              <div className={styles.statLabel}>Technologies</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>500+</div>
              <div className={styles.statLabel}>DSA Problems</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>3+</div>
              <div className={styles.statLabel}>Years Coding</div>
            </div>
          </div>

          <div className={styles.heroCtas}>
            <Button variant="primary" size="lg" href="#projects" icon="♜">
              View My Work
            </Button>
            <Button variant="secondary" size="lg" href="#contact" icon="✉">
              Contact Me
            </Button>
          </div>
        </div>

        <div className={styles.heroRight}>
          <div className={styles.avatarWrapper}>
            <div className={styles.avatar}>HN</div>
            <div className={styles.statusIndicator} />
          </div>
        </div>
      </div>
    </section>
  );
}
