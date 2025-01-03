import React, { useRef } from "react";
import Child from "./Child";

const Parent = () => {
  const ref = useRef();
  const temp = () => {
    console.log(ref, "this is ref");
  };
  console.log(ref);

  return (
    <>
      <h1>Parent Component</h1>
      <Child ref={ref} />
      <button
        className="bg-orange-700 text-white p-2 my-5 rounded-md"
        onClick={() => {
          ref.current.SayHi();
        }}
      >
        Click From Parent Component
      </button>
    </>
  );
};

export default Parent;
