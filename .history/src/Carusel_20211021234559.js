import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export const Carusel = () => {
  return (
    <div>
      <Carousel>
        <div style={{height: 300, width: 200}}>
          <img src="assets/1.jpeg" />
          <p className="legend">Legend 1</p>
        </div>
        <div style={{height: 300, width: 200}}>
          <img src="assets/2.jpeg" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="assets/3.jpeg" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  );
};
