import React, { useEffect, useState } from "react";
import { Row, Col, Form } from "react-bootstrap";

const GuestSelector = () => {
  let [noOfGuests, setNoOfGuests] = useState(0);
  let [disabled, setButtonDisable] = useState(false);

  const addGuest = (e) => {
    e.preventDefault();
    setNoOfGuests(noOfGuests + 1);
  };
  const subGuest = (e) => {
    e.preventDefault();
    setNoOfGuests(noOfGuests - 1);
  };

  useEffect(() => {
    if (noOfGuests < 1) {
      setButtonDisable(true);
    } else {
      setButtonDisable(false);
    }
  }, [noOfGuests]);

  return (
    <Row className="filter_guests">
      <Col>
        <Form.Group controlId="filter_guests">
          <Form.Label>GUESTS</Form.Label>
          <Form.Text className="text-muted">
            <span className="filter_guests_text">
              {noOfGuests ? `${noOfGuests} guests ` : "Add guests"}
            </span>
          </Form.Text>
        </Form.Group>
      </Col>
      <Col>
        <span className="filter_guests_buttons">
          <button disabled={disabled} onClick={subGuest}>
            <span>-</span>
          </button>
          <button onClick={addGuest}>
            <span>+</span>
          </button>
        </span>
      </Col>
    </Row>
  );
};

export default GuestSelector;

{
  /* <Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label>Email address</Form.Label>
  <Form.Control type="email" placeholder="Enter email" />
  <Form.Text className="text-muted">
    We'll never share your email with anyone else.
  </Form.Text>
</Form.Group>; */
}
