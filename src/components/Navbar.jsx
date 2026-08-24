import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Phone, MapPin, Ambulance } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Doctors", path: "/doctors" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  // isMenuOpen starts false; setIsMenuOpen flips it when the hamburger is clicked
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="navbar">
      {/* top info strip - hidden on small screens via CSS */}
      <div className="navbar-top">
        <div className="navbar-top-left">
          <span>
            <Phone size={14} /> 1800-123-4567
          </span>
          <span>
            <MapPin size={14} /> Find a hospital near you
          </span>
        </div>
        <span>Emergency Helpline: 102</span>
      </div>

      <div className="navbar-main">
        <Link to="/" className="navbar-logo">
          <Ambulance size={28} />
          <span>HealthVerse</span>
        </Link>

        {/* desktop nav links */}
        <nav className="navbar-links">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => (isActive ? "navlink-active" : "")}
              end={link.path === "/"}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <Link to="/book-appointment" className="btn btn-primary navbar-cta">
          Book Appointment
        </Link>

        {/* hamburger button, only visible on small screens */}
        <button
          className="navbar-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* mobile menu only renders when isMenuOpen is true */}
      {isMenuOpen && (
        <nav className="navbar-mobile">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} onClick={() => setIsMenuOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link
            to="/book-appointment"
            className="btn btn-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            Book Appointment
          </Link>
        </nav>
      )}
    </header>
  );
}
