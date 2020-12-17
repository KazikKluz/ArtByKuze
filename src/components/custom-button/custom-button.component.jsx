import React from "react";

import { TheButton } from "./custom-button.styles.js";

const CustomButton = ({ title, animated }) => (
  <TheButton animated={animated}>{title}</TheButton>
);

export default CustomButton;
