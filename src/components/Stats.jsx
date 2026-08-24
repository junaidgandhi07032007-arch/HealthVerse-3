import { stats } from "../data.js";

export default function Stats() {
  return (
    <section className="stats">
      {stats.map((item) => (
        <div key={item.label} className="stats-item">
          <p className="stats-value">{item.value}</p>
          <p className="stats-label">{item.label}</p>
        </div>
      ))}
    </section>
  );
}
