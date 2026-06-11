"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { History, ExternalLink, Activity, Trophy } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ProjectStatus = "Victory" | "In Progress" | "Active";

interface Project {
  title: string;
  description: string;
  stack: string[];
  status: ProjectStatus;
  githubUrl?: string;
  demoUrl?: string;
}

const PROJECTS: Project[] = [
  {
    title: "Weather Prediction Using Image Analysis",
    description: "Deep learning model predicting weather patterns from real-time sky images using Convolutional Neural Networks.",
    stack: ["Python", "TensorFlow", "CNN", "OpenCV"],
    status: "Victory",
    githubUrl: "#",
  },
  {
    title: "Chess Game",
    description: "Fully functional desktop chess application featuring move validation and an intelligent bot opponent.",
    stack: ["C++", "SFML"],
    status: "In Progress",
    githubUrl: "#",
  },
  {
    title: "Portfolio Website",
    description: "Developer profile dashboard inspired by Chess.com UX with gamified analytics and fluid animations.",
    stack: ["Next.js", "Tailwind", "Framer Motion"],
    status: "Active",
    githubUrl: "#",
    demoUrl: "#",
  },
];

const statusConfig: Record<ProjectStatus, { color: string; icon: React.ReactNode }> = {
  "Victory": { color: "text-accent border-accent/20 bg-accent/10", icon: <Trophy className="w-4 h-4" /> },
  "Active": { color: "text-blue-400 border-blue-400/20 bg-blue-400/10", icon: <Activity className="w-4 h-4" /> },
  "In Progress": { color: "text-orange-400 border-orange-400/20 bg-orange-400/10", icon: <History className="w-4 h-4" /> },
};

export default function MatchHistory() {
  return (
    <section id="projects" className="py-20">
      <div className="mb-12">
        <h2 className="text-3xl font-heading font-bold text-white flex items-center gap-3">
          <History className="w-8 h-8 text-accent" />
          Recent Matches
        </h2>
        <p className="text-text-secondary mt-2">A history of my project deployments and developments.</p>
      </div>

      <div className="space-y-4">
        {PROJECTS.map((project, i) => {
          const statusStyle = statusConfig[project.status];
          
          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Card className="hover:border-text-secondary transition-colors group">
                <CardContent className="p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start md:items-center">
                  
                  {/* Status Indicator */}
                  <div className="hidden md:flex flex-col items-center justify-center w-16 h-16 shrink-0 rounded-lg bg-background border border-border">
                    <span className={cn("mb-1", statusStyle.color.split(" ")[0])}>
                      {statusStyle.icon}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-bold font-heading text-white group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      {/* Mobile Status Badge */}
                      <span className={cn(
                        "md:hidden px-2 py-1 flex items-center gap-1 text-xs font-semibold rounded-md border",
                        statusStyle.color
                      )}>
                        {statusStyle.icon}
                        {project.status}
                      </span>
                    </div>
                    
                    <p className="text-text-secondary line-clamp-2">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.stack.map(tech => (
                        <span key={tech} className="text-xs font-mono px-2 py-1 rounded bg-background border border-border text-text-secondary">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions & Desktop Status Badge */}
                  <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-start md:items-end justify-between w-full md:w-auto gap-4 shrink-0">
                    <span className={cn(
                      "hidden md:inline-flex items-center gap-1.5 px-3 py-1 font-bold text-sm rounded-full border",
                      statusStyle.color
                    )}>
                      {project.status}
                    </span>

                    <div className="flex gap-3 w-full sm:w-auto mt-auto">
                      {project.githubUrl && (
                        <Button variant="outline" size="sm" asChild className="flex-1 sm:flex-none">
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <FaGithub className="w-4 h-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      )}
                      {project.demoUrl && (
                        <Button size="sm" asChild className="flex-1 sm:flex-none">
                          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                  
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}