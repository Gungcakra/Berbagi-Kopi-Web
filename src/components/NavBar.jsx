import React, { useState, useEffect } from "react";
import logoBerbagiPutih from "../assets/images/logoBerbagiPutih.png";
import "../css/NavBar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [navBg, setNavBg] = useState(false);
  // Handle sidebar toggle
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Menu", href: "#" },
    { name: "About", href: "#" },
    { name: "Galery", href: "#" },
    { name: "Contact", href: "#" },
  ];

  // Handle window resize to determine if in mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992); // Adjust breakpoint as needed
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call on mount to set initial state
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavBg(true);
      } else if (window.scrollY < 50) {
        setNavBg(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className={`navbar navbar-expand-lg navbar-dark ${isMobile || navBg ? 'bg-dark' : 'bg-transparent'} fixed-top`}>
        <div className="container-fluid">
          <img
            src={logoBerbagiPutih}
            alt="Logo"
            style={{ maxWidth: "50px", padding: "0" }}
            className="ms-5"
          />
          <a className="navbar-brand text-white" href="#">
            Berbagi Kopi
          </a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={handleToggle}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end">
            <ul className="navbar-nav me-5">
            {navLinks.map((links,index)=>(
              <li className="nav-item">
                <a className="nav-link" href={links.href}>
                  {links.name}
                </a>
              </li>
              
            ))}
             
            </ul>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        {/* <button className="close-btn" onClick={handleToggle}>
          &times;
        </button> */}
        <ul className="navbar-nav">
            {navLinks.map((links,index)=>(
              <li className="nav-item">
                <a className="nav-link" href={links.href}>
                  {links.name}
                </a>
              </li>
              
            ))}
             
            </ul>
      </div>

      {/* Overlay */}
      {isOpen && <div className="side-overlay" onClick={handleToggle}></div>}
    </>
  );
}

export default Navbar;
