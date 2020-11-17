import React from "react";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./home-carousel.styles.scss";

const HomeCarousel = () => {
  return (
    <Carousel
      infiniteLoop
      autoPlay
      showThumbs={false}
      showStatus={false}
      showArrows={false}
      showIndicators={false}
      stopOnHover={false}
    >
      <div className="image-container">
        <img
          id="test"
          width="1200"
          src="https://picsum.photos/1800/1201"
          alt=""
        />
      </div>
      <div className="image-container">
        <img id="test" src="https://picsum.photos/1800/1200" alt="" />
      </div>
      <div className="image-container">
        <img id="test" src="https://picsum.photos/1800/1199" alt="" />
      </div>
    </Carousel>
  );
};

export default HomeCarousel;
