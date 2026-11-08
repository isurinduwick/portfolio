import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <section className="section dark center" id="contact">
      <div className="wrap narrow" data-reveal>
        <h2>Let’s work together.</h2>
        <p className="lead">I’m open to freelance projects and full-time opportunities. Tell me what you’re building.</p>
        <div className="actions">
          <a className="btn" href={`mailto:${profile.email}`}>Email me</a>
          <a className="whatsapp-contact" href={profile.whatsapp} target="_blank" rel="noopener noreferrer">
            <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M20.7 11.8a8.8 8.8 0 0 1-13.1 7.7l-4.7 1.2 1.3-4.6a8.8 8.8 0 1 1 16.5-4.3Z" stroke="currentColor" strokeWidth="1.7" />
              <path d="M8.3 6.8c-.6 0-1.3.9-1.3 1.8 0 2.6 4.5 7.3 7.7 7.3 1.2 0 2.1-1 2.1-1.9 0-.3-.2-.4-.4-.5l-1.9-.9c-.3-.1-.5 0-.7.3l-.7.9c-1.4-.5-3-1.9-3.6-3.2l.7-.9c.2-.2.2-.4.1-.7l-.9-2c-.1-.2-.3-.3-.6-.3Z" fill="currentColor" />
            </svg>
            WhatsApp
          </a>
          <a className="link" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ›</a>
          <a className="link" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub ›</a>
        </div>
      </div>
    </section>
  );
}
