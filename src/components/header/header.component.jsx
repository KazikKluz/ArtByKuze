import React from "react";

import Logo from "../../assets/artbyKuzelogo.png";
import "./header.styles.scss";

const Header = () => {
  const handleScroll = (e) => {
    console.log("scroliing");
  };
  return (
    <header onScroll={handleScroll} className="header">
      <div className="logo-container">
        <img className="logo" src={Logo} alt="logo" />
      </div>
      <div className="options">
        <div className="option">ABOUT</div>
        <div className="option">PAINTINGS</div>
        <div className="option">DRAWINGS</div>
        <div className="option">EXIBITIONS</div>
        <div className="option">BLOG</div>
        <div className="option">CONTACT</div>
      </div>
    </header>
  );
};

export default Header;
