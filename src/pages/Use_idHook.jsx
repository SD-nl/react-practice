import React, { useId, useDebugValue } from "react";

const Use_idHook = () => {
  const id = useId();
  const name = useId();
  const number = useId();

  useDebugValue(id, id => `ID: ${id}`);
  useDebugValue(name, name => `Name ID: ${name}`);
  useDebugValue(number, number => `Number ID: ${number}`);

  return (
    <div>
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-5xl font-bold mb-5">Use ID</h1>

        <p className="text-lg font-mono">unique id: {id}</p>
        <p className="text-lg font-mono">unique id2: {name}</p>
        <p className="text-lg font-mono">unique id3: {number}</p>
      </div>
      ;
    </div>
  );
};

export default Use_idHook;