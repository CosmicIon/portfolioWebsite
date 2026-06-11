"use client";

import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Dashboard", href: "#dashboard" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Journey", href: "#journey" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b border-transparent bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80",
        isScrolled && "border-border shadow-lg shadow-black/10 py-2",
        !isScrolled && "py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          {/* Logo / Brand */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-accent rounded flex items-center justify-center text-background font-bold font-heading text-xl group-hover:scale-105 transition-transform duration-200">
                HN
              </div>
              <span className="font-heading font-bold text-xl hidden sm:block tracking-tight">
                Harsh Nivedan
              </span>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 rounded-md text-sm font-medium text-text-secondary hover:text-white hover:bg-card transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-text-secondary hover:text-white hover:bg-card focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent transition-colors duration-200"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <span className="sr-only">Open main menu</span>
              <div className="relative w-6 h-6">
                <X
                  className={cn(
                    "absolute inset-0 h-6 w-6 transition-all duration-300",
                    isMobileMenuOpen ? "opacity-100 rotate-0" : "opacity-0 rotate-90"
                  )}
                  aria-hidden="true"
                />
                <Menu
                  className={cn(
                    "absolute inset-0 h-6 w-6 transition-all duration-300",
                    isMobileMenuOpen ? "opacity-0 -rotate-90" : "opacity-100 rotate-0"
                  )}
                  aria-hidden="true"
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={cn(
          "md:hidden transition-all duration-300 ease-in-out overflow-hidden bg-card/95 backdrop-blur-md border-b border-border",
          isMobileMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0 border-b-0"
        )}
      >
        <div className="px-4 pt-2 pb-3 space-y-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-md text-base font-medium text-text-secondary hover:text-white hover:bg-background transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
