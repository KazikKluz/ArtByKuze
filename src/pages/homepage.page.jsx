import React from "react";

import "./homepage.styles.scss";

const HomePage = () => (
  <div className="homepage">
    <header className="header">
      <div className="logo-container">
        <div className="logo">Art by Kuze</div>
        <div className="side-logo">VISUAL ARTIST</div>
      </div>
      <div className="options">
        <div className="option">HOME</div>
        <div className="option">ABOUT</div>
        <div className="option">PAINTINGS</div>
        <div className="option">DRAWINGS</div>
        <div className="option">PRESS</div>
        <div className="option">EXIBITIONS</div>
        <div className="option">BLOG</div>
        <div className="option">CONTACT</div>
      </div>
    </header>
    <div className="main">Whats the story</div>
  </div>
);

export default HomePage;
