"use client";

import { useState, useEffect } from "react";
import styles from "./Sidebar.module.css";

const navItems = [
  { id: "hero", label: "Home", icon: "♚" },
  { id: "about", label: "About", icon: "♟" },
  { id: "projects", label: "Projects", icon: "♜" },
  { id: "skills", label: "Skills", icon: "♞" },
  { id: "experience", label: "Experience", icon: "♝" },
  { id: "contact", label: "Contact", icon: "♛" },
];

const socialLinks = [
  {
    label: "GitHub",
    icon: "⟨/⟩",
    url: "https://github.com/CosmicIon",
  },
  {
    label: "LinkedIn",
    icon: "in",
    url: "https://linkedin.com/in/harshnivedan",
  },
  {
    label: "Email",
    icon: "✉",
    url: "mailto:harsh@example.com",
  },
];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px -50% 0px" }
    );

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <nav className={styles.sidebar} aria-label="Main Navigation">
        <a
          href="#hero"
          className={styles.logo}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("hero");
          }}
          aria-label="Scroll to top"
        >
          HN
        </a>

        <ul className={styles.navList}>
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                className={`${styles.navItem} ${
                  activeSection === item.id ? styles.navItemActive : ""
                }`}
                onClick={() => scrollToSection(item.id)}
                aria-label={`Navigate to ${item.label}`}
              >
                <span className={styles.navIcon}>{item.icon}</span>
                <span className={styles.navLabel}>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>

        <div className={styles.socialLinks}>
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label={link.label}
            >
              <span className={styles.socialIcon}>{link.icon}</span>
              <span className={styles.socialLabel}>{link.label}</span>
            </a>
          ))}
        </div>
      </nav>

      {/* Mobile Bottom Navbar */}
      <nav className={styles.mobileNav} aria-label="Mobile Navigation">
        {navItems.slice(0, 5).map((item) => (
          <button
            key={item.id}
            className={`${styles.mobileNavItem} ${
              activeSection === item.id ? styles.mobileNavItemActive : ""
            }`}
            onClick={() => scrollToSection(item.id)}
            aria-label={`Navigate to ${item.label}`}
          >
            <span className={styles.mobileNavIcon}>{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>
    </>
  );
}
