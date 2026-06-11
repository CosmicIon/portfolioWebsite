"use client";

import { motion } from "framer-motion";
import { Flag, Route } from "lucide-react";

const TIMELINE = [
  { year: "2024", title: "Started GATE Preparation", desc: "Focusing on advanced CS fundamentals: DSA, OS, DBMS." },
  { year: "2023", title: "Chess Game Project started", desc: "Developing a fully functional C++ SFML Chess application." },
  { year: "2023", title: "Built Deep Learning Project", desc: "Weather Prediction using CNNs and image analysis." },
  { year: "2022", title: "AWS Certification", desc: "Achieved AWS Certified Cloud Practitioner designation." },
  { year: "2022", title: "Joined Technical Club", desc: "Started contributing to university-level tech events." },
  { year: "2021", title: "Started B.Tech", desc: "Began journey in Computer Science and Engineering." },
];

export default function JourneyTimeline() {
  return (
    <section id="journey" className="py-20">
      <div className="mb-12">
        <h2 className="text-3xl font-heading font-bold text-white flex items-center gap-3">
          <Route className="w-8 h-8 text-accent" />
          Journey
        </h2>
        <p className="text-text-secondary mt-2">The progression system from day one.</p>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="relative border-l-2 border-border ml-3 md:ml-0 md:pl-0">
          {TIMELINE.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pl-8 md:pl-0 mb-10 last:mb-0 md:w-1/2 md:even:ml-auto md:odd:pr-8 md:even:pl-8 md:even:border-l-0 md:odd:text-right"
            >
              {/* Dot marker */}
              <div className="absolute w-4 h-4 rounded-full bg-accent border-4 border-background left-[-1.1rem] md:left-auto md:right-[-0.5rem] md:even:left-[-0.5rem] top-1.5 shadow-sm" />
              
              <div className="bg-card p-6 rounded-xl border border-border hover:border-accent transition-colors">
                <span className="inline-block px-3 py-1 bg-background text-accent text-sm font-bold rounded-full border border-border mb-3">
                  {item.year}
                </span>
                <h3 className="text-xl font-bold font-heading text-white mb-2">{item.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
          {/* Timeline end marker */}
          <div className="absolute w-6 h-6 rounded-full bg-background border border-border left-[-1.4rem] md:left-[calc(50%-0.75rem)] bottom-0 flex items-center justify-center -mb-8">
            <Flag className="w-3 h-3 text-text-secondary" />
          </div>
        </div>
      </div>
    </section>
  );
}