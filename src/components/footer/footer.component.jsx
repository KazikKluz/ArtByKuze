import React from "react";

import SocialButtons from "./socialButtons"
import { Frame, Paragraph, Container, TopButton } from "./footer.styles.js";

const Year = new Date().getFullYear(); 

const Footer = () => {
  return <Frame>
  <Container><Paragraph>© {Year} Art By Kuze - Visual Artist. All rights reserved. Site by Webfuzee</Paragraph>
  <SocialButtons /></Container>
  <TopButton /> 
  </Frame>;
};

export default Footer;
