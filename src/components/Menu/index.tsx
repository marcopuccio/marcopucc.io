import React from "react";
import "./Menu.css";

export const Menu: React.FC = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-menu is-justify-content-center">
        <a className="navbar-item has-text-success">Home</a>
        <a
          className="navbar-item has-text-info"
          href="https://www.linkedin.com/in/marcopuccio/"
          target="_blank"
        >
          LinkedIn
        </a>
        <a
          className="navbar-item has-text-grey"
          href="https://github.com/marcopuccio"
          target="_blank"
        >
          GitHub
        </a>
        <div className="navbar-item has-dropdown is-hoverable">
          <a className="navbar-link has-text-danger">Archive</a>
          <div className="navbar-dropdown">
            <a
              className="navbar-item has-text-danger"
              href="https://2018.marcopuccio.me/"
              target="_blank"
            >
              2018.marcopuccio.me
            </a>
            <a
              className="navbar-item has-text-danger"
              href="https://2016.marcopuccio.me/"
              target="_blank"
            >
              2016.marcopuccio.me
            </a>
            <hr className="navbar-divider has-text-danger" />
            <a
              className="navbar-item has-text-danger"
              href="https://github.com/marcopuccio/marcopuccio.github.io/issues/new"
              target="_new"
            >
              <small>Report an issue</small>
            </a>
          </div>
        </div>
        <a className="navbar-item has-text-primary">Contact</a>
      </div>
    </nav>
  );
};
