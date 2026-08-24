import { useState } from "react";
import Doctors from "../components/Doctors.jsx";
import { departments } from "../data.js";

export default function DoctorsPage() {
  const [activeDept, setActiveDept] = useState(null);

  return (
    <div className="page-header-wrap">
      <div className="page-header">
        <h1>Our Doctors</h1>
        <p>Filter by department to find the right specialist.</p>
      </div>

      {/* simple filter pills - clicking toggles the active department */}
      <div className="filter-pills">
        <button
          className={`pill ${activeDept === null ? "pill-active" : ""}`}
          onClick={() => setActiveDept(null)}
        >
          All
        </button>
        {departments.map((dept) => (
          <button
            key={dept.name}
            className={`pill ${activeDept === dept.name ? "pill-active" : ""}`}
            onClick={() => setActiveDept(dept.name)}
          >
            {dept.name}
          </button>
        ))}
      </div>

      <Doctors activeDept={activeDept} />
    </div>
  );
}
