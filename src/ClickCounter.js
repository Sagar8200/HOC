import React from "react";
import UpdateCounter from "./UpdateCounter";

function ClickCounter(props) {
  const { count, incrementCounter } = props;

  return (
    <div>
      <button onClick={incrementCounter}>Click {count} times</button>
    </div>
  );
}
export default UpdateCounter(ClickCounter);
