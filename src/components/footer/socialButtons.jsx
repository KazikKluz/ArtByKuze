import React from "react";
import SocialMediaButtons from "react-social-media-buttons";

import {Buttons} from "./footer.styles.js"

const SocialButtons = () => {
 const links = ['https://facebook.com', 'https://instagram.com', 'https://behance.com'];
 
  const buttonStyle = {
    backgroundColor: 'transparent',
    width: '36px',
    height: '36px',
    margin: '0px 0px'
  };
 
  const iconStyle = { color: 'white' };
 
  return (
    <Buttons>
      <SocialMediaButtons links={links} buttonStyle={buttonStyle} iconStyle={iconStyle} />
    </Buttons>
  );
}

export default SocialButtons;