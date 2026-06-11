"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, BrainCircuit, Cloud, Target } from "lucide-react";

interface RatingStatsProps {
  label: string;
  value: number;
  icon: React.ReactNode;
}

function AnimatedCounter({ value }: { value: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const animate = useCallback(() => {
    if (!isInView) return;

    const duration = 1800;
    const startTime = performance.now();

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic for a smooth deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    }

    requestAnimationFrame(tick);
  }, [isInView, value]);

  useEffect(() => {
    animate();
  }, [animate]);

  return <span ref={ref}>{count}</span>;
}

const STATS: RatingStatsProps[] = [
  { label: "Web Development", value: 1900, icon: <Code2 className="w-6 h-6 text-accent" /> },
  { label: "AI/ML", value: 1750, icon: <BrainCircuit className="w-6 h-6 text-accent" /> },
  { label: "Problem Solving", value: 1850, icon: <Target className="w-6 h-6 text-accent" /> },
  { label: "Cloud Computing", value: 1600, icon: <Cloud className="w-6 h-6 text-accent" /> },
];

export default function RatingDashboard() {
  return (
    <section className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Card className="hover:border-accent/60 transition-colors duration-300 overflow-hidden group">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-semibold text-text-secondary group-hover:text-white transition-colors duration-200">
                    {stat.label}
                  </span>
                  {stat.icon}
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold font-heading text-white tracking-tighter tabular-nums">
                    <AnimatedCounter value={stat.value} />
                  </span>
                  <span className="text-xs text-text-secondary font-bold uppercase tracking-wider">
                    Rating
                  </span>
                </div>
                
                {/* Visual purely aesthetic bar, like a progress meter */}
                <div className="h-1.5 w-full bg-background rounded-full mt-4 overflow-hidden">
                  <motion.div
                    className="h-full bg-accent rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(stat.value / 2500) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}