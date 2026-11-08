import { experience, skills } from "@/data/experience";

export default function Experience() {
  return (
    <section className="section dark" id="experience">
      <div className="wrap narrow">
        <h2 data-reveal>Experience.</h2>
        {experience.map((j) => (
          <article key={j.company} className="job">
            <h3>{j.company}</h3>
            <p className="where">{j.type}. {j.place}</p>
            <ul className="roles">
              {j.roles.map((r) => (
                <li key={r.title}><b>{r.title}</b><span>{r.period}</span></li>
              ))}
            </ul>
            {j.summary && <p className="sum">{j.summary}</p>}
            {j.projects?.map((p) => (
              <details key={p.title} className="proj">
                <summary>{p.title}</summary>
                <p>{p.kind}. {p.intro}</p>
                <ul>{p.bullets.map((x) => <li key={x}>{x}</li>)}</ul>
                <p className="tech">{p.tech.map((x) => <span key={x}>{x}</span>)}</p>
              </details>
            ))}
            {j.recognition && <p className="recog">{j.recognition}</p>}
            {j.skills && <p className="tech">{j.skills.map((x) => <span key={x}>{x}</span>)}</p>}
          </article>
        ))}
        <p className="chips">{skills.map((s) => <span key={s}>{s}</span>)}</p>
      </div>
    </section>
  );
}
