import { departments } from "../data.js";

// activeDept + onSelect are passed down from App so that clicking a
// department here can filter the Doctors list below it.
export default function Departments({ activeDept, onSelect }) {
  return (
    <section id="departments" className="section section-alt">
      <h2>Our Departments</h2>
      <p className="section-subtitle">
        Comprehensive care across specialities, under one roof. Click a
        department to see its doctors.
      </p>

      <div className="grid grid-3">
        {departments.map((dept) => {
          const Icon = dept.icon;
          const isActive = activeDept === dept.name;
          return (
            <button
              key={dept.name}
              className={`card dept-card ${isActive ? "dept-card-active" : ""}`}
              onClick={() => onSelect(isActive ? null : dept.name)}
            >
              <div className="dept-icon">
                <Icon size={24} />
              </div>
              <h3>{dept.name}</h3>
              <p>{dept.desc}</p>
            </button>
          );
        })}
      </div>
    </section>
  );
}
