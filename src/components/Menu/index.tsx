import React from "react";
import "./Menu.css";

export const Menu: React.FC = () => {
  return (
    <div className="is-flex is-flex-direction-row is-justify-content-center is-flex-wrap-wrap">
      <div className="is-flex">
        <a className="button is-primary is-inverted" href="/#">
          <span>Home</span>
        </a>
      </div>
      <div className="is-flex">
        <a
          className="button is-info is-inverted"
          href="https://www.linkedin.com/in/marcopuccio/"
          target="_blank"
          rel="noreferrer"
        >
          <span>LinkedIn</span>
          <span className="icon">
            <i className="fab fa-linkedin"></i>
          </span>
        </a>
      </div>
      <div className="is-flex">
        <a
          className="button is-white"
          href="https://github.com/marcopuccio"
          target="_blank"
          rel="noreferrer"
        >
          <span>GitHub</span>
          <span className="icon">
            <i className="fab fa-github"></i>
          </span>
        </a>
      </div>

      {/* <div className="dropdown is-active">
        <div className="dropdown-trigger">
          <button
            className="button is-inverted is-danger"
            aria-haspopup="true"
            aria-controls="archive-dropdown"
          >
            <span>Archive</span>
            <span className="icon is-small">
              <i className="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div className="dropdown-menu" id="archive-dropdown" role="menu">
          <div className="dropdown-content">
            <div className="dropdown-item">
              <a
                className="is-danger is-inverted"
                href="https://2018.marcopuccio.me/"
                target="_blank"
                rel="noreferrer"
              >
                2018.marcopuccio.me
              </a>
            </div>
            <div className="dropdown-item">
              <a
                className="is-danger is-inverted"
                href="https://2016.marcopuccio.me/"
                target="_blank"
                rel="noreferrer"
              >
                2016.marcopuccio.me
              </a>
            </div>

            <hr className="dropdown-divider" />
            <div className="dropdown-item">
              <a
                className="is-danger is-inverted"
                href="https://github.com/marcopuccio/marcopuccio.github.io/issues/new"
                target="_blank"
                rel="noreferrer"
              >
                <small>Report an issue</small>
              </a>
            </div>
          </div>
        </div>
      </div>
       */}
    </div>
  );
};
