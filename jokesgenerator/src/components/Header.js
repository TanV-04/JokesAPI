import React from "react";
import "../App.css";
import "../index.css"
import { Jokes } from "./Jokes";

export const Header = () => {
  return (
    <div className="header-card">
      <h1 className="anek-devanagari header-title">Joke Generator</h1>
      <Jokes />
    </div>
  );
};
