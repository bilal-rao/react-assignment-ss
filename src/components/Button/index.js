import React from "react";
import { Button } from "react-bootstrap";

const ButtonComponent = (props) => {
  return (
    <div className="filter_submit">
      <Button variant="secondary">
        <span>
          <img src={require("assets/search.png")}></img>
        </span>
        {props.name}
      </Button>
    </div>
  );
};

export default ButtonComponent;
