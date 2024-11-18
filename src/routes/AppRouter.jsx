import React from "react";
import {
  createBrowserRouter,
  BrowserRouter, Routes, Route
} from "react-router-dom";
import Home from "../pages/home/index";
import DefaultLayout from "../components/layouts";
import _404 from "../pages/error/_404";

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
        <Route path="/" element={<Home />} >
          <Route index element={<Home />} />
        </Route>
        <Route path="*" element={<_404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
