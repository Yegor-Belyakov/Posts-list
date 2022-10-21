import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import React from "react";
import About from "./pages/About";
import Posts from "./pages/Post";
import Navbar from "./components/UI/Navbar/Navbar";
import Error from "./pages/Error";
import PostIdPage from "./pages/PostIdPage";
import { privatRoutes, publicRoutes } from "./router/routes";

function App() {
  const isAuth = true;
  return isAuth ? (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* <Route path="/about" element={<About />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/posts/:id" element={<PostIdPage />} />
      <Route path="*" element={<Error />} /> */}
        {privatRoutes.map((route) => (
          <Route
            element={route.element}
            path={route.path}
            exact={route.exact}
            key={route.element}
          />
        ))}
      </Routes>
    </BrowserRouter>
  ) : (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* <Route path="/about" element={<About />} />
    <Route path="/posts" element={<Posts />} />
    <Route path="/posts/:id" element={<PostIdPage />} />
    <Route path="*" element={<Error />} /> */}
        {publicRoutes.map((route) => (
          <Route
            element={route.element}
            path={route.path}
            exact={route.exact}
            key={route.element}
          />
        ))}
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
