import React from "react";

import "./App.css";

import { Header } from "../components/Header";
import { Menu } from "../components/Menu";
import { Pitch } from "../components/Pitch";

export const App: React.FC = () => {
  return (
    <div className="App-container pt-3">
      <div className="card mx-3">
        <div className="card-content">
          <div className="media">
            <Header />
          </div>
          <div className="content">
            <Menu />
            <section className="section">
              <Pitch />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
