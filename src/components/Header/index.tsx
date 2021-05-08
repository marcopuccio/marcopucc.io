import React from "react";

import { Avatar } from "../Avatar";
import { Title } from "../Title";
import { Subtitle } from "../Subtitle";
import "./Header.css";

export const Header: React.FC = () => {
  return (
    <header className="Header-root is-flex is-flex-direction-column is-align-content-center ">
      <div className="is-flex my-4">
        <Avatar />
      </div>
      <div className="has-text-centered">
        <Title>Marco Puccio</Title>
        <Subtitle>Software Engineer & Professor</Subtitle>
      </div>
    </header>
  );
};
