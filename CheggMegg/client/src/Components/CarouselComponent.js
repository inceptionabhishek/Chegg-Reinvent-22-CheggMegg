import React from "react";
import { Carousel } from "react-bootstrap";
import cover1 from "../Images/Cover1.jpeg";
import cover2 from "../Images/Cover2.jpeg";
function CarouselComponent() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={cover1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={cover2}
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
