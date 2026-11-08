import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { profile } from "@/data/profile";
import { siteUrl } from "@/lib/site-url";
import "./globals.css";

const description =
  "Software engineer and full-stack developer in Colombo, Sri Lanka, building Flutter mobile apps, web platforms and hotel systems for clients including Emerald Bay Resorts.";

const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  url: siteUrl,
  sameAs: [profile.linkedin, profile.github],
  workLocation: { "@type": "Place", name: "Colombo, Sri Lanka" },
  knowsAbout: ["Flutter", "Mobile app development", "Full-stack web development", "Hotel IT systems"],
};

export const metadata: Metadata = {
  title: "Isurindu Wickramasinghe · Mobile and Full-Stack Software Engineer",
  description,
  alternates: siteUrl ? { canonical: siteUrl } : undefined,
  openGraph: { title: "Isurindu Wickramasinghe · Software Engineer", description, type: "website" },
};

export const viewport: Viewport = { themeColor: "#000000" };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replace(/</g, "\\u003c") }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
