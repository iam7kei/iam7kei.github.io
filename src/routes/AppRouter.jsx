import React from "react";
import {
  createBrowserRouter,
  BrowserRouter, Routes, Route
} from "react-router-dom";
import Home from "../pages/home/index";
import _404 from "../pages/error/_404";
import About from "../pages/about"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
]);

const AppRouter = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<_404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
