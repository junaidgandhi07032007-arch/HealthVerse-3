import { Stethoscope } from "lucide-react";
import { doctors } from "../data.js";

export default function Doctors({ activeDept }) {
  // if a department is selected, only show doctors from that department
  const visibleDoctors = activeDept
    ? doctors.filter((doc) => doc.dept === activeDept)
    : doctors;

  return (
    <section id="doctors" className="section">
      <h2>Meet Our Doctors</h2>
      <p className="section-subtitle">
        {activeDept
          ? `Showing doctors in ${activeDept}`
          : "Experienced specialists dedicated to your wellbeing."}
      </p>

      <div className="grid grid-4">
        {visibleDoctors.map((doc) => (
          <div key={doc.name} className="card doctor-card">
            <div className="doctor-avatar">
              <Stethoscope size={32} />
            </div>
            <h3>{doc.name}</h3>
            <p className="doctor-spec">{doc.spec}</p>
            <p className="doctor-exp">{doc.exp}</p>
          </div>
        ))}

        {/* empty state when a filter matches nothing */}
        {visibleDoctors.length === 0 && (
          <p className="empty-state">No doctors found for this department yet.</p>
        )}
      </div>
    </section>
  );
}
