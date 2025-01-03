import React from "react";

const ActionStateForm = () => {

    // const 
  return (
    <div>
      <div className="flex justify-center items-center mt-10 flex-col">
        <h1 className="text-5xl font-bold mb-5">Use ActionStateForm</h1>

        <form action=""  className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter your name"
            className="p-2 border-2 border-gray-300"
          />
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 border-2 border-gray-300"
          />
          <input
            type="password"
            placeholder="Enter your password"
            className="p-2 border-2 border-gray-300"
          />
          <button className="bg-blue-500 text-white p-2 rounded-md">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ActionStateForm;
