import { useState } from "react";
import Register from "./register.jsx";
import Login from "./login.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Skill from "./rolechoose.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/register" element={<Register />} />
          <Route path="/chooseskill" element={<Skill />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
