"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdInsertChartOutlined } from "react-icons/md";

// Simple seeded PRNG to produce deterministic heatmap values across renders
function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return s / 2147483647;
  };
}

const WEEKS = 52;
const DAYS = 7;

const HEATMAP_COLORS = [
  "bg-[#1E1C1A]", // Level 0 (Empty)
  "bg-[#32451C]", // Level 1
  "bg-[#4B6A2A]", // Level 2
  "bg-[#6A963B]", // Level 3
  "bg-[#81B64C]", // Level 4
];

function getHeatmapColor(intensity: number): string {
  if (intensity > 0.8) return HEATMAP_COLORS[4];
  if (intensity > 0.6) return HEATMAP_COLORS[3];
  if (intensity > 0.4) return HEATMAP_COLORS[2];
  if (intensity > 0.2) return HEATMAP_COLORS[1];
  return HEATMAP_COLORS[0];
}

export default function ContactAndHeatmap() {
  // Memoize the heatmap grid so random values don't change on re-render
  const heatmapGrid = useMemo(() => {
    const rand = seededRandom(42);
    return Array.from({ length: DAYS }, () =>
      Array.from({ length: WEEKS }, () => getHeatmapColor(rand()))
    );
  }, []);

  return (
    <section id="contact" className="py-20 pb-40">
      <div className="mb-12">
        <h2 className="text-3xl font-heading font-bold text-white flex items-center gap-3">
          <MdInsertChartOutlined className="w-8 h-8 text-accent" />
          Dashboard Overview
        </h2>
        <p className="text-text-secondary mt-2">Activity tracking and contact information.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Heatmap Area (Takes 2 columns) */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="lg:col-span-2"
        >
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="text-white text-lg">Activity Heatmap</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto pb-4">
                <div className="inline-flex flex-col gap-1 min-w-max">
                  {heatmapGrid.map((row, day) => (
                    <div key={day} className="flex gap-1">
                      {row.map((colorClass, week) => (
                        <div
                          key={week}
                          className={`w-3 h-3 md:w-4 md:h-4 rounded-[2px] ${colorClass} hover:ring-2 hover:ring-white/70 transition-shadow`}
                          title="Contribution"
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between text-xs text-text-secondary mt-4">
                <span>Total Contributions: 874</span>
                <div className="flex items-center gap-2">
                  <span>Less</span>
                  <div className="flex gap-1">
                    {HEATMAP_COLORS.map((color, i) => (
                      <div key={i} className={`w-3 h-3 rounded-[2px] ${color}`} />
                    ))}
                  </div>
                  <span>More</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact & Resume Area */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="h-full border-accent/20 bg-card/80 flex flex-col pt-4">
            <CardContent className="flex-1 flex flex-col justify-between">
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-heading font-bold text-white mb-2">Connect</h3>
                  <p className="text-sm text-text-secondary mb-6">
                    Open for opportunities, freelance projects, and research collaborations.
                  </p>
                </div>

                <div className="space-y-3 w-full">
                  <Button variant="outline" className="w-full justify-start text-text-secondary hover:text-white hover:border-text-secondary" asChild>
                    <a href="mailto:contact@harshnivedan.com">
                      <Mail className="w-4 h-4 mr-3" />
                      Email
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start text-text-secondary hover:text-white hover:border-text-secondary" asChild>
                    <a href="https://linkedin.com/in/harshnivedan" target="_blank" rel="noreferrer">
                      <FaLinkedin className="w-4 h-4 mr-3" />
                      LinkedIn
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start text-text-secondary hover:text-white hover:border-text-secondary" asChild>
                    <a href="https://github.com/harshnivedan" target="_blank" rel="noreferrer">
                      <FaGithub className="w-4 h-4 mr-3" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </div>

              <div className="pt-8 mt-auto">
                <Button className="w-full rounded-xl" size="lg" asChild>
                  <a href="/resume.pdf" download>
                    <Download className="w-5 h-5 flex-shrink-0 mr-2" />
                    Download Resume
                  </a>
                </Button>
              </div>

            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}