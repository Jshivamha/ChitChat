import React from "react";



import { BrowserRouter, Routes, Route } from "react-router";
import ChatArea from "./home/ChatArea/ChatArea";
import SignUp from "./components/SignUp";
import Login from "./components/Login";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ChatArea/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<Login/>} />

      </Routes>
    </div>
  );
};

export default App;
