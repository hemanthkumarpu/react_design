import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { scrollToSection } from "../utils/scrollToSection";
import logo from "../assets/logo.png";

const NAV_LINKS = [
  { href: '/#home', label: 'Home', sectionId: 'home' },
  { href: '/about-us', label: 'About Us', sectionId: null },
  { href: '/#courses', label: 'Courses', sectionId: 'courses' },
  { href: '/services', label: 'Services', sectionId: null },
  { href: '/#testimonials', label: 'Testimonials', sectionId: 'testimonials' },
  { href: '/#contact', label: 'Contact', sectionId: 'contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleSectionNavigation = (sectionId) => {
    setMenuOpen(false);

    if (location.pathname === "/") {
      scrollToSection(sectionId);
      return;
    }

    navigate("/", {
      state: {
        scrollTo: sectionId,
      },
    });
  };

  const handleNavClick = (item) => {
    setMenuOpen(false);

    if (item.href.startsWith("/#")) {
      handleSectionNavigation(item.sectionId);
      return;
    }

    navigate(item.href);
  };

  return (
    <header>
      <div className="header-flex">
        <Link to="/" className="brand">
          <img src={logo} alt="Gnana CompuTech Solutions logo" />

          <div className="brand-word">
            Gnana CompuTech
            <span>EDUCATION TECHNOLOGY SOLUTIONS</span>
          </div>
        </Link>

        <nav>
          <ul
            className="nav-menu"
            style={
              menuOpen
                ? {
                    display: "flex",
                    flexDirection: "column",
                    position: "absolute",
                    top: "100%",
                    right: 0,
                    left: "auto",
                    width: "50%",
                    maxHeight: "90vh",
                    overflowY: "auto",
                    background: "#F7F3E8",
                    padding: "20px 32px",
                    borderBottom: "1px solid #DCD2B4",
                    gap: "16px",
                  }
                : undefined
            }
          >
            {NAV_LINKS.map((item) => (
              <li key={item.href}>
                {item.href.startsWith('/#') ? (
                  <button
                    className="nav-link-btn"
                    onClick={() => handleNavClick(item)}
                  >
                    {item.label}
                  </button>
                ) : (
                  <button
                    className="nav-link-btn"
                    onClick={() => handleNavClick(item)}
                  >
                    {item.label}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <div className="phone-chip">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>

            <a href="tel:+919742543939">
              +91 97425 43939
            </a>
          </div>

          <button
            className="btn btn-primary"
            onClick={() => handleSectionNavigation("contact")}
          >
            Enquire
          </button>

          <button
            className="nav-toggle"
            aria-label="Menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}