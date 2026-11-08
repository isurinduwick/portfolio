"use client";

import { profile } from "@/data/profile";

export default function Navbar() {
  return (
    <nav className="nav">
      <a href="#top" className="brand">{profile.short}</a>
      <div>
        <a href="#experience">Experience</a>
        <a href="#services">Services</a>
        <a href="#credentials">Credentials</a>
        <a href="#contact" className="pill">Hire me</a>
      </div>
      <details className="mobile-menu">
        <summary aria-label="Navigation menu"><span></span><span></span></summary>
        <div className="mobile-menu-links" onClick={(event) => { if ((event.target as HTMLElement).closest("a")) event.currentTarget.closest("details")?.removeAttribute("open"); }}>
          <a href="#experience">Experience</a><a href="#services">Services</a><a href="#credentials">Credentials</a><a href="#contact">Get in touch ↗</a>
        </div>
      </details>
    </nav>
  );
}
