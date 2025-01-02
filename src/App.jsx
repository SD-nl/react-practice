import React from "react";
import Nav from "./components/Nav";
import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ReducerHook from "./pages/ReducerHook";
import RefHook from "./pages/RefHook";
import Footer from "./components/Footer";
import ImperativeHandle from "./pages/ImperativeHandle";

const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/reduce" element={<ReducerHook />} />
        <Route path="/ref" element={<RefHook />} />
        <Route path="/imp" element={<ImperativeHandle />} />
      </Routes>
    </div>
  );
};

export default App;
