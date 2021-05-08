import React, { useState } from "react";

import { MenuItem, MenuItemProps } from "../MenuItem";
import { FAIcon } from "../FAIcon";
import "./Menu.css";

const menuItems: MenuItemProps[] = [
  {
    color: "is-primary",
    external: false,
    href: "/#",
    children: <span>Home</span>,
  },
  {
    color: "is-info",
    external: true,
    href: "https://www.linkedin.com/in/marcopuccio/",
    children: (
      <>
        <span>LinkedIn</span>
        <FAIcon faIconName="linkedin" />
      </>
    ),
  },
  {
    color: "is-black",
    external: true,
    href: "https://github.com/marcopuccio/",
    children: (
      <>
        <span>GitHub</span>
        <FAIcon faIconName="github" />
      </>
    ),
  },
];

const archiveDropdownMenuItems: MenuItemProps[] = [
  {
    color: "is-danger",
    external: true,
    href: "https://2018.marcopuccio.me/",
    children: <span>2018.marcopuccio.me</span>,
  },
  {
    color: "is-danger",
    external: true,
    href: "https://2016.marcopuccio.me/",
    children: <span>2016.marcopuccio.me</span>,
  },
  {
    color: "is-danger",
    external: true,
    href: "https://github.com/marcopuccio/marcopuccio.github.io/issues/new",
    children: <small>Report an issue</small>,
  },
];

export const Menu: React.FC = () => {
  const [archiveDropdownActive, setArchiveDropdownActive] = useState<boolean>(
    false
  );

  const toggleArchiveDropdown = () => {
    setArchiveDropdownActive((isActive) => !isActive);
  };

  return (
    <div className="is-flex is-flex-direction-row is-justify-content-center is-flex-wrap-wrap">
      {menuItems.map((item, index) => (
        <MenuItem {...item} key={index} />
      ))}

      <div
        className={`dropdown is-right ${
          !!archiveDropdownActive ? "is-active" : ""
        }`}
      >
        <div className="dropdown-trigger">
          <button
            className="button is-inverted is-danger"
            aria-haspopup="true"
            aria-controls="archive-dropdown"
            onClick={toggleArchiveDropdown}
          >
            <span>Archive</span>
            <span className="icon is-small">
              <i className="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div className="dropdown-menu" id="archive-dropdown" role="menu">
          <div className="dropdown-content">
            {archiveDropdownMenuItems.map((item, index) => (
              <div className="dropdown-item" key={index}>
                <MenuItem {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
