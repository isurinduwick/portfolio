/* eslint-disable @next/next/no-img-element */
import { profile, stats } from "@/data/profile";

export default function Portrait() {
  return (
    <aside className="portrait">
      <div className="avatar">
        {profile.photo ? <img src={profile.photo} alt={profile.name} /> : <span aria-hidden="true">{profile.short[0]}</span>}
      </div>
      <h2>{profile.name}</h2>
      <p>{profile.role}</p>
      <ul>
        {stats.map(([n, l]) => (
          <li key={l}><b>{n}</b>{l}</li>
        ))}
      </ul>
    </aside>
  );
}
