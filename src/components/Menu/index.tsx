import React from "react";

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

export const Menu: React.FC = () => {
  return (
    <div className="is-flex is-flex-direction-row is-justify-content-center is-flex-wrap-wrap">
      {menuItems.map((item, index) => (
        <MenuItem {...item} key={index} />
      ))}
    </div>
  );
};
