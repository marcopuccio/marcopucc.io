import React from "react";
import avatarImage from "./avatar.jpeg";

import "./Avatar.css";

export const Avatar: React.FC = () => {
  return (
    <figure className="image is-128x128 Avatar-figure">
      <img className="is-rounded" src={avatarImage} alt="Marco Puccio Avatar" />
    </figure>
  );
};
