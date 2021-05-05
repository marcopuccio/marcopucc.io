import React from "react";

import "./App.css";

import { Header } from "../components/Header";
import { Menu } from "../components/Menu";

export const App: React.FC = () => {
  return (
    <div className="App-container">
      <div className="card">
        <div className="card-content">
          <div className="media">
            <Header />
          </div>
          <div className="content">
            <Menu />
          </div>
        </div>
      </div>
    </div>
  );
};
