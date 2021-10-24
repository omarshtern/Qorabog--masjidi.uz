import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import madina from './assets/madina.jpg'

export const Carusel = () => {
  return (
    <div>
      <Carousel autoPlay >
        <div style={{width: '1000px', }}>
          <img src={madina} />
          <p className="legend">Legend 1</p>
        </div>
        <div style={{width: '1000px'}}>
          <img src={madina} />
          <p className="legend">Legend 2</p>
        </div>
        <div style={{width: '1000px', }}>
          <img src={madina} />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  );
};
