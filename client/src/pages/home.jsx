import React from "react";
import waitingIcon from "../assets/waiting.svg";
import "./css/home.css";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="left-hero">
          <h1 className="hero-title">Leevesh Kumar</h1>
          <h2 className="hero-subtitle">SOFTWARE Developer</h2>
        </div>
        <div className="right-hero">
          <img src={waitingIcon} className="waiting-icon" />
        </div>
        <h2 className="hero-objective">
          I am a passionate software developer with a keen interest in
          exploring new technologies and building innovative solutions.
        </h2>
      </div>
      <div className="resume">
        <div className="btn">
          <NavLink to="/resume" className="nav-link">
            View CV
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;
