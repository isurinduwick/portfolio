import Image from "next/image";
import { projects } from "@/data/projects";

const details = [
  { category: "Hospitality · Web platform", skills: ["Full-stack", "Freelance", "End-to-end delivery"], symbol: "↗", color: "teal" },
  { category: "Marketplace · Mobile", skills: ["Mobile apps", "Laravel", "Gemini AI"], symbol: "Y", color: "blue" },
  { category: "Recruitment · AI", skills: ["Multi-model AI", "Hiring workflows"], symbol: "✳", color: "violet" },
  { category: "Field operations · Mobile", skills: ["Flutter", "Laravel", "Google Maps"], symbol: "↯", color: "amber" },
  { category: "Education · Web platform", skills: ["React", "Laravel", "Learning management"], symbol: "M", color: "teal" },
  { category: "Betting · Web platform", skills: ["React", "Laravel", "JWT authentication"], symbol: "X", color: "violet" },
  { category: "Healthcare · Mobile", skills: ["Flutter", "Appointments", "Real-time messaging"], symbol: "+", color: "blue" },
];

const projectImages = ["", "/yakalogo.webp", "/recruitai.webp", "/ups.jpg", "/metaminds.png", "/topxbet.png", "/medicare.jpg"];

export default function Work() {
  return (
    <section className="section dark work-section" id="work">
      <div className="wrap">
        <div className="work-heading" data-reveal>
          <div><p className="work-eyebrow">Ideas into everyday software</p><h2>Selected work<span>.</span></h2></div>
          <p>From a resort’s first website to mobile apps and AI-powered platforms. A selection of what I’ve built.</p>
        </div>
        <div className="work-grid">
          {projects.map((p, index) => {
            const detail = details[index];
            return (
              <article key={p.title} className={`work-card work-${detail.color}${p.big ? " work-featured" : ""}`}>
                <div className="work-card-content">
                  <div className="work-card-top"><span className="work-category">{detail.category}</span><span className="work-number">0{index + 1}</span></div>
                  {!p.big && <div className="work-symbol" aria-hidden="true"><Image src={projectImages[index]} alt="" width={58} height={58} /></div>}
                  <div className="work-card-copy">
                    <p className="work-label">{p.big ? "Featured project · " : ""}{p.tag}</p>
                    <h3>{p.title}</h3>
                    <p className="work-description">{p.text}</p>
                    <ul className="work-tags" aria-label="Project capabilities">{detail.skills.map(skill => <li key={skill}>{skill}</li>)}</ul>
                  </div>
                  <div className="work-card-footer">
                    {p.link ? <a href={p.link} target="_blank" rel="noopener noreferrer">{p.cta}<span aria-hidden="true">↗</span></a> : <a href="#experience">Explore my experience<span aria-hidden="true">↗</span></a>}
                  </div>
                </div>
                {p.big && <div className="work-resort-art" aria-hidden="true">
                  <div className="work-browser-art">
                    <div className="work-browser-bar"><span>● ● ●</span><span>emeraldbayresorts.com</span></div>
                    <Image className="work-site-screenshot" src="/emerald-bay-screenshot.jpg" alt="" width={1265} height={712} />
                  </div>
                  <span className="work-art-caption">One website. A lasting client relationship.</span>
                </div>}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
