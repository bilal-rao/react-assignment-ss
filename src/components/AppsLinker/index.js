import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import Rating from "components/Rating/index";
import SocialLinks from "components/SocialLinks";
const AppsLinker = () => {
  return (
    <div className="stretch-container mb-5">
      <Container className="app-linker_section">
        <div className="apps-linker">
          <Row>
            <Col lg={5}>
              <div className="apps-linker_main-heading">
                Duis aute irure dolor in <br /> reprehenderit in voluptate
              </div>
              <div className="apps-linker_sub-heading">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui <br /> officia deserunt mollit anim id est laborum.
              </div>
              <div className="apps-linker_amenities">
                <ListGroup>
                  <ListGroup.Item>
                    <span>
                      <img src={require("assets/user.png")}></img>
                    </span>{" "}
                    Sagittis vitae et leo duis ut diam quam nulla.{" "}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <span>
                      <img src={require("assets/wifi.png")}></img>
                    </span>{" "}
                    Faucibus pulvinar elementum integer enim neque volutpat ac
                    tincidunt vitae.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <span>
                      <img src={require("assets/pin.png")}></img>
                    </span>{" "}
                    Viverra adipiscing at in tellus integer feugiat scelerisque
                    varius.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    {" "}
                    <span>
                      <img src={require("assets/grid.png")}></img>
                    </span>{" "}
                    Elementum curabitur vitae nunc.
                  </ListGroup.Item>
                </ListGroup>
              </div>
              <hr className="mt-3 mb-3" />
              <Row>
                <Col>
                  <div className="apps-linker_rating">
                    <div className="rating-wrapper d-flex gap-1">
                      <Rating stars={5} />
                    </div>
                    <div className="rating-helperText mt-1">
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui.
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <SocialLinks isPT={true} isPD={true} />
                </Col>
              </Row>
            </Col>
            <Col lg={7}>
              <Row>
                <Col sm={6} />
                <Col sm={6}>
                  <div className="iphone-wrapper">
                    <img
                      className="img-fluid"
                      src={require("assets/iphone.png")}
                    ></img>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default AppsLinker;
