import { chapters } from "@/data/story";

export default function Story() {
  return (
    <section className="section light" id="story">
      <div className="wrap narrow">
        <h2 data-reveal>My story.</h2>
        <p className="lead" data-reveal>
          I’m Isurindu, an Associate Software Engineer at Zeusgen. I studied BSc (Hons) Software Engineering at Coventry University through NIBM. Here is how I got here.
        </p>
        <ol className="chapters">
          {chapters.map((c) => (
            <li key={c.title} data-reveal>
              <span>{c.when}</span>
              <div><h3>{c.title}</h3><p>{c.text}</p></div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
