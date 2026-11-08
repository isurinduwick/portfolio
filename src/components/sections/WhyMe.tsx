import { strengths } from "@/data/story";

export default function WhyMe() {
  return (
    <section className="section light grey" id="why">
      <div className="wrap">
        <h2 data-reveal>Why people trust me.</h2>
        <div className="trio">
          {strengths.map(([t, d]) => (
            <div key={t}><h3>{t}</h3><p>{d}</p></div>
          ))}
        </div>
      </div>
    </section>
  );
}
