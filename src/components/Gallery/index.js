import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import heart from "assets/heart.svg";
import pin from "assets/pin.svg";
import rose from "assets/rose.svg";
import perfect from "assets/perfect.svg";

const Gallery = () => {
  return (
    <Container>
      <Row>
        <Col className="col-md-5 col-12 gallery-item">
          <img
            className="img-fluid"
            src={require("assets/gallery-1.png")}
          ></img>
          <div className="gallery-text">
            <h3>
              <span>
                <img src={heart}></img>
              </span>
              <span>Beyond Living</span>
            </h3>
            <p>
              Modern and fresh, our spaces are outfitted with comfort and style,
              be it for a quick getaway to a long term stay.
            </p>
          </div>
        </Col>

        <Col className="col-md-7 col-12 gallery-item">
          <img
            className="img-fluid"
            src={require("assets/gallery-2.png")}
          ></img>
          <div className="gallery-text inverse-gallery">
            <h3>
              <span>
                <img src={pin}></img>
              </span>
              <span>Prime Locations</span>
            </h3>
            <p>
              Breathtaking views in convenient and sought after locations, a
              little something for everyone.
            </p>
          </div>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col className="col-md-7 col-12 gallery-item">
          <img
            className="img-fluid"
            src={require("assets/gallery-3.png")}
          ></img>
          <div className="gallery-text">
            <h3>
              <span>
                <img src={rose}></img>
              </span>
              <span>Nullam efficitur turpis</span>
            </h3>
            <p>
              Phasellus fermentum tellus vitae ante vehicula posuere. Curabitur
              metus metus, feugiat non semper lacinia, maximus sit amet ligula.
              Proin dictum quis ipsum.
            </p>
          </div>
        </Col>

        <Col className="col-md-5 col-12 gallery-item">
          <img
            className="img-fluid"
            src={require("assets/gallery-4.png")}
          ></img>
          <div className="gallery-text inverse-gallery">
            <h3>
              <span>
                <img src={perfect}></img>
              </span>
              <span>A Signature of Excellence</span>
            </h3>
            <p>
              24/7 guest concierge, seamless check-in and immaculate
              cleanliness, always a flawless stay.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Gallery;
