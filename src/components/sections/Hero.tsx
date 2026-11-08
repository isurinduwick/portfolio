import Portrait from "@/components/ui/Portrait";
import { profile } from "@/data/profile";
import { skills } from "@/data/experience";

export default function Hero() {
  return (
    <header id="top" className="hero dark">
      <div className="aurora" aria-hidden="true"><i /><i /><i /></div>
      <div className="hero-in">
        <div>
          <p className="kicker">Software engineer &amp; builder</p>
          <h1>Hi, I’m<br />{profile.short}.</h1>
          <p className="mobile-intro">I build mobile apps, websites and business systems as an {profile.role}.</p>
          <p className="lead">
            I’m an {profile.role}, building mobile apps, full-stack web platforms and custom business systems. With 2+ years in industry, I turn ideas into practical software that people can use every day.
          </p>
          <p className="hero-about">
            I studied Software Engineering at Coventry University through NIBM. I enjoy solving real-world problems, sharing what I learn through teaching, and working with AI coding agents to bring ideas to life.
          </p>
          <div className="actions">
            <a className="btn mobile-work" href="#work">View my work</a>
            <a className="btn" href="#story">Read my story</a>
            <a className="link" href="#contact">Let’s work together ›</a>
          </div>
          <p className="avail"><i />Open to freelance projects and job opportunities</p>
        </div>
        <Portrait />
      </div>
      <div className="marquee" aria-hidden="true">
        <div>{[...skills, ...skills].map((x, i) => <span key={i}>{x}</span>)}</div>
      </div>
    </header>
  );
}
