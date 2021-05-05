import React from "react";
import "./Menu.css";

export const Menu: React.FC = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-menu is-justify-content-center">
        <a className="navbar-item has-text-success">Home</a>

        <a className="navbar-item has-text-info">LinkedIn</a>
        <a className="navbar-item has-text-grey">GitHub</a>

        <div className="navbar-item has-dropdown is-hoverable">
          <a className="navbar-link has-text-danger">Archive</a>
          <div className="navbar-dropdown">
            <a className="navbar-item has-text-danger">2018.marcopuccio.me</a>
            <a className="navbar-item has-text-danger">2016.marcopuccio.me</a>
            <hr className="navbar-divider has-text-danger" />
            <a className="navbar-item has-text-danger">
              <small>Report an issue</small>
            </a>
          </div>
        </div>
        <a className="navbar-item has-text-primary">Contact</a>
      </div>
    </nav>
  );
};
