import React from "react";
import "./Menu.css";

export const Menu: React.FC = () => {
  return (
    <div className="is-flex is-flex-direction-row is-justify-content-center is-flex-wrap-wrap">
      <div className="Menu-item is-flex px-4 py-1">
        <a className="has-text-success" href="/#">
          Home
        </a>
      </div>
      <div className="Menu-item is-flex px-4 py-1">
        <a
          className="has-text-info"
          href="https://www.linkedin.com/in/marcopuccio/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
          <span className="icon">
            <i className="fab fa-linkedin"></i>
          </span>
        </a>
      </div>
      <div className="Menu-item is-flex px-4 py-1">
        <a
          className="has-text-grey"
          href="https://github.com/marcopuccio"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
          <span className="icon">
            <i className="fab fa-github"></i>
          </span>
        </a>
      </div>
      {/* <div className="has-dropdown is-hoverable">
        <a className="has-text-danger" href="/">
          Archive
        </a>
        <div className="navbar-dropdown">
          <a
            className="has-text-danger"
            href="https://2018.marcopuccio.me/"
            target="_blank"
            rel="noreferrer"
          >
            2018.marcopuccio.me
          </a>
          <a
            className="has-text-danger"
            href="https://2016.marcopuccio.me/"
            target="_blank"
            rel="noreferrer"
          >
            2016.marcopuccio.me
          </a>
          <hr className="navbar-divider has-text-danger" />
          <a
            className="has-text-danger"
            href="https://github.com/marcopuccio/marcopuccio.github.io/issues/new"
            target="_blank"
            rel="noreferrer"
          >
            <small>Report an issue</small>
          </a>
        </div>
      </div> */}
    </div>
  );
};
