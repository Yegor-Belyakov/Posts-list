import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import React from "react";
import About from "./pages/About";
import Posts from "./pages/Post";
import Navbar from "./components/UI/Navbar/Navbar";
import Error from "./pages/Error";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="*" element={<Error />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
