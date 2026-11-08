"use client";

import { useState } from "react";
import { certs } from "@/data/credentials";

export default function Credentials() {
  const [expanded, setExpanded] = useState(false);
  return (
    <section className="section light" id="credentials">
      <div className="wrap">
        <h2 data-reveal>Education and credentials.</h2>
        <div className="edu">
          <h3>BSc (Hons) in Software Engineering</h3>
          <p>Coventry University, studied through NIBM</p>
        </div>
        <h3 className="subhead">Professional certifications</h3>
        <ul id="certificate-list" className={`rows lightrows certs ${expanded ? "" : "certs-preview"}`}>
          {certs.map((c) => (
            <li key={c.name}>
              <div>
                <h3>{c.name}</h3>
                <p>{c.issuer}. Issued {c.issued}</p>
                {c.skills && <p>Skills: {c.skills.join(", ")}</p>}
                {c.linked && <p>Linked course: {c.linked}</p>}
                {c.id && <p className="id">Credential ID {c.id}</p>}
              </div>
            </li>
          ))}
        </ul>
        <button className="certs-toggle" aria-controls="certificate-list" aria-expanded={expanded} onClick={() => setExpanded(!expanded)}>
          {expanded ? "Show fewer certifications" : `View all ${certs.length} certifications`}
        </button>
      </div>
    </section>
  );
}
