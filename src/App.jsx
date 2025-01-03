import React from "react";
import Nav from "./components/Nav";
import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ReducerHook from "./pages/ReducerHook";
import RefHook from "./pages/RefHook";
import Footer from "./components/Footer";
import ImperativeHandle from "./pages/ImperativeHandle";
import LayoutEffec from "./pages/LayoutEffec";
import Use_idHook from "./pages/Use_idHook";
import Memo from "./pages/Memo";
import Use_CallBack from "./pages/Use_CallBack";
import ActionStateForm from "./pages/ActionStateForm";

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
        <Route path="/le" element={<LayoutEffec />} />
        <Route path="/useID" element={<Use_idHook />} />
        <Route path="/memo" element={<Memo />} />
        <Route path="/useCB" element={<Use_CallBack />} />
        <Route path="/form" element={<ActionStateForm />} />
      </Routes>
    </div>
  );
};

export default App;
