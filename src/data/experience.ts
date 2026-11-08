import type { Experience } from "@/types";

export const career: Experience[] = [
  {
    company: "WHYTEQ", type: "Internship", place: "Remote",
    roles: [{ title: "Software Engineer Intern", period: "Oct 2024 – Apr 2025 · 7 mos" }],
    summary: "Contributed as a full-stack developer across three team projects covering both web and mobile, spanning the complete SDLC from requirement analysis and UI/UX design through to backend integration, testing, and delivery.",
    projects: [
      {
        title: "Metaminds LMS: Learning Management System", kind: "Web app",
        intro: "A web-based LMS built for pharmacy and medical students, covering the full development lifecycle end-to-end.",
        bullets: [
          "Handled requirement analysis, interface design, frontend development, backend API integration, and testing",
          "Built responsive UI in React.js with full Laravel backend and MySQL database architecture",
          "Delivered REST API integration for content delivery, student progress tracking, and course management",
        ],
        tech: ["React.js", "Laravel", "REST APIs", "MySQL"],
      },
      {
        title: "TopXbet: Scalable Web Betting Platform", kind: "Web app",
        intro: "A modular, production-grade betting platform built with a scalable architecture and secure authentication.",
        bullets: [
          "Designed and developed the complete frontend interface in React.js, with responsive layouts and smooth user interactions",
          "Implemented role-based UI handling and seamless integration with secure backend services",
          "Applied JWT-based API security and managed authentication flows across user roles",
        ],
        tech: ["React.js", "Laravel", "MySQL", "JWT Authentication"],
      },
      {
        title: "Medicare: Healthcare Mobile App", kind: "Mobile app",
        intro: "A Flutter healthcare app enabling doctor appointment booking, pharmacy browsing, and in-app doctor messaging.",
        bullets: [
          "Built the complete Flutter frontend: intuitive UI, responsive screens, and smooth backend API interaction",
          "Implemented appointment booking flows, pharmacy product browsing, and real-time doctor messaging",
          "Integrated secure JWT authentication for patient and doctor role management",
        ],
        tech: ["Flutter", "Laravel APIs", "MySQL", "JWT Authentication", "Firebase"],
      },
    ],
    skills: ["Web Development", "Mobile Application Development"],
  },
  {
    company: "eSupport", type: "Full-time · 7 mos", place: "15 Kuruppu Rd, Colombo 00800. On-site",
    roles: [
      { title: "Software Engineer (Mobile) Intern", period: "May 2025 – Nov 2025 · 7 mos" },
      { title: "Mobile Team Lead (Intern)", period: "Jun 2025 – Nov 2025 · 6 mos" },
    ],
    summary: "I handled the Flutter app architecture under guidance and worked on backend integration for two production apps. As mobile team lead, I coordinated delivery with business analysts and QA and took builds through CI/CD to Google Play.",
    projects: [
      {
        title: "Yaka.lk: Real-Time Classified Ads Platform", kind: "Mobile app",
        intro: "Published on Google Play, with separate workflows for customers and administrators.",
        bullets: [
          "Led Flutter development of both User App and Admin App (Android & iOS)",
          "Built secure Laravel REST APIs for auth, ad management & search",
          "Designed role-based Admin panel: approvals, user controls, notifications",
          "Integrated Gemini API for AI-powered ad description generation",
          "Implemented CI/CD pipelines for automated builds & Play Store releases",
          "Improved image rendering in listings and tested API responses in Postman",
        ],
        tech: ["Flutter (MVVM)", "Laravel REST APIs", "Firebase", "Gemini API", "Postman", "Google Play CI/CD"],
      },
      {
        title: "UPS Maintenance App: Field Technician Tool", kind: "Mobile app",
        intro: "A field tool for technicians and customer requests.",
        bullets: [
          "Built complete Flutter + Laravel app for technicians & customer requests",
          "Integrated Google Maps API for real-time technician navigation",
          "Automated billing with invoice delivery via email & SMS (OneSignal)",
          "Implemented JWT auth; collaborated with backend and QA teams",
        ],
        tech: ["Flutter", "Laravel APIs", "JWT authentication", "Google Maps API", "Firebase", "OneSignal"],
      },
    ],
    recognition: "Recognized for leading with ownership beyond the intern role, delivering production-ready solutions and managing the mobile team independently.",
    skills: ["Flutter", "Mobile Application Development"],
  },
  {
    company: "Zeusgen (Pvt) Ltd", type: "Full-time", place: "20 St Michaels Rd, Colombo 00300. Hybrid",
    roles: [{ title: "Associate Software Engineer", period: "Nov 2025 – Present" }],
    summary: "At Zeusgen, I focus on Flutter mobile development and contribute to full-stack web applications. My work includes an AI recruitment platform that uses multiple models to keep token usage down.",
    skills: ["Flutter", "Laravel"],
  },
];

export const freelance: Experience[] = [
  {
    company: "Sysco LABS", type: "Freelance", place: "1390 Enclave Parkway, Houston, TX 77077. Remote",
    roles: [{ title: "Mobile Quality Engineer", period: "Dec 2025 – Jan 2026 · 2 mos" }],
    summary: "I tested mobile workflows for usability, functionality and performance, documented reproducible defects and worked with developers to verify fixes.",
  },
  {
    company: "Emerald Bay Resorts", type: "Freelance", place: "Mirissa, Sri Lanka",
    roles: [{ title: "Full-stack developer and hotel IT partner", period: "Ongoing engagement" }],
    summary: "I built the resort website, then worked directly with staff on QR ordering, business email and a billing system. Guests can order to their rooms and receive an electronic bill. My ongoing work includes revenue management and an OTA channel manager.",
  },
];

export const skills: string[] = ["Flutter", "Kotlin", "React.js", "Next.js", "Laravel", "MySQL", "PostgreSQL", "Firebase", "AWS", "Azure", "CI/CD", "Claude Code", "GitHub Copilot", "Gemini API"];
