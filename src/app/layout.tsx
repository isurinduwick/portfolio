import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const description =
  "Software engineer in Colombo with 2+ years building mobile apps, web platforms and custom business systems. Open to freelance work.";

export const metadata: Metadata = {
  title: "Isurindu Wickramasinghe · Mobile and Full-Stack Software Engineer",
  description,
  openGraph: { title: "Isurindu Wickramasinghe · Software Engineer", description, type: "website" },
};

export const viewport: Viewport = { themeColor: "#000000" };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
