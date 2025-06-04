import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Appointment from "./Appointment";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (showModal) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    return () => document.body.classList.remove('modal-open');
  }, [showModal]);

  useEffect(() => {
    const handleScroll = () => {
      let navbar = document.getElementById("ftco-navbar");
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled", "awake");
      } else {
        navbar.classList.remove("scrolled", "awake");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <nav
      className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
      id="ftco-navbar"
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img className="img_navbar_logo" src="images/logo_redone.png" alt="Logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="ftco-nav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="oi oi-menu" /> Menu
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="ftco-nav">
          <ul className="navbar-nav ml-auto">
            {[
              { path: "/", label: "Home" },
              { path: "/about", label: "About" },
              { path: "/service", label: "Services" },
              { path: "/gallery", label: "Gallery" },
              { path: "/contact", label: "Contact" },
            ].map((item) => (
              <li
                key={item.path}
                onClick={() => setIsOpen(false)}
                className={`nav-item ${ 
                  location.pathname === item.path ? "active" : "" 
                }`}
              >
                <Link to={item.path} className="nav-link">
                  {item.label}
                </Link>
              </li>
            ))}
             <li className="nav-item cta">
            <Link className="nav-link" onClick={() => setShowModal(true)}>
              <span>Make an Appointment</span>
            </Link>
          </li>
          </ul>
        </div>
      </div>
    </nav>
    {showModal && <Appointment onClose={() => setShowModal(false)} />}
    </>
  );
};

export default Header;




