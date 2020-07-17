import React from "react";
import { Button } from "react-bootstrap";

function Filter(props) {
  return (
    <div>
      <Button
        variant="secondary"
        onClick={() => {
          props.onClick("");
        }}
      >
        show all
      </Button>{" "}
      <Button
        variant="success"
        onClick={() => {
          props.onClick("completed");
        }}
      >
        completed
      </Button>{" "}
      <Button
        variant="warning"
        onClick={() => {
          props.onClick("incompleted");
        }}
      >
        incompleted
      </Button>
    </div>
  );
}
export default Filter;
