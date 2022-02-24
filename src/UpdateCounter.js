import React from "react";

export default function UpdateCounter(OriginalCounter) {
  const NewCounter = () => {
    const [count, setCount] = React.useState(0);
    const incrementCounter = () => {
      setCount(count + 1);
    };
    return (
      <OriginalCounter count={count} incrementCounter={incrementCounter} />
    );
  };
  return NewCounter;
}
