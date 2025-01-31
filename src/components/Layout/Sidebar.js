import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar-container">
      <nav className="sidebar-nav-container">
        <ul className="sidebar-nav-list">
          <li className="sidebar-nav-item">
            <NavLink to="/" className="sidebar-nav-link">
              <img src="https://cdn-icons-png.flaticon.com/512/25/25694.png" alt="Home" className="sidebar-nav-icon" />
              <span className="sidebar-nav-label">Home</span>
            </NavLink>
          </li>
          <li className="sidebar-nav-item">
            <NavLink to="/category" className="sidebar-nav-link">
              <img src="https://cdn-icons-png.freepik.com/256/9710/9710991.png?semt=ais_hybrid" alt="Category" className="sidebar-nav-icon" />
              <span className="sidebar-nav-label">Category</span>
            </NavLink>
          </li>
          <li className="sidebar-nav-item">
            <NavLink to="/profile" className="sidebar-nav-link">
              <img src="https://www.citypng.com/public/uploads/preview/download-black-male-user-profile-icon-png-701751695035033bwdeymrpov.png" alt="Profile" className="sidebar-nav-icon" />
              <span className="sidebar-nav-label">Profile</span>
            </NavLink>
          </li>
          <li className="sidebar-nav-item">
            <NavLink to="/resume" className="sidebar-nav-link">
              <img src="https://cdn-icons-png.flaticon.com/512/1250/1250696.png" alt="Resume" className="sidebar-nav-icon" />
              <span className="sidebar-nav-label">Resume</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
