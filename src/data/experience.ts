import type { Experience } from "@/types";

export const experience: Experience[] = [
  {
    company: "Udemy", type: "Self-employed", place: "San Francisco, California, United States. Remote",
    roles: [{ title: "Course Creator (Flutter Development)", period: "Jul 2026 – Present · 5 mos" }],
    skills: ["Mobile Application Development", "Flutter"],
  },
  {
    company: "Zeusgen (Pvt) Ltd", type: "Full-time", place: "20 St Michaels Rd, Colombo 00300. Hybrid",
    roles: [{ title: "Associate Software Engineer", period: "Nov 2025 – Present · 1 yr 1 mo" }],
    summary: "Mobile, full-stack and AI work, including an AI-based recruitment platform built on a multi-model architecture that saves token usage.",
    skills: ["Flutter", "Laravel"],
  },
  {
    company: "Sysco LABS", type: "Freelance", place: "1390 Enclave Parkway, Houston, TX 77077. Remote",
    roles: [{ title: "Mobile Quality Engineer", period: "Dec 2025 – Jan 2026 · 2 mos" }],
    summary: "I worked as a Freelance Mobile Quality Engineer on a 2 month project with Sysco LABS, responsible for testing and ensuring the quality of mobile applications. This role involved performing functional, usability, and performance testing, identifying bugs, and collaborating with developers to deliver a high-quality mobile product. The project enhanced my skills in mobile QA processes, bug tracking, and quality assurance best practices in a real world environment.",
  },
  {
    company: "eSupport", type: "Full-time · 7 mos", place: "15 Kuruppu Rd, Colombo 00800. On-site",
    roles: [
      { title: "Mobile Team Lead (Intern)", period: "Jun 2025 – Nov 2025 · 6 mos" },
      { title: "Software Engineer (Mobile) Intern", period: "May 2025 – Nov 2025 · 7 mos" },
    ],
    summary: "Took full ownership of two production Flutter apps, from architecture and backend integration to CI/CD and Google Play Store deployment, while leading the mobile team and collaborating with Business Analysis to ship high-performance applications.",
    projects: [
      {
        title: "Yaka.lk: Real-Time Classified Ads Platform", kind: "Mobile app",
        intro: "Live on Google Play Store. Similar in scale to Ikman.lk.",
        bullets: [
          "Led Flutter development of both User App and Admin App (Android & iOS)",
          "Built secure Laravel REST APIs for auth, ad management & search",
          "Designed role-based Admin panel: approvals, user controls, notifications",
          "Integrated Gemini API for AI-powered ad description generation",
          "Implemented CI/CD pipelines for automated builds & Play Store releases",
          "Optimized image rendering; full API testing with Postman",
        ],
        tech: ["Flutter", "Laravel", "Firebase", "Gemini API", "MVVM", "CI/CD", "Git"],
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
        tech: ["Flutter", "Laravel", "Google Maps API", "Firebase", "OneSignal", "Git"],
      },
    ],
    recognition: "Recognized for leading with ownership beyond the intern role, delivering production-ready solutions and managing the mobile team independently.",
    skills: ["Flutter", "Mobile Application Development"],
  },
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
];

export const skills: string[] = ["Flutter", "Kotlin", "React.js", "Next.js", "Laravel", "MySQL", "PostgreSQL", "Firebase", "AWS", "Azure", "CI/CD", "Claude Code", "GitHub Copilot", "Gemini API"];
