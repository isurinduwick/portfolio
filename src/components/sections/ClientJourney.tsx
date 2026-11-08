import ResortPhone from "@/components/ui/ResortPhone";
import { journey } from "@/data/projects";

export default function ClientJourney() {
  return (
    <section className="section light" id="client">
      <div className="wrap">
        <h2 data-reveal>One website. Five more projects.</h2>
        <p className="lead" data-reveal>I built Emerald Bay Resorts’ website in Mirissa and kept earning their trust. This is what they asked for next.</p>
        <div className="client-showcase">
          <ResortPhone />
          <ol className="steps">
          {journey.map(([t, d]) => (
            <li key={t}><h3>{t}</h3><p>{d}</p></li>
          ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
