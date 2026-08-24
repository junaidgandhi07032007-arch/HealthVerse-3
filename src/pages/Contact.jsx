import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="page-header-wrap">
      <div className="page-header">
        <h1>Contact Us</h1>
        <p>Reach out any time — we're here to help.</p>
      </div>

      <section className="section">
        <div className="contact-grid">
          <div className="contact-item">
            <Phone className="contact-icon" size={22} />
            <h3>Phone</h3>
            <p>1800-123-4567</p>
          </div>
          <div className="contact-item">
            <Mail className="contact-icon" size={22} />
            <h3>Email</h3>
            <p>care@healthverse.com</p>
          </div>
          <div className="contact-item">
            <MapPin className="contact-icon" size={22} />
            <h3>Address</h3>
            <p>HealthVerse Hospital, MG Road, Bengaluru</p>
          </div>
          <div className="contact-item">
            <Clock className="contact-icon" size={22} />
            <h3>Hours</h3>
            <p>Open 24x7 — Emergency care always available</p>
          </div>
        </div>
      </section>
    </div>
  );
}
