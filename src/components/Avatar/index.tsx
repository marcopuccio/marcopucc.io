import React from "react";
import avatarImage from "./avatar.jpeg";

import "./Avatar.css";

export const Avatar: React.FC = () => {
  return (
    <figure className="image Avatar-figure">
      <img className="is-rounded" src={avatarImage} alt="Marco Puccio Avatar" />
    </figure>
  );
};
