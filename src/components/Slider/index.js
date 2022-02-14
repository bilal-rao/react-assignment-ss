import React from "react";
import img1 from "assets/header-slider1.jpg";
import img2 from "assets/header-slider2.jpg";
import img3 from "assets/header-slider3.jpg";
import { Carousel } from "react-bootstrap";

const Slider = () => {
  return (
    <Carousel
      indicators={false}
      prevIcon=""
      nextIcon=""
      nextLabel=""
      fade={true}
      interval={5000}
    >
      <Carousel.Item>
        <img src={img1} width={"100%"} alt="Img1" />
        <Carousel.Caption>
          <div className="header_carousel_title">
            <h1 className="title_main">
              Escape <br className="d-none d-md-block" /> the ordinary
            </h1>
            <h3 className="title_sub">
              {" "}
              Stay with us in your favorite neighborhoods around the world.
            </h3>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={img2} width={"100%"} alt="Img2" />
        <Carousel.Caption>
          <div className="header_carousel_title">
            <h1 className="title_main">
              Escape <br className="d-none d-md-block" /> the ordinary
            </h1>
            <h3 className="title_sub">
              {" "}
              Stay with us in your favorite neighborhoods around the world.
            </h3>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={img3} width={"100%"} alt="Img3" />
        <Carousel.Caption>
          <div className="header_carousel_title">
            <h1 className="title_main">
              Escape <br className="d-none d-md-block" /> the ordinary
            </h1>
            <h3 className="title_sub">
              {" "}
              Stay with us in your favorite neighborhoods around the world.
            </h3>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
