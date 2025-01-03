import React, { useEffect, useLayoutEffect } from "react";
import { use } from "react";

const LayoutEffec = () => {
  //here useLayoutEffect is use after useEffect but it will run first
  useEffect(() => {
    console.log("first ");
  });

  useEffect(() => {
    console.log("second ");
  });

  useLayoutEffect(() => {
    console.log("third ");
  });
  return (
    <div>
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-5xl font-bold mb-5">Use LayoutEffect</h1>
        <p>➡️to see output open console</p>
      </div>
    </div>
  );    
};

export default LayoutEffec;
