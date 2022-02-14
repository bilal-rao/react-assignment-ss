import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import img1 from "assets/featured-slide1.png";
import img2 from "assets/featured-slide2.png";
import img3 from "assets/featured-slide3.png";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const items = [
  <div className="item" data-value="1">
    <b>
      from <span>AED 363</span> / night
    </b>
    <img src={img1} alt="Img1" />
    <div className="item-content">
      <h3> Radiant 1BDR | Dubai JBR | Beach | Netflix</h3>
      <p>
        Dubai<span></span>4 guest
      </p>
    </div>
  </div>,
  <div className="item" data-value="2">
    <b>
      from <span>AED 2,549</span> / night
    </b>
    <img src={img2} alt="Img2" />
    <div className="item-content">
      <h3>Spectacular 4 BDR Palm Villa | Beach | Private Pool</h3>
      <p>
        Dubai<span></span>4 guest
      </p>
    </div>
  </div>,
  <div className="item" data-value="3">
    <b>
      from <span>AED 514</span> / night
    </b>
    <img src={img3} alt="Img3" />
    <div className="item-content">
      <h3>Wonderful 2BDR | Dubai JBR | Beach | Netflix Copy</h3>
      <p>
        Dubai<span></span>4 guest
      </p>
    </div>
  </div>,
  <div className="item" data-value="4">
    <b>
      from <span>AED 2,549</span> / night
    </b>
    <img src={img1} alt="Img1" />
    <div className="item-content">
      <h3>Spectacular 4 BDR Palm Villa | Beach | Private Pool</h3>
      <p>
        Dubai<span></span>4 guest
      </p>
    </div>
  </div>,
  <div className="item" data-value="5">
    <b>
      from <span>AED 2,549</span> / night
    </b>
    <img src={img1} alt="Img1" />
    <div className="item-content">
      <h3>Spectacular 4 BDR Palm Villa | Beach | Private Pool</h3>
      <p>
        Dubai<span></span>4 guest
      </p>
    </div>
  </div>,
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slidePrev = () => {
    activeIndex == 0
      ? setActiveIndex(items.length - 1)
      : setActiveIndex(activeIndex - 2);
  };

  const slideNext = () => {
    activeIndex == items.length - 1
      ? setActiveIndex(0)
      : setActiveIndex(activeIndex + 2);
  };
  return (
    <div className="grid grid-cols-3">
      <div className="btn-container">
        <span className="btn-prev">
          <img
            className="px-8"
            onClick={slidePrev}
            src={require("assets/left.png")}
          ></img>
        </span>
        <span className="btn-next">
          <img
            className="px-8"
            onClick={slideNext}
            src={require("assets/right.png")}
          ></img>
        </span>
      </div>
      <div className="col-span-3 px-10">
        <AliceCarousel
          mouseTracking
          disableDotsControls
          disableButtonsControls
          activeIndex={activeIndex}
          items={items}
          responsive={responsive}
          controlsStrategy="responsive"
          autoPlay={false}
          infinite={true}
          keyboardNavigation={true}
        />
      </div>
    </div>
  );
};

export default Carousel;
