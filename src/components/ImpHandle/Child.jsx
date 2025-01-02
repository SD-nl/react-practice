import React, { forwardRef, useImperativeHandle, useState } from "react";

const Child = (props, ref) => {
  const [dets, setDets] = useState("");

  const SayHi = () => {
    console.log("Hi From Child Component");
    setDets("Hi From Child Component");
  };

  useImperativeHandle(ref, () => ({
    SayHi,
  }));

  return (
    <div>
      <h1>Child Component</h1>
      <p>{dets}</p>
    </div>
  );
};

export default forwardRef(Child);
