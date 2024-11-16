import React from "react";
import Navbar from "../nav";

function DefaultLayout({children}) {
  console.log(children)
  return (
    <div>
      <Navbar />
      <div className="container">
          {children}
      </div>
    </div>
  );
}

export default DefaultLayout
