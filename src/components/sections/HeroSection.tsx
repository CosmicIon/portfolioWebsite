"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="dashboard"
      className="min-h-[80vh] flex flex-col justify-center py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row items-center gap-12"
      >
        {/* Avatar/Profile Picture */}
        <div className="relative">
          <div className="w-40 h-40 md:w-56 md:h-56 rounded-xl bg-card border-4 border-border overflow-hidden flex items-center justify-center shadow-xl">
            {/* Placeholder for real image */}
            <span className="text-6xl font-heading font-bold text-text-secondary">
              HN
            </span>
          </div>
          <div className="absolute -bottom-4 -right-4 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full border-2 border-background shadow-lg">
            Active
          </div>
        </div>

        {/* Info */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-6xl font-bold font-heading text-white">
              Harsh Nivedan
            </h1>
            <h2 className="text-xl md:text-2xl text-accent font-semibold flex items-center justify-center md:justify-start gap-2">
              <span className="inline-block w-3 h-3 rounded-sm bg-accent animate-pulse" />
              Computer Science Student & Full Stack Developer
            </h2>
          </div>

          <p className="text-text-secondary max-w-2xl text-lg leading-relaxed">
            AI Enthusiast focused on building high-performance web applications,
            deep learning models, and scalable cloud architectures. Treat every
            project like a match, and every bug like an opponent.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
            <Button size="lg" className="gap-2" asChild>
              <a href="#projects">
                <ExternalLink className="w-5 h-5" />
                View Projects
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2" asChild>
              <a href="/resume.pdf" download>
                <Download className="w-5 h-5" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
