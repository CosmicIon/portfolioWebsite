"use client";

import { useState, FormEvent } from "react";
import styles from "./ContactSection.module.css";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const contactInfo = [
  {
    icon: "✉",
    label: "Email",
    value: "harsh@example.com",
    href: "mailto:harsh@example.com",
  },
  {
    icon: "⟨/⟩",
    label: "GitHub",
    value: "github.com/CosmicIon",
    href: "https://github.com/CosmicIon",
  },
  {
    icon: "in",
    label: "LinkedIn",
    value: "linkedin.com/in/harshnivedan",
    href: "https://linkedin.com/in/harshnivedan",
  },
  {
    icon: "📍",
    label: "Location",
    value: "India",
    href: undefined,
  },
];

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const { ref, isVisible } = useScrollAnimation();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className="content-wrapper">
        <SectionHeader
          title="Get In Touch"
          subtitle="Let's connect and build something great"
          icon="♛"
        />

        <div
          ref={ref}
          className={styles.contactGrid}
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          {/* Left: Contact Info */}
          <div className={styles.contactInfo}>
            <h3>
              Let&apos;s work{" "}
              <span className={styles.contactHighlight}>together</span>
            </h3>
            <p className={styles.contactDescription}>
              I&apos;m always open to new opportunities, collaborations, and
              interesting projects. Whether you have a question, a project
              idea, or just want to say hi — my inbox is always open.
            </p>

            <div className={styles.contactCards}>
              {contactInfo.map((info, index) => {
                const Tag = info.href ? "a" : "div";
                return (
                  <Tag
                    key={info.label}
                    className={styles.contactCard}
                    {...(info.href
                      ? {
                          href: info.href,
                          target: info.href.startsWith("http")
                            ? "_blank"
                            : undefined,
                          rel: info.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined,
                        }
                      : {})}
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible
                        ? "translateX(0)"
                        : "translateX(-20px)",
                      transition: `opacity 0.4s ease ${
                        0.2 + index * 0.1
                      }s, transform 0.4s ease ${0.2 + index * 0.1}s`,
                    }}
                  >
                    <div className={styles.contactCardIcon}>
                      {info.icon}
                    </div>
                    <div>
                      <div className={styles.contactCardLabel}>
                        {info.label}
                      </div>
                      <div className={styles.contactCardValue}>
                        {info.value}
                      </div>
                    </div>
                  </Tag>
                );
              })}
            </div>
          </div>

          {/* Right: Contact Form */}
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <h3 className={styles.formTitle}>♟ Send a Message</h3>

            {submitted ? (
              <div className={styles.formSuccess}>
                ✅ Message sent successfully! I&apos;ll get back to you soon.
              </div>
            ) : (
              <>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="contact-name">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    className={styles.formInput}
                    type="text"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label
                    className={styles.formLabel}
                    htmlFor="contact-email"
                  >
                    Your Email
                  </label>
                  <input
                    id="contact-email"
                    className={styles.formInput}
                    type="email"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label
                    className={styles.formLabel}
                    htmlFor="contact-message"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    className={`${styles.formInput} ${styles.formTextarea}`}
                    placeholder="Hey! I'd love to discuss..."
                    required
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  icon="♟"
                  className={styles.formSubmit}
                >
                  Send Message
                </Button>
              </>
            )}
          </form>
        </div>

        {/* Footer */}
        <div className={styles.contactFooter}>
          <p className={styles.contactFooterText}>
            Designed with ♟ by Harsh Nivedan • Inspired by chess.com
          </p>
          <div className={styles.contactFooterChess}>
            <span>♜</span>
            <span>♞</span>
            <span>♝</span>
            <span>♛</span>
            <span>♚</span>
            <span>♝</span>
            <span>♞</span>
            <span>♜</span>
          </div>
        </div>
      </div>
    </section>
  );
}
