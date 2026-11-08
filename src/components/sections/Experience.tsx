import { career, freelance } from "@/data/experience";
import { journey } from "@/data/projects";
import type { Experience as Job } from "@/types";

function JobEntry({ j }: { j: Job }) {
  return (
  <article key={j.company} className="job">
    <h4>{j.company}</h4>
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
      {p.title.startsWith("Yaka.lk") && <a className="link" href="https://play.google.com/store/apps/details?id=lk.yaka.app">View on Google Play ›</a>}
      </details>
    ))}
    {j.company === "Emerald Bay Resorts" && (
      <>
        <details className="proj">
          <summary>From the first website to five follow-up projects</summary>
          <ul>{journey.map(([title, detail]) => <li key={title}><strong>{title}.</strong> {detail}</li>)}</ul>
        </details>
        <a className="link" href="https://emeraldbayresorts.com">Visit the resort website ›</a>
      </>
    )}
    {j.recognition && <p className="recog">{j.recognition}</p>}
    {j.skills && <p className="tech">{j.skills.map((x) => <span key={x}>{x}</span>)}</p>}
  </article>
  );
}

export default function Experience() {
  return (
    <section className="section dark" id="experience">
      <div className="wrap narrow">
        <h2 data-reveal>Experience.</h2>
        <h3 className="subhead">Career growth</h3>
        <p className="sum">My career has grown from software engineering intern at WHYTEQ to mobile team lead at eSupport, and now Associate Software Engineer at Zeusgen. Today I focus on mobile development, specializing in Flutter while also working on full-stack web applications.</p>
        {career.map(j => <JobEntry key={j.company} j={j} />)}
        <details className="proj">
          <summary>How I approach building and maintaining a product</summary>
          <p>I start by understanding the requirements and the existing code, then develop the feature with readable, reusable components. I test the result with the team, prepare the build for deployment and continue to maintain it after release.</p>
          <p>For a new feature such as social login, I would consider the existing authentication flow, integrate the provider, and check cases such as cancellation and existing accounts before release.</p>
          <p>To investigate a crash, I would review crash reports and stack traces, identify the affected devices and app versions, reproduce the issue and work on a fix. After testing and deployment, I would monitor the reports to check the outcome and catch regressions.</p>
          <p>Performance is part of the product lifecycle too. I’m learning performance optimization while applying it in my work, checking how an app behaves and comparing the results after a change. Maintainable code makes it easier to add features, fix bugs and support the product over time.</p>
        </details>
        <h3 className="subhead">Freelance</h3>
        {freelance.map(j => <JobEntry key={j.company} j={j} />)}
      </div>
    </section>
  );
}
