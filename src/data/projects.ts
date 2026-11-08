// Edit the content of your portfolio here.
import type { JourneyStep, Project } from "@/types";

export const projects: Project[] = [
  { title: "Emerald Bay Resorts", tag: "Live website", big: true,
    text: "A full-stack resort website, built and owned end to end in freelance. It earned the client’s trust, and five more projects followed.",
    link: "https://emeraldbayresorts.com", cta: "Visit the site" },
  { title: "Yaka.lk", tag: "Google Play",
    text: "A real-time classified ads platform with user and admin apps, Laravel APIs, Gemini-written ad descriptions and CI/CD to the Play Store.",
    link: "https://play.google.com/store/apps/details?id=lk.yaka.app&hl=en", cta: "Open on Google Play" },
  { title: "AI recruitment platform", tag: "Zeusgen",
    text: "A hiring platform with a multi-model architecture that keeps token usage down." },
  { title: "UPS Maintenance App", tag: "Flutter + Laravel",
    text: "A field technician tool with live Google Maps navigation, JWT auth, and invoices sent by email and SMS." },
  { title: "Metaminds LMS", tag: "React + Laravel",
    text: "A learning platform for pharmacy and medical students, with progress tracking and course management." },
  { title: "TopXbet", tag: "React + Laravel",
    text: "A modular, scalable betting platform with a responsive React.js frontend, role-based UI and JWT-secured APIs." },
  { title: "Medicare", tag: "Flutter",
    text: "A healthcare app for booking doctors, browsing pharmacy products and messaging doctors in real time." },
];

export const journey: JourneyStep[] = [
  ["Website", "Built full-stack and owned end to end as a freelancer. It is live at emeraldbayresorts.com."],
  ["QR ordering", "Guests order from a menu in their rooms and in the restaurant area. Items are added to the bill, and they receive an e-bill as an image or document."],
  ["Business email", "The team needed business email on their own domain. I set it up, and they use it every day."],
  ["Billing and POS", "Owners and top management see AI-based charts of progress, fast-selling items and revenue for any dates they filter. A chat lets them ask: “What is the fast-moving sale today?”, “How much did today cost?” and “What is today’s profit from 10 am to 2 pm?” It reaches their mobile phones as a progressive web app."],
  ["Revenue management", "An ongoing revenue management system with AI features."],
  ["OTA channel manager", "An ongoing OTA channel manager, with its own app."],
];
