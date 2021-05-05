import React from "react";

export const Menu: React.FC = () => {
  return (
    <nav className="navbar text" role="navigation" aria-label="main navigation">
      <div className="navbar-menu is-justify-content-center">
        <a className="navbar-item">Home</a>

        <a className="navbar-item">LinkedIn</a>
        <a className="navbar-item">GitHub</a>

        <div className="navbar-item has-dropdown is-hoverable">
          <a className="navbar-link">Archive</a>

          <div className="navbar-dropdown">
            <a className="navbar-item">2018.marcopuccio.me</a>
            <a className="navbar-item">2018.marcopuccio.me</a>
            <hr className="navbar-divider" />
            <a className="navbar-item">Report an issue</a>
          </div>
          <a className="navbar-item">Contact</a>
        </div>
      </div>
    </nav>
  );
};
