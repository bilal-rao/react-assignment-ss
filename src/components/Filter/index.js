import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

import CitySelector from "components/Dropdown/index.js";
import DateSelector from "components/DatePicker/index.js";
import GuestSelector from "components/GuestSelector/index.js";
import Submit from "components/Button/index.js";

//constants
import { cities_lists } from "constants/index";

const Filter = () => {
  return (
    <Container className="homepage_filter_area">
      <Form>
        <Row className="filter_area">
          <Col className="col-md-3 col-12">
            <CitySelector label="CITY" options={cities_lists} />
          </Col>
          <Col className="col-md-3 col-12">
            <DateSelector />
          </Col>
          <Col className="col-md-3 col-12">
            <GuestSelector />
          </Col>
          <Col className="col-md-3 col-12">
            <Submit name="Search" />
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default Filter;

