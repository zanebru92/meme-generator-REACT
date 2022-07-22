import "./style.css";
import React from "react";
import troll from "../../assets/troll.png";

export default function Header() {
  return (
    <header>
      <div className="logo">
        <img src={troll} alt="troll face" />
        <h3>Meme Generator</h3>
      </div>
      <div className="header-text">
        <h5>React course - project 3</h5>
      </div>
    </header>
  );
}
