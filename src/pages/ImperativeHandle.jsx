import React from "react";
import Parent from "../components/ImpHandle/Parent";

const ImperativeHandle = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-5xl font-bold mb-5">Use ImperativeHandle</h1>

      <Parent />
    </div>
  );
};

export default ImperativeHandle;
