import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className="main flex w-full justify-between items-center h-16 mb-6 ">
        <div className="left">Logo</div>
        <div className="right">
          <ul className="flex gap-8">
            <li className="bg-orange-600 hover:bg-lime-600 text-white rounded-full px-3 py-[2px]">
              <Link to="/">State</Link>
            </li>
            <li className="bg-orange-600 hover:bg-lime-600 text-white rounded-full px-3 py-[2px]">
              <Link to="/about">Effect</Link>
            </li>

            <li className="bg-orange-600 hover:bg-lime-600 text-white rounded-full px-3 py-[2px]">
              <Link to="/reduce">Reduce</Link>
            </li>
            <li className="bg-orange-600 hover:bg-lime-600 text-white rounded-full px-3 py-[2px]">
              <Link to="/ref">Ref</Link>
            </li>
            <li className="bg-orange-600 hover:bg-lime-600 text-white rounded-full px-3 py-[2px]">
              <Link to="/imp">Imperative</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Nav;
