import React, { useState, useEffect } from "react";

import Logo from "../../assets/artbyKuzelogo.png";
import "./header.styles.scss";

const Header = () => {
  const [visibility, setVisibility] = useState({ top: "0" });

  let prevScrollPos = window.pageYOffset;

  const handleScroll = () => {
    let currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
      setVisibility({ top: 0 });
    } else {
      setVisibility({ top: "-12vh" });
    }
    prevScrollPos = currentScrollPos;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header style={visibility} className="header">
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
