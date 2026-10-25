import { useState, useEffect } from "react";
import logo from "../assets/images/logo-berbagi.webp";
import Icon from "./Icon";
import { NAV_LINKS } from "../data";
import "../css/NavBar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Highlight the link of the section currently in the middle of the viewport
  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.querySelector(l.href)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(`#${e.target.id}`));
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className={`nav ${scrolled || isOpen ? "nav--solid" : ""}`}>
      <div className="container nav-inner">
        <a href="#home" className="nav-brand" onClick={() => setIsOpen(false)}>
          <img src={logo} alt="" width="44" height="38" />
          <span>
            <strong>Berbagi</strong>
            <small>Ruang &amp; Kopi</small>
          </span>
        </a>

        <nav className="nav-links" aria-label="Navigasi utama">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={active === link.href ? "is-active" : ""}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <a href="#menu" className="btn btn-dark btn-sm nav-cta">
            Lihat Menu <Icon name="arrow" size={16} />
          </a>
          <button
            type="button"
            className="nav-toggle"
            aria-label={isOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          >
            <Icon name={isOpen ? "close" : "menu"} size={22} />
          </button>
        </div>
      </div>

      <div className={`nav-drawer ${isOpen ? "open" : ""}`}>
        <div className="container">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={active === link.href ? "is-active" : ""}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
              <Icon name="arrowUpRight" size={18} />
            </a>
          ))}
          <a href="#menu" className="btn btn-dark" onClick={() => setIsOpen(false)}>
            Lihat Menu <Icon name="arrow" size={16} />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
