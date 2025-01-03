import React, { useMemo, useState } from "react";

const Memo = () => {
  const [additon, setAdditon] = useState(0);
  const [subtraction, setSubtraction] = useState(50);

  const multiply = useMemo(() => {
    console.log("*******");
    return additon * 5;
  }, [additon]);

  return (
    <div>
      <div className="flex justify-center flex-col">
        <h1 className="text-5xl font-bold mb-5">Use Memo</h1>
        <p className="font-mono">{multiply}</p>

        <p className="font-mono">additon value: {additon}</p>
        <p className="font-mono">subtraction value: {subtraction}</p>
        <div className="flex gap-6">
          <button
            className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setAdditon(additon + 1)}
          >
            ADD
          </button>
          <button
            className="bg-red-500  hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setSubtraction(subtraction - 1)}
          >
            Sub
          </button>
        </div>
      </div>
    </div>
  );
};

export default Memo;
