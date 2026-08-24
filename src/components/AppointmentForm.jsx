import { useState } from "react";
import { Calendar } from "lucide-react";
import { departments } from "../data.js";

const initialForm = {
  name: "",
  phone: "",
  department: departments[0].name,
  date: "",
};

export default function AppointmentForm() {
  const [formData, setFormData] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  // one generic handler works for every input because it reads `name`
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (submitted) setSubmitted(false); // reset success message on edit
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim() || !formData.date) {
      setError("Please fill in your name, phone number and preferred date.");
      setSubmitted(false);
      return;
    }

    if (!/^[0-9+\-\s]{7,15}$/.test(formData.phone.trim())) {
      setError("Please enter a valid phone number.");
      setSubmitted(false);
      return;
    }

    setError("");
    setSubmitted(true);
    // In a real app, this is where you'd POST formData to a backend API.
  }

  return (
    <section id="appointment" className="section appointment-section">
      <div className="appointment-card">
        <h2>
          <Calendar size={24} /> Book an Appointment
        </h2>
        <p className="section-subtitle" style={{ textAlign: "left" }}>
          Fill the form and our team will confirm your slot shortly.
        </p>

        <form onSubmit={handleSubmit} className="form">
          <label>
            Full Name
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </label>

          <label>
            Phone Number
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
            />
          </label>

          <label>
            Department
            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
            >
              {departments.map((d) => (
                <option key={d.name} value={d.name}>
                  {d.name}
                </option>
              ))}
            </select>
          </label>

          <label>
            Preferred Date
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </label>

          {error && <p className="form-error">{error}</p>}

          <button type="submit" className="btn btn-primary">
            Confirm Appointment
          </button>

          {submitted && (
            <p className="form-success">
              Thanks, {formData.name}! Your appointment request for{" "}
              {formData.department} on {formData.date} has been received.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
