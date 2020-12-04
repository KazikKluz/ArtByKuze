import React from "react";

import "./homepage.styles.scss";

import SlideShow from "../components/slideshow/slideshow.component";
import Main from "../components/main/main.component";
import Header from "../components/header/header.component";

const HomePage = () => (
  <div className="homepage">
    <Header />
    <SlideShow />
    <Main />
  </div>
);

export default HomePage;
