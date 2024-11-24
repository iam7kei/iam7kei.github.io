import React from "react";
import Navbar from "../nav";
import { Helmet } from "react-helmet";

const DEFAULT_TITLE = "Dyniel Cataluña"

function DefaultLayout({ children, title = DEFAULT_TITLE }) {
  
  const renderTitle = () => {
    if (title == DEFAULT_TITLE) {
      return title
    }

    return `${title} | ${DEFAULT_TITLE}`
  }

  return (
    <div>
      <Helmet>
        <title>{renderTitle()}</title>
      </Helmet>
      <Navbar />
      <div className="container">
          {children}
      </div>
    </div>
  );
}

export default DefaultLayout