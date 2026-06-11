# Portfolio Website Implementation Plan (Chess.com Inspired)

This document outlines the step-by-step implementation plan for the Harsh Nivedan developer portfolio dashboard, based on the Product Requirements Document (PRD).

## Phase 1: Project Initialization & Configuration

- [ ] **1.1 Initialize Next.js Project**
  - Create a new Next.js 15 application using the App Router.
  - Enable TypeScript, Tailwind CSS, and ESLint during initialization.
- [ ] **1.2 Install Core Dependencies**
  - Install `framer-motion` for all scroll/hover/count-up animations.
  - Install `lucide-react` for consistent, lightweight SVGs.
  - *(Optional)* Install `lenis` for smooth scrolling.
- [ ] **1.3 Configure Typography & Theme Variables**
  - Setup Google Fonts (Inter for body; Geist or Satoshi for headings) in `layout.tsx`.
  - Extend `tailwind.config.ts` to include the specific Chess.com-inspired color palette:
    - `bg-primary`: `#262421`
    - `bg-card`: `#312E2B`
    - `accent-green`: `#81B64C`
    - `text-primary`: `#FFFFFF`
    - `text-secondary`: `#BDBDBD`
    - `border-color`: `#4A4642`
- [ ] **1.4 Create Global Layout**
  - Set the background color and default text colors on the `<body>` tag.
  - Setup SEO Metadata (Title, Description, Open Graph).

## Phase 2: Core Architecture & Reusable UI

- [ ] **2.1 Build the Sticky Navbar**
  - Create a responsive top navigation bar.
  - Implement smooth scroll links to section IDs.
  - Add a state hook to shrink the navbar on scroll down.
- [ ] **2.2 Create Reusable Card Components**
  - Create a `DashboardCard` component with the `#312E2B` background and `#4A4642` borders to be used uniformly across the site.
- [ ] **2.3 Create Reusable Button Components**
  - Build primary buttons (using `accent-green`) and secondary/outline buttons mimicking Chess.com's rounded, chunky button feel.

## Phase 3: Dashboard Sections Implementation

- [ ] **3.1 Landing Section (Player Profile)**
  - Build the hero consisting of a profile picture (avatar style), name, title, and short introduction.
  - Add Primary ("View Projects") and Secondary ("Download Resume") Call To Action (CTA) buttons.
- [ ] **3.2 Developer Rating Dashboard**
  - Create a 4-grid card layout displaying ratings (Web Dev: 1900, AI/ML: 1750, etc.).
  - Implement a `framer-motion` counter to animate the numbers counting up from 0 when scrolled into view.
- [ ] **3.3 Skills Arena**
  - Categorize skills (Programming, Frontend, Backend, AI/ML, Cloud).
  - Design badge/pill components for each skill.
  - Lay them out in an organized grid inside a "Skills" dashboard container.
- [ ] **3.4 Project Match History**
  - Create a "Match History" list layout.
  - For each project, build rows/cards containing: Project Name, Tech Stack icons, Status ("Victory", "In Progress" with respective color codes), and GitHub/Demo links.
- [ ] **3.5 Trophy Cabinet (Achievements)**
  - Build a grid of "Trophy" cards for certifications, hackathons, etc.
  - Add subtle hover scale animations and Lucide icons (e.g., Award, Medal) for each.
- [ ] **3.6 Journey Timeline**
  - Implement a vertical timeline component.
  - Map out historical events (B.Tech -> Technical Club -> AWS -> AI Projects -> GATE prep) with nodes extending downwards.
- [ ] **3.7 Activity Heatmap (GitHub Style)**
  - Use an existing React GitHub calendar component OR build a static visual mock of a contribution graph to show consistency/growth.
- [ ] **3.8 Resume Card & Contact Section**
  - Add a dedicated box to preview/download the Resume PDF.
  - Build a contact form (Name, Email, Message) or just professional social links (LinkedIn, Email, GitHub).

## Phase 4: Animations & Polish

- [ ] **4.1 Section Reveal Animations**
  - Wrap major sections in a Framer Motion `<motion.div>` that fades and slides up smoothly when entering the viewport.
- [ ] **4.2 Mobile Responsiveness Pass**
  - Verify all grids collapse into single columns on mobile screens (`sm` breakpoints).
  - Ensure the Navbar turns into a hamburger menu (if necessary) or a bottom navigation bar for mobile.
- [ ] **4.3 Accessibility & Performance Audit**
  - Run Lighthouse to check for 95+ scores.
  - Ensure proper aria-labels in HTML and contrast ratios for the custom color palette.

## Phase 5: Launch

- [ ] **5.1 Vercel Deployment**
  - Push codebase to GitHub.
  - Connect the repository to Vercel for continuous deployment.
  - Map custom domain (if applicable).
