import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import "./css/header.css";

const navIcons = {
  home: "./src/assets/home.svg",
  skills: "./src/assets/skills.svg",
  projects: "./src/assets/project.svg",
  resume: "./src/assets/resume.svg",
  contact: "./src/assets/contact.svg",
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false); // Default is light mode
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    document.documentElement.classList.toggle("dark", newDarkMode);
    localStorage.setItem("theme", newDarkMode ? "dark" : "light");
  };

  useEffect(() => {
    // Check localStorage for theme preference
    const savedTheme = localStorage.getItem("theme");
    const isDark = savedTheme === "dark";
    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-content">
        <a href="/" className="header-title">leeveshkumarweb</a>
        <div className="header-controls">
          <nav className="header-nav" ref={menuRef}>
            <div className="menu-icon" onClick={toggleMenu}>
              {menuOpen ? "×" : "☰"}
            </div>
            <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
              {["home", "skills", "projects", "resume", "contact"].map((key) => (
                <li key={key}>
                  <NavLink
                    to={key === "home" ? "/" : `/${key}`}
                    className={({ isActive }) => (isActive ? "active" : "")}
                    end={key === "home"}
                  >
                    <img src={navIcons[key]} alt={key} width="35" height="35" />
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
