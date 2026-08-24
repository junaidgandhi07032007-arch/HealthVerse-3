import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <p className="eyebrow">Smart Hospital Management</p>
        <h1>
          Quality healthcare, <br /> made simple.
        </h1>
        <p className="hero-desc">
          HealthVerse connects patients, doctors and hospital staff on one
          smart platform — book appointments, manage records and get care
          faster.
        </p>
        <div className="hero-actions">
          <Link to="/book-appointment" className="btn btn-primary">
            Book an Appointment
          </Link>
          <a href="#departments" className="btn btn-outline">
            Explore Departments
          </a>
        </div>
      </div>

      <div className="hero-visual">
        {/* Placeholder image service (picsum.photos) — swap the src
            for your own hospital photo whenever you have one. */}
        <img
          src="https://picsum.photos/seed/healthverse/600/440"
          alt="Hospital staff caring for a patient"
          className="hero-image"
        />
      </div>
    </section>
  );
}
