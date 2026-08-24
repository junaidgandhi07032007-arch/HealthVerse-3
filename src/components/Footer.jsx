import { Link } from "react-router-dom";
import { Ambulance, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <div className="footer-logo">
            <Ambulance size={24} />
            <span>HealthVerse</span>
          </div>
          <p>Smart hospital management for better, faster patient care.</p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/">Departments</Link></li>
            <li><Link to="/doctors">Doctors</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <ul>
            <li>
              <Phone size={14} /> 1800-123-4567
            </li>
            <li>
              <Mail size={14} /> care@healthverse.com
            </li>
            <li>
              <Clock size={14} /> Open 24x7
            </li>
          </ul>
        </div>

        <div>
          <h4>Emergency</h4>
          <p>For emergencies call our helpline anytime.</p>
          <p className="footer-emergency">102</p>
        </div>
      </div>

      <div className="footer-bottom">© 2026 HealthVerse. All rights reserved.</div>
    </footer>
  );
}
