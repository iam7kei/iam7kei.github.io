import React from "react";
import {
  createBrowserRouter,
  BrowserRouter, Routes, Route
} from "react-router-dom";
import Home from "../pages/home/index";
import DefaultLayout from "../components/layouts";

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
          <Route index element={<Home/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
