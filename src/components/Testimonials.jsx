import { Star } from "lucide-react";
import { testimonials } from "../data.js";

export default function Testimonials() {
  return (
    <section className="section section-alt">
      <h2>What Our Patients Say</h2>
      <div className="grid grid-3">
        {testimonials.map((t) => (
          <div key={t.name} className="card testimonial-card">
            <div className="stars">
              {[1, 2, 3, 4, 5].map((n) => (
                <Star key={n} size={16} fill="currentColor" />
              ))}
            </div>
            <p className="testimonial-text">"{t.text}"</p>
            <p className="testimonial-name">{t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
