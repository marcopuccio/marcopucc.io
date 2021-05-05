import React from "react";

import "./App.css";

import { Header } from "../components/Header";
import { Menu } from "../components/Menu";

export const App: React.FC = () => {
  return (
    <div className="App-container">
      <section className="mt-5">
        <Header />
      </section>
      <section>
        <Menu />
      </section>
    </div>
  );
};
