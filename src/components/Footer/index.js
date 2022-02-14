import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "assets/logo.svg";
import SocialLinks from "components/SocialLinks";

const Footer = () => {
  return (
    <footer className="text-center text-lg-start main-footer" id="footer">
      <Container fluid="md">
        <Row className="mb-md-5 mb-2">
          <Col>
            <img src={logo}></img>
          </Col>
        </Row>
        <Row className="footer-links ms-0">
          <Col className="col-md-2 col-sm-12 col-12">
            <ul>
              <li>About</li>
              <li>
                <a href="">Find a Stella</a>
              </li>
              <li>
                <a href="">Who we are</a>
              </li>
              <li>
                <a href="">Help center</a>
              </li>
              <li>
                <a href="">Lease to Stella Stays</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
            </ul>
          </Col>
          <Col className="col-md-2 col-sm-12 col-12">
            <ul>
              <li>Cities</li>
              <li>
                <a href="">Dubai</a>
              </li>
              <li>
                <a href="">Montreal</a>
              </li>
              <li>
                <a href="">Manama</a>
              </li>
            </ul>
          </Col>
          <Col className="col-md-2 col-sm-12 col-12">
            <ul>
              <li>Contact Us</li>
              <li>
                <a href="">WhatsApp</a>
              </li>
              <li>
                <a href="">Email</a>
              </li>
            </ul>
          </Col>
          <Col className="col-md-6 col-sm-12 col-12">
            <ul>
              <li>Download</li>
              <li>
                <SocialLinks isPT={false} isPD={false} />
              </li>
            </ul>
          </Col>
        </Row>
        <hr />

        <Row className="ms-0">
          <Col className="col-md-8 col-sm-12 col-12 footer-terms">
            <ul>
              <li>Copyright © 2021 StellaStays Inc. All rights reserved.</li>
              <li>
                <a href="">Terms and conditions</a>
              </li>
              <li>
                <a href="">Privacy policy</a>
              </li>
            </ul>
          </Col>
          <Col className="col-md-4 col-sm-12 col-12 footer-socials">
            <ul className="float-end">
              <li>
                <a href="">
                  <img src={require("assets/linkedin.png")}></img>
                </a>
              </li>
              <li>
                <a href="">
                  <img src={require("assets/facebook.png")}></img>
                </a>
              </li>
              <li>
                <a href="">
                  <img src={require("assets/insta.png")}></img>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
