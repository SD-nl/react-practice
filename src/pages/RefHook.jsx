//use ref is use to access the dom element directly and manipulate it
import React, { useRef, useState } from "react";

const RefHook = () => {
  const inputRef = useRef();
  // console.log(inputRef);

  const reset = () => {
    setName("");
    inputRef.current.focus();
  };

  const ColorChanger = () => {
    inputRef.current.style.backgroundColor = "red";
    inputRef.current.style.color = "white";
  };
  const [name, setName] = useState("subham");
  return (
    <div>
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-5xl font-bold mb-5">Use Ref</h1>

        <div className="">
          <input
            ref={inputRef}
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            name=""
            id=""
          />
        </div>
        <button
          className="bg-black text-white rounded-lg px-3 my-5 hover:bg-slate-400 hover:text-black"
          onClick={reset}
        >
          Reset
        </button>

        <button
          className="bg-gray-600 text-white rounded-lg px-3 "
          onClick={ColorChanger}
        >
          Color Change
        </button>
      </div>
    </div>
  );
};

export default RefHook;
