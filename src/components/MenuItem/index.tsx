import React from "react";

export interface MenuItemProps {
  color?: string;
  href: string;
  external: boolean;
  children: React.ReactNode;
}

export const MenuItem: React.FC<MenuItemProps> = ({
  color,
  href,
  external,
  children,
}) => {
  return (
    <a
      className={`button is-inverted ${!!color ? color : ""}`}
      href={href}
      {...(external && { target: "_blank", rel: "noreferrer" })}
    >
      {children}
    </a>
  );
};
