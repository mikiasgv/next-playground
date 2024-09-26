"use client";

import React, { useState } from "react";

const CounterPage = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="flex flex-col w-full mt-10 space-y-3">
      <div>{` ${count}`}</div>
      <button onClick={increment}>Increment</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default CounterPage;
