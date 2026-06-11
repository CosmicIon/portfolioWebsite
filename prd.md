# PRD: Harsh Nivedan Portfolio Website

## Project Overview

Build a modern personal portfolio website inspired by the user experience and visual hierarchy of Chess.com.

This is NOT a traditional portfolio website.

The website should feel like a professional "Developer Profile Dashboard" where projects are treated like matches, skills are treated like ratings, achievements are treated like trophies, and the user's journey is presented like a progression system.

The website must look premium, modern, interactive, and memorable while remaining professional enough for recruiters, internship applications, and research opportunities.

---

# Owner

Harsh Nivedan

Computer Science Student

Areas of Interest:

* Full Stack Development
* Artificial Intelligence
* Deep Learning
* Cloud Computing
* System Design

---

# Target Audience

Primary:

* Recruiters
* Internship Hiring Managers
* Research Mentors

Secondary:

* Developers
* Open Source Contributors
* Freelance Clients

---

# Design Vision

The website should combine:

* Chess.com profile dashboard
* Modern SaaS dashboard
* Premium developer portfolio

Avoid:

* Generic portfolio templates
* Colorful gradients everywhere
* Excessive animations
* Cluttered layouts

Desired Feel:

* Premium
* Professional
* Strategic
* Intelligent
* Gamified

---

# Color Palette

Primary Background:

#262421

Card Background:

#312E2B

Accent Green:

#81B64C

Primary Text:

#FFFFFF

Secondary Text:

#BDBDBD

Border:

#4A4642

---

# Typography

Headings:

* Inter
* Geist
* Satoshi

Body:

* Inter

Requirements:

* Large headings
* Strong hierarchy
* Clean spacing

---

# Tech Stack

Framework:

* Next.js 15

Language:

* TypeScript

Styling:

* Tailwind CSS

Animation:

* Framer Motion

Icons:

* Lucide React

Deployment:

* Vercel

Optional:

* GSAP
* Lenis Smooth Scroll

---

# Website Structure

## 1. Landing Section

Acts like a Chess.com player profile.

Contains:

* Profile picture
* Name
* Role
* Short introduction
* CTA buttons

Example:

Harsh Nivedan

Computer Science Student
Full Stack Developer
AI Enthusiast

Buttons:

* View Projects
* Download Resume

---

## 2. Developer Rating Dashboard

Display statistics similar to Chess.com ratings.

Cards:

* Web Development Rating
* AI/ML Rating
* Problem Solving Rating
* Cloud Rating

Example:

Web Development ........ 1900

AI/ML .................. 1750

Cloud .................. 1600

Problem Solving ........ 1850

Values can be manually configured.

Include animated count-up effect.

---

## 3. Skills Arena

Show skills grouped by category.

Programming:

* C++
* Java
* Python
* JavaScript

Frontend:

* HTML
* CSS
* React
* Next.js
* Tailwind

Backend:

* Node.js
* Express

AI/ML:

* TensorFlow
* Keras
* OpenCV

Cloud:

* AWS

Display as modern badges/cards.

---

## 4. Project Match History

Inspired by Chess.com game history.

Section Title:

Recent Matches

Each project card includes:

* Project Name
* Description
* Tech Stack
* GitHub Link
* Demo Link

Projects:

### Weather Prediction Using Image Analysis

Stack:

* Python
* TensorFlow
* CNN
* OpenCV

Status:

Victory

---

### Chess Game

Stack:

* C++
* SFML

Status:

In Progress

---

### Portfolio Website

Stack:

* Next.js
* Tailwind

Status:

Active

---

Project cards should support future additions.

---

## 5. Trophy Cabinet

Display achievements as trophies.

Items:

* AWS Certification
* Full Stack Development Certification
* Hackathon Participation
* Technical Club Contributions

Each trophy card includes:

* Icon
* Title
* Description

Hover animations allowed.

---

## 6. Journey Timeline

Timeline showing growth.

Events:

* Started B.Tech
* Joined Technical Club
* AWS Certification
* Built Deep Learning Project
* Started Chess Game
* Started GATE Preparation

Timeline should be vertical and responsive.

---

## 7. Activity Heatmap

GitHub-style contribution heatmap.

Purpose:

Show consistency and growth.

Can use:

* GitHub activity
* Manual milestones

---

## 8. Resume Section

Prominent card.

Contains:

* Resume preview
* Download button

Resume PDF stored locally.

---

## 9. Contact Section

Information:

* Email
* LinkedIn
* GitHub

Optional:

Contact Form

Fields:

* Name
* Email
* Message

---

# Navigation

Sticky Navbar

Items:

* Dashboard
* Skills
* Projects
* Achievements
* Journey
* Contact

Navbar should shrink on scroll.

---

# Animations

Required:

* Smooth section reveal
* Count-up statistics
* Card hover effects
* Timeline animations

Avoid:

* Excessive parallax
* Heavy motion
* Distracting effects

Performance is priority.

---

# Responsiveness

Must support:

* Mobile
* Tablet
* Desktop

Mobile-first design.

---

# Accessibility

Requirements:

* Semantic HTML
* Keyboard navigation
* Proper contrast
* Alt text support

---

# SEO

Include:

* Metadata
* Open Graph tags
* Twitter cards
* Sitemap

Title:

Harsh Nivedan | Full Stack Developer & AI Enthusiast

Description:

Personal portfolio of Harsh Nivedan showcasing projects, skills, achievements, and experience in Full Stack Development, AI, and Cloud Computing.

---

# Performance Goals

Lighthouse:

Performance: 95+

Accessibility: 95+

Best Practices: 95+

SEO: 95+

---

# Future Features

Phase 2:

* Blog System
* Dark/Light Mode
* Interactive Chess Board Background
* Command Palette (Ctrl + K)
* GitHub API Integration
* Visitor Analytics
* Project Filtering

---

# Success Criteria

A recruiter should be able to understand within 30 seconds:

* Who Harsh is
* What skills he has
* What projects he built
* What achievements he earned
* How to contact him

The website should feel unique, memorable, professional, and inspired by Chess.com without directly copying its design.
