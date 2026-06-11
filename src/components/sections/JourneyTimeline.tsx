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

      {/* Mobile: simple left-border timeline */}
      <div className="max-w-3xl mx-auto relative">
        <div className="absolute left-[0.45rem] md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-px" />

        {TIMELINE.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className={`relative mb-10 last:mb-0 pl-8 md:pl-0 md:w-[calc(50%-1rem)] ${
              i % 2 === 0
                ? "md:mr-auto md:pr-8 md:text-right"
                : "md:ml-auto md:pl-8"
            }`}
          >
            {/* Dot marker — always on the left (mobile) or center line (desktop) */}
            <div
              className={`absolute w-4 h-4 rounded-full bg-accent border-4 border-background top-6 shadow-md shadow-accent/20 left-0 md:left-auto ${
                i % 2 === 0 ? "md:right-[-2.05rem]" : "md:left-[-2.05rem]"
              }`}
            />

            <div className="bg-card p-6 rounded-xl border border-border hover:border-accent/60 transition-colors duration-300">
              <span className="inline-block px-3 py-1 bg-background text-accent text-sm font-bold rounded-full border border-border mb-3">
                {item.year}
              </span>
              <h3 className="text-xl font-bold font-heading text-white mb-2">{item.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}

        {/* Timeline end marker */}
        <div className="absolute w-6 h-6 rounded-full bg-background border border-border left-[-0.3rem] md:left-1/2 md:-translate-x-1/2 -bottom-4 flex items-center justify-center">
          <Flag className="w-3 h-3 text-text-secondary" />
        </div>
      </div>
    </section>
  );
}