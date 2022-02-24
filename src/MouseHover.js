import React from "react";
import UpdateCounter from "./UpdateCounter";

function MouseHover(props) {
  const { count, incrementCounter } = props;

  return (
    <div>
      <h1 onMouseOver={incrementCounter}>on mouse hover {count} time</h1>
    </div>
  );
}
export default UpdateCounter(MouseHover);
