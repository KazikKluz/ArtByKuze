import React, { useState, useEffect } from "react";

import Logo from "../../assets/artbyKuzelogo.png";
import {
  HeaderContainer,
  LogoContainer,
  LogoImage,
  Options,
  Option,
} from "./header.styles.js";

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
    <HeaderContainer style={visibility}>
      <LogoContainer>
        <LogoImage src={Logo} alt="logo" />
      </LogoContainer>
      <Options>
        <Option>ABOUT</Option>
        <Option>PAINTINGS</Option>
        <Option>DRAWINGS</Option>
        <Option>EXIBITIONS</Option>
        <Option>BLOG</Option>
        <Option>CONTACT</Option>
      </Options>
    </HeaderContainer>
  );
};

export default Header;
