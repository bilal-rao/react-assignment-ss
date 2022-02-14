import React from "react";
import { Form } from "react-bootstrap";
import DateRangePicker from "react-bootstrap-daterangepicker";

const DatePicker = () => {
  const onApply = (event, picker) => {
    console.log(event.target.value);
  };
  const handleCancel = (event, picker) => {
    picker.element.val("");
  };
  const handleEvent = (event, picker) => {
    console.log(picker.startDate);
  };
  const handleCallback = (start, end, label) => {
    console.log(start, end, label);
  };
  return (
    <div className="filter_dates">
      <Form.Group controlId="range_picker">
        <Form.Label>DATES</Form.Label>
          <DateRangePicker
            initialSettings={{
              autoUpdateInput: false,
              locale: {
                cancelLabel: "Clear",
              },
            }}
            onApply={onApply}
            onCancel={handleCancel}
            onEvent={handleEvent}
            onCallback={handleCallback}
          >
            <input placeholder="Select Dates" />
          </DateRangePicker>
      </Form.Group>
    </div>
  );
};

export default DatePicker;
