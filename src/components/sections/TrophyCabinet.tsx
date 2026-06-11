"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Cloud, Medal, Star, Trophy } from "lucide-react";

interface TrophyItem {
  title: string;
  description: string;
  icon: React.ElementType;
}

const TROPHIES: TrophyItem[] = [
  {
    title: "AWS Certification",
    description: "Certified Cloud Practitioner with hands-on experience in highly available architectures.",
    icon: Cloud,
  },
  {
    title: "Full Stack Certification",
    description: "Completion of intensive Full Stack Development bootcamp/program.",
    icon: Award,
  },
  {
    title: "Hackathon Participant",
    description: "Active participant in competitive rapid-prototyping tech events.",
    icon: Medal,
  },
  {
    title: "Tech Club Contribution",
    description: "Core member of the university technical club, driving workshops and events.",
    icon: Star,
  },
];

export default function TrophyCabinet() {
  return (
    <section id="achievements" className="py-20">
      <div className="mb-12 text-center md:text-left">
        <h2 className="text-3xl font-heading font-bold text-white flex items-center justify-center md:justify-start gap-3">
          <Trophy className="w-8 h-8 text-yellow-500" />
          Trophy Cabinet
        </h2>
        <p className="text-text-secondary mt-2">Milestones and achievements earned along the way.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {TROPHIES.map((trophy, i) => {
          const IconComponent = trophy.icon;
          return (
            <motion.div
              key={trophy.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Card className="h-full bg-card hover:bg-[#3d3a36] hover:border-yellow-500/50 transition-all group overflow-hidden text-center">
                <CardContent className="p-8 flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-background border-4 border-[#4A4642] group-hover:border-yellow-500 flex items-center justify-center mb-6 shadow-inner transition-colors duration-300">
                    <IconComponent className="w-10 h-10 text-yellow-500 transform group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-white mb-2">{trophy.title}</h3>
                  <p className="text-sm text-text-secondary">{trophy.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}