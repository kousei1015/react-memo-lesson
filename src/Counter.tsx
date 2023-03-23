import React, { memo } from "react";
import { useState } from "react";

const Counter = memo(() => {

  console.log("renderd Counter Component")

  const [count, setCount] = useState(0);

  const increseCount = () => {
    setCount(count + 1)
  }

  const decreseCount = () => {
    setCount(count - 1)
  }

  return (
    <div style={{margin: "2rem"}}>
      <h1>{count}</h1>
      <button onClick={increseCount}>+</button>
      <button onClick={decreseCount}>-</button>
    </div>
  );
})

export default Counter;
