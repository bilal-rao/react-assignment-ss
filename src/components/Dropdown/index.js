import React from "react";
import { Form } from "react-bootstrap";

const DropDown = ({ label, options }) => {
  return (
    <div className="selection_picker">
      <Form.Group controlId="selection_picker">
        <Form.Label>{label}</Form.Label>
        <Form.Select aria-label="Floating label select example">
          {options?.map((item, index) => {
            return (
              <option key={index} value={item.value}>
                {item.name}
              </option>
            );
          })}
        </Form.Select>
      </Form.Group>
    </div>
  );
};

export default DropDown;