import Portrait from "@/components/ui/Portrait";
import { profile } from "@/data/profile";
import { skills } from "@/data/experience";

export default function Hero() {
  return (
    <header id="top" className="hero dark">
      <div className="aurora" aria-hidden="true"><i /><i /><i /></div>
      <div className="hero-in">
        <div>
          <p className="kicker">Flutter &amp; mobile development</p>
          <h1>Hi, I’m<br />{profile.short}.</h1>
          <p className="mobile-intro">I’m an {profile.role}. I specialize in Flutter mobile apps and also build full-stack web applications.</p>
          <p className="lead">
            I’m an {profile.role}. I specialize in mobile development with Flutter, building apps for Android and iOS. I also develop full-stack web applications.
          </p>
          <p className="hero-about">
            I studied Software Engineering at Coventry University through NIBM. Over the past two years, I’ve worked on products ranging from mobile tools for field technicians to web platforms for hospitality teams.
          </p>
          <div className="actions">
            <a className="btn" href="#experience">Explore my experience</a>
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
