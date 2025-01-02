import React, { useReducer } from "react";

const ReducerHook = () => {
  const initialState = 0;
  const reducer = (state, action) => {
    if (state === 0 && action === "decrement") {
      return state;
    } else {
      switch (action) {
        case "increment":
          return state + 1;
        case "decrement":
          return state - 1;
        default:
          return state;
      }
    }
  };

  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-5xl font-bold mb-5">Use Reducer</h1>

        <p className="font-mono my-4">{count}</p>
        <div className="flex gap-6">
          <button
            className="bg-white  px-2 rounded-full py-1 font-mono hover:text-pink-500  text-green-600"
            onClick={() => dispatch("increment")}
          >
            Increment +
          </button>
          <button
            className="bg-white  px-2 rounded-full py-1 font-mono hover:text-pink-500  text-red-600"
            onClick={() => dispatch("decrement")}
          >
            Decrement -
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReducerHook;
