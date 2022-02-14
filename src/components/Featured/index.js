import React from "react";
import FeaturedCarousel from "components/multiCarousel/index";

const Featured = () => {
  return (
    <section>
      <div className="featured-stays">
        <h2 className="homepage-section-title">Featured stays</h2>
        <p className="homepage-section-subtitle">
          Beachfront villas to high rise apartments and penthouses,
          <br />
          experience your next stay with
          <b> Stella.</b>
        </p>
        <div className="featured-stays_slider">
          <FeaturedCarousel />
        </div>
      </div>
    </section>
  );
};

export default Featured;
