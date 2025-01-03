import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className="main flex  w-full justify-between items-center mt-5 lg:h-16 mb-6 ">
        <div className="left w-[30%]">Logo</div>
        <div className="right w-[70%]">
          <ul className="flex flex-wrap gap-8">
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
            <li className="bg-orange-600 hover:bg-lime-600 text-white rounded-full px-3 py-[2px]">
              <Link to="/le">LayoutEffect</Link>
            </li>
            <li className="bg-orange-600 hover:bg-lime-600 text-white rounded-full px-3 py-[2px]">
              <Link to="/useID">UseID</Link>
            </li>
            <li className="bg-orange-600 hover:bg-lime-600 text-white rounded-full px-3 py-[2px]">
              <Link to="/memo">UseMemo</Link>
            </li>
            <li className="bg-orange-600 hover:bg-lime-600 text-white rounded-full px-3 py-[2px]">
              <Link to="/useCB">Use CB</Link>
            </li>
            <li className="bg-orange-600 hover:bg-lime-600 text-white rounded-full px-3 py-[2px]">
              <Link to="/form">Use ActionStateForm</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Nav;
