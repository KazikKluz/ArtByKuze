import React from "react";

import { HomepageContainer } from "./homepage.styles.js";

import SlideShow from "../components/slideshow/slideshow.component";
import Main from "../components/main/main.component";
import Header from "../components/header/header.component";

const HomePage = () => (
  <HomepageContainer>
    <Header />
    <SlideShow />
    <Main />
  </HomepageContainer>
);

export default HomePage;
