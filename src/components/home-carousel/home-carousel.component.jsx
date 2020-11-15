import React from "react";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";

const HomeCarousel = () => (
  <Carousel>
    <div>
      <img src="https://picsum.photos/1100/999" alt="" />
      <p className="legend">Legend 1</p>
    </div>
    <div>
      <img src="https://picsum.photos/1100/999" alt="" />
      <p className="legend">Legend 2</p>
    </div>
    <div>
      <img src="https://picsum.photos/1100/999" alt="" />
      <p className="legend">Legend 3</p>
    </div>
  </Carousel>
);

export default HomeCarousel;
