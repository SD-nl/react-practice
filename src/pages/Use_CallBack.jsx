import React, { useState, useCallback } from "react";

const Use_CallBack = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log(`Current count: ${count}`);
  }, [count]);

  return (
    <div>
      <div className="flex justify-center items-center mt-10 flex-col">
        <h1 className="text-5xl font-bold mb-5">Use CallBack</h1>

        <div className="">
          <button
            className="mt-5 px-4 py-2 bg-blue-500 text-white rounded"
            onClick={() => {
              setCount(count + 1);
              handleClick();
            }}
          >
            Increment Count
          </button>
          <p className="text-lg font-mono mt-2">Count: {count}</p>
        </div>
      </div>
    </div>
  );
};

export default Use_CallBack;
