"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { 
  Code2, 
  Terminal, 
  Database, 
  Cloud as CloudIcon, 
  BrainCircuit,
  Wrench
} from "lucide-react";

type SkillCategory = {
  title: string;
  icon: React.ReactNode;
  skills: string[];
};

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming",
    icon: <Code2 className="w-5 h-5 text-accent" />,
    skills: ["C++", "Java", "Python", "JavaScript", "TypeScript"],
  },
  {
    title: "Frontend",
    icon: <Terminal className="w-5 h-5 text-accent" />,
    skills: ["HTML", "CSS", "React", "Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    icon: <Database className="w-5 h-5 text-accent" />,
    skills: ["Node.js", "Express", "REST APIs", "SQL", "MongoDB"],
  },
  {
    title: "AI/ML",
    icon: <BrainCircuit className="w-5 h-5 text-accent" />,
    skills: ["TensorFlow", "Keras", "OpenCV", "Deep Learning", "CNNs"],
  },
  {
    title: "Cloud & DevOps",
    icon: <CloudIcon className="w-5 h-5 text-accent" />,
    skills: ["AWS", "Docker", "Git/GitHub", "Vercel", "Linux"],
  },
  {
    title: "Tools & Core",
    icon: <Wrench className="w-5 h-5 text-accent" />,
    skills: ["VS Code", "Postman", "System Design", "Agile", "OOP"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

export default function SkillsArena() {
  return (
    <section id="skills" className="py-20">
      <div className="mb-12">
        <h2 className="text-3xl font-heading font-bold text-white flex items-center gap-3">
          <Wrench className="w-8 h-8 text-accent" />
          Skills Arena
        </h2>
        <p className="text-text-secondary mt-2">The technical arsenal I bring to every match.</p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {SKILL_CATEGORIES.map((category) => (
          <motion.div key={category.title} variants={itemVariants}>
            <Card className="h-full hover:border-text-secondary transition-colors">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-xl">
                  {category.icon}
                  <span className="text-white">{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 bg-background border border-border rounded-md text-sm text-text-secondary hover:text-white hover:border-accent transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}