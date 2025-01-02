import React, { useState } from "react";

const Home = () => {
  const [count, setCount] = useState(0);
  const [msg, setMsg] = useState("");

  const IncHandler = () => {
    setCount(count + 1);
    setMsg("");
  };

  const DecHandler = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setMsg("Counter is Zero can't decrement below zero");
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-5xl font-bold mb-5">Use State</h1>
        <p className="text-xl">
          Counter :<span> {count}</span>
        </p>

        <p className="text-yellow-500 font-mono">{msg}</p>
        <div className="flex gap-8 my-6 ">
          <button
            className="bg-white  px-2 rounded-full py-1 font-mono text-pink-500  hover:text-green-600"
            onClick={IncHandler}
          >
            Inc +
          </button>
          <button
            className="bg-white  px-2 rounded-full py-1 font-mono text-pink-500  hover:text-red-600"
            onClick={DecHandler}
          >
            Dec -
          </button>
        </div>
      </div>

      <hr className="h-[2px] bg-black" />
    </div>
  );
};

export default Home;
