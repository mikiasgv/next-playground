"use client";

import React, { useReducer, useState } from "react";
import counterReducer from "./counterReducer";

const CounterPage = () => {
  const [value, dispatch] = useReducer(counterReducer, 0);

  return (
    <div className="flex flex-col w-full h-[100%] mt-10 space-y-3 justify-center items-center">
      <div className="w-full flex items-center justify-center font-semibold text-[56px]">{` ${value}`}</div>
      <button
        className="bg-lime-900 w-96 p-4 text-white"
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        Increment
      </button>
      <button
        className="bg-lime-900 w-96 p-4 text-white"
        onClick={() => dispatch({ type: "RESET" })}
      >
        Reset
      </button>
    </div>
  );
};

export default CounterPage;
