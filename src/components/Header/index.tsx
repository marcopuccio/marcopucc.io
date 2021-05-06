import React from "react";

import { Avatar } from "../Avatar";
import { Title } from "../Title";
import { Subtitle } from "../Subtitle";

export const Header: React.FC = () => {
  return (
    <header className="container">
      <div className="columns is-vcentered">
        <div className="column is-one-quarter">
          <Avatar />
        </div>
        <div className="column">
          <Title>Marco Puccio</Title>
          <Subtitle>Software Engineer & Professor</Subtitle>
        </div>
      </div>
    </header>
  );
};
